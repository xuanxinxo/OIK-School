export type ChatTurn = { role: "user" | "assistant"; content: string };

export async function sendChat(messages: ChatTurn[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    // Try to read a structured error if any, else return a friendly fallback
    try {
      const data = await res.json();
      const msg = (data && (data.reply || data.error)) as string | undefined;
      return (
        msg ||
        "Xin lỗi, hiện hệ thống đang bận hoặc chưa được cấu hình khóa AI. Vui lòng thử lại sau hoặc liên hệ nhà trường."
      );
    } catch {
      return "Xin lỗi, hiện hệ thống đang bận hoặc chưa được cấu hình khóa AI. Vui lòng thử lại sau hoặc liên hệ nhà trường.";
    }
  }

  const data = (await res.json()) as { reply?: string };
  return data.reply ?? "";
}


