import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    company: "Kodezi",
    quote: "Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive",
    name: "Israqh Khan",
    title: "CEO",
    image: "/user1.jpg",
  },
  {
    company: "tournated",
    quote: "Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great and quality smooth communication.",
    name: "Nick Fisher",
    title: "CEO",
    image: "/user2.jpg",
  },
  {
    company: "ActiveSync",
    quote: "Wavespace brought my idea to life. Taken great care of my business & implement best user experience possible",
    name: "Abraham Ajayi",
    title: "CEO",
    image: "/user3.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-900">Find your best design into us.</h2>
        <p className="text-2xl text-gray-500 font-semibold mt-2">We guarantee next success is yours!</p>
      </div>

      {/* Main grid with stretch items */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 items-stretch">
        
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
            <img src="/clutch.png" alt="Clutch" className="h-5" />
            <img src="/upwork.png" alt="Upwork" className="h-5" />
            <img src="/fiverr.png" alt="Fiverr Pro" className="h-5" />
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
              <img src={t.image} alt={t.name} className="w-10 h-10  mr-3 object-cover" />
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
    </section>
  );
}
