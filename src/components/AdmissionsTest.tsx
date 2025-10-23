type Question = {
  id: number;
  text: string;
  options: { text: string; value: number }[];
};

type Props = {
  questions: Question[];
  answers: { [key: number]: number };
  onSelect: (questionId: number, value: number) => void;
  onSubmit: () => void;
};

export default function AdmissionsTest({ questions, answers, onSelect, onSubmit }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Bài test định hướng nghề nghiệp
        </h2>
        <p className="text-gray-600 text-lg">
          Trả lời các câu hỏi để khám phá ngành học phù hợp với bạn
        </p>
      </div>
      
      <div className="space-y-8">
        {questions.map((q, index) => (
          <div key={q.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-4 text-lg">{q.text}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => onSelect(q.id, opt.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        answers[q.id] === opt.value
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg scale-105"
                          : "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-102"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          answers[q.id] === opt.value
                            ? "bg-white border-white"
                            : "border-gray-300"
                        }`}>
                          {answers[q.id] === opt.value && (
                            <div className="w-full h-full rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">{opt.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <button
          onClick={onSubmit}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center gap-3 mx-auto"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Xem kết quả
        </button>
      </div>
    </div>
  );
}




