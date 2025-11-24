import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative">
      <Image
        src="/img/OKI.jpg"
        alt="Học sinh tại trường"
        width={1920}
        height={600}
        className="w-full h-[600px] object-cover"
        priority
      />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.25))",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-xs uppercase tracking-widest text-white/80 mb-2">
            OIK HIGH SCHOOL
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white max-w-4xl">
            Cùng nhau khám phá những điều mới mẻ
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl text-base sm:text-lg">
            Môi trường học tập thân thiện, sáng tạo và định hướng phát triển
            toàn diện cho học sinh.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/gioi-thieu"
              className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Tìm hiểu ngay
            </a>
            <a
              href="/tuyen-sinh"
              className="inline-flex items-center rounded-full border px-6 py-2.5 text-sm font-medium bg-white/10 text-white"
              style={{ borderColor: "rgba(255,255,255,.6)" }}
            >
              Tuyển sinh 2025
            </a>
          </div>
        </div>

        {/* Floating feature cards container */}
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-10 -mt-8 sm:-mt-10 pb-6">
          <div className="rounded-2xl bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
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
                </svg>
                <div>
                  <div className="font-semibold">Graduation</div>
                  <div className="text-sm text-black/70">
                    Tỷ lệ tốt nghiệp cao, hướng nghiệp rõ ràng.
                  </div>
                  <a
                    href="/gioi-thieu"
                    className="text-sm mt-2 inline-flex items-center gap-1"
                  >
                    Tìm hiểu thêm →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeOpacity=".5"
                  />
                  <path
                    d="M12 3a9 9 0 009 9H12V3z"
                    fill="currentColor"
                    opacity=".2"
                  />
                </svg>
                <div>
                  <div className="font-semibold">High School Life</div>
                  <div className="text-sm text-black/70">
                    CLB đa dạng, hoạt động trải nghiệm phong phú.
                  </div>
                  <a
                    href="/tin-tuc"
                    className="text-sm mt-2 inline-flex items-center gap-1"
                  >
                    Xem hoạt động →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
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
                    opacity=".6"
                  />
                </svg>
                <div>
                  <div className="font-semibold">Education Services</div>
                  <div className="text-sm text-black/70">
                    Tư vấn tâm lý, hướng nghiệp, ngoại ngữ.
                  </div>
                  <a
                    href="/lien-he"
                    className="text-sm mt-2 inline-flex items-center gap-1"
                  >
                    Liên hệ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN INFO */}
      <section className="px-6 sm:px-8 md:px-10">
        <div className="max-w-6xl mx-auto py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Chương trình học đa dạng
            </h2>
            <p className="text-black/70 dark:text-white/80 mb-5">
              Các tổ chuyên môn đổi mới phương pháp dạy học, chú trọng kỹ năng
              thực hành, học theo dự án và nghiên cứu khoa học học sinh.
            </p>
            <ul className="mb-6 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span
                  className="mt-1 inline-block h-4 w-4 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                Truy cập tất cả các chương trình
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-1 inline-block h-4 w-4 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                Cập nhật tin tức mới nhất
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-1 inline-block h-4 w-4 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                Nâng tầm tổ chức của bạn
              </li>
            </ul>
            <a
              href="/gioi-thieu"
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Xem chương trình
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-3 gap-3 items-stretch">
              <Image
                src="/img/thi.jpg"
                alt="Học sinh trong lớp"
                width={400}
                height={260}
                className="rounded-xl object-cover h-[210px] md:h-[260px] w-full col-span-1"
              />
              <Image
                src="/img/nice.jpg"
                alt="Sinh hoạt ngoại khóa"
                width={800}
                height={260}
                className="rounded-xl object-cover h-[210px] md:h-[260px] w-full col-span-2"
              />
              <Image
                src="/img/ra.jpg"
                alt="Giảng đường"
                width={400}
                height={150}
                className="rounded-xl object-cover h-[120px] md:h-[150px] w-full col-span-1 md:col-span-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="px-6 sm:px-8 md:px-10">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-white shadow-sm">
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 20h16" stroke="currentColor" />
                <path d="M6 18V6l6-2 6 2v12" stroke="currentColor" />
              </svg>
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                3+
              </div>
              <div className="text-sm">Năm kinh nghiệm</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" />
              </svg>
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                99+
              </div>
              <div className="text-sm">Khoá học trực tuyến</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 20v-8l8-6 8 6v8" stroke="currentColor" />
              </svg>
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                10+
              </div>
              <div className="text-sm">Giáo viên đạt chuẩn</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 20h12M8 16h8M10 12h4" stroke="currentColor" />
              </svg>
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                11+
              </div>
              <div className="text-sm">Học viên theo học</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
