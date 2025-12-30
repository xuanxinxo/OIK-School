import HeroSection from "@/components/home/HeroSection";
import FeatureCards from "@/components/home/FeatureCards";
import ProgramInfo from "@/components/home/ProgramInfo";
import CTASection from "@/components/home/CTASection";
import AdmissionStats from "@/components/AdmissionStats";
import AdmissionsTimeline from "@/components/AdmissionsTimeline";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      <HeroSection />

      {/* FEATURES QUICK */}
      <FeatureCards />

      {/* STATS */}
      <AdmissionStats />

      {/* PROGRAM INFO */}
      <ProgramInfo />

      {/* TIMELINE */}
      <section className="py-16 bg-gray-50" id="thong-tin">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Hành trình trở thành học sinh chính thức
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Các mốc thời gian quan trọng trong kỳ tuyển sinh năm 2025
            </p>
          </div>

          <AdmissionsTimeline />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🏫",
                title: "Môi trường học tập",
                desc: "Không gian học tập an toàn, hiện đại và truyền cảm hứng."
              },
              {
                icon: "🎓",
                title: "Đội ngũ giáo viên",
                desc: "Giáo viên giàu kinh nghiệm, tận tâm và chuyên môn cao."
              },
              {
                icon: "🌍",
                title: "Định hướng phát triển",
                desc: "Chú trọng kỹ năng thế kỷ 21 và tư duy toàn cầu."
              },
              {
                icon: "🎨",
                title: "Hoạt động ngoại khóa",
                desc: "CLB đa dạng, cân bằng học tập và phát triển cá nhân."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO COLUMN CONTENT */}
      <section className="px-6 sm:px-8 md:px-10">
        <div className="max-w-6xl mx-auto py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Chương trình học đa dạng & hiện đại
            </h2>
            <p className="text-gray-600 mb-6">
              Nhà trường không ngừng đổi mới phương pháp giảng dạy, kết hợp hài hòa
              giữa lý thuyết và thực hành nhằm giúp học sinh phát triển tư duy phản biện,
              khả năng sáng tạo và kỹ năng làm việc nhóm.
            </p>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                Học theo dự án (Project-based learning)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                Định hướng nghề nghiệp sớm
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                Phát triển kỹ năng mềm & công nghệ
              </li>
            </ul>

            <Link
              href="/gioi-thieu"
              className="inline-flex items-center rounded-full bg-blue-600 px-6 py-2 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Tìm hiểu thêm
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Image
              src="/img/chill.jpg"
              alt="Học sinh trong lớp"
              width={400}
              height={260}
              className="rounded-xl object-cover h-[210px] w-full col-span-1"
            />
            <Image
              src="/img/sholl.jpg"
              alt="Hoạt động học tập"
              width={800}
              height={260}
              className="rounded-xl object-cover h-[210px] w-full col-span-2"
            />

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTASection />
    </div>
  );
}
