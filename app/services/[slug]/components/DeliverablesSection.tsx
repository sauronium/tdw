"use client";

import React, { useState } from "react";
import { ServiceDeliverables } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export default function DeliverablesSection({ deliverables }: { deliverables: ServiceDeliverables }) {
    // Initialize with the first item open
    const [openId, setOpenId] = useState<string | null>(deliverables?.items[0]?.id || null);

    if (!deliverables) return null;

    return (
        <section className="relative w-full bg-[#fdf8f2] py-24 md:py-40">
            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Sticky Headers */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-40">
                        <span className="inline-block px-4 py-2 rounded-[8px] bg-[#fcdff1] text-[#171717] text-sm md:text-base font-medium mb-8">
                            {deliverables.label}
                        </span>
                        
                        <h2 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-[#171717] mb-6">
                            {deliverables.heading}
                        </h2>
                        
                        <p className="text-lg md:text-[1.35rem] text-[#171717] font-medium tracking-tight">
                            {deliverables.subheading}
                        </p>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {deliverables.items.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div 
                                    key={item.id} 
                                    className="bg-[#ebe6db] rounded-[16px] overflow-hidden"
                                >
                                    <button 
                                        onClick={() => setOpenId(isOpen ? null : item.id)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <h3 className="text-xl md:text-2xl font-medium text-[#171717]">
                                            {item.title}
                                        </h3>
                                        
                                        {/* Dynamic Star Icon */}
                                        <div className={`shrink-0 ml-4 transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-[135deg] scale-110' : 'rotate-0'}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path 
                                                    d="M12 1.5C12 7 17 12 22.5 12C17 12 12 17 12 22.5C12 17 7 12 1.5 12C7 12 12 7 12 1.5Z" 
                                                    fill={isOpen ? "#ed6e33" : "#171717"}
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                                    <p className="text-base md:text-lg text-[#171717] font-medium leading-relaxed max-w-[90%]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
