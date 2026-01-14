"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-8 w-full">
      <ol className="flex w-full min-w-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-sm md:text-lg">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className={
                isLast
                  ? "flex min-w-0 flex-1 items-center gap-2"
                  : "flex shrink-0 items-center gap-2"
              }
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="shrink-0 text-white/80 transition-colors duration-200 hover:text-orange-500"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? "min-w-0 truncate font-semibold text-orange-500"
                      : "shrink-0 text-white/80"
                  }
                >
                  {item.label}
                </span>
              )}
              {!isLast && <span className="shrink-0 text-white/50">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

