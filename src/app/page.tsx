import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { VortexBackground } from "@/components/vortex-background";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Vortex background for sections after hero */}
      <VortexBackground>
        <AboutSection />
        <WhyChooseSection />
        <ContactSection />
      </VortexBackground>

      <ScrollToTop />
      <Footer />
    </main>
  );
}
