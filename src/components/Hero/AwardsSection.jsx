// components/AwardsAchievements.tsx

export default function AwardsAchievements() {
  const achievements = [
    {
      id: "01",
      highlight: true,
      title: "140+ International design awards",
    },
    {
      id: "02",
      highlight: false,
      title: "100M+ Global users reached",
    },
    {
      id: "03",
      highlight: false,
      title: "300%+ Average conversion uplift",
    },
    {
      id: "04",
      highlight: false,
      title: "$2B+ raised UX-led launches",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#A076F9] to-[#7257FA] text-white overflow-hidden">
      {/* Background Image or Shapes (if needed) */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/backgrounds/abstract.svg')" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          our award & <br />
          achievements
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-xl overflow-hidden text-black shadow-lg">
          {achievements.map((item, index) => (
            <div key={index} className="p-6 border-r last:border-none">
              <div className="text-sm text-gray-400 font-medium mb-2 flex justify-between items-center">
                <span>{item.id}</span>
                {item.highlight && (
                  <span className="inline-block w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                    ↗
                  </span>
                )}
              </div>
              <p className="text-lg font-semibold leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
