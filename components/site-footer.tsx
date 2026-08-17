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
  "/policy/privacy/": EyeOff,
  "/policy/hipaa-compliance/": ShieldCheck,
  "/policy/consent-for-telehealth/": Video,
  "/policy/terms/": CheckCheck,
  "/policy/refund-policy/": HandCoins,
  "/policy/shipment-policy/": Package,
  "/policy/accessibility-statement/": Accessibility,
  "/policy/editorial-policy/": PenLine,
  "/policy/disclaimer/": TriangleAlert,
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-[#d8f0b8] uppercase">
      {children}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="overflow-x-hidden border-t border-border bg-brand px-4 pt-14 pb-8 text-primary-foreground sm:px-5 md:px-10 md:pt-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr_1.5fr] lg:gap-8">
          <div>
            <Link
              href="/#book"
              className="mb-4 inline-block no-underline transition hover:opacity-90"
              aria-label="Medical Cannabis Card Fresno home"
            >
              <BrandMark size="md" onDark />
            </Link>
            <p className="m-0 max-w-[280px] text-sm leading-relaxed text-white/85">
              Licensed telehealth evaluations for medical cannabis
              recommendations in Fresno, California.
            </p>
          </div>

          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link
                href="/#qualify-condition"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                Qualifying Conditions
              </Link>
              <Link
                href="/#price"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                Pricing Plans
              </Link>
              <Link
                href="/faq/"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                FAQs
              </Link>
              <Link
                href="/reviews/"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                Reviews
              </Link>
              <Link
                href="/medical-marijuana-doctors/"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                Our Doctors
              </Link>
              <Link
                href="/about-us/"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                About Us
              </Link>
              <Link
                href="/contact/"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                Contact Us
              </Link>
              <Link
                href="/policy/"
                className="text-white no-underline hover:text-[#d8f0b8]"
              >
                Legal Policies
              </Link>
            </div>
          </div>

          <div>
            <FooterHeading>Legal Policies</FooterHeading>
            <div className="flex flex-col gap-2.5 text-sm">
              {legalNav.map((item) => {
                const Icon = legalIcons[item.href];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2.5 text-white no-underline hover:text-[#d8f0b8]"
                  >
                    {Icon ? (
                      <Icon
                        className="size-5 shrink-0 text-[#d8f0b8]"
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
            <FooterHeading>Contact Information</FooterHeading>
            <div className="flex min-w-0 flex-col gap-2.5 text-sm text-white">
              <a href={PHONE_HREF} className="no-underline hover:text-[#d8f0b8]">
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="break-all no-underline hover:text-[#d8f0b8]"
              >
                {EMAIL}
              </a>
              <span>{ADDRESS}</span>
              <span className="whitespace-pre-line text-white/90">{HOURS}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6">
          <p className="m-0 text-sm text-white/90">
            All Rights Reserved medicalcannabiscardfresno.com © 2026
          </p>
          <p className="m-0 max-w-[520px] text-sm text-white/90">
            This website does not sell medicine nor controlled substances. It is
            a network of doctors and nurse practitioners, not a pharmacy /
            dispensary.
          </p>
        </div>
      </div>
    </footer>
  );
}
