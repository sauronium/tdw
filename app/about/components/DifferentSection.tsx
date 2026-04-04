"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

// 1. We extract the Card into its own component to safely use Framer Motion hooks per-card
const TrainCard = ({
    card,
    index,
    progress
}: {
    card: any;
    index: number;
    progress: MotionValue<number>;
}) => {
    // 2. The Delay: Each subsequent card starts its journey slightly later (6% later per card)
    const delay = index * 0.06;

    // 3. The Timeline: Maps exactly when this specific card hits the 5 checkpoints of the curve
    const inputPoints = [
        0.1 + delay,  // Start (Off-screen Bottom Right)
        0.3 + delay,  // Quarter way (Moving up and left)
        0.5 + delay,  // Apex (Center screen)
        0.7 + delay,  // Three-quarters (Moving down and left)
        0.9 + delay   // End (Off-screen Bottom Left)
    ];

    // 4. The Path: Identical for every card, creating the "train track"
    const x = useTransform(progress, inputPoints, ["120vw", "50vw", "0vw", "-50vw", "-120vw"]);
    const y = useTransform(progress, inputPoints, ["100vh", "20vh", "-5vh", "20vh", "100vh"]);
    
    // The rotation dynamically matches the tangent of the curve to steer the buggy
    const rotate = useTransform(progress, inputPoints, [-45, -20, 0, 20, 45]);

    return (
        <motion.div
            style={{ x, y, rotate, zIndex: 10 - index }}
            className={`absolute w-[260px] h-[340px] md:w-[280px] md:h-[380px] lg:w-[320px] lg:h-[420px] p-6 md:p-8 rounded-[32px] text-white shadow-xl ${card.bg} text-left flex flex-col justify-between shrink-0 will-change-transform`}
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
    );
};

export default function DifferentSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    const titleY = useTransform(smoothProgress, [0, 0.15], ["0%", "-200%"]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

    // Note: I removed the static tailwind 'rotate' and 'translateY' properties from the data 
    // because the dynamic train track rotation handles steering them around the corner perfectly.
    const cards = [
        {
            title: "Design + development in one team.",
            desc: "So your vision doesn't get \"lost in handover\" and show up as a distant cousin at launch.",
            bg: "bg-[#6bb88b]"
        },
        {
            title: "We design for outcomes, not applause",
            desc: "clarity, consistency, and conversion over noise.",
            bg: "bg-[#ed6e33]"
        },
        {
            title: "Premium polish, practical brains.",
            desc: "beautiful on the outside, built right underneath.",
            bg: "bg-[#4a88f5]"
        },
        {
            title: "Swift execution, uncompromising quality.",
            desc: "no drawn out timelines or endless revisions, just results.",
            bg: "bg-[#a364ff]"
        }
    ];

    return (
        <section ref={containerRef} className="h-[500vh] relative bg-[#fdf8f2]">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-4 md:px-8 w-full">

                {/* Main Heading */}
                <motion.div
                    style={{ y: titleY, opacity: titleOpacity }}
                    className="text-center mb-16 md:mb-24 mt-[-5vh] absolute w-full inset-x-0 top-[20vh] md:top-[25vh] z-0"
                >
                    <h2 className="text-6xl md:text-7xl lg:text-[100px] font-medium tracking-tight text-[#171717] leading-[1.1]">
                        What Makes<br />us Different
                    </h2>
                </motion.div>

                {/* Train Track Container */}
                {/* Changed to flex-center and absolute children so they all share the exact same spatial origin */}
                <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
                    {cards.map((card, idx) => (
                        <TrainCard 
                            key={idx} 
                            card={card} 
                            index={idx} 
                            progress={smoothProgress} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}