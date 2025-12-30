'use client';

const timeline = [
  {
    id: 1,
    title: 'Khởi tạo hồ sơ học sinh',
    description:
      'Học sinh nhập thông tin học lực, sở thích và định hướng tương lai để AI phân tích.',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Hoàn thiện dữ liệu cá nhân',
    description:
      'Cập nhật điểm số, năng lực nổi bật và tiêu chí lựa chọn ngành – trường.',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'AI phân tích & đánh giá',
    description:
      'Hệ thống AI đánh giá năng lực, tính cách và mức độ phù hợp với từng ngành học.',
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Gợi ý ngành & trường',
    description:
      'AI đề xuất danh sách ngành học và trường phù hợp dựa trên dữ liệu tuyển sinh.',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Xác nhận lộ trình tương lai',
    description:
      'Học sinh lựa chọn phương án tối ưu và nhận tư vấn định hướng tiếp theo.',
    status: 'upcoming'
  }
];

export default function AdmissionsTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-center mb-10">
        Quy trình AI tư vấn tuyển sinh
      </h3>

      <div className="relative">
        {/* Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-blue-100 transform md:-translate-x-1/2"></div>

        {timeline.map((item, index) => (
          <div
            key={item.id}
            className={`relative mb-10 flex flex-col md:flex-row ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            <div className="md:w-1/2 px-4">
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                    {item.id}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="hidden md:block md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
