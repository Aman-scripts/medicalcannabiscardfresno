import Link from "next/link";
import {
  Accessibility,
  CheckCheck,
  EyeOff,
  HandCoins,
  Package,
  PenLine,
  ShieldCheck,
  TriangleAlert,
  Video,
  type LucideIcon,
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/home-content";
import { legalNav } from "@/lib/legal-content";

const legalIcons: Record<string, LucideIcon> = {
  "/privacy": EyeOff,
  "/hipaa-compliance": ShieldCheck,
  "/consent-for-telehealth": Video,
  "/terms": CheckCheck,
  "/refund-policy": HandCoins,
  "/shipment-policy": Package,
  "/accessibility-statement": Accessibility,
  "/editorial-policy": PenLine,
  "/disclaimer": TriangleAlert,
};

export function SiteFooter() {
  return (
    <footer className="overflow-x-hidden border-t border-border bg-brand px-4 pt-14 pb-8 text-primary-foreground sm:px-5 md:px-10 md:pt-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr_1.5fr] lg:gap-8">
          <div>
            <div className="mb-4">
              <BrandMark size="md" onDark />
            </div>
            <p className="m-0 max-w-[280px] text-sm leading-relaxed text-white/70">
              Licensed telehealth evaluations for medical cannabis
              recommendations in Fresno, California.
            </p>
          </div>

          <div>
            <h6 className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
              Quick Links
            </h6>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link
                href="/#qualify-condition"
                className="text-white/85 no-underline hover:text-white"
              >
                Qualifying Conditions
              </Link>
              <Link
                href="/#price"
                className="text-white/85 no-underline hover:text-white"
              >
                Pricing Plans
              </Link>
              <Link
                href="/#faq"
                className="text-white/85 no-underline hover:text-white"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="text-white/85 no-underline hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h6 className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
              Legal, Compliance &amp; Editorial
            </h6>
            <div className="flex flex-col gap-3 text-sm">
              {legalNav.map((item) => {
                const Icon = legalIcons[item.href];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2.5 text-white/85 no-underline hover:text-white"
                  >
                    {Icon ? (
                      <Icon
                        className="size-5 shrink-0 text-lime"
                        strokeWidth={1.9}
                        aria-hidden
                      />
                    ) : null}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="min-w-0">
            <h6 className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
              Contact Information
            </h6>
            <div className="flex min-w-0 flex-col gap-2.5 text-sm text-white/85">
              <a href={PHONE_HREF} className="no-underline hover:text-white">
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="break-all no-underline hover:text-white"
              >
                {EMAIL}
              </a>
              <span>{ADDRESS}</span>
              <span className="whitespace-pre-line text-white/60">{HOURS}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6">
          <p className="m-0 text-xs text-white/55">
            All Rights Reserved medicalcannabiscardfresno.com © 2026
          </p>
          <p className="m-0 max-w-[520px] text-xs text-white/55">
            This website does not sell medicine nor controlled substances. It is
            a network of doctors and nurse practitioners, not a pharmacy /
            dispensary.
          </p>
        </div>
      </div>
    </footer>
  );
}
