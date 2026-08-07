"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { BookingForm } from "@/components/booking-form";

const MOBILE_TABLET_QUERY = "(max-width: 1023px)";

function isMobileOrTablet() {
  return window.matchMedia(MOBILE_TABLET_QUERY).matches;
}

function scrollToHeroForm() {
  const el = document.getElementById("book");
  if (!el) return;
  window.history.pushState(null, "", "/#book");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type BookingModalContextValue = {
  open: boolean;
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(
  null,
);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return ctx;
}

function BookingModalDialog() {
  const { open, closeBooking } = useBookingModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeBooking]);

  // Modal is mobile/tablet only — close if viewport grows to desktop.
  useEffect(() => {
    if (!open) return;

    const media = window.matchMedia(MOBILE_TABLET_QUERY);
    const onChange = () => {
      if (!media.matches) closeBooking();
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [open, closeBooking]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:hidden">
      <button
        type="button"
        aria-label="Close booking form"
        className="absolute inset-0 bg-brand/55 backdrop-blur-[2px]"
        onClick={closeBooking}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative z-10 max-h-[min(92vh,860px)] w-full max-w-[480px] overflow-y-auto"
      >
        <button
          type="button"
          onClick={closeBooking}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full bg-cream text-brand transition hover:bg-sand"
        >
          <X className="size-4" strokeWidth={2.25} />
        </button>
        <BookingForm idPrefix="modal" titleId="booking-modal-title" />
      </div>
    </div>,
    document.body,
  );
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const closeBooking = useCallback(() => setOpen(false), []);

  const openBooking = useCallback(() => {
    if (typeof window === "undefined") return;

    if (isMobileOrTablet()) {
      setOpen(true);
      return;
    }

    // Desktop: use the in-hero form instead of a modal.
    if (pathname === "/") {
      scrollToHeroForm();
      return;
    }

    router.push("/#book");
  }, [pathname, router]);

  const value = useMemo(
    () => ({ open, openBooking, closeBooking }),
    [open, openBooking, closeBooking],
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModalDialog />
    </BookingModalContext.Provider>
  );
}
