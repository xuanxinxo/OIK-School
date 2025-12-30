import Image from "next/image";

export default function GioiThieuPage() {
  return (
    <section className="px-6 sm:px-8 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Banner */}
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-center">
            Website Tư Vấn Tuyển Sinh Lớp 12 Tích Hợp AI
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mt-3">
            Đồng hành cùng học sinh định hướng ngành nghề, chọn trường phù hợp cho tương lai
          </p>
        </div>

        {/* GRID 3 TRÊN + 3 DƯỚI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Card 1 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Giới thiệu nền tảng</h2>
            <p className="text-black/80 dark:text-white/80 leading-relaxed">
              Nền tảng hỗ trợ học sinh lớp 12 và phụ huynh tiếp cận thông tin tuyển sinh
              chính xác, minh bạch và dễ hiểu.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Tư vấn tích hợp AI</h2>
            <p className="text-black/80 dark:text-white/80 leading-relaxed">
              Hệ thống AI phân tích học lực, sở thích và xu hướng nghề nghiệp để gợi ý
              ngành học và trường phù hợp.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Định hướng lớp 12</h2>
            <p className="text-black/80 dark:text-white/80 leading-relaxed">
              Đồng hành cùng học sinh lớp 12 trong giai đoạn quan trọng, giúp đưa ra
              quyết định đúng đắn cho tương lai.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Tầm nhìn</h2>
            <p className="text-black/80 dark:text-white/80 leading-relaxed">
              Trở thành nền tảng tư vấn tuyển sinh và định hướng nghề nghiệp uy tín
              trên toàn quốc.
            </p>
          </div>

          {/* Card 5 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Sứ mệnh</h2>
            <p className="text-black/80 dark:text-white/80 leading-relaxed">
              Hỗ trợ học sinh lựa chọn ngành học, trường học phù hợp với năng lực và
              mục tiêu cá nhân.
            </p>
          </div>

          {/* Card 6 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Giá trị cốt lõi</h2>
            <p className="text-black/80 dark:text-white/80 leading-relaxed">
              Minh bạch – Cá nhân hóa – Đồng hành – Phát triển bền vững.
            </p>
          </div>

        </div>

        {/* CARD RIÊNG – FULL WIDTH */}
        <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-4">
            Giá trị mang lại cho học sinh & phụ huynh
          </h2>
          <ul className="list-disc pl-6 text-black/80 dark:text-white/80 space-y-2">
            <li>Gợi ý ngành nghề phù hợp dựa trên AI</li>
            <li>Đề xuất trường học và lộ trình học tập rõ ràng</li>
            <li>Tiết kiệm thời gian tìm kiếm thông tin tuyển sinh</li>
            <li>Tăng sự tự tin khi đưa ra quyết định cho tương lai</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
