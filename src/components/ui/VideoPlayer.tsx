"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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


interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
}

export function VideoPlayer({
  src,
  poster = "/images/logo/logo-blue-black.svg",
  className = "",
  autoplay = false,
  muted = true
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isHovered, setIsHovered] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handlePlay = async () => {
    if (videoRef.current && !isLoading) {
      try {
        setIsLoading(true);

        // Start playing (keep muted initially to avoid autoplay blocks)
        await videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
      } catch (error) {
        console.error('Play failed:', error);
        setIsLoading(false);
      }
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };




  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-[30px] bg-orange-25/40 p-3 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur transition-all duration-300 ${className}`}
    >
      <div
        className="relative overflow-hidden rounded-[24px] bg-white aspect-video"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className={`h-full w-full object-cover ${!isPlaying && hasStarted ? "opacity-0" : ""}`}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onPlay={() => {
            setIsPlaying(true);
            setIsLoading(false);
          }}
          onPause={() => setIsPlaying(false)}
          onCanPlay={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          onLoadStart={() => setIsLoading(true)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="text-sm">Loading...</span>
            </div>
          </div>
        )}

        {/* Paused State with Logo */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="relative h-[39px] w-[184px]">
              <Image
                src={poster}
                alt="OphoTech"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}

        {/* Play Button Overlay - When paused */}
        {!isPlaying && (isHovered || isMobile) && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900/70 transition-opacity">
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play introduction video"
              className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
              disabled={isLoading}
            >
              <PlayIcon />
            </button>
          </div>
        )}

        {/* Pause Button Overlay - When playing */}
        {isPlaying && (isHovered || isMobile) && (
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

        {/* Mute/Unmute Button - Bottom Right */}
        {isPlaying && !isTablet && (
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
  );
}
