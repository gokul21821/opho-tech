import Image from "next/image";
import Link from "next/link";

import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { slugify } from "@/lib/utils";


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
    <section className="relative overflow-hidden bg-[#fdf9f6] py-24">
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-40 w-[60%] rounded-full bg-orange-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
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
  const href = slugify(title);

  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-[28px] border border-[#f4d6c4] bg-white p-8 shadow-[0_28px_60px_-40px_rgba(228,84,18,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_36px_80px_-52px_rgba(228,84,18,0.55)] after:absolute after:inset-0 after:z-0 after:rounded-[28px] after:bg-[radial-gradient(circle,_rgba(243,113,33,0.16)_1px,transparent_1px)] after:opacity-80 after:[background-size:20px_20px]"
    >
      <span className="pointer-events-none absolute -right-1 -top-1 z-[2]">
        <Image
          alt=""
          height={10}
          src="/images/servicessection/toparrow.svg"
          width={10}
        />
      </span>

      <div className="relative z-[1] flex h-full flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold leading-[1.2] text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-xs font-medium text-gray-800 md:text-xs">
              {tagline}
            </p>
          </div>
          <ServiceIcon
            name={icon}
            className="relative shrink-0 rounded-full bg-orange-50 p-3 text-orange-500 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <p className="text-sm leading-relaxed text-gray-600 md:text-[15px] md:leading-7">
          {description}
        </p>
      </div>

      <span className="pointer-events-none absolute bottom-0 right-1 size-[120px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#fdf9f6]" />
      <span className="pointer-events-none absolute bottom-6 right-7 z-[2] flex size-[44px] translate-x-[60%] translate-y-[60%] items-center justify-center rounded-full bg-white shadow-[0_18px_26px_-24px_rgba(228,84,18,0.55)] transition-transform duration-300 group-hover:translate-x-[70%]">
        <Image
          alt=""
          className="size-[12px] transition-transform duration-300 group-hover:rotate-45"
          height={16}
          src="/images/servicessection/arrow.svg"
          width={16}
        />
      </span>
    </Link>
  );
}
