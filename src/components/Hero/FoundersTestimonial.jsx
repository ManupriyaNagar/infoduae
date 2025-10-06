// components/FounderTestimonials.tsx
export default function FounderTestimonials() {
  const testimonials = [
    {
      name: "Investment Management",
      title: "CEO & Founder @LifeTales",
      company: "LifeTales",
      image: "/testimonials/matt.jpg",
      quote:
        "At infod, our Investment Management services are designed to help clients grow and preserve their wealth through strategic, data-driven asset management. We tailor our portfolio strategies to align with individual goals, risk profiles, and market dynamics  providing comprehensive investment solutions that deliver long-term value and stability.",
    },
    {
      name: "Market Alerts",
      title: "CEO @Kodezi",
      company: "Kodezi",
      image: "/testimonials/ishraq.jpg",
      quote:
        "Stay ahead of the market with infod’s real-time trading insights. Our Market Alerts deliver accurate, timely signals that empower investors to make confident decisions and optimize their trading performance. With precision analytics and AI-powered forecasting, you’ll never miss an opportunity again.",
    },
    {
      name: "Uplearn",
      title: "Founder & CEO @Tournated",
      company: "tournated",
      image: "/testimonials/nikita.jpg",
      quote:
        "At infod, we believe in Uplearning — evolving beyond outdated methods and embracing innovative trading approaches. Through expert-led resources, practical insights, and AI-based strategy refinement, we help traders and investors redefine how they learn, trade, and grow in the modern financial landscape.",
    },
    {
      name:"Algo Trading Software",
      quote:"Our Next-Generation Algo Trading Software combines the power of automation, AI, and real-time analytics to execute trades with unmatched precision and speed. By eliminating manual errors and emotional biases, infod’s algorithms enable smarter, faster, and more consistent trading — giving you an edge in every market condition."
    }
  ];

  return (
    <section className="py-16 bg-white  container mx-auto">
      <div className="container mx-auto">
      <div className="flex justify-between gap-10">
        <div className="max-w-[40%]">
      <h1 className="text-6xl font-bold text-gray-900 mb-12 ">
       infod: <span className="text-gray-500"> Intelligent Global Trading Solutions</span> 
      </h1>
      </div>
      <div className="max-w-[60%]">
      <h2 className="text-xl">At infod, we don’t just follow the markets we master them.
Founded in Dubai, we’ve been at the forefront of financial innovation, empowering traders and investors with advanced algorithmic trading technologies.</h2>
<br />
<h2 className="text-xl">Our mission is to simplify complex trading challenges through automation, precision, and data intelligence, ensuring seamless execution and superior performance across global markets.</h2>
      </div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-justify  ">
        {testimonials.map((item, index) => (
          <div key={index} className="text-left border p-4 bg-gray-200">
            <div className="relative">
            
            </div>
            <div className="mt-4 text-2xl text-gray-800">
              <div className="font-semibold"> {item.name}</div>
     
              <p className="mt-3 text-xl text-gray-700">"{item.quote}"</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
