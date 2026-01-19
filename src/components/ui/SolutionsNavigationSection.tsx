"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/ui/Button";

type LinkCTA = {
  href: string;
  label: string;
};

type ButtonCTA = {
  onClick: () => void;
  label: string;
};

export type SolutionsNavigationSectionProps = {
  previousHref?: string;
  previousLabel?: string;
  title: string | string[];
  description?: string;
  cta: LinkCTA | ButtonCTA;
  sectionClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  ctaWrapperClassName?: string;
};

function isLinkCta(cta: SolutionsNavigationSectionProps["cta"]): cta is LinkCTA {
  return "href" in cta;
}

function PreviousArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="size-4"
      aria-hidden
    >
      <path
        d="M13 8H3M3 8L7 12M3 8L7 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SolutionsNavigationSection({
  previousHref,
  previousLabel = "Previous",
  title,
  description,
  cta,
  sectionClassName,
  titleClassName,
  descriptionClassName,
  ctaWrapperClassName,
}: SolutionsNavigationSectionProps) {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <section className={cn("mx-auto max-w-7xl px-20 py-16", sectionClassName)}>
      {previousHref ? (
        <div className="mb-6">
          <Link
            href={previousHref}
            className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-orange-500 transition-colors hover:text-orange-600"
          >
            <PreviousArrowIcon />
            <span>{previousLabel}</span>
          </Link>
        </div>
      ) : null}

      {titleLines.map((line, idx) => (
        <h2
          // eslint-disable-next-line react/no-array-index-key
          key={`${idx}-${line}`}
          className={cn(
            "text-center text-4xl font-medium text-[#0B1B2B]",
            titleClassName,
          )}
        >
          {line}
        </h2>
      ))}

      {description ? (
        <p
          className={cn(
            "mx-auto mt-3 max-w-3xl text-center text-[15px] text-[#3A4A5F]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}

      <div className={cn("mt-8 flex justify-center", ctaWrapperClassName)}>
        {isLinkCta(cta) ? (
          <Link href={cta.href}>
            <PrimaryButton>{cta.label}</PrimaryButton>
          </Link>
        ) : (
          <PrimaryButton onClick={cta.onClick}>{cta.label}</PrimaryButton>
        )}
      </div>
    </section>
  );
}

