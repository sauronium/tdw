"use client";

import { motion } from "framer-motion";

const clients = [
    {
        title: "Startups",
        desc: "That need to look product-ready (and investor-ready).",
        bg: "#ed6e33",
        icon: (
            // Rocket SVG
            <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mt-auto opacity-80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 4C32 4 20 16 20 32a12 12 0 0024 0C44 16 32 4 32 4z" />
                <path d="M22 38l-8 8M42 38l8 8" />
                <circle cx="32" cy="32" r="4" />
                <path d="M20 44c-4 2-7 5-7 8h38c0-3-3-6-7-8" />
            </svg>
        ),
        offset: "mt-0",
    },
    {
        title: "Small Businesses",
        desc: 'Ready to upgrade from "just a logo" to a real brand system.',
        bg: "#4a88f5",
        icon: (
            // Building SVG
            <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mt-auto opacity-80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="14" y="20" width="36" height="36" rx="2" />
                <rect x="22" y="30" width="8" height="8" />
                <rect x="34" y="30" width="8" height="8" />
                <rect x="26" y="44" width="12" height="12" />
                <path d="M20 20V14a12 12 0 0124 0v6" />
            </svg>
        ),
        offset: "mt-10 md:mt-16",
    },
    {
        title: "Premium Brands",
        desc: "Discretion, and design that feels expensive for the right reasons.",
        bg: "#6bb88b",
        icon: (
            // Award SVG
            <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mt-auto opacity-80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="28" r="16" />
                <circle cx="32" cy="28" r="9" />
                <path d="M22 42l-6 14 16-6 16 6-6-14" />
                <path d="M28 25l3 6 6-1-4 5 2 6-5-3-5 3 2-6-4-5 6 1z" fill="white" fillOpacity="0.3" />
            </svg>
        ),
        offset: "mt-0",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhoWeWorkWith() {
    return (
        <section className="w-full py-20 md:py-28 bg-[#fdf8f2] px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#171717] text-center leading-[1.1] mb-16 md:mb-24">
                    Who we<br />work with
                </h2>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className={`flex flex-col rounded-3xl p-8 min-h-[420px] md:min-h-[480px] text-white ${client.offset}`}
                            style={{ backgroundColor: client.bg }}
                        >
                            <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
                                {client.title}
                            </h3>
                            <p className="text-base md:text-lg font-light leading-snug opacity-90">
                                {client.desc}
                            </p>
                            <div className="mt-auto pt-8 flex justify-center">
                                {client.icon}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
