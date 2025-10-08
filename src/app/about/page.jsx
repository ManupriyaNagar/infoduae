import AboutJourney from '@/components/About/AboutJourney';
import OurServices from '@/components/About/OurService';
import TestimonialSection from '@/components/Hero/TestimonialSection';
import React from 'react';

export const metadata = {
    title: 'About Us | AlgoTrade',
    description: 'Learn about AlgoTrade, a leading investment platform for professionals. Our mission is to provide high-quality investment services to help you achieve your financial goals.',
  };

const About = () => {
    return (
        <div>
            <AboutJourney/>
            <OurServices/>
            <TestimonialSection/>
        </div>
    );
};

export default About;