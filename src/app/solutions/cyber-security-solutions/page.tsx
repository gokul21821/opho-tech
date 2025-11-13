// app/cyber-security-solutions/page.tsx
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CyberSecuritySolutions() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      {/* Hero background behind header */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[360px] md:h-[420px] bg-[radial-gradient(1200px_600px_at_50%_-200px,#0F2C58_40%,#071A38_70%,#071A38_100%)]" />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">
            <p className="text-sm/6 text-white/80">
              Home <span className="mx-2 text-white/50">›</span> Cyber Security Solutions
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Cyber Security Solutions
            </h1>
            <p className="mt-3 max-w-2xl text-white/80">
              Autonomous Defense for the AI Age
            </p>
          </div>
        </section>

        {/* Intro split */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="justify-self-center">
              <Image
                src="/placeholder.png"
                alt="Shield illustration"
                width={520}
                height={380}
                className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
                priority
              />
            </div>
            <div className="text-[15.5px] text-[#3A4A5F]">
              <p>
                <span className="font-semibold text-[#0F2C58]">Cyber Security environment</span> is under attack by AI‑driven adversaries who operate at machine speed, enabling mass personalization, rapid reconnaissance, and cross‑language deception. Legacy, rule‑based defenses are no longer sufficient against these adaptive threats.
              </p>
              <p className="mt-4">
                We don’t offer generic security; we build <span className="font-semibold text-[#0F2C58]">AI‑driven, agentic security architectures</span> that provide <span className="font-semibold">autonomous resilience</span>—a fusion of human judgment and AI precision.
              </p>
            </div>
          </div>
        </section>

        {/* Dotted background sections */}
        <section className="relative">
          <div
            className="absolute inset-0 -z-10"
            aria-hidden
            style={{
              backgroundImage: "radial-gradient(#F0F3F8 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Cyber Threat in the AI Era */}
          <div className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
              Cyber Threat in the AI Era
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[14.5px] text-[#3A4A5F]">
              AI adversaries can weaponize phishing to strategic, systemic attacks.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "AI‑Generated Phishing & Deepfakes",
                  k: "Business impact (Risk & Cost)",
                  body:
                    "High Likelihood, Critical Impact: Enables $25.6M deepfake fraud incidents and dominates basic web‑app breach patterns.",
                },
                {
                  title: "Living‑Off‑The‑Land (LotL) & Identity Abuse",
                  k: "Business impact (Risk & Cost)",
                  body:
                    "High Likelihood: Stolen credentials are a primary pivot point, driving the global average cost per breach to $4.40M.",
                },
                {
                  title: "Ransomware/ Extortion",
                  k: "Business impact (Risk & Cost)",
                  body:
                    "Critical Impact: Downtime is the largest driver of loss. Healthcare crises have showed >50% revenue disruption for providers.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.12)]"
                >
                  <div className="mb-4 h-7 w-7">
                    <Image src="/placeholder.svg" alt="icon" width={28} height={28} />
                  </div>
                  <h3 className="text-[16.5px] font-semibold text-[#0F2C58]">{c.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#0F2C58]/70">
                    {c.k}
                  </p>
                  <p className="mt-2 text-[14px] text-[#3A4A5F]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Driven Cyber Resilience Framework */}
          <div className="mx-auto max-w-7xl px-6 pb-10">
            <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
              The AI‑Driven Cyber Resilience Framework
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[14.5px] text-[#3A4A5F]">
              We implement a layered model to counter these threats, shifting your SOC from a reactive model to an agent‑based intelligence system.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Perception (Detection)",
                  body:
                    "AI agents ingest and correlate telemetry across your entire environment (endpoint, identity, network). They use continuous behavioral baselining to detect anomalies and use NLP models for deepfake detection.",
                },
                {
                  title: "Cognition (Reasoning)",
                  body:
                    "We deploy agentic AI co‑pilots embedded in your SIEM/SOAR to interpret complex alerts and autonomously correlate signals to infer patterns without static signatures.",
                },
                {
                  title: "Action (Response)",
                  body:
                    "This is the game‑changer. Reinforcement‑learning (RL) responders execute rapid containment across identities, rotating keys/tokens, and blocking command‑and‑control (C2) in seconds.",
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

          {/* Executive-Focused Roadmap */}
          <div className="mx-auto max-w-7xl px-6 pb-12">
            <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
              A Clear, Executive‑Focused Roadmap
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[14.5px] text-[#3A4A5F]">
              We provide a phased roadmap to transition from legacy defense to autonomous resilience.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  chip: "Stabilize",
                  focus: "Foundation & Core Risk",
                  action:
                    "Deploy Phishing‑Resistant MFA (FIDO2/WebAuthn) and enforce out‑of‑band verification for payments to counter deepfakes.",
                },
                {
                  chip: "Integrate",
                  focus: "Automation & Supply Chain",
                  action:
                    "Integrate AI co‑pilots into SIEM/SOAR to automate Tier‑1 triage. Implement SBOM policy and vendor SLAs for supply‑chain control.",
                },
                {
                  chip: "Automate",
                  focus: "Autonomous Defense",
                  action:
                    "Deploy an Agent Swarm (e.g., Identity Guard, RL Responder) to achieve rapid containment.",
                },
              ].map((card) => (
                <div
                  key={card.chip}
                  className="rounded-xl border border-[#F6D8C8] bg-[#FFF8F3] p-5"
                >
                  <span className="inline-block rounded-full border border-[#FFBFA8] bg-[#FFF3EE] px-3 py-1 text-xs font-medium text-[#FF6A3D]">
                    {card.chip}
                  </span>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#0F2C58]/70">
                    Focus Area
                  </p>
                  <p className="text-[15px] font-semibold text-[#0F2C58]">{card.focus}</p>
                  <p className="mt-2 text-[14px] text-[#3A4A5F]">{card.action}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Our Solutions</h2>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              "AI‑Driven Detection And Rapid Response",
              "Resilience Roadmap With Measurable KPIs",
              "Reduced Breach Costs And Recovery Times",
              "Compliance And Governance Integration",
              "Continuous Autonomous Protection",
            ].map((label) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-[#F2E8E1] bg-white p-6 text-center"
              >
                <div className="mb-3 h-11 w-11 rounded-full bg-[#FFE3D3] grid place-items-center">
                  <Image src="/placeholder.svg" alt="solution icon" width={22} height={22} />
                </div>
                <p className="text-[13.5px] text-[#0F2C58]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages with side illustration */}
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
            <h2 className="text-2xl font-semibold text-[#0B1B2B]">Advantages</h2>
            <p className="mt-2 text-[14.5px] text-[#3A4A5F]">
              Measuring Success: KPIs for the Board
            </p>

            <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
              <ul className="space-y-4 text-[14.5px] text-[#3A4A5F]">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#FF6A3D]" />
                  <span className="font-medium text-[#0F2C58]">Loss Avoidance:</span> Target a reduction in loss within 12 months by achieving faster containment.
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#FF6A3D]" />
                  <span className="font-medium text-[#0F2C58]">Containment Speed (MTTI/MTTC):</span> Reduce mean days, with an ultimate goal of days.
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#FF6A3D]" />
                  <span className="font-medium text-[#0F2C58]">Ransomware Resilience:</span> Aim for time to restore and increase the percentage of recovery without paying the ransom.
                </li>
              </ul>

              <div className="justify-self-center">
                <Image
                  src="/placeholder.png"
                  alt="Security dashboard illustration"
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
            Understand how AI‑driven defense can cut breach costs, strengthen compliance, and protect your business from evolving threats in real time.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              className="rounded-full bg-[#FF6A3D] px-6 py-3 text-white text-sm font-medium shadow-[0_8px_20px_-6px_rgba(255,106,61,0.6)] hover:brightness-110 transition"
              type="button"
            >
              Activate AI‑driven defense →
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
