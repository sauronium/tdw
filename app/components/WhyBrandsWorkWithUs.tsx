"use client";

import { useState } from "react";
import {
    whyBrandsCards,
    whyBrandsCardStyles,
    whyBrandsHeading,
    whyBrandsLayout,
} from "@/site-data/homepage/why-brands-work-with-us";

export default function WhyBrandsWorkWithUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className={`${whyBrandsLayout.background.tailwind} ${whyBrandsLayout.paddingY} overflow-visible w-full flex justify-center`}>
            <div className={`${whyBrandsLayout.contentWidth} flex flex-col items-center`}>

                {/* Header */}
                <div className="text-center max-w-4xl mb-10">
                    <h2
                        className={`${whyBrandsHeading.titleFontSize} ${whyBrandsHeading.titleFontWeight} ${whyBrandsHeading.titleLetterSpacing} ${whyBrandsHeading.titleColorTailwind} ${whyBrandsHeading.titleMarginBottom} ${whyBrandsHeading.titleLineHeight}`}
                        style={{ fontFamily: whyBrandsHeading.titleFontFamily }}
                    >
                        Why Brands <br /> Work With Us
                    </h2>
                    <p className={`${whyBrandsHeading.subtitleFontSize} ${whyBrandsHeading.subtitleColorTailwind} max-w-2xl mx-auto ${whyBrandsHeading.subtitleLineHeight}`}>
                        {whyBrandsHeading.subtitle}
                    </p>
                </div>

                {/* Cards Row */}
                <div className={`flex flex-col md:flex-row justify-center items-center mt-10 w-full relative h-auto ${whyBrandsLayout.cardRowHeight}`}>
                    {whyBrandsCards.map((item, index) => {
                        const isHovered   = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;
                        const zIndexClass  = isHovered ? "z-[20]" : item.zIndex;

                        let marginClass  = isHovered
                            ? whyBrandsCardStyles.hoverMargin
                            : whyBrandsCardStyles.overlapMargin;
                        let rotateClass  = isHovered ? whyBrandsCardStyles.hoverRotation : item.rotation;
                        let scaleClass   = isHovered
                            ? whyBrandsCardStyles.hoverScale
                            : isAnyHovered ? whyBrandsCardStyles.siblingScale : "";

                        let originClass = "origin-center";
                        if (index === 0) originClass = "origin-left";
                        if (index === whyBrandsCards.length - 1) originClass = "origin-right";

                        const baseClasses = `relative ${whyBrandsCardStyles.width} ${whyBrandsCardStyles.height} ${whyBrandsCardStyles.borderRadius} border-[3px] border-transparent shadow-2xl transition-all duration-500 ease-out cursor-pointer flex-shrink-0`;
                        const combined    = `${baseClasses} ${zIndexClass} ${marginClass} ${rotateClass} ${scaleClass} ${originClass}`;

                        if (item.type === "stat") {
                            return (
                                <div
                                    key={index}
                                    className={`${combined} flex flex-col justify-between text-white ${whyBrandsCardStyles.stat.padding} ${item.backgroundTailwind}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <span className={`${whyBrandsCardStyles.stat.valueFontSize} ${whyBrandsCardStyles.stat.valueFontWeight} ${whyBrandsCardStyles.stat.valueTracking}`}>
                                        {item.value}
                                    </span>
                                    <div>
                                        <h3 className={`${whyBrandsCardStyles.stat.labelFontSize} ${whyBrandsCardStyles.stat.labelFontWeight} ${whyBrandsCardStyles.stat.labelMarginBottom}`}>
                                            {item.label}
                                        </h3>
                                        <div className={`w-full h-px ${whyBrandsCardStyles.stat.dividerColor} mb-3`}></div>
                                        <p className={`${whyBrandsCardStyles.stat.subLabelFontSize} ${whyBrandsCardStyles.stat.subLabelOpacity}`}>
                                            {item.subLabel}
                                        </p>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    className={`${combined} overflow-hidden bg-black`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <video
                                        src={item.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
