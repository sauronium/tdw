"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { impactSectionData } from "@/site-data/homepage/impact-section";

export default function ImpactSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const { animation, outerCircle, innerCircle, arrow } = impactSectionData;

    const rotate = useTransform(scrollYProgress,
        [animation.outerRotation.from, animation.outerRotation.to],
        [0, outerCircle.rotationDegrees]
    );

    const textY = useTransform(scrollYProgress,
        [animation.textSlideUp.start, animation.textSlideUp.end],
        [animation.textSlideYPx.from, animation.textSlideYPx.to]
    );

    const clipProgress = useTransform(scrollYProgress,
        [animation.textSlideUp.start, animation.textSlideUp.end],
        [0, 100]
    );
    const textClipPath = useMotionTemplate`inset(${clipProgress}% 0% 0% 0%)`;

    const innerScale = useTransform(scrollYProgress,
        [animation.innerScale.start, animation.innerScale.end],
        [1, innerCircle.maxScale]
    );

    return (
        <section className={`relative w-full ${impactSectionData.background.tailwind} z-10 overflow-x-clip mt-16 md:mt-32`}>
            <div ref={containerRef} className={`relative ${impactSectionData.scrollHeight} w-full ${impactSectionData.topPadding}`}>
                <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
                    <div className={`relative mt-32 md:mt-52 ${outerCircle.width} ${outerCircle.maxWidth} aspect-square flex items-center justify-center rounded-full overflow-hidden shrink-0 -translate-y-[7.5%]`}>
                        {/* Outer rotating circle with background image */}
                        <motion.div
                            style={{ rotate }}
                            className="absolute inset-0 w-full h-full rounded-full overflow-hidden origin-center"
                        >
                            <img
                                src={outerCircle.backgroundImage.src}
                                alt={outerCircle.backgroundImage.alt}
                                className={`w-full h-full object-cover ${outerCircle.backgroundImage.opacity}`}
                            />
                        </motion.div>

                        {/* Inner expanding circle */}
                        <motion.div
                            style={{
                                scale: innerScale,
                                backgroundColor: innerCircle.backgroundColor,
                                width:  `${innerCircle.startSizePercent}%`,
                                height: `${innerCircle.startSizePercent}%`,
                            }}
                            className="absolute z-10 rounded-full origin-center"
                        />

                        {/* Text overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <motion.div style={{ y: textY }} className="relative flex flex-col items-center">
                                <motion.div
                                    style={{ clipPath: textClipPath }}
                                    className={`${impactSectionData.tagline.backgroundTailwind} ${impactSectionData.tagline.textColor} ${impactSectionData.tagline.paddingX} ${impactSectionData.tagline.paddingY} ${impactSectionData.tagline.borderRadius} ${impactSectionData.tagline.fontSize} ${impactSectionData.tagline.fontWeight} ${impactSectionData.tagline.letterSpacing} ${impactSectionData.tagline.whiteSpace}`}
                                >
                                    {impactSectionData.tagline.text}
                                </motion.div>

                                {/* Arrow clipped in sync with text */}
                                <motion.div style={{ clipPath: textClipPath }} className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-8 md:mt-12 flex justify-center">
                                    <svg
                                        width={arrow.width}
                                        height={arrow.height}
                                        viewBox="0 0 30 70"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 0L15 68M15 68L2 55M15 68L28 55"
                                            stroke={arrow.stroke}
                                            strokeWidth={arrow.strokeWidth}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
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
