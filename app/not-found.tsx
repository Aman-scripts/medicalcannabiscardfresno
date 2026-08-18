import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | Medical Cannabis Fresno",
  },
  description:
    "The page you requested could not be found. Return home or contact Medical Cannabis Card Fresno for help.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center bg-cream px-5 py-24 text-center"
      >
        <p className="mb-4 text-xl font-semibold tracking-[0.18em] text-[#2a6b50] uppercase md:text-2xl">
          Error 404
        </p>
        <h1 className="font-heading m-0 max-w-[14ch] text-5xl font-semibold tracking-tight text-[#1c503c] md:text-6xl lg:text-7xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#3f5649] md:text-xl">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#1c503c] px-7 py-3.5 text-base font-semibold text-white no-underline transition hover:bg-[#143d2e]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us/"
            className="inline-flex items-center rounded-full border border-[#1c503c]/25 bg-white px-7 py-3.5 text-base font-semibold text-[#1c503c] no-underline transition hover:bg-[#e6eee6]"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
