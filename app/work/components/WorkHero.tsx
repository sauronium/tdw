"use client";

import { workHeroHeading, workHeroLayout } from "@/site-data/work/hero";

export default function WorkHero() {
    return (
        <section className={`relative w-full ${workHeroLayout.background.tailwind}`}>
            <div className={`relative w-full h-screen ${workHeroLayout.paddingTop} ${workHeroLayout.paddingBottom} ${workHeroLayout.paddingX} flex flex-col items-center justify-center overflow-hidden`}>
                <div className={`w-full h-full ${workHeroLayout.innerCard.borderRadius} ${workHeroLayout.innerCard.tailwind} flex items-center justify-center overflow-hidden relative shadow-sm`}>
                    <div className="w-full flex items-center justify-center px-6">
                        <h1
                            className={`${workHeroHeading.fontSize} ${workHeroHeading.fontWeight} ${workHeroHeading.letterSpacing} ${workHeroHeading.colorTailwind} text-center ${workHeroHeading.lineHeight}`}
                            style={{ fontFamily: workHeroHeading.fontFamily }}
                        >
                            {workHeroHeading.text}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
