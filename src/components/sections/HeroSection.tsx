"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import {
  buildContactModalOpenUrl,
  markContactModalOpenedFromUi,
} from "@/lib/contact-modal";

const HERO_BACKGROUND_WAVES = "/images/hero/hero-background.png";
const HERO_BG_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDcxYjJiIi8+PC9zdmc+";


export function HeroSection() {
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenContact = () => {
    const searchParams = new URLSearchParams(
      typeof window === "undefined" ? "" : window.location.search,
    );
    markContactModalOpenedFromUi();
    router.push(buildContactModalOpenUrl(pathname, searchParams));
  };

  return (
    <section className="relative -mt-20 overflow-hidden pb-0 pt-20 text-white md:-mt-24 md:pt-24 ">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_BACKGROUND_WAVES}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={HERO_BG_BLUR_DATA_URL}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl px-[5%] flex-col gap-10 pb-24 pt-36  lg:flex-row lg:items-center lg:justify-between lg:min-h-[720px]">
        <div className="max-w-xl space-y-8">
          <div className="space-y-3">
            <p className="text-4xl text-orange-500 sm:text-5xl">
              You Lead
            </p>
            <p className="text-4xl font-semibold text-white sm:text-5xl">
              We Power Your Tech
            </p>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg">
            Partnering In Your Journey To AI Enablement.
          </p>
          <PrimaryButton onClick={handleOpenContact}>
            Let&apos;s Start
          </PrimaryButton>
        </div>

        <div className="relative max-w-7xl flex-1">
          <VideoPlayer
            src="/videos/Home-Page.mp4"
            poster="/videos/thumbnail.webp"
            muted={true}
            showControls={true}
          />
        </div>
      </div>
    </section>
  );
}
