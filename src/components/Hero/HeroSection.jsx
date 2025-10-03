import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:py-24 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        
        {/* === Left Content Section: Headline and CTAs === */}
        <div className="w-full lg:w-3/5 mb-10 lg:mb-0">
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
         Unlocking the Future of Financial Trading with Next-Generation Algo Software
            {/* SaaS Companies Gradient Text */}
            <span 
              className="block bg-gradient(90deg, #9333ea, #a855f7, #d8b4fe) bg-clip-text text-transparent transform translate-x-1/4 -translate-y-1"
            >
              Saas Companies
            </span>
            
            {/* Future Unicorns Gradient Text */}
            <span 
              className="block bg-gradient-unicorns bg-clip-text text-transparent transform translate-x-1/2 -translate-y-2"
            >
              future unicorns
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex space-x-4 mt-10">
            <a
              href="#"
              className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex items-center"
            >
              Book a call
              {/* Optional: Add a right arrow icon */}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a
              href="#"
              className="border border-gray-400 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:border-gray-900 transition duration-300"
            >
              View case studies
            </a>
          </div>
        </div>

        {/* === Right Content Section: Social Proof === */}
        <div className="w-full lg:w-2/5 text-right flex flex-col items-center lg:items-end pt-12 lg:pt-0">
          
          {/* Descriptive Text */}
          <p className="text-gray-700 max-w-sm mb-4 text-left lg:text-right">
            We deliver globally UI UX & web design smoothly, without delay, saving your time and money with an efficient process.
          </p>
          
          {/* Rating / Logos (Mockup - replace with actual images/SVGs) */}
          <div className="flex items-center space-x-4">
            {/* Placeholder for Logo 1: 400Founders */}
            <div className="flex flex-col items-center">
                <span className="text-4xl font-black text-gray-800 leading-none">400</span>
                <span className="text-xs text-gray-500">Founders</span>
            </div>

            {/* Placeholder for Logo 2: Loved by */}
            <div className="flex flex-col items-center">
                {/* A small heart icon for "Loved by" */}
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                <span className="text-xs text-gray-500">Loved by 500+ Founders</span>
            </div>

            {/* Placeholder for Logo 3 & Ratings */}
            <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-red-600">C</span>
                <div className="flex flex-col items-start">
                    {/* 5 Red Stars */}
                    <div className="text-red-500 flex text-lg">
                        {'★'.repeat(5)}
                    </div>
                    <span className="text-xs text-gray-500">13 REVIEWS</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;