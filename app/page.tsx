import WhoWeAre from "./components/WhoWeAre";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyBrandsWorkWithUs from "./components/WhyBrandsWorkWithUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf8f2]">
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <WhyBrandsWorkWithUs />
    </div>
  );
}
