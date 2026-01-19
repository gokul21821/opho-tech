import Image from "next/image";
import Link from "next/link";

import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { slugify } from "@/lib/utils";

// Mapping of service titles to their solution page paths
const SERVICE_TO_PATH: Record<string, string> = {
  "Research & Analysis": "/solutions/research-and-analysis",
  "Data Structuring & Monetization": "/solutions/data-structuring-and-monetization",
  "Cloud Integration & Architecture": "/solutions/cloud-integration",
  "AI Solutions & Services": "/solutions/ai-solutions-and-services",
  "AI Agent Development": "/solutions/ai-agent-development",
  "Cyber Security Solutions": "/solutions/cyber-security-solutions",
};

const SERVICES = [
  {
    title: "Research & Analysis",
    tagline: "Powered by AI agents. Built for every decision-maker in your organization.",
    description:
      "An intelligence framework, driven by a team of Senior Data Scientists and AI/ML Engineers to get real-time operational insights and market opportunities. Our Expert and Precise reports address the critical gaps and enable enterprises structure their path to AI enablement.",
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
    <section className="relative overflow-hidden bg-white py-15">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-40 w-[60%] rounded-full bg-orange-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-[4%] ">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-[38px]">
            What We Do for You
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Research, Roadmaps, and Support Designed to Deliver Results
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 justify-items-center gap-15 sm:grid-cols-2 lg:grid-cols-3">


          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = (typeof SERVICES)[number];

function ServiceCard({ title, tagline, description, icon }: ServiceCardProps) {
  const href = SERVICE_TO_PATH[title] || slugify(title);

  return (
    <Link
      href={href}
      className="
        service-card group relative flex h-full w-[330px] sm:w-[320px] md:w-[340px] lg:w-[335px] xl:w-[370px] flex-col overflow-visible
        px-6 py-8
        transition-all duration-300
      "
    >
      {/* dotted pattern background */}
      <div
        className="
          service-card-dots
          pointer-events-none absolute inset-0 z-0
          [background-image:radial-gradient(#d9d9d9_1px,transparent_1px)]
          [background-size:18px_18px]
          opacity-[0.9]
        "
      />

      {/* top-right orange icon (SVG from public) */}
      <div
        className="
          pointer-events-none absolute top-[-18] right-[-20] z-[3]
          flex h-10 w-10 items-center justify-center rounded-full"
      >
        <Image
          alt=""
          src="/images/servicessection/toparrow.svg"
          width={15}
          height={15}
          className="text-orange-500"
        />
      </div>

      {/* content */}
      <div className="relative z-[2] flex flex-col">
        <div className="flex items-start gap-6 mb-5">
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Fixed height container for title - accommodates up to 2 lines, ensures alignment */}
            <div className="h-[52px] flex items-start mb-10 sm:mb-10 lg:mb-10">
              <h3 className="text-2xl font-semibold leading-[1.2] text-gray-900">
                {title}
              </h3>
            </div>

            {/* Fixed height container for tagline - accommodates wrapped taglines, ensures alignment */}
            <div className="h-[40px] flex items-start">
              <p className="text-xs text-black leading-[1.4]">
                {tagline}
              </p>
            </div>
          </div>

          <ServiceIcon
            name={icon}
            className="
              shrink-0 rounded-full bg-white/10 
              text-orange-500 transition-all duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* Description starts at fixed position after tagline section - ensures descriptions align */}
        <p className="text-xs leading-[1.7] text-gray-700">
          {description}
        </p>
      </div>

      {/* arrow button - positioned in the cutout area */}
      <button
        aria-hidden="true"
        className="
          service-card-button flex items-center justify-center
          rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        <Image
          alt=""
          src="/images/servicessection/arrow.svg"
          width={15}
          height={15}
          className="
            transition-transform duration-300
            group-hover:rotate-45
          "
        />
      </button>
    </Link>
  );
}
