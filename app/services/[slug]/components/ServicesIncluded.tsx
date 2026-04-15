"use client";

import React, { useRef } from "react";
import { ServiceIncluded } from "../data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const IncludedCard = ({ item, index, total }: { item: ServiceIncluded, index: number, total: number }) => {
    // Basic sticky card layout aligned to center
    return (
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#fdf8f2] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)] overflow-hidden px-4 md:px-12 will-change-transform z-10" style={{
            top: 0 
        }}>
            <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start justify-center">
                    <h3 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#171717] mb-12 lg:mb-16 whitespace-pre-line">
                        {item.title}
                    </h3>
                    
                    <ul className="space-y-6 md:space-y-8 list-disc pl-6 text-[#171717]">
                        {item.items.map((listItem, i) => (
                            <li key={i} className="text-lg md:text-xl font-medium leading-relaxed max-w-xl pl-2">
                                <span>
                                    {listItem}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column: Image */}
                <div className="flex justify-center items-center relative w-full h-[400px] md:h-[500px]">
                    <div className="relative w-full max-w-[500px] lg:max-w-[560px] aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10]">
                        <motion.div 
                            initial={{ rotate: 12, y: 50, opacity: 0 }}
                            whileInView={{ rotate: index % 2 === 0 ? 6 : -6, y: 0, opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 bg-white shadow-2xl rounded-[24px] md:rounded-[32px] overflow-hidden border-8 md:border-[12px] border-white"
                        >
                            <Image 
                                src={item.image} 
                                alt={item.title.replace('\n', ' ')}
                                fill
                                className="object-cover rounded-[16px] md:rounded-[20px]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default function ServicesIncludedSection({ included }: { included: ServiceIncluded[] }) {
    if (!included || included.length === 0) return null;

    return (
        <section className="relative w-full bg-white z-10">
            {/* Intro Headinger */}
            <div className="w-full flex justify-center items-center py-24 md:py-32 bg-white">
                <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-center text-[#171717]">
                    Services Included
                </h2>
            </div>

            {/* Sticky Stacking Cards Container */}
            <div className="relative w-full pb-[10vh]">
                {included.map((item, index) => (
                    <IncludedCard 
                        key={item.id} 
                        item={item} 
                        index={index} 
                        total={included.length} 
                    />
                ))}
            </div>
        </section>
    );
}
