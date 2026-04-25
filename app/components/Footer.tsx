"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Camera as Instagram, Aperture as Dribbble, Bookmark, Briefcase as Linkedin } from "lucide-react";
import InteractiveDotGrid from "./InteractiveDotGrid";
import { motion, useSpring, useMotionValue } from "framer-motion";
import GetStartedModal from "./GetStartedModal";
import { footerCTA, footerBackground, footerTeamAvatars } from "@/site-data/shared/footer";

function SocialCard({ social, isLast }: { social: any, isLast: boolean }) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        // center the orange bubble (size 112px => half is 56px)
        x.set(e.clientX - rect.left - 56);
        y.set(e.clientY - rect.top - 56);
    };

    return (
        <Link
            ref={cardRef}
            href={social.href}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex flex-col justify-between items-start p-6 md:p-8 h-[160px] md:h-[200px] text-[#222] hover:bg-black/5 transition-colors group relative overflow-hidden ${
                !isLast ? 'border-r border-black/10' : ''
            }`}
        >
            {/* Tracking orange bubble */}
            <motion.div
                style={{ x: xSpring, y: ySpring }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 w-28 h-28 rounded-full bg-[#f26522] flex items-center justify-center pointer-events-none z-10 shadow-lg [&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-white [&>svg]:fill-none [&>span]:text-3xl [&>span]:text-white"
            >
                {/* Specific override for Clutch svg since it relies on currentColor */}
                <div className="text-white [&>*]:text-white">
                    {social.icon}
                </div>
            </motion.div>

            {/* Top Box: Normal Icon -> Fades to Text */}
            <div className="relative z-20 w-full h-8">
                {/* Icon */}
                <div className="absolute inset-0 text-[#333] transition-all duration-300 origin-left group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2">
                    {social.icon}
                </div>
                
                {/* Hover Text */}
                <div className="absolute inset-0 text-xl font-medium tracking-tight text-black opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
                    {social.hoverText}
                </div>
            </div>
            
            {/* Bottom Label */}
            <span className="relative z-20 text-[11px] md:text-[13px] font-medium tracking-wide uppercase transition-colors duration-300">
                {social.name}
            </span>
        </Link>
    );
}

export default function Footer() {
    const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

    // Social links mimicking the design attachment
    const socialLinks = [
        { 
            name: 'Awwwards', 
            hoverText: 'Awards',
            icon: <span className="font-serif font-black text-2xl tracking-tighter">W.</span>, 
            href: '#' 
        },
        { 
            name: 'Clutch',
            hoverText: 'Reviews', 
            // C Logo with inner curves approximation
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C14.5 6.5 12 6.5 10.5 8C8.5 10 8.5 14 10.5 16C12 17.5 14.5 17.5 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
            ), 
            href: '#' 
        },
        { 
            name: 'Instagram', 
            hoverText: 'Social',
            icon: <Instagram className="w-6 h-6 stroke-[1.5]" />, 
            href: '#' 
        },
        { 
            name: 'Dribbble', 
            hoverText: 'Eye Candy',
            icon: <Dribbble className="w-6 h-6 stroke-[1.5]" />, 
            href: '#' 
        },
        { 
            name: 'Substack', 
            hoverText: 'Newsletter',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 22L12 16.5L2 22V7H22V22ZM2 2H22V5H2V2Z" />
                </svg>
            ), 
            href: '#' 
        },
        { 
            name: 'LinkedIn', 
            hoverText: 'Connect',
            icon: <Linkedin className="w-6 h-6 stroke-[1.5]" />, 
            href: '#' 
        },
    ];

    return (
        <footer className={`w-full relative ${footerBackground.tailwind} overflow-hidden pt-10 pb-8 border-t border-black/5`}>
            
            {/* Top Section Wrapper - Break out to 100vw for background, keep content padded */}
            <div 
                className={`relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 mb-6 md:mb-10 px-4 flex justify-center ${footerBackground.tailwind}`}
            >
                {/* High-performance physics Canvas dot pattern */}
                <InteractiveDotGrid />

                {/* Actual Constraint Wrapper for Content */}
                <div className="relative z-10 w-full max-w-[1440px] px-0 md:px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                    {/* Left: Let's Jam */}
                    <div className="flex flex-col relative z-10">
                        <h2
                            className="text-[5rem] md:text-[8rem] font-medium tracking-tight text-[#1a1a1a] leading-none mb-10 md:mb-0"
                            style={{ fontFamily: footerCTA.headlineFontFamily }}
                        >
                            Let&apos;s Jam.
                        </h2>
                    </div>

                    {/* Right: Huge Button */}
                    <div className="relative z-10 flex items-center md:items-start justify-end w-full md:w-auto mt-4 md:mt-0 pr-4 md:pr-0">
                        <button 
                            onClick={() => setIsGetStartedOpen(true)}
                            className="group bg-[#1a1a1a] text-white px-10 md:px-12 py-5 md:py-6 rounded-full flex items-center justify-center gap-4 hover:bg-black transition-all hover:scale-[1.02] shadow-xl w-full md:w-auto"
                        >
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 font-light text-white group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
                            <span className="text-2xl md:text-3xl font-normal tracking-wide">Get Started</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                
                <div className="flex flex-col w-full mb-16 md:mb-20">

                    {/* Row 2: Avatars & Text block (Right-aligned under the button) */}
                    <div className="flex justify-end w-full pt-6 md:pt-10">
                        <div className="flex items-center gap-5">
                            {/* Overlapping Faces */}
                            <div className="flex -space-x-4">
                                {footerTeamAvatars.map((avatar, idx) => (
                                    <img
                                        key={idx}
                                        className="w-12 h-12 md:w-14 md:h-14 border-2 border-white rounded-full object-cover"
                                        style={{ zIndex: footerTeamAvatars.length - idx }}
                                        src={avatar.src}
                                        alt={avatar.alt}
                                    />
                                ))}
                            </div>
                            
                            {/* Mini Text */}
                            <p className="text-[#333] text-sm md:text-base leading-snug font-medium max-w-[280px]">
                                We&apos;re always up for a coffee and a chat,<br />
                                <Link href="#" className="text-[#8c6bf7] hover:underline">
                                    Send us a message
                                </Link>{" "}
                                and we&apos;ll get back to you!.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Social Links Grid */}
                {/* Horizontal scrolling wrapper on mobile to prevent squishing */}
                <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
                    <div className="flex flex-row md:grid md:grid-cols-6 min-w-[900px] md:min-w-full rounded-2xl md:rounded-[24px] overflow-hidden border border-black/10 bg-[#fdf8f2]/50 backdrop-blur-sm shadow-sm">
                        {socialLinks.map((social, idx) => (
                            <SocialCard key={social.name} social={social} isLast={idx === socialLinks.length - 1} />
                        ))}
                    </div>
                </div>

            </div>

            {/* Global style to hide scrollbar just for the grid wrapper */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>

            {/* Get Started Modal Overlay */}
            <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
        </footer>
    );
}
