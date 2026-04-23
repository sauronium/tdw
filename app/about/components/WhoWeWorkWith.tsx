"use client";

import { motion } from "framer-motion";
import {
    clientTypeCards,
    whoWeWorkWithHeading,
    clientTypeCardStyles,
    whoWeWorkWithLayout,
    type ClientTypeCard,
} from "@/site-data/about/who-we-work-with";

// ── Icon resolver ─────────────────────────────────────────────
// SVG icons stay in the component; data drives which one to show.
function CardIcon({ iconKey }: { iconKey: ClientTypeCard["iconKey"] }) {
    const sharedProps = {
        viewBox: "0 0 64 64",
        fill: "none",
        className: `${clientTypeCardStyles.icon.size} ${clientTypeCardStyles.icon.margin} ${clientTypeCardStyles.icon.opacity}`,
        stroke: "white",
        strokeWidth: 2,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    if (iconKey === "startup") {
        return (
            <svg {...sharedProps}>
                <path d="M32 4C32 4 20 16 20 32a12 12 0 0024 0C44 16 32 4 32 4z" />
                <path d="M22 38l-8 8M42 38l8 8" />
                <circle cx="32" cy="32" r="4" />
                <path d="M20 44c-4 2-7 5-7 8h38c0-3-3-6-7-8" />
            </svg>
        );
    }

    if (iconKey === "small-business") {
        return (
            <svg {...sharedProps}>
                <rect x="14" y="20" width="36" height="36" rx="2" />
                <rect x="22" y="30" width="8" height="8" />
                <rect x="34" y="30" width="8" height="8" />
                <rect x="26" y="44" width="12" height="12" />
                <path d="M20 20V14a12 12 0 0124 0v6" />
            </svg>
        );
    }

    // premium-brand
    return (
        <svg {...sharedProps}>
            <circle cx="32" cy="28" r="16" />
            <circle cx="32" cy="28" r="9" />
            <path d="M22 42l-6 14 16-6 16 6-6-14" />
            <path d="M28 25l3 6 6-1-4 5 2 6-5-3-5 3 2-6-4-5 6 1z" fill="white" fillOpacity="0.3" />
        </svg>
    );
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function WhoWeWorkWith() {
    return (
        <section className={`w-full ${whoWeWorkWithLayout.paddingY} ${whoWeWorkWithLayout.background.tailwind} ${whoWeWorkWithLayout.paddingX}`}>
            <div className={`${whoWeWorkWithLayout.maxWidth} mx-auto`}>

                <h2 className={`${whoWeWorkWithHeading.fontSize} ${whoWeWorkWithHeading.fontWeight} ${whoWeWorkWithHeading.letterSpacing} ${whoWeWorkWithHeading.colorTailwind} ${whoWeWorkWithHeading.textAlign} ${whoWeWorkWithHeading.lineHeight} ${whoWeWorkWithHeading.marginBottom}`}>
                    {whoWeWorkWithHeading.text}
                </h2>

                <motion.div
                    className={`grid grid-cols-1 md:grid-cols-3 ${whoWeWorkWithLayout.gridGap} items-start`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {clientTypeCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className={`flex flex-col ${clientTypeCardStyles.borderRadius} ${clientTypeCardStyles.padding} ${clientTypeCardStyles.minHeight} ${clientTypeCardStyles.textColor} ${card.offset}`}
                            style={{ backgroundColor: card.color }}
                        >
                            <h3 className={`${clientTypeCardStyles.title.fontSize} ${clientTypeCardStyles.title.fontWeight} ${clientTypeCardStyles.title.lineHeight} ${clientTypeCardStyles.title.marginBottom}`}>
                                {card.title}
                            </h3>
                            <p className={`${clientTypeCardStyles.desc.fontSize} ${clientTypeCardStyles.desc.fontWeight} ${clientTypeCardStyles.desc.lineHeight} ${clientTypeCardStyles.desc.opacity}`}>
                                {card.desc}
                            </p>
                            <div className="mt-auto pt-8 flex justify-center">
                                <CardIcon iconKey={card.iconKey} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
