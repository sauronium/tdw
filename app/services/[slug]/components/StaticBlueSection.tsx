"use client";

import React from "react";
import { ServiceData } from "@/site-data/services/data";

export default function StaticBlueSection({ data }: { data: ServiceData }) {
    if (!data.ctaText) return null;

    return (
        <section 
            className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#fd6824" }}
        >
            <div className="flex items-center justify-center p-6 md:p-12 z-10 w-full">
                <h2 
                    className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight max-w-5xl leading-[1.1] text-white"
                >
                    {data.ctaText.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                    ))}
                </h2>
            </div>
        </section>
    );
}
