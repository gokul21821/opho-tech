 "use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import Image from "next/image";
import { Fragment, useState } from "react";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";

// Import images
const communicationsImage = "/images/aboutus/evolve.png";
const impactImage = "/images/aboutus/impact.png";

// Mission/Vision visuals
const centerCircle = "/images/aboutus/center-circle.svg";
const outerCircle = "/images/aboutus/outer-circle.svg";
const topArrow = "/images/aboutus/top-arrow.svg";
const arrowCircle = "/images/aboutus/arrow-circle.svg";

// Import icons
const papersearchicon = "/images/icons/paper-analysis.svg";
const aiAgentIcon = "/images/icons/ai-agent.svg";
const resilienticon = "/images/icons/cloud-integration.svg";
const cloudDbIcon = "/images/icons/cloud-db.svg";
const governedicon = "/images/icons/governedicon.svg";
const analysisIcon = "/images/icons/analysis.svg";
const peopleSearchIcon = "/images/icons/people-search.svg";
const securityIcon = "/images/icons/security.svg";
const rocketIcon = "/images/icons/rocket.svg";
const layeredSettingsIcon = "/images/icons/layered-settings.svg";
const monitorIcon = "/images/icons/monitor.svg";
const searchBulbIcon = "/images/icons/search-bulb.svg";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        title="Who We Are"
        subtitle="Founded in 2019, OphoTech is a global R&D-led SaaS and PaaS solutions company. We partner with enterprises, governments, and institutions to provide early and reliable visibility across the technology lifecycle. 
By accelerating the path to AI enablement, we empower organizations to make faster decisions, minimize risk, 
and drive profitable growth."
        contentAlignment="center"
      />

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex flex-col">

        {/* Our Story Section */}
        <BackgroundDots
          className="py-20 "
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-[5%]">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600">
              As a purpose-driven, research-led organization, we bring deep expertise in Data Science, Research, and AI. We partner with enterprises to enable confident, responsible decision-making, uncover and address critical gaps, and accelerate business outcomes using proven, scalable methodologies. We work closely with your teams to guide your journey of technology enablement in this new era of AI.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={communicationsImage}
                alt="Our Story Visual"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </BackgroundDots>

        {/* Our Philosophy Section */}
        <section className="mx-auto max-w-7xl px-[5%] py-16 pb-20">
          <h2 className="text-center text-[32px] font-medium leading-[48px] text-[#0B1B2B]">
            Our Philosophy
          </h2>
          <p className="text-center text-xl text-[#454545] mt-4 mb-12">
            See earlier. Decide smarter. Deliver results.
          </p>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
            {[
              {
                title: "Evidence Clariy",
                text: "Decisions grounded in validated data, not assumptions or intuition.",
                icon: papersearchicon,
              },
              {
                title: "Proven Intelligence",
                text: "AI applied only where measurable value and outcomes are demonstrated.",
                icon: aiAgentIcon,
              },
              {
                title: "Resilient Architecture",
                text: "Systems engineered for real-world performance, scale, and long-term stability.",
                icon: resilienticon,
              },
              {
                title: "Governed Impact",
                text: "Privacy, compliance, and quantifiable ROI embedded into every solution. ",
                icon: governedicon,
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
                      className="h-[250px] w-auto"
                      aria-hidden
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

        </section>


        <section className="relative w-full text-white pb-16 lg:pb-0 pt-16 lg:pt-[14rem] lg:bg-[url('/images/aboutus/our-mission.png')] lg:bg-[length:100%_auto] lg:bg-top lg:bg-no-repeat">
          {/* Desktop view with SVG decorations (lg and above) */}
          <div className="hidden lg:block relative mx-auto h-[520px] max-w-6xl px-6">
            {/* Outer blurred ring */}
            <div className="pointer-events-none absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/2">
              <Image
                src={outerCircle}
                alt=""
                width={554}
                height={554}
                className="h-[420px] w-[420px]"
                aria-hidden
              />
            </div>

            {/* Center orange circle */}
            <div className="pointer-events-none absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/2">
              <Image
                src={centerCircle}
                alt=""
                width={94}
                height={94}
                className="h-24 w-24"
                aria-hidden
              />
            </div>

            {/* Top-right arrow pointing to Our Mission */}
            <div className="pointer-events-none absolute right-[34%] top-[-24%]">
              <Image
                src={topArrow}
                alt=""
                width={113}
                height={113}
                className="h-[113px] w-[113px]"
                aria-hidden
              />
            </div>

            {/* Arrow from center circle to Our Vision */}
            <div className="pointer-events-none absolute top-[10%] right-[54%] -translate-y-1/2">
              <Image
                src={arrowCircle}
                alt=""
                width={196}
                height={15}
                className="h-[12px] w-[196px]"
                aria-hidden
              />
            </div>

            {/* Our Mission (right) */}
            <div className="absolute right-[-3%] top-[-25%] max-w-sm text-left">
              <h2 className="text-4xl font-medium leading-[1.3] text-[#FEF1F0]">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#E7E7E7]">
                To equip leaders with platforms and practices that surface the
                right signals early, automate the routine, and scale securely
                from first hypothesis to production impact.
              </p>
            </div>

            {/* Our Vision (left) */}
            <div className="absolute left-[10%] top-[7%] max-w-sm text-left">
              <h3 className="text-4xl font-medium leading-[1.3] text-[#FEF1F0]">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed max-w-[250px] text-[#E7E7E7]">
                A world where every organization operates on decision-grade
                intelligence—timely, trusted, and actionable.
              </p>
            </div>
          </div>

          {/* Tablet and mobile card layout (below lg) */}
          <div className="lg:hidden max-w-4xl mx-auto px-6 grid gap-6 sm:grid-cols-2">
            {/* Our Vision Card */}
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-3">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-black">
                A world where every organization operates on decision-grade
                intelligence—timely, trusted, and actionable.
              </p>
            </div>

            {/* Our Mission Card */}
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-3">
                Our Mission
              </h2>
              <p className="text-sm leading-relaxed text-black">
                To equip leaders with platforms and practices that surface the
                right signals early, automate the routine, and scale securely
                from first hypothesis to production impact.
              </p>
            </div>
          </div>
        </section>


        {/* Our Values Section */}
        <BackgroundDots
          className="py-4"
          spacing={25}
          dotSize={3}
          backgroundColor="#FFF6EB"
          dotColor="#D9D9D9"
          style={{
            background:
              "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <section className="mx-auto max-w-7xl px-[5%] py-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                {
                  icon: analysisIcon,
                  title: "Impact Over Output",
                  text: "We measure outcomes, not effort.",
                  alt: "Impact Over Activity Icon",
                },
                {
                  icon: peopleSearchIcon,
                  title: "Signal Before Build",
                  text: "Align on the few metrics that change decisions.",
                  alt: "Signal Before Build Icon",
                },
                {
                  icon: securityIcon,
                  title: "Responsible by Default",
                  text: "Privacy, security, and governance are non-negotiable.",
                  alt: "Responsible by Default Icon",
                },
                {
                  icon: cloudDbIcon,
                  title: "Build to Adapt",
                  text: "Open, interoperable, and cloud-native so value compounds.",
                  alt: "Build to Adapt Icon",
                },
                {
                  icon: rocketIcon,
                  title: "Partnership Mindset",
                  text: "Co-create, transfer capability, and make progress stick.",
                  alt: "Partnership Mindset Icon",
                },
                {
                  icon: layeredSettingsIcon,
                  title: "Evidence Wins",
                  text: "Hypothesize, test, learn, and industrialize.",
                  alt: "Evidence Wins Icon",
                },
                {
                  icon: monitorIcon,
                  title: "Craft And Reliability",
                  text: "Quality in design, resilience in production.",
                  alt: "Craft And Reliability Icon",
                },
                {
                  icon: searchBulbIcon,
                  title: "Progress with Pace",
                  text: "Ship small, improve continuously.",
                  alt: "Progress with Pace Icon",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col items-start text-left max-w-[270px] mb-5 p-4 bg-white/50 rounded-lg border border-orange-200"
                >
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={64}
                    height={64}
                    className="mb-3 h-12 w-16"
                  />
                  <h3 className="text-lg font-semibold text-black">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{card.text}</p>
                </article>
              ))}
            </div>
          </section>
        </BackgroundDots>

      
        {/* Bottom Horizontal Divider */}
        <div className="flex justify-center">
          <Image
            src="/images/horizontalline.svg"
            alt=""
            width={1200}
            height={3}
            className="w-full max-w-5xl"
            aria-hidden
          />
        </div>


        {/* What's Next Section */}
        <section className="py-20 px-8 bg-white backdrop-blur-sm text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-black font-bold ">Ready to Solve</h2>
            <h2 className="text-3xl text-black font-bold mb-8">
              What&apos;s Next with Ophotech?
            </h2>

            <PrimaryButton onClick={() => setIsModalOpen(true)}>
              Let&apos;s Start
            </PrimaryButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AboutPage;
