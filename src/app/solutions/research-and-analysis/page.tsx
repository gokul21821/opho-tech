"use client";

// app/raar/page.tsx
import Image from "next/image";
import { Fragment } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";


export default function RAARPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Research & Analysis" },
        ]}
        title="Research & Analysis"
        subtitle="AI Journey Starts with In-depth & Diligent Research"
        video="/videos/Research-Analysis.mp4"
      />

      <main className="bg-white text-[#0B1B2B]">

      {/* Intro split */}
      <SolutionsIntroSection
        imageSrc="/images/raar/research.png"
        imageAlt="RAAR illustration"
        copy={
          <p className="mt-3">
            An intelligence framework, driven by a team of Senior Data
            Scientists and AI/ML Engineers to get real-time operational insights
            and market opportunities. Our Expert and Precise reports address the
            critical gaps and enable enterprises structure their path to AI
            enablement.
          </p>
        }
        techStack={[
          { src: "/images/tech-stack-logos/sas.svg", alt: "SAS logo" },
          { src: "/images/tech-stack-logos/spss.svg", alt: "SPSS logo" },
          { src: "/images/tech-stack-logos/python.svg", alt: "Python logo" },
          { src: "/images/tech-stack-logos/power-bi.svg", alt: "Power BI logo" },
          {
            src: "/images/tech-stack-logos/github.svg",
            alt: "GitHub logo",
          },
        ]}
      />


      {/* How RAAR Works Section */}
      <BackgroundDots
          className="py-16 "
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
        <section className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col gap-10 items-center">
            <h2 className="text-center text-4xl font-medium text-[#111111]">
              How it Works
            </h2>

            {/* Four cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full">
  {[
    {
      title: "Research",
      text:
        "Pulls data from vendor contracts, licensing records, usage logs, cost reports, and integration documentation. Cleans, standardizes and validates data for analysis.",
    },
    {
      title: "Analysis",
      text:
        "AI agents evaluate tools across features, security, integration, cost efficiency, performance, and market position. They build SWOT profiles, identify capability gaps, and benchmark against industry standards.",
    },
    {
      title: "Adoption",
      text:
        "Tracks user adoption rates, identifies underutilized tools, and measures organizational readiness for new technology implementations.",
    },
    {
      title: "Reporting",
      text:
        "Delivers persona-specific insights. Strategic dashboards for executives, integration scores for architects, vendor intelligence for procurement, compliance reports for regulators, and usability metrics for end users.",
    },
  ].map((item) => (
    <div key={item.title} className="h-full">
      <div
        className="h-full min-w-[220px] md:min-w-[220px] lg:min-w-[200px] xl:min-w-[250px] rounded-2xl border border-[#fcd5ac] bg-white/30 p-5 flex flex-col gap-4 items-start card-text-smaller"
      >

        <h3 className="text-[24px] font-medium leading-[26px] text-[#111111] capitalize">
          {item.title}
        </h3>
        <p className="text-sm leading-normal text-[#454545]">{item.text}</p>
      </div>
    </div>
  ))}
</div>


          </div>
        </section>
      </BackgroundDots>

      <IconCardsSection
        title="What You Get"
        items={[
          {
            title: "Full Visibility",
            description:
              "Complete view of your software portfolio with usage patterns and spend analysis",
            icon: "/images/icons/tailored.svg",
          },
          {
            title: "Strategic Benchmarks",
            description:
              "Industry comparisons on cost, performance, features, and security",
            icon: "/images/icons/settings-load.svg",
          },
          {
            title: "Smart Recommendations",
            description:
              "Data-driven guidance on which tools to adopt, retain, consolidate, or retire",
            icon: "/images/icons/search-notes.svg",
          },
          {
            title: "Stakeholder-Specific Insights",
            description: "Customized reports for C-Suite business leaders",
            icon: "/images/icons/people.svg",
          },
          {
            title: "Audit-Ready Documentation",
            description:
              "Compliance trails and governance reports for regulators and boards",
            icon: "/images/icons/take-notes.svg",
          },
        ]}
      />

     
<div className=" flex justify-center">
          <Image
            src="/images/horizontalline.svg"
            alt=""
            width={1200}
            height={3}
            className="w-full max-w-5xl"
            aria-hidden
          />
        </div>

      {/* Navigation */}
      <SolutionsNavigationSection
        sectionClassName="px-6"
        ctaWrapperClassName="mt-6"
        title="Discover Next Step of Your AI Journey"
        cta={{
          href: "/solutions/data-structuring-and-monetization",
          label: "Data Structuring & Monetization",
        }}
      />
    </main>

    <Footer />
  </div>
  );
}
