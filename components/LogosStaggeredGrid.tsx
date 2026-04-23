"use client";

import { StaggeredGrid, type BentoItem } from "@/components/ui/staggered-grid";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import {
    clientsHeading,
    clientLogos,
    clientsGridConfig,
    clientsLayout,
} from "@/site-data/homepage/our-clients";

export default function LogosStaggeredGrid() {
    const bentoItems: BentoItem[] = [];

    return (
        <SmoothScroll>
            <section className={`w-full relative ${clientsLayout.background.tailwind} ${clientsLayout.paddingTop} flex flex-col items-center overflow-hidden`}>
                <div className="text-center max-w-4xl mx-auto px-4 w-full">
                    <h2
                        className={`${clientsHeading.fontSize} ${clientsHeading.fontWeight} ${clientsHeading.letterSpacing} ${clientsHeading.colorTailwind} ${clientsHeading.lineHeight}`}
                        style={{ fontFamily: clientsHeading.fontFamily }}
                    >
                        {clientsHeading.text}
                    </h2>
                </div>

                <StaggeredGrid
                    images={clientLogos.map((l) => l.src)}
                    bentoItems={bentoItems}
                    centerText={clientsGridConfig.centerText}
                    showFooter={clientsGridConfig.showFooter}
                />
            </section>
        </SmoothScroll>
    );
}
