"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";
import { Fragment } from "react";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";

export default function AISolutionsAndServices() {
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
        video="/videos/AI-Solutions.mp4"
      />

      <main className="bg-white text-[#0B1B2B]">

        {/* Overview Section */}
        <SolutionsIntroSection
          imageSrc="/images/ai_solutions/ai-image.png"
          imageAlt="AI and Machine Learning illustration"
          copy={
            <>
              <p className="mb-6">
              AI and Machine Learning are established, transformative tools for driving competitive differentiation and operational scalability. We move beyond pilot programs to integrate AI that consistently delivers measurable ROI from your existing data and cloud investments.
              </p>

              <p>
              For businesses, we develop robust, scalable, and ethical AI models that are seamlessly deployed into production. This enables real-time decision-making and drives measurable business value.
              </p>
            </>
          }
          techStack={[
            {
              src: "/images/tech-stack-logos/octoml.svg",
              alt: "OctoML logo",
              wrapperClassName: "w-15 h-6 md:w-14 md:h-8 flex items-center justify-center"
            },
            {
              src: "/images/tech-stack-logos/hugging-face.svg",
              alt: "Hugging Face logo",
              wrapperClassName: "w-7 h-6 md:w-8 md:h-8 flex items-center justify-center"
            },
            {
              src: "/images/tech-stack-logos/openai.svg",
              alt: "OpenAI logo",
              wrapperClassName: "w-7 h-6 md:w-7 md:h-8 flex items-center justify-center"
            },
            { 
              src: "/images/tech-stack-logos/mistral-ai.svg", 
              alt: "Mistral AI logo", 
              wrapperClassName: "w-15 h-6 md:w-18 md:h-8 flex items-center justify-center" },
            {
              src: "/images/tech-stack-logos/amazon-bedrock.svg",
              alt: "amazon bedrock logo",
              wrapperClassName: "w-15 h-6 md:w-14 md:h-8 flex items-center justify-center"
            },
            {
              src: "/images/tech-stack-logos/azure-ai-studio.svg",
              alt: "Azure AI Studio logo",
              wrapperClassName: "w-15 h-6 md:w-17 md:h-8 flex items-center justify-center"
            },
          ]}
        />


        <IconCardsSection
          title="AI Enablement - Advantages"
          items={[
            {
              title: "Enterprise-Ready AI With Measurable ROI",
              icon: "/images/icons/monitor-rocket.svg",
            },
            {
              title: "Predictive Analytics And Process Automation",
              icon: "/images/icons/search-bulb.svg",
            },
            {
              title: "Personalized Customer Engagement",
              icon: "/images/icons/shield.svg",
            },
            {
              title: "Ethical And Compliant AI Governance",
              icon: "/images/icons/settings-load.svg",
            },
            {
              title: "Continuous Monitoring And Model Optimization",
              icon: "/images/icons/settings-phone.svg",
            },
          ]}
          withBackgroundDots
          backgroundDotsProps={{
            spacing: 36,
            dotSize: 2.5,
            backgroundColor: "",
            dotColor: "#D9D9D9",
            style: {
              background:
                "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
            },
          }}
        />

        {/* AI Solutions & Services Section */}
          <section className="max-w-6xl mx-auto py-16 px-3 xl:px-0">
          
    {/* AI Deployment */}
    <div className="flex flex-col gap-10 ">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-4xl font-medium leading-[32px] md:leading-[38px] text-black">
                  AI Deployment
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                  Two <span className="font-medium">critical factors</span> for enterprise AI success.
                </p>
              </div>

              <BackgroundDots
                className=""
                spacing={36}
                dotSize={2.5}
                backgroundColor=""
                dotColor="#D9D9D9"
                style={{
                  background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
                }}
              >
              <div className="border border-[#fcd5ac] rounded-2xl px-6 md:px-10 py-7 bg-white/30 relative overflow-hidden card-text-smaller">
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <h4 className="text-2xl font-medium leading-[33px] text-[#e45412] capitalize">
                    Scalability & MLOps:
                  </h4>
                  <p className="text-base font-normal leading-normal text-[#454545]">
                  We implement MLOps frameworks to manage the lifecycle of AI models, much like enterprise software, enabling rapid, reliable deployment at scale.
                  </p>
                </div>

                {/* Divider Line */}
                <div className="hidden md:flex items-stretch justify-center flex-shrink-0">
                  <Image
                    src="/images/raar/lineraar.svg"
                    alt=""
                    width={2}
                    height={320}
                    className="w-auto h-[130px]"
                    aria-hidden
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <h4 className="text-2xl font-medium leading-[33px] text-[#e45412] capitalize">
                    Ethical AI & Trust:
                  </h4>
                  <p className="text-base font-normal leading-normal text-[#454545]">
                  Every solution prioritizes fairness, transparency, and data privacy to reduce risk, ensure compliance, and build trust.
                  </p>
                </div>
              </div>
            </div>
              </BackgroundDots>
            </div>
          </section>

            {/* Value Chain of AI Implementation */}
            <BackgroundDots
              className="py-16"
              spacing={36}
              dotSize={2.5}
              backgroundColor=""
              dotColor="#D9D9D9"
              style={{
                background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
              }}
            >
            <section className="max-w-6xl mx-auto px-3 xl:px-0">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-4xl font-medium leading-[32px] md:leading-[38px] text-black">
                  The Value Chain of AI Implementation
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                We connect data science theory with secure, practical AI deployment for project success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[{
                  title: 'Business Problem Translation',
                  desc: 'Defining a clear business goal (e.g., reduce churn substantially).'
                }, {
                  title: 'Model Development & Training',
                  desc: 'Our data scientists build and train machine learning models—including deep learning, NLP, and computer vision—using your validated data.'
                }, {
                  title: 'Deployment & Integration',
                  desc: 'Our architects and integration experts deploy the model seamlessly into your cloud using APIs and MLOps pipelines, enabling real-time decisions.'
                }, {
                  title: 'Monitoring & Governance',
                  desc: "Continuous monitoring tracks performance, ensures compliance, and enables retraining to prevent 'drift' and maintain accuracy."
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-3 bg-white/30 relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-2xl font-medium leading-[26px] text-[#111111] capitalize">
                        {item.title}
                      </h4>
                      <p className="text-base font-normal leading-normal text-[#454545]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </section>
        </BackgroundDots>

  {/* Top Section: Heading, Line, Subtitle, Description */}
  <section className="max-w-6xl mx-auto py-16 px-3 xl:px-0">
  <div className="flex flex-col gap-10 items-center mb-10">
              <div className="flex flex-col gap-8 items-center">
     
                <div className="flex flex-col gap-5 items-center text-center max-w-[924px] px-4">
                  <h3 className="text-3xl  font-medium leading-[32px] md:leading-[38px] text-black">
                    Strategic AI: Adding Value to Data Beyond Simple Automation
                  </h3>
                  <p className="text-base font-normal leading-normal text-[#454545]">
                  Our AI solutions transform decision-making by embedding into core workflows, moving beyond basic automation.
                  </p>
                </div>
              </div>

              {/* Three Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[{
                  title: 'Intelligent Automation',
                  impact: 'Automate complex, rule-based, high-volume processes such as invoice processing and customer routing.',
                  outcome: 'Cut operational costs, speed processing, and reallocate human resources for strategic work.'
                }, {
                  title: 'Predictive Forecasting',
                  impact: 'Use advanced models to predict market shifts, customer behavior, and equipment failures.',
                  outcome: 'Minimize inventory risk, optimize pricing, and enable proactive maintenance.'
                }, {
                  title: 'Personalized Engagement',
                  impact: 'Deploy AI to personalize every customer interaction, from marketing to recommendations.',
                  outcome: 'Increase customer loyalty, conversion rates, and Customer Lifetime Value (CLV).'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller h-full flex flex-col"
                  >
                    <div className="relative z-10 flex flex-col gap-4 h-full">
                      <h4 className="text-2xl font-medium leading-[26px] text-[#111111] capitalize h-[40px] flex items-start">
                        {item.title}
                      </h4>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Strategic Business Impact
                          </span>
                        </div>
                        <p className="text-base font-normal leading-normal text-[#454545]">
                          {item.impact}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Tangible Outcome
                          </span>
                        </div>
                        <p className="text-base font-normal leading-normal text-[#454545]">
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          </section>


        {/* Navigation */}
        <SolutionsNavigationSection
          previousHref="/solutions/cloud-integration"
          title="Discover Next Step of Your AI Journey"
          cta={{ href: "/solutions/ai-agent-development", label: "AI Agent Development" }}
        />
      </main>

      <Footer />
    </div>
  );
}
