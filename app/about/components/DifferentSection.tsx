"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function DifferentSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Title fades and scrolls out first
    const titleY = useTransform(smoothProgress, [0, 0.25], ["0%", "-200%"]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    // Continuous horizontal flow starts afterwards
    // Cards start off-screen to the right and only begin moving at 20% scroll progress
    const groupX = useTransform(smoothProgress, [0.2, 1], ["100vw", "-120vw"]);

    const cards = [
        {
            title: "Design + development in one team.",
            desc: "So your vision doesn't get \"lost in handover\" and show up as a distant cousin at launch.",
            bg: "bg-[#6bb88b]",
            rotate: "-rotate-3",
            translateY: "translate-y-4 md:translate-y-8",
        },
        {
            title: "We design for outcomes, not applause",
            desc: "clarity, consistency, and conversion over noise.",
            bg: "bg-[#ed6e33]",
            rotate: "rotate-2",
            translateY: "-translate-y-2 md:-translate-y-4",
        },
        {
            title: "Premium polish, practical brains.",
            desc: "beautiful on the outside, built right underneath.",
            bg: "bg-[#4a88f5]",
            rotate: "-rotate-2",
            translateY: "translate-y-6 md:translate-y-12",
        },
        {
            title: "Swift execution, uncompromising quality.",
            desc: "no drawn out timelines or endless revisions, just results.",
            bg: "bg-[#a364ff]",
            rotate: "rotate-4",
            translateY: "-translate-y-1 mt-4 md:mt-0",
        }
    ];

    const zClasses = ['z-10', 'z-20', 'z-30', 'z-40'];

    return (
        <section ref={containerRef} className="h-[300vh] relative bg-[#fdf8f2]">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-4 md:px-8 w-full">

                {/* Main Heading */}
                <motion.div
                    style={{ y: titleY, opacity: titleOpacity }}
                    className="text-center mb-16 md:mb-24 mt-[-5vh] absolute w-full inset-x-0 top-[20vh] md:top-[25vh]"
                >
                    <h2 className="text-6xl md:text-7xl lg:text-[100px] font-medium tracking-tight text-[#171717] leading-[1.1]">
                        What Makes<br />us Different
                    </h2>
                </motion.div>

                {/* Cards Container */}
                <div className="relative w-full overflow-visible flex items-center h-[500px]">
                    <motion.div
                        style={{ x: groupX }}
                        className="flex flex-nowrap items-center w-max gap-8 md:gap-12 relative px-[10vw] z-10 will-change-transform absolute left-0"
                    >
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 3 + idx * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 0.2
                                }}
                                className={`w-[260px] h-[340px] md:w-[280px] md:h-[380px] lg:w-[320px] lg:h-[420px] p-6 md:p-8 rounded-[32px] text-white shadow-lg ${card.bg} text-left flex flex-col justify-between shrink-0 transform ${card.rotate} ${card.translateY} ${zClasses[idx]}`}
                            >
                                <div>
                                    <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.15] tracking-tight mb-4 text-[#fdf8f2]">
                                        {card.title}
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-base md:text-lg opacity-90 leading-snug font-light text-[#fdf8f2]">
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
