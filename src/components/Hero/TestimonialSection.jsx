import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaJenkins } from "react-icons/fa";

const testimonials = [
  {
    company: "A truly professional trading partner!",
    quote: " BKM Global has transformed my trading experience. Their algo software is fast, precise, and incredibly efficient. I appreciate how transparent the platform is — I can monitor everything in real-time. It’s a refreshing change from other brokers I’ve used before.",
    name: "Ramesh P., Independent Trader – India",
    title: "A truly professional trading partner!",
    image: "/user1.jpg",
  },
  {
    company: "tournated",
    quote: "I’ve been using BKM Global’s investment management service for over a year now. Their strategies are consistent, and the communication is excellent. I receive timely market alerts that actually help me make smarter investment decisions.",
    name: "Amira K., Investor – Dubai",
    title: "Reliable and trustworthy investment management",
    image: "/user2.jpg",
  },
  {
    company: "ActiveSync",
    quote: "Their Uplearn concept is amazing — I’ve learned so much about forex strategies and market analysis. The team genuinely wants traders to succeed and not just trade blindly. I highly recommend BKM Global for anyone serious about trading.",
    name: "Rahul S., Beginner Trader – Bengaluru",
    title: "Best place to learn and grow as a trader",
    image: "/user3.jpg",
  },
  {
    quote:"The platform is clean, intuitive, and built with real traders in mind. I’ve used other algo tools before, but none match the speed and accuracy of BKM Global’s software. The referral system is also a great bonus!",
      name: "Fatima Z., Fund Manager – UAE",
    title: "Transparent, user-friendly, and profitable",
  },
  {
    quote:"The support team is responsive and knowledgeable. They guided me through setting up my first strategy on the algo software, and everything has been smooth since. Their risk management approach makes me feel secure.",
    title: "Excellent customer support and guidance",
    name: "Vikram N., Investor – India",

  },
  {
    quote:"BKM Global’s approach combines technology, education, and strategy perfectly. Their market alerts and risk management tools help me stay ahead of the curve. It’s not just a trading platform — it’s a complete ecosystem.",
    name: "Sophia L., Forex Enthusiast – Singapore",
    title: "Next-generation trading made simple",

  }
];

export default function TestimonialSection() {
  return (
    <section className="relative bg-gray-100 py-16">
      <div className='container mx-auto'>
      <div className=" max-w-3xl mb-12">
        <h2 className="text-5xl font-bold text-gray-900">Find your best Suport into us.</h2>
        <p className="text-5xl text-gray-500 font-semibold mt-2">We guarantee next success is yours!</p>
      </div>

      {/* Main grid with stretch items */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 items-stretch">
        
        {/* Rating Card */}
        <div className="bg-white p-6  shadow-sm text-center h-full flex flex-col justify-between">
          <div>
            <p className="text-5xl font-bold text-gray-400">4.9</p>
            <div className="flex justify-center my-2">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} className="text-red-500" />
              ))}
            </div>
            <p className="text-sm text-gray-500">200+ reviews</p>
          </div>
          <div className="flex justify-center mt-4 space-x-4 opacity-80">
            <FaJenkins className='text-4xl' />
          </div>
        </div>

        {/* Testimonial Cards */}
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6  shadow-sm h-full flex flex-col justify-between">
            <p className="text-gray-800 text-md leading-relaxed">
              {t.quote.split(' ').map((word, index) => {
                if (
                  ["reliable", "impressive", "Highly", "Definitely", "idea", "best user experience"].some(h =>
                    word.includes(h)
                  )
                ) {
                  return <strong key={index}>{word} </strong>;
                }
                return word + " ";
              })}
            </p>
            <div className="flex items-center mt-4">
              {/* <img src={t.image} alt={t.name} className="w-10 h-10  mr-3 object-cover" /> */}
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === 0 ? "bg-gray-800" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
      </div>
    </section>
  );
}
