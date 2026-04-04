"use client";

import React from "react";
import Image from "next/image";
import { heroData } from "@/site-data/homepage/hero";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[50vh] px-4 pt-20 pb-24 md:pb-32 text-center w-full max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center w-full translate-y-[5vh]">
                <div className="relative w-full max-w-7xl flex items-center justify-center">
                    <Image
                        src="/heading.svg"
                        alt="We build websites"
                        width={1200}
                        height={300}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
                <h2 className="text-3xl md:text-5xl font-light text-black mt-6 tracking-tight" style={{ fontFamily: heroData.subheadline.fontFamily }}>
                    {heroData.subheadline.text}
                </h2>
            </div>
        </section>
    );
}
