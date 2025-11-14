import { cn } from "@/lib/utils";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

import { CTAArrowIcon } from "./Button";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  withArrow?: boolean;
  leadingIcon?: ReactNode;
};

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(({ className, children, withArrow = true, leadingIcon, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center gap-2 rounded-lg bg-orange-25 px-6 py-3 text-base text-orange-500 transition-colors duration-200 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400",
      className,
    )}
    {...props}
  >
    {leadingIcon}
    <span>{children}</span>
    {withArrow ? <CTAArrowIcon /> : null}
  </button>
));

SecondaryButton.displayName = "SecondaryButton";

