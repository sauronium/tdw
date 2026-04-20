"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
let MorphSVGPlugin: any;
try {
    MorphSVGPlugin = require("gsap/dist/MorphSVGPlugin").MorphSVGPlugin;
} catch(e) {
    console.warn("MorphSVGPlugin not found.");
}

import {
    workSteps,
    howWeWorkHeading,
    howWeWorkStepText,
    howWeWorkShapeColor,
    howWeWorkArrow,
    howWeWorkBackground,
} from "@/site-data/homepage/how-we-work";

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
                        trigger: containerRef.current,
                        start: "center center",
                        end: "+=400%",
                        pin: true,
                        scrub: 0.5,
                        onUpdate: (self) => {
                            const time = self.progress * 6.5;
                            let index = 0;
                            if (time >= 5.0) index = 4;
                            else if (time >= 3.5) index = 3;
                            else if (time >= 2.0) index = 2;
                            else if (time >= 0.5) index = 1;
                            setActiveIndex(index);
                        }
                    }
                });

                tl.to({}, { duration: 0.5 });
                workSteps.forEach((_step, i) => {
                    if (i === 0) return;
                    tl.to({}, { duration: 1 });
                    tl.to({}, { duration: 0.5 });
                });

            }, containerRef);

            return () => ctx.revert();
        }
    }, []);

    const svgContainerRef = useRef<HTMLDivElement>(null);
    const isInitialRender = useRef(true);

    useEffect(() => {
        if (typeof window !== "undefined" && pathRef.current && svgContainerRef.current) {

            if (isInitialRender.current) {
                isInitialRender.current = false;
                if (MorphSVGPlugin) {
                    gsap.set(pathRef.current, { morphSVG: workSteps[activeIndex].svgPath });
                }
                return;
            }

            const tl = gsap.timeline({ overwrite: "auto" });
            tl.to(svgContainerRef.current, { scale: 1.15, duration: 0.2,  ease: "power1.out" })
              .to(svgContainerRef.current, { scale: 0.95,  duration: 0.15, ease: "power1.in"  })
              .to(svgContainerRef.current, { scale: 1.2,   duration: 0.2,  ease: "power1.out" })
              .to(svgContainerRef.current, { scale: 1,     duration: 0.85, ease: "bounce.out" });

            gsap.to(svgContainerRef.current, {
                rotation: "+=360",
                duration: 1.4,
                transformOrigin: "50% 50%",
                ease: "back.out(1.2)",
                overwrite: "auto"
            });

            if (MorphSVGPlugin) {
                gsap.to(pathRef.current, {
                    morphSVG: workSteps[activeIndex].svgPath,
                    duration: 0.8,
                    delay: 0.35,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            }
        }
    }, [activeIndex]);

    const activeStep = workSteps[activeIndex];

    return (
        <div className={`w-full ${howWeWorkBackground.tailwind}`}>

            {/* Header — scrolls away before the pinned section activates */}
            <div className={`w-full ${howWeWorkHeading.paddingTop} ${howWeWorkHeading.paddingBottom}`}>
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h2
                        className={`${howWeWorkHeading.titleFontSize} ${howWeWorkHeading.titleFontWeight} ${howWeWorkHeading.titleLetterSpacing} ${howWeWorkHeading.titleColorTailwind} ${howWeWorkHeading.titleMarginBottom} ${howWeWorkHeading.titleLineHeight}`}
                        style={{ fontFamily: howWeWorkHeading.titleFontFamily }}
                    >
                        {howWeWorkHeading.title}
                    </h2>
                    <p className={`${howWeWorkHeading.subtitleFontSize} ${howWeWorkHeading.subtitleColorTailwind} max-w-2xl mx-auto ${howWeWorkHeading.subtitleLineHeight}`}>
                        {howWeWorkHeading.subtitle}
                    </p>
                </div>
            </div>

            {/* Pinned Section */}
            <section ref={containerRef} className="relative w-full flex justify-center h-screen overflow-hidden">
                <div className="w-full max-w-screen-2xl px-4 flex flex-col items-center h-full justify-center">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 w-full max-w-7xl mx-auto relative mt-0">

                        {/* Left: Step title */}
                        <div className="w-full md:w-1/4 flex justify-center md:justify-end z-20 h-[100px] md:h-[150px] items-center">
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={activeStep.id + "-title"}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className={`${howWeWorkStepText.title.fontSize} ${howWeWorkStepText.title.fontWeight} ${howWeWorkStepText.title.colorTailwind} ${howWeWorkStepText.title.letterSpacing} translate-x-0 md:translate-x-12`}
                                    style={{ fontFamily: howWeWorkStepText.title.fontFamily }}
                                >
                                    {activeStep.title}
                                </motion.h3>
                            </AnimatePresence>
                        </div>

                        {/* Center: Morphing shape */}
                        <div className="w-full md:w-2/4 flex justify-center relative z-0">
                            <div
                                ref={svgContainerRef}
                                className="w-[256px] h-[256px] md:w-[480px] md:h-[480px] flex justify-center items-center"
                                style={{ color: howWeWorkShapeColor.fill }}
                            >
                                <svg
                                    viewBox="0 0 350 350"
                                    className="w-full h-full fill-current"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path ref={pathRef} d={workSteps[0].svgPath} />
                                </svg>
                            </div>
                        </div>

                        {/* Right: Description */}
                        <div className="w-full md:w-1/4 flex justify-center md:justify-start z-10 h-[100px] md:h-[150px] items-center md:-translate-x-12">
                            <div className="flex flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-[420px]">
                                <div className="shrink-0" style={{ color: howWeWorkArrow.stroke }}>
                                    <svg
                                        width={howWeWorkArrow.width}
                                        height={howWeWorkArrow.height}
                                        viewBox="0 0 60 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 10l56 0" stroke="currentColor" strokeWidth={howWeWorkArrow.strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M48 2l10 8-10 8" stroke="currentColor" strokeWidth={howWeWorkArrow.strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={activeStep.id + "-desc"}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`${howWeWorkStepText.description.fontSize} ${howWeWorkStepText.description.colorTailwind} ${howWeWorkStepText.description.lineHeight} ${howWeWorkStepText.description.fontWeight} text-left`}
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
