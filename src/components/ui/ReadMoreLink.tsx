import Link, { type LinkProps } from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { CTAArrowIcon } from "./Button";

type ReadMoreLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
  };

export const ReadMoreLink = forwardRef<HTMLAnchorElement, ReadMoreLinkProps>(
  ({ children, href, variant = "primary", className, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      {...props}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200",
        variant === "primary"
          ? "text-orange-500 hover:text-orange-600"
          : "text-orange-600 hover:text-orange-500",
        className,
      )}
    >
      <span>{children}</span>
      <CTAArrowIcon />
    </Link>
  ),
);

ReadMoreLink.displayName = "ReadMoreLink";

