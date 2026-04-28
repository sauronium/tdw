"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ServiceGetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export default function ServiceGetStartedModal({ isOpen, onClose, serviceTitle }: ServiceGetStartedModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modalVariants: any = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", damping: 25, stiffness: 200 }
    },
    exit: { 
      scale: 0.9, 
      opacity: 0, 
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-transparent pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#eaeaec]/60 backdrop-blur-md pointer-events-auto"
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 w-full max-w-lg bg-[#09090b] rounded-[32px] p-8 md:p-12 flex flex-col text-white pointer-events-auto shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors z-20 group"
            >
              <X className="w-6 h-6 text-white/70 group-hover:text-white" />
            </button>

            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-2">
              Get Started
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light mb-8">
              Let us know how we can help you with {serviceTitle}.
            </p>

            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Service</label>
                <input 
                  type="text" 
                  value={serviceTitle}
                  readOnly
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white outline-none opacity-70 cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  placeholder="Your Name *"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-lg text-white outline-none placeholder:text-white/30 focus:border-white/60 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address *"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-lg text-white outline-none placeholder:text-white/30 focus:border-white/60 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  type="tel" 
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-lg text-white outline-none placeholder:text-white/30 focus:border-white/60 transition-colors"
                />
              </div>

              <button 
                type="submit"
                className="mt-4 w-full py-4 rounded-full bg-white text-black font-medium text-lg flex items-center justify-center hover:bg-white/90 transition-all"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
