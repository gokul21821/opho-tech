"use client";

// app/raar/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";
import BackgroundDots from "@/components/ui/background";


export default function RAARPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <section className="mx-auto max-w-7xl px-[5%] py-20">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12">

    {/* LEFT — Illustration Cluster */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/images/raar/research.png" // your combined illustration
        alt="RAAR illustration"
        width={600}
        height={450}
        className="w-[320px] sm:w-[420px] md:w-[500px] h-auto"
        priority
      />
    </div>

    {/* CENTER — Line Divider */}
    <div className="flex justify-center">
                      <Image
                      src="/images/raar/lineraar.svg"
                      alt=""
                      width={2}
                      height={320}
                      className="w-auto h-auto"
                      aria-hidden
                    />
    </div>

    {/* RIGHT — Text Block */}
    <div className="flex flex-col justify-center text-left md:pl-10">
      <p className="mt-3 text-[17px] text-[#3A4A5F] leading-relaxed max-w-4xl">
      An intelligence framework, driven by a team of Senior Data Scientists and AI/ML Engineers to get real-time operational insights and market opportunities. Our Expert and Precise reports address the critical gaps and enable enterprises structure their path to AI enablement. 
      </p>

      <div className="mt-8">
    <h2 className="text-[24px] font-bold text-[#0B1B2B]">Our Tech Stack</h2>
    <div className="flex flex-wrap gap-4">
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/sas.svg"
          alt="SAS logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/spss.svg"
          alt="SPSS logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/python.svg"
          alt="Python logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/power-bi.svg"
          alt="Power BI logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-15 h-14 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/github.svg"
          alt="GitHub logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
    </div>

  </div>
</section>


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
        <section className="mx-auto max-w-7xl p-12 px-[5%]">
          <div className="flex flex-col gap-10 items-center">
            <h2 className="text-center text-[38px] font-medium leading-[48px] text-[#111111]">
              How RAAR Works
            </h2>

            {/* Four cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full">
  {[
    {
      title: "Research",
      text:
        "Pulls data from vendor contracts, licensing records, usage logs, cost reports, and integration documentation. Cleans, Secure and Validates data for analysis.",
    },
    {
      title: "Analysis",
      text:
        "AI agents evaluate tools across Features, Security, Integration, Cost Efficiency, Performance, and Market Position. Builds SWOT profiles, identifies capability gaps, and benchmarks against industry standards.",
    },
    {
      title: "Adoption",
      text:
        "Tracks user adoption rates, identifies underutilized tools, and measures organizational readiness for new technology implementations.",
    },
    {
      title: "Reporting",
      text:
        "Delivers persona-specific insights. Strategic dashboards for executives, integration scores for architects, vendor intelligence for procurement, compliance & secure reports for regulators, & usability metrics for end users.",
    },
  ].map((item) => (
    <div key={item.title} className="h-full">
      <div
        className="h-full min-w-[220px] md:min-w-[220px] lg:min-w-[230px] xl:min-w-[250px] rounded-2xl border border-[#fcd5ac] bg-white/30 p-5 flex flex-col gap-4 items-start card-text-smaller"
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

      {/* What You Get */}
      <section className="mx-auto max-w-7xl px-[5%] py-16">
        <h2 className="text-center text-[32px] font-medium leading-[48px] text-[#0B1B2B]">
          What You Get
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
          {[
            {
              title: "Full Visibility",
              text:
                "Complete view of your software portfolio with usage patterns and spend analysis",
              icon: "/images/icons/tailored.svg",
            },
            {
              title: "Strategic Benchmarks",
              text:
                "Industry comparisons on cost, performance, features, and security",
              icon: "/images/icons/settings-load.svg",
            },
            {
              title: "Smart Recommendations",
              text:
                "Data-driven guidance on which tools to adopt, retain, consolidate, or retire",
              icon: "/images/icons/search-notes.svg",
            },
            {
              title: "Stakeholder-Specific Insights",
              text:
                "Customized reports for C-Suite business leaders",
              icon: "/images/icons/people.svg",
            },
            {
              title: "Audit-Ready Documentation",
              text:
                "Compliance trails and governance reports for regulators and boards",
              icon: "/images/icons/take-notes.svg",
            },
          ].map((item, index, array) => (
            <Fragment key={item.title}>
              <article className="flex-1 rounded-[20px] px-6 py-10 text-center card-text-smaller">
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#FFE6D5] ">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-[13px] font-bold text-black">
                  {item.title.split(' ').map((word, wordIndex) => (
                    <span key={wordIndex} className="block">
                      {word}
                    </span>
                  ))}
                </p>
                <p className="mt-3 text-sm leading-[22px] text-[#3A4A5F]">
                  {item.text}
                </p>
              </article>

              {index < array.length - 1 && (
                <div className="hidden items-center lg:flex">
                  <Image
                      src="/images/raar/lineraar.svg"
                      alt=""
                      width={2}
                      height={320}
                      className="w-auto h-[325px]"
                      aria-hidden
                    />
                </div>
              )}
            </Fragment>
          ))}
        </div>

      </section>

     
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
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Discover Next Step of Your AI Journey</h2>
        <div className="mt-6 flex justify-center">
          <Link href="/solutions/data-structuring-and-monetization">
            <PrimaryButton>
              Data Structuring & Monetization
            </PrimaryButton>
          </Link>
        </div>
      </section>
    </main>

    <Footer />
    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </div>
  );
}
