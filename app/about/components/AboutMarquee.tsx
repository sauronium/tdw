"use client";

import React from "react";
import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

export default function AboutMarquee() {
  // Use abstract images via unsplash or placehold for shapes, similar to home page
  const images = Array.from({ length: 40 }, () => "/tdw-logo.svg");

  const bentoItems: BentoItem[] = [];

  return (
    <SmoothScroll>
      <section className="w-full relative bg-[#fdf8f2] pt-20 flex flex-col items-center overflow-hidden">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#171717] leading-[1.1]">
            Every craft,<br className="hidden md:block" /> under one roof.
          </h2>
        </div>

        <StaggeredGrid
          images={images}
          bentoItems={bentoItems}
          centerText="CRAFTS"
          showFooter={false}
        />
      </section>
    </SmoothScroll>
  );
}
