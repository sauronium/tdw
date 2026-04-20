"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, type MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import {
    differentCards,
    differentHeading,
    differentCardStyles,
    differentLayout,
    type DifferentCard,
} from "@/site-data/about/different-section";

// Vw values that control the staggered column layout
const CARD_VW = 22;   // each card column width (~300px on 1440px screen)
const GAP_VW  = 1.5;  // gap between columns

const SlideCard = ({
    card,
    index,
    progress,
}: {
    card: DifferentCard;
    index: number;
    progress: MotionValue<number>;
}) => {
    const stagger  = index * 0.03;
    const t0 = 0.06 + stagger;
    const t1 = 0.17 + stagger;
    const t2 = 0.27 + stagger;
    const t3 = 0.38 + stagger;

    const finalXVw = index * (CARD_VW + GAP_VW);

    const x = useTransform(progress,
        [t0,       t1,                          t2,                   t3],
        ["110vw",  `${55 + finalXVw * 0.4}vw`, `${finalXVw + 1}vw`,  `${finalXVw}vw`]
    );
    const y = useTransform(progress,
        [t0,      t1,     t2,     t3],
        ["70vh",  "-5vh", "-2vh", "0vh"]
    );
    const rotate = useTransform(progress,
        [t0,  t1,  t2,  t3],
        [12,  -3,  1,   0]
    );

    return (
        <motion.div
            style={{ x, y, rotate, position: "absolute", left: 0, top: 0, zIndex: index + 10 }}
            className={`${differentCardStyles.width} ${differentCardStyles.height} ${differentCardStyles.padding} ${differentCardStyles.borderRadius} shadow-2xl ${card.bg} flex flex-col justify-between shrink-0 will-change-transform`}
        >
            <div>
                <h3 className={`${differentCardStyles.title.fontSize} ${differentCardStyles.title.fontWeight} ${differentCardStyles.title.lineHeight} ${differentCardStyles.title.letterSpacing} ${differentCardStyles.title.colorTailwind}`}>
                    {card.title}
                </h3>
            </div>
            <div>
                <p className={`${differentCardStyles.desc.fontSize} ${differentCardStyles.desc.opacity} ${differentCardStyles.desc.lineHeight} ${differentCardStyles.desc.fontWeight} ${differentCardStyles.desc.colorTailwind}`}>
                    {card.desc}
                </p>
            </div>
        </motion.div>
    );
};

export default function DifferentSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });

    return (
        <section ref={containerRef} className={`${differentLayout.scrollHeight} relative ${differentLayout.background.tailwind}`}>
            <div className={`sticky top-0 h-screen overflow-hidden relative ${differentLayout.paddingX}`}>

                {/* Section title — behind the cards (z-0) */}
                <div className={`absolute ${differentLayout.titleTopOffset} left-8 md:left-16 right-0`} style={{ zIndex: 0 }}>
                    <h2
                        className={`${differentHeading.fontSize} ${differentHeading.fontWeight} ${differentHeading.letterSpacing} ${differentHeading.colorTailwind} ${differentHeading.lineHeight}`}
                        style={{ fontFamily: differentHeading.fontFamily }}
                    >
                        What Makes<br />us Different
                    </h2>
                </div>

                {/* Cards — absolutely positioned to fly in over the title */}
                <div
                    className="absolute left-8 md:left-16 right-0"
                    style={{ top: differentLayout.cardsTopOffset, height: differentLayout.cardsHeight }}
                >
                    {differentCards.map((card, idx) => (
                        <SlideCard
                            key={idx}
                            card={card}
                            index={idx}
                            progress={smoothProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
