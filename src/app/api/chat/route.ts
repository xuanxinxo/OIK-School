import { NextRequest } from "next/server";

// Simple in-memory rate limiter (best-effort; resets on cold start)
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 8; // 8 requests/minute per IP
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function POST(req: NextRequest) {
  try {
    // Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const now = Date.now();
    const bucket = ipBuckets.get(ip);
    if (!bucket || now > bucket.resetAt) {
      ipBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    } else {
      bucket.count += 1;
      if (bucket.count > RATE_LIMIT_MAX) {
        return new Response(
          JSON.stringify({
            reply:
              "Bạn gửi yêu cầu quá nhanh. Vui lòng đợi một chút rồi thử lại (giới hạn 8 yêu cầu/phút).",
            code: "rate_limited",
          }),
          {
            status: 429,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }
    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages)
      ? body.messages
      : [];

    const openaiKey = process.env.OPENAI_API_KEY;
    const groqKey = process.env.GROQ_API_KEY;

    if (!openaiKey && !groqKey) {
      // Fallback câu trả lời tĩnh nếu thiếu API key
      return new Response(
        JSON.stringify({
          reply:
            "Xin chào! Hiện tại hệ thống chưa cấu hình khoá AI. Tuy nhiên bạn có thể để lại câu hỏi về tuyển sinh (ngành học, điểm chuẩn, học phí, hồ sơ...) và nhà trường sẽ liên hệ lại sớm nhất.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Gộp prompt: định hướng tư vấn tuyển sinh
    const systemPrompt: ChatMessage = {
      role: "system",
      content:
        "Bạn là chuyên viên tư vấn tuyển sinh của THPT Ông Ích Khiêm. Trả lời ngắn gọn, rõ ràng, thân thiện bằng tiếng Việt. Gợi ý ngành phù hợp dựa trên sở thích, điểm mạnh, vị trí địa lý Đà Nẵng, và đưa lời khuyên thực tế (nguồn tham khảo, cách nộp hồ sơ). Tránh hứa hẹn không có cơ sở.",
    };

    // Decide provider: prefer Groq if available (free tier friendly), else OpenAI
    const provider = groqKey ? "groq" : "openai";
    const payload = {
      model: provider === "groq" ? "llama-3.1-8b-instant" : "gpt-4o-mini",
      messages: [systemPrompt, ...messages],
      temperature: 0.4,
    } as const;

    const endpoint =
      provider === "groq"
        ? "https://api.groq.com/openai/v1/chat/completions"
        : "https://api.openai.com/v1/chat/completions";

    const auth = provider === "groq" ? groqKey! : openaiKey!;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Forward upstream error with appropriate status (e.g., 401 invalid_api_key)
      let msg = "Upstream error";
      let code: string | undefined;
      try {
        const err = await response.json();
        msg = err?.error?.message ?? JSON.stringify(err);
        code = err?.error?.code;
      } catch {
        msg = await response.text();
      }
      // Provide a friendlier message for common cases
      const friendly =
        response.status === 429
          ? "Bạn đã vượt quá hạn mức hoặc gửi quá nhanh. Vui lòng thử lại sau, hoặc kiểm tra hạn mức/billing của khóa API."
          : msg;
      return new Response(
        JSON.stringify({ reply: friendly, code: code ?? "upstream_error" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


