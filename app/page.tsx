import SocialMediaSpecialists from "./components/SocialMediaSpecialists";
import WhoWeAre from "./components/WhoWeAre";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import WhatWeDo from "./components/WhatWeDo";
import WhyBrandsWorkWithUs from "./components/WhyBrandsWorkWithUs";
import HowWeWork from "./components/HowWeWork";
import LogosStaggeredGrid from "@/components/LogosStaggeredGrid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf8f2]">
      <Hero />
      <ImpactSection />
      <SocialMediaSpecialists />
      <WhoWeAre />
      <WhatWeDo />
      <WhyBrandsWorkWithUs />
      <HowWeWork />
      <LogosStaggeredGrid />
    </div>
  );
}
