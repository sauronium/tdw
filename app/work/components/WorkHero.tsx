"use client";

import React from "react";

export default function WorkHero() {
    return (
        <section className="relative w-full h-[200vh] bg-[#fdf8f2]">
            {/* Added pt-28 md:pt-32 to clear the fixed global header out of the way of the green layout box */}
            <div className="sticky top-0 w-full h-screen pt-28 md:pt-32 pb-4 md:pb-8 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-[32px] md:rounded-[40px] bg-[#67c494] flex items-center justify-center overflow-hidden relative shadow-sm">
                    {/* Centered static text container */}
                    <div className="w-full flex items-center justify-center px-6">
                        <h1 className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] xl:text-[8rem] font-medium tracking-tight text-[#171717] text-center leading-[1.05]">
                            Our work. Your result.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
