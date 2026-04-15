import React from "react";
import WorkHero from "./components/WorkHero";
import CasesScroller from "./components/CasesScroller";

export const metadata = {
  title: "Work - The Designers World",
  description: "Explore our latest projects and see how we elevate brands.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen relative w-full bg-[#fdf8f2]">
            {/* The Work Page Hero Section */}
            <WorkHero />
            
            {/* Case Studies Scroll Section */}
            <CasesScroller />
            
        </main>
    );
}
