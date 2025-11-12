import Link from "next/link";
import Image from "next/image";

import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { slugify } from "@/lib/utils";

const CTA_BACKGROUND = "/images/hero/hero-background-waves.png";

export function CTASection() {
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#141f44]/90 via-[#152752]/70 to-[#15224a]/60" />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-semibold md:text-[38px] md:leading-[48px]">
          Start a Conversation with OphoTech
        </h2>
        <p className="mt-4 text-base text-blue-100 md:text-lg">
          Explore how data-driven strategy and responsible technology can
          advance your business goals.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href={slugify("Connect with an Expert")}>
            <SecondaryButton>
              Connect with an Expert
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

