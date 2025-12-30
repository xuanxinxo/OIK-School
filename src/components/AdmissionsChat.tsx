"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { sendChat, type ChatTurn } from "@/services/chat";

type Props = {
  initialContext?: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function AdmissionsChat({ initialContext, isOpen, onClose }: Props) {
  const [messages, setMessages] = useState<ChatTurn[]>(
    initialContext
      ? [
        {
          role: "assistant",
          content:
            "Chào bạn! Mình là trợ lý tư vấn tuyển sinh. Bạn muốn tìm ngành/phương án nào?",
        },
        { role: "user", content: initialContext },
      ]
      : [
        {
          role: "assistant",
          content:
            "Chào bạn! Mình là trợ lý tư vấn tuyển sinh. Bạn đang quan tâm đến ngành hay trường nào ở Đà Nẵng?",
        },
      ]
  );

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function onSend() {
    if (!canSend) return;
    const nextMessages: ChatTurn[] = [...messages, { role: "user", content: input.trim() }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const reply = await sendChat(nextMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: "Xin lỗi, hiện hệ thống đang bận. Bạn vui lòng thử lại sau hoặc liên hệ trực tiếp với nhà trường để được tư vấn nhé!" 
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm sm:max-w-md z-50">
      <div className="rounded-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Header with gradient */}
        <div className="px-5 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-3 right-4 text-white/80 hover:text-white text-xl font-bold"
            aria-label="Đóng chat"
          >
            &times;
          </button>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold">Trợ lý tư vấn tuyển sinh</div>
              <div className="text-xs text-blue-100">Chat trực tiếp để được gợi ý phù hợp</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-blue-100 bg-blue-500/30 rounded-full px-3 py-1 text-center">
            💡 Hệ thống thông minh - Tự động phân tích câu hỏi
          </div>
        </div>

        {/* Messages area with custom scrollbar */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.role === "assistant" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm transition-all duration-200 ${
                  m.role === "assistant"
                    ? "bg-white border border-gray-200 text-gray-800"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                }`}
              >
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-gray-500">Đang soạn trả lời…</span>
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input area with improved styling */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="Nhập câu hỏi của bạn..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
              </div>
            </div>
            <button
              onClick={onSend}
              disabled={!canSend}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


