"use client";
import { motion } from "framer-motion";

export default function UpLearn() {
  const stats = [
    { label: "Students Trained", value: "5000+" },
    { label: "Success Rate", value: "95%" },
    { label: "Support Available", value: "24/7" },
  ];

  const strategies = [
    "Day Trading Strategies",
    "Reversal Strategies",
    "Support & Resistance Strategy",
    "Gap Strategy",
    "Scalping Strategy",
    "Swing Trading Strategy",
  ];

  const faqs = [
    {
      q: "Who can join UpLearn?",
      a: "Anyone — beginners, professionals, or investors looking to refine their strategies.",
    },
    {
      q: "How long does the program take?",
      a: "Timelines are flexible based on your goals and learning speed.",
    },
    {
      q: "What makes InfoD’s UpLearn unique?",
      a: "A blend of expert mentorship, AI tools, and real-world application.",
    },
    {
      q: "Do I get support after completion?",
      a: "Yes, lifetime access to community updates and expert support.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 ">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-[#00FFAA]"
        >
          Professional Trading Education
        </motion.h2>
        <p className="text-xl md:text-2xl font-light mb-12 text-gray-300">
          Master the Markets with InfoD’s <span className="text-[#00FFAA]">UpLearn</span> Program
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-700 rounded-2xl p-6 hover:border-[#00FFAA] transition-all"
            >
              <h3 className="text-3xl font-semibold text-[#00FFAA]  mb-2">{s.value}</h3>
              <p className="text-gray-400 uppercase text-sm tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="max-w-7xl mx-auto border border-gray-600  rounded-xl  mb-16 p-8 ">
          <h3 className="text-2xl font-semibold mb-4 text-left text-[#00FFAA]">What You’ll Learn</h3>
          <p className="text-gray-100 text-left leading-relaxed mb-6">
            Gain in-depth knowledge from fundamentals to advanced strategies through live examples and real trading
            insights.
          </p>
          <ul className="text-left text-gray-100 space-y-3 list-decimal list-inside">
            <li>Master proven technical analysis for buying and selling stocks.</li>
            <li>Learn trend and reversal indicators for consistent results.</li>
            <li>Identify trends and chart patterns to plan precise entries and exits.</li>
            <li>Develop personalized trading strategies with data-driven rules.</li>
            <li>Analyze real trades with live demonstrations and guided breakdowns.</li>
          </ul>
        </div>

        {/* Strategies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-[#00FFAA]">Trading Strategies Tailored to You</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {strategies.map((str, i) => (
              <span
                key={i}
                className="border border-[#00FFAA] px-5 py-2 rounded-full text-sm hover:bg-[#00FFAA] hover:text-black transition-all"
              >
                {str}
              </span>
            ))}
          </div>
        </div>

        {/* Algo Trading */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-10 mb-16 text-left">
          <h3 className="text-2xl font-semibold mb-4 text-[#00FFAA]">Algo Trading Software</h3>
          <p className="text-gray-300 mb-4">
            Revolutionize your trading with automation. InfoD’s Algo Trading Software executes trades in real-time using
            AI-driven strategies for precise and consistent results.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>100% Automated Execution</li>
            <li>AI-Powered Market Predictions</li>
            <li>Trade in Any Timeframe</li>
            <li>Maximize Profits, Save Time</li>
          </ul>
        </div>

        {/* CTA */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <button className="px-8 py-3 bg-[#00FFAA] text-black font-semibold rounded-full hover:bg-white transition-all">
            Enroll Now
          </button>
          <button className="px-8 py-3 border border-[#00FFAA] text-[#00FFAA] rounded-full hover:bg-[#00FFAA] hover:text-black transition-all">
            Schedule Consultation
          </button>
        </div> */}

        {/* FAQ */}
        <div className=" text-left max-w-7xl mx-auto p-10">
          <h3 className="text-2xl font-semibold mb-6 text-center ]">
            Frequently Asked Questions
          </h3>
          {faqs.map((f, i) => (
            <div key={i} className="mb-6">
              <h4 className="font-semibold  mb-2">{f.q}</h4>
              <p className="text-gray-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
