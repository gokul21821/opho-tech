"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useEffect, useRef } from "react";

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
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      containerRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      aria-hidden={!open}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
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
          "relative z-10 w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl outline-none transition duration-300 animate-modal-in",
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
}

