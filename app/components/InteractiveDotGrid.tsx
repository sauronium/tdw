"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Configuration
    const dotSpacing = 20; // Distance between dot centers (density)
    const baseRadius = 2; // Slightly larger base
    const maxRadius = 10; // Huge scaling (almost touching at 24px spacing)
    const hoverRadius = 250; // Larger influence radius for smoother slope
    const lerpFactor = 0.05; // "slow" linear scaling easing

    let cols = 0;
    let rows = 0;
    // Store current radius for each dot to allow slow lerping
    let dots: { x: number; y: number; currentRadius: number; targetRadius: number }[] = [];

    // Pointer state
    let pointerX = -1000;
    let pointerY = -1000;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      // Add generous bleed padding so massive dots don't clip at the true edges
      const bleedPaddingX = 64; 
      const bleedPaddingY = 64; 

      const width = parent.clientWidth + bleedPaddingX * 2;
      const height = parent.clientHeight + bleedPaddingY * 2;
      
      // Use device pixel ratio for sharp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.style.left = -bleedPaddingX + "px";
      canvas.style.top = -bleedPaddingY + "px";
      ctx.scale(dpr, dpr);

      // Re-initialize grid
      cols = Math.ceil(width / dotSpacing) + 1;
      rows = Math.ceil(height / dotSpacing) + 1;

      dots = [];
      const xOffset = (width % dotSpacing) / 2;
      const yOffset = (height % dotSpacing) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * dotSpacing + xOffset,
            y: j * dotSpacing + yOffset,
            currentRadius: baseRadius,
            targetRadius: baseRadius,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000000";

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Calculate distance to pointer
        const dx = dot.x - pointerX;
        const dy = dot.y - pointerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Determine target radius linearly based on distance
        if (distance < hoverRadius) {
          // Linear scaling: maxRadius at center, baseRadius at edge of hoverRadius
          const factor = 1 - (distance / hoverRadius);
          dot.targetRadius = baseRadius + (maxRadius - baseRadius) * factor;
        } else {
          dot.targetRadius = baseRadius;
        }

        // Lerp current radius to target radius for smooth/slow transition
        dot.currentRadius += (dot.targetRadius - dot.currentRadius) * lerpFactor;

        // Ensure we don't draw negative radius
        const renderRadius = Math.max(0, dot.currentRadius);
        
        // Draw dot
        ctx.beginPath();
        // Use an opacity modifier so larger dots are significantly more opaque (max 0.85)
        ctx.globalAlpha = 0.15 + ((renderRadius - baseRadius) / (maxRadius - baseRadius)) * 0.7;
        ctx.arc(dot.x, dot.y, renderRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      pointerX = -1000;
      pointerY = -1000;
      // Note: The lerp loop will slowly reduce all target radiuses back to baseRadius
    };

    // Initialization
    resize();

    // Event Listeners
    window.addEventListener("resize", resize);
    
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove as EventListener);
      parent.addEventListener("mouseleave", handleMouseLeave as EventListener);
    }
    
    // Start loop
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove as EventListener);
        parent.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
