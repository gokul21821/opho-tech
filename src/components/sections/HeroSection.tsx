"use client";

import Image from "next/image";
import { useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import { ContactModal } from "@/components/forms/ContactModal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

const HERO_BACKGROUND_WAVES = "/images/hero/hero-background-waves.png";
const LOGO_PATH_WHITE = "/images/logo/logo-blue-black.svg";


export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative -mt-20 overflow-hidden pb-0 pt-20 text-white md:-mt-24 md:pt-24 px-[7%]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_BACKGROUND_WAVES}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col gap-16  pb-24 pt-36 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:min-h-[720px]">
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
          <PrimaryButton onClick={() => setIsModalOpen(true)}>Let&apos;s Start</PrimaryButton>
        </div>

        <div className="relative max-w-3xl flex-1">
          <VideoPlayer
            src="/videos/Ophotech.mp4"
            poster={LOGO_PATH_WHITE}
            muted={true}
          />
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
