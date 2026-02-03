import { lazy, Suspense } from "react";

// Lazy load ServiceCard for better performance
const ServiceCard = lazy(() =>
  import("@/components/sections/ServiceCard").then(module => ({ default: module.ServiceCard }))
);

const SERVICES = [
  {
    title: "Research & Analysis",
    tagline: "Powered by AI agents. Built for every decision-maker in your organization.",
    description:
      "An intelligence framework, driven by a team of Senior Data Scientists and AI/ML Engineers to get real-time operational insights and market opportunities. Our expert and precise reports address the critical gaps and enable enterprises structure their path to AI enablement.",
    icon: "research-analysis" as const,
  },
  {
    title: "Data Structuring & Monetization",
    tagline: "Turning Your Information into Revenue",
    description:
      "Transform data from a cost center into a profit generator. We unlock financial potential with revenue-ready data strategies and compliant governance.",
    icon: "data-monetization" as const,
  },
  {
    title: "Cloud Integration & Architecture",
    tagline: "Building the Digital Backbone",
    description:
      "The cloud is not just an IT cost center; it is the platform for innovation, agility, and scale. Our Cloud Integration & Architecture services ensure your technology strategy directly supports your business goals, minimizing risk and maximizing competitive speed." ,
    icon: "cloud-integration" as const,
  },
  {
    title: "AI Solutions & Services",
    tagline: "Intelligent Automation and Predictive Advantage",
    description:
      "Move beyond pilots to operational AI. We deploy automation and machine learning that deliver measurable ROI across your data and cloud investments.",
    icon: "ai-solutions" as const,
  },
  {
    title: "AI Agent Development",
    tagline: "The Future of Autonomous Business Operations",
    description:
      "AI Agents are digital workers capable of performing complex, multi-step tasks autonomously. Investing in AI Agent development means acquiring a scalable, highly efficient workforce that executes strategic objectives with minimal human oversight, leading to unprecedented operational efficiency and speed.",
    icon: "ai-agent" as const,
  },
  {
    title: "Cyber Security Solutions",
    tagline: "Autonomous Defense for the AI Age",
    description:
      "Defend against AI-driven adversaries operating at machine speed. We combine automated detection with resilient architecture to protect your enterprise.",
    icon: "cyber-security" as const,
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-15">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-40 w-[60%] rounded-full bg-orange-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-3 xl:px-0 ">
        <div className="text-center">
          <h2 className="text-4xl font-medium text-[#111111]">
            What We Do for You
          </h2>
          <p className="mt-4 text-base text-[#454545]">
            Research, Roadmaps, and Support Designed to Deliver Results
          </p>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-5 lg:gap-6 xl:gap-5 place-items-center">
          <Suspense fallback={<div className="animate-pulse w-full max-w-[330px] h-64 bg-gray-100 rounded-lg" />}>
            {SERVICES.map((service) => (
              <Suspense
                key={service.title}
                fallback={<div className="animate-pulse w-full max-w-[330px] h-64 bg-gray-100 rounded-lg" />}
              >
                <ServiceCard {...service} />
              </Suspense>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}

