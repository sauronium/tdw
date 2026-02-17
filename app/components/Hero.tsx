"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-20 text-center w-full max-w-[1440px] mx-auto">
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
            <h2 className="text-3xl md:text-5xl font-light text-black mt-6 tracking-tight">
                that actually work
            </h2>
        </section>
    );
}
