"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from "framer-motion";
import {
    socialMediaImages,
    socialMediaCopy,
    socialMediaLayout,
    socialMediaScrollCheckpoints,
    type StackImage,
} from "@/site-data/homepage/social-media-specialists";

type CardState = "hidden" | "entering" | "active" | "exiting";

function CardItem({
    item,
    state,
    onEnteringComplete,
}: {
    item: StackImage;
    state: CardState;
    onEnteringComplete: () => void;
}) {
    const { rotate } = item;

    // Memoised so identity is stable across parent scroll re-renders
    const cardAnimate = (() => {
        switch (state) {
            case "hidden":
                return { opacity: 0, y: "120%", width: "48px", height: "48px", borderRadius: "50%", scale: 1, rotate: 0, transition: { duration: 0 } };
            case "entering":
                return {
                    opacity:      [0,      1,      1,      1,      1     ],
                    y:            ["120%", "0%",   "0%",   "0%",   "0%"  ],
                    scale:        [1,      1,      0.4,    1.06,   1     ],
                    width:        ["48px", "48px", "48px", "100%", "100%"],
                    height:       ["48px", "48px", "48px", "100%", "100%"],
                    borderRadius: ["50%",  "50%",  "50%",  "20px", "20px"],
                    rotate:       [0,      0,      0,      rotate * 1.5, rotate],
                    transition:   { duration: 0.9, times: [0, 0.2, 0.45, 0.78, 1], ease: "easeInOut" as const },
                };
            case "active":
                return { opacity: 1, y: "0%", scale: 1, width: "100%", height: "100%", borderRadius: "20px", rotate, transition: { duration: 0.5, ease: "easeOut" as const } };
            case "exiting":
                return { opacity: 1, y: "130%", scale: 1, width: "100%", height: "100%", borderRadius: "20px", rotate, transition: { duration: 0.38, ease: [0.4, 0, 0.6, 1] as [number, number, number, number] } };
        }
    })();

    const imageAnimate = (() => {
        switch (state) {
            case "hidden":   return { opacity: 0, scale: 1.1, transition: { duration: 0 } };
            case "entering": return { opacity: [0, 0, 1, 1] as number[], scale: [1.1, 1.1, 1, 1] as number[], transition: { duration: 0.9, times: [0, 0.45, 0.78, 1], ease: "easeOut" as const } };
            case "active":   return { opacity: 1, scale: 1, transition: { duration: 0.5 } };
            case "exiting":  return { opacity: 1, scale: 1, transition: { duration: 0.5 } };
        }
    })();

    return (
        <motion.div
            className="absolute inset-0 m-auto overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: "120%", width: "48px", height: "48px", borderRadius: "50%", scale: 1 }}
            animate={cardAnimate}
            onAnimationComplete={() => { if (state === "entering") onEnteringComplete(); }}
            style={{ backgroundColor: item.placeholderColor }}
        >
            <motion.img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={imageAnimate}
            />
        </motion.div>
    );
}

export default function SocialMediaSpecialists() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 22, restDelta: 0.001 });

    const [cardStates, setCardStates] = useState<CardState[]>(socialMediaImages.map(() => "hidden"));
    const [targetIdx, setTargetIdx] = useState(-1);

    const { card1, card2, card3 } = socialMediaScrollCheckpoints;

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        let newIdx = -1;
        if      (latest <= 0)                                  newIdx = -1;
        else if (latest > card1.start && latest < card1.end)   newIdx = 0;
        else if (latest >= card2.start && latest < card2.end)  newIdx = 1;
        else if (latest >= card3.start)                        newIdx = 2;

        if (newIdx !== targetIdx) setTargetIdx(newIdx);
    });

    useEffect(() => {
        setCardStates(prev => {
            const next = [...prev] as CardState[];
            let changed = false;

            if (targetIdx === -1) {
                for (let i = 0; i < socialMediaImages.length; i++) {
                    if (next[i] === "entering" || next[i] === "active") {
                        next[i] = "exiting";
                        changed = true;
                    }
                }
                return changed ? next : prev;
            }

            for (let i = 0; i < socialMediaImages.length; i++) {
                if (i <= targetIdx) {
                    if (next[i] === "hidden" || next[i] === "exiting") {
                        if (i === 0 || next[i - 1] === "active" || next[i - 1] === "entering") {
                            next[i] = "entering";
                            changed = true;
                        }
                    }
                } else {
                    if (next[i] === "entering" || next[i] === "active") {
                        next[i] = "exiting";
                        changed = true;
                    }
                }
            }
            return changed ? next : prev;
        });
    }, [targetIdx, cardStates]);

    const handleEnteringComplete = (index: number) => {
        setCardStates(prev => {
            if (prev[index] !== "entering") return prev;
            const next = [...prev] as CardState[];
            next[index] = "active";
            return next;
        });
    };

    const rightPanelX       = useTransform(smoothProgress, [0, 0.2], [150, 0]);
    const rightPanelOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

    const { heading, body, bodyStyles } = socialMediaCopy;

    return (
        <section ref={containerRef} className={`w-full relative bg-transparent ${socialMediaLayout.scrollHeight} -mt-[60vh] z-20`}>
            <div className={`sticky top-0 h-screen w-full flex ${socialMediaLayout.stickyPadding} overflow-hidden`}>
                <div className={`${socialMediaLayout.maxWidth} w-full mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-10 md:gap-12 lg:gap-16`}>

                    {/* Left: Card stack */}
                    <div className={`${socialMediaLayout.imageSide.width} flex justify-center md:justify-start pl-0 md:pl-4 mb-6 md:mb-0 relative py-12 md:py-0`}>
                        <div className={`relative w-full md:w-[85%] ${socialMediaLayout.imageSide.imageMaxWidth} ${socialMediaLayout.imageSide.imageHeight} flex items-center justify-center -translate-y-[4vh] md:translate-y-0`}>
                            {socialMediaImages.map((item, index) => (
                                <div key={item.id} className="absolute inset-0" style={{ zIndex: index + 1 }}>
                                    <CardItem
                                        item={item}
                                        state={cardStates[index]}
                                        onEnteringComplete={() => handleEnteringComplete(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div className={`${socialMediaLayout.contentSide.width} flex flex-col justify-center py-4 md:py-8 text-center md:text-left items-center md:items-start relative z-10 lg:pl-10`}>
                        <motion.div style={{ x: rightPanelX, opacity: rightPanelOpacity }} className="max-w-[650px]">
                            <h2
                                className={`${heading.fontSize} ${heading.fontWeight} ${heading.letterSpacing} ${heading.lineHeight} ${heading.colorTailwind} ${heading.marginBottom} ${heading.textTransform}`}
                                style={{ fontFamily: heading.fontFamily }}
                            >
                                {heading.text}
                            </h2>
                            <div className={`${bodyStyles.fontSize} ${bodyStyles.colorTailwind} ${bodyStyles.lineHeight} ${bodyStyles.fontWeight} flex flex-col gap-4`}>
                                {body.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
