// app/ai-agent-development/page.tsx
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AIAgentDevelopment() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      {/* Hero background is behind header by stacking a fixed/absolute layer */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[360px] md:h-[420px] bg-[radial-gradient(1200px_600px_at_50%_-200px,#0F2C58_40%,#071A38_70%,#071A38_100%)]" />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">
            {/* Breadcrumb */}
            <p className="text-sm/6 text-white/80">
              Home <span className="mx-2 text-white/50">›</span> AI Agent Development
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              AI Agent Development
            </h1>
            <p className="mt-3 max-w-2xl text-white/80">
              The Future of Autonomous Business Operations
            </p>
          </div>
        </section>

        {/* Intro split */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="justify-self-center">
              <Image
                src="/placeholder.png"
                alt="Agents dashboard illustration"
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
                  <Image src="/placeholder.svg" alt="icon" width={28} height={28} />
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
                  <Image src="/placeholder.svg" alt="icon" width={28} height={28} />
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
                  <div className="mb-4 h-7 w-7">
                    <Image src="/placeholder.svg" alt="icon" width={28} height={28} />
                  </div>
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
                  <div className="mb-4 h-7 w-7">
                    <Image src="/placeholder.svg" alt="icon" width={28} height={28} />
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#0F2C58]">{c.title}</h4>
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
              "Autonomous, Intelligent Digital Workforce",
              "End‑To‑End Workflow Automation",
              "Transparent And Governed AI Operations",
              "Scalable Cloud‑Native Agent Architecture",
              "Enhanced Organizational Efficiency",
            ].map((label) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-[#F2E8E1] bg-white p-6 text-center"
              >
                <div className="mb-3 h-11 w-11 rounded-full bg-[#FFE3D3] grid place-items-center">
                  <Image src="/placeholder.svg" alt="value icon" width={22} height={22} />
                </div>
                <p className="text-[13.5px] text-[#0F2C58]">{label}</p>
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
                  src="/placeholder.png"
                  alt="Agentic AI illustration"
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
              className="rounded-full bg-[#FF6A3D] px-6 py-3 text-white text-sm font-medium shadow-[0_8px_20px_-6px_rgba(255,106,61,0.6)] hover:brightness-110 transition"
              type="button"
            >
              Build Autonomous Workflows →
            </button>
          </div>
        </section>

        {/* Bottom wave band for footer continuity */}
        <div className="relative overflow-hidden">
          <div className="h-10 w-full bg-[conic-gradient(from_190deg_at_10%_120%,#FBE0D6,transparent_30%)]" />
          <div className="h-28 w-full bg-[radial-gradient(1200px_500px_at_50%_100px,#0F2C58_30%,#071A38_75%)]" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
