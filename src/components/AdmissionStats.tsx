const stats = [
  { id: 1, name: 'Học sinh được AI tư vấn', value: '200+' },
  { id: 2, name: 'Ngành nghề được phân tích', value: '100+' },
  { id: 3, name: 'Độ chính xác gợi ý', value: '95%' },
  { id: 4, name: 'Tư vấn 24/7 bằng AI', value: '100%' },
];

export default function AdmissionStats() {
  return (
    <div className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-4xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-blue-100">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
