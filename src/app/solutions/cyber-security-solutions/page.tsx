"use client";

// app/cyber-security-solutions/page.tsx
import Image from "next/image";
import { Fragment } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";
import {
  buildContactModalOpenUrl,
  markContactModalOpenedFromUi,
} from "@/lib/contact-modal";

export default function CyberSecuritySolutions() {
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenContact = () => {
    const searchParams = new URLSearchParams(
      typeof window === "undefined" ? "" : window.location.search,
    );
    markContactModalOpenedFromUi();
    router.push(buildContactModalOpenUrl(pathname, searchParams));
  };

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
        <SolutionsIntroSection
          imageSrc="/images/cyber/brainimage.png"
          imageAlt="Cyber security illustration"
          copy={
            <>
              <p>
                  Cybersecurity environment is under attack by AI-driven adversaries who operate at machine speed, enabling
                  mass personalization, rapid reconnaissance, and cross-language deception. Legacy, rule-based defenses are no longer sufficient against these adaptive threats.
              </p>

              <p className="mt-4">
              We don&apos;t offer generic security; we build AI-driven, agentic security architectures that provide autonomous resilience—a fusion of human judgment and AI precision.
              </p>
            </>
          }
          techStack={[
            {
              src: "/images/tech-stack-logos/afetrust.svg",
              alt: "AFETRUST logo",
              wrapperClassName: "w-15 h-6 md:w-20 md:h-8 flex items-center justify-center"
            },
            {
              src: "/images/tech-stack-logos/mcafee.svg",
              alt: "mcafee logo",
              wrapperClassName: "w-15 h-6 md:w-20 md:h-8 flex items-center justify-center"
            },
            { 
              src: "/images/tech-stack-logos/mco.svg", 
              alt: "mco logo", 
              wrapperClassName: "w-15 h-6 md:w-20 md:h-8 flex items-center justify-center" },
            {
              src: "/images/tech-stack-logos/nordvpn.svg",
              alt: "nordvpn logo",
              wrapperClassName: "w-20 h-6 md:w-20 md:h-8 flex items-center justify-center"
            },
            {
              src: "/images/tech-stack-logos/concentrix.svg",
              alt: "concentrix logo",
              wrapperClassName: "w-15 h-6 md:w-20 md:h-8 flex items-center justify-center"
            },
          ]}
        />


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
            <section className="max-w-6xl mx-auto px-3 xl:px-0">
            {/* Cyber Threat in the AI Era */}
            <div className="flex flex-col gap-10 items-center mb-16">
              <div className="flex flex-col gap-3 items-center">
                <h2 className="text-3xl font-medium text-[#111111] text-center">
                  Cyber Threat in the AI Era
                </h2>
                <div className="flex flex-col gap-3 items-center text-center max-w-[924px] px-4">
                  <p className="text-base font-normal text-[#454545]">
                    A clear escalation from simple phishing to strategic, systemic attacks.
                  </p>
                </div>
              </div>

            {/* Three Risk Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[{
                title: 'AI-Generated Phishing & Deepfakes',
                impact: 'High Likelihood, Critical Impact: Enables $25.6M deepfake fraud incidents and dominates basic web-app breach patterns.'
              }, {
                title: 'Living-Off-The-Land (LotL) & Identity Abuse',
                impact: 'High Likelihood: Stolen credentials are a primary pivot point, driving the global average cost per breach to $4.40M.'
              }, {
                title: 'Ransomware / Extortion',
                impact: 'Critical Impact: Downtime is the largest driver of loss. Healthcare crises have led to >50% revenue disruption for providers.'
              }].map((item, i) => (
                <div
                  key={i}
                  className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller h-full flex flex-col"
                >
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    <h4 className="text-2xl font-medium leading-[26px] text-[#111111] h-[60px] flex items-start">
                      {item.title}
                    </h4>
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1 inline-flex items-center justify-center w-fit">
                        <span className="text-sm font-medium text-[#111111]">
                          Business Impact (Risk & Cost)
                        </span>
                      </div>
                      <p 
                        className="text-base font-normal leading-normal text-[#454545]"
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
                <h3 className="text-3xl font-medium text-[#454545]">
                  The AI-Driven Cyber Resilience Framework
                </h3>
                <p className="text-base font-normal leading-normal text-[#454545] max-w-[860px]">
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
                      <h4 className="text-2xl font-medium leading-[26px] text-[#111111]">
                        {item.title} <span className="font-medium text-base text-[#111111]">{item.subtitle}</span>
                      </h4>
                      <p 
                        className="text-base font-normal leading-normal text-[#454545]"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive-Focused Roadmap */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-3 items-center text-center px-4">
                <h3 className="text-3xl font-medium text-[#454545]">
                  A Clear, Executive-Focused Roadmap
                </h3>
                <p className="text-base font-normal leading-normal text-[#454545] max-w-[860px]">
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
                      <div className={`rounded-lg px-2.5 py-1 inline-flex items-center justify-center w-fit border ${item.chipColor}`}>
                        <span className="text-sm font-medium">
                          {item.chip}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Focus Area
                          </span>
                        </div>
                        <p className="text-base leading-normal text-[#454545]">
                          {item.focusArea}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1 inline-flex items-center justify-center w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Key Action
                          </span>
                        </div>
                        <p 
                          className="text-base font-normal leading-normal text-[#454545]"
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

        <IconCardsSection
          title="Advantages"
          items={[
            {
              title: "AI‑Driven Detection And Rapid Response",
              icon: "/images/icons/settings-phone.svg",
            },
            {
              title: "Resilience Roadmap With Measurable KPIs",
              icon: "/images/icons/people-search.svg",
            },
            {
              title: "Reduced Breach Costs And Recovery Times",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "Compliance And Governance Integration",
              icon: "/images/icons/settings-code.svg",
            },
            {
              title: "Continuous Autonomous Protection",
              icon: "/images/icons/connection.svg",
            },
          ]}
        />

     
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
          previousHref="/solutions/ai-agent-development"
          titleClassName="text-3xl font-medium"
          title={["Ready to Solve", "What's Next With OphoTech?"]}
          cta={{ onClick: handleOpenContact, label: "Let's Start" }}
        />
      </main>

      <Footer />
    </div>
  );
}
