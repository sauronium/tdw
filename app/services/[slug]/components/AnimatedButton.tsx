'use client';

import { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';

export default function AnimatedButton({ 
  href, 
  children, 
  className = '' 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    buttonRef.current.style.setProperty('--mouse-x', `${x}px`);
    buttonRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Link href={href} className={`block w-max ${className}`}>
      <div
        ref={buttonRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="
          relative flex justify-center items-center
          min-h-[2.75rem] px-[1.5rem]
          rounded-full
          bg-[#395ef0]
          shadow-sm hover:shadow-md
          overflow-hidden
        "
      >
        <span
          className={`
            absolute rounded-full pointer-events-none transition-transform ease-out bg-black
            ${isHovered ? 'duration-400' : 'duration-250'}
          `}
          style={{
            left: 'var(--mouse-x)',
            top: 'var(--mouse-y)',
            width: '250%',
            paddingBottom: '250%',
            transform: isHovered ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
            zIndex: 0
          }}
        />
        <span className="relative z-10 text-[15.4px] font-bold text-white whitespace-nowrap transition-colors duration-300">
          {children}
        </span>
      </div>
    </Link>
  );
}
