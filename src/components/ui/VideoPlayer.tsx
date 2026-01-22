"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

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
  poster = "/videos/thumbnail.webp",
  className = "",
  autoplay = false,
  muted = true,
  showControls = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeoutRef = useRef<number | null>(null);
  const pendingPlayRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isHovered, setIsHovered] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileControls, setShowMobileControls] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [connectionSlowOrSaveData, setConnectionSlowOrSaveData] = useState(false);

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Detect slow connections / Save-Data to avoid heavy video downloads.
  useEffect(() => {
    try {
      const nav = navigator as unknown as {
        connection?: { effectiveType?: string; saveData?: boolean };
      };
      const effectiveType = nav.connection?.effectiveType ?? "";
      const saveData = Boolean(nav.connection?.saveData);
      const slow =
        effectiveType === "slow-2g" ||
        effectiveType === "2g" ||
        effectiveType === "3g";
      setConnectionSlowOrSaveData(Boolean(saveData || slow));
    } catch {
      // no-op: best-effort only
    }
  }, []);

  const shouldDeferVideo = (isMobile || isTablet) || connectionSlowOrSaveData;

  // Lazy-load: only enable the video once in view (desktop) or on explicit user intent (mobile/tablet/slow).
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "150px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Desktop: enable video as soon as it scrolls into view.
    if (!shouldDeferVideo && isInView) {
      setIsVideoEnabled(true);
    }
  }, [isInView, shouldDeferVideo]);

  useEffect(() => {
    // Desktop autoplay: once enabled, attempt to start playback.
    if (!autoplay || shouldDeferVideo || !isVideoEnabled) return;
    const v = videoRef.current;
    if (!v) return;

    setIsLoading(true);
    v.play()
      .then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      })
      .catch(() => {
        // If autoplay is blocked, fall back to click-to-play.
        setIsLoading(false);
      });
  }, [autoplay, isVideoEnabled, shouldDeferVideo]);

  useEffect(() => {
    // If the user tapped Play before the video was mounted, start once ready.
    if (!isVideoEnabled || !pendingPlayRef.current) return;
    const v = videoRef.current;
    if (!v) return;

    pendingPlayRef.current = false;
    setIsLoading(true);
    v.play()
      .then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      })
      .catch((error) => {
        console.error("Play failed:", error);
        setIsLoading(false);
      });
  }, [isVideoEnabled]);

  const clearHideControlsTimeout = () => {
    if (hideControlsTimeoutRef.current !== null) {
      window.clearTimeout(hideControlsTimeoutRef.current);
      hideControlsTimeoutRef.current = null;
    }
  };

  useEffect(() => clearHideControlsTimeout, []);

  const showControlsTemporarily = useCallback(() => {
    if (!isMobile) return;
    setShowMobileControls(true);
    clearHideControlsTimeout();
    hideControlsTimeoutRef.current = window.setTimeout(() => {
      setShowMobileControls(false);
      hideControlsTimeoutRef.current = null;
    }, 2000);
  }, [isMobile]);

  const handlePlay = async () => {
    if (isLoading) return;

    // On mobile/tablet/slow, avoid fetching video until the user explicitly taps play.
    if (shouldDeferVideo && !isVideoEnabled) {
      pendingPlayRef.current = true;
      setIsVideoEnabled(true);
      return;
    }

    if (videoRef.current) {
      try {
        setIsLoading(true);
        await videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);

        if (isMobile) {
          showControlsTemporarily();
        }
      } catch (error) {
        console.error("Play failed:", error);
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

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-[27px] bg-orange-25/40 p-1 transition-all duration-300 ${className}`}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-white"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={handleVideoClick}
      >
        {/* Poster (always) */}
        <Image
          src={poster}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
          fetchPriority="high"
          aria-hidden
        />

        {/* Video Element (lazy-enabled) */}
        {isVideoEnabled && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted={muted}
            loop
            playsInline
            preload={shouldDeferVideo ? "none" : "metadata"}
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
            <track
              kind="captions"
              srcLang="en"
              label="English"
              src="/captions/blank.vtt"
            />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"></div>
              <span className="text-sm">Loading...</span>
            </div>
          </div>
        )}

        {/* Play Button Overlay - When paused and not started */}
        {!isPlaying &&
          !hasStarted &&
          (isHovered || isMobile || showMobileControls) && (
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
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-gray-900/30 transition-opacity">
            <button
              type="button"
              onClick={handlePause}
              aria-label="Pause video"
              className="pointer-events-auto flex items-center justify-center transition-all hover:scale-110"
            >
              <PauseIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}