// components/FounderTestimonials.tsx
export default function FounderTestimonials() {
  const testimonials = [
    {
      name: "Matt Kabus",
      title: "CEO & Founder @LifeTales",
      company: "LifeTales",
      image: "/testimonials/matt.jpg",
      quote:
        "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
    },
    {
      name: "Ishraq Khan",
      title: "CEO @Kodezi",
      company: "Kodezi",
      image: "/testimonials/ishraq.jpg",
      quote:
        "Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive. An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!",
    },
    {
      name: "Nikita Ribakovs",
      title: "Founder & CEO @Tournated",
      company: "tournated",
      image: "/testimonials/nikita.jpg",
      quote:
        "Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great quality and smooth communication",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
        500+ Founders trusted us. Get return <br />
        on your <span className="text-gray-500">investment, multiplied!</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {testimonials.map((item, index) => (
          <div key={index} className="text-left">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-cover grayscale"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {item.company}
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-800">
              <div className="font-semibold">/ {item.name}</div>
              <div className="text-xs text-gray-500">{item.title}</div>
              <p className="mt-3 text-sm text-gray-700">"{item.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
