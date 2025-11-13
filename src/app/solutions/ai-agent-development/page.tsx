"use client";

// app/ai-agent-development/page.tsx
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { ContactModal } from "@/components/forms/ContactModal";

export default function AIAgentDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="justify-self-center">
              <Image
                src="/images/ai_agents/aiagents.png"
                alt="AI agents illustration"
                width={520}
                height={380}
                className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
                priority
              />
            </div>
            <div className="text-[15.5px] text-[#3A4A5F]">
              <p>
                <span className="font-semibold text-[#0F2C58]">AI Agents</span> are not just chatbots; they are sophisticated digital workers capable of performing complex, multi‑step tasks autonomously. Investing in AI Agent development means acquiring a scalable, highly efficient workforce that executes strategic objectives with minimal human oversight, leading to unprecedented <span className="font-semibold">operational efficiency and speed</span>.
              </p>
              <p className="mt-4">
                <span className="font-semibold text-[#0F2C58]">For the Business Leaders:</span> This is about architecting the next generation of AI systems—leveraging Large Language Models (LLMs) with planning, memory, and tool‑use capabilities to automate entire workflows, driving structural change across the organization.
              </p>
            </div>
          </div>
        </section>

        {/* Dotted field sections */}
        <section className="relative">
          <div
            className="absolute inset-0 -z-10"
            aria-hidden
            style={{
              backgroundImage: "radial-gradient(#F0F3F8 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Strategic Value */}
          <div className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
              The Strategic Value of Autonomous Agents
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[14.5px] text-[#3A4A5F]">
              AI Agents transform core business functions by moving beyond simple task automation to genuine workflow execution.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Simple Task */}
              <div className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.12)]">
                <div className="mb-4 h-7 w-7">
                  <Image src="/images/data-monetize/gear.svg" alt="icon" width={28} height={28} className="h-7 w-7" />
                </div>
                <h3 className="text-[16.5px] font-semibold text-[#0F2C58]">
                  Simple Task:
                </h3>
                <p className="mt-1 text-[14.5px] text-[#0F2C58]/80">
                  Automating a single data entry point.
                </p>
                <div className="mt-4 space-y-3 text-[14px] text-[#3A4A5F]">
                  <p>
                    <span className="font-medium text-[#0F2C58]">AI Agent Development</span>
                  </p>
                  <p>
                    <span className="font-medium text-[#0F2C58]">Complex Workflow:</span> An agent handles customer service from intake to resolution (triage, pulling data, issuing refunds, updating CRM).
                  </p>
                  <p>
                    <span className="font-medium text-[#0F2C58]">Business impact (RoI):</span> Massive operational cost reduction and guaranteed 24/7 service availability.
                  </p>
                </div>
              </div>

              {/* Reactive */}
              <div className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.12)]">
                <div className="mb-4 h-7 w-7">
                  <Image src="/images/cloud-integrations/paper.svg" alt="icon" width={28} height={28} className="h-7 w-7" />
                </div>
                <h3 className="text-[16.5px] font-semibold text-[#0F2C58]">
                  Reactive:
                </h3>
                <p className="mt-1 text-[14.5px] text-[#0F2C58]/80">
                  Analyzing past data for insights.
                </p>
                <div className="mt-4 space-y-3 text-[14px] text-[#3A4A5F]">
                  <p>
                    <span className="font-medium text-[#0F2C58]">AI Agent Development</span>
                  </p>
                  <p>
                    <span className="font-medium text-[#0F2C58]">Proactive:</span> An agent monitors market feeds, identifies a pricing opportunity, models the financial impact, and executes the trade.
                  </p>
                  <p>
                    <span className="font-medium text-[#0F2C58]">Business impact (RoI):</span> New revenue generation and a significant competitive advantage through speed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agentic AI – Uses */}
          <div className="mx-auto max-w-7xl px-6 pb-10">
            <h3 className="text-center text-[18px] font-semibold text-[#0B1B2B]">
              Agentic AI – Uses
            </h3>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[14.5px] text-[#3A4A5F]">
              Our focus is on translating complex business challenges into clear technology opportunities by building agents that are reliable, governed, and integrated into your current systems.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Planning & Execution",
                  body:
                    "We build agents with the ability to break down a high‑level goal, set up prompts, ‘onboard a new vendor’, into sequential steps, executing each step and course‑correcting based on real‑time feedback.",
                },
                {
                  title: "Tool Integration",
                  body:
                    "Agents are designed to utilize your existing tools (APIs, databases, enterprise software like ERP/CRM) effectively, ensuring they fit seamlessly into your existing technology stack.",
                },
                {
                  title: "Structural Change Enablement",
                  body:
                    "For the team leading structural change, agents directly augment organizational redesign by automating entire departments of functions, allowing highly skilled employees to focus solely on high‑value strategy and creativity.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.12)]"
                >
                  <h4 className="text-[16px] font-semibold text-[#0F2C58]">{c.title}</h4>
                  <p className="mt-2 text-[14px] text-[#3A4A5F]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Building Trustworthy and Governed Agents */}
          <div className="mx-auto max-w-7xl px-6 pb-12">
            <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
              Building Trustworthy and Governed Agents
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[14.5px] text-[#3A4A5F]">
              As leaders in AI governance, we build agents that operate within your defined business constraints.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Safety & Alignment",
                  body:
                    "We implement strict safety protocols to ensure agents operate within defined business constraints and ethical guidelines, preventing unintended or harmful actions.",
                },
                {
                  title: "Transparency & Auditability",
                  body:
                    "Every agent action is logged and auditable, providing clarity on the agent’s decision‑making process and simplifying compliance efforts.",
                },
                {
                  title: "Scalable Architecture",
                  body:
                    "Agents are architected on your secure cloud environment, ensuring they can handle peak loads and integrate cleanly with your MLOps pipeline for continuous improvement.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.12)]"
                >
                  <h4 className="text-xl font-semibold text-orange-500">{c.title}</h4>
                  <p className="mt-2 text-[14px] text-[#3A4A5F]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">What You Get</h2>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { label: "Autonomous, Intelligent Digital Workforce", icon: "/images/icons/settings-code.svg" },
              { label: "End‑To‑End Workflow Automation", icon: "/images/icons/loader-cube.svg" },
              { label: "Transparent And Governed AI Operations", icon: "/images/icons/cloud-phone.svg" },
              { label: "Scalable Cloud‑Native Agent Architecture", icon: "/images/icons/cloud-db.svg" },
              { label: "Enhanced Organizational Efficiency", icon: "/images/icons/coding-phone.svg" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-xl border border-[#F2E8E1] bg-white p-6 text-center"
              >
                <div className="mb-3 h-11 w-11 rounded-full bg-[#FFE3D3] grid place-items-center">
                  <Image src={item.icon} alt={`${item.label} icon`} width={22} height={22} className="h-5 w-5" />
                </div>
                <p className="text-[13.5px] text-[#0F2C58]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agentic AI for Business */}
        <section className="relative">
          <div
            className="absolute inset-0 -z-10"
            aria-hidden
            style={{
              backgroundImage: "radial-gradient(#F0F3F8 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-[#0B1B2B]">Agentic AI for Business</h2>
                <p className="mt-3 text-[14.5px] text-[#3A4A5F]">
                  We design safe, governed agents that execute strategic objectives autonomously while preserving control and trust.
                </p>
              </div>
              <div className="justify-self-center">
                <Image
                  src="/images/ai_agents/aiagentsworking.png"
                  alt="Agentic AI for business illustration"
                  width={520}
                  height={360}
                  className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl shadow-[0_12px_32px_-10px_rgba(15,44,88,0.25)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Get Started</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-[#3A4A5F]">
            Discover the key frameworks and system requirements to build your first AI Agent prototype and see how autonomous intelligence can accelerate real business outcomes.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-[#FF6A3D] px-6 py-3 text-white text-sm font-medium shadow-[0_8px_20px_-6px_rgba(255,106,61,0.6)] hover:brightness-110 transition"
              type="button"
            >
              Build Autonomous Workflows →
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
