"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import { ContactModal } from "@/components/forms/ContactModal";

const HERO_BACKGROUND_WAVES = "/images/hero/hero-background-waves.png";
const LOGO_PATH_WHITE = "/images/logo/logo-blue-black.svg";

const PlayIcon = () => (
  <svg
    aria-hidden="true"
    className="size-16 text-white"
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

const PauseIcon = () => (
  <svg
    aria-hidden="true"
    className="size-16 text-white"
    fill="currentColor"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="3" width="2.5" height="10" rx="0.5" />
    <rect x="8.5" y="3" width="2.5" height="10" rx="0.5" />
  </svg>
);

const VolumeIcon = ({ isMuted }: { isMuted: boolean }) => {
  const speakerPath =
    "M9.84251 0.074971L3.65741 4.74901C3.61938 4.77977 3.58782 4.81785 3.56458 4.86103H0V10.1417H3.56458C3.58771 10.185 3.61929 10.2231 3.65741 10.2538L9.84251 14.925C9.89761 14.9667 9.96318 14.9922 10.0318 14.9985C10.1005 15.0048 10.1696 14.9917 10.2313 14.9607C10.293 14.9297 10.3448 14.882 10.3811 14.823C10.4173 14.7639 10.4365 14.6959 10.4365 14.6265V0.373475C10.4365 0.30409 10.4173 0.236069 10.3811 0.177046C10.3448 0.118023 10.293 0.0703355 10.2313 0.0393341C10.1696 0.00833265 10.1005 -0.00475534 10.0318 0.00153968C9.96318 0.0078347 9.89761 0.0332629 9.84251 0.074971Z";
  const xPath =
    "M16.6846 10.5884L17.4519 9.81599L15.15 7.49966L17.4519 5.18332L16.6846 4.41121L14.3827 6.72754L12.0807 4.41121L11.3134 5.18332L13.6154 7.49966L11.3134 9.81599L12.0807 10.5881L14.3827 8.27177L16.6846 10.5881V10.5884Z";

  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
    >
      <path d={speakerPath} fill="#2A73B5" />
      {isMuted && <path d={xPath} fill="#2A73B5" />}
    </svg>
  );
};


export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
      setHasStarted(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative -mt-20 overflow-hidden pb-0 pt-20 text-white md:-mt-24 md:pt-24">
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
          <PrimaryButton onClick={() => setIsModalOpen(true)}>Let&apos;s Start</PrimaryButton>
        </div>

        <div className="relative max-w-3xl flex-1">
          <div className="relative overflow-hidden rounded-[30px] bg-orange-25/40 p-3 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur">
            <div
              className="relative h-[418px] w-full overflow-hidden rounded-[24px] bg-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                className={`h-full w-full object-cover ${!isPlaying && hasStarted ? "opacity-0" : ""}`}
                muted={isMuted}
                loop
                playsInline
                preload="none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/Ophotech.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Paused State with Logo */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  {/* Centered logo */}
                  <div className="relative h-[39px] w-[184px]">
                    <Image
                      src={LOGO_PATH_WHITE}
                      alt="OphoTech"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              )}

              {/* Hover Overlay with Play Button - When paused */}
              {!isPlaying && isHovered && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900/70 transition-opacity">
                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label="Play introduction video"
                    className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
                  >
                    <PlayIcon />
                  </button>
                </div>
              )}

              {/* Hover Overlay with Pause Button - When playing */}
              {isPlaying && isHovered && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900/50 transition-opacity">
                  <button
                    type="button"
                    onClick={handlePause}
                    aria-label="Pause video"
                    className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
                  >
                    <PauseIcon />
                  </button>
                </div>
              )}

              {/* Mute/Unmute Button - Bottom Right (always visible when playing) */}
              {isPlaying && (
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="absolute bottom-6 right-6 z-30 flex size-9 items-center justify-center rounded-[18px] bg-blue-500/20 backdrop-blur-[11.85px] transition-all hover:bg-blue-500/30"
                >
                  <VolumeIcon isMuted={isMuted} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
