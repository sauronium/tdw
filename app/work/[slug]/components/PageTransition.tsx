"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Page content sliding up gracefully */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
                {children}
            </motion.div>
            
            {/* Cinematic black wipe overlay on mount */}
            <motion.div 
                className="fixed inset-0 z-[99999] bg-black pointer-events-none"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            />
        </>
    );
}
