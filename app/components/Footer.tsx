"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full max-w-[1440px] mx-auto px-4 py-8">
            <div className="relative bg-[#111111] rounded-[40px] p-8 md:p-16 text-white flex flex-col justify-between min-h-[600px] mt-48">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between w-full z-10 gap-12">
                    {/* Left Content: Headings & Form */}
                    <div className="flex flex-col space-y-12 w-full md:w-1/2">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
                                Book a <br /> Discovery call
                            </h2>
                            <p className="text-gray-400 text-lg max-w-md">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="flex flex-col gap-10 w-full max-w-xl">
                            <div className="flex flex-col md:flex-row gap-8 w-full">
                                <div className="flex flex-col w-full">
                                    <label className="text-sm text-gray-500 mb-2">Full Name*</label>
                                    <input
                                        type="text"
                                        className="bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-sm text-gray-500 mb-2">Phone*</label>
                                    <input
                                        type="text"
                                        className="bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Globe & Navigation */}
                    <div className="relative flex flex-col items-end w-full md:w-1/3 group">
                        {/* Globe - Aligned right */}
                        <div className="absolute -top-32 right-0 md:-top-52 md:-right-8 w-48 h-48 md:w-64 md:h-64 select-none pointer-events-none z-0">
                            <Image
                                src="/tdw-favicon.svg"
                                alt="Globe"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Navigation Links - Pushed down to avoid visual overlap with globe interior */}
                        <nav className="flex flex-col gap-4 mt-24 md:mt-24 items-end w-full z-10">
                            {['About', 'Services', 'Work'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="bg-[#fdf8f2] text-black font-semibold text-lg py-3 px-12 rounded-lg min-w-[160px] text-center hover:bg-gray-200 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Bottom Section: CTA, Logo, Copyright */}
                <div className="flex flex-col w-full relative z-10 mt-24">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full">
                        {/* CTA Button - Aligned Left */}
                        <div className="flex items-center gap-4 w-full md:w-auto mb-8 md:mb-0">
                            <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
                                Get a call
                            </button>
                            <div className="bg-[#ff5a26] rounded-full p-2 w-10 h-10 flex items-center justify-center transition-transform hover:translate-x-1 hover:-translate-y-1 cursor-pointer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Logo - Aligned Right */}
                        <div className="w-full md:w-auto flex justify-start md:justify-end">
                            <Image
                                src="/tdw-logo.svg"
                                alt="The Designers World"
                                width={200}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Copyright - Centered Below */}
                    <div className="text-gray-500 text-sm text-center mt-12 md:mt-12">
                        &copy; 2026 The Designers World
                    </div>
                </div>
            </div>
        </footer>
    );
}
