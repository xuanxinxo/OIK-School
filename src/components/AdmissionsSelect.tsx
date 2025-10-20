type Props = {
  onSelectGrade10: () => void;
  onSelectGraduating: () => void;
  isLoggedIn?: boolean;
};

export default function AdmissionsSelect({ onSelectGrade10, onSelectGraduating, isLoggedIn = false }: Props) {
  return (
    <div className="text-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Bạn đang ở giai đoạn nào?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Chọn nhóm học sinh phù hợp để bắt đầu hành trình khám phá nghề nghiệp
        </p>
        {!isLoggedIn && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-semibold text-yellow-800">Cần đăng nhập để sử dụng</span>
            </div>
            <p className="text-sm text-yellow-700">
              Vui lòng đăng nhập để có thể tham gia bài test tuyển sinh và nhận tư vấn cá nhân.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={onSelectGrade10}
            disabled={!isLoggedIn}
            className={`group p-6 rounded-2xl border transition-all duration-300 ${
              isLoggedIn 
                ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-lg hover:scale-105 cursor-pointer' 
                : 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${
              isLoggedIn ? 'bg-gray-200 group-hover:bg-gray-300' : 'bg-gray-300'
            }`}>
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Học sinh vừa lên lớp 10</h3>
            <p className="text-sm text-gray-600">Khám phá sở thích và định hướng sớm</p>
            {!isLoggedIn && (
              <div className="mt-2 text-xs text-red-500">Cần đăng nhập</div>
            )}
          </button>
          <button
            onClick={onSelectGraduating}
            disabled={!isLoggedIn}
            className={`group p-6 rounded-2xl border transition-all duration-300 ${
              isLoggedIn 
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg hover:scale-105 cursor-pointer' 
                : 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${
              isLoggedIn ? 'bg-blue-200 group-hover:bg-blue-300' : 'bg-gray-300'
            }`}>
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Học sinh sắp ra trường</h3>
            <p className="text-sm text-gray-600">Chọn ngành và trường phù hợp</p>
            {!isLoggedIn && (
              <div className="mt-2 text-xs text-red-500">Cần đăng nhập</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}


