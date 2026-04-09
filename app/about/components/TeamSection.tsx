"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const members = [
  {
    name: "Alex Rivera",
    title: "Lead Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    theme_color: "#4a88f5", // blue
  },
  {
    name: "Samira Jones",
    title: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    theme_color: "#ed6e33", // orange
  },
  {
    name: "Michael Chen",
    title: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    theme_color: "#6bb88b", // green
  },
  {
    name: "Laila Woods",
    title: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    theme_color: "#a364ff", // purple
  }
];

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
    scale: 0.8
  },
  visible: {
    y: [80, 0, 0, 0, 0],
    opacity: [0, 1, 1, 1, 1],
    scale: [0.8, 1, 0.4, 1.05, 1], // Deep beat down to 0.4 scale before explosion
    width: ["48px", "48px", "48px", "100%", "100%"],
    height: ["48px", "48px", "48px", "100%", "100%"],
    borderRadius: ["50%", "50%", "50%", "24px", "24px"],
    transition: {
        duration: 1.8,
        times: [0, 0.25, 0.45, 0.8, 1], // 0-0.45s is entry and beat. 0.45-0.8s is explode. 0.8-1s is settle.
        ease: "easeInOut" as const
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { delay: 1.0, duration: 0.4, ease: "easeOut" as const } // Image pops in mid-explosion
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: 1.25, duration: 0.4, ease: "easeOut" as const } // Text slides in right as it settles
  }
};

export default function TeamSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-150px" }); // Trigger when section is cleanly in view

    return (
        <section ref={sectionRef} className="w-full pt-24 md:pt-32 pb-8 bg-[#fdf8f2] px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                <div className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-[80px] font-medium tracking-tight text-[#171717] leading-[1.1]">
                        The minds behind <br className="hidden md:block" /> the magic.
                    </h2>
                </div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {members.map((member, idx) => {
                        // Offset 2nd and 4th columns
                        const isEven = idx % 2 === 1; 
                        
                        return (
                            <div 
                                key={idx} 
                                className={`flex justify-center w-full ${isEven ? 'sm:mt-12 lg:mt-24' : ''}`}
                            >
                                {/* Reserved DOM Space for Final Dimensions - Increased Length */}
                                <div className="relative w-full max-w-[340px] h-[480px] lg:max-w-[400px] lg:h-[580px]">
                                    
                                    {/* The Morphing Shape */}
                                    {/* `inset-0 m-auto` ensures physical dimension expansions symmetrically center-out! */}
                                    <motion.div
                                        className="absolute inset-0 m-auto overflow-hidden shadow-2xl"
                                        variants={cardVariants}
                                        style={{ backgroundColor: member.theme_color }}
                                    >
                                        
                                        {/* Image Group within Card */}
                                        <motion.div variants={imageVariants} className="absolute inset-0 z-0 h-full w-full">
                                            {/* Gradients for readability */}
                                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent"></div>
                                            <img 
                                                src={member.image} 
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>

                                        {/* Floating Text Overlay INSIDE the Card */}
                                        <motion.div 
                                            className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col items-start gap-4"
                                            variants={textVariants}
                                        >
                                            <div className="bg-[#111111] text-white px-5 py-2.5 rounded-lg text-xl lg:text-2xl font-bold tracking-wide shadow-md border border-white/10 backdrop-blur-md">
                                                {member.name}
                                            </div>
                                            <div 
                                                className="px-5 py-2 rounded-full text-xs lg:text-sm font-semibold text-white uppercase tracking-widest shadow-md shrink-0"
                                                style={{ backgroundColor: member.theme_color }}
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
                
                {/* Bottom padding buffer so translated columns do not clip */}
                <div className="h-24 lg:h-48 w-full"></div>
            </div>
        </section>
    );
}
