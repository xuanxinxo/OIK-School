import AdmissionsChat from "./AdmissionsChat";

type Props = {
  score: number;
  onRestart: () => void;
};

export default function AdmissionsResult({ score, onRestart }: Props) {
  const isTechnical = score <= 3;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Kết quả gợi ý
        </h2>
        <p className="text-gray-600 text-lg">
          Dựa trên câu trả lời của bạn, đây là những gợi ý phù hợp
        </p>
      </div>

      {isTechnical ? (
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Hướng Kỹ thuật & Công nghệ</h3>
                <p className="text-gray-600">Bạn có xu hướng phù hợp với các ngành kỹ thuật, công nghệ, cơ khí, lập trình...</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Đại học Bách Khoa Đà Nẵng</h4>
                <p className="text-sm text-gray-600">Kỹ thuật, Công nghệ thông tin, Cơ khí</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Đại học CNTT & Truyền thông Việt - Hàn</h4>
                <p className="text-sm text-gray-600">Công nghệ thông tin, Truyền thông</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cao đẳng nghề Đà Nẵng</h4>
                <p className="text-sm text-gray-600">Nghề kỹ thuật, Thực hành</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Hướng Xã hội & Sáng tạo</h3>
                <p className="text-gray-600">Bạn phù hợp hơn với lĩnh vực xã hội, sáng tạo, nghệ thuật, truyền thông...</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Đại học Sư phạm Nghệ thuật Trung ương</h4>
                <p className="text-sm text-gray-600">Nghệ thuật, Sáng tạo, Thiết kế</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Đại học Kinh tế Đà Nẵng</h4>
                <p className="text-sm text-gray-600">Kinh tế, Quản trị, Marketing</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Đại học Duy Tân</h4>
                <p className="text-sm text-gray-600">Truyền thông & Marketing</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center space-y-4">
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"
        >
          Làm lại bài test
        </button>
      </div>

      {/* Chat tư vấn tuyển sinh */}
      <AdmissionsChat
        initialContext={
          isTechnical
            ? "Mình vừa hoàn thành bài test, thiên về kỹ thuật/công nghệ. Gợi ý giúp mình các lựa chọn tại Đà Nẵng, yêu cầu đầu vào và học phí?"
            : "Mình vừa hoàn thành bài test, thiên về xã hội/sáng tạo. Gợi ý giúp mình các lựa chọn tại Đà Nẵng, yêu cầu đầu vào và học phí?"
        }
      />
    </div>
  );
}





