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
    <nav className="w-full mb-6">
      <ol className="flex w-full min-w-0 items-center justify-center gap-2 text-base flex-wrap sm:flex-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className="flex min-w-0 items-center gap-2"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="min-w-0 truncate text-white/80 transition-colors duration-200 hover:text-orange-500"
                  title={item.label} // Show full text on hover
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? "min-w-0 truncate text-orange-500"
                      : "min-w-0 truncate text-white/80"
                  }
                  title={item.label} // Show full text on hover
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