"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  describedBy?: string;
  dismissible?: boolean;
};

export function Modal({
  open,
  onClose,
  children,
  className,
  labelledBy,
  describedBy,
  dismissible = true,
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && dismissible) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, dismissible]);

  useEffect(() => {
    if (open) {
      containerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      // Prevent body scroll when modal is open and preserve scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  if (!open) return null;

  const modalContent = (
    <div
      aria-hidden={!open}
      className="fixed inset-0 z-[9999] flex min-h-[100dvh] items-start justify-center overflow-y-auto bg-black/50 px-4 pt-[calc(env(safe-area-inset-top)+12px)] pb-[calc(env(safe-area-inset-bottom)+16px)] backdrop-blur-sm sm:items-center sm:px-0 sm:pt-0 sm:pb-0"
    >
      <div
        role="button"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0"
        onClick={dismissible ? onClose : undefined}
      />
      <div
        ref={containerRef}
        className={cn(
          "relative z-10 w-full max-w-5xl rounded-2xl bg-transparent shadow-2xl outline-none transition duration-300 animate-modal-in",
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );

  // Render modal in a portal at document body level to ensure it's always on top
  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return null;
}

