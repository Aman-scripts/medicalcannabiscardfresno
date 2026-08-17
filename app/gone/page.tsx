import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.gone);

export default function GonePage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center bg-cream px-5 py-24 text-center"
      >
        <p className="mb-3 text-[11px] font-semibold tracking-[0.14em] text-brand-soft uppercase">
          Error 410
        </p>
        <h1 className="font-heading m-0 max-w-[18ch] text-4xl font-semibold tracking-tight text-brand md:text-5xl">
          This page has been removed
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          The content at this URL is permanently gone and will not come back.
          Please use the links below to continue.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us/"
            className="inline-flex items-center rounded-full border border-brand/25 bg-white px-6 py-3 text-sm font-semibold text-brand no-underline transition hover:bg-sand"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
