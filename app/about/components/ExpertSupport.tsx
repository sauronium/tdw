"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
    expertCards,
    expertCopy,
    expertBackground,
    expertCardStyles,
    expertLayout,
} from "@/site-data/about/expert-support";

// ─── Emoji burst on "Great Results" ────────────────────────────
const GreatResults = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const emojis = Array.from({ length: 20 }, (_, i) => i % 2 === 0 ? "😍" : "🔥");
    const { greatResults } = expertCopy;

    return (
        <div ref={ref} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
            <motion.h2
                initial={{ scale: 0.1, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.1, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                className={`${greatResults.fontSize} ${greatResults.fontWeight} ${greatResults.letterSpacing} ${greatResults.colorTailwind} relative z-10`}
                style={{ fontFamily: greatResults.fontFamily }}
            >
                {greatResults.text}
            </motion.h2>

            {isInView && (
                <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
                    {emojis.map((emoji, i) => {
                        const randomLeft     = 3 + Math.random() * 94;
                        const randomScale    = 0.8 + Math.random() * 1.2;
                        const randomDuration = 2.5 + Math.random() * 2;
                        const randomDelay    = Math.random() * 0.8;
                        return (
                            <motion.div
                                key={i}
                                initial={{ top: "105%", opacity: 0, scale: randomScale * 0.5 }}
                                animate={{
                                    top:     ["105%", "60%", "0%", "-15%"],
                                    opacity: [0,       1,     1,    0    ],
                                    scale:   [randomScale * 0.5, randomScale, randomScale, randomScale * 0.8],
                                }}
                                transition={{ duration: randomDuration, delay: randomDelay, ease: "easeOut", times: [0, 0.2, 0.85, 1] }}
                                className="absolute text-5xl md:text-6xl drop-shadow-lg"
                                style={{ left: `${randomLeft}%` }}
                            >
                                {emoji}
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// ─── Halfway thumbs-up burst ────────────────────────────────────
const HalfwayThumbsUp = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const emojis = Array.from({ length: 15 }, () => "👍");

    return (
        <div ref={ref} className="absolute left-0 right-0 h-[10px] pointer-events-none" style={{ top: "190vh" }}>
            {isInView && (
                <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
                    {emojis.map((emoji, i) => {
                        const randomLeft     = 5 + Math.random() * 90;
                        const randomScale    = 0.7 + Math.random() * 1.3;
                        const randomDuration = 2.5 + Math.random() * 2;
                        const randomDelay    = Math.random() * 0.5;
                        return (
                            <motion.div
                                key={i}
                                initial={{ top: "105%", opacity: 0, scale: randomScale * 0.5 }}
                                animate={{
                                    top:     ["105%", "60%", "0%", "-15%"],
                                    opacity: [0,       1,     1,    0    ],
                                    scale:   [randomScale * 0.5, randomScale, randomScale, randomScale * 0.8],
                                }}
                                transition={{ duration: randomDuration, delay: randomDelay, ease: "easeOut", times: [0, 0.2, 0.85, 1] }}
                                className="absolute text-5xl md:text-6xl drop-shadow-lg"
                                style={{ left: `${randomLeft}%` }}
                            >
                                {emoji}
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// ─── Main Section ───────────────────────────────────────────────
export default function ExpertSupport() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgColor = useTransform(
        scrollYProgress,
        [expertBackground.transition.start, expertBackground.transition.end],
        [expertBackground.startColor, expertBackground.endColor]
    );

    const { stickyTitle, paragraph } = expertCopy;

    return (
        <motion.section
            ref={containerRef}
            style={{ backgroundColor: bgColor, overflow: "clip", borderRadius: expertLayout.outerRadius }}
            className={`${expertLayout.containerWidth} mx-auto relative`}
        >
            {/* Phase 1: sticky title + scrolling cards (400vh) */}
            <div className="relative" style={{ height: expertLayout.phase1Height }}>

                <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
                    <h2
                        className={`${stickyTitle.fontSize} ${stickyTitle.fontWeight} ${stickyTitle.letterSpacing} text-center ${stickyTitle.lineHeight} ${stickyTitle.colorTailwind}`}
                        style={{ fontFamily: stickyTitle.fontFamily }}
                    >
                        Expert Support,<br />Always
                    </h2>
                </div>

                <HalfwayThumbsUp />

                {expertCards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`absolute ${expertCardStyles.width} ${expertCardStyles.aspectRatio} ${expertCardStyles.borderRadius} overflow-hidden shadow-2xl`}
                        style={{ zIndex: 10, ...card.style }}
                    >
                        <Image src={card.src} alt={card.alt} fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* Phase 2: closing paragraph */}
            <div className={`min-h-[60vh] flex items-center justify-center ${expertLayout.phase2Padding}`}>
                <p className={`${paragraph.maxWidth} text-center ${paragraph.fontSize} ${paragraph.colorTailwind} ${paragraph.fontWeight} ${paragraph.lineHeight} ${paragraph.letterSpacing}`}>
                    {paragraph.text}
                </p>
            </div>

            {/* Phase 3: Great Results + emoji burst */}
            <GreatResults />
        </motion.section>
    );
}
