'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ServiceData } from '@/site-data/services/data';
import GetStartedModal from '../../../components/GetStartedModal';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesHero({ data }: { data: ServiceData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ww, setWw] = useState(1200);
  const [wh, setWh] = useState(800);
  const [isUnstacked, setIsUnstacked] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setWw(window.innerWidth);
      setWh(window.innerHeight);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Update offset to track until section completely leaves the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 0.25 means it has scrolled 50vh, which is a good unstack trigger
    // Make sure we only unstack once and don't restack on scroll up
    if (latest >= 0.25 && !isUnstacked) {
      setIsUnstacked(true);
    }
  });

  const gap = 24;
  const isDesktop = ww >= 1024;
  const isTablet = ww >= 768 && ww < 1024;
  
  const cardWidth = isDesktop 
    ? (ww * 0.8 - gap * 3) / 4 
    : isTablet 
      ? (ww * 0.8 - gap * 2) / 3
      : ww * 0.75;
      
  const cardHeight = cardWidth * 1.55;

  // Map progress to cards Y. It scrolls up from bottom (showing 20% initially)
  // wh - cardHeight * 0.2 puts the top 20% of the card visible at the bottom edge.
  // 0.0 -> 0.25 progress
  const cardsGlobalY = useTransform(scrollYProgress, [0, 0.25], [wh - cardHeight * 0.2, wh * 0.2]);

  // Background color changes to the site's default body background (#fdf8f2) 
  // Pinning ends at 0.33 progress (bottom hits bottom for 150vh container).
  // We change background from 0.33 to 0.66 smoothly.
  const bgColor = useTransform(scrollYProgress, [0.33, 0.66], [data.heroBgColor, '#fdf8f2']);
  
  // Title is black from the start to match the light background
  const titleColor = useTransform(scrollYProgress, [0.33, 0.66], ['#000000', '#000000']);

  const totalCards = data.cards.length;
  const stackSpacingX = 24; 
  const stackSpacingY = 0;

  const fullWidthUnstacked = totalCards * cardWidth + (totalCards - 1) * gap;
  const leftPadding = (ww - (isDesktop ? ww * 0.8 : (isTablet ? ww * 0.8 : ww * 0.75))) / 2;
  
  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '150vh' }}>
      
      {/* Global Seamless Background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{ backgroundColor: bgColor }}
      />
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Pinned Title in Middle */}
        <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center p-6 md:p-12 z-0 pointer-events-none">
          <motion.h1 
            className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight max-w-5xl leading-[1.1]"
            style={{ color: titleColor }}
          >
            {data.heroHeadline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>
        </div>

        {/* Cards Wrapper - Moves up on scroll initially */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ y: cardsGlobalY }}
        >
          {/* Draggable container when unstacked */}
          <motion.div
            drag={isUnstacked ? "x" : false}
            dragConstraints={{
              right: 0,
              left: -(fullWidthUnstacked - ww + leftPadding * 2)
            }}
            className="absolute left-0 top-0 w-full h-full cursor-grab active:cursor-grabbing"
            animate={{ x: isUnstacked ? 0 : 0 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            {data.cards.map((card, index) => {
              // Stacked calculations
              const deckStackCount = Math.min(totalCards, 4);
              const stackWidth = cardWidth + (deckStackCount - 1) * stackSpacingX;
              const centerOffsetX = (ww - stackWidth) / 2;
              
              const stackedX = centerOffsetX + Math.min(index, 3) * stackSpacingX;
              const stackedY = Math.min(index, 3) * stackSpacingY;
              
              // Unstacked calculations
              const unstackedX = leftPadding + index * (cardWidth + gap);
              const unstackedY = 0;
              
              // Only top 4 cards visible when stacked, so we fade them in if they are unstacked
              const isHiddenInStack = index > 3 && !isUnstacked;

              return (
                <motion.div
                  key={card.id}
                  className="absolute shadow-2xl overflow-hidden rounded-[10px] pointer-events-auto group"
                  initial={false}
                  animate={{
                    x: isUnstacked ? unstackedX : stackedX,
                    y: isUnstacked ? unstackedY : stackedY,
                    opacity: isHiddenInStack ? 0 : 1,
                    scale: 1, // NO height difference when stacked
                  }}
                  whileHover={isUnstacked ? { scale: 1.05, zIndex: 50 } : undefined}
                  transition={{ 
                    type: "spring", 
                    stiffness: 150, 
                    damping: 30, 
                    mass: 1.0,
                    delay: isUnstacked ? index * 0.05 : 0 // slight stagger effect when opening
                  }}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    zIndex: totalCards - index,
                    backgroundColor: card.backgroundColor,
                  }}
                >
                  
                  <AnimatePresence>
                    {isUnstacked && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        className="w-full h-full p-6 md:p-8 flex flex-col relative text-white"
                      >
                         <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold border-b-[3px] border-white/50 pb-3 mb-6 tracking-tight">
                            {card.title}
                         </h3>
                         <ul className="flex flex-col gap-4 text-sm md:text-base lg:text-lg font-medium w-full flex-grow">
                           {card.listItems?.map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                               <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white flex-shrink-0" />
                               <span className="leading-tight">{item}</span>
                             </li>
                           ))}
                         </ul>

                         {/* Get Started Button */}
                         <button 
                             onClick={(e) => {
                               // Stop propagation so it doesn't interfere with drag or other things
                               e.stopPropagation();
                               setIsGetStartedOpen(true);
                             }}
                             className="group/btn bg-white text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-5 py-2.5 md:py-3 md:px-6 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md w-max self-start mt-auto duration-300"
                         >
                             <span className="text-sm md:text-base font-medium tracking-wide">Get Started</span>
                             <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 font-light group-hover/btn:rotate-12 transition-transform duration-300" strokeWidth={2} />
                         </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
    </div>
  );
}
