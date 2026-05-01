import React from "react";
import { notFound } from "next/navigation";
import { casesData } from "../data";
import PageTransition from "./components/PageTransition";

export async function generateMetadata(props: any) {
    const params = await props.params;
    const caseData = casesData.find((c) => c.id === params.slug);
    if (!caseData) return {};
    return {
        title: `${caseData.title} - The Designers World`,
        description: caseData.description,
    };
}

export default async function CaseSubPage(props: any) {
    const params = await props.params;
    const caseData = casesData.find((c) => c.id === params.slug);
    if (!caseData) {
        notFound();
    }

    return (
        <PageTransition>
            <main className="min-h-screen w-full relative bg-black">
            
            {/* Cinematic Hero Section */}
            <section className="relative w-[100vw] h-[100vh] overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    {caseData.backgroundType === "image" ? (
                        <img 
                            src={caseData.image}
                            alt={caseData.imageAlt}
                            className="w-full h-full object-cover opacity-60"
                        />
                    ) : (
                        <video 
                            src={caseData.video}
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover opacity-60"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 z-10 w-full h-full flex items-start p-6 sm:p-10 md:p-16 lg:p-24 pt-32 lg:pt-40">
                    
                    {/* Title in Top Left */}
                    <div className="flex flex-col max-w-5xl">
                        <h1 className="text-white text-6xl md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-none m-0">
                            {caseData.title}
                        </h1>
                    </div>

                    {/* Description in Bottom Left */}
                    <div className="absolute left-6 sm:left-10 md:left-16 lg:left-24 bottom-12 md:bottom-20 max-w-sm md:max-w-md">
                        <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
                            {caseData.description}
                        </p>
                    </div>

                </div>
            </section>

            {/* Simple Text Section */}
            <section className="w-full bg-[#fdf8f2] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 relative z-20">
                <div className="max-w-4xl">
                    <p className="text-[#171717] text-xl md:text-2xl font-medium leading-relaxed font-sans">
                        {caseData.fullDescription}
                    </p>
                </div>
            </section>

            {/* Image Block Section */}
            {caseData.galleryImage1 && (
                <section className="w-[100vw] h-[90vh] relative z-20">
                    <img 
                        src={caseData.galleryImage1} 
                        alt={caseData.title} 
                        className="w-full h-full object-cover"
                    />
                </section>
            )}

            {/* Overview Section */}
            <section className="w-full bg-[#fdf8f2] pt-24 md:pt-32 pb-16 px-6 sm:px-10 md:px-16 lg:px-24 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                    {/* Left Column: Title */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] text-[#171717] font-medium tracking-tight m-0">
                            Overview
                        </h2>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col gap-8 md:gap-10">
                        {/* Bold Dynamic Sub-heading mapped to description */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#171717] max-w-3xl leading-[1.3]">
                            {caseData.description}
                        </h3>
                        {/* Body paragraph mapped to fullDescription */}
                        <p className="text-[#171717] text-lg md:text-xl font-medium leading-relaxed font-sans max-w-4xl">
                            {caseData.fullDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Strategic Objectives Section */}
            <section className="w-full bg-[#fdf8f2] pb-24 md:pb-32 pt-16 px-6 sm:px-10 md:px-16 lg:px-24 relative z-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] text-[#171717] font-medium tracking-tight m-0">
                        Strategic Objectives
                    </h2>
                    
                    <div className="flex flex-col gap-4">
                        {caseData.strategicObjectives?.map((objective, idx) => (
                            <div key={idx} className="bg-[#ede8e1] rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:px-16 lg:py-14 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 md:gap-12">
                                <span className="text-2xl font-bold text-[#171717]">
                                    0{idx + 1}.
                                </span>
                                <p className="text-[#171717] text-lg md:text-[1.15rem] font-medium leading-relaxed font-sans max-w-4xl">
                                    {objective}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Second Image Block Section */}
            {caseData.galleryImage2 && (
                <section className="w-[100vw] h-[90vh] relative z-20">
                    <img 
                        src={caseData.galleryImage2} 
                        alt={`${caseData.title} Image 2`} 
                        className="w-full h-full object-cover"
                    />
                </section>
            )}

            {/* Split Showcase Section */}
            {(caseData.showcaseImageLeft || caseData.showcaseImageRight) && (
                <section className="w-full bg-[#fdf8f2] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 relative z-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Left Showcase */}
                        {caseData.showcaseImageLeft && (
                            <div className="w-full aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden">
                                <img 
                                    src={caseData.showcaseImageLeft} 
                                    alt="Showcase Left" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Right Showcase (Staggered Down) */}
                        {caseData.showcaseImageRight && (
                            <div className={`w-full aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden ${caseData.showcaseImageLeft ? "md:mt-32" : ""}`}>
                                <img 
                                    src={caseData.showcaseImageRight} 
                                    alt="Showcase Right" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                </section>
            )}

            </main>
        </PageTransition>
    );
}
