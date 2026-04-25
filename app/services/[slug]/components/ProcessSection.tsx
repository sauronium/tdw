"use client";

import React from "react";
import { ServiceProcess } from "@/site-data/services/data";

export default function ProcessSection({ process }: { process: ServiceProcess }) {
    if (!process) return null;

    return (
        <section className="relative w-full bg-[#fdf8f2] py-24 md:py-48">
            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Sticky Headers */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-40">
                        <span className="inline-block px-4 py-2 rounded-[8px] bg-[#ebe6db] text-[#171717] text-sm md:text-base font-medium mb-8">
                            {process.label}
                        </span>
                        
                        <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#171717] mb-8">
                            {process.heading}
                        </h2>
                        
                        <p className="text-lg md:text-[1.35rem] text-[#171717] font-medium tracking-tight">
                            {process.subheading}
                        </p>
                    </div>

                    {/* Right Column: Scrolling Cards */}
                    <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 lg:min-h-[100vh]">
                        {process.steps.map((step) => (
                            <div 
                                key={step.id} 
                                className="bg-[#ebe6db] rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-start mb-24 md:mb-32">
                                    <span className="text-[3rem] md:text-[4.5rem] font-medium tracking-tight text-[#171717] leading-none">
                                        {step.number}
                                    </span>
                                    <h3 className="text-[2.5rem] md:text-[4rem] font-medium tracking-tight text-[#171717] text-right max-w-[60%] leading-none">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-lg md:text-xl text-[#171717] font-medium leading-relaxed max-w-[75%]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
