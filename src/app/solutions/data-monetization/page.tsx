// app/data-monetization/page.tsx
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";

export default function DataMonetizationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/" },
          { label: "Data Monetization" },
        ]}
        title="Data Monetization"
        subtitle="Turning Your Information into Revenue"
        contentAlignment="center"
      />

      <main className="bg-white text-[#0B1B2B]">

      {/* Intro split */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="justify-self-center">
            <Image
              src="/images/data-monetize/secure-communication.png"
              alt="Data monetization illustration"
              width={520}
              height={380}
              className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
              priority
            />
          </div>
          <div className="text-[15.5px] text-[#3A4A5F]">
            <p>
            As a business leader, you know your data is a critical asset. Data Monetization is the strategy to unlock its financial potential, shifting it from a cost center to a profit generator. 
            </p>
            <p className="mt-4">
            We help executives convert complex data infrastructure into clear, measurable business returns. This is not just a technology project; it is a fundamental shift in how your company creates value and secures a competitive edge. 
            </p>
          </div>
        </div>
      </section>

      {/* Dotted field background */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden
          style={{
            backgroundImage: "radial-gradient(#F0F3F8 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* How it works */}
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
            How Data Monetization Works
          </h2>

          {/* Stage 1: The Foundation of Trust */}
          <div className="mt-8">
            <p className="text-center text-[#0F2C58]/80">
              The Foundation of Trust: Data Readiness
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-center text-[14.5px] text-[#3A4A5F]">
              Before data can be sold or used for high‑impact AI, it must be reliable. We ensure your data is “investment‑grade” through robust, scalable processes.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Structure, Secure & Standardise",
                  text:
                    "We architect a modern data environment (like a Data Lake or Fabric) to make all your information easily accessible and ready for rapid analysis.",
                },
                {
                  title: "Cleanse & Validate",
                  text:
                    "We enforce strict data quality rules, removing errors and inconsistencies. This is the critical step that ensures your AI models are accurate and your business decisions are trustworthy.",
                },
                {
                  title: "Label & Enrich",
                  text:
                    "We prepare the data for advanced use by adding context and connecting it to secure internal and external sources, making it immediately valuable for machine learning.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.12)]"
                >
                  <h3 className="text-[16.5px] font-semibold text-[#0F2C58]">{c.title}</h3>
                  <p className="mt-2 text-[14px] text-[#3A4A5F]">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stage label */}
          <div className="mt-8 flex justify-center">
            <span className="rounded-full border border-[#FFBFA8] bg-[#FFF3EE] px-3 py-1 text-xs text-[#FF6A3D]">
              Stage 2
            </span>
          </div>

          {/* Business case cards */}
          <div className="mt-6">
            <p className="text-center text-[#0F2C58]/80">
              The Business Case: Ready to Monetize
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Direct Revenue",
                  points: [
                    "Create new products and services based on aggregated insights and industry benchmarks.",
                    "New revenue streams, high‑margin data products.",
                  ],
                  icon: "/images/data-monetize/money.svg",
                },
                {
                  title: "Operational Efficiency",
                  points: [
                    "Use AI and analytics to optimize core processes and predict future needs.",
                    "Reduced costs, optimized inventory, faster time‑to‑market.",
                  ],
                  icon: "/images/data-monetize/gear.svg",
                },
                {
                  title: "Customer Experience",
                  points: [
                    "Leverage hyper‑personalization to drive loyalty and sales.",
                    "Increased Customer Lifetime Value (CLV) and lower churn.",
                  ],
                  icon: "/images/data-monetize/laptop.svg",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-[#F2E8E1] bg-white p-6 shadow-[0_6px_18px_-8px_rgba(15,44,88,0.12)]"
                >
                  <div className="mb-4 h-7 w-7">
                    <Image src={b.icon} alt={`${b.title} icon`} width={28} height={28} className="h-7 w-7" />
                  </div>
                  <h3 className="text-[16.5px] font-semibold text-[#0F2C58]">{b.title}</h3>
                  <ul className="mt-3 space-y-2 text-[14px] text-[#3A4A5F]">
                    {b.points.map((p, i) => (
                      <li key={i} className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#FF6A3D]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider link line */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-[14.5px] text-[#0F2C58]">
            Data Monetization – <span className="text-[#0A6CFF]">From Problem to Profit</span>
          </p>

          {/* Two-column challenge/services band */}
          <div className="mt-6 rounded-2xl border border-[#FBE8DD] bg-[#FFF8F3] p-5">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  cap: "Business Challenge",
                  title: "Need To Reduce High Marketing Spend Inefficiency.",
                  k: "Data Opportunity",
                  body:
                    "Implementing prescriptive analytics to target only the high‑value customers with tailored offers, delivering maximum ROI.",
                },
                {
                  cap: "Business Challenge",
                  title: "Need A New Growth Vertical.",
                  k: "Data Services",
                  body:
                    "Aggregate anonymized usage data to create and sell a unique industry trend report (Data‑as‑a‑Service model), creating a net‑new revenue stream.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-[#F6D8C8] bg-white/60 p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#0F2C58]/70">
                    {card.cap}
                  </p>
                  <p className="mt-1 text-[15.5px] font-semibold text-[#FF6A3D]">
                    “{card.title}”
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#0F2C58]/70">
                    {card.k}
                  </p>
                  <p className="mt-1 text-[14px] text-[#3A4A5F]">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Derived value icons row */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">Derived Value</h2>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {[
            {
              title: "New Data‑Driven Revenue Streams",
              icon: "/images/icons/search-notes.svg",
            },
            {
              title: "Operational Efficiency And Cost Reduction",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "Improved Customer Loyalty And Retention",
              icon: "/images/icons/monitor.svg",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-xl border border-[#F2E8E1] bg-white p-6 text-center"
            >
              <div className="mb-3 h-11 w-11 rounded-full bg-[#FFE3D3] grid place-items-center">
                <Image src={item.icon} alt={`${item.title} icon`} width={22} height={22} className="h-5 w-5" />
              </div>
              <p className="text-[13.5px] text-[#0F2C58]">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goal section */}
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
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">Data Monetization – Goal</h2>
              <p className="mt-3 text-[14.5px] text-[#3A4A5F]">
                To help you realize the maximum financial value of your enterprise data while ensuring governance, security, and ethical compliance are built into the foundation.
              </p>
            </div>
            <div className="justify-self-center">
              <Image
                src="/images/data-monetize/cube.png"
                alt="Cube vault illustration"
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
          Explore the top Data Monetization models with our experts to find the one that delivers the greatest business impact for your organization.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            className="rounded-full bg-[#FF6A3D] px-6 py-3 text-white text-sm font-medium shadow-[0_8px_20px_-6px_rgba(255,106,61,0.6)] hover:brightness-110 transition"
            type="button"
          >
            Book a Call →
          </button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
  );
}
