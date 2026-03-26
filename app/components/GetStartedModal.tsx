"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "How can we help?",
    subtitle: "You can book multiple services",
    options: [
      "Branding Design",
      "Design System",
      "Product Design",
      "Website Design",
      "Other"
    ]
  },
  {
    title: "Tell us about",
    subtitle: "Describe your project briefly",
    isTextarea: true
  },
  {
    title: "Project Budget",
    subtitle: "Select a comfortable range",
    options: [
      "$5k - $10k",
      "$10k - $25k",
      "$25k - $50k",
      "$50k+"
    ]
  },
  {
    title: "Your Details",
    subtitle: "How can we reach you?",
    isContact: true
  }
];

export default function GetStartedModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentStep(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // The animation variants
  // To scale down towards bottom-right, the exit origin needs to be "100% 100%"
  const modalVariants: any = {
    hidden: { 
      scale: 0, 
      opacity: 0, 
      transformOrigin: "0% 0%"  // Top Left
    },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transformOrigin: "0% 0%",
      transition: { type: "spring", damping: 25, stiffness: 200 }
    },
    exit: { 
      scale: 0, 
      opacity: 0, 
      transformOrigin: "100% 100%", // Bottom Right
      transition: { type: "spring", damping: 25, stiffness: 200 }
    }
  };

  // Form slide animations
  const slideVariants: any = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  // Track direction for sliding
  const [[page, direction], setPage] = useState([0, 0]);

  // Sync state with currentStep for direction
  useEffect(() => {
    setPage([currentStep, currentStep > page ? 1 : -1]);
  }, [currentStep]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-stretch md:items-center justify-center p-4 md:p-6 bg-transparent pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#eaeaec]/60 backdrop-blur-md pointer-events-auto"
          />

          <div className="relative z-10 w-full h-full max-w-[1500px] flex flex-col md:flex-row gap-4 md:gap-5 pointer-events-none">
            
            {/* LEFT PANEL */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-[1.5] bg-[#09090b] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col text-white pointer-events-auto shadow-2xl"
            >
              {/* Close Button Top Left */}
              <button 
                onClick={onClose}
                className="absolute top-8 left-8 p-2 rounded-full hover:bg-white/10 transition-colors z-20 group"
              >
                <X className="w-6 h-6 text-white/70 group-hover:text-white" />
              </button>

              {/* Form Content Wrapper */}
              <div className="flex-1 mt-12 md:mt-16 relative overflow-hidden flex flex-col">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 flex flex-col md:flex-row gap-10 md:gap-20"
                  >
                    {/* Left Column of Form (Title & Subtitle) */}
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight leading-tight mb-4">
                        {steps[currentStep].title}
                      </h2>
                      <p className="text-white/60 text-lg md:text-xl font-light">
                        {steps[currentStep].subtitle}
                      </p>
                    </div>

                    {/* Right Column of Form (Inputs/Options) */}
                    <div className="flex-1 flex flex-col justify-start">
                      {steps[currentStep].options && !steps[currentStep].isContact && !steps[currentStep].isTextarea && (
                        <div className="flex flex-col gap-3">
                          {steps[currentStep].options?.map((opt) => {
                            const isSelected = currentStep === 0 
                              ? selectedServices.includes(opt)
                              : selectedBudget === opt;

                            return (
                              <button
                                key={opt}
                                onClick={() => {
                                  if (currentStep === 0) toggleService(opt);
                                  else setSelectedBudget(opt);
                                }}
                                className={`flex items-center justify-between p-5 rounded-full border transition-all duration-300 ${
                                  isSelected 
                                    ? "bg-white/10 border-white/30 text-white" 
                                    : "border-white/10 text-white/70 hover:border-white/20 hover:bg-white/5"
                                }`}
                              >
                                <span className="text-lg font-medium ml-2">{opt}</span>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 transition-colors ${
                                  isSelected ? "border-white" : "border-white/30"
                                }`}>
                                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white transition-all scale-100" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {steps[currentStep].isTextarea && (
                        <div className="flex flex-col h-full w-full opacity-100">
                          <textarea 
                            placeholder="Share your thoughts here..."
                            className="w-full h-full min-h-[250px] bg-transparent border-b border-white/20 pb-4 text-2xl text-white outline-none resize-none placeholder:text-white/20 focus:border-white/60 transition-colors"
                          />
                        </div>
                      )}

                      {steps[currentStep].isContact && (
                        <div className="flex flex-col gap-8 w-full">
                          <input 
                            type="text" 
                            placeholder="Your Name *"
                            className="w-full bg-transparent border-b border-white/20 pb-4 text-xl text-white outline-none placeholder:text-white/30 focus:border-white/60 transition-colors"
                          />
                          <input 
                            type="email" 
                            placeholder="Email Address *"
                            className="w-full bg-transparent border-b border-white/20 pb-4 text-xl text-white outline-none placeholder:text-white/30 focus:border-white/60 transition-colors"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-8">
                <div className="text-white/40 text-sm font-medium tracking-widest uppercase">
                  Step 0{currentStep + 1} / 0{steps.length}
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  {currentStep < steps.length - 1 ? (
                    <button 
                      onClick={handleNext}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button 
                      onClick={onClose}
                      className="px-6 h-12 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center hover:bg-white/90 transition-all"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* RIGHT PANELS */}
            <div className="flex-1 flex flex-col gap-4 md:gap-5 min-w-[360px] md:max-w-[450px]">
              {/* TOP RIGHT PANEL */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex-1 bg-[#09090b] rounded-[32px] p-10 flex flex-col justify-between text-white pointer-events-auto shadow-2xl relative overflow-hidden group"
              >
                {/* Background glow effect optionally? */}
                <div className="relative z-10 flex flex-col gap-2">
                  <p className="text-white/50 text-sm tracking-wide mb-2">Need the design component?</p>
                  <h3 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight max-w-[300px]">
                    Have a cool project for us?
                  </h3>
                </div>

                <div className="relative z-10 mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-start justify-between gap-6">
                  <div className="flex flex-col">
                    <p className="text-white/40 text-xs mb-1">Or just say hi?</p>
                    <Link href="mailto:hey@konpo.studio" className="text-sm font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors">
                      hey@konpo.studio
                    </Link>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <p className="text-white/40 text-xs mb-1">Credentials</p>
                    <Link href="#" className="text-sm font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors">
                      Download pdf file
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* BOTTOM RIGHT PANEL */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex-[1.2] bg-[#09090b] rounded-[32px] p-10 flex flex-col justify-between text-white pointer-events-auto shadow-2xl relative"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-10 h-10 opacity-30">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L16.417 14.591H11V3H21V11.052L17.51 21H14.017ZM3 21L5.4 14.591H0V3H10V11.052L6.49 21H3Z" />
                    </svg>
                  </div>
                  
                  <p className="text-xl md:text-[22px] font-light text-white/80 leading-snug">
                    We&apos;re on the lookout for impactful projects, where we can really sink our teeth into the work.
                  </p>
                </div>

                <div className="mt-8 flex flex-col border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image 
                      src="https://api.dicebear.com/7.x/notionists/svg?seed=Jean" 
                      unoptimized
                      alt="Jean Massad" 
                      width={48} 
                      height={48} 
                      className="rounded-full bg-[#f26522]"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-base">Jean Massad</span>
                      <span className="text-white/40 text-sm">Founder</span>
                    </div>
                  </div>

                  <Link href="#" className="flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors group w-fit">
                    Make an appointment 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
