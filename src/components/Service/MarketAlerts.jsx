"use client";
import { motion } from "framer-motion";

export default function MarketAlerts() {
  const stats = [
    { label: "Accuracy Rate", value: "95%" },
    { label: "Market Monitoring", value: "24/7" },
    { label: "Active Traders", value: "1000+" },
  ];

  const features = [
    {
      title: "Technical Analysis",
      desc: "Advanced chart patterns, indicators, and price action analytics to identify precise entry and exit points.",
    },
    {
      title: "Algorithmic Signals",
      desc: "AI-driven algorithms process real-time data to uncover high-probability trading opportunities.",
    },
    {
      title: "Fundamental Analysis",
      desc: "Comprehensive evaluation of economic indicators, market sentiment, and asset performance for long-term growth.",
    },
  ];

  const benefits = [
    {
      title: "Streamlined Decision-Making",
      desc: "Receive clear, data-backed insights that minimize emotional trading and enhance strategic execution.",
    },
    {
      title: "Time Efficiency",
      desc: "Automated market analysis saves hours daily, letting you focus on strategy and execution.",
    },
    {
      title: "Enhanced Portfolio Management",
      desc: "Optimize asset allocation and reduce risk through actionable, diversified signal insights.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 ">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#00FFAA]"
        >
          Professional Trading Signals
        </motion.h2>
        <p className="text-xl md:text-2xl font-light mb-12">
          Comprehensive Market Alerts for Strategic Investment
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-gray-700 p-6 rounded-2xl hover:border-[#00FFAA] transition-all duration-300"
            >
              <h3 className="text-3xl font-semibold text-[#00FFAA] mb-2">{item.value}</h3>
              <p className="text-gray-300 text-sm uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* What Are Market Alerts */}
        <div className="max-w-7xl mx-auto text-center border border-gray-700  rounded-2xl hover:border-[#00FFAA]  mb-16  p-10">
          <h3 className="text-2xl font-semibold mb-4 ">What Are Market Alerts?</h3>
          <p className="text-gray-100 leading-relaxed">
            Market Alerts are real-time trading triggers derived from technical, algorithmic, and fundamental analysis.
            At InfoD, we leverage intelligent systems and expert insight to deliver precise buy/sell opportunities that
            empower traders to act confidently in fast-moving markets.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-[#00FFAA] transition-all"
            >
              <h4 className="text-xl font-semibold mb-3 text-[#00FFAA]">{f.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-[#00FFAA]">Key Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-[#00FFAA]"
              >
                <h4 className="text-lg font-semibold mb-3 text-[#00FFAA]">{b.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-3 bg-[#00FFAA] text-black font-semibold rounded-full hover:bg-white transition-all">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-[#00FFAA] text-[#00FFAA] rounded-full hover:bg-[#00FFAA] hover:text-black transition-all">
            View Pricing Plans
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
