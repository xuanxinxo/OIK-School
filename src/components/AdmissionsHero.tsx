
import Image from "next/image";

export default function AdmissionsHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="relative isolate overflow-hidden">
        {/* Ảnh nền banner */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/img/banner.jpg"
            alt="Trường THPT Ông Ích Khiêm"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 65%" }}
          />
        </div>

        {/* Lớp phủ trắng trong suốt để vẫn thấy ảnh */}
        <div className="absolute inset-0 -z-10 bg-white/55" />

        {/* Lớp phủ xanh nhẹ giúp giao diện hài hòa */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20" />

        {/* Nội dung chính */}
        <div className="relative px-6 py-12 text-center sm:px-8 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm backdrop-blur-sm">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Tư vấn tuyển sinh thông minh
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Định hướng tương lai
              <span className="mt-2 block bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                cùng AI
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-800 sm:text-xl">
              Khám phá ngành học phù hợp với tính cách và sở thích của bạn
              thông qua bài test thông minh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}