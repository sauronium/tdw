"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { socialMediaCopy } from "@/site-data/homepage/social-media-specialists";

const items = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        color: "#f26522",
        rotate: 0,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
        color: "#8c6bf7",
        rotate: -3,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        color: "#00c0b5",
        rotate: 4,
    }
];

type CardState = "hidden" | "entering" | "active" | "exiting";

function CardItem({
    item,
    state,
    onEnteringComplete,
}: {
    item: typeof items[0];
    state: CardState;
    onEnteringComplete: () => void;
}) {
    // Aggressively memoize the animation payload arrays.
    // Parent scroll events generate new function props, causing CardItem re-renders.
    // If this object identity changes mid-animation, Framer skips/aborts the sequence!
    const cardAnimate = React.useMemo(() => {
        switch (state) {
            case "hidden":
                return {
                    opacity: 0,
                    y: "120%", 
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    scale: 1, // Explicitly fixed to 1! Scale 0 causes deterministic CSS Matrix dropouts
                    rotate: 0,
                    transition: { duration: 0 }
                };
            case "entering":
                return {
                    opacity:      [0,      1,      1,      1,      1],
                    y:            ["120%", "0%",   "0%",   "0%",   "0%"],
                    scale:        [1,      1,      0.4,    1.06,   1],
                    width:        ["48px", "48px", "48px", "100%", "100%"],
                    height:       ["48px", "48px", "48px", "100%", "100%"],
                    borderRadius: ["50%",  "50%",  "50%",  "20px", "20px"],
                    rotate:       [0,      0,      0,      item.rotate * 1.5, item.rotate],
                    transition: {
                        duration: 0.9,
                        times:    [0,      0.2,    0.45,   0.78,   1],
                        ease:     "easeInOut" as const,
                    },
                };
            case "active":
                return {
                    opacity: 1,
                    y: "0%",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    rotate: item.rotate,
                    transition: { duration: 0.5, ease: "easeOut" as const }, 
                };
            case "exiting":
                return {
                    opacity: 1,
                    y: "130%", // slide off the bottom gracefully as a card
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    rotate: item.rotate,
                    transition: { duration: 0.38, ease: [0.4, 0, 0.6, 1] as [number,number,number,number] },
                };
        }
    }, [state, item.rotate]);

    const imageAnimate = React.useMemo(() => {
        switch (state) {
            case "hidden":   
                return { opacity: 0, scale: 1.1, transition: { duration: 0 } };
            case "entering":
                // Delay visibility to perfectly align with the width explosion
                return {
                    opacity: [0, 0, 1, 1],
                    scale: [1.1, 1.1, 1, 1],
                    transition: { duration: 0.9, times: [0, 0.45, 0.78, 1], ease: "easeOut" as const }
                };
            case "active":   
                return { opacity: 1, scale: 1, transition: { duration: 0.5 } };
            case "exiting":  
                return { opacity: 1, scale: 1, transition: { duration: 0.5 } };
        }
    }, [state]);

    return (
        <motion.div
            className="absolute inset-0 m-auto overflow-hidden shadow-2xl"
            initial={{
                opacity: 0,
                y: "120%",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                scale: 1,
            }}
            animate={cardAnimate}
            onAnimationComplete={() => {
                if (state === "entering") onEnteringComplete();
            }}
            style={{ backgroundColor: item.color }}
        >
            <motion.img
                src={item.image}
                alt="Social Media"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={imageAnimate}
            />
        </motion.div>
    );
}

export default function SocialMediaSpecialists() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 22,
        restDelta: 0.001,
    });

    const [cardStates, setCardStates] = useState<CardState[]>(["hidden", "hidden", "hidden"]);
    const [targetIdx, setTargetIdx] = useState(-1);

    // Scroll-driven trigger checkpoints!
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        let newIdx = -1;
        if (latest <= 0) newIdx = -1;
        else if (latest > 0 && latest < 0.40) newIdx = 0;
        else if (latest >= 0.40 && latest < 0.60) newIdx = 1;
        else if (latest >= 0.60) newIdx = 2;
        
        if (newIdx !== targetIdx) {
            setTargetIdx(newIdx);
        }
    });

    useEffect(() => {
        setCardStates(prev => {
            const next = [...prev] as CardState[];
            let changed = false;

            if (targetIdx === -1) {
                // If section fully above, slide everything off gracefully
                for (let i = 0; i < items.length; i++) {
                    if (next[i] === "entering" || next[i] === "active") {
                        next[i] = "exiting";
                        changed = true;
                    }
                }
                return changed ? next : prev;
            }

            for (let i = 0; i < items.length; i++) {
                if (i <= targetIdx) {
                    if (next[i] === "hidden" || next[i] === "exiting") {
                        // Allow next card to start once previous has at least begun entering.
                        if (i === 0 || next[i - 1] === "active" || next[i - 1] === "entering") {
                            next[i] = "entering";
                            changed = true;
                        }
                    }
                } else {
                    // Scroll up gracefully exits cards beyond targetIdx
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

    return (
        <section ref={containerRef} className="w-full relative bg-transparent h-[400vh]">
            <div className="sticky top-0 h-screen w-full flex py-12 md:py-24 overflow-hidden">
                <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-10 md:gap-12 lg:gap-16">
                    
                    {/* Left Frame: Card Stack */}
                    <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center md:justify-start pl-0 md:pl-4 mb-6 md:mb-0 relative py-12 md:py-0">
                        <div className="relative w-full md:w-[85%] max-w-[300px] lg:max-w-[320px] h-[60vh] md:h-[80vh] flex items-center justify-center -translate-y-[4vh] md:translate-y-0">
                            {items.map((item, index) => (
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

                    {/* Right Frame: Static Message */}
                    <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center py-4 md:py-8 text-center md:text-left items-center md:items-start relative z-10 lg:pl-10">
                        <div className="max-w-[650px]">
                            <motion.h2
                                className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1] text-[#1a1a1a] mb-8 lowercase"
                                style={{ fontFamily: socialMediaCopy.heading.fontFamily }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 2.5, ease: [0.0, 0.0, 0.2, 1] }}
                            >
                                {socialMediaCopy.heading.text}
                            </motion.h2>
                            
                            <p className="text-base md:text-[17px] text-[#222] leading-[1.6] md:leading-relaxed font-medium">
                                Dorst &amp; Lesser is a global social media agency based in Amsterdam, driven by a team of over 50 social media enthusiasts. Our mission is to make brands more social by fostering meaningful connections with their communities and enhancing brand loyalty through the power of AI social data.<br /><br />
                                Since our founding in 2011, we have been leaders in the social media space. We all love what we do, which is why we&apos;ve made our work our playground—a place where friendships begin and grow.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
