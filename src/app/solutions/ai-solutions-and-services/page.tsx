"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";
import BackgroundDots from "@/components/ui/background";

export default function AISolutionsAndServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "AI Solutions & Services" },
        ]}
        title="AI Solutions & Services"
        subtitle="Intelligent Automation and Predictive Advantage"
        video="/videos/Ophotech.mp4"
      />

      <main className="bg-white text-[#0B1B2B]">

        {/* Overview Section */}
        <section className="mx-auto max-w-7xl px-[5%] py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12">

            {/* LEFT — Illustration */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/ai_solutions/AI.png"
                alt="AI and Machine Learning illustration"
                width={520}
                height={360}
                className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl"
                priority
              />
            </div>

            {/* CENTER — Vertical Divider */}
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

            {/* RIGHT — Text */}
            <div className="text-sm text-gray-600 flex flex-col justify-center max-w-md">

              <p className="mb-6">
                AI and Machine Learning are no longer futuristic concepts; they are the tools driving present-day <strong>competitive differentiation and operational scalability.</strong> We move beyond pilot programs to integrate AI that delivers measurable ROI on your existing data and cloud investments.
              </p>

              <p>
                <strong>For Businesses,</strong> we focus on developing robust, scalable, and ethical AI models that are deployed seamlessly into production, driving real-time decisions and business value.
              </p>

              <div className="mt-8">
    <h2 className="text-[24px] font-bold text-[#0B1B2B]">Our Tech Stack</h2>
    <div className="flex flex-wrap gap-4">
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/octoml.svg"
          alt="OctoML logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/hugging-face.svg"
          alt="Hugging Face logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/openai.svg"
          alt="OpenAI logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/mistral-ai.svg"
          alt="Mistral AI logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/amazon-bedrock.svg"
          alt="amazon bedrock logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/azure-ai-studio.svg"
          alt="Azure AI Studio logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/google-ai-studio.svg"
          alt="google AI Studio logo"
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

        {/* AI Solutions & Services Section */}
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
          <section className="max-w-7xl mx-auto px-[5%]">
            {/* Top Section: Heading, Line, Subtitle, Description */}
            <div className="flex flex-col gap-10 items-center mb-10">
              <div className="flex flex-col gap-8 items-center">
                <h2 className="text-[32px] md:text-[38px] font-medium leading-[40px] md:leading-[48px] text-[#111111] text-center">
                  AI Solutions & Services
                </h2>
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
                <div className="flex flex-col gap-5 items-center text-center max-w-[924px] px-4">
                  <h3 className="text-[24px] md:text-[28px] font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                    Strategic AI: Adding Value to Data Beyond Simple Automation
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545]">
                    We implement AI solutions that are deeply embedded in your core business workflows, transforming how decisions are made, not just how tasks are completed.
                  </p>
                </div>
              </div>

              {/* Three Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[{
                  title: 'Intelligent Automation',
                  icon: '/images/data-monetize/gear.svg',
                  impact: 'Automate complex, rule-based, and high-volume processes (e.g., invoice processing, customer routing). ',
                  outcome: 'Reduced operational costs, faster processing times, and reallocation of human capital to strategic tasks. '
                }, {
                  title: 'Predictive Forecasting',
                  icon: '/images/cloud-integrations/sparkle.svg',
                  impact: 'Use sophisticated models to anticipate market shifts, customer behavior, and equipment failures. ',
                  outcome: 'Reduced inventory risk, optimized pricing, and proactive maintenance (less downtime). '
                }, {
                  title: 'Personalized Engagement',
                  icon: '/images/ai_solutions/lightning.svg',
                  impact: 'Deploy AI to tailor every interaction, from marketing to product recommendations. ',
                  outcome: 'Increased customer loyalty, higher conversion rates, and growth in Customer Lifetime Value (CLV). '
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="h-12 w-12 relative">
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          width={48}
                          height={48}
                          className="h-12 w-12"
                        />
                      </div>
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#111111] capitalize">
                        {item.title}
                      </h4>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Strategic Business Impact
                          </span>
                        </div>
                        <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                          {item.impact}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Tangible Outcome
                          </span>
                        </div>
                        <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Chain of AI Implementation */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-[24px] md:text-[28px] font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  The Value Chain of AI Implementation
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                  Our expertise ensures that AI projects succeed by bridging the gap between data science theory and practical, secure deployment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[{
                  title: 'Business Problem Translation',
                  desc: 'Defining a clear business goal (e.g., reduce churn substantially). '
                }, {
                  title: 'Model Development & Training',
                  desc: 'Our data scientists build and train the most appropriate machine learning models (e.g., deep learning, NLP, computer vision) using your high-quality, validated data. '
                }, {
                  title: 'Deployment & Integration',
                  desc: 'Our architects and integration experts ensure the model is seamlessly deployed into your cloud architecture (via APIs, MLOps pipelines), enabling real-time decision-making. '
                }, {
                  title: 'Monitoring & Governance',
                  desc: 'Establish continuous monitoring to track model performance, ensure ethical compliance, and retrain models to prevent "drift" and maintain accuracy over time.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#111111] capitalize">
                        {item.title}
                      </h4>
                      <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Deployment */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-[24px] md:text-[28px] font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  AI Deployment
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                  Two <span className="font-medium">critical factors</span> for enterprise AI success.
                </p>
              </div>

              <div className="border border-[#fcd5ac] rounded-2xl px-6 md:px-10 py-5 bg-white/30 relative overflow-hidden card-text-smaller">
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
                  <div className="flex-1 flex flex-col gap-4">
                    <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#e45412] capitalize">
                      Scalability & MLOps:
                    </h4>
                    <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545]">
                      We focus on an <span className="font-medium text-[#111111]">MLOps (Machine Learning Operations)</span> framework, treating AI models like enterprise software. This ensures rapid development, automated deployment, and reliable performance at scale.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center h-full flex-shrink-0">
                  <Image
                      src="/images/raar/lineraar.svg"
                      alt=""
                      width={2}
                      height={320}
                      className="w-auto h-auto"
                      aria-hidden
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#e45412] capitalize">
                      Ethical AI & Trust:
                    </h4>
                    <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545]">
                      We embed principles of fairness, transparency, and data privacy into every solution. This mitigates risk, ensures regulatory compliance, and builds customer trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </BackgroundDots>

        {/* AI Enablement - How You Lead */}
        <section className="mx-auto max-w-7xl px-[5%] py-16">
          <h2 className="text-center text-[32px] font-medium leading-[48px] text-[#0B1B2B]">
            AI Enablement - How You Lead
          </h2>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
            {[
              {
                title: "Enterprise-Ready AI With Measurable ROI",
                text: "",
                icon: "/images/icons/monitor-rocket.svg",
              },
              {
                title: "Predictive Analytics And Process Automation",
                text: "",
                icon: "/images/icons/search-bulb.svg",
              },
              {
                title: "Personalized Customer Engagement",
                text: "",
                icon: "/images/icons/shield.svg",
              },
              {
                title: "Ethical And Compliant AI Governance",
                text: "",
                icon: "/images/icons/settings-load.svg",
              },
              {
                title: "Continuous Monitoring And Model Optimization",
                text: "",
                icon: "/images/icons/settings-phone.svg",
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

       {/* AI Solutions & Services */}
       <BackgroundDots
         className="py-14"
         spacing={25}
         dotSize={3}
         backgroundColor="#FFF6EB"
         dotColor="#D9D9D9"
         style={{
          background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
        }}
       >
         <section className="mx-auto max-w-7xl px-[5%]">
           <div className="grid items-center gap-10 md:grid-cols-3">
             <div>
               <h2 className="text-4xl text-[#0B1B2B]">AI Solutions & Services</h2>
               <p className="mt-5 text-lg text-[#3A4A5F]">
                 We bridge the gap between data science and secure, production-ready AI that delivers tangible business impact.
               </p>
             </div>

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

             <div className="justify-self-center">
               <Image
                 src="/images/ai_solutions/aisolution.png"
                 alt="AI solutions illustration"
                 width={520}
                 height={380}
                 className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
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
        <section className="mx-auto max-w-7xl px-20 py-16">
          <div className="mb-6">
            <Link
              href="/solutions/cloud-integration"
              className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-orange-500 transition-colors hover:text-orange-600"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="size-4"
              >
                <path
                  d="M13 8H3M3 8L7 12M3 8L7 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Previous</span>
            </Link>
          </div>
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Discover Next Step of Your AI Journey</h2>
          <div className="mt-8 flex justify-center">
            <Link href="/solutions/ai-agent-development">
              <PrimaryButton>
                AI Agent Development
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
