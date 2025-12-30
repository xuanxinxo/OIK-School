import Image from "next/image";
import Link from "next/link";

export default function ProgramInfo() {
  const programItems = [
    'Chương trình chuẩn của Bộ GD&ĐT',
    'Chương trình nâng cao các môn chuyên',
    'Hoạt động ngoại khóa đa dạng',
    'Định hướng nghề nghiệp sớm'
  ];

  return (
    <section className="px-6 sm:px-8 md:px-10 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chương trình học đa dạng và hiện đại
          </h2>
          <p className="text-gray-600 mb-6">
            Các tổ chuyên môn đổi mới phương pháp dạy học, chú trọng kỹ năng
            thực hành, học theo dự án và nghiên cứu khoa học học sinh.
          </p>
          <ul className="space-y-3 mb-6">
            {programItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-700 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/chuong-trinh-hoc"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Xem chương trình chi tiết
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src="/img/ai.jpg"
                alt="Học sinh trong lớp học"
                fill
                className="object-cover"
              />
            </div>
           <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src="/img/stu.webp"
                alt="Hoạt động ngoại khóa"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="relative rounded-xl overflow-hidden aspect-square col-span-2">
              <Image
                src="/img/ai.jpg"
                alt="Cơ sở vật chất"
                fill
                className="object-cover"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
