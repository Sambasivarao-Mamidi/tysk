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
  title: "Dev Mama | Premium Development Agency",
  description:
    "Dev Mama - Your trusted partner for production-grade solutions. We deliver cutting-edge web applications, mobile apps, AI/ML solutions, and enterprise software for students and businesses alike. From concept to deployment, we build what matters.",
  keywords: [
    "web development",
    "mobile app development",
    "AI solutions",
    "ML projects",
    "software development",
    "startup solutions",
    "enterprise software",
    "student projects",
    "production grade",
    "MVP development",
    "custom software",
  ],
  authors: [{ name: "Dev Mama" }],
  openGraph: {
    title: "Dev Mama | Premium Development Agency",
    description:
      "Production-grade solutions for students and businesses. From concept to deployment, we build what matters.",
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
