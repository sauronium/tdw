import SocialMediaSpecialists from "./components/SocialMediaSpecialists";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import WhatWeDo from "./components/WhatWeDo";
import OurWork from "./components/OurWork";
import WhyBrandsWorkWithUs from "./components/WhyBrandsWorkWithUs";
import HowWeWork from "./components/HowWeWork";
import LogosStaggeredGrid from "@/components/LogosStaggeredGrid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Hero />
      <ImpactSection />
      <SocialMediaSpecialists />
      <WhatWeDo />
      <OurWork />
      <WhyBrandsWorkWithUs />
      <HowWeWork />
      <LogosStaggeredGrid />
    </div>
  );
}
