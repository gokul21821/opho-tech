import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { YourJourney } from "@/components/sections/Your-Journey";
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
        <YourJourney />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ValuePropositionSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <CTASection variant="gradient" />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <NewsletterSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <CaseStudiesSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <CTASection variant="ready" />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
