"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Sample Team Data
const teamMembers = [
  { 
    id: 1, 
    name: "Alex Rivera", 
    role: "Creative Director", 
    image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&fit=crop", 
    theme_color: "#3b82f6" // blue
  },
  { 
    id: 2, 
    name: "Samantha Fox", 
    role: "Lead Designer", 
    image_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&fit=crop", 
    theme_color: "#eab308" // yellow
  },
  { 
    id: 3, 
    name: "Marcus Chen", 
    role: "Frontend Dev", 
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&fit=crop", 
    theme_color: "#ec4899" // pink
  },
  { 
    id: 4, 
    name: "Diana Prince", 
    role: "Project Manager", 
    image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&fit=crop", 
    theme_color: "#ef4444" // red
  },
  { 
    id: 5, 
    name: "Evan Wright", 
    role: "UX Researcher", 
    image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&fit=crop", 
    theme_color: "#8b5cf6" // purple
  },
  { 
    id: 6, 
    name: "Frankie Ocean", 
    role: "Motion Designer", 
    image_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&fit=crop", 
    theme_color: "#10b981" // green
  },
  { 
    id: 7, 
    name: "Grace Lee", 
    role: "Copywriter", 
    image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&fit=crop", 
    theme_color: "#f97316" // orange
  },
  { 
    id: 8, 
    name: "Harrison Ford", 
    role: "UI Designer", 
    image_url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&fit=crop", 
    theme_color: "#06b6d4" // cyan
  },
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
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    x: "-50%",
    y: "-50%",
  },
  visible: {
    width: "100%",
    height: "100%",
    borderRadius: "16px",
    x: "-50%",
    y: "-50%",
    transition: { 
      type: "spring" as const, 
      damping: 20, 
      stiffness: 100 
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.3, delay: 0.1 } // Image fades in right as expansion starts
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.6, duration: 0.4, ease: "easeOut" as const } // Waits for morph to almost finish
  }
};

export default function TeamMembers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 w-full max-w-screen-xl mx-auto px-6 overflow-hidden">
      
      <div className="mb-20 text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight text-black mb-6">
          Meet the Team
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Our diverse crew of designers, developers, and dreamers brings every project to life.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => {
          // Offsets: Add top margin to every 2nd item in 2-col, and 2nd & 4th in 4-col
          const isOddColumn = index % 2 !== 0;

          return (
            <div 
              key={member.id} 
              className={`flex justify-center w-full ${isOddColumn ? "sm:mt-12 lg:mt-16" : ""}`}
            >
              {/* Reserved DOM Space for Final Dimensions */}
              <div className="relative w-full max-w-[280px] h-[380px] flex items-center justify-center">
                
                {/* The Morphing Shape */}
                <motion.div
                  className="absolute top-1/2 left-1/2 overflow-hidden shadow-xl"
                  variants={cardVariants}
                  style={{ backgroundColor: member.theme_color }}
                >
                  <motion.div 
                    variants={imageVariants} 
                    className="w-full h-full relative"
                  >
                    <Image 
                      src={member.image_url} 
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover"
                      priority={index < 4}
                    />
                  </motion.div>
                </motion.div>

                {/* Overlapping Text Labels (Bottom Left relative to Reserved Space) */}
                <motion.div 
                  className="absolute -bottom-6 -left-4 z-10 flex flex-col items-start"
                  variants={textVariants}
                >
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-lg md:text-xl font-bold inline-block shadow-lg mb-2 tracking-wide">
                    {member.name}
                  </div>
                  <div 
                    className="px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold text-white inline-block shadow-md uppercase tracking-wider ml-2"
                    style={{ backgroundColor: member.theme_color }}
                  >
                    {member.role}
                  </div>
                </motion.div>

              </div>
            </div>
          );
        })}
      </motion.div>

    </section>
  );
}
