"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function AboutJourney() {
  return (
    <section className="bg-[#f8f8f8] text-black py-16  font-sans">
      {/* Top Section */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-6xl font-semibold">
              Discover our journey <br /> and what drives us
            </h2>
          </div>
          <div className="flex-1 text-gray-600 text-xl leading-relaxed">
            <p>
              Founded by data experts, we create cutting-edge SaaS analytics
              platforms tailored for businesses of all sizes.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/37/32/33/1000_F_237323398_ols6gcwYZtiA0mgY2z3lUIHL0V6UXQZC.jpg" // replace with your image
            alt="Our Team"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white mt-12 rounded-xl shadow-sm p-8 md:p-12 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              We are passionate about empowering individuals and businesses to
              take control of their finances and achieve their financial goals.
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              We are dedicated to revolutionizing the way individuals and
              businesses manage their finances. Our team is committed to
              providing intuitive and innovative solutions that empower our
              users to achieve financial success.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#f8f8f8] px-4 py-2 rounded-full text-sm">
            <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <span className="font-medium">4.97/5</span>
            <span className="text-gray-500">from</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-3xl font-semibold mb-2">16+</h4>
            <p className="text-gray-600 text-sm">
              years of experience
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold mb-2">1000+</h4>
            <p className="text-gray-600 text-sm">
             clients
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold mb-2">10M+</h4>
            <p className="text-gray-600 text-sm">
              Assets managed
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold mb-2">73%</h4>
            <p className="text-gray-600 text-sm">
              success rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
