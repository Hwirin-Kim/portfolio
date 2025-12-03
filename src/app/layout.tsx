import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/chatbot/FloatingChat";
import ScrollReset from "@/components/layout/ScrollReset";
import ConsoleMessage from "@/components/layout/ConsoleMessage";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developer Portfolio with stunning animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" data-scroll-behavior="smooth">
      <body className={`${inter.className} relative`}>
        <ConsoleMessage />
        <ScrollReset />
        <Header />
        {children}
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
