import Image from "next/image";
import Link from "next/link";

import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { slugify } from "@/lib/utils";

// Mapping of service titles to their solution page paths
const SERVICE_TO_PATH: Record<string, string> = {
  "Research, Analysis, Adoption & Reporting": "/solutions/research-analysis-adoption-and-reporting",
  "Data Monetization": "/solutions/data-monetization",
  "Cloud Integration & Architecture": "/solutions/cloud-integration",
  "AI Solutions & Services": "/solutions/ai-solutions-and-services",
  "AI Agent Development": "/solutions/ai-agent-development",
  "Cyber Security Solutions": "/solutions/cyber-security-solutions",
};

const SERVICES = [
  {
    title: "Research, Analysis, Adoption & Reporting",
    tagline: "Powered by AI agents. Built for every decision-maker in your organization.",
    description:
      "RAAR is a decision intelligence platform that helps you compare, evaluate, and optimize your tools with precision, speed, and accuracy.",
    icon: "research-analysis" as const,
  },
  {
    title: "Data Monetization",
    tagline: "Turning Your Information into Revenue",
    description:
      "Transform data from a cost center into a profit generator. We unlock financial potential with revenue-ready data strategies and compliant governance.",
    icon: "data-monetization" as const,
  },
  {
    title: "Cloud Integration & Architecture",
    tagline: "Building the Digital Backbone",
    description:
      "For the CEO, SME, and CDO: The cloud is the foundation for innovation, agility, and scale. We align cloud strategy to business goals while minimizing risk.",
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
      "AI agents are digital workers capable of complex, multi-step tasks. We design agents that execute objectives with minimal oversight for radical efficiency.",
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
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-40 w-[60%] rounded-full bg-orange-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-[5%] md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-[38px] md:leading-[48px]">
            What We Do for You
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Research, Roadmaps, and Support Designed to Deliver Results
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
        service-card group relative flex h-full flex-col overflow-visible
        bg-[#fffaf5] p-[42px]
        transition-all duration-300
      "
    >
      {/* dotted pattern background */}
      <div
        className="
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
      <div className="relative z-[2] flex flex-col gap-6">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold leading-[1.2] text-gray-900">
              {title}
            </h3>

            <p className="mt-3 text-[13px] text-gray-800">
              {tagline}
            </p>
          </div>

          <ServiceIcon
            name={icon}
            className="
              shrink-0 rounded-full bg-orange-50 p-4 
              text-orange-500 transition-all duration-300
              group-hover:scale-105
            "
          />
        </div>

        <p className="text-xs leading-[1.7] text-gray-700">
          {description}
        </p>
      </div>

      {/* arrow button - positioned in the cutout area */}
      <button
        aria-hidden="true"
        className="
          absolute bottom-3 right-2 z-[4]
          translate-x-[36%] translate-y-[24%] md:translate-x-[40%] md:translate-y-[30%] lg:translate-x-[30%]
          flex h-10 w-10 md:h-[52px] md:w-[52px] items-center justify-center
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
