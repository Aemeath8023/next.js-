import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rain - Elegance Redefined",
  description: "体验极简、高性能和创新的完美融合。Apple风格设计，重新定义数字体验。",
  keywords: "Apple风格, 极简设计, 高性能, 创新体验",
  authors: [{ name: "Rain" }],
  openGraph: {
    title: "Rain - Elegance Redefined",
    description: "体验极简、高性能和创新的完美融合",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
