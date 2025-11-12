'use client';

import { useState } from 'react';
import { PrimaryButton } from '@/components/ui/Button';
import { ContactModal } from '@/components/forms/ContactModal';

export function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="border-t-2 border-orange-25 bg-white px-6 py-20 md:px-24 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <h2 className="font-poppins text-3xl font-medium leading-[48px] text-gray-900 md:text-[38px]">
            Ready to Solve
            <br />
            What&apos;s Next With OphoTech?
          </h2>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>Let&apos;s Start</PrimaryButton>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

