"use client";

export default function OurServices() {
  return (
    <section className="bg-black text-gray-800 py-20 px-6 md:px-20 font-sans">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00FFAA] ">
          Our Services
        </h2>
        <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mt-4">
          At <span className="font-semibold text-[#00FFAA] ">InfodD</span>, we empower individuals and businesses 
          with data-driven financial insights, helping them stay ahead in a rapidly evolving market.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <div className="text-3xl">💹</div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Uplearn</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in continuously uplearning—transforming outdated financial
              practices with smarter, data-backed strategies to drive long-term success.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
              <div className="text-3xl">📊</div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Investment Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Our tailored investment solutions are designed around your financial
              objectives and risk appetite — ensuring your portfolio grows with stability
              and precision.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6">
              <div className="text-3xl">📈</div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Market Alerts</h3>
            <p className="text-gray-600 leading-relaxed">
              Get real-time insights, alerts, and signals to make informed trading
              decisions and seize market opportunities with confidence.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-gradient-to-r from-white to-gray-50 mt-20 rounded-2xl shadow-sm p-10 md:p-12 text-left border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Our Commitment to You
          </h3>
          <div className="space-y-4">
            <p className="text-gray-600 text-base leading-relaxed">
              At <span className="font-semibold text-[#00FFAA]">InfodD</span>, your growth is our mission. 
              We believe our success is built on the trust and satisfaction of our clients. 
              That's why we focus on fostering lasting relationships grounded in transparency, 
              collaboration, and integrity.  
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Our team takes the time to understand your unique financial goals 
              and crafts personalized strategies that help you achieve them — 
              with clarity, confidence, and innovation at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}