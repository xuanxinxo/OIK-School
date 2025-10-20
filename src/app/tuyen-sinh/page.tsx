"use client";
import { useState } from "react";
import { useAuth } from "@/src/context/AuthContext";
import AdmissionsHero from "@/src/components/AdmissionsHero";
import AdmissionsSelect from "@/src/components/AdmissionsSelect";
import AdmissionsTest from "@/src/components/AdmissionsTest";
import AdmissionsResult from "@/src/components/AdmissionsResult";

export default function TuyenSinhPage() {
  const { user } = useAuth();
  const [step, setStep] = useState<"select" | "test" | "result">("select");
  const [score, setScore] = useState(0);

  // Giả lập câu hỏi
  const questions = [
    {
      id: 1,
      text: "Bạn thích làm việc với con người hay máy móc hơn?",
      options: [
        { text: "Con người", value: 2 },
        { text: "Máy móc", value: 1 },
      ],
    },
    {
      id: 2,
      text: "Bạn thấy mình giỏi hơn ở lĩnh vực nào?",
      options: [
        { text: "Khoa học, công nghệ", value: 1 },
        { text: "Xã hội, giao tiếp", value: 2 },
      ],
    },
    {
      id: 3,
      text: "Bạn thích công việc mang tính sáng tạo hay kỹ thuật?",
      options: [
        { text: "Sáng tạo (nghệ thuật, truyền thông...)", value: 2 },
        { text: "Kỹ thuật (xây dựng, lập trình...)", value: 1 },
      ],
    },
  ];

  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleSelect = (questionId: number, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    setScore(total);
    setStep("result");
  };

  const handleSelectGrade10 = () => {
    if (!user) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này!");
      return;
    }
    alert("Thông tin cho học sinh lớp 10 đang cập nhật!");
  };

  const handleSelectGraduating = () => {
    if (!user) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này!");
      return;
    }
    setStep("test");
  };

  const handleRestart = () => {
    setStep("select");
    setScore(0);
    setAnswers({});
  };

  return (
    <>
      <AdmissionsHero />
      
      <div className="px-6 sm:px-8 md:px-10 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {step === "select" && (
            <AdmissionsSelect
              onSelectGrade10={handleSelectGrade10}
              onSelectGraduating={handleSelectGraduating}
              isLoggedIn={!!user}
            />
          )}

          {step === "test" && (
            <AdmissionsTest
              questions={questions}
              answers={answers}
              onSelect={handleSelect}
              onSubmit={handleSubmit}
            />
          )}

          {step === "result" && (
            <AdmissionsResult
              score={score}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </>
  );

}