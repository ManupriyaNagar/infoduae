"use client";
import { motion } from "framer-motion";
import { LineChart, Globe2, ShieldAlert } from "lucide-react";

export default function CurrencyMarketStrategies() {
  return (
    <section className="relative w-full bg-black py-16 md:py-20">
      <div className="container mx-auto px-4 text-center md:text-left">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 md:mb-12 text-center"
        >
          Applying Strategies in the{" "}
          <span className="text-transparent bg-gradient-to-r from-[#00FFAA] to-[#00BFA6] bg-clip-text">Currency Market</span>
        </motion.h2>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-10">
          {/* Forex Market Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
          >
            <Globe2 className="w-10 h-10 text-[#00FFAA] mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              A Dynamic Global Market
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              At infod, we operate at the heart of the world’s most liquid and
              fast-moving financial ecosystem — the Forex market. Open 24/5, it
              offers limitless trading opportunities for investors,
              institutions, and fund managers seeking to capitalize on market
              volatility and global economic shifts.
            </p>
          </motion.div>

          {/* Technical & Fundamental Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
          >
            <LineChart className="w-10 h-10 text-[#00FFAA] mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Data-Driven Precision
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              We believe in trading backed by intelligence. Through advanced
              technical analysis, data modeling, and AI-enhanced algorithms,
              infod empowers traders to identify emerging trends, determine
              precise entry and exit points, and make informed, data-driven
              decisions that enhance performance and consistency.
            </p>
          </motion.div>

          {/* Risk Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
          >
            <ShieldAlert className="w-10 h-10 text-[#00FFAA] mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Strategic Risk Management
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              In a market where leverage amplifies both profit and risk, risk
              management is the cornerstone of long-term success. At infod, we
              emphasize disciplined strategy execution, position sizing, and
              automated stop-loss systems to safeguard capital and sustain
              growth — ensuring every trade aligns with a well-calibrated plan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
