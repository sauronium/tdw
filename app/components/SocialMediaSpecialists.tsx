"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SocialMediaSpecialists() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Image 1 Animations ---
    const img1Y = useTransform(scrollYProgress, [0, 0.10], ["100vh", "0vh"]);
    const maskSize1 = useTransform(scrollYProgress, [0.10, 0.28], ["10px", "200%"]);
    const clipPath1 = useTransform(maskSize1, (val) => `circle(${val} at 50% 50%)`);
    // Fade IN the image AFTER scaling
    const imageReveal1 = useTransform(scrollYProgress, [0.28, 0.33], [0, 1]);
    const img1Scale = useTransform(scrollYProgress, [0.43, 0.61, 0.76, 0.94], [1, 0.95, 0.95, 0.9]);

    // --- Image 2 Animations ---
    const img2Y = useTransform(scrollYProgress, [0.33, 0.43], ["100vh", "0vh"]);
    const maskSize2 = useTransform(scrollYProgress, [0.43, 0.61], ["10px", "200%"]);
    const clipPath2 = useTransform(maskSize2, (val) => `circle(${val} at 50% 50%)`);
    const imageReveal2 = useTransform(scrollYProgress, [0.61, 0.66], [0, 1]);
    const img2Rotate = useTransform(scrollYProgress, [0.43, 0.61], [0, -3]);
    const img2Scale = useTransform(scrollYProgress, [0.76, 0.94], [1, 0.95]);

    // --- Image 3 Animations ---
    const img3Y = useTransform(scrollYProgress, [0.66, 0.76], ["100vh", "0vh"]);
    const maskSize3 = useTransform(scrollYProgress, [0.76, 0.94], ["10px", "200%"]);
    const clipPath3 = useTransform(maskSize3, (val) => `circle(${val} at 50% 50%)`);
    const imageReveal3 = useTransform(scrollYProgress, [0.94, 0.99], [0, 1]);
    const img3Rotate = useTransform(scrollYProgress, [0.76, 0.94], [0, 4]);

    return (
        <section ref={containerRef} className="w-full relative bg-transparent h-[400vh]">
            <div className="sticky top-0 h-screen w-full flex overflow-hidden py-12 md:py-24">
                <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-10 md:gap-12 lg:gap-16">
                    
                    {/* Left Side: Stacking Image Container */}
                    <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center md:justify-start pl-0 md:pl-4 mb-6 md:mb-0 relative py-12 md:py-0">
                        {/* Wrapper for the images stack */}
                        <div className="relative w-full md:w-[85%] max-w-[380px] h-[60vh] md:h-[85vh] flex items-center justify-center -translate-y-[4vh] md:translate-y-0">
                            
                            {/* BASE IMAGE (Image 1) */}
                            <motion.div 
                                className="absolute inset-0 rounded-[20px] shadow-sm transform-gpu origin-bottom will-change-transform bg-[#f26522]"
                                style={{
                                    y: img1Y,
                                    scale: img1Scale,
                                    clipPath: clipPath1,
                                    zIndex: 1
                                }}
                            >
                                <motion.div 
                                    className="absolute inset-0 rounded-[20px] overflow-hidden"
                                    style={{ opacity: imageReveal1 }}
                                >
                                    <Image 
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                                        alt="Office meeting room" 
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* STACK 1 (Image 2) */}
                            <motion.div
                                className="absolute inset-0 rounded-[20px] shadow-xl transform-gpu origin-bottom will-change-transform border border-white/10 bg-[#8c6bf7]"
                                style={{
                                    y: img2Y,
                                    rotate: img2Rotate,
                                    scale: img2Scale,
                                    clipPath: clipPath2,
                                    zIndex: 2
                                }}
                            >
                                <motion.div 
                                    className="absolute inset-0 rounded-[20px] overflow-hidden"
                                    style={{ opacity: imageReveal2 }}
                                >
                                    <Image 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                                        alt="Team collaboration" 
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* STACK 2 (Image 3) */}
                            <motion.div
                                className="absolute inset-0 rounded-[20px] shadow-2xl transform-gpu origin-bottom will-change-transform border border-white/20 bg-[#00c0b5]"
                                style={{
                                    y: img3Y,
                                    rotate: img3Rotate,
                                    clipPath: clipPath3,
                                    zIndex: 3
                                }}
                            >
                                <motion.div 
                                    className="absolute inset-0 rounded-[20px] overflow-hidden"
                                    style={{ opacity: imageReveal3 }}
                                >
                                    <Image 
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                                        alt="Analytics and growth" 
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Right Side: Content Box */}
                    <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center py-4 md:py-8 text-center md:text-left items-center md:items-start relative z-10 lg:pl-10">
                        <div className="max-w-[650px]">
                            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1] text-[#1a1a1a] mb-8 lowercase">
                                we are social media specialists.
                            </h2>
                            
                            <p className="text-base md:text-[17px] text-[#222] leading-[1.6] md:leading-relaxed font-medium">
                                Dorst & Lesser is a global social media agency based in Amsterdam, driven by a team of over 50 social media enthusiasts. Our mission is to make brands more social by fostering meaningful connections with their communities and enhancing brand loyalty through the power of AI social data.<br /><br />
                                Since our founding in 2011, we have been leaders in the social media space. We all love what we do, which is why we&apos;ve made our work our playground—a place where friendships begin and grow.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
