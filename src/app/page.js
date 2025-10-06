import ForexStrategiesSection from "@/components/Forex/ForexStrategiesSection";
import FullMenu from "@/components/Global/FullMenu";
import AwardsAchievements from "@/components/Hero/AwardsSection";
import CircularGallery from "@/components/Hero/CircularGallary";
import CurrencyMarketStrategies from "@/components/Hero/CurrencyMarketStrategies";
import DomeGallery from "@/components/Hero/DomeGallery";
import FounderTestimonials from "@/components/Hero/FoundersTestimonial";
import Hero from "@/components/Hero/Hero";
import HeroSection from "@/components/Hero/HeroSection";
import LastSection from "@/components/Hero/LastSection";
import LastSection1 from "@/components/Hero/LastSection1";
import LastSection2 from "@/components/Hero/LastSection2";
import ScrollStack, { ScrollStackItem } from "@/components/Hero/ScrollStack";
import TestimonialSection from "@/components/Hero/TestimonialSection";
import TrustedCompanies from "@/components/Hero/TrustedCompanies";
import Video from "@/components/Hero/Video";
import WhyTradersPrefer from "@/components/Hero/WhyTradersPrefer";
import Image from "next/image";

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
