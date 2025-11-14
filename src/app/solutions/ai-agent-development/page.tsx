"use client";

// app/ai-agent-development/page.tsx
import Image from "next/image";
import { Fragment, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";
import BackgroundDots from "@/components/ui/background";

export default function AIAgentDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const strategicValueCards = [
    {
      icon: "/images/data-monetize/gear.svg",
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
      icon: "/images/cloud-integrations/paper.svg",
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
          { label: "Solutions", href: "/" },
          { label: "AI Agent Development" },
        ]}
        title="AI Agent Development"
        subtitle="The Future of Autonomous Business Operations"
        contentAlignment="center"
      />

      <main className="flex-1">

        {/* Intro split */}
        <section className="mx-auto max-w-7xl px-6 py-20">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12">

    {/* LEFT — Illustration */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/images/ai_agents/llm.png"
        alt="AI agents illustration"
        width={520}
        height={380}
        className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl"
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
    <div className="flex flex-col justify-center text-sm text-[#3A4A5F] max-w-md">

      <p>
        <span className="font-semibold text-[#0F2C58]">AI Agents</span> are not just chatbots; they are sophisticated digital workers capable of performing complex, multi-step tasks autonomously. 
        Investing in AI Agent development means acquiring a scalable, highly efficient workforce that executes strategic objectives with minimal human oversight, leading to unprecedented 
        <span className="font-semibold"> operational efficiency and speed</span>.
      </p>

      <p className="mt-4">
        <span className="font-semibold text-[#0F2C58]">For the Business Leaders:</span> 
        This is about architecting the next generation of AI systems—leveraging Large Language Models (LLMs) with planning, memory, and tool-use capabilities to automate entire workflows, driving structural change across the organization.
      </p>

    </div>

  </div>
</section>


        {/* AI Agent Development Framework */}
        <section className="relative">
      {/* AI Solutions & Services Section */}
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
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="space-y-16">
                {/* Strategic Value */}
                <div className="text-center">
                  <h2 className="text-[34px] font-medium leading-[48px] text-[#111111] sm:text-[38px]">
                    The Strategic Value of Autonomous Agents
                  </h2>
                  <div className="mx-auto mt-4 flex max-w-4xl justify-center">
                    <Image
                      src="/images/horizontalline.svg"
                      alt=""
                      width={800}
                      height={4}
                      className="h-[4px] w-full max-w-3xl"
                      aria-hidden
                    />
                  </div>
                  <p className="mx-auto mt-4 max-w-3xl text-[16px] text-[#454545] sm:text-[18px]">
                    AI Agents transform core business functions by moving beyond simple task automation to genuine workflow execution.
                  </p>

                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {strategicValueCards.map((card) => (
                      <div
                        key={card.title}
                        className="relative rounded-2xl border border-[#FCD5AC] bg-white/30 p-6 text-left shadow-[0_10px_30px_-18px_rgba(15,44,88,0.35)]"
                      >
                        <div className="mb-4 h-12 w-12 rounded-xl bg-[#FFF4EB] p-3">
                          <Image src={card.icon} alt={`${card.title} icon`} width={32} height={32} className="h-6 w-6" />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-[22px] font-medium text-[#111111]">{card.title}</h3>
                            <p className="text-[16px] text-[#555555]">{card.subtitle}</p>
                          </div>

                          {card.details.map((detail, detailIndex) => {
                            if (detail.type === "badge") {
                              return (
                                <div
                                  key={`${card.title}-badge-${detailIndex}`}
                                  className="inline-flex rounded-lg bg-[#F6F6F6] px-3 py-1 text-[14px] font-medium text-[#111111]"
                                >
                                  {detail.text}
                                </div>
                              );
                            }

                            if (detail.type === "badgeWithCopy") {
                              return (
                                <div key={`${card.title}-badgecopy-${detailIndex}`} className="space-y-2">
                                  <div className="inline-flex rounded-lg bg-[#F6F6F6] px-3 py-1 text-[14px] font-medium text-[#111111]">
                                    {detail.text}
                                  </div>
                                  <p className="text-[16px] text-[#454545]">
                                    <span className="font-medium text-[#111111]">{detail.bold}</span>
                                    {detail.rest}
                                  </p>
                                </div>
                              );
                            }

                            return (
                              <p key={`${card.title}-text-${detailIndex}`} className="text-[16px] text-[#454545]">
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
                  <h3 className="text-[26px] font-medium leading-[38px] text-[#111111] sm:text-[28px]">Agentic AI - Uses</h3>
                  <p className="mx-auto mt-4 max-w-4xl text-[16px] text-[#454545] sm:text-[18px]">
                    Our focus is on{" "}
                    <span className="font-semibold text-[#0B1B2B]">
                      translating complex business challenges into clear technology opportunities
                    </span>{" "}
                    by building agents that are reliable, governed, and integrated into your current systems.
                  </p>

                  <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {agenticUseCases.map((useCase) => (
                      <div
                        key={useCase.title}
                        className="rounded-2xl border border-[#FCD5AC] bg-white/30 p-6 text-left shadow-[0_10px_30px_-18px_rgba(15,44,88,0.35)]"
                      >
                        <h4 className="text-[22px] font-medium text-[#111111]">{useCase.title}</h4>
                        <p className="mt-3 text-[16px] text-[#454545]">{useCase.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Building Trustworthy and Governed Agents */}
                <div className="text-center">
                  <h3 className="text-[26px] font-medium leading-[38px] text-[#111111] sm:text-[28px]">
                    Building Trustworthy and Governed Agents
                  </h3>
                  <p className="mx-auto mt-4 max-w-4xl text-[16px] text-[#454545] sm:text-[18px]">
                    As leaders in AI we prioritize a governance framework essential for scaling autonomous systems.
                  </p>

                  <div className="mt-10 rounded-2xl border border-[#FCD5AC] bg-white/30 p-6 shadow-[0_10px_30px_-18px_rgba(15,44,88,0.35)] sm:p-10">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                      {governancePillars.map((pillar, index) => (
                        <Fragment key={pillar.title.join(" ")}>
                          <div className="flex-1 text-left">
                            <h4 className="text-[22px] font-medium leading-[26px] text-[#E45412]">
                              {pillar.title.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </h4>
                            <p className="mt-4 text-base text-[#454545] lg:text-base">{pillar.body}</p>
                          </div>
                          {index < governancePillars.length - 1 && (
                            <div className="hidden lg:flex lg:h-full lg:w-[2px] lg:justify-center">
                              <Image
                                src="/images/raar/lineraar.svg"
                                alt=""
                                width={2}
                                height={180}
                                className="h-[200px] w-[2px]"
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

        {/* What You Get */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-[32px] font-medium leading-[48px] text-[#0B1B2B]">
            What You Get
          </h2>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
            {[
              {
                title: "Autonomous, Intelligent Digital Workforce",
                text: "",
                icon: "/images/icons/settings-code.svg",
              },
              {
                title: "End‑To‑End Workflow Automation",
                text: "",
                icon: "/images/icons/loader-cube.svg",
              },
              {
                title: "Transparent And Governed AI Operations",
                text: "",
                icon: "/images/icons/cloud-phone.svg",
              },
              {
                title: "Scalable Cloud‑Native Agent Architecture",
                text: "",
                icon: "/images/icons/cloud-db.svg",
              },
              {
                title: "Enhanced Organizational Efficiency",
                text: "",
                icon: "/images/icons/coding-phone.svg",
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

       {/* Agentic AI for Business */}
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
         <section className="mx-auto max-w-7xl px-6">
           <div className="grid items-center gap-10 md:grid-cols-3">
             <div>
               <h2 className="text-4xl text-[#0B1B2B]">Agentic AI for Business</h2>
               <p className="mt-5 text-lg text-[#3A4A5F]">
                 We design safe, governed agents that execute strategic objectives autonomously while preserving control and trust.
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
                 src="/images/ai_agents/workingAI.png"
                 alt="Agentic AI for business illustration"
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
            Discover the key frameworks and system requirements to build your first AI Agent prototype and see how autonomous intelligence can accelerate real business outcomes.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton onClick={() => setIsModalOpen(true)}>
              Build Autonomous Workflows 
            </PrimaryButton>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
