
import CircularGallery from "@/components/Hero/CircularGallary";
import CurrencyMarketStrategies from "@/components/Hero/CurrencyMarketStrategies";

import FounderTestimonials from "@/components/Hero/FoundersTestimonial";

import HeroSection from "@/components/Hero/HeroSection";
import LastSection from "@/components/Hero/LastSection";
import LastSection1 from "@/components/Hero/LastSection1";
import LastSection2 from "@/components/Hero/LastSection2";

import TestimonialSection from "@/components/Hero/TestimonialSection";

import Video from "@/components/Hero/Video";
import WhyTradersPrefer from "@/components/Hero/WhyTradersPrefer";


export default function Home() {
  return (
    <>
      <HeroSection />
      <CircularGallery />
      <Video />
      <FounderTestimonials />
      <CurrencyMarketStrategies />
      <LastSection2 />
      <LastSection />
      <LastSection1 />
      <WhyTradersPrefer />
      <CircularGallery />
      <TestimonialSection />
    </>
  );
}
