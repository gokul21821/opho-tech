"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import BackgroundDots from "@/components/ui/background";
import { PrimaryButton } from "@/components/ui/Button";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Careers() {
  const [isLeftExpanded, setIsLeftExpanded] = useState(false);
  const [isRightExpanded, setIsRightExpanded] = useState(false);
  const leftTextRef = useRef<HTMLParagraphElement | null>(null);
  const rightTextRef = useRef<HTMLParagraphElement | null>(null);
  const [leftCanExpand, setLeftCanExpand] = useState(false);
  const [rightCanExpand, setRightCanExpand] = useState(false);

  const leftDescription =
    "To drive requirement analysis, solution scoping, and business growth for our software development, IT services, and Generative AI solutions";
  const rightDescription =
    "Marketing leader with 5+ years of experience driving growth through enterprise-grade website and app management, SEO-led visibility, and high-performing digital platforms. Proven ability to optimize user journeys from first visit to qualified client, generate high-quality global leads, and translate complex AI-driven engineering work into clear, actionable marketing strategy for business leadership.";

  // Keep the CTA row aligned across both cards in the collapsed state:
  // - clamp description to 4 lines
  // - reserve a consistent "Read more" row height on both cards
  // - only expand the card that was clicked
  const measureOverflow = useMemo(() => {
    return (el: HTMLParagraphElement | null) => {
      if (!el) return false;
      // When line-clamped, clientHeight is the visible height; scrollHeight includes hidden overflow.
      // Small epsilon avoids false positives due to sub-pixel rounding.
      return el.scrollHeight - el.clientHeight > 1;
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      // Only re-measure in the collapsed state (clamp active).
      if (!isLeftExpanded) setLeftCanExpand(measureOverflow(leftTextRef.current));
      if (!isRightExpanded) setRightCanExpand(measureOverflow(rightTextRef.current));
    };

    // Initial + after layout/resize changes.
    // rAF helps ensure fonts/layout have settled before measuring.
    const raf = requestAnimationFrame(measure);

    const onResize = () => measure();
    window.addEventListener("resize", onResize, { passive: true });

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => measure())
        : null;

    if (ro) {
      if (leftTextRef.current) ro.observe(leftTextRef.current);
      if (rightTextRef.current) ro.observe(rightTextRef.current);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [isLeftExpanded, isRightExpanded, leftDescription, rightDescription, measureOverflow]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "Careers" },
        ]}
        title="Join Us in Shaping the Future of AI & Cloud"
        subtitle="We are more than a technology company — we are a research and development hub where brilliant minds come together to build the next generation of SaaS and PaaS solutions. If you’re passionate about AI, data science, and cloud innovation, this is where you belong."
        contentAlignment="center"
      />

          <main className="relative z-10 flex flex-col">

        {/* Join Our Team */}
        <BackgroundDots
          className="py-14"
          spacing={25}
          dotSize={3}
          backgroundColor="#FFF6EB"
          dotColor="#D9D9D9"
          style={{
            background:
              "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <section className="relative px-6 py-5">
            {/* Header */}
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-medium tracking-tight text-[#111111]">
                Join our Team
              </h2>
              <p className="mt-4 text-base text-[#454545] max-w-3xl mx-auto">
                Discover exciting and fulfilling opportunities at OphoTech, where
                challenges are met with collaboration and growth.
              </p>
            </div>

            {/* Two columns with SVG center line */}
            <div className="relative mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-16 items-start">
              {/* Left column */}
              <div className="flex flex-col items-center text-center">
                <div className="h-[60px] flex items-start justify-center">
                  <span className="inline-flex items-center justify-center rounded-lg border border-orange-500 px-4 py-1.5 text-base font-semibold text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    Senior Level
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-900 h-[100px] flex items-start justify-center">
                  Business Development Manager
                </h2>
                <div className="mt-4 md:mt-2 lg:mt-0 mb-10 max-w-md text-[#454545] leading-relaxed">
                  <p
                    ref={leftTextRef}
                    className={[
                      !isLeftExpanded ? "line-clamp-4" : "",
                      // ~4 lines of text with leading-relaxed (1.625rem) => ~6.5rem.
                      // This keeps both cards aligned when collapsed.
                      !isLeftExpanded ? "min-h-[6.5rem]" : "",
                    ].join(" ")}
                  >
                    {leftDescription}
                  </p>
                  <div className=" h-5">
                    {leftCanExpand ? (
                      <button
                        type="button"
                        className="text-sm font-medium text-orange-500 hover:text-orange-600 underline underline-offset-4"
                        onClick={() => setIsLeftExpanded((v) => !v)}
                        aria-expanded={isLeftExpanded}
                      >
                        {isLeftExpanded ? "Read less" : "Read more"}
                      </button>
                    ) : (
                      <span
                        className="invisible text-sm font-medium underline underline-offset-4"
                        aria-hidden
                      >
                        Read more
                      </span>
                    )}
                  </div>
                </div>
                <PrimaryButton onClick={() => window.open('https://forms.gle/1ofoSTv4a54iktecA', '_blank')}>
                  Apply Now
                </PrimaryButton>
              </div>

              {/* Center line (SVG image) */}
              <div className="hidden md:flex items-center justify-center self-start">
                <Image
                  src="/images/raar/lineraar.svg"
                  alt=""
                  width={2}
                  height={200}
                  className="h-[320px] w-auto"
                  aria-hidden
                />
              </div>

              {/* Right column */}
              <div className="flex flex-col items-center text-center">
                <div className="h-[60px] flex items-start justify-center">
                  <span className="inline-flex items-center justify-center rounded-lg border border-orange-500 px-4 py-1.5 text-base font-semibold text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    Mid Level
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#111111] h-[100px] flex items-start justify-center">
                Marketing Manager 
                </h2>
                <div className="mt-4 md:mt-2 lg:mt-0 mb-10 max-w-md text-[#454545] leading-relaxed">
                  <p
                    ref={rightTextRef}
                    className={[
                      !isRightExpanded ? "line-clamp-4" : "",
                      !isRightExpanded ? "min-h-[6.5rem]" : "",
                    ].join(" ")}
                  >
                    {rightDescription}
                  </p>
                  <div className=" h-5">
                    {rightCanExpand ? (
                      <button
                        type="button"
                        className="text-sm font-medium text-orange-500 hover:text-orange-600 underline underline-offset-4"
                        onClick={() => setIsRightExpanded((v) => !v)}
                        aria-expanded={isRightExpanded}
                      >
                        {isRightExpanded ? "Read less" : "Read more"}
                      </button>
                    ) : (
                      <span
                        className="invisible text-sm font-medium underline underline-offset-4"
                        aria-hidden
                      >
                        Read more
                      </span>
                    )}
                  </div>
                </div>
                <PrimaryButton onClick={() => window.open('https://forms.gle/QW4784yV2FTj5zHm7', '_blank')}>
                  Apply Now
                </PrimaryButton>
              </div>
            </div>
          </section>
        </BackgroundDots>


        <IconCardsSection
          title="Work with Us"
          items={[
            {
              title: "Innovation First",
              icon: "/images/icons/intelligent.svg",
              description:
                "Every project starts with research, giving you space to explore and create.",
            },
            {
              title: "Cutting-Edge Tools",
              icon: "/images/icons/ai-agent.svg",
              description:
                "Work with AI/ML, cloud-native platforms, and next-gen software stacks.",
            },
            {
              title: "Collaborative Culture",
              icon: "/images/icons/handshake.svg",
              description:
                "We believe in Connect – Create – Evolve not just for clients, but also for our teams.",
            },
            {
              title: "Global Impact",
              icon: "/images/icons/cloud-db.svg",
              description:
                "Serve clients across North America, Europe, and Asia while shaping industries worldwide.",
            },
            {
              title: "Continuous Learning",
              icon: "/images/icons/paper-analysis.svg",
              description:
                "Training, certifications, and mentorship programs to help you grow.",
            },
          ]}
        />

        {/* Life at Ophotech */}
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
          <section className="flex flex-col gap-10 items-center px-20 py-20 max-w-7xl mx-auto text-center">
            {/* Header */}
            <div className="flex flex-col gap-5 items-center">
              <h2 className="text-4xl font-medium text-[#111111]">
                Life at OphoTech
              </h2>
              <p className="text-base text-[#454545] max-w-[860px]">
                At <span className="font-medium text-[#111111]">OphoTech</span>, we believe people do their best work when they&apos;re inspired, challenged, and supported. Our culture is built around <span className="font-medium text-[#111111]">curiosity, innovation, and collaboration</span> — with opportunities to grow every step of the way.
              </p>
            </div>

            {/* Top Row - 3 items */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[64px] items-start justify-center w-full">
              {[{
                title: "Hybrid & Flexible Work Options",
                icon: "/images/icons/hybrid-work.svg",
                description: "We understand that innovation doesn't just happen at a desk. That's why we offer hybrid work models and flexible schedules that empower you to balance work and life. Whether you prefer collaborating in our offices or contributing remotely, we make sure you stay connected and supported."
              }, {
                title: "R&D-Focused Projects With Global Clients",
                icon: "/images/icons/global-client.svg",
                description: "Here, you won't just work on routine tasks. You'll engage in cutting-edge research and development projects that have a real-world impact across North America, Europe, and Asia. From AI-driven platforms to scalable cloud architectures, every project challenges you to push boundaries."
              }, {
                title: "Regular Hackathons & Innovation Sprints",
                icon: "/images/icons/hackathon.svg",
                description: "We thrive on creativity. Our hackathons and innovation sprints give teams the chance to experiment, prototype, and showcase new ideas. Many of our most impactful solutions started as hackathon concepts that evolved into client-ready innovations."
              }].map((item, index, array) => (
                <Fragment key={item.title}>
                  <div className="flex flex-col gap-4 items-center w-full lg:w-[320px]">
                    <div className="relative shrink-0 size-[84px]">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={84}
                        height={84}
                        className="size-full"
                      />
                    </div>
                    <h3 className="capitalize font-medium leading-normal text-xl text-[#111111] text-center">
                      {item.title}
                    </h3>
                    <p className="font-normal leading-normal text-sm text-[#4f4f4f] text-center">
                      {item.description}
                    </p>
                  </div>

                  {index < array.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center">
                      <div
                        className="w-[1px] bg-gradient-to-b from-transparent via-[#F37121] to-transparent flex-shrink-0"
                        style={{
                          height: "400px",
                        }}
                        aria-hidden
                      />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            {/* Bottom Row - 2 items */}
            <div className="flex flex-col lg:flex-row items-start justify-center w-full">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-[78px] items-start justify-center">
                {[{
                  title: "Inclusive, Diverse, And Growth-Oriented Culture",
                  icon: "/images/icons/growth-icon.svg",
                  description: "We know the best ideas come from diverse perspectives. Our culture embraces inclusivity and collaboration, ensuring every voice is heard. We invest in mentorship, training, and personal development so that every team member grows along with the company."
                }, {
                  title: "Recognition And Rewards For Excellence",
                  icon: "/images/icons/badge-icon.svg",
                  description: "Your hard work deserves to be celebrated. From performance-based rewards to peer recognition programs, we ensure contributions never go unnoticed. We believe success is best when it's shared."
                }].map((item, index, array) => (
                  <Fragment key={item.title}>
                    <div className="flex flex-col gap-4 items-center w-full lg:w-[320px] self-stretch">
                      <div className="relative shrink-0 size-[84px]">
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          width={84}
                          height={84}
                          className="size-full"
                        />
                      </div>
                      <h3 className="capitalize font-medium leading-normal text-xl text-[#111111] text-center">
                        {item.title}
                      </h3>
                      <p className="font-normal leading-normal text-sm text-[#4f4f4f] text-center">
                        {item.description}
                      </p>
                    </div>

                    {index < array.length - 1 && (
                      <div className="hidden lg:flex items-end justify-center">
                        <div
                          className="w-[1px] bg-gradient-to-b from-transparent via-[#F37121] to-transparent flex-shrink-0"
                          style={{
                            height: "350px",
                          }}
                          aria-hidden
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
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
        {/* CTA Section */}
        <CTASection variant="ready" />
      </main>
      <Footer />
    </div>
  );
}
