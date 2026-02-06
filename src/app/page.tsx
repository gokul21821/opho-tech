import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { YourJourney } from "@/components/sections/Your-Journey";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LazyCTASection } from "@/components/sections/LazyCTASection";
import { LazyValuePropositionSection } from "@/components/sections/LazyValuePropositionSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HIDE_RESOURCES } from "@/lib/featureFlags";

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
          <LazyValuePropositionSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <LazyCTASection variant="gradient" />
        </AnimatedSection>
        {HIDE_RESOURCES ? null : (
          <>
            <AnimatedSection delay={100}>
              <NewsletterSection />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <CaseStudiesSection />
            </AnimatedSection>
          </>
        )}
        <AnimatedSection delay={100}>
          <LazyCTASection variant="ready" />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
