"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface Service {
    number: string;
    title: string;
    description: string;
    color: string;
}

const services: Service[] = [
    {
        number: "01",
        title: "Web Design & Development",
        description: "Creating stunning, high-performance websites that capture your brand's essence and convert visitors into customers.",
        color: "bg-[#0b1221]", // Dark
    },
    {
        number: "02",
        title: "Digital Marketing",
        description: "Data-driven strategies to boost your online presence, drive traffic, and generate qualified leads for your business.",
        color: "bg-[#ff5a26]", // Orange
    },
    {
        number: "03",
        title: "Social Media Management",
        description: "Campaigns that move the needle, not just the metrics.",
        color: "bg-[#008ff5]", // Blue
    },
    {
        number: "04",
        title: "Brand Strategy",
        description: "Defining your unique voice and position in the market to build a lasting connection with your audience.",
        color: "bg-[#6bd4a1]", // Green
    },
];

interface CardProps extends Service {
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
    color,
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
                className={`relative flex flex-col justify-between w-[90vw] h-[85vh] rounded-[40px] p-6 md:p-10 text-white shadow-xl origin-top ${color} overflow-hidden`}
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
                        <div className="max-w-4xl flex flex-col justify-start pointer-events-auto mt-0">
                            <h3 className="text-5xl md:text-8xl font-normal tracking-tight leading-[1] mb-6">
                                {title}
                            </h3>
                            <p className="text-xl md:text-3xl font-light opacity-90 mb-12 max-w-xl leading-snug">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Placeholder - Right Side, Animated */}
                <div className="hidden md:block absolute right-12 bottom-12 lg:right-20 lg:bottom-16 w-[160px] lg:w-[240px] h-[224px] lg:h-[320px] bg-[#fcfcfc] rounded-[30px] shadow-sm rotate-[6deg] pointer-events-none z-10">
                    {/* Solid card look */}
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
                <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-black leading-tight">
                    What We Do
                </h2>
            </div>

            {/* Cards Container - Controls the scroll area */}
            <div ref={container} className="relative">
                {services.map((service, index) => {
                    // Last card shouldn't scale down, it should just scroll.
                    // Previous cards scale down significantly to "fall back".
                    // index 0 -> scales to 0.85
                    // index 1 -> scales to 0.90
                    // index 2 -> scales to 0.95
                    // index 3 -> stays 1
                    const targetScale = 1 - (services.length - 1 - index) * 0.05;
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
