"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import AdmissionsHero from "@/components/AdmissionsHero";
import AdmissionsSelect from "@/components/AdmissionsSelect";
import AdmissionsTest from "@/components/AdmissionsTest";
import AdmissionsResult from "@/components/AdmissionsResult";

export default function TuyenSinhPage() {
  const { user } = useAuth();
  const [step, setStep] = useState<"select" | "test" | "result">("select");
  const [score, setScore] = useState(0);

  // Giả lập câu hỏi
const questions = [
  {
    id: 1,
    text: "Bạn học giỏi môn nào nhất?",
    options: [
      { text: "Toán", value: 1 },
      { text: "Vật lý", value: 2 },
      { text: "Hóa học", value: 3 },
      { text: "Sinh học", value: 4 },
      { text: "Tin học", value: 5 },
      { text: "Ngữ văn", value: 6 },
      { text: "Lịch sử", value: 7 },
      { text: "Địa lý", value: 8 },
      { text: "Kinh tế & Pháp luật", value: 9 }
    ]
  },
  {
    id: 2,
    text: "Động lực, mong muốn khi học tập của bạn là gì?",
    options: [
      { text: "Đam mê, ước mơ", value: 1 },
      { text: "Thu nhập tốt, cuộc sống ổn định", value: 2 },
      { text: "Gia đình (ba, mẹ)", value: 3 },
      { text: "Sự công nhận và ngưỡng mộ của mọi người", value: 4 },
      { text: "Cống hiến cho xã hội", value: 5 }
    ]
  },
  {
    id: 3,
    text: "Bạn tự đánh giá mức độ bản thân về các năng lực sau (chọn 1 năng lực bạn thấy mình mạnh nhất):",
    options: [
      { text: "Sáng tạo", value: 1 },
      { text: "Tư duy", value: 2 },
      { text: "Phân tích", value: 3 },
      { text: "Giao tiếp", value: 4 },
      { text: "Phản biện / Tranh luận", value: 5 }
    ]
  },
  {
    id: 4,
    text: "Bạn sẵn sàng đổi mới, thay đổi để thích nghi với thời đại như thế nào?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 5,
    text: "Bạn nghĩ trong 5-10 năm tới thị trường cần những gì nhất?",
    options: [
      { text: "Khả năng công nghệ số", value: 1 },
      { text: "Ứng dụng tốt AI", value: 2 },
      { text: "Tư duy, sáng tạo và tự học", value: 3 },
      { text: "Kỹ năng mềm", value: 4 },
      { text: "Khả năng đa nhiệm", value: 5 }
    ]
  },
  {
    id: 6,
    text: "Bạn hứng thú với việc biến lý thuyết các môn khoa học tự nhiên thành sản phẩm ứng dụng thực tế (máy móc, cảm biến, robot...)?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 7,
    text: "Bạn có hứng thú với việc xây dựng mô hình để giải quyết vấn đề thực tế (tối ưu chi phí, dự đoán xu hướng, phân tích dữ liệu)?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 8,
    text: "Mức độ bạn hứng thú với việc ứng dụng kiến thức khoa học / kỹ thuật để giải quyết vấn đề thực tế là bao nhiêu?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 9,
    text: "Bạn có muốn kết hợp kiến thức nhiều lĩnh vực (Toán / Lý / Hóa / Sinh / Tin) để tạo hướng nghiên cứu mới, độc đáo và hiệu quả hơn không?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 10,
    text: "Mức độ bạn muốn nâng cấp / tối ưu hoặc làm cho một công nghệ / quy trình / vật liệu hiện có hiệu quả hơn?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 11,
    text: "Mức độ quan tâm của bạn đến các vấn đề xã hội, cuộc sống thường ngày (con người, lịch sử, địa lý, văn hóa, pháp luật...)?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 12,
    text: "Khả năng ngoại ngữ của bạn ở mức nào? (Trình độ hoặc biết hơn 1 ngoại ngữ)",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 13,
    text: "Mức độ bạn hứng thú với việc tìm hiểu, bảo tồn hoặc phân tích sự khác biệt lịch sử, văn hóa, phong tục và giá trị của con người?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 14,
    text: "Mức độ bạn muốn tìm hiểu vai trò của văn hóa trong định hình hành vi, lối sống và nhận thức cộng đồng?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 15,
    text: "Mức độ quan tâm và khả năng bạn đi vào chi tiết, phân tích kỹ lưỡng một vấn đề (lập luận chặt chẽ, logic)?",
    options: [
      { text: "Hoàn toàn không", value: 1 },
      { text: "Không", value: 2 },
      { text: "Trung tính", value: 3 },
      { text: "Có", value: 4 },
      { text: "Hoàn toàn có", value: 5 }
    ]
  },
  {
    id: 16,
    text: "Kỹ năng mềm bạn có được trong quá trình học tập (chọn kỹ năng chính bạn có):",
    options: [
      { text: "Khả năng tự học", value: 1 },
      { text: "Khả năng giao tiếp tốt", value: 2 },
      { text: "Tư duy, phân tích, giải quyết vấn đề", value: 3 },
      { text: "Tư duy phản biện", value: 4 },
      { text: "Làm việc nhóm", value: 5 },
      { text: "Quản lý, sắp xếp thời gian và công việc", value: 6 },
      { text: "Thích nghi với môi trường sống", value: 7 }
    ]
  },
  {
    id: 17,
    text: "Bạn có năng khiếu gì thêm không? (chọn năng khiếu chính)",
    options: [
      { text: "Ca hát", value: 1 },
      { text: "Biết chơi nhạc cụ", value: 2 },
      { text: "Múa", value: 3 },
      { text: "Thể thao", value: 4 },
      { text: "Vẽ tranh / Nghệ thuật", value: 5 },
      { text: "Làm đồ thủ công", value: 6 }
    ]
  }
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