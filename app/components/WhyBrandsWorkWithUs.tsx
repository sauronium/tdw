"use client";

import React, { useState } from "react";
import Image from "next/image";

const stats = [
    {
        type: "stat",
        value: "10M+",
        label: "Lorem Ipsum",
        subLabel: "Lorem Ipsum lorem ipsum lorem",
        bgColor: "bg-[#008ff5]", // Blue
        rotation: "-rotate-6",
        zIndex: "z-10",
    },
    {
        type: "video",
        src: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4", // Office/people working video
        alt: "Team collaboration",
        rotation: "-rotate-3",
        zIndex: "z-20",
    },
    {
        type: "stat",
        value: "30+",
        label: "Lorem Ipsum",
        subLabel: "Lorem Ipsum lorem ipsum lorem",
        bgColor: "bg-[#6bd4a1]", // Green
        rotation: "rotate-3",
        zIndex: "z-30",
    },
    {
        type: "video",
        src: "https://videos.pexels.com/video-files/853789/853789-hd_1920_1080_25fps.mp4", // Work setup video
        alt: "Workspace",
        rotation: "rotate-6",
        zIndex: "z-40",
    },
];

export default function WhyBrandsWorkWithUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#fdf8f2] py-24 md:py-32 overflow-visible w-full flex justify-center">
            <div className="w-[85vw] flex flex-col items-center">
                {/* Header */}
                <div className="text-center max-w-4xl mb-10">
                    <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-black mb-8 leading-tight">
                        Why Brands <br /> Work With Us
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
                        The Designers World is built on a mix of creative thinking and clear
                        systems, so projects feel inspiring but also stay under control.
                    </p>
                </div>

                {/* Cards Row */}
                <div className="flex flex-col md:flex-row justify-center items-center mt-10 w-full relative h-auto md:h-[600px]">
                    {stats.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;

                        // Dimensions: 339.45px x 431.81px -> rounded to w-[340px] h-[432px]
                        // Increase by 10% -> 374px x 475px -> rounded to w-[375px] h-[475px]
                        let wrapperClasses = `relative w-[340px] h-[430px] md:w-[375px] md:h-[475px] rounded-[19px] border-[3px] border-transparent shadow-2xl transition-all duration-500 ease-out cursor-pointer flex-shrink-0`;

                        // Z-index handling
                        const zIndexClass = isHovered ? "z-50" : item.zIndex;

                        // Margin handling for overlap
                        // Default overlap is significant (-ml-12 or similar)
                        let marginClass = "ml-0 md:-ml-12 md:first:ml-0 my-4 md:my-0";

                        // Transform handling
                        let rotateClass = item.rotation;
                        let scaleClass = "";
                        let opacityClass = "";

                        if (isHovered) {
                            rotateClass = "rotate-0";
                            scaleClass = "scale-110";
                            marginClass = "mx-6 md:mx-10 my-4 md:my-0"; // Add space around hovered
                        } else if (isAnyHovered) {
                            scaleClass = "scale-95";
                            // opacityClass = "opacity-50 blur-[1px]";
                            // Keep overlap margins for non-hovered items
                        }

                        const combinedClasses = `${wrapperClasses} ${zIndexClass} ${marginClass} ${rotateClass} ${scaleClass} ${opacityClass}`;

                        if (item.type === "stat") {
                            return (
                                <div
                                    key={index}
                                    className={`${combinedClasses} flex flex-col justify-between text-white p-8 ${item.bgColor}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <span className="text-6xl font-medium tracking-tighter">
                                        {item.value}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-medium mb-3">{item.label}</h3>
                                        <div className="w-full h-px bg-white/30 mb-3"></div>
                                        <p className="text-sm opacity-80">{item.subLabel}</p>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    className={`${combinedClasses} overflow-hidden bg-black`}
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
