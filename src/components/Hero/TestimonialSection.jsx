"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaJenkins } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "BKM Global has transformed my trading experience. Their algo software is fast, precise, and incredibly efficient. I appreciate how transparent the platform is — I can monitor everything in real-time. It’s a refreshing change from other brokers I’ve used before.",
    name: "Ramesh P., Independent Trader – India",
    title: "A truly professional trading partner!",
  },
  {
    quote:
      "I’ve been using BKM Global’s investment management service for over a year now. Their strategies are consistent, and the communication is excellent. I receive timely market alerts that actually help me make smarter investment decisions.",
    name: "Amira K., Investor – Dubai",
    title: "Reliable and trustworthy investment management",
  },
  {
    quote:
      "Their Uplearn concept is amazing — I’ve learned so much about forex strategies and market analysis. The team genuinely wants traders to succeed and not just trade blindly. I highly recommend BKM Global for anyone serious about trading.",
    name: "Rahul S., Beginner Trader – Bengaluru",
    title: "Best place to learn and grow as a trader",
  },
  {
    quote:
      "The platform is clean, intuitive, and built with real traders in mind. None match the speed and accuracy of BKM Global’s software. The referral system is also a great bonus!",
    name: "Fatima Z., Fund Manager – UAE",
    title: "Transparent, user-friendly, and profitable",
  },
  {
    quote:
      "The support team is responsive and knowledgeable. They guided me through setting up my first strategy on the algo software, and everything has been smooth since. Their risk management approach makes me feel secure.",
    name: "Vikram N., Investor – India",
    title: "Excellent customer support and guidance",
  },
  {
    quote:
      "BKM Global’s approach combines technology, education, and strategy perfectly. Their market alerts and risk management tools help me stay ahead of the curve. It’s not just a trading platform — it’s a complete ecosystem.",
    name: "Sophia L., Forex Enthusiast – Singapore",
    title: "Next-generation trading made simple",
  },
  {
    quote:
      "I’ve been using BKM Global’s investment management service for over a year now. Their strategies are consistent, and the communication is excellent. I receive timely market alerts that actually help me make smarter investment decisions.",
    name: "Amira K., Investor – Dubai",
    title: "Reliable and trustworthy investment management",
  },
  {
    quote:
      "Their Uplearn concept is amazing — I’ve learned so much about forex strategies and market analysis. The team genuinely wants traders to succeed and not just trade blindly. I highly recommend BKM Global for anyone serious about trading.",
    name: "Rahul S., Beginner Trader – Bengaluru",
    title: "Best place to learn and grow as a trader",
  },
  {
    quote:
      "The platform is clean, intuitive, and built with real traders in mind. None match the speed and accuracy of BKM Global’s software. The referral system is also a great bonus!",
    name: "Fatima Z., Fund Manager – UAE",
    title: "Transparent, user-friendly, and profitable",
  },
  {
    quote:
      "The support team is responsive and knowledgeable. They guided me through setting up my first strategy on the algo software, and everything has been smooth since. Their risk management approach makes me feel secure.",
    name: "Vikram N., Investor – India",
    title: "Excellent customer support and guidance",
  },
  {
    quote:
      "BKM Global’s approach combines technology, education, and strategy perfectly. Their market alerts and risk management tools help me stay ahead of the curve. It’s not just a trading platform — it’s a complete ecosystem.",
    name: "Sophia L., Forex Enthusiast – Singapore",
    title: "Next-generation trading made simple",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0); // Start from first slide
  const visibleCount = 4; // Number of cards visible at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length); // loop
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-100 py-12 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-snug">
            Find your best Support with us.
          </h2>
          <p className="text-lg sm:text-2xl text-gray-600 font-semibold mt-3">
            We guarantee your next success!
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          
          <div
            className="flex transition-transform duration-1000"
            style={{
              transform: `translateX(-${(index * 100) / visibleCount}%)`,
              width: `${(testimonials.length * 100) / visibleCount}%`,
            }}
          >
               <div className="bg-white max-w-[50vh] p-6 shadow-sm text-center  flex flex-col justify-between">
            <div>
              <p className="text-5xl font-bold text-gray-400">4.9</p>
              <div className="flex justify-center my-2">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} className="text-green-500" />
                  ))}
              </div>
              <p className="text-sm text-gray-500">200+ reviews</p>
            </div>
            <div className="flex justify-center mt-4 opacity-80">
              <FaJenkins className="text-4xl" />
            </div>
          </div>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-sm  flex-shrink-0 flex flex-col justify-between"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center mt-4">
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">
                      {t.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: testimonials.length -2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}