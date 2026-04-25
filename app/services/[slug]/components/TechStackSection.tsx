"use client";

import React from "react";
import { TechStackItem } from "@/site-data/services/data";

export default function TechStackSection({ items }: { items: TechStackItem[] }) {
    if (!items || items.length === 0) return null;

    // Multiply items by 4 to ensure the track is long enough for any screen size, 
    // seamlessly looping at 25% translation.
    const displayItems = [...items, ...items, ...items, ...items];

    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="w-full text-center px-6 mb-20">
                <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight text-[#171717]">
                    Tech We Work With
                </h2>
            </div>

            <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Marquee Wrapper */}
                <div className="flex w-max relative group">
                    <div className="flex animate-marquee gap-6 pr-6">
                        {displayItems.map((item, idx) => (
                            <div 
                                key={`${item.id}-${idx}`} 
                                className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] shrink-0 bg-[#f9f5f0] rounded-[24px] flex items-center justify-center p-6 shadow-sm transition-transform hover:scale-[1.02] cursor-default"
                            >
                                <span className="text-xl md:text-3xl font-semibold text-[#171717] opacity-60 text-center">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-25%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                    will-change: transform;
                }
                /* Optional pause on hover */
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}
