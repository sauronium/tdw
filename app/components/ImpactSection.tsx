"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImpactSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textTrackRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: textProgress } = useScroll({
        target: textTrackRef,
        offset: ["start center", "end start"]
    });

    // Outer circle rotates slowly 90 degrees
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
    
    // Inner circle starts at 40% and scales up to 2.5x to fill the 100% container
    const innerScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 2.6]);

    // Text slides up slightly and clips like a drawer smoothly tracked by a static invisible center ref
    const textY = useTransform(textProgress, [0, 1], [0, -100]);
    const textClipPath = useTransform(textProgress, [0, 1], ["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"]);

    return (
        <section ref={containerRef} className="relative w-full bg-[#fdf8f2] overflow-x-clip pb-32 md:pb-48 flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center justify-center -mt-[min(45vw,350px)] z-10">
                <div className="relative w-[135vw] max-w-[1050px] aspect-square flex items-center justify-center rounded-full overflow-hidden shrink-0 mb-10">
                    {/* Outer Circle Pattern (Image) */}
                    <motion.div 
                        style={{ rotate }}
                        className="absolute inset-0 w-full h-full rounded-full overflow-hidden origin-center"
                    >
                        {/* Using a placeholder design collage image since a specific inner-circle/outer-circle image wasn't found in public dir */}
                        {/* In production, replace src with the collage image for the noise */}
                        <img 
                            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1400&auto=format&fit=crop"
                            alt="Design Collage"
                            className="w-full h-full object-cover opacity-80"
                        />
                    </motion.div>

                    {/* Inner Circle (White) */}
                    <motion.div 
                        style={{ scale: innerScale }}
                        className="absolute z-10 bg-white rounded-full w-[45%] h-[45%] origin-center"
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        {/* Static anchor for reliable scroll tracking (avoids jitter) */}
                        <div ref={textTrackRef} className="absolute w-[10px] h-[60px] pointer-events-none" />

                        {/* Floating & sliding group */}
                        <motion.div style={{ y: textY }} className="relative flex flex-col items-center">
                            {/* Text mask box - this is the ONLY thing being clipped! */}
                            <motion.div style={{ clipPath: textClipPath }} className="bg-[#f26522] text-black px-9 py-3 md:px-16 md:py-6 rounded-md text-2xl md:text-5xl font-medium tracking-normal whitespace-nowrap">
                                Less Noise, More Impact
                            </motion.div>

                            {/* Unclipped downward Arrow */}
                            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-8 md:mt-12 flex justify-center">
                                <svg width="24" height="60" viewBox="0 0 30 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 0L15 68M15 68L2 55M15 68L28 55" stroke="#f26522" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
