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
    <nav className="mb-8">
      <ol className="flex items-center gap-2 text-sm md:text-base">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-white/80 hover:text-orange-500 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? "text-orange-500 font-semibold"
                      : "text-white/80"
                  }
                >
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-white/50">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

