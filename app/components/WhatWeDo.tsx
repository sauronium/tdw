"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { whatWeDoHeading, serviceCardStyles, services, ServiceCard } from "@/site-data/homepage/what-we-do";

interface CardProps extends ServiceCard {
    i: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card: React.FC<CardProps> = ({
    i,
    title,
    description,
    number,
    backgroundTailwind,
    image,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(5vh)`,
                }}
                className={`relative flex flex-col justify-between w-[90vw] h-[85vh] rounded-[40px] p-6 md:p-10 text-white shadow-xl origin-top ${backgroundTailwind} overflow-hidden`}
            >
                {/* Number - Absolute Top Right */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10 z-30">
                    <span className="text-6xl md:text-[120px] font-medium opacity-40 select-none leading-none tracking-tighter">
                        {number}
                    </span>
                </div>

                {/* Content Container */}
                <div className="flex flex-col h-full pointer-events-none relative z-10">
                    {/* Expertise Badge */}
                    <div className="w-full flex justify-start mb-4 pointer-events-auto">
                        <span className="bg-white text-black px-6 py-2 rounded-full text-base font-semibold tracking-wide">
                            Expertise
                        </span>
                    </div>

                    {/* Main Text Content - Moved up */}
                    <div className="flex flex-col md:flex-row justify-between items-start w-full h-full">
                        <div className="max-w-3xl lg:max-w-4xl flex flex-col justify-start pointer-events-auto mt-0">
                            <h3 className="text-4xl md:text-6xl lg:text-[76px] font-normal tracking-tight leading-[0.95] md:leading-[1] mb-5 md:mb-6"
                                style={{ fontFamily: serviceCardStyles.title.fontFamily }}
                            >
                                {title}
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light opacity-90 mb-8 max-w-sm md:max-w-md lg:max-w-xl leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Illustration - Right Side */}
                <div 
                    className={`hidden md:block absolute right-8 bottom-8 lg:right-16 lg:bottom-12 w-[180px] lg:w-[260px] xl:w-[300px] aspect-[3/4] rounded-[30px] shadow-sm pointer-events-none z-10 overflow-hidden bg-black/10 border-4 md:border-8 border-black/10 ${
                        i % 4 === 0 ? '-rotate-[6deg]' : 
                        i % 4 === 1 ? 'rotate-[4deg]' : 
                        i % 4 === 2 ? '-rotate-[8deg]' : 
                        'rotate-[5deg]'
                    }`}
                >
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Button - Absolute Positioned */}
                <button className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 flex items-center gap-4 bg-white text-black pl-8 pr-2 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-max group pointer-events-auto">
                    <span className="text-lg">Know more</span>
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </button>
            </motion.div>
        </div>
    );
};

export default function WhatWeDo() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section className="bg-[#fdf8f2]">
            {/* Title Section - Scrolls away normally */}
            <div className="w-full pt-32 pb-20 flex flex-col items-center text-center px-4">
                <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-black leading-tight"
                    style={{ fontFamily: whatWeDoHeading.fontFamily }}
                >
                    What We Do
                </h2>
            </div>

            {/* Cards Container - Controls the scroll area */}
            <div ref={container} className="relative">
                {services.map((service, index) => {
                    // Last card shouldn't scale down, it should just scroll.
                    // Previous cards scale down significantly to "fall back".
                    // index 0 -> scales to 0.70
                    // index 1 -> scales to 0.80
                    // index 2 -> scales to 0.90
                    // index 3 -> stays 1
                    const targetScale = 1 - (services.length - 1 - index) * 0.1;
                    return (
                        <Card
                            key={index}
                            i={index}
                            {...service}
                            progress={scrollYProgress}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
