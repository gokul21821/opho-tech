"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  isActive?: boolean;
  linkClassName: string;
  activeClassName: string;
};

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={cn("size-3 text-gray-200", className)}
    fill="currentColor"
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7 0 0h12L6 7Z"
      fill="currentColor"
    />
  </svg>
);

export function Dropdown({
  label,
  items,
  isActive,
  linkClassName,
  activeClassName,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const activeFromChildren = items.some((item) =>
    pathname?.startsWith(item.href),
  );

  return (
    <div
      className="relative hidden h-full items-center md:flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={cn(
          "group gap-2",
          linkClassName,
          (isActive || activeFromChildren || open) && activeClassName,
          open && "after:w-full",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <ChevronDown
          className={cn(
            "transition-transform duration-200",
            open ? "rotate-180" : "",
          )}
        />
      </button>

      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-40 w-64 -translate-x-1/2 overflow-hidden rounded-b-lg opacity-0 shadow-[0px_4px_4.8px_0px_rgba(0,0,0,0.25)] transition-all duration-200",
          open && "pointer-events-auto translate-y-2 opacity-100",
        )}
        role="menu"
      >
        <div className="relative overflow-hidden rounded-b-lg bg-[#fff9f5] px-4 py-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(36,36,36,0.09) 1px, transparent 1px)",
              backgroundSize: "15px 15px",
            }}
          />
          <ul className="relative">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-0 py-2 text-sm font-normal leading-normal text-gray-600 transition-colors hover:text-blue-500",
                    index < items.length - 1 && "border-b border-gray-100",
                  )}
                >
                  {item.label}
                  {item.description ? (
                    <span className="mt-1 block text-xs text-gray-500">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

