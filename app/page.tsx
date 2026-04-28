import SocialMediaSpecialists from "./components/SocialMediaSpecialists";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import WhatWeDo from "./components/WhatWeDo";
import OurWork from "./components/OurWork";
import WhyBrandsWorkWithUs from "./components/WhyBrandsWorkWithUs";
import HowWeWork from "./components/HowWeWork";
import LogosStaggeredGrid from "@/components/LogosStaggeredGrid";
import WhoWeWorkWith from "./about/components/WhoWeWorkWith";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf8f2]">
      <Hero />
      <div className="-mt-16 md:-mt-24 w-full">
        <ImpactSection />
      </div>
      <div className="-mt-16 md:-mt-24 w-full">
        <SocialMediaSpecialists />
      </div>
      <div className="-mt-16 md:-mt-24 w-full">
        <WhatWeDo />
      </div>
      <div className="mt-8 md:mt-16 w-full">
        <WhoWeWorkWith />
      </div>
      <div className="-mt-16 md:-mt-24 w-full">
        <OurWork />
      </div>
      <div className="-mt-16 md:-mt-24 w-full">
        <WhyBrandsWorkWithUs />
      </div>
      <div className="-mt-16 md:-mt-24 w-full">
        <HowWeWork />
      </div>
      <div className="-mt-16 md:-mt-24 w-full">
        <LogosStaggeredGrid />
      </div>
    </div>
  );
}
