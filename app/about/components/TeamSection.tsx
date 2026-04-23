"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    teamMembers,
    teamHeading,
    teamCardStyles,
    teamLayout,
} from "@/site-data/about/team-section";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        y: 80,
        opacity: 0,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        scale: 0.8,
    },
    visible: {
        y: [80, 0, 0, 0, 0],
        opacity: [0, 1, 1, 1, 1],
        scale: [0.8, 1, 0.4, 1.05, 1],
        width: ["48px", "48px", "48px", "100%", "100%"],
        height: ["48px", "48px", "48px", "100%", "100%"],
        borderRadius: ["50%", "50%", "50%", "24px", "24px"],
        transition: {
            duration: 1.8,
            times: [0, 0.25, 0.45, 0.8, 1],
            ease: "easeInOut" as const,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeOut" as const },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.25, duration: 0.4, ease: "easeOut" as const },
    },
};

export default function TeamSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

    return (
        <section
            ref={sectionRef}
            className={`w-full ${teamLayout.paddingTop} ${teamLayout.paddingBottom} ${teamLayout.background.tailwind} ${teamLayout.paddingX} overflow-hidden`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <h2
                        className={`${teamHeading.fontSize} ${teamHeading.fontWeight} ${teamHeading.letterSpacing} ${teamHeading.colorTailwind} ${teamHeading.lineHeight}`}
                        style={{ whiteSpace: "pre-line" }}
                    >
                        {teamHeading.text}
                    </h2>
                </div>

                <motion.div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${teamLayout.gridGap}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {teamMembers.map((member, idx) => {
                        const isEven = idx % 2 === 1;

                        return (
                            <div
                                key={idx}
                                className={`flex justify-center w-full ${isEven ? teamCardStyles.oddColumnOffset : ""}`}
                            >
                                <div className={`relative ${teamCardStyles.width} ${teamCardStyles.height}`}>
                                    <motion.div
                                        className="absolute inset-0 m-auto overflow-hidden shadow-2xl"
                                        variants={cardVariants}
                                        style={{ backgroundColor: member.themeColor }}
                                    >
                                        <motion.div variants={imageVariants} className="absolute inset-0 z-0 h-full w-full">
                                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>

                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col items-start gap-4"
                                            variants={textVariants}
                                        >
                                            <div className="bg-[#111111] text-white px-5 py-2.5 rounded-lg text-xl lg:text-2xl font-bold tracking-wide shadow-md border border-white/10 backdrop-blur-md">
                                                {member.name}
                                            </div>
                                            <div
                                                className="px-5 py-2 rounded-full text-xs lg:text-sm font-semibold text-white uppercase tracking-widest shadow-md shrink-0"
                                                style={{ backgroundColor: member.themeColor }}
                                            >
                                                {member.title}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <div className="h-24 lg:h-48 w-full" />
            </div>
        </section>
    );
}
