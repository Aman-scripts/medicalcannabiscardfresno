"use client";

import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { useBookingModal } from "@/components/booking-modal";
import { cn } from "@/lib/utils";

export function BookLink({
  className,
  children,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openBooking } = useBookingModal();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    openBooking();
  };

  return (
    <button
      type="button"
      className={cn(
        "cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
