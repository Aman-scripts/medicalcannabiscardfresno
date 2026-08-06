import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/home-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand px-5 pt-16 pb-8 text-primary-foreground md:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
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
              <Link href="/#qualify-condition" className="text-white/85 no-underline hover:text-white">
                Qualifying Conditions
              </Link>
              <Link href="/#price" className="text-white/85 no-underline hover:text-white">
                Pricing Plans
              </Link>
              <Link href="/#faq" className="text-white/85 no-underline hover:text-white">
                FAQs
              </Link>
              <Link href="/shipment-policy" className="text-white/85 no-underline hover:text-white">
                Shipment Policy
              </Link>
              <Link href="/disclaimer" className="text-white/85 no-underline hover:text-white">
                Disclaimer
              </Link>
            </div>
          </div>

          <div>
            <h6 className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
              Legal
            </h6>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/terms" className="text-white/85 no-underline hover:text-white">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-white/85 no-underline hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" className="text-white/85 no-underline hover:text-white">
                Refund Policy
              </Link>
              <Link href="/contact" className="text-white/85 no-underline hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h6 className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
              Contact Information
            </h6>
            <div className="flex flex-col gap-2.5 text-sm text-white/85">
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
