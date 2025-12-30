import Image from "next/image";

export default function AdmissionsHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0">
          <Image
            src="/img/dep.png"
            alt="Students studying"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>

        {/* ✅ Giảm padding để nội dung không bị cách xa */}
        <div className="relative px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Tư vấn tuyển sinh thông minh
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Định hướng tương lai
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                cùng AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Khám phá ngành học phù hợp với tính cách và sở thích của bạn thông qua bài test thông minh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
