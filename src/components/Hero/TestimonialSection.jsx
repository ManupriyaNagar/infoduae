"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaDatabase } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "InfodD has completely streamlined our business analytics process. Their platform makes data insights easy to understand and act upon — saving us hours every week.",
    name: "Rohit Sharma, Business Analyst – India",
    title: "Simplified data management and insights",
  },
  {
    quote:
      "As a small business owner, InfodD’s financial dashboard has been a game-changer. I can now track performance, revenue trends, and customer data effortlessly in real-time.",
    name: "Ananya Mehta, Founder – Delhi",
    title: "Powerful insights for everyday decisions",
  },
  {
    quote:
      "We implemented InfodD’s automation tools across multiple departments. The system is reliable, secure, and beautifully designed. It’s everything we needed for our growing team.",
    name: "James Anderson, Operations Head – Singapore",
    title: "Reliable and scalable automation platform",
  },
  {
    quote:
      "InfodD provides the clarity and transparency that our finance team needed. Reports that once took days are now ready in minutes. Highly recommend for data-driven organizations.",
    name: "Priya Nair, Finance Manager – UAE",
    title: "Data-driven decisions made simple",
  },
  {
    quote:
      "The support team at InfodD is outstanding. They guided us through every setup step and customized dashboards exactly the way we wanted. Excellent experience overall!",
    name: "Vikram Patel, CTO – India",
    title: "Exceptional support and customization",
  },
  {
    quote:
      "InfodD’s analytics suite has helped us identify market patterns and improve business forecasting accuracy. It’s not just a tool, it’s an intelligent partner for growth.",
    name: "Sophia Lee, Data Strategist – Malaysia",
    title: "Smart analytics for smarter business",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-50 py-12 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-snug">
            Hear from Our Valued Clients
          </h2>
          <p className="text-lg sm:text-2xl text-gray-600 font-semibold mt-3">
            Empowering businesses through intelligent data solutions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000"
            style={{
              transform: `translateX(-${(index * 100) / visibleCount}%)`,
              width: `${(testimonials.length * 100) / visibleCount}%`,
            }}
          >
            <div className="bg-white max-w-[50vh] p-6 shadow-sm text-center flex flex-col justify-between">
              <div>
                <p className="text-5xl font-bold text-gray-400">4.9</p>
                <div className="flex justify-center my-2">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <FaStar key={i} className="text-green-500" />
                    ))}
                </div>
                <p className="text-sm text-gray-500">250+ verified reviews</p>
              </div>
              <div className="flex justify-center mt-4 opacity-80">
                <FaDatabase className="text-4xl" />
              </div>
            </div>

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-sm flex-shrink-0 flex flex-col justify-between"
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
          {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
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
