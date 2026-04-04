import DifferentSection from "./components/DifferentSection";
import TeamSection from "./components/TeamSection";
import AboutMarquee from "./components/AboutMarquee";

export const metadata = {
    title: "About Us | The Designers World",
    description: "Learn more about what makes us different.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-[#fdf8f2] min-h-screen">
            {/* 100vh Empty hero section per instructions */}
            <section className="h-screen w-full flex flex-col items-center justify-center relative">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]/40 uppercase text-center max-w-2xl px-4">
                    Empty space about 100vh for the hero section
                </h1>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-[#171717]/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* The Requested Section */}
            <DifferentSection />

            {/* Staggered Grid Member Card Section */}
            <TeamSection />

            {/* Marquee strip — before footer */}
            <AboutMarquee />

        </div>
    );
}
