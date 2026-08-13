import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildMetadata, faqPageGraph, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": faqPageGraph(),
        }}
      />
      <SiteHeader />
      <main id="main-content" data-cv="faq">
        <div className="border-b border-border bg-white px-5 py-6 md:px-10">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-[840px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <ol className="m-0 inline-flex w-max list-none items-center gap-1 rounded-full border border-border bg-cream/80 px-2.5 py-1.5 text-sm whitespace-nowrap shadow-[0_1px_2px_rgba(28,80,60,0.04)]">
              <li className="shrink-0">
                <Link
                  href="/"
                  aria-label="Home"
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-medium text-brand no-underline transition hover:bg-white"
                >
                  <Home
                    className="size-3.5 shrink-0"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </li>
              <li className="shrink-0 text-muted-foreground" aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="shrink-0">
                <span className="rounded-full bg-white px-2 py-1 font-medium text-brand">
                  FAQ
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <FaqSection headingAs="h1" className="border-t-0" />
        <ContactCtaSection
          eyebrow="Get Started"
          title="Still Have Questions?"
          headingId="faq-cta-heading"
          paragraphs={[
            "Our team can walk you through the Fresno medical cannabis card process and help you book an evaluation.",
          ]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
