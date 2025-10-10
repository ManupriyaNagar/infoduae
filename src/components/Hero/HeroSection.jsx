"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative bg-black text-white py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16">
        {/* === Left Content === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.1] text-white tracking-tight">
            Empowering the Future of {" "}
            <span className="text-transparent bg-gradient-to-r from-[#00FFAA] to-[#00BFA6] bg-clip-text">
              Financial Trading
            </span>{" "}
           with Intelligent Algo Solutions
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
           At InfodD, we deliver cutting-edge algorithmic trading systems designed to empower investors across the globe. Our AI-driven strategies are engineered to optimize performance, minimize risk, and unlock consistent market opportunities
          </p>

          {/* CTA Buttons */}
          {/* <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="relative group inline-flex items-center justify-center bg-gradient-to-r from-[#00FFAA] to-[#00BFA6] text-black font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_#00FFAA55]"
            >
              Get Started
              <svg
                className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center border border-[#00FFAA] text-[#00FFAA] font-medium text-lg py-3 px-8 rounded-full hover:bg-[#00FFAA] hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </div> */}
        </motion.div>

        {/* === Right Content === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full lg:w-2/5 text-left "
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_#00FFAA25] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#00FFAA]">
              About InfodD:
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Founded in Dubai, InfodD is redefining the way the world trades. Since our inception, we’ve been dedicated to creating innovative, data-driven trading platforms that merge technology, intelligence, and precision. <br />
              Experience seamless automation where human insight meets algorithmic excellence.
            </p>
          </div>

          {/* Social Proof or Partner Logos (Placeholder) */}
          <div className="mt-10 flex justify-center lg:justify-end gap-6 opacity-80">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#00FFAA] font-bold">
              FX
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#00FFAA] font-bold">
              AI
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#00FFAA] font-bold">
              24/7
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
