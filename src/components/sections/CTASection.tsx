"use client";

import Image from "next/image";
import { useState } from "react";

import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ContactModal } from "@/components/forms/ContactModal";

const CTA_BACKGROUND = "/images/hero/hero-background-waves.png";

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1e2f62] via-[#1b2760] to-[#101b3f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Image
          src={CTA_BACKGROUND}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-semibold md:text-[38px] md:leading-[48px]">
          Start a Conversation with OphoTech
        </h2>
        <p className="mt-4 text-base text-blue-100 md:text-lg">
          Explore how data-driven strategy and responsible technology can
          advance your business goals.
        </p>
        <div className="mt-10 flex justify-center">
          <SecondaryButton onClick={() => setIsModalOpen(true)}>
            Connect with an Expert
          </SecondaryButton>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

