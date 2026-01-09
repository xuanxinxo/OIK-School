'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { usePathname } from 'next/navigation';
import { sendChat, type ChatTurn } from '@/services/chat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle, X, Bot, Check, Lightbulb } from 'lucide-react';

export default function ChatWidget() {
  const pathname = usePathname();
  const isAdmissionsPage = pathname?.startsWith('/tuyen-sinh');
  
  // Don't render the chat widget on the admissions page
  if (isAdmissionsPage) {
    return null;
  }
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>([
    {
      role: 'assistant',
      content: 'Xin chào! Tôi là trợ lý ảo của trường. Tôi có thể giúp gì cho bạn?',
    },
  ]);
  
  const systemMessage = 'Hệ thống thông minh - Tự động phân tích câu hỏi';
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatTurn = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await sendChat([...messages, userMessage]);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-4">
      {isOpen && (
        <div className="flex h-[600px] w-[400px] flex-col rounded-2xl border bg-white shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 p-3">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-white" />
              <h3 className="text-base font-semibold text-white">Trợ lý tư vấn tuyển sinh</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 p-1 rounded-full"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* System Message */}
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full flex items-center space-x-1">
                <Lightbulb className="h-3 w-3" />
                <span>{systemMessage}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none ml-auto'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none mr-auto'
                    } shadow-sm`}
                  >
                    {typeof message.content === 'string' ? message.content : message.content.text || ''}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg bg-muted px-4 py-2">
                    Đang nhập...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập câu hỏi của bạn..."
                className="w-full py-2 pl-4 pr-12 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className={`absolute right-2 p-1.5 rounded-full transition-colors ${
                  input.trim() ? 'text-blue-600 hover:bg-blue-50' : 'text-gray-400'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button with Bubble Effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative flex items-center justify-center
          h-14 w-14 rounded-full bg-blue-600
          text-white shadow-lg hover:bg-blue-700
          transition-all duration-200 ease-in-out focus:outline-none
        `}
        aria-label="Mở trợ lý ảo"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
