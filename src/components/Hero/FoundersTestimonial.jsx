// components/FounderTestimonials.tsx
export default function FounderTestimonials() {
  const testimonials = [
    {
      name: "Investment Management",
      quote:
        "At infod, our Investment Management services are designed to help clients grow and preserve their wealth through strategic, data-driven asset management. We tailor our portfolio strategies to align with individual goals, risk profiles, and market dynamics providing comprehensive investment solutions that deliver long-term value and stability.",
    },
    {
      name: "Market Alerts",
      quote:
        "Stay ahead of the market with infod’s real-time trading insights. Our Market Alerts deliver accurate, timely signals that empower investors to make confident decisions and optimize their trading performance. With precision analytics and AI-powered forecasting, you’ll never miss an opportunity again.",
    },
    {
      name: "Uplearn",
      quote:
        "At infod, we believe in Uplearning — evolving beyond outdated methods and embracing innovative trading approaches. Through expert-led resources, practical insights, and AI-based strategy refinement, we help traders and investors redefine how they learn, trade, and grow in the modern financial landscape.",
    },
    {
      name: "Algo Trading Software",
      quote:
        "Our Next-Generation Algo Trading Software combines the power of automation, AI, and real-time analytics to execute trades with unmatched precision and speed. By eliminating manual errors and emotional biases, infod’s algorithms enable smarter, faster, and more consistent trading — giving you an edge in every market condition.",
    },
  ];

  return (
    <section className="py-16 bg-white container mx-auto px-4">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
        <div className="md:max-w-[40%]">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-12">
            Infod:{" "}
            <span className="text-transparent bg-gradient-to-r from-[#00FFAA] to-[#00BFA6] bg-clip-text">
              Intelligent Global Trading Solutions
            </span>
          </h1>
        </div>
        <div className="md:max-w-[60%] text-gray-800">
          <h2 className="text-lg md:text-xl leading-relaxed">
            At infod, we don’t just follow the markets we master them. Founded
            in Dubai, we’ve been at the forefront of financial innovation,
            empowering traders and investors with advanced algorithmic trading
            technologies.
          </h2>
          <br />
          <h2 className="text-lg md:text-xl leading-relaxed">
            Our mission is to simplify complex trading challenges through
            automation, precision, and data intelligence, ensuring seamless
            execution and superior performance across global markets.
          </h2>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="text-left border border-gray-300 p-6 rounded-2xl bg-gradient-to-r from-[#00FFAA] to-[#00BFA6] hover:bg-gray-200 transition"
          >
            <div className="mt-2">
              <div className="text-2xl font-semibold text-gray-900 mb-3">
                {item.name}
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                “{item.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
