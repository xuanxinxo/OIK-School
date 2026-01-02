'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { sendChat, type ChatTurn } from '@/services/chat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle, X, Bot } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>([
    {
      role: 'assistant',
      content: 'Xin chào! Tôi là trợ lý ảo của trường. Tôi có thể giúp gì cho bạn?',
    },
  ]);
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
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="flex h-[600px] w-[400px] flex-col rounded-2xl border bg-white shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 p-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">Trợ lý tuyển sinh</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white rounded-tr-none'
                        : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200'
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
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1"
                disabled={loading}
              />
              <Button onClick={handleSend} disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button with Bubble Effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative flex items-center justify-center
          h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600
          text-white shadow-lg hover:shadow-xl transform hover:scale-105
          transition-all duration-300 ease-in-out focus:outline-none
          before:content-[''] before:absolute before:top-0 before:right-0
          before:w-3 before:h-3 before:bg-red-500 before:rounded-full
          before:animate-ping before:opacity-75
        `}
        aria-label="Mở trợ lý ảo"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <>
            <div className="absolute -top-2 -right-2 bg-white text-blue-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              AI
            </div>
            <MessageCircle className="h-7 w-7" />
            <span className="absolute -bottom-8 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Hỏi tôi
            </span>
          </>
        )}
      </button>
    </div>
  );
}
