# Who We Are Section (Component Reference)

This file contains the legacy `WhoWeAre.tsx` component that was removed from the homepage for later reference.

```tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FloatingItemProps {
    type: "card" | "circle";
    color: "green" | "orange" | "blue";
    children: React.ReactNode;
    position: string;
    delay?: number;
    rotation?: number;
}

const FloatingItem: React.FC<FloatingItemProps> = ({
    type,
    color,
    children,
    position,
    delay = 0,
    rotation = 0,
}) => {
    const bgColor = {
        green: "bg-[#6bd4a1]",
        orange: "bg-[#ff5a26]",
        blue: "bg-[#4889f4]",
    }[color];

    const shape =
        type === "card"
            ? "w-[180px] h-[240px] rounded-[20px]"
            : "w-[180px] h-[180px] rounded-full";

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
            className={`absolute flex flex-col items-center justify-center text-center text-white p-4 shadow-lg ${bgColor} ${shape} ${position} select-none pointer-events-none`}
            style={{ rotate: rotation }}
        >
            {children}
        </motion.div>
    );
};

export default function WhoWeAre() {
    return (
        <section className="relative w-full min-h-[800px] flex items-center justify-center overflow-hidden bg-[#fdf8f2]">
            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4">
                <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-black mb-8 leading-tight">
                    Who <br /> We Are
                </h1>
                <p className="text-xl md:text-2xl text-black leading-relaxed max-w-2xl mb-12">
                    The Designers World is a new-age design and development company built
                    by creators who live inside the worlds of brands, content, and code
                    every day.
                </p>
                <div className="flex items-center gap-3">
                    <Link
                        href="/about"
                        className="bg-[#ff5a26] text-white text-lg font-medium py-3 px-8 rounded-lg transition-transform hover:scale-105"
                    >
                        Get to know us
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-[#ffcdfa] w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:translate-x-1 hover:-translate-y-1"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="#ff5a26"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Floating Elements */}
            {/* Top Left - Green Card */}
            <FloatingItem
                type="card"
                color="green"
                position="top-[10%] left-[15%]"
                rotation={-15}
                delay={0}
            >
                <span className="text-xl uppercase tracking-widest font-sans font-light mb-1">
                    CLEAN
                </span>
                <span className="text-sm font-light opacity-90">By design</span>
            </FloatingItem>

            {/* Left - Orange Circle */}
            <FloatingItem
                type="circle"
                color="orange"
                position="top-[40%] left-[5%]"
                delay={1.5}
            >
                <span className="text-2xl font-serif italic mb-1">Intentional</span>
                <span className="text-sm font-sans font-light opacity-90">
                    In every step
                </span>
            </FloatingItem>

            {/* Bottom Left - Blue Card */}
            <FloatingItem
                type="card"
                color="blue"
                position="bottom-[10%] left-[12%]"
                rotation={10}
                delay={0.5}
            >
                <span className="text-3xl font-serif italic mb-1">Seamless</span>
                <span className="text-sm font-sans font-light opacity-90">
                    End to end
                </span>
            </FloatingItem>

            {/* Top Right - Orange Circle */}
            <FloatingItem
                type="circle"
                color="orange"
                position="top-[12%] right-[15%]"
                delay={1}
            >
                <span className="text-2xl font-sans font-light mb-1">Scalable</span>
                <span className="text-sm font-light opacity-90">From day one</span>
            </FloatingItem>

            {/* Right - Blue Card */}
            <FloatingItem
                type="card"
                color="blue"
                position="top-[40%] right-[8%]"
                rotation={-25}
                delay={2}
            >
                <span className="text-2xl font-sans font-light mb-1">Strategic</span>
                <span className="text-sm font-light opacity-90">Always</span>
            </FloatingItem>

            {/* Bottom Right - Green Circle */}
            <FloatingItem
                type="circle"
                color="green"
                position="bottom-[8%] right-[15%]"
                delay={0.8}
            >
                <span className="text-xl uppercase font-extrabold font-sans mb-1 leading-none">
                    IMPACTFUL
                </span>
                <span className="text-sm font-light opacity-90">Where it counts</span>
            </FloatingItem>
        </section>
    );
}
```
