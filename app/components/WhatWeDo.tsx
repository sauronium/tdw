"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";
import {
    whatWeDoHeading,
    whatWeDoBackground,
    serviceCardStyles,
    services,
    type ServiceCard,
} from "@/site-data/homepage/what-we-do";

interface CardProps extends ServiceCard {
    i:           number;
    progress:    MotionValue<number>;
    range:       [number, number];
    targetScale: number;
}

const Card = ({
    i,
    title,
    description,
    number,
    backgroundTailwind,
    image,
    imageAlt,
    progress,
    range,
    targetScale,
}: CardProps) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    const rotations = ["-rotate-[6deg]", "rotate-[4deg]", "-rotate-[8deg]", "rotate-[5deg]"];

    return (
        <div ref={container} className={`h-screen flex items-center justify-center sticky top-0 ${i === 0 ? '' : 'mt-[40vh]'}`}>
            <motion.div
                style={{ scale, top: "calc(5vh)" }}
                className={`relative flex flex-col justify-between ${serviceCardStyles.width} ${serviceCardStyles.height} ${serviceCardStyles.borderRadius} ${serviceCardStyles.padding} text-white shadow-xl origin-top ${backgroundTailwind} overflow-hidden`}
            >
                {/* Watermark number — top right */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10 z-30">
                    <span className={`${serviceCardStyles.number.fontSize} ${serviceCardStyles.number.fontWeight} ${serviceCardStyles.number.opacity} select-none ${serviceCardStyles.number.lineHeight} ${serviceCardStyles.number.letterSpacing}`}>
                        {number}
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center md:justify-start h-full pointer-events-none relative z-10">
                    {/* Expertise badge */}
                    <div className={`w-full flex justify-start ${serviceCardStyles.badge.marginBottom} pointer-events-auto`}>
                        <span className={`${serviceCardStyles.badge.background} ${serviceCardStyles.badge.textColor} ${serviceCardStyles.badge.paddingX} ${serviceCardStyles.badge.paddingY} ${serviceCardStyles.badge.borderRadius} ${serviceCardStyles.badge.fontSize} ${serviceCardStyles.badge.fontWeight} ${serviceCardStyles.badge.letterSpacing}`}>
                            {serviceCardStyles.badge.text}
                        </span>
                    </div>

                    {/* Title + description */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full h-full pb-24 md:pb-32">
                        <div className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left pointer-events-auto mt-0 w-full">
                            <h3
                                className={`${serviceCardStyles.title.fontSize} ${serviceCardStyles.title.fontWeight} ${serviceCardStyles.title.letterSpacing} ${serviceCardStyles.title.lineHeight} ${serviceCardStyles.title.marginBottom} ${serviceCardStyles.title.color}`}
                                style={{ fontFamily: serviceCardStyles.title.fontFamily }}
                            >
                                {title}
                            </h3>
                            <p className={`${serviceCardStyles.description.fontSize} ${serviceCardStyles.description.fontWeight} ${serviceCardStyles.description.opacity} ${serviceCardStyles.description.lineHeight} ${serviceCardStyles.description.maxWidth} ${serviceCardStyles.description.color} mb-8`}>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Illustration — bottom right, desktop only */}
                <div className={`${serviceCardStyles.illustration.visibility} ${serviceCardStyles.illustration.position} ${serviceCardStyles.illustration.width} ${serviceCardStyles.illustration.aspectRatio} ${serviceCardStyles.illustration.borderRadius} shadow-sm pointer-events-none ${serviceCardStyles.illustration.zIndex} overflow-hidden bg-black/10 ${serviceCardStyles.illustration.border} ${rotations[i % 4]}`}>
                    <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
                </div>

                {/* Know more button — bottom left */}
                <button className={`${serviceCardStyles.button.position} z-20 flex items-center gap-4 ${serviceCardStyles.button.background} ${serviceCardStyles.button.textColor} ${serviceCardStyles.button.paddingLeft} ${serviceCardStyles.button.paddingRight} ${serviceCardStyles.button.paddingY} ${serviceCardStyles.button.borderRadius} ${serviceCardStyles.button.fontWeight} ${serviceCardStyles.button.hoverBackground} transition-colors w-max group pointer-events-auto`}>
                    <span className={serviceCardStyles.button.fontSize}>{serviceCardStyles.button.label}</span>
                    <div className={`${serviceCardStyles.button.arrowSize} rounded-full ${serviceCardStyles.button.arrowBg} ${serviceCardStyles.button.arrowColor} flex items-center justify-center transition-transform group-hover:rotate-45`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
        <section className={whatWeDoBackground.tailwind}>
            {/* Section title */}
            <div className={`w-full ${whatWeDoHeading.paddingTop} ${whatWeDoHeading.paddingBottom} flex flex-col items-center text-center px-4`}>
                <h2
                    className={`${whatWeDoHeading.fontSize} ${whatWeDoHeading.fontWeight} ${whatWeDoHeading.letterSpacing} ${whatWeDoHeading.colorTailwind} ${whatWeDoHeading.lineHeight}`}
                    style={{ fontFamily: whatWeDoHeading.fontFamily }}
                >
                    {whatWeDoHeading.text}
                </h2>
            </div>

            {/* Sticky scroll cards */}
            <div ref={container} className="relative">
                {services.map((service, index) => {
                    const targetScale = 1 - (services.length - 1 - index) * serviceCardStyles.stackScaleStep;
                    return (
                        <Card
                            key={index}
                            i={index}
                            {...service}
                            progress={scrollYProgress}
                            range={[index / services.length, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
