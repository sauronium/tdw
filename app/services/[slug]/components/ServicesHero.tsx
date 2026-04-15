'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '../data';

const VideoHoverCard = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 bg-black"
      onMouseEnter={() => videoRef.current?.play().catch(e => console.warn('Video hover play error:', e))}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default function ServicesHero({ data }: { data: ServiceData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ww, setWw] = useState(1200);
  const [wh, setWh] = useState(800);
  const [isUnstacked, setIsUnstacked] = useState(false);

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

  const cardWidth = Math.min(350, ww * 0.75);
  // Aspect ratio makes height longer (portrait)
  const cardHeight = cardWidth * 1.55;

  // Map progress to cards Y. It scrolls up from bottom (showing 20% initially)
  // wh - cardHeight * 0.2 puts the top 20% of the card visible at the bottom edge.
  // 0.0 -> 0.25 progress
  const cardsGlobalY = useTransform(scrollYProgress, [0, 0.25], [wh - cardHeight * 0.2, wh * 0.2]);

  // Background color changes to the site's default body background (#fdf8f2) 
  // Pinning ends at 0.33 progress (bottom hits bottom for 150vh container).
  // We change background from 0.33 to 0.66 smoothly.
  const bgColor = useTransform(scrollYProgress, [0.33, 0.66], [data.heroBgColor, '#fdf8f2']);
  
  // Title fades from white to black alongside the background transition
  const titleColor = useTransform(scrollYProgress, [0.33, 0.66], ['#ffffff', '#171717']);

  const gap = 24;
  const totalCards = data.cards.length;
  // Stack spacing - how much next card peeks out (if we offset them when stacked)
  const stackSpacingX = 24; 
  const stackSpacingY = 0;

  // Render cards. When !isUnstacked, they are absolute positioned forming a deck.
  // When isUnstacked, they form a row. We can animate the `x` and `y` directly instead of a flex container to keep it seamless.
  
  // Total width of unstacked slider
  const fullWidthUnstacked = totalCards * cardWidth + (totalCards - 1) * gap;
  const leftPadding = ww > 768 ? 48 : 24;
  
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
                  className="absolute shadow-2xl overflow-hidden rounded-[10px] pointer-events-auto flex items-center justify-center"
                  initial={false}
                  animate={{
                    x: isUnstacked ? unstackedX : stackedX,
                    y: isUnstacked ? unstackedY : stackedY,
                    opacity: isHiddenInStack ? 0 : 1,
                    scale: 1, // NO height difference when stacked
                  }}
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
                    {isUnstacked && (card.image || card.video) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        {card.image && (
                          <Image 
                            src={card.image}
                            alt="Project"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 320px, 400px"
                            draggable={false}
                          />
                        )}
                        {card.video && (
                          <VideoHoverCard src={card.video} />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
