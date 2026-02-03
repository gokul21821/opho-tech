"use client";

// app/ai-agent-development/page.tsx
import Image from "next/image";
import { Fragment } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";

export default function AIAgentDevelopment() {
  const strategicValueCards = [
    {
      title: "Simple Task:",
      subtitle: "Automating a single data entry point.",
      details: [
        { type: "badge", text: "AI Agent Development" },
        {
          type: "text",
          label: "Complex Workflow:",
          copy: "An agent handles customer service from intake to resolution (triage, pulling data, issuing refunds, updating CRM).",
        },
        {
          type: "badgeWithCopy",
          text: "Business Impact (ROI)",
          bold: "Massive operational cost reduction",
          rest: " and guaranteed 24/7 service availability.",
        },
      ],
    },
    {
      title: "Reactive:",
      subtitle: "Analyzing past data for insights.",
      details: [
        { type: "badge", text: "AI Agent Development" },
        {
          type: "text",
          label: "Proactive:",
          copy: "An agent monitors market feeds, identifies a pricing opportunity, models the financial impact, and executes the trade.",
        },
        {
          type: "badgeWithCopy",
          text: "Business Impact (ROI)",
          bold: "New revenue generation",
          rest: " and a significant competitive advantage through speed.",
        },
      ],
    },
  ];

  const agenticUseCases = [
    {
      title: "Planning & Execution",
      body:
        'We build agents with the ability to break down a high-level goal (e.g., "Onboard a new vendor") into sequential steps, executing each step and course-correcting based on real-time feedback.',
    },
    {
      title: "Tool Integration",
      body:
        "Agents are designed to utilize your existing tools (APIs, databases, enterprise software like ERP/CRM) effectively, ensuring they fit seamlessly into your existing technology stack.",
    },
    {
      title: "Structural Change Enablement",
      body:
        "For the team leading structural change, agents directly enable organizational redesign by automating entire departments or functions, allowing highly skilled employees to focus solely on high-value strategy and creativity.",
    },
  ];

  const governancePillars = [
    {
      title: ["Safety &", "Alignment"],
      body:
        "We implement strict safety protocols to ensure agents operate within defined business constraints and ethical guidelines, preventing unintended or harmful actions.",
    },
    {
      title: ["Transparency &", "Auditability"],
      body:
        "Every agent action is logged and auditable, providing clarity on the agent's decision-making process and simplifying compliance efforts.",
    },
    {
      title: ["Scalable", "Architecture"],
      body:
        "Agents are architected on your secure cloud environment, ensuring they can handle peak loads and integrate cleanly with your MLOps pipeline for continuous improvement.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "AI Agent Development" },
        ]}
        title="AI Agent Development"
        subtitle="The Future of Autonomous Business Operations"
        video="/videos/AI-Agent.mp4"
      />

      <main className="flex-1">
  
        {/* Intro split */}
        <SolutionsIntroSection
          imageSrc="/images/ai_agents/ai-agent.png"
          imageAlt="AI agents illustration"
          copy={
            <>
              <p>
                <span className="font-semibold text-[#0F2C58]">AI Agents</span>{" "}
                are not just chatbots; they are sophisticated digital workers
                capable of performing complex, multi-step tasks autonomously.
                Investing in AI Agent development means acquiring a scalable,
                highly efficient workforce that executes strategic objectives
                with minimal human oversight, leading to unprecedented
                <span className="font-semibold">
                  {" "}
                  operational efficiency and speed
                </span>
                .
              </p>

              <p className="mt-4">
                <span className="font-semibold text-[#0F2C58]">
                  For the Business Leaders:{" "}
                </span>
                This is about architecting the next generation of AI
                systems—leveraging Large Language Models (LLMs) with planning,
                memory, and tool-use capabilities to automate entire workflows,
                driving structural change across the organization.
              </p>
            </>
          }
          techStack={[
            {  
              src: "/images/tech-stack-logos/langchain.svg",
              alt: "langchain logo",
              wrapperClassName: "w-15 h-6 md:w-20 md:h-8 flex items-center justify-center" },
            { 
              src: "/images/tech-stack-logos/haystack.svg",
              alt: "haystack logo", 
              wrapperClassName: "w-20 h-6 md:w-22 md:h-8 flex items-center justify-center" },
            { 
              src: "/images/tech-stack-logos/pinecone.svg", 
              alt: "Pinecone logo", 
              wrapperClassName: "w-20 h-6 md:w-22 md:h-8 flex items-center justify-center" },
            {
              src: "/images/tech-stack-logos/llamaindex.svg",
              alt: "llamaindex logo",
              wrapperClassName: "w-20 h-6 md:w-22 md:h-8 flex items-center justify-center"
            },
            {
              src: "/images/tech-stack-logos/gemini.svg",
              alt: "gemini logo",
              wrapperClassName: "w-15 h-6 md:w-18 md:h-8 flex items-center justify-center"
            },
          ]}
        />

        <IconCardsSection
          title="What You Get"
          items={[
            {
              title: "Autonomous, Intelligent Digital Workforce",
              icon: "/images/icons/settings-code.svg",
            },
            {
              title: "End‑To‑End Workflow Automation",
              icon: "/images/icons/loader-cube.svg",
            },
            {
              title: "Transparent And Governed AI Operations",
              icon: "/images/icons/cloud-phone.svg",
            },
            {
              title: "Scalable Cloud‑Native Agent Architecture",
              icon: "/images/icons/cloud-db.svg",
            },
            {
              title: "Enhanced Organizational Efficiency",
              icon: "/images/icons/coding-phone.svg",
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
        {/* AI Agent Development Framework */}
        <section className="relative">
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
            <div className="mx-auto max-w-6xl px-3 xl:px-0">
              <div className="space-y-16">
                {/* Strategic Value */}
                <div className="text-center">
                  <h2 className="text-3xl font-medium text-[#111111]">
                    The Strategic Value of Autonomous Agents
                  </h2>
                  <p className="mx-auto mt-4 max-w-3xl text-base text-[#454545]">
                    AI Agents transform core business functions by moving beyond simple task automation to genuine workflow execution.
                  </p>

                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {strategicValueCards.map((card) => (
                      <div
                        key={card.title}
                        className="relative rounded-2xl border border-[#FCD5AC] bg-white/30 p-6 text-left shadow-[0_10px_30px_-18px_rgba(15,44,88,0.35)] card-text-smaller"
                      >
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-2xl font-medium text-[#111111]">{card.title}</h3>
                            <p className="text-base text-gray-800">{card.subtitle}</p>
                          </div>

                          {card.details.map((detail, detailIndex) => {
                            if (detail.type === "badge") {
                              return (
                                <div
                                  key={`${card.title}-badge-${detailIndex}`}
                                  className="inline-flex rounded-lg bg-[#F6F6F6] px-3 py-1 text-sm font-medium text-[#111111]"
                                >
                                  {detail.text}
                                </div>
                              );
                            }

                            if (detail.type === "badgeWithCopy") {
                              return (
                                <div key={`${card.title}-badgecopy-${detailIndex}`} className="space-y-2">
                                  <div className="inline-flex rounded-lg bg-[#F6F6F6] px-3 py-1 text-sm font-medium text-[#111111]">
                                    {detail.text}
                                  </div>
                                  <p className="text-base text-[#454545]">
                                    <span className="font-medium text-[#111111]">{detail.bold}</span>
                                    {detail.rest}
                                  </p>
                                </div>
                              );
                            }

                            return (
                              <p key={`${card.title}-text-${detailIndex}`} className="text-base text-[#454545]">
                                <span className="font-medium text-[#111111]">{detail.label} </span>
                                {detail.copy}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agentic AI – Uses */}
                <div className="text-center">
                  <h3 className="text-2xl font-medium leading-[38px] text-gray-600">Agentic AI - Uses</h3>
                  <p className="mx-auto mt-4 max-w-4xl text-base text-[#454545]">
                  Our focus is on bridging the gap between complex business requirements and technical innovation by building agents that are reliable, governed, and integrated into your current systems.
                  </p>

                  <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {agenticUseCases.map((useCase) => (
                      <div
                        key={useCase.title}
                        className="rounded-2xl border border-[#FCD5AC] bg-white/30 p-6 text-left shadow-[0_10px_30px_-18px_rgba(15,44,88,0.35)] card-text-smaller h-full flex flex-col"
                      >
                        <h4 className="text-2xl font-medium text-[#111111] h-[60px] flex items-start">
                          {useCase.title}
                        </h4>
                        <p className="mt-3 text-base text-[#454545]">
                          {useCase.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Building Trustworthy and Governed Agents */}
                <div className="text-center">
                  <h3 className="text-[26px] font-medium leading-[38px] text-gray-600 sm:text-[28px]">
                    Building Trustworthy and Governed Agents
                  </h3>
                  <p className="mx-auto mt-4 max-w-4xl text-[16px] text-[#454545] sm:text-[18px]">
                    As leaders in AI we prioritize a governance framework essential for scaling autonomous systems.
                  </p>

                  <div className="mt-10 rounded-2xl border border-[#FCD5AC] bg-white/30 p-6 shadow-[0_10px_30px_-18px_rgba(15,44,88,0.35)] sm:p-10 card-text-smaller">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                      {governancePillars.map((pillar, index) => (
                        <Fragment key={pillar.title.join(" ")}>
                          <div className="flex-1 text-left">
                            <h4 className="text-2xl font-medium leading-[26px] text-[#E45412]">
                              {pillar.title.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </h4>
                            <p className="mt-4 text-base text-[#454545]">{pillar.body}</p>
                          </div>
                          {index < governancePillars.length - 1 && (
                            <div className="hidden lg:flex lg:h-full lg:w-[2px] lg:justify-center">
                             <Image
                      src="/images/raar/lineraar.svg"
                      alt=""
                      width={2}
                      height={320}
                      className="w-auto h-[200px]"
                      aria-hidden
                    />
                            </div>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundDots>
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
       <SolutionsNavigationSection
         previousHref="/solutions/ai-solutions-and-services"
         title="Discover Next Step of Your AI Journey"
         cta={{
           href: "/solutions/cyber-security-solutions",
           label: "Cyber Security Solutions",
         }}
       />
      </main>

      <Footer />
    </div>
  );
}
