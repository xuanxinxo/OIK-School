'use client';

const timeline = [
  {
    id: 1,
    title: 'Đăng ký trực tuyến',
    date: '01/03/2025 - 31/03/2025',
    description: 'Phụ huynh và học sinh đăng ký thông tin trực tuyến trên website',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Nộp hồ sơ',
    date: '01/04/2025 - 10/04/2025',
    description: 'Nộp hồ sơ đăng ký dự tuyển tại văn phòng nhà trường',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Kiểm tra đầu vào',
    date: '15/04/2025',
    description: 'Tổ chức kiểm tra đánh giá năng lực các môn Toán, Văn, Anh',
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Công bố kết quả',
    date: '25/04/2025',
    description: 'Công bố danh sách trúng tuyển trên website và bảng tin trường',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Xác nhận nhập học',
    date: '26/04/2025 - 30/04/2025',
    description: 'Phụ huynh xác nhận nhập học và hoàn tất thủ tục',
    status: 'upcoming'
  }
];

export default function AdmissionsTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8">Lịch trình tuyển sinh</h3>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-100 transform -translate-x-1/2"></div>
        
        {timeline.map((item, index) => (
          <div 
            key={item.id} 
            className={`relative mb-8 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="md:w-1/2 px-4">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                    {item.id}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                </div>
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
