// app/raar/page.tsx
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";

export default function RAARPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/" },
          { label: "Research, Analysis, Adoption & Reporting" },
        ]}
        title="Research, Analysis, Adoption & Reporting"
        subtitle="Powered by AI agents. Built for every decision-maker in your organization."
        contentAlignment="center"
      />

      <main className="bg-white text-[#0B1B2B]">

      {/* Intro split */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="justify-self-center">
            <Image
              src="/images/raar/brain.png"
              alt="RAAR illustration"
              width={520}
              height={380}
              className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
              priority
            />
          </div>
          <div>
            <p className="text-[#0F2C58] font-semibold">RAAR</p>
            <p className="mt-2 text-[17px] text-[#3A4A5F]">
              is a decision intelligence software that helps you compare, evaluate, and optimize your tools with precision, speed, and accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Dotted background */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(#F0F3F8 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">How RAAR Works</h2>

          {/* Four cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Research",
                text:
                  "Pulls data from vendor contracts, licensing records, usage logs, cost reports, and integration documentation. Cleans, Secure and Validates data for analysis.",
                icon: "/images/raar/research.svg",
              },
              {
                title: "Analysis",
                text:
                  "AI agents evaluate tools across Features, Security, Integration, Cost Efficiency, Performance, and Market Position. Builds SWOT profiles, identifies capability gaps, and benchmarks against industry standards.",
                icon: "/images/raar/analyze.svg",
              },
              {
                title: "Adoption",
                text:
                  "Tracks user adoption rates, identifies underutilized tools, and measures organizational readiness for new technology implementations.",
                icon: "/images/raar/star.svg",
              },
              {
                title: "Reporting",
                text:
                  "Delivers persona-specific insights. Strategic dashboards for executives, integration scores for architects, vendor intelligence for procurement, compliance & secure reports for regulators, & usability metrics for end users.",
                icon: "/images/raar/notepad.svg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.15)]"
              >
                <div className="mb-4 h-7 w-7">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                </div>
                <h3 className="text-[17px] font-semibold text-[#0F2C58]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-[#3A4A5F]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">What You Get</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              title: "Full Visibility",
              text:
                "Complete view of your software portfolio with usage patterns and spend analysis",
              icon: "/images/icons/tailored.svg",
            },
            {
              title: "Strategic Benchmarks",
              text:
                "Industry comparisons on cost, performance, features, and security",
              icon: "/images/icons/settings-load.svg",
            },
            {
              title: "Smart Recommendations",
              text:
                "Data-driven guidance on which tools to adopt, retain, consolidate, or retire",
              icon: "/images/icons/search-notes.svg",
            },
            {
              title: "Stakeholder-Specific Insights",
              text:
                "Customized reports for C-Suite business leaders",
              icon: "/images/icons/people.svg",
            },
            {
              title: "Audit-Ready Documentation",
              text:
                "Compliance trails and governance reports for regulators and boards",
              icon: "/images/icons/take-notes.svg",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#FBE8DD] bg-[#FFF8F3] p-6 text-center"
            >
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[#FFE3D3] grid place-items-center">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <p className="text-[15px] font-semibold text-[#0F2C58]">{item.title}</p>
              <p className="mt-2 text-[13.5px] text-[#3A4A5F]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose RAAR with image */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(#F0F3F8 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">Why Choose RAAR</h2>
              <ul className="mt-5 space-y-3 text-[14.5px] text-[#3A4A5F]">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#FF6A3D]" />
                  Understand which tools are worth keeping
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#FF6A3D]" />
                  Get insights into better-fit software
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#FF6A3D]" />
                  Measure integration complexity, calculate tech debt, and identify which investments drive business outcomes.
                </li>
              </ul>
            </div>
            <div className="justify-self-center">
              <Image
                src="/images/raar/in-depth-analysis.png"
                alt="Dashboard illustration"
                width={520}
                height={360}
                className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl shadow-[0_12px_32px_-10px_rgba(15,44,88,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Get Started</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-[#3A4A5F]">
          From capability gaps to consolidation opportunities, RAAR transforms software spend into strategic decisions.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            className="rounded-full bg-[#FF6A3D] px-6 py-3 text-white text-sm font-medium shadow-[0_8px_20px_-6px_rgba(255,106,61,0.6)] hover:brightness-110 transition"
            type="button"
          >
            Schedule RAAR Assessment →
          </button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
  );
}
