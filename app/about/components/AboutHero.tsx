"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
    aboutHeroHeading,
    aboutHeroParagraphs,
    aboutHeroBodyStyles,
    aboutHeroImage,
    aboutHeroParallax,
    aboutHeroLayout,
} from "@/site-data/about/about-hero";

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [aboutHeroParallax.yFrom, aboutHeroParallax.yTo]
    );

    return (
        <section className="w-full relative flex flex-col items-center">
            <div className={`w-full ${aboutHeroLayout.textSectionHeight} flex flex-col items-center justify-center ${aboutHeroLayout.paddingX}`}>
                <h1
                    className={`${aboutHeroHeading.fontSize} ${aboutHeroHeading.lineHeight} ${aboutHeroHeading.fontWeight} ${aboutHeroHeading.colorTailwind} ${aboutHeroHeading.textAlign} ${aboutHeroHeading.letterSpacing}`}
                >
                    {aboutHeroHeading.text}
                </h1>
                <div className={`mt-8 flex flex-col ${aboutHeroBodyStyles.gap} ${aboutHeroBodyStyles.maxWidth} ${aboutHeroBodyStyles.textAlign} ${aboutHeroBodyStyles.fontSize} ${aboutHeroBodyStyles.fontWeight} ${aboutHeroBodyStyles.colorTailwind}`}>
                    {aboutHeroParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </div>

            <div
                ref={containerRef}
                className={`${aboutHeroLayout.imageWidth} ${aboutHeroLayout.imageHeight} relative overflow-hidden ${aboutHeroLayout.imageRadius}`}
            >
                <motion.div
                    style={{ y }}
                    className={`absolute inset-0 w-full ${aboutHeroParallax.imageHeightOverflow} ${aboutHeroParallax.imageTopOffset}`}
                >
                    <Image
                        src={aboutHeroImage.src}
                        alt={aboutHeroImage.alt}
                        fill
                        className="object-cover"
                        priority={aboutHeroImage.priority}
                    />
                </motion.div>
            </div>

            <div className={`${aboutHeroLayout.bottomPadding} w-full`} />
        </section>
    );
}
