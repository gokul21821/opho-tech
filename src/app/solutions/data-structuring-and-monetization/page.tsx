"use client";

// app/solutions/data-structuring-and-monetization/page.tsx
import Image from "next/image";
import { Fragment } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";

export default function DataMonetizationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Data Structuring & Monetization" },
        ]}
        title="Data Structuring & Monetization"
        subtitle="Turning Your Information into Revenue"
        video="/videos/Data-Structuring.mp4"
      />

      <main className="bg-white text-[#0B1B2B]">

      {/* Intro split */}
      <SolutionsIntroSection
        imageSrc="/images/data-monetize/data.png"
        imageAlt="Data monetization illustration"
        copy={
          <>
            <p className="font-semibold">
              As a business leader, you know your data is a critical asset. Data
              Monetization is the strategy to unlock its financial potential,
              shifting it from a cost center to a profit generator.
            </p>

            <p className="mt-4">
              We help executives convert complex data infrastructure into clear,
              measurable business returns. This is not just a technology
              project; it is a fundamental shift in how your company creates
              value and secures a competitive edge.
            </p>
          </>
        }
        techStack={[
          {
            src: "/images/tech-stack-logos/kafka.svg",
            alt: "Kafka logo",
            wrapperClassName: "w-15 h-6 md:w-15 md:h-8 flex items-center justify-center"
          },
          {
            src: "/images/tech-stack-logos/spark.svg",
            alt: "Spark logo",
            wrapperClassName: "w-10 h-6 md:w-14 md:h-7 flex items-center justify-center"
          },
          { src: "/images/tech-stack-logos/tensorflow.svg", 
            alt: "TensorFlow logo", 
            wrapperClassName: "w-15 h-6 md:w-18 md:h-10 flex items-center justify-center" },
          { 
            src: "/images/tech-stack-logos/mongodb.svg", 
            alt: "MongoDB logo", 
            wrapperClassName: "w-15 h-6 md:w-17 md:h-10 flex items-center justify-center" },
          {
            src: "/images/tech-stack-logos/postgresql.svg",
            alt: "PostgreSQL logo",
            wrapperClassName: "w-20 h-6 md:w-17 md:h-10 flex items-center justify-center"
          },
          {
            src: "/images/tech-stack-logos/azure.svg",
            alt: "Azure logo",
            wrapperClassName: "w-10 h-6 md:w-7 md:h-8 flex items-center justify-center"
          },
          {
            src: "/images/tech-stack-logos/sql.svg",
            alt: "sql logo",
            wrapperClassName: "w-15 h-6 md:w-14 md:h-8 flex items-center justify-center"
          },
        ]}
      />


      {/* How Data Monetization Works Section */}
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
          <div className="flex flex-col gap-8 items-center">
            {/* Main Heading */}
            <div className="flex flex-col gap-8 items-center w-full">
              <h2 className="text-center text-4xl font-medium text-[#111111]">
                How Data Monetization Works
              </h2>
              
              {/* Horizontal Line */}
              <div className="flex justify-center w-full">
                <Image
                  src="/images/horizontalline.svg"
                  alt=""
                  width={1200}
                  height={3}
                  className="w-full max-w-5xl"
                  aria-hidden
                />
              </div>
            </div>

            {/* Stage 1: The Foundation of Trust */}
            <div className="flex flex-col gap-6 items-start w-full">
              <div className="flex flex-col gap-5 items-center w-full">
                {/* Stage 1 Badge */}
                <div className="flex justify-center">
                  <span className="border border-[#F37121] rounded-md px-3 py-1.5 text-[18px] font-medium text-[#F37121] capitalize">
                    Stage 1
                  </span>
                </div>
                
                <p className="text-center text-3xl font-medium leading-[38px] text-[#454545]">
                  The Foundation of Trust: Data Readiness
                </p>
                
                <p className="max-w-[860px] mx-auto text-center text-base font-normal leading-normal text-[#454545]">
                  Before data can be sold or used for high-impact AI, it must be reliable. We ensure your data is "investment-grade" through robust, scalable processes.
                </p>
              </div>

              {/* Stage 1 Cards */}
              <div className="grid gap-6 md:grid-cols-3 w-full">
                {[
                  {
                    title: "Structure, secure & standardise",
                    text:
                      "We architect a modern data environment (like a Data Lake or Fabric) to make all your information easily accessible and ready for rapid analysis.",
                  },
                  {
                    title: "Cleanse & Validate",
                    text:
                      "We enforce strict data quality rules, removing errors and inconsistencies. This is the critical step that ensures your AI models are accurate and your business decisions are trustworthy.",
                  },
                  {
                    title: "Label & Enrich",
                    text:
                      "We prepare the data for advanced use by adding context and connecting it to secure internal and external sources, making it immediately valuable for machine learning.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="relative rounded-2xl border border-[#FCD5AC] bg-white/30 p-5 card-text-smaller"
                  >
                    <div className="flex flex-col gap-4 items-start">
                      <h3 className="capitalize text-2xl font-medium leading-[26px] text-[#111111]">
                        {c.title}
                      </h3>
                      <p className="text-base font-normal leading-normal text-[#454545]">
                        {c.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 2: The Business Case */}
            <div className="flex flex-col gap-6 items-start w-full">
              <div className="flex flex-col gap-5 items-center w-full">
                {/* Stage 2 Badge */}
                <div className="flex justify-center">
                  <span className="border border-[#F37121] rounded-md px-3 py-1.5 text-[18px] font-medium text-[#F37121] capitalize">
                    Stage 2
                  </span>
                </div>
                
                <p className="text-center text-3xl font-medium leading-[38px] text-[#454545] max-w-[860px]">
                  The Business Case: Ready to Monetize
                </p>
              </div>

              {/* Stage 2 Cards */}
              <div className="grid gap-6 md:grid-cols-3 w-full">
                {[
                  {
                    title: "Direct Revenue",
                    strategicImpact: "Create new products and services based on aggregated insights and industry benchmarks.",
                    tangibleOutcome: "New revenue streams, high-margin data products.",
                  },
                  {
                    title: "Operational Efficiency",
                    strategicImpact: "Use AI and analytics to optimize core processes and predict future needs.",
                    tangibleOutcome: "Reduced costs, optimized inventory, faster time-to-market.",
                  },
                  {
                    title: "Customer Experience",
                    strategicImpact: "Leverage hyper-personalization to drive loyalty and sales.",
                    tangibleOutcome: "Increased Customer Lifetime Value (CLV) and lower churn.",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="relative rounded-2xl border border-[#FCD5AC] bg-white/30 p-5 card-text-smaller"
                  >
                    <div className="flex flex-col gap-4 items-start">
                      

                      {/* Title */}
                      <h3 className="capitalize text-2xl font-medium leading-[26px] text-[#111111]">
                        {b.title}
                      </h3>

                      {/* Strategic Impact */}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Strategic Impact
                          </span>
                        </div>
                        <p className="text-base font-normal leading-normal text-[#454545]">
                          {b.strategicImpact}
                        </p>
                      </div>

                      {/* Tangible Outcome */}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Tangible Outcome
                          </span>
                        </div>
                        <p className="text-base font-normal leading-normal text-[#454545]">
                          {b.tangibleOutcome}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Line */}
            <div className="flex justify-center w-full">
              <Image
                src="/images/horizontalline.svg"
                alt=""
                width={1200}
                height={3}
                className="w-full max-w-5xl"
                aria-hidden
              />
            </div>

            {/* Data Monetization - From Problem to Profit */}
            <div className="flex flex-col gap-10 items-start w-full">
              <div className="flex flex-col gap-5 items-center w-full">
                <h3 className="text-center text-3xl font-medium leading-[38px] text-[#454545]">
                  Data Monetization - <span className="text-[#2A73B5]">From Problem to Profit</span>
                </h3>
                <p className="max-w-[860px] mx-auto text-center text-base font-normal leading-normal text-[#454545]">
                  Our core value is bridging the gap between your executive vision and the necessary technological execution.
                </p>
              </div>

              {/* Two-column challenge/services band */}
              <div className="rounded-2xl border border-[#FCD5AC] bg-white/30 px-6 py-5 md:px-10 w-full card-text-smaller">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch md:items-start min-h-[243px] relative">
                {/* First Card */}
                <div className="flex-1 flex flex-col gap-4 items-start justify-start">
                  <div className="flex flex-col gap-2 w-full mb-2 h-[80px]">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                      <span className="capitalize text-base font-medium text-[#111111]">
                        Business Challenge
                      </span>
                    </div>
                    <p className="capitalize text-2xl font-medium leading-[26px] text-[#E45412]">
                      "need to reduce high marketing spend inefficiency."
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-2 w-fit">
                      <span className="capitalize text-base font-medium text-[#111111]">
                        Data Opportunity
                      </span>
                    </div>
                    <p className="text-base font-normal leading-normal text-[#454545]">
                      Implementing <span className="font-medium text-[#111111]">prescriptive analytics</span> to target only the high-value customers with tailored offers, delivering maximum ROI.
                    </p>
                  </div>
                </div>

                {/* Vertical Line - Centered */}
                <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-center justify-center">
                  <Image
                    src="/images/raar/lineraar.svg"
                    alt=""
                    width={2}
                    height={320}
                    className="w-auto h-auto"
                    aria-hidden
                  />
                </div>

                {/* Second Card */}
                <div className="flex-1 flex flex-col gap-4 items-start justify-start">
                  <div className="flex flex-col gap-2 w-full mb-2 h-[80px]">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                      <span className="capitalize text-base font-medium text-[#111111]">
                        Business Challenge
                      </span>
                    </div>
                    <p className="capitalize text-2xl font-medium leading-[26px] text-[#E45412]">
                      "need a new growth vertical."
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                      <span className="capitalize text-base font-medium text-[#111111]">
                        Data Services
                      </span>
                    </div>
                    <p className="text-base font-normal leading-normal text-[#454545]">
                      Aggregate anonymized usage data to create and sell a unique <span className="font-medium text-[#111111]">industry trend report</span> (Data-as-a-Service model), creating a net-new revenue stream.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundDots>

      <IconCardsSection
        title="Advantages"
        items={[
          {
            title: "New Data‑Driven Revenue Streams",
            icon: "/images/icons/search-notes.svg",
          },
          {
            title: "Operational Efficiency And Cost Reduction",
            icon: "/images/icons/settings-money.svg",
          },
          {
            title: "Improved Customer Loyalty And Retention",
            icon: "/images/icons/monitor.svg",
          },
        ]}
      />

     {/* Data Monetization – Goal */}
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
     
     <section className="relative mx-auto max-w-7xl px-[5%]">
  {/* Divider line */}
  <Image
    src="/images/raar/lineraar.svg"
    alt=""
    width={2}
    height={320}
    className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    aria-hidden
  />

  <div className="grid md:grid-cols-2 items-center gap-10">
    {/* Left: Text */}
    <div>
      <h2 className=" text-3xl md:text-4xl font-medium text-[#0B1B2B] ">
        Data Monetization – Goal
      </h2>
      <p className="mt-5 text-lg text-[#3A4A5F]">
        To help you realize the maximum financial value of your enterprise data
        while ensuring governance, security, and ethical compliance are built
        into the foundation.
      </p>
    </div>

    {/* Right: Image */}
    <div className="justify-self-center">
      <Image
        src="/images/data-monetize/cube.png"
        alt="Cube vault illustration"
        width={520}
        height={360}
        className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl shadow-[0_12px_32px_-10px_rgba(15,44,88,0.25)]"
      />
    </div>
  </div>
</section>


     </BackgroundDots>
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
        previousHref="/solutions/research-and-analysis"
        title="Discover Next Step of Your AI Journey"
        cta={{
          href: "/solutions/cloud-integration",
          label: "Cloud Integration & Architecture",
        }}
      />
    </main>

    <Footer />
  </div>
  );
}
