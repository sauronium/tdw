"use client";

import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import {
    aboutMarqueeHeading,
    aboutMarqueeImages,
    aboutMarqueeGridConfig,
    aboutMarqueeLayout,
} from "@/site-data/about/about-marquee";

export default function AboutMarquee() {
    const bentoItems: BentoItem[] = [];

    return (
        <SmoothScroll>
            <section className={`w-full relative ${aboutMarqueeLayout.background.tailwind} ${aboutMarqueeLayout.paddingTop} flex flex-col items-center overflow-hidden`}>
                <div className={`text-center ${aboutMarqueeHeading.marginBottom} px-4`}>
                    <h2
                        className={`${aboutMarqueeHeading.fontSize} ${aboutMarqueeHeading.fontWeight} ${aboutMarqueeHeading.letterSpacing} ${aboutMarqueeHeading.colorTailwind} ${aboutMarqueeHeading.lineHeight}`}
                        style={{ fontFamily: aboutMarqueeHeading.fontFamily, whiteSpace: "pre-line" }}
                    >
                        {aboutMarqueeHeading.text}
                    </h2>
                </div>

                <StaggeredGrid
                    images={aboutMarqueeImages.map((img) => img.src)}
                    bentoItems={bentoItems}
                    centerText={aboutMarqueeGridConfig.centerText}
                    showFooter={aboutMarqueeGridConfig.showFooter}
                />
            </section>
        </SmoothScroll>
    );
}
