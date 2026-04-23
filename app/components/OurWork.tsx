"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { casesData } from "@/app/work/data";
import { fontSizes } from "@/site-data/tokens";

export default function OurWork() {
  return (
    <section className="w-full bg-[#fdf8f2] flex flex-col items-center py-20">
      <div className="text-center max-w-4xl mb-10 px-2 mt-10">
        <h2 className={`${fontSizes.sectionXL} font-medium tracking-tight text-black mb-6 leading-tight`}>
          Our Work
        </h2>
        <p className={`${fontSizes.description} text-gray-800 max-w-2xl mx-auto leading-relaxed`}>
          A selection of our recent digital and brand experiences.
        </p>
      </div>

      <div className="w-[95vw] md:w-[90vw] border-[2px] border-black bg-black">
        <div className="w-full flex flex-col md:flex-row h-[70vh] md:h-[85vh]">
          {casesData.slice(0, 3).map((caseItem, index, array) => (
            <WorkCard
              key={caseItem.id}
              caseItem={caseItem}
              isLast={index === array.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ caseItem, isLast }: { caseItem: typeof casesData[0]; isLast: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const borderClass = !isLast ? "border-b-[2px] md:border-b-0 md:border-r-[2px] border-black" : "";

  return (
    <Link
      href="/work"
      className={`relative w-full h-full flex-1 group overflow-hidden bg-black ${borderClass} cursor-pointer block`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        src={caseItem.video}
        autoPlay loop muted playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}
      />
      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <Image src={caseItem.image} alt={caseItem.imageAlt} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className={`${fontSizes.label} text-white/80 font-medium mb-1 tracking-widest`}>{caseItem.serial}</div>
          <h3 className="text-white text-3xl md:text-4xl font-normal tracking-tight uppercase">{caseItem.title}</h3>
        </div>
      </div>
    </Link>
  );
}
