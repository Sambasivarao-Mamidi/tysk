import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TYSK | Final Year Project Consultancy",
  description:
    "Technical Year Strategies & Knowledge. Your trusted partner for BTech/MTech final year projects. Strategy, Coding, and Documentation - Defined by Execution.",
  keywords: [
    "final year project",
    "BTech project",
    "MTech project",
    "project consultancy",
    "engineering project",
    "AI projects",
    "IoT projects",
  ],
  authors: [{ name: "TYSK" }],
  openGraph: {
    title: "TYSK | Final Year Project Consultancy",
    description:
      "Your trusted partner for BTech/MTech final year projects. Defined by Execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
