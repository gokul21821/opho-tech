import Image from "next/image";
import Link from "next/link";

import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { slugify } from "@/lib/utils";

export type ServiceCardProps = {
  title: string;
  tagline: string;
  description: string;
  icon: "research-analysis" | "data-monetization" | "cloud-integration" | "ai-solutions" | "ai-agent" | "cyber-security";
};

export function ServiceCard({ title, tagline, description, icon }: ServiceCardProps) {
  const href = SERVICE_TO_PATH[title] || slugify(title);

  return (
    <Link
      href={href}
      className="
        service-card group relative flex h-full w-full max-w-[320px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[400px] flex-col overflow-visible
        px-4 py-6 sm:px-6 sm:py-8
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

      {/* top-right orange icon - only show on larger screens */}
      <div
        className="
          hidden sm:flex pointer-events-none absolute top-[-18] right-[-20] z-[3]
          h-10 w-10 items-center justify-center rounded-full"
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
        <div className="flex items-start gap-3 sm:gap-6 mb-3 sm:mb-5">
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Flexible height container for title */}
            <div className="min-h-[40px] sm:min-h-[48px] flex items-start mb-4 sm:mb-6 lg:mb-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[1.2] text-gray-900">
                {title}
              </h3>
            </div>

            {/* Flexible height container for tagline */}
            <div className="min-h-[28px] sm:min-h-[32px] lg:min-h-[40px] flex items-start">
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
              w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
            "
          />
        </div>

        {/* Description with better mobile spacing */}
        <p className="text-xs leading-[1.6] sm:leading-[1.7] text-gray-700">
          {description}
        </p>
      </div>

      {/* arrow button - positioned in the cutout area */}
      <span
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
      </span>
    </Link>
  );
}

// Mapping of service titles to their solution page paths
const SERVICE_TO_PATH: Record<string, string> = {
  "Research & Analysis": "/solutions/research-and-analysis",
  "Data Structuring & Monetization": "/solutions/data-structuring-and-monetization",
  "Cloud Integration & Architecture": "/solutions/cloud-integration",
  "AI Solutions & Services": "/solutions/ai-solutions-and-services",
  "AI Agent Development": "/solutions/ai-agent-development",
  "Cyber Security Solutions": "/solutions/cyber-security-solutions",
};