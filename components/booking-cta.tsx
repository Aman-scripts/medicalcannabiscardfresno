import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BookingCtaProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: ReactNode;
};

/** Server-friendly booking CTA; mobile modal is wired by BookingEnhancer. */
export function BookingCta({
  className,
  children,
  onClick,
  ...props
}: BookingCtaProps) {
  return (
    <a
      href="/#book"
      data-booking-cta
      className={cn(className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}
