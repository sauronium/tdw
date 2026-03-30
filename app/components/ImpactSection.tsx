"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function ImpactSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // offset "start start" means sticky starts when top of container hits top of viewport.
        // offset "end end" means sticky ends when bottom of container hits bottom of viewport.
        offset: ["start start", "end end"]
    });

    // Outer circle rotates continuously during the scroll phase
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 160]);
    
    // Downwards arrow will be clipped out identically with the text

    // Text sliding up and disappearing as scrolling happens
    // Ordered to play out first so it is cleanly visible before the massive expansion
    const textY = useTransform(scrollYProgress, [0.15, 0.45], [0, -100]);
    
    // Fix: Framer motion string interpolation for clipPath requires useMotionTemplate to safely map percentages!
    const clipProgress = useTransform(scrollYProgress, [0.15, 0.45], [0, 100]);
    const textClipPath = useMotionTemplate`inset(${clipProgress}% 0% 0% 0%)`;
    
    // Inner circle starts at 35% and scales up to >2.85x to fully cover the 100% outer circle
    // Begins scaling after text starts disappearing, completes fully before the scroll ends
    const innerScale = useTransform(scrollYProgress, [0.4, 0.8], [1, 3.2]);

    return (
        <section className="relative w-full bg-[#fdf8f2] z-10 overflow-x-clip mt-16 md:mt-32">
            <div ref={containerRef} className="relative h-[300vh] w-full pt-8 md:pt-16">
                {/*  
                  Sticky container tracking the screen height. 
                  Removed overflow-hidden so the 135vw circular border is smoothly un-cropped!
                */}
                <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
                    <div className="relative w-[135vw] max-w-[1050px] aspect-square flex items-center justify-center rounded-full overflow-hidden shrink-0">
                        {/* Outer Circle Pattern (Image) */}
                        <motion.div 
                            style={{ rotate }}
                            className="absolute inset-0 w-full h-full rounded-full overflow-hidden origin-center"
                        >
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
                            className="absolute z-10 bg-[#fdf8f2] rounded-full w-[35%] h-[35%] origin-center"
                        />

                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            {/* Floating & sliding group */}
                            <motion.div style={{ y: textY }} className="relative flex flex-col items-center">
                                {/* Text mask box - this is the ONLY thing being clipped! */}
                                <motion.div style={{ clipPath: textClipPath }} className="bg-[#f26522] text-black px-9 py-3 md:px-16 md:py-6 rounded-md text-2xl md:text-5xl font-medium tracking-normal whitespace-nowrap">
                                    Less Noise, More Impact
                                </motion.div>

                                {/* Downward Arrow clipping in sync with the text */}
                                <motion.div style={{ clipPath: textClipPath }} className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-8 md:mt-12 flex justify-center">
                                    <svg width="24" height="60" viewBox="0 0 30 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 0L15 68M15 68L2 55M15 68L28 55" stroke="#f26522" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
