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
      title: "Tốt nghiệp",
      description: "Tỷ lệ tốt nghiệp cao, hướng nghiệp rõ ràng.",
      link: "/gioi-thieu",
      linkText: "Tìm hiểu thêm"
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".5" />
          <path d="M12 3a9 9 0 019 9H12V3z" fill="currentColor" opacity=".2" />
        </>
      ),
      title: "Hoạt động",
      description: "CLB đa dạng, hoạt động trải nghiệm phong phú.",
      link: "/tin-tuc",
      linkText: "Xem hoạt động"
    },
    {
      icon: (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeOpacity=".5" />
          <path d="M8 12h8M8 9h8M8 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ),
      title: "Hỗ trợ học tập",
      description: "Tư vấn tâm lý, hướng nghiệp, ngoại ngữ.",
      link: "/lien-he",
      linkText: "Liên hệ"
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
                <Link
                  href={feature.link}
                  className="text-sm mt-2 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  {feature.linkText} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
