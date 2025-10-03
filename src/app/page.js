import FullMenu from "@/components/Global/FullMenu";
import AwardsAchievements from "@/components/Hero/AwardsSection";
import CircularGallery from "@/components/Hero/CircularGallary";
import DomeGallery from "@/components/Hero/DomeGallery";
import FounderTestimonials from "@/components/Hero/FoundersTestimonial";
import Hero from "@/components/Hero/Hero";
import HeroSection from "@/components/Hero/HeroSection";
import ScrollStack,{ScrollStackItem} from "@/components/Hero/ScrollStack";
import TestimonialSection from "@/components/Hero/TestimonialSection";
import TrustedCompanies from "@/components/Hero/TrustedCompanies";
import Video from "@/components/Hero/Video";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Hero/> */}
    <HeroSection/>
    <TrustedCompanies/>
    <Video/>
    <FounderTestimonials/>
    <CircularGallery/>
    <AwardsAchievements/>
    <TestimonialSection/>
     {/* <div style={{ width: '100vw', height: '100vh', position:"relative" }}>
      <DomeGallery />
    </div> */}
    {/* <FullMenu/> */}
    {/* <ScrollStack>

       <ScrollStackItem>
    <h2>Card 1</h2>
    <p>This is the first card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 2</h2>
    <p>This is the second card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 3</h2>
    <p>This is the third card in the stack</p>
  </ScrollStackItem>

      </ScrollStack> */}

    </>
  );
}
