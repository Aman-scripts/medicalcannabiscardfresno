import Link from "next/link";
import { BookingCta } from "@/components/booking-cta";
import { BrandMark } from "@/components/brand-mark";
import { MobileNavSlot } from "@/components/mobile-nav-slot";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/home-content";

const desktopNavLinks = [
  { href: "/#price", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact/", label: "Contact us" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-cream/95">
      <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-5 py-3.5 lg:px-10 lg:py-4">
        <Link
          href="/"
          className="mr-auto shrink-0 no-underline transition hover:opacity-90"
        >
          <BrandMark size="sm" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-brand no-underline transition hover:text-brand-soft"
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
          <BookingCta className="inline-flex items-center rounded-full border-0 bg-brand px-6 py-2.5 text-base font-semibold text-primary-foreground transition hover:bg-brand-deep">
            Get Started
          </BookingCta>
        </div>

        <MobileNavSlot />
      </div>
    </header>
  );
}
