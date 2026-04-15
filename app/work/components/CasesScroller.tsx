"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Link from "next/link";
import { casesData } from "../data";

export default function CasesScroller() {
    const containerRef = useRef<HTMLDivElement>(null);
    const total = casesData.length;
    
    // Each case gets 200vh of scroll time.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 40, stiffness: 150 });

    return (
        <section ref={containerRef} style={{ height: `${total * 200}vh` }} className="relative w-full bg-black z-20">
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                {casesData.map((c, i) => (
                    <CaseLayer key={c.id} data={c} progress={smoothProgress} index={i} total={total} />
                ))}
            </div>
        </section>
    );
}

const CaseLayer = ({ 
    data, 
    progress, 
    index, 
    total 
}: { 
    data: typeof casesData[0], 
    progress: MotionValue<number>, 
    index: number, 
    total: number 
}) => {
    const length = 1 / total;
    const start = index * length;
    const end = start + length;

    // Viewport calculations for smooth video background crossfading
    const pCrossStart = Math.max(0, start - length * 0.15);
    const pCrossEnd = start + length * 0.15;
    const pCrossOutStart = end - length * 0.15;
    const pCrossOutEnd = Math.min(1, end + length * 0.15);

    const videoOpacity = useTransform(
        progress,
        [pCrossStart, pCrossEnd, pCrossOutStart, pCrossOutEnd],
        [index === 0 ? 1 : 0, 1, 1, 0]
    );

    // Title Timeline Constraints
    const tInEnd = start + length * 0.25;
    const tOutStart = end - length * 0.25;

    // Title scrolls linearly across the entire timeline
    const titleY = useTransform(progress, [start, end], ["60vh", "-60vh"]);
    
    // Global title block fades to sync the serial number with the staggered text
    const titleOpacity = useTransform(progress, 
        [start, tInEnd, tOutStart, end], 
        [0, 1, 1, 0]
    );
    const titleBlurVal = useTransform(progress, 
        [start, tInEnd, tOutStart, end], 
        [30, 0, 0, 30]
    );
    const titleFilter = useTransform(titleBlurVal, (b) => `blur(${b}px)`);
    
    // Description timeline logic
    // Fades in around the midpoint, fades out at the end identically to the title
    const descFadeStart = start + length * 0.35;
    const descFadeInEnd = start + length * 0.45;
    const descOpacity = useTransform(progress, 
        [descFadeStart, descFadeInEnd, tOutStart, end], 
        [0, 1, 1, 0]
    );

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Background Video Layer */}
            <motion.div 
                className="absolute inset-0 w-full h-full bg-black z-0" 
                style={{ opacity: videoOpacity }}
            >
                <video 
                    src={data.video}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 w-full h-full">
                
                {/* Independent Scrolling Title Block */}
                <div className="absolute inset-0 p-6 sm:p-10 md:p-16 lg:p-24 pb-32 flex flex-col justify-center pointer-events-none">
                    <motion.div 
                        style={{ y: titleY }}
                        className="max-w-5xl flex flex-col p-12 -m-12"
                    >
                        <motion.span 
                            style={{ opacity: titleOpacity, filter: titleFilter }}
                            className="text-gray-300 font-medium text-lg md:text-xl tracking-widest mb-4"
                        >
                            {data.serial}
                        </motion.span>
                        <AnimatedTitle 
                            title={data.title} 
                            progress={progress} 
                            start={start} 
                            tInEnd={tInEnd} 
                            tOutStart={tOutStart} 
                            end={end} 
                        />
                    </motion.div>
                </div>

                {/* Independent Pinned Description & Button at Bottom Left */}
                <motion.div 
                    style={{ opacity: descOpacity }}
                    className="absolute left-6 sm:left-10 md:left-16 lg:left-24 bottom-12 md:bottom-20 flex flex-col items-start pointer-events-auto max-w-sm md:max-w-md"
                >
                    <p className="text-gray-300 text-lg md:text-[1.35rem] font-medium mb-8 leading-relaxed">
                        {data.description}
                    </p>
                    
                    <Link href={`/work/${data.id}`}>
                        <button className="flex items-center gap-2 group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all border border-white/20 text-white font-medium text-[15px] sm:text-[17px]">
                            <span>View Case</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
};

const AnimatedTitle = ({ title, progress, start, tInEnd, tOutStart, end }: any) => {
    const words = title.split(" ");
    let globalCharIndex = 0;
    const totalChars = Math.max(1, title.replace(/\s+/g, '').length);
    
    // We want the entering and exiting to be completely resolved within their respective timelines.
    const enterDuration = tInEnd - start;
    const exitDuration = end - tOutStart;

    return (
        <h2 className="text-white text-6xl md:text-[6rem] lg:text-[8.5rem] font-bold tracking-tighter leading-[1.1] m-0 pb-4 flex flex-wrap gap-x-4 md:gap-x-8">
            {words.map((word: string, wIndex: number) => {
                const chars = word.split("");
                return (
                    <span key={wIndex} className="inline-flex whitespace-nowrap">
                        {chars.map((char: string, cIndex: number) => {
                            const index = globalCharIndex++;
                            // Global staggered index calculation.
                            // The earliest letters start first. The total stagger takes up 60% of the timeline, 
                            // leaving 40% for the actual transition physics.
                            const enterBase = start + (enterDuration * 0.6 * (index / totalChars));
                            const enterEnd = enterBase + (enterDuration * 0.4);

                            const exitBase = tOutStart + (exitDuration * 0.6 * (index / totalChars));
                            const exitEnd = exitBase + (exitDuration * 0.4);

                            return (
                                <AnimatedCharacter 
                                    key={cIndex} 
                                    char={char} 
                                    progress={progress} 
                                    enterBase={enterBase} 
                                    enterEnd={enterEnd} 
                                    exitBase={exitBase} 
                                    exitEnd={exitEnd} 
                                />
                            );
                        })}
                    </span>
                );
            })}
        </h2>
    );
};

const AnimatedCharacter = ({ char, progress, enterBase, enterEnd, exitBase, exitEnd }: any) => {
    const opacity = useTransform(progress, [enterBase, enterEnd, exitBase, exitEnd], [0, 1, 1, 0]);
    const blurVal = useTransform(progress, [enterBase, enterEnd, exitBase, exitEnd], [20, 0, 0, 20]);
    const filter = useTransform(blurVal, (b) => `blur(${b}px)`);

    return (
        <motion.span 
            style={{ opacity, filter }} 
            className="inline-block"
        >
            {char}
        </motion.span>
    );
};
