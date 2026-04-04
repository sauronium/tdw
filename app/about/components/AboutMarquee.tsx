"use client";

import Image from "next/image";

const ROW_1 = [
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
];

const ROW_2 = [
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
  "/tdw-logo.svg",
];

function MarqueeRow({
  images,
  direction = "left",
  speed = 40,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate items so the loop is seamless
  const display = [...images, ...images, ...images];
  const isRight = direction === "right";

  return (
    <div className="relative w-full overflow-hidden select-none py-2">
      <div
        className="inline-flex gap-4 will-change-transform hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${isRight ? "right" : "left"} ${speed}s linear infinite`,
        }}
      >
        {display.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center bg-white border border-[#171717]/10 rounded-2xl px-6 w-[200px] h-[100px] md:w-[240px] md:h-[120px] transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-full pointer-events-none opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image 
                src={src} 
                alt="Partner Logo" 
                fill 
                className="object-contain" 
                sizes="(max-width: 768px) 200px, 240px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutMarquee() {
  return (
    <section className="w-full py-20 md:py-28 bg-[#fdf8f2] overflow-hidden">
      {/* Section label */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#171717] leading-[1.1]">
          Every craft,<br className="hidden md:block" /> under one roof.
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow images={ROW_1} direction="left" speed={35} />
        <MarqueeRow images={ROW_2} direction="right" speed={45} />
      </div>

      {/* Keyframe styles injected via a style tag */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
