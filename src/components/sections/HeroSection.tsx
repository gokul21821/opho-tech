import Image from "next/image";

import { PrimaryButton } from "@/components/ui/Button";

const HERO_BACKGROUND_WAVES = "/images/hero/hero-background-waves.png";
const HERO_CARD_BASE = "/images/hero/hero-card-base.png";

const PlayIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4 text-blue-500"
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.25 4.75 11 8l-4.75 3.25v-6.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.25"
    />
  </svg>
);

export function HeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden pb-0 pt-20 text-white md:-mt-24 md:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_BACKGROUND_WAVES}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col gap-16 px-6 pb-24 pt-36 md:flex-row md:items-center md:justify-between md:gap-20 md:px-8 lg:min-h-[720px]">
        <div className="max-w-xl space-y-8">
          <div className="space-y-3">
            <p className="text-4xl font-medium text-orange-500 sm:text-5xl">
              You Lead
            </p>
            <p className="text-4xl font-semibold text-white sm:text-5xl">
              We Power Your Tech
            </p>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg">
            Identify compliance gaps, discover hidden risks, and act before they
            impact audits or operations.
          </p>
          <PrimaryButton>Let&apos;s Start</PrimaryButton>
        </div>

        <div className="relative max-w-2xl flex-1">
          <div className="relative overflow-hidden rounded-[30px] bg-orange-25/40 p-3 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="relative overflow-hidden rounded-[24px] bg-white">
              <Image
                src={HERO_CARD_BASE}
                alt="OphoTech world map illustration"
                width={604}
                height={418}
                className="h-full w-full object-cover"
                priority
              />
              <button
                type="button"
                aria-label="Play introduction video"
                className="absolute bottom-6 right-6 flex size-12 items-center justify-center rounded-full bg-orange-25 text-blue-500 shadow-[0_12px_32px_-10px_rgba(42,115,181,0.45)] transition hover:bg-orange-50"
              >
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

