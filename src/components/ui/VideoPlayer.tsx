"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const PlayIcon = () => (
  <Image
    src="/videos/play.svg"
    alt="Play"
    width={48}
    height={48}
    className="size-12"
  />
);

const PauseIcon = () => (
  <Image
    src="/videos/pause.svg"
    alt="Pause"
    width={48}
    height={48}
    className="size-12"
  />
);


interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  showControls?: boolean;
}

export function VideoPlayer({
  src,
  poster = "/videos/thumbnail.png",
  className = "",
  autoplay = false,
  muted = true,
  showControls = true
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isHovered, setIsHovered] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileControls, setShowMobileControls] = useState(false);

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

        // Show controls temporarily on mobile when play starts
        if (isMobile) {
          showControlsTemporarily();
        }
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

  const handleVideoClick = () => {
    if (isMobile || isTablet) {
      if (isPlaying) {
        handlePause();
      } else {
        handlePlay();
      }
    }
  };

  const showControlsTemporarily = () => {
    if (isMobile) {
      setShowMobileControls(true);
      setTimeout(() => {
        setShowMobileControls(false);
      }, 2000); // Hide after 2 seconds
    }
  };




  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-[27px] bg-orange-25/40 p-1  transition-all duration-300 ${className}`}
    >
      <div
        className="relative overflow-hidden rounded-[24px] bg-white aspect-video"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={handleVideoClick}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted={muted}
          loop
          playsInline
          preload="metadata"
          controls={showControls && hasStarted}
          poster={poster}
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

        {/* Play Button Overlay - When paused and not started */}
        {!isPlaying && !hasStarted && (isHovered || isMobile || showMobileControls) && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900/40 transition-opacity">
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play introduction video"
              className="flex items-center justify-center transition-all hover:scale-110"
              disabled={isLoading}
            >
              <PlayIcon />
            </button>
          </div>
        )}

        {/* Pause Button Overlay - When playing and hovered */}
        {isPlaying && (isHovered || showMobileControls) && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900/30 transition-opacity pointer-events-none">
            <button
              type="button"
              onClick={handlePause}
              aria-label="Pause video"
              className="flex items-center justify-center transition-all hover:scale-110 pointer-events-auto"
            >
              <PauseIcon />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
