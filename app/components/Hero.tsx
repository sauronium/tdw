"use client";

import { heroData } from "@/site-data/homepage/hero";

export default function Hero() {
    const { heading, subheadline, layout } = heroData;

    return (
        <section className={`flex flex-col items-center justify-center ${layout.minHeight} ${layout.paddingX} ${layout.paddingTop} ${layout.paddingBottom} text-center w-full ${layout.maxWidth} mx-auto`}>
            <div className="flex flex-col items-center w-full translate-y-[5vh]">
                <div className="relative w-full max-w-7xl flex items-center justify-center px-4">
                    <h1 className={`${heading.fontSize} ${heading.fontWeight} ${heading.color} ${heading.letterSpacing} ${heading.lineHeight}`}>
                        {heading.text}
                    </h1>
                </div>
                <h2
                    className={`${subheadline.fontSize} ${subheadline.fontWeight} ${subheadline.color} ${subheadline.marginTop} ${subheadline.letterSpacing} px-4`}
                    style={{ fontFamily: subheadline.fontFamily }}
                >
                    {subheadline.text}
                </h2>
                
                {heroData.punchline && (
                    <p className={`${heroData.punchline.fontSize} ${heroData.punchline.fontWeight} ${heroData.punchline.color} ${heroData.punchline.marginTop} px-4`}>
                        {heroData.punchline.text}
                    </p>
                )}
                
                {heroData.paragraph && (
                    <p className={`${heroData.paragraph.fontSize} ${heroData.paragraph.fontWeight} ${heroData.paragraph.color} ${heroData.paragraph.marginTop} ${heroData.paragraph.maxWidth} px-4`}>
                        {heroData.paragraph.text}
                    </p>
                )}
            </div>
        </section>
    );
}
