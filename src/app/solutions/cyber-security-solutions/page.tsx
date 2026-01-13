"use client";

// app/cyber-security-solutions/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";
import BackgroundDots from "@/components/ui/background";

export default function CyberSecuritySolutions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Cyber Security Solutions" },
        ]}
        title="Cyber Security Solutions"
        subtitle="Autonomous Defense for the AI Age"
        video="/videos/Cyber-Security.mp4"
      />

      <main className="flex-1">

        {/* Intro split */}
        <section className="mx-auto max-w-7xl px-[5%] py-20">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12">

    {/* LEFT — Illustration */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/images/cyber/brainimage.png"
        alt="Cyber security illustration"
        width={600}
        height={380}
        className="h-auto w-[500px] sm:w-[500px] md:w-[500px] rounded-xl"
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
    <div className="text-[15.5px] text-[#3A4A5F] max-w-md flex flex-col justify-center">

      <p>
        <span className="font-semibold text-[#0F2C58]">Cyber Security environment</span> is under attack by AI-driven adversaries who operate at machine speed, enabling
        <span className="font-semibold"> mass personalization, rapid reconnaissance, and cross-language deception. Legacy, rule-based defenses </span>
        are no longer sufficient against these adaptive threats.
      </p>

      <p className="mt-4">
        We don't offer generic security; we build
        <span className="font-semibold text-[#0F2C58]"> AI-driven, agentic security architectures</span> that provide
        <span className="font-semibold"> autonomous resilience</span>—a fusion of human judgment and AI precision.
      </p>

      <div className="mt-8">
    <h2 className="text-[24px] font-bold text-[#0B1B2B]">Our Tech Stack</h2>
    <div className="flex flex-wrap gap-4">
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/afetrust.svg"
          alt="AFETRUST logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/mcafee.svg"
          alt="mcafee logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/mco.svg"
          alt="mco logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-20 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/nordvpn.svg"
          alt="nordvpn logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-15 h-12 flex items-center justify-center">
        <Image
          src="/images/tech-stack-logos/concentrix.svg"
          alt="concentrix logo"
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


        {/* AI-Driven Cyber Security Framework */}
        <BackgroundDots
          className="py-16 "
          spacing={36}
          dotSize={2.5}
          backgroundColor="#FEECD6"
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <section className="max-w-7xl mx-auto px-[5%]">
            {/* Cyber Threat in the AI Era */}
            <div className="flex flex-col gap-10 items-center mb-16">
              <div className="flex flex-col gap-8 items-center">
                <h2 className="text-[32px] md:text-[38px] font-medium leading-[40px] md:leading-[48px] text-[#111111] text-center">
                  Cyber Threat in the AI Era
                </h2>
                <div className="flex flex-col gap-5 items-center text-center max-w-[924px] px-4">
                  <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545]">
                    A clear escalation from simple phishing to strategic, systemic attacks.
                  </p>
                </div>
              </div>

              {/* Three Risk Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[{
                title: 'AI-Generated Phishing & Deepfakes',
                impact: '<span style="font-weight: 600; color: #111111;">High Likelihood, Critical Impact:</span> Enables <span style="font-weight: 600; color: #111111;">$25.6M</span> deepfake fraud incidents and dominates basic web-app breach patterns.'
              }, {
                title: 'Living-Off-The-Land (LotL) & Identity Abuse',
                impact: '<span style="font-weight: 600; color: #111111;">High Likelihood: Stolen credentials</span> are a primary pivot point, driving the <span style="font-weight: 600; color: #111111;">global average cost per breach to $4.40M.</span>'
              }, {
                title: 'Ransomware / Extortion',
                impact: '<span style="font-weight: 600; color: #111111;">Critical Impact:</span> Downtime is the largest driver of loss. Healthcare crises have showed <span style="font-weight: 600; color: #111111;">>50% revenue disruption</span> for providers.'
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
                          Business Impact (Risk & Cost)
                        </span>
                      </div>
                      <p 
                        className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]"
                        dangerouslySetInnerHTML={{ __html: item.impact }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>

            {/* The AI-Driven Cyber Resilience Framework */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-[24px] md:text-[28px] font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  The AI-Driven Cyber Resilience Framework
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                  We implement a layered model to counter these threats, shifting your Security Operations Center (SOC) from a reactive model to an <span className="font-semibold text-[#111111]">agent-based intelligence</span> system.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[{
                  title: 'Perception',
                  subtitle: '(Detection)',
                  desc: 'AI Agents ingest and correlate telemetry across your entire environment (endpoint, identity, cloud). They use <span style="font-weight: 600; color: #111111;">continuous behavioral baselining</span> to flag credential abuse and use <span style="font-weight: 600; color: #111111;">NLP models</span> for deepfake detection.'
                }, {
                  title: 'Cognition',
                  subtitle: '(Reasoning)',
                  desc: 'We deploy <span style="font-weight: 600; color: #111111;">analyst co-pilots</span> embedded in your SIEM/SOAR to interpret complex alerts and <span style="font-weight: 600; color: #111111;">autonomous correlation engines</span> to infer patterns without static signatures.'
                }, {
                  title: 'Action',
                  subtitle: '(Response)',
                  desc: 'This is the game-changer. <span style="font-weight: 600; color: #111111;">Reinforcement-learning (RL) responders</span> execute rapid containment actions: isolating endpoints, revoking tokens, and blocking command-and-control (C2) in <span style="font-weight: 600; color: #111111;">seconds</span>.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#111111]">
                        {item.title} <span className="font-medium text-base text-[#111111]">{item.subtitle}</span>
                      </h4>
                      <p 
                        className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive-Focused Roadmap */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-[24px] md:text-[28px] font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  A Clear, Executive-Focused Roadmap
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545] max-w-[860px]">
                  We provide a phased roadmap to transition from legacy defense to autonomous resilience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[{
                  chip: 'Stabilize',
                  chipColor: 'text-[#e45412] bg-[#fff3ee] border-[#ffbfa8]',
                  focusArea: 'Foundation & Core Risk',
                  action: 'Deploy <span style="font-weight: 600; color: #111111;">Phishing-Resistant MFA</span> (FIDO2/WebAuthn) and enforce out-of-band verification for payments to counter deepfakes.'
                }, {
                  chip: 'Integrate',
                  chipColor: 'text-[#e45412] bg-[#fff3ee] border-[#ffbfa8]',
                  focusArea: 'Automation & Supply Chain',
                  action: 'Integrate <span style="font-weight: 600; color: #111111;">AI co-pilots</span> into SIEM/SOAR to automate Tier-1 triage. Implement <span style="font-weight: 600; color: #111111;">SBOM policy</span> and vendor SLAs for supply-chain control.'
                }, {
                  chip: 'Automate',
                  chipColor: 'text-[#e45412] bg-[#fff3ee] border-[#ffbfa8]',
                  focusArea: 'Autonomous Defense',
                  action: 'Deploy an <span style="font-weight: 600; color: #111111;">Agent Swarm</span> (e.g., Identity Guard, RL Responder) to achieve rapid containment.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className={`rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit border ${item.chipColor}`}>
                        <span className="text-[14px] font-medium">
                          {item.chip}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-gray-100 rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Focus Area
                          </span>
                        </div>
                        <p className="text-[16px] md:text-[18px] leading-normal text-gray-600">
                          {item.focusArea}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-gray-100 rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Key Action
                          </span>
                        </div>
                        <p 
                          className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]"
                          dangerouslySetInnerHTML={{ __html: item.action }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </BackgroundDots>

        {/* Our Solutions */}
        <section className="mx-auto max-w-7xl px-[5%] py-16">
          <h2 className="text-center text-4xl font-medium leading-[48px] text-black">
                Advantages
          </h2>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
            {[
              {
                title: "AI‑Driven Detection And Rapid Response",
                text: "",
                icon: "/images/icons/settings-phone.svg",
              },
              {
                title: "Resilience Roadmap With Measurable KPIs",
                text: "",
                icon: "/images/icons/people-search.svg",
              },
              {
                title: "Reduced Breach Costs And Recovery Times",
                text: "",
                icon: "/images/icons/settings-money.svg",
              },
              {
                title: "Compliance And Governance Integration",
                text: "",
                icon: "/images/icons/settings-code.svg",
              },
              {
                title: "Continuous Autonomous Protection",
                text: "",
                icon: "/images/icons/connection.svg",
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
              href="/solutions/ai-agent-development"
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
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Ready to Solve</h2>
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">What's Next With OphoTech?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-[#3A4A5F]">
            Together, we connect, create, and evolve.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton onClick={() => setIsModalOpen(true)}>
              Let's Start
            </PrimaryButton>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
