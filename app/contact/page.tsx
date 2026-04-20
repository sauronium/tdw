"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
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

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

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

  const slideVariants: any = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };
  
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    setPage([currentStep, currentStep > page ? 1 : -1]);
  }, [currentStep]);

  return (
    <main className="min-h-screen bg-[#fdf8f2] pt-32 pb-20 px-4 md:px-8 xl:px-16 flex items-center justify-center">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Page Info & Context */}
        <motion.div
           initial={{ y: 30, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="flex-1 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight text-[#171717] leading-[1.05] mb-8">
              Let's create<br />something great.
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#171717]/70 leading-snug max-w-lg mb-12 lg:mb-20">
              We're on the lookout for impactful projects, where we can really sink our teeth into the work and make a difference.
            </p>

            <div className="flex items-center gap-5 border border-[#171717]/10 p-6 rounded-[24px] max-w-sm">
              <Image 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Jean" 
                unoptimized
                alt="Jean Massad" 
                width={56} 
                height={56} 
                className="rounded-full bg-[#f26522]"
              />
              <div className="flex flex-col">
                <span className="font-medium text-[#171717] text-lg">Jean Massad</span>
                <span className="text-[#171717]/50 text-sm">Founder & Creative Director</span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col">
              <p className="text-[#171717]/40 text-sm mb-1 uppercase tracking-wider font-semibold">Or just say hi</p>
              <Link href="mailto:hey@konpo.studio" className="text-lg font-medium text-[#171717] hover:text-[#ff5a26] transition-colors">
                hey@konpo.studio
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-[#171717]/40 text-sm mb-1 uppercase tracking-wider font-semibold">Credentials</p>
              <Link href="#" className="text-lg font-medium text-[#171717] border-b border-[#171717] pb-0.5 hover:text-[#ff5a26] hover:border-[#ff5a26] transition-colors w-fit">
                Download PDF
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Form */}
        <motion.div
           initial={{ y: 30, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
           className="flex-1 lg:max-w-[650px] bg-[#09090b] rounded-[40px] p-8 md:p-12 relative overflow-hidden flex flex-col text-white shadow-2xl min-h-[600px]"
        >
          <div className="flex-1 relative overflow-hidden flex flex-col">
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
                className="absolute inset-0 flex flex-col pt-2"
              >
                {/* Form Step Headers */}
                <div className="mb-10">
                  <h2 className="text-4xl md:text-[40px] font-medium tracking-tight leading-tight mb-2">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-white/60 text-lg font-light">
                    {steps[currentStep].subtitle}
                  </p>
                </div>

                {/* Form Step Content */}
                <div className="flex-1 flex flex-col justify-start">
                  {steps[currentStep].options && !steps[currentStep].isContact && !steps[currentStep].isTextarea && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                            className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                              isSelected 
                                ? "bg-white/10 border-white/40 text-white" 
                                : "border-white/10 text-white/70 hover:border-white/20 hover:bg-white/5"
                            }`}
                          >
                            <span className="text-[17px] font-medium text-left">{opt}</span>
                            <div className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ml-3 transition-colors ${
                              isSelected ? "border-white/80" : "border-white/20"
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
                        placeholder="Tell us everything..."
                        className="w-full h-full min-h-[250px] bg-transparent border-b border-white/20 pb-4 text-[22px] text-white outline-none resize-none placeholder:text-white/20 focus:border-white/60 transition-colors"
                      />
                    </div>
                  )}

                  {steps[currentStep].isContact && (
                    <div className="flex flex-col gap-10 w-full mt-4">
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

          {/* Form Bottom Navigation */}
          <div className="mt-8 pt-8 flex items-center justify-between border-t border-white/10 relative z-30">
            <div className="text-white/40 text-[13px] font-bold tracking-[0.2em] uppercase">
              Step 0{currentStep + 1} / 0{steps.length}
            </div>
            
            <div className="flex items-center gap-3">
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
                  className="px-6 h-12 rounded-full bg-white text-black font-semibold text-[15px] flex items-center justify-center hover:bg-white/90 transition-all gap-2"
                >
                  Next <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <button 
                  onClick={() => alert("Form Submitted!")}
                  className="px-6 h-12 rounded-full bg-[#ff5a26] text-white font-semibold text-[15px] flex items-center justify-center hover:bg-[#ff5a26]/90 transition-all"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </motion.div>
        
      </div>
    </main>
  );
}
