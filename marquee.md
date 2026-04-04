"use client";

import { useRef } from"react";

import gsap from"gsap";

import { useGSAP } from"@gsap/react";

import Image from"next/image";

import { getUploadUrl } from"@/lib/urlUtils";

interfaceMarqueeProps {

  images:string[];

  direction?:"left"|"right";

  speed?:number;

}

constLogoMarquee= ({ images, direction="left", speed=30 }:MarqueeProps) => {

  constcontainerRef=useRef`<HTMLDivElement>`(null);

  constscrollRef=useRef`<HTMLDivElement>`(null);

  consttween=useRef<gsap.core.Tween|null>(null);

  useGSAP(() => {

    constscrollContent= scrollRef.current;

    if (!scrollContent) return;

    constisReverse= direction ==="right";

    // Set up the infinite linear loop

    tween.current = gsap.to(scrollContent, {

    xPercent: isReverse ?0:-50,

    duration: speed,

    ease: "none",

    repeat: -1,

    force3D: true, // GPU acceleration for smoothness

    });

    // Offset the starting position for "right" moving rows

    if (isReverse) {

    gsap.set(scrollContent, { xPercent: -50 });

    }

  }, { scope: containerRef, dependencies: [direction, speed] });

  constonEnter= () => tween.current?.pause();

  constonLeave= () => tween.current?.play();

  // Multiplier logic to ensure no white space regardless of image count

  constdisplayImages= images.length===1

    ?Array(12).fill(images[0])

    : [...images, ...images, ...images];

  return (

    <div

    ref={containerRef}

    className="w-full overflow-hidden whitespace-nowrap py-2 select-none"

    onMouseEnter={onEnter}

    onMouseLeave={onLeave}

    >

    <div

    ref={scrollRef}

    className="inline-flex gap-3 will-change-transform"

    >

    {displayImages.map((src, idx) => (

    <div

    key={idx}

    className="flex-shrink-0 flex items-center justify-center bg-white border border-[#707070] rounded-full px-5 py-3 w-[280px] h-[120px] transform-gpu transition-transform duration-300 hover:scale-105"

    >

    <divclassName="relative w-full h-full pointer-events-none">

    <Image

    src={(() => {

    constresolved=getUploadUrl(src);

    // Only use resolved if it's a proper absolute URL (Drive or http/https)

    if (resolved && (resolved.startsWith('http://') || resolved.startsWith('https://'))) return resolved;

    // Fall back: prepend /images/ if not already an absolute path

    return src.startsWith('/') ? src :`/images/${src}`;

    })()}

    alt="Partner Logo"

    fill

    className="object-contain"

    sizes="280px"

    draggable={false}

    />

    `</div>`

    `</div>`

    ))}

    `</div>`

    `</div>`

  );

};

exportdefaultLogoMarquee;
