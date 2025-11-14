"use client";

// app/data-monetization/page.tsx
import Image from "next/image";
import { Fragment, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";
import BackgroundDots from "@/components/ui/background";

export default function DataMonetizationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/" },
          { label: "Data Monetization" },
        ]}
        title="Data Monetization"
        subtitle="Turning Your Information into Revenue"
        contentAlignment="center"
      />

      <main className="bg-white text-[#0B1B2B]">

      {/* Intro split */}
      <section className="mx-auto max-w-7xl px-6 py-20">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12">

    {/* LEFT — Illustration */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/images/data-monetize/data.png"
        alt="Data monetization illustration"
        width={520}
        height={380}
        className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl "
        priority
      />
    </div>

    {/* CENTER — Vertical Divider */}
    <div className="flex justify-center">
      <Image
        src="/images/raar/lineraar.svg"
        alt=""
        width={2}
        height={200}
        className="h-[350px] w-auto"
        aria-hidden
      />
    </div>

    {/* RIGHT — Text Block */}
    <div className="flex flex-col justify-center text-[15.5px] text-[#3A4A5F] max-w-md">

      <p className="font-semibold">
        As a business leader, you know your data is a critical asset.
        Data Monetization is the strategy to unlock its financial potential,
        shifting it from a cost center to a profit generator.
      </p>

      <p className="mt-4">
        We help executives convert complex data infrastructure into clear,
        measurable business returns. This is not just a technology project; it
        is a fundamental shift in how your company creates value and secures a
        competitive edge.
      </p>

    </div>

  </div>
</section>


      {/* How Data Monetization Works Section */}
      <BackgroundDots
          className="py-16 px-6 md:px-[110px]"
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
        <section className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 items-center">
            {/* Main Heading */}
            <div className="flex flex-col gap-8 items-center w-full">
              <h2 className="text-center text-[38px] font-medium leading-[48px] text-[#111111]">
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
                
                <p className="text-center text-[28px] font-medium leading-[38px] text-[#454545]">
                  The Foundation of Trust: Data Readiness
                </p>
                
                <p className="max-w-[860px] mx-auto text-center text-[18px] font-normal leading-normal text-[#454545]">
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
                    className="relative rounded-2xl border border-[#FCD5AC] bg-white/30 p-5"
                  >
                    <div className="flex flex-col gap-4 items-start">
                      <h3 className="capitalize text-[24px] font-medium leading-[26px] text-[#111111]">
                        {c.title}
                      </h3>
                      <p className="text-[16px] font-normal leading-normal text-[#454545]">
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
                
                <p className="text-center text-[28px] font-medium leading-[38px] text-[#454545] max-w-[860px]">
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
                    icon: "/images/data-monetize/money.svg",
                  },
                  {
                    title: "Operational Efficiency",
                    strategicImpact: "Use AI and analytics to optimize core processes and predict future needs.",
                    tangibleOutcome: "Reduced costs, optimized inventory, faster time-to-market.",
                    icon: "/images/data-monetize/gear.svg",
                  },
                  {
                    title: "Customer Experience",
                    strategicImpact: "Leverage hyper-personalization to drive loyalty and sales.",
                    tangibleOutcome: "Increased Customer Lifetime Value (CLV) and lower churn.",
                    icon: "/images/data-monetize/laptop.svg",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="relative rounded-2xl border border-[#FCD5AC] bg-white/30 p-5"
                  >
                    <div className="flex flex-col gap-4 items-start">
                      {/* Icon */}
                      <div className="h-12 w-12 relative">
                        <Image
                          src={b.icon}
                          alt={`${b.title} icon`}
                          width={48}
                          height={48}
                          className="h-12 w-12"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="capitalize text-[24px] font-medium leading-[26px] text-[#111111]">
                        {b.title}
                      </h3>

                      {/* Strategic Impact */}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Strategic Impact
                          </span>
                        </div>
                        <p className="text-[16px] font-normal leading-normal text-[#454545]">
                          {b.strategicImpact}
                        </p>
                      </div>

                      {/* Tangible Outcome */}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Tangible Outcome
                          </span>
                        </div>
                        <p className="text-[16px] font-normal leading-normal text-[#454545]">
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
                <h3 className="text-center text-[28px] font-medium leading-[38px] text-[#454545]">
                  Data Monetization - <span className="text-[#2A73B5]">From Problem to Profit</span>
                </h3>
                <p className="max-w-[860px] mx-auto text-center text-[18px] font-normal leading-normal text-[#454545]">
                  Our core value is bridging the gap between your executive vision and the necessary technological execution.
                </p>
              </div>

              {/* Two-column challenge/services band */}
              <div className="rounded-2xl border border-[#FCD5AC] bg-white/30 px-6 py-5 md:px-10 w-full">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch md:items-center min-h-[243px] relative">
                  {/* First Card */}
                  <div className="flex-1 flex flex-col gap-4 items-start justify-center">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                        <span className="capitalize text-[18px] font-medium text-[#111111]">
                          Business Challenge
                        </span>
                      </div>
                      <p className="capitalize text-[24px] font-medium leading-[26px] text-[#E45412]">
                        "need to reduce high marketing spend inefficiency."
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                        <span className="capitalize text-[18px] font-medium text-[#111111]">
                          Data Opportunity
                        </span>
                      </div>
                      <p className="text-[18px] font-normal leading-normal text-[#454545]">
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
                      height={243}
                      className="h-full w-[2px]"
                      aria-hidden
                    />
                  </div>

                  {/* Second Card */}
                  <div className="flex-1 flex flex-col gap-4 items-start justify-center">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                        <span className="capitalize text-[18px] font-medium text-[#111111]">
                          Business Challenge
                        </span>
                      </div>
                      <p className="capitalize text-[24px] font-medium leading-[26px] text-[#E45412]">
                        "need a new growth vertical."
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-1.5 w-fit">
                        <span className="capitalize text-[18px] font-medium text-[#111111]">
                          Data Services
                        </span>
                      </div>
                      <p className="text-[18px] font-normal leading-normal text-[#454545]">
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

      {/* Derived Value */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-[32px] font-medium leading-[48px] text-[#0B1B2B]">
          Derived Value
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
          {[
            {
              title: "New Data‑Driven Revenue Streams",
              text: "",
              icon: "/images/icons/search-notes.svg",
            },
            {
              title: "Operational Efficiency And Cost Reduction",
              text: "",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "Improved Customer Loyalty And Retention",
              text: "",
              icon: "/images/icons/monitor.svg",
            },
          ].map((item, index, array) => (
            <Fragment key={item.title}>
              <article className="flex-1 rounded-[20px] px-6 py-10 text-center">
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#FFE6D5] ">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-[16px] font-medium leading-[24px] text-[#0F2C58]">
                  {item.title}
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
                    height={200}
                    className="h-[180px] w-auto"
                    aria-hidden
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>

      </section>

     {/* Data Monetization – Goal */}
     <BackgroundDots
          className="py-16 px-6 md:px-[110px]"
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
     
       <section className="mx-auto max-w-7xl px-6">
         <div className="grid items-center gap-10 md:grid-cols-3">
           <div>
             <h2 className="text-4xl text-[#0B1B2B]">Data Monetization – Goal</h2>
             <p className="mt-5 text-lg text-[#3A4A5F]">
               To help you realize the maximum financial value of your enterprise data while ensuring governance, security, and ethical compliance are built into the foundation.
             </p>
           </div>

           <div className="flex justify-center">
             <Image
               src="/images/raar/lineraar.svg"
               alt=""
               width={2}
               height={320}
               className="h-[320px] w-[2px]"
             />
           </div>

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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Get Started</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-[#3A4A5F]">
          Explore the top Data Monetization models with our experts to find the one that delivers the greatest business impact for your organization.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
            Book a Call 
          </PrimaryButton>
        </div>
      </section>
    </main>

    <Footer />
    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </div>
  );
}
