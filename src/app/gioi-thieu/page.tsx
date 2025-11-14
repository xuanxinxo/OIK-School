import Image from "next/image";

export default function GioiThieuPage() {
  return (
    <section className="px-6 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto py-12 sm:py-16 oik-section">
        
        {/* Phần banner */}
        <div className="mb-12">
          <Image
            src="/img/OKI.jpg"
            alt="Cổng trường THPT Ông Ích Khiêm"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority
          /> 
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-center">
            Trường THPT Ông Ích Khiêm
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mt-2">
            “Ươm mầm tài năng - Kiến tạo tương lai - Xây dựng đất nước ngày càng vững mạnh ”
          </p>
        </div>

        {/* Lịch sử & truyền thống */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Lịch sử hình thành</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">
            Trường THPT Ông Ích Khiêm, tọa lạc tại thôn Cẩm Toại Trung, xã Hòa Phong, huyện Hòa Vang, thành phố Đà Nẵng, được thành lập từ năm **1968** với tên gọi ban đầu là Trường Trung học công lập Hiếu Đức.  
            Qua nhiều giai đoạn đổi mới và phát triển, trường đã từng bước mở rộng cơ sở vật chất và nâng cao chất lượng giáo dục.  
            Năm **1998**, trường được chính thức công nhận mang tên “THPT Ông Ích Khiêm” theo Quyết định của UBND thành phố.  
            Đến nay, trường đã có hơn **50 năm lịch sử**, đào tạo nhiều thế hệ học sinh thành đạt và tạo dựng được uy tín trong cộng đồng giáo dục Đà Nẵng.  
          </p>
        </div>

        {/* Tầm nhìn & sứ mệnh */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Tầm nhìn & sứ mệnh</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed mb-3">
            <strong>Tầm nhìn:</strong> Trở thành ngôi trường chất lượng cao, dẫn đầu đổi mới sáng tạo trong giáo dục vùng ngoại thành Đà Nẵng.  
          </p>
          <p className="text-black/80 dark:text-white/80 leading-relaxed mb-3">
            <strong>Sứ mệnh:</strong> Gieo kiến thức, phát huy tiềm năng, nuôi dưỡng nhân cách và trách nhiệm công dân cho học sinh.  
          </p>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">
            <strong>Giá trị cốt lõi:</strong> Yêu thương – Năng động – Trách nhiệm – Sáng tạo – Khát vọng.
          </p>
        </div>

        {/* Cơ sở vật chất */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Cơ sở vật chất & môi trường học tập</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed mb-4">
            Nhà trường hiện có hệ thống phòng học kiên cố, phòng thí nghiệm, thư viện, phòng máy tính, sân thể thao và không gian xanh rộng rãi.  
            Trang thiết bị dần được đầu tư hiện đại nhằm tạo điều kiện học tập tốt nhất cho học sinh.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          </div>
        </div>

        {/* Đội ngũ giáo viên */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Đội ngũ giáo viên & nhân sự</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed mb-3">
            Với đội ngũ giáo viên có trình độ chuyên môn cao, tận tâm và nhiều kinh nghiệm, trường luôn chú trọng bồi dưỡng, cập nhật phương pháp giảng dạy mới, khuyến khích sáng tạo và áp dụng công nghệ trong dạy học.
          </p>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">
            Nhiều giáo viên đã đạt thành tích trong các hội thi cấp thành phố, tỉnh; đồng thời tham gia đào tạo, hội thảo chuyên môn quốc gia.
          </p>
        </div>

        {/* Hoạt động học sinh */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Hoạt động học sinh & ngoại khóa</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed mb-3">
            Trường luôn khuyến khích học sinh tham gia các câu lạc bộ: văn nghệ, thể thao, STEM, đội tình nguyện, dự án cộng đồng và các cuộc thi học thuật.  
            Từ đó, học sinh không chỉ phát triển kiến thức mà còn kỹ năng xã hội, tinh thần khởi nghiệp và sáng tạo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
          </div>
        </div>

        {/* Thành tích */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Thành tích & khen thưởng</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">
            - Liên tục được công nhận “Trường Tiên tiến xuất sắc” <br />
            - Học sinh đạt giải cấp thành phố, tỉnh trong các môn Văn, Toán, Khoa học <br />
            - Đạt nhiều bằng khen của Sở GD&ĐT, UBND thành phố và các tổ chức giáo dục.
          </p>
        </div>

        {/* Liên hệ */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Liên hệ & địa chỉ</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed mb-2">
            Địa chỉ: Thôn Cẩm Toại Trung, Hòa Vang, TP. Đà Nẵng  
          </p>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">
            Điện thoại: 0236 3846 401  
            {/* Nếu có email, website, bản đồ thì chèn vào */}
          </p>
        </div>
      </div>
    </section>
  );
}
