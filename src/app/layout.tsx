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

const BASE_URL = "https://hwirin-kim.github.io/portfolio";

export const metadata: Metadata = {
  title: {
    default: "Hwirin's Portfolio",
    template: "%s | Hwirin's Portfolio",
  },
  description: "프론트엔드 개발자 김휘린의 포트폴리오입니다.",
  keywords: [
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "김휘린",
  ],
  authors: [{ name: "Hwirin Kim", url: "https://github.com/Hwirin-Kim" }],
  creator: "Hwirin Kim",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "Hwirin's Portfolio",
    title: "Hwirin's Portfolio",
    description: "프론트엔드 개발자 김휘린의 포트폴리오입니다.",
    images: [
      {
        url: `${BASE_URL}/og/og.png`,
        width: 1200,
        height: 630,
        alt: "Hwirin's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hwirin's Portfolio",
    description: "프론트엔드 개발자 김휘린의 포트폴리오입니다.",
    images: [`${BASE_URL}/og/og.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: `${BASE_URL}/favicon.ico/favicon.ico` },
      {
        url: `${BASE_URL}/favicon.ico/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `${BASE_URL}/favicon.ico/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${BASE_URL}/favicon.ico/favicon-96x96.png`,
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      { url: `${BASE_URL}/favicon.ico/apple-icon.png` },
      { url: `${BASE_URL}/favicon.ico/apple-icon-57x57.png`, sizes: "57x57" },
      { url: `${BASE_URL}/favicon.ico/apple-icon-60x60.png`, sizes: "60x60" },
      { url: `${BASE_URL}/favicon.ico/apple-icon-72x72.png`, sizes: "72x72" },
      { url: `${BASE_URL}/favicon.ico/apple-icon-76x76.png`, sizes: "76x76" },
      {
        url: `${BASE_URL}/favicon.ico/apple-icon-114x114.png`,
        sizes: "114x114",
      },
      {
        url: `${BASE_URL}/favicon.ico/apple-icon-120x120.png`,
        sizes: "120x120",
      },
      {
        url: `${BASE_URL}/favicon.ico/apple-icon-144x144.png`,
        sizes: "144x144",
      },
      {
        url: `${BASE_URL}/favicon.ico/apple-icon-152x152.png`,
        sizes: "152x152",
      },
      {
        url: `${BASE_URL}/favicon.ico/apple-icon-180x180.png`,
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: `${BASE_URL}/favicon.ico/apple-icon.png`,
        color: "#22c55e",
      },
    ],
  },
  manifest: `${BASE_URL}/favicon.ico/manifest.json`,
  metadataBase: new URL(BASE_URL),
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
