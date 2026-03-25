"use client";

import React from "react";
import Image from "next/image";

export default function SocialMediaSpecialists() {
    return (
        <section className="w-full relative bg-transparent py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:items-stretch gap-12 lg:gap-16">
                
                {/* Left Side: Portrait Image Container */}
                <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center md:justify-start pl-0 md:pl-4">
                    {/* Constrained slim portrait Box with 20px corners */}
                    <div className="relative w-[85%] max-w-[380px] h-[95vh] rounded-[20px] overflow-hidden shadow-sm">
                        <Image 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                            alt="Office meeting room" 
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Content Box */}
                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center py-8">
                    <div className="max-w-[650px]">
                        <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1] text-[#1a1a1a] mb-8 lowercase">
                            we are social media specialists.
                        </h2>
                        
                        <p className="text-base md:text-[17px] text-[#222] leading-[1.6] md:leading-relaxed font-medium">
                            Dorst & Lesser is a global social media agency based in Amsterdam, driven by a team of over 50 social media enthusiasts. Our mission is to make brands more social by fostering meaningful connections with their communities and enhancing brand loyalty through the power of AI social data.<br /><br />
                            Since our founding in 2011, we have been leaders in the social media space. We all love what we do, which is why we&apos;ve made our work our playground—a place where friendships begin and grow.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
