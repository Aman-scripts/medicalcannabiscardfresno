"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { BrandMark } from "@/components/brand-mark";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/home-content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#price", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact/", label: "Contact us" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-full border border-border bg-white md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className="relative block h-3 w-4">
          <span className="absolute top-0 left-0 h-px w-full bg-brand" />
          <span className="absolute top-1.5 left-0 h-px w-full bg-brand" />
          <span className="absolute top-3 left-0 h-px w-full bg-brand" />
        </span>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[90] flex flex-col bg-[linear-gradient(180deg,#f3f6f2_0%,#e6eee6_100%)] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
              <Link
                href="/"
                className="no-underline"
                onClick={() => setOpen(false)}
              >
                <BrandMark size="sm" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex size-11 items-center justify-center rounded-full border border-brand/25 bg-white text-brand transition hover:border-brand/40 hover:bg-sand"
              >
                <X className="size-5" strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-3xl font-semibold tracking-tight text-brand no-underline transition hover:text-brand-soft"
                >
                  {link.label}
                </Link>
              ))}

              <BookingCta
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-primary-foreground transition hover:bg-brand-deep"
                onClick={() => setOpen(false)}
              >
                Book a Consultation
              </BookingCta>
            </nav>

            <div className="pb-10 text-center">
              <a
                href={PHONE_HREF}
                className="text-sm font-semibold tracking-wide text-brand no-underline transition hover:text-brand-soft"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
