import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-6 w-full max-w-[1440px] mx-auto">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/tdw-logo.svg"
                    alt="The Designers World"
                    width={200}
                    height={50}
                    className="h-12 w-auto"
                    priority
                />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center bg-white px-10 py-3 rounded-full shadow-sm gap-10">
                <Link href="/about" className="text-foreground font-bold hover:text-gray-600 transition-colors text-lg">About</Link>
                <Link href="/services" className="text-foreground font-bold hover:text-gray-600 transition-colors text-lg">Services</Link>
                <Link href="/work" className="text-foreground font-bold hover:text-gray-600 transition-colors text-lg">Work</Link>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
                <Link
                    href="/start-project"
                    className="bg-[#ff5a26] text-white font-medium py-3 px-6 rounded-lg transition-transform hover:scale-105 text-lg"
                >
                    Start a project
                </Link>
                <Link href="/start-project" className="bg-[#ffcdfa] w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:translate-x-1 hover:-translate-y-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#ff5a26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </header>
    );
}
