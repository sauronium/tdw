import DifferentSection from "./components/DifferentSection";
import TeamSection from "./components/TeamSection";
import AboutMarquee from "./components/AboutMarquee";
import AboutHero from "./components/AboutHero";
import ExpertSupport from "./components/ExpertSupport";

export const metadata = {
    title: "About Us | The Designers World",
    description: "Learn more about what makes us different.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-[#fdf8f2] min-h-screen">
            <AboutHero />

            {/* The Requested Section */}
            <DifferentSection />

            {/* Staggered Grid Member Card Section */}
            <TeamSection />

            {/* Expert Support Section — pulled up to reduce gap from TeamSection */}
            <div className="-mt-8">
                <ExpertSupport />
            </div>

            {/* Marquee strip — before footer */}
            <AboutMarquee />

        </div>
    );
}
