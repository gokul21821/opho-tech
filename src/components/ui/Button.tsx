import { cn } from "@/lib/utils";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  withArrow?: boolean;
  leadingIcon?: ReactNode;
};

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4"
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, withArrow = true, leadingIcon, ...props },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-base  text-white transition-colors duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
        className,
      )}
      {...props}
    >
      {leadingIcon}
      <span>{children}</span>
      {withArrow ? <ArrowIcon /> : null}
    </button>
  ),
);

PrimaryButton.displayName = "PrimaryButton";

export const CTAArrowIcon = ArrowIcon;

