"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Set up scroll for parallax effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic: moves the image on the Y axis to create depth
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <section className="w-full relative flex flex-col items-center">
            {/* Text Section - 95vh height to leave ~5vh for the bottom image to peek */}
            <div className="w-full h-[95vh] flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] leading-[0.95] font-bold text-[#171717] text-center tracking-tighter">
                    A Studio Born from Expertise
                </h1>
                <div className="mt-8 flex flex-col gap-6 max-w-3xl text-center text-lg md:text-xl font-light text-[#171717]/80">
                    <p>
                        At The Designers World, we are a team of passionate creative professionals with 7+ years of hands-on experience delivering exceptional results for high-end clients across industries. Based in New Delhi, India, we've come together to build a studio where design, content, and code work in perfect harmony. We understand what premium clients expect — precision, creativity, and results that speak for themselves. Every project we take on is a commitment to excellence. Your brand is in the right hands.
                    </p>
                    <p>
                        We build websites that don't just look great — they perform. From sleek UI to seamless functionality, every site we craft is designed to captivate your audience, strengthen your brand, and turn visitors into loyal customers.
                    </p>
                </div>
            </div>

            {/* Parallax Image Section - 100vh height & 90vw width */}
            <div 
                ref={containerRef}
                className="w-[90vw] h-[100vh] relative overflow-hidden rounded-3xl"
            >
                <motion.div 
                    style={{ y }}
                    className="absolute inset-0 w-full h-[130%] -top-[15%]"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop" 
                        alt="The Social Team"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
            
            {/* Added bottom padding so the next section isn't completely flush to the image */}
            <div className="h-24 w-full"></div>
        </section>
    );
}
