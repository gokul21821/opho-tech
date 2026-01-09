"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import { ContactModal } from "@/components/forms/ContactModal";

export function PageCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-7xl px-20 py-16">
        <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
          Ready to Solve
        </h2>
        <h2 className="text-center text-2xl font-semibold text-[#0B1B2B]">
          What&apos;s Next With OphoTech?
        </h2>
        <div className="mt-8 flex justify-center">
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
            Let&apos;s Start
          </PrimaryButton>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

