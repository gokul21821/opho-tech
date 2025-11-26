"use client";

// app/cyber-security-solutions/page.tsx
import Image from "next/image";
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
          { label: "Solutions", href: "/" },
          { label: "Cyber Security Solutions" },
        ]}
        title="Cyber Security Solutions"
        subtitle="Autonomous Defense for the AI Age"
        contentAlignment="center"
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
                  <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#454545]">
                    A clear escalation from simple phishing to strategic, systemic attacks.
                  </p>
                </div>
              </div>

              {/* Three Risk Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[{
                  title: 'AI-Generated Phishing & Deepfakes',
                  icon: '/images/data-monetize/gear.svg',
                  impact: 'High Likelihood, Critical Impact: Enables $25.6M deepfake fraud incidents and dominates basic web-app breach patterns.'
                }, {
                  title: 'Living-Off-The-Land (LotL) & Identity Abuse',
                  icon: '/images/cloud-integrations/paper.svg',
                  impact: 'High Likelihood: Stolen credentials are a primary pivot point, driving the global average cost per breach to $4.40M.'
                }, {
                  title: 'Ransomware / Extortion',
                  icon: '/images/cyber/bag.svg',
                  impact: 'Critical Impact: Downtime is the largest driver of loss. Healthcare crises have showed >50% revenue disruption for providers.'
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
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#111111]">
                        {item.title}
                      </h4>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Business Impact (Risk & Cost)
                          </span>
                        </div>
                        <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                          {item.impact}
                        </p>
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
                  desc: 'AI Agents ingest and correlate telemetry across your entire environment (endpoint, identity, cloud). They use continuous behavioral baselining to flag credential abuse and use NLP models for deepfake detection.'
                }, {
                  title: 'Cognition',
                  subtitle: '(Reasoning)',
                  desc: 'We deploy analyst co-pilots embedded in your SIEM/SOAR to interpret complex alerts and autonomous correlation engines to infer patterns without static signatures.'
                }, {
                  title: 'Action',
                  subtitle: '(Response)',
                  desc: 'This is the game-changer. Reinforcement-learning (RL) responders execute rapid containment actions: isolating endpoints, revoking tokens, and blocking command-and-control (C2) in seconds.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white relative overflow-hidden card-text-smaller"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[26px] text-[#111111]">
                        {item.title} <span className="font-normal text-[#454545]">{item.subtitle}</span>
                      </h4>
                      <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                        {item.desc}
                      </p>
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
                  action: 'Deploy Phishing-Resistant MFA (FIDO2/WebAuthn) and enforce out-of-band verification for payments to counter deepfakes.'
                }, {
                  chip: 'Integrate',
                  chipColor: 'text-[#e45412] bg-[#fff3ee] border-[#ffbfa8]',
                  focusArea: 'Automation & Supply Chain',
                  action: 'Integrate AI co-pilots into SIEM/SOAR to automate Tier-1 triage. Implement SBOM policy and vendor SLAs for supply-chain control.'
                }, {
                  chip: 'Automate',
                  chipColor: 'text-[#e45412] bg-[#fff3ee] border-[#ffbfa8]',
                  focusArea: 'Autonomous Defense',
                  action: 'Deploy an Agent Swarm (e.g., Identity Guard, RL Responder) to achieve rapid containment.'
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
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Focus Area
                          </span>
                        </div>
                        <p className="text-[16px] md:text-[18px] font-semibold leading-normal text-[#111111]">
                          {item.focusArea}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-[14px] font-medium text-[#111111]">
                            Key Action
                          </span>
                        </div>
                        <p className="text-[14px] md:text-[16px] font-normal leading-normal text-[#454545]">
                          {item.action}
                        </p>
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
          <h2 className="text-center text-[32px] font-medium leading-[48px] text-[#0B1B2B]">
            Our Solutions
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
                    className="w-auto h-[340px]"
                    aria-hidden
                  />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

        </section>

       {/* Advantages */}
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
  <div className="grid items-center gap-10 md:grid-cols-[1.6fr_auto_1fr]">
    <div>
      <h2 className="text-4xl text-[#0B1B2B]">Advantages</h2>
      <p className="mt-5 text-lg font-semibold text-[#0F2C58]">
        Measuring Success: KPIs for the Board
      </p>
      <p className="mt-3 text-base text-[#3A4A5F]">
        Security is a business function. Our framework aligns with loss
        avoidance and resilience metrics:
      </p>
      <ul className="mt-5 space-y-4 text-lg text-[#3A4A5F]">
        <li className="relative pl-6">
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gray-500" />
          <span className="font-medium text-black">Loss Avoidance:</span> Target a reduction 
          in loss within 12 months by achieving faster containment.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gray-500" />
          <span className="font-medium text-black">Containment Speed (MTTI/MTTC):</span> 
          Reduce mean days, with an ultimate goal of days.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gray-500" />
          <span className="font-medium text-black">Ransomware Resilience:</span> Aim for 
          time to restore and increase recovery percentage without ransom.
        </li>
      </ul>
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
        src="/images/cyber/whychoose.png"
        alt="Security dashboard illustration"
        width={520}
        height={360}
        className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl"
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
            Understand how AI‑driven defense can cut breach costs, strengthen compliance, and protect your business from evolving threats in real time.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton onClick={() => setIsModalOpen(true)}>
              Activate AI‑driven defense 
            </PrimaryButton>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
