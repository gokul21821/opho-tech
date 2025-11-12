import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <AnimatedSection delay={100}>
          <ValuePropositionSection />
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <NewsletterSection />
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <CaseStudiesSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <FinalCTASection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
