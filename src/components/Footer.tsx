export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-3">
      <div className="max-w-6xl mx-auto px-4 text-[13px] text-gray-700 text-center leading-relaxed">
        :: Trường THPT Ông Ích Khiêm - Huyện Hòa Vang - Thành phố Đà Nẵng - Việt Nam ::
        <br />
        Địa chỉ: Xã Hòa Phong, Huyện Hòa Vang, TP. Đà Nẵng &nbsp; * &nbsp;
        Điện thoại: (0236) 3843 579 &nbsp; * &nbsp;
        Email:{" "}
        <a
          href="mailto:thptongichkhiem@danang.edu.vn"
          className="text-blue-600 hover:underline"
        >
          thptongichkhiem@danang.edu.vn
        </a>
        <br />
        Hiệu trưởng: ThS. Trần Văn A &nbsp; * &nbsp;
        Email:{" "}
        <a
          href="mailto:hieutruong.ongichkhiem@danang.edu.vn"
          className="text-blue-600 hover:underline"
        >
          hieutruong.ongichkhiem@danang.edu.vn
        </a>
      </div>
    </footer>
  );
}
