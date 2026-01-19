"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";

export default function CloudIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 ">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Cloud Integration & Architecture" },
        ]}
        title="Cloud Integration & Architecture"
        subtitle="Building the Digital Backbone"
        video="/videos/Cloud-Integration.mp4"
      />

      <main className="bg-white text-[#0B1B2B]">

      {/* Overview Section */}
      <SolutionsIntroSection
        imageSrc="/images/cloud-integrations/orange-cloud.png"
        imageAlt="Cloud integration illustration"
        copy={
          <>
            <p className="mb-6">
              <strong>For the Business Leaders:</strong> Cloud is not just an IT
              cost center; it is the
              <strong> platform for innovation, agility, and scale.</strong>{" "}
              Cloud Integration & Architecture services ensure technology
              strategy directly supports business goals, minimizes risk, and
              maximizes competitive speed.
            </p>

            <p>
              <strong>
                For the Chief Cloud Architect and Integration Expert:
              </strong>{" "}
              We focus on modern, scalable, and secure system design—breaking
              down data silos and enabling real-time analytics across your
              enterprise.
            </p>
          </>
        }
        techStack={[
          {
            src: "/images/tech-stack-logos/azure.svg",
            alt: "azure logo",
          },
          {
            src: "/images/tech-stack-logos/aws.svg",
            alt: "AWS logo",
          },
          {
            src: "/images/tech-stack-logos/google-cloud.svg",
            alt: "Google Cloud logo",
          },
          {
            src: "/images/tech-stack-logos/kubernetes.svg",
            alt: "Kubernetes logo",
          },
          { src: "/images/tech-stack-logos/docker.svg", alt: "Docker logo" },
          { src: "/images/tech-stack-logos/elastic.svg", alt: "Elastic logo" },
        ]}
      />


        {/* How Cloud Integration & Architecture Works */}
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
            {/* How It Works Section */}
            <div className="flex flex-col gap-10 items-center mb-16">
              <div className="flex flex-col gap-8 items-center">
                <h2 className="text-4xl font-medium  text-[#111111] text-center">
                  How Cloud Integration & Architecture Works
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
                    The Strategic Imperative: Agility and Resilience
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545]">
                    In today's market, speed and flexibility are paramount. Our approach ensures your cloud environment is not only cost-effective but an active enabler of business transformation.
                  </p>
                </div>
              </div>

              {/* Three Challenge Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-full">
                {[{
                  title: 'Siloed Data Across Various Systems And Platforms',
                  solution: 'Unified Data Fabric/Mesh architecture.',
                  outcome: 'Single source of truth for reliable decision-making and AI.'
                }, {
                  title: 'Slow Scaling To Meet Peak Demand Or New Markets',
                  solution: 'Hyper-Scalable Cloud Infrastructure (AWS, Azure, GCP and local partners).',
                  outcome: 'Agility to enter new markets or handle massive growth instantly.'
                }, {
                  title: 'High Maintenance Costs And Security Complexity',
                  solution: 'Managed Services & Infrastructure-as-Code (IaC).',
                  outcome: 'Reduced operational overhead and enhanced compliance/security posture.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#111111]">
                        {item.title}
                      </h4>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Strategic Cloud Solution
                          </span>
                        </div>
                        <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                          {item.solution}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Business Outcome
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

            {/* From Complex Challenge to Clear Opportunity */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-[24px] md:text-[28px] font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  From Complex Challenge to Clear Opportunity
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                  Our core expertise is <span className="font-semibold text-[#111111]">translating complex business challenges into clear technology opportunities.</span> We don't implement technology for its own sake; we align it with your revenue targets and operational requirements.
                </p>
              </div>

              <div className="border border-[#fcd5ac] rounded-2xl px-6 md:px-10 py-5 bg-white/30 relative overflow-hidden card-text-smaller">
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                        <span className="text-[14px] font-medium text-[#111111]">
                          Business Challenge
                        </span>
                      </div>
                      <h4 className="text-[17px] font-semibold leading-[26px] text-[#e45412]">
                        Product Development Cycle Is Too Slow.
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                        <span className="text-[14px] font-medium text-[#111111]">
                          Solution
                        </span>
                      </div>
                      <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                        Design a cloud-native DevOps pipeline and integrate development tools to cut time-to-market significantly.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center h-full flex-shrink-0">
                    <Image
                      src="/images/raar/lineraar.svg"
                      alt=""
                      width={2}
                      height={320}
                      className="w-auto h-[200px]"
                      aria-hidden
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                        <span className="text-[14px] font-medium text-[#111111]">
                          Business Challenge
                        </span>
                      </div>
                      <h4 className="text-[17px] font-semibold leading-[26px] text-[#e45412]">
                        Cannot Get A 360-Degree View Of The Customer.
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                        <span className="text-[14px] font-medium text-[#111111]">
                          Solution
                        </span>
                      </div>
                      <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                        Implement a secure, real-time API integration strategy to connect CRM, ERP, and marketing platforms, instantly enabling personalized customer experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Focus */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-[24px] md:text-[28px] font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  Leadership Focus: Stability, Security, and Speed
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                  As leaders in Cloud Architecture and Integration, we prioritize the three pillars necessary for long-term digital success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[{
                  title: 'Optimal Architecture Design',
                  desc: (
                    <>
                      We focus on <span className="font-bold text-black">cost-optimization and governance</span> from the start, ensuring your cloud expenditure (FinOps) is efficient and aligned with business value. We select the right services (IaaS, PaaS, or SaaS) for your needs.
                    </>
                  )
                }, {
                  title: 'Seamless Integration Expertise',
                  desc: 'We specialize in modernizing legacy systems, migrating applications, and establishing robust data pipelines that ensure data flows securely and reliably across your entire ecosystem.'
                }, {
                  title: 'Security By Design',
                  desc: 'We implement enterprise-grade security controls, identity and access management (IAM), and compliance frameworks to protect your assets in the cloud environment.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#111111]">
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
          </section>
        </BackgroundDots>

        <IconCardsSection
          title="Advantages"
          items={[
            {
              title: "Unified Data Environment For Reliable Analytics",
              icon: "/images/icons/shield.svg",
            },
            {
              title: "Scalable And Compliant Architecture",
              icon: "/images/icons/settings-phone.svg",
            },
            {
              title: "Reduced Operational Costs And Maintenance",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "Governance And FinOps Efficiency",
              icon: "/images/icons/monitor.svg",
            },
            {
              title: "Faster Market Entry And Innovation Cycles",
              icon: "/images/icons/monitor-rocket.svg",
            },
          ]}
        />

        {/* Cloud Integration & Architecture */}
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
            <div className="grid items-center gap-10 md:grid-cols-3">
              <div>
                <h2 className="text-4xl text-[#0B1B2B]">Cloud Integration & Architecture</h2>
                <p className="mt-5 text-lg text-[#3A4A5F]">
                Enable and transform complex business challenges into clear technology opportunities, driving stability, security, and speed.
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
                  src="/images/cloud-integrations/analyzing.png"
                  alt="Cloud architecture illustration"
                  width={520}
                  height={360}
                  className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl shadow-[0_12px_32px_-10px_rgba(15,44,88,0.3)]"
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
          previousHref="/solutions/data-structuring-and-monetization"
          title="Discover Next Step of Your AI Journey"
          cta={{ href: "/solutions/ai-solutions-and-services", label: "AI Solutions & Services" }}
        />
      </main>

      <Footer />
    </div>
  );
}
