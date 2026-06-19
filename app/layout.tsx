import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-base",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "A bold, type-driven editorial product listing and details exhibition matching luxury catalog guidelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased dark",
        inter.variable,
        interTight.variable,
        playfairDisplay.variable,
        jetbrainsMono.variable,
      )}
    >
      <body className="h-screen w-screen flex flex-col noise-bg">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
