'use client';

import React, { useState } from 'react';
import { useAuth } from '@/src/context/AuthContext';
import AuthGuard from '@/src/components/AuthGuard';

export default function TestPage() {
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Bài test tuyển sinh
  const questions = [
    {
      id: 1,
      question: "Bạn đã tốt nghiệp THCS chưa?",
      options: ["Đã tốt nghiệp", "Sắp tốt nghiệp trong năm nay", "Chưa tốt nghiệp", "Đã tốt nghiệp từ năm trước"]
    },
    {
      id: 2,
      question: "Điểm trung bình học kỳ gần nhất của bạn là:",
      options: ["8.0 trở lên", "7.0 - 7.9", "6.0 - 6.9", "5.0 - 5.9", "Dưới 5.0"]
    },
    {
      id: 3,
      question: "Môn học bạn yêu thích nhất là:",
      options: ["Toán học", "Ngữ văn", "Vật lý", "Hóa học", "Sinh học", "Lịch sử", "Địa lý", "Tiếng Anh"]
    },
    {
      id: 4,
      question: "Bạn có tham gia hoạt động ngoại khóa nào không?",
      options: ["Thể thao", "Âm nhạc", "Hội họa", "Khiêu vũ", "Khoa học", "Tình nguyện", "Không tham gia", "Khác"]
    },
    {
      id: 5,
      question: "Mục tiêu học tập của bạn là:",
      options: ["Đại học top đầu", "Đại học công lập", "Đại học tư thục", "Cao đẳng", "Trung cấp", "Chưa xác định"]
    },
    {
      id: 6,
      question: "Bạn muốn theo học khối nào?",
      options: ["A (Toán, Lý, Hóa)", "B (Toán, Hóa, Sinh)", "C (Văn, Sử, Địa)", "D (Toán, Văn, Anh)", "A1 (Toán, Lý, Anh)", "Chưa xác định"]
    },
    {
      id: 7,
      question: "Thời gian học tập mỗi ngày của bạn là:",
      options: ["Dưới 2 giờ", "2-4 giờ", "4-6 giờ", "6-8 giờ", "Trên 8 giờ"]
    },
    {
      id: 8,
      question: "Bạn có kế hoạch học thêm không?",
      options: ["Có, học thêm nhiều môn", "Có, học thêm 1-2 môn", "Có, học thêm môn yếu", "Không có kế hoạch", "Đã học thêm rồi"]
    }
  ];


  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };


  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
             <h1 className="text-3xl font-bold text-gray-900 mb-4">
               Cảm ơn bạn đã hoàn thành bài test tuyển sinh!
             </h1>
             <p className="text-gray-600 mb-8">
               Kết quả đánh giá của bạn đã được ghi nhận. Chúng tôi sẽ xem xét và liên hệ tư vấn tuyển sinh trong thời gian sớm nhất.
             </p>
            <div className="space-y-4">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Về trang chủ
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
           <div className="mb-8">
             <h1 className="text-3xl font-bold text-gray-900 mb-4">
               Bài Test Tuyển Sinh THPT Ông Ích Khiêm
             </h1>
             <p className="text-gray-600">
               Chào mừng {user.name}! Hãy trả lời các câu hỏi dưới đây để chúng tôi có thể đánh giá và tư vấn tuyển sinh phù hợp nhất cho bạn.
             </p>
           </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Câu {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  backgroundColor: 'var(--color-primary)'
                }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    answers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={index}
                    checked={answers[currentQuestion] === index}
                    onChange={() => handleAnswerSelect(index)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    answers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="text-gray-900">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Trước
            </button>
            
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={answers[currentQuestion] === undefined}
                className="px-6 py-2 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Hoàn thành
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                className="px-6 py-2 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Tiếp theo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </AuthGuard>
  );
}

