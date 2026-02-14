import { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { VortexBackground } from "@/components/vortex-background";
import { ScrollToTop } from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Dev Mama | Premium Development Agency for Startups & Enterprises",
  description:
    "Dev Mama delivers world-class web applications, mobile apps, AI/ML solutions, and enterprise software. Trusted by startups and Fortune 500 companies. From concept to deployment, we build scalable, production-grade solutions.",
  alternates: {
    canonical: "https://devmama.io",
  },
  openGraph: {
    title: "Dev Mama | Premium Development Agency",
    description:
      "World-class web applications, mobile apps, AI/ML solutions, and enterprise software development.",
    url: "https://devmama.io",
    siteName: "Dev Mama",
    images: [
      {
        url: "https://devmama.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Mama - Premium Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://devmama.io/#organization",
      name: "Dev Mama",
      url: "https://devmama.io",
      logo: {
        "@type": "ImageObject",
        url: "https://devmama.io/logo.png",
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://twitter.com/devmama",
        "https://linkedin.com/company/devmama",
        "https://github.com/devmama",
        "https://instagram.com/devmama",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-83093-82895",
        contactType: "sales",
        email: "devmama.tech@gmail.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://devmama.io/#website",
      url: "https://devmama.io",
      name: "Dev Mama",
      description:
        "Premium Development Agency for Startups & Enterprises",
      publisher: {
        "@id": "https://devmama.io/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://devmama.io/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://devmama.io/#webpage",
      url: "https://devmama.io",
      name: "Dev Mama | Premium Development Agency",
      isPartOf: {
        "@id": "https://devmama.io/#website",
      },
      about: {
        "@id": "https://devmama.io/#organization",
      },
      description:
        "Dev Mama delivers world-class web applications, mobile apps, AI/ML solutions, and enterprise software.",
      breadcrumb: {
        "@id": "https://devmama.io/#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://devmama.io/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://devmama.io",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://devmama.io/#service-web-development",
      name: "Web Development Services",
      provider: {
        "@id": "https://devmama.io/#organization",
      },
      description:
        "Full-stack web applications using React, Next.js, Node.js. From landing pages to complex SaaS platforms.",
      serviceType: "Web Development",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "React Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Next.js Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Node.js Backend Development",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://devmama.io/#service-mobile-apps",
      name: "Mobile App Development",
      provider: {
        "@id": "https://devmama.io/#organization",
      },
      description:
        "Cross-platform mobile applications using React Native and Flutter. iOS and Android deployment.",
      serviceType: "Mobile Application Development",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://devmama.io/#service-ai-ml",
      name: "AI & Machine Learning Services",
      provider: {
        "@id": "https://devmama.io/#organization",
      },
      description:
        "Intelligent solutions using Python, TensorFlow, and OpenAI. Chatbots, predictive models, and automation.",
      serviceType: "Artificial Intelligence Development",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://devmama.io/#service-student-projects",
      name: "Student Project Development",
      provider: {
        "@id": "https://devmama.io/#organization",
      },
      description:
        "Complete project support for BTech/MTech students - from ideation to deployment with production-quality code.",
      serviceType: "Educational Project Development",
      areaServed: "India",
    },
    {
      "@type": "FAQPage",
      "@id": "https://devmama.io/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Dev Mama offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dev Mama offers comprehensive development services including web development, mobile app development, AI/ML solutions, cloud & DevOps, and business automation. We serve both students and businesses with production-grade solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with startups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We specialize in MVP development for startups. We help you get to market fast with scalable architecture from day one. From concept to deployment, we handle everything.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with final year projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! We provide end-to-end support for BTech/MTech final year projects. From ideation, development, documentation to deployment - we ensure you deliver excellence.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies do you use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use modern, production-grade tech stack including React, Next.js, Node.js, Python, TensorFlow, React Native, Flutter, AWS, GCP, Docker, Kubernetes, PostgreSQL, MongoDB, and more.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Dev Mama?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach us via email at devmama.tech@gmail.com, WhatsApp at +91 83093 82895, or fill out the contact form on our website. We're always ready to discuss your project!",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />

        {/* Vortex background for sections after hero */}
        <VortexBackground>
          <AboutSection />
          <ServicesSection />
          <WhyChooseSection />
          <ContactSection />
        </VortexBackground>

        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
}
