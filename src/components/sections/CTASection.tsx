"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import {
  buildContactModalOpenUrl,
  markContactModalOpenedFromUi,
} from "@/lib/contact-modal";

const CTA_BACKGROUND = "/images/hero/hero-background.png";

export type CTASectionVariant = "gradient" | "ready";

export type CTASectionProps = {
  variant?: CTASectionVariant;

  /**
   * Used for the "ready" variant. Defaults match the Careers reference.
   */
  readyTitle?: string;
  readySubtitle?: string;
  readyButtonLabel?: string;
  readyClassName?: string;

  /**
   * Used for the "gradient" variant. Defaults preserve existing CTASection copy.
   */
  gradientTitle?: string;
  gradientDescription?: string;
  gradientButtonLabel?: string;
  gradientClassName?: string;
};

export function CTASection({
  variant = "gradient",

  readyTitle = "Ready to Solve",
  readySubtitle = "What\u0027s Next With OphoTech?",
  readyButtonLabel = "Let\u0027s Start",
  readyClassName = "py-20 px-6",

  gradientTitle = "Start a Conversation with OphoTech",
  gradientDescription = "Explore how data-driven strategy and responsible technology can advance your business goals.",
  gradientButtonLabel = "Connect with an Expert",
  gradientClassName,
}: CTASectionProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenContact = () => {
    const searchParams = new URLSearchParams(
      typeof window === "undefined" ? "" : window.location.search,
    );
    markContactModalOpenedFromUi();
    router.push(buildContactModalOpenUrl(pathname, searchParams));
  };

  if (variant === "ready") {
    return (
      <section className={cn("text-center", readyClassName)}>
        <h2 className="mb-3 text-4xl font-medium text-[#111111]">{readyTitle}</h2>
        <p className="mb-6 text-2xl md:text-4xl font-medium">{readySubtitle}</p>
        <PrimaryButton onClick={handleOpenContact}>{readyButtonLabel}</PrimaryButton>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden py-15 text-white",
        gradientClassName,
      )}
    >
      <div className="pointer-events-none absolute inset-0 ">
        <Image
          src={CTA_BACKGROUND}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-semibold md:text-[38px]">
          {gradientTitle}
        </h2>
        <p className="mt-4 text-base text-blue-100 md:text-lg">
          {gradientDescription}
        </p>
        <div className="mt-10 flex justify-center">
          <SecondaryButton onClick={handleOpenContact}>
            {gradientButtonLabel}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

