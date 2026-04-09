"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// ─── Emoji burst on "Great Results" ──────────────────────────────────────────
const GreatResults = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    // Only 😍 and 🔥, alternating
    const emojis = Array.from({ length: 20 }, (_, i) => i % 2 === 0 ? "😍" : "🔥");

    return (
        <div ref={ref} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Pop-out title — scales from tiny with spring overshoot */}
            <motion.h2
                initial={{ scale: 0.1, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.1, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 14,
                    delay: 0.1,
                }}
                className="text-5xl md:text-8xl font-normal tracking-tight text-[#171717] relative z-10"
            >
                Great Results
            </motion.h2>

            {isInView && (
                // Fixed positioning → emojis float above the entire page, never clipped by any overflow
                <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
                    {emojis.map((emoji, i) => {
                        const randomLeft    = 3 + Math.random() * 94;   // 3%–97% across
                        const randomScale   = 0.8 + Math.random() * 1.2; // 0.8×–2×
                        const randomDuration = 2.5 + Math.random() * 2;  // 2.5s–4.5s
                        const randomDelay   = Math.random() * 0.8;
                        return (
                            <motion.div
                                key={i}
                                // Start at very bottom, animate all the way past the top then fade
                                initial={{ top: "105%", opacity: 0, scale: randomScale * 0.5 }}
                                animate={{
                                    top: [  "105%", "60%",  "0%",  "-15%"],
                                    opacity: [0,      1,      1,     0   ],
                                    scale:   [randomScale * 0.5, randomScale, randomScale, randomScale * 0.8],
                                }}
                                transition={{
                                    duration: randomDuration,
                                    delay:    randomDelay,
                                    ease:     "easeOut",
                                    times:    [0, 0.2, 0.85, 1],
                                }}
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

// 6 cards in 3 rows of 2 — matching the reference image positions exactly
// Row 1: far-left + center-right
// Row 2: center-left + far-right
// Row 3: far-left + center-right (repeat)
const CARDS: { src: string; style: React.CSSProperties }[] = [
    // Row 1
    {
        src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
        style: { top: "80vh",  left: "2%" },
    },
    {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        style: { top: "95vh",  left: "57%" },
    },
    // Row 2
    {
        src: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop",
        style: { top: "170vh", left: "22%" },
    },
    {
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
        style: { top: "165vh", right: "2%" },
    },
    // Row 3
    {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        style: { top: "250vh", left: "2%" },
    },
    {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
        style: { top: "260vh", left: "57%" },
    },
];

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ExpertSupport() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Pink → green only after paragraph scrolls into view
    const bgColor = useTransform(scrollYProgress, [0.7, 0.9], ["#ffb2f5", "#00d68f"]);

    return (
        <motion.section
            ref={containerRef}
            style={{
                backgroundColor: bgColor,
                overflow: "clip",
                borderRadius: "3rem",
            }}
            className="w-[95vw] mx-auto relative"
        >
            {/*
              ════ PHASE 1 ════ (400vh)
              The sticky title lives here. It stays pinned while all 6 cards
              scroll over it (cards span from ~80vh to ~300vh).
              Once we've scrolled 300vh into Phase 1 (400 - 100 viewport = 300vh
              of sticky travel), the title naturally scrolls away with the page.
              Phase 1 ends → title exits → Phase 2 enters view.
            */}
            <div className="relative" style={{ height: "400vh" }}>

                {/* ── STICKY TITLE — centered, z-0 (cards scroll in front at z-10) ── */}
                <div
                    className="sticky top-0 h-screen flex items-center justify-center pointer-events-none"
                    style={{ zIndex: 0 }}
                >
                    <h2 className="text-5xl md:text-7xl font-normal tracking-tight text-center leading-[1.1] text-[#171717]">
                        Expert Support,<br />Always
                    </h2>
                </div>

                {/* ── CARDS — absolutely placed, z-10 — scroll naturally over sticky title ── */}
                {CARDS.map((card, idx) => (
                    <div
                        key={idx}
                        className="absolute w-[176px] md:w-[240px] lg:w-[272px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                        style={{ zIndex: 10, ...card.style }}
                    >
                        <Image
                            src={card.src}
                            alt="Expert team"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/*
              ════ PHASE 2 ════
              Normal flow. Appears only after Phase 1 has fully scrolled away.
              Sequence: cards gone → title scrolls off → this paragraph enters.
            */}
            <div className="min-h-[60vh] flex items-center justify-center px-6 py-24">
                <p className="max-w-4xl text-center text-xl md:text-3xl text-[#171717] font-medium leading-relaxed tracking-tight">
                    Alongside the core team, we also have experienced specialists across design and tech—so the right expertise shows up exactly when it's needed. Translation: boutique taste, full-stack delivery, and no single-point bottlenecks.
                </p>
            </div>

            {/* ── Great Results (green zone, emoji burst) ── */}
            <GreatResults />
        </motion.section>
    );
}
