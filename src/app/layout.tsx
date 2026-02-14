import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devmama.io"),
  title: {
    default: "Dev Mama | Premium Development Agency for Startups & Enterprises",
    template: "%s | Dev Mama",
  },
  description:
    "Dev Mama delivers world-class web applications, mobile apps, AI/ML solutions, and enterprise software. Trusted by startups and Fortune 500 companies. From concept to deployment, we build scalable, production-grade solutions.",
  keywords: [
    "web development agency",
    "mobile app development",
    "AI development company",
    "machine learning solutions",
    "software development services",
    "startup MVP development",
    "enterprise software development",
    "custom software development",
    "React development",
    "Next.js development",
    "Node.js development",
    "Python development",
    "React Native development",
    "Flutter development",
    "cloud computing services",
    "AWS development",
    "DevOps services",
    "business automation",
    "CRM integration",
    "student project help",
    "final year project development",
    "BTech project consultancy",
    "production grade solutions",
    "SaaS development",
    "API development",
    "database design",
    "microservices architecture",
    "UI/UX design",
    "web application development",
    "e-commerce development",
    "full stack development",
    "backend development",
    "frontend development",
  ],
  authors: [{ name: "Dev Mama", url: "https://devmama.io" }],
  creator: "Dev Mama",
  publisher: "Dev Mama",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    title: "Dev Mama | Premium Development Agency for Startups & Enterprises",
    description:
      "World-class web applications, mobile apps, AI/ML solutions, and enterprise software. From concept to deployment, we build scalable, production-grade solutions.",
    url: "https://devmama.io",
    siteName: "Dev Mama",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://devmama.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Mama - Premium Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mama | Premium Development Agency",
    description:
      "World-class web applications, mobile apps, AI/ML solutions, and enterprise software.",
    creator: "@devmama",
    images: ["https://devmama.io/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "Technology",
  classification: "Software Development",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5227FF",
      },
    ],
  },
  applicationName: "Dev Mama",
  appleWebApp: {
    capable: true,
    title: "Dev Mama",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  other: {
    "msapplication-TileColor": "#5227FF",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="rating" content="General" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="safe for kids" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
