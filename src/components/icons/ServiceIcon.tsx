import Image from "next/image";

import { cn } from "@/lib/utils";

type ServiceIconKey =
  | "research-analysis"
  | "data-monetization"
  | "cloud-integration"
  | "ai-solutions"
  | "ai-agent"
  | "cyber-security"
  | "default";

type ServiceIconProps = {
  name?: ServiceIconKey;
  className?: string;
  alt?: string;
};

const ICON_SOURCES: Record<ServiceIconKey, string> = {
  "research-analysis": "/images/icons/research-analysis.svg",
  "data-monetization": "/images/icons/data-monetization.svg",
  "cloud-integration": "/images/icons/cloud-integration.svg",
  "ai-solutions": "/images/icons/ai-solutions.svg",
  "ai-agent": "/images/icons/ai-agent.svg",
  "cyber-security": "/images/icons/cyber-security.svg",
  default: "/images/icons/default.svg",
};

export function ServiceIcon({
  name = "default",
  className,
  alt = "Service icon",
}: ServiceIconProps) {
  const src = ICON_SOURCES[name] ?? ICON_SOURCES.default;

  return (
    <span
      className={cn(
        "inline-flex size-14 items-center justify-center rounded-2xl bg-orange-25",
        className,
      )}
    >
      <Image alt={alt} src={src} width={40} height={40} />
    </span>
  );
}

