import { notFound } from "next/navigation";
import ServicesHero from "./components/ServicesHero";
import SmoothScroll from "./components/SmoothScroll";
import AnimatedButton from "./components/AnimatedButton";
import ServicesIncludedSection from "./components/ServicesIncluded";
import ProcessSection from "./components/ProcessSection";
import DeliverablesSection from "./components/DeliverablesSection";
import TechStackSection from "./components/TechStackSection";
import StaticBlueSection from "./components/StaticBlueSection";
import { servicesData } from "@/site-data/services/data";
import Image from "next/image";
import Header from "../../components/Header";
// assuming Footer from app/components like other pages or we can just skip if it's in layout
// wait, Header and Footer are usually handled in layout or directly

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen relative w-full">
        <ServicesHero data={data} />
        
        {/* Next section */}
        <div className="flex flex-col relative z-20 pb-32 w-full pt-16 md:pt-24 bg-white">
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
               
               {/* Left Column Image + Title */}
               <div className="lg:col-span-4 flex flex-col items-start translate-y-0 md:translate-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#171717] mb-12 block">
                    {slug === "web-design-and-development" ? "The Vision" : "Overview"}
                  </h2>
                  <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[10px]">
                    <Image 
                      src={data.servicesIncluded?.[0]?.image || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"}
                      alt="Process block"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
               </div>
               
               {/* Right Column Text */}
               <div className="lg:col-span-8 flex flex-col items-start justify-start pt-16 md:pt-24">
                  <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-medium leading-[1.3] tracking-tight text-gray-900 max-w-2xl mb-12">
                    we&#39;re the {slug.replace('-', ' ')} agency that elevates brands into social icons. through a blend of data, creativity and strategy, we create lasting connections and fuel engagement.
                  </p>
                  <AnimatedButton href="/about">
                    about us
                  </AnimatedButton>
               </div>

             </div>
          </div>
        </div>

        {/* Services Included Section */}
        {data.servicesIncluded && <ServicesIncludedSection included={data.servicesIncluded} />}

        {/* Process Section */}
        {data.process && <ProcessSection process={data.process} />}

        {/* Tech Stack Section */}
        {data.techStack && <TechStackSection items={data.techStack} />}

        {/* Deliverables Section */}
        {data.deliverables && <DeliverablesSection deliverables={data.deliverables} />}

        {/* Static CTA Banner */}
        {data.ctaText && <StaticBlueSection data={data} />}

      </main>
    </SmoothScroll>
  );
}
