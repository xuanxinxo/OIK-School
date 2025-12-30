import Link from "next/link";

export default function FeatureCards() {
  const features = [
    {
      icon: (
        <>
          <path
            d="M12 3l9 4.5-9 4.5-9-4.5L12 3z"
            fill="currentColor"
            opacity=".2"
          />
          <path
            d="M21 8v8.5l-9 4.5-9-4.5V8"
            stroke="currentColor"
            strokeOpacity=".5"
          />
        </>
      ),
      title: "AI phân tích năng lực",
      description:
        "Trí tuệ nhân tạo phân tích học lực, sở thích và điểm mạnh để tư vấn ngành học phù hợp.",
      link: "/gioi-thieu",
      linkText: "Khám phá AI"
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".5" />
          <path d="M12 3a9 9 0 019 9H12V3z" fill="currentColor" opacity=".2" />
        </>
      ),
      title: "Gợi ý ngành & trường",
      description:
        "AI đề xuất ngành học và trường phù hợp dựa trên dữ liệu tuyển sinh và xu hướng nghề nghiệp.",
      link: "/tin-tuc",
      linkText: "Xem gợi ý"
    },
    {
      icon: (
        <>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeOpacity=".5"
          />
          <path
            d="M8 12h8M8 9h8M8 15h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ),
      title: "AI tư vấn 24/7",
      description:
        "Chatbot AI hỗ trợ tuyển sinh liên tục, giải đáp thắc mắc mọi lúc cho học sinh lớp 12.",
   
      linkText: "Nhận tư vấn"
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-10 -mt-8 sm:-mt-10 pb-6">
      <div className="rounded-2xl bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                {feature.icon}
              </svg>
              <div>
                <div className="font-semibold">{feature.title}</div>
                <div className="text-sm text-black/70">
                  {feature.description}
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
