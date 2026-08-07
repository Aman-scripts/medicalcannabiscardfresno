"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { BookLink } from "@/components/book-link";
import { BrandMark } from "@/components/brand-mark";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/home-content";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#price", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

const desktopNavLinks = navLinks.filter((link) => link.href !== "/");

export function SiteHeader() {
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
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={cn(
          "fixed inset-0 z-[90] flex flex-col bg-[linear-gradient(180deg,#f3f6f2_0%,#e6eee6_100%)] transition duration-300 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
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

          <BookLink
            className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-primary-foreground transition hover:bg-brand-deep"
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </BookLink>
        </nav>

        <div className="pb-10 text-center">
          <a
            href={PHONE_HREF}
            className="text-sm font-semibold tracking-wide text-brand/70 no-underline transition hover:text-brand"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>,
      document.body,
    );

  return (
    <header className="sticky top-0 z-50 animate-fade-in border-b border-border/80 bg-[color-mix(in_srgb,var(--cream)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-5 py-3.5 lg:px-10 lg:py-4">
        <Link
          href="/"
          className="mr-auto shrink-0 no-underline transition hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <BrandMark size="sm" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-brand/80 no-underline transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 sm:flex">
          <a
            href={PHONE_HREF}
            className="hidden text-base font-semibold text-brand no-underline hover:text-brand-soft lg:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <BookLink className="inline-flex items-center rounded-full border-0 bg-brand px-6 py-2.5 text-base font-semibold text-primary-foreground transition hover:bg-brand-deep">
            Get Started
          </BookLink>
        </div>

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
      </div>

      {mobileMenu}
    </header>
  );
}
