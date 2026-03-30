"use client";

import React from "react";
import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Code as Github } from "lucide-react";
import { clientsHeading, clientLogos, clientsGridConfig } from "@/site-data/homepage/our-clients";

export default function LogosStaggeredGrid() {
  // Use abstract images via unsplash or placehold for shapes
  const images = Array.from({ length: 40 }, (_, i) => `https://placehold.co/400x300/e9ecef/adb5bd?text=LOGO+${i + 1}`);

  const bentoItems: BentoItem[] = [];

  return (
    <SmoothScroll>
      {/* Container background color adapted to match site's beige theme */}
      <section className="w-full relative bg-[#fdf8f2] pt-20 flex flex-col items-center overflow-hidden">
        {/* Simple Section Heading */}
        <div className="text-center max-w-4xl mx-auto px-4 w-full">
            <h2
                className="text-5xl md:text-7xl font-normal tracking-tight text-black leading-tight"
                style={{ fontFamily: clientsHeading.fontFamily }}
            >
                {clientsHeading.text}
            </h2>
        </div>

        <StaggeredGrid
          images={images}
          bentoItems={bentoItems}
          centerText="PARTNERS"
          showFooter={false}
        />
      </section>
    </SmoothScroll>
  );
}
