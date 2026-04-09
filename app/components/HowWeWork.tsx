"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// Attempt to import MorphSVG. If it fails due to trial/club membership, we will still have the animation structure in place.
let MorphSVGPlugin: any;
try {
    MorphSVGPlugin = require("gsap/dist/MorphSVGPlugin").MorphSVGPlugin;
} catch(e) {
    console.warn("MorphSVGPlugin not found.");
}

import { workSteps } from "./data-how-we-work";
import { howWeWorkHeading, howWeWorkStepText } from "@/site-data/homepage/how-we-work";

export default function HowWeWork() {
    const containerRef = useRef<HTMLElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            if (MorphSVGPlugin) {
                gsap.registerPlugin(MorphSVGPlugin);
            }

            let ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        //markers:true,
                        trigger: containerRef.current,
                        start: "center center",
                        end: "+=400%", // Long scroll distance
                        pin: true,
                        scrub: 0.5,
                        onUpdate: (self) => {
                            // The timeline has a total duration of 6.5
                            // (0.5 hold) + (1 morph + 0.5 hold)*4
                            const time = self.progress * 6.5;
                            let index = 0;
                            
                            // Trigger the state change at the start of original morph phases
                            if (time >= 5.0) index = 4;
                            else if (time >= 3.5) index = 3;
                            else if (time >= 2.0) index = 2;
                            else if (time >= 0.5) index = 1;
                            
                            setActiveIndex(index);
                        }
                    }
                });

                // Create dummy timeline steps to provide correct scroll distance
                tl.to({}, { duration: 0.5 });
                workSteps.forEach((step, i) => {
                    if (i === 0) return;
                    tl.to({}, { duration: 1 });
                    tl.to({}, { duration: 0.5 });
                });
                
            }, containerRef);
            
            return () => ctx.revert();
        }
    }, []);

    // Independent Morph Animation - Always completes shape when activeIndex changes
    useEffect(() => {
        if (typeof window !== "undefined" && pathRef.current && MorphSVGPlugin) {
            gsap.to(pathRef.current, {
                morphSVG: workSteps[activeIndex].svgPath,
                duration: 0.8,
                ease: "power2.out",
                overwrite: "auto"
        
            });
        }
    }, [activeIndex]);

    const activeStep = workSteps[activeIndex];

    return (
        <div className="w-full bg-[#fdf8f2]">
            
            {/* Header: Moved OUT of the pinning section so it scrolls away naturally before we hit center viewport! */}
            <div className="w-full pt-20 pb-10 md:pt-32 md:pb-16">
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h2
                        className="text-5xl md:text-7xl font-normal tracking-tight text-black mb-6 md:mb-10 leading-tight"
                        style={{ fontFamily: howWeWorkHeading.titleFontFamily }}
                    >
                        How We Work
                    </h2>
                    <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto leading-relaxed">
                        The Designers World is built on a mix of creative thinking and clear
                        systems, so projects feel inspiring but also stay under control.
                    </p>
                </div>
            </div>

            {/* Pinned Section */}
            <section ref={containerRef} className="relative w-full flex justify-center h-screen overflow-hidden">
                <div className="w-full max-w-screen-2xl px-4 flex flex-col items-center h-full justify-center">
                    
                    {/* Steps Layout (Perfectly centered vertically in the viewport) */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 w-full max-w-7xl mx-auto relative mt-0">
                        
                        {/* Left: Title (Reverted back to slightly smaller text size) */}
                        <div className="w-full md:w-1/4 flex justify-center md:justify-end z-20 h-[100px] md:h-[150px] items-center">
                            <AnimatePresence mode="wait">
                                <motion.h3 
                                    key={activeStep.id + "-title"}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-normal text-black tracking-tight translate-x-0 md:translate-x-12"
                                    style={{ fontFamily: howWeWorkStepText.title.fontFamily }}
                                >
                                    {activeStep.title}
                                </motion.h3>
                            </AnimatePresence>
                        </div>

                        {/* Center: Morphing Shape */}
                        <div className="w-full md:w-2/4 flex justify-center relative z-0">
                            <div className="w-[256px] h-[256px] md:w-[480px] md:h-[480px] text-[#f26522] flex justify-center items-center">
                                <svg 
                                    viewBox="0 0 380 380" 
                                    className="w-full h-full fill-current" 
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path ref={pathRef} d={workSteps[0].svgPath} />
                                </svg>
                            </div>
                        </div>

                        {/* Right: Description (Arrow side-by-side with text, text size reduced) */}
                        <div className="w-full md:w-1/4 flex justify-center md:justify-start z-10 h-[100px] md:h-[150px] items-center md:-translate-x-12">
                            <div className="flex flex-row md:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-[420px]">
                                <div className="text-[#f26522] shrink-0">
                                    <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10l56 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M48 2l10 8-10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.p 
                                        key={activeStep.id + "-desc"}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-base md:text-lg lg:text-xl text-black leading-snug font-normal text-left"
                                    >
                                        {activeStep.description}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
