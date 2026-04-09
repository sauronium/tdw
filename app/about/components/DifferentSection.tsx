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
    // 2. The Delay: Reduced the gap to roughly 8.5% (a 30% decrease from the previous 12%)
    const delay = index * 0.085;

    // 3. The Timeline: Slightly relaxed the travel duration so they move a bit more naturally 
    // without cutting off the last cards.
    const inputPoints = [
        0.05 + delay,  // Start (Off-screen Bottom Right)
        0.22 + delay,  // Quarter way (Moving up and left)
        0.39 + delay,  // Apex (Center screen)
        0.56 + delay,  // Three-quarters (Moving down and left)
        0.73 + delay   // End (Off-screen Bottom Left)
    ];

    // Adjusted to curve over the left side of the screen and overlap the title
    const x = useTransform(progress, inputPoints, ["120vw", "40vw", "-15vw", "-60vw", "-120vw"]);
    
    // Propel the apex higher upwards (-25vh) so it physically crosses over the static title
    const y = useTransform(progress, inputPoints, ["100vh", "15vh", "-25vh", "20vh", "100vh"]);
    
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

    // The fade effect / titleY have been removed so the title stays visible without fading

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
            {/* Added pt-24 and removed justify-center so the title sits closer to the top */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-start pt-24 px-4 md:px-8 w-full">

                {/* Main Heading - Left-aligned, no scroll, statically anchored behind the cards */}
                <div className="text-left mb-0 md:mb-4 relative z-0">
                    <h2 className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tight text-[#171717] leading-[1.1]">
                        What Makes<br />us Different
                    </h2>
                </div>

                {/* Train Track Container */}
                <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible mt-8">
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