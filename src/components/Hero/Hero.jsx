import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-6 md:px-12">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
           style={{ backgroundImage: `url('https://cdn.prod.website-files.com/65f43fad61f335b69f146adb/67cfd91d7e2d5d5cd410a808_walbi-hero-img-small.avif')` }}>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        {/* Logo */}
        <div className="text-6xl font-bold tracking-wide">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold">WALBI</h1>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-2xl font-light">
          AI ENHANCED CRYPTO TRADING
        </p>

        {/* CTA Button */}
        <a href="#trade" className="relative bottom-0 bg-green-500 text-white py-3 px-8 rounded-lg text-xl hover:bg-green-600 transition duration-300">
          Trade Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
