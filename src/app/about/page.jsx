import AboutJourney from '@/components/About/AboutJourney';
import OurServices from '@/components/About/OurService';
import TestimonialSection from '@/components/Hero/TestimonialSection';
import React from 'react';

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