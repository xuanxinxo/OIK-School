"use client";

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
              Hành trình Đúng Hướng TuyểN Sinh
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Các mốc mục đích quan trọng
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
                title: "AI tư vấn cá nhân hóa",
                desc: "Phân tích học lực, sở thích và tính cách để gợi ý lộ trình phù hợp."
              },
              {
                icon: "🎓",
                title: "Phân tích dữ liệu tuyển sinh",
                desc: "So sánh ngành học, trường học dựa trên dữ liệu tuyển sinh thực tế."
              },
              {
                icon: "🌍",
                title: "Định hướng ngành nghề",
                desc: "AI đề xuất ngành nghề theo năng lực và xu hướng thị trường lao động."
              },
              {
                icon: "🎨",
                title: "Đồng hành cùng học sinh",
                desc: "Hỗ trợ học sinh lớp 12 ra quyết định đúng đắn cho tương lai."
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
              Hệ thống tư vấn AI thông minh & cá nhân hóa
            </h2>

            <p className="text-gray-600 mb-6">
              Nền tảng ứng dụng trí tuệ nhân tạo (AI) để phân tích năng lực học tập, sở thích
              cá nhân và xu hướng nghề nghiệp, từ đó đưa ra các gợi ý ngành học và trường học
              phù hợp cho từng học sinh lớp 12.
            </p>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                Phân tích dữ liệu học tập & sở thích cá nhân bằng AI
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                Gợi ý ngành nghề và trường học phù hợp theo năng lực
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                Cá nhân hóa lộ trình học tập và định hướng nghề nghiệp
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
              src="/img/goods.jpg"
              alt="Học sinh trong lớp"
              width={400}
              height={260}
              className="rounded-xl object-cover h-[210px] w-full col-span-1"
            />
            <Image
              src="/img/good.jpg"
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
