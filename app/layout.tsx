import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Applogy - Smart AI. Simple Apps.",
  description: "Applogy is an AI app studio that develops creative, user-friendly, and App Store-ready AI applications. Where Creativity Meets AI.",
  keywords: ["AI apps", "AI tools", "App Store apps", "Applogy", "AI studio", "artificial intelligence", "mobile apps"],
  authors: [{ name: "Önder Gülsevdi" }],
  openGraph: {
    title: "Applogy - Smart AI. Simple Apps.",
    description: "Applogy is an AI app studio that develops creative, user-friendly, and App Store-ready AI applications.",
    url: "https://applogy.com",
    siteName: "Applogy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applogy - Smart AI. Simple Apps.",
    description: "Applogy is an AI app studio that develops creative, user-friendly, and App Store-ready AI applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} bg-[#0a0612]`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

