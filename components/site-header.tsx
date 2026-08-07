"use client";

import Link from "next/link";
import { useState } from "react";
import { BookLink } from "@/components/book-link";
import { BrandMark } from "@/components/brand-mark";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/home-content";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#price", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 animate-fade-in border-b border-border/80 bg-[color-mix(in_srgb,var(--cream)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-5 py-3.5 lg:px-10 lg:py-4">
        <BookLink
          className="mr-auto shrink-0 no-underline transition hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <BrandMark size="sm" />
        </BookLink>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
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
          <BookLink className="inline-flex items-center rounded-full bg-brand px-6 py-2.5 text-base font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep">
            Get Started
          </BookLink>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-border bg-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-brand transition",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-1.5 left-0 h-px w-full bg-brand transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-brand transition",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-brand no-underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="text-base font-semibold text-brand">
              {PHONE_DISPLAY}
            </a>
            <BookLink
              className="mt-1 inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-base font-semibold text-primary-foreground no-underline"
              onClick={() => setOpen(false)}
            >
              Get Started
            </BookLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
