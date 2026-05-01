import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-bricolage",
});

const hagrid = localFont({
  src: [
    { path: "../public/HAGRID-REGULAR-TRIAL.ttf", weight: "300", style: "normal" },
    { path: "../public/HAGRID-REGULAR-TRIAL.ttf", weight: "400", style: "normal" },
    { path: "../public/HAGRID-REGULAR-TRIAL.ttf", weight: "500", style: "normal" },
    { path: "../public/HAGRID-REGULAR-TRIAL.ttf", weight: "700", style: "normal" },
    { path: "../public/HAGRID-REGULAR-TRIAL.ttf", weight: "800", style: "normal" }
  ],
  variable: "--font-hagrid",
});

const inter = localFont({
  src: [
    {
      path: '../public/Inter-VariableFont_opsz,wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/Inter-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Designers World",
  description: "Web Design & Development Agency",
  icons: {
    icon: '/tdw-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${hagrid.variable} ${bricolage.variable}`}>
      <body
        className={`antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
