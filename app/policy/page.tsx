import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  CheckCheck,
  ChevronRight,
  EyeOff,
  HandCoins,
  Home,
  Package,
  PenLine,
  ShieldCheck,
  TriangleAlert,
  Video,
  type LucideIcon,
} from "lucide-react";
import { SectionEyebrow } from "@/components/home/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { legalPages } from "@/lib/legal-content";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildMetadata,
  pages,
  webPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.legal);

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

const hubPages = legalPages.filter((page) => page.slug !== "about-us");

export default function LegalHubPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema(pages.legal),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Policies", path: "/policy/" },
            ]),
            {
              "@type": "ItemList",
              "@id": `${absoluteUrl("/policy/")}#policy-list`,
              name: "Legal, Compliance & Editorial Policies",
              numberOfItems: hubPages.length,
              itemListElement: hubPages.map((page, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: page.title,
                url: absoluteUrl(page.href),
                description: page.description,
              })),
            },
          ],
        }}
      />
      <SiteHeader />
      <main id="main-content" className="overflow-x-hidden">
        <section className="bg-grid border-b border-border px-4 py-10 sm:px-5 sm:py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="m-0 inline-flex list-none flex-wrap items-center gap-1 rounded-full border border-border bg-white/80 px-2.5 py-1.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-medium text-brand no-underline transition hover:bg-cream"
                  >
                    <Home
                      className="size-3.5 shrink-0"
                      strokeWidth={2}
                      aria-hidden
                    />
                    Home
                  </Link>
                </li>
                <li aria-hidden className="flex items-center text-brand/35">
                  <ChevronRight className="size-3.5" strokeWidth={2} />
                </li>
                <li>
                  <span
                    aria-current="page"
                    className="inline-flex items-center rounded-full bg-brand px-2.5 py-1 text-[13px] font-semibold text-white"
                  >
                    Policies
                  </span>
                </li>
              </ol>
            </nav>

            <SectionEyebrow>Legal, Compliance &amp; Editorial</SectionEyebrow>
            <h1 className="font-heading m-0 max-w-3xl text-3xl font-semibold tracking-tight text-brand sm:text-4xl md:text-5xl">
              Policies &amp; Compliance
            </h1>
            <p className="mt-4 mb-0 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Review the documents that explain how we protect your information,
              deliver telehealth care, and operate Medical Cannabis Card Fresno.
            </p>
          </div>
        </section>

        <section
          className="bg-white px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
          aria-labelledby="policies-heading"
        >
          <h2 id="policies-heading" className="sr-only">
            Policy documents
          </h2>
          <div className="mx-auto grid max-w-[1240px] gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {hubPages.map((page) => {
              const Icon = legalIcons[page.href] ?? ShieldCheck;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col rounded-[1.75rem] border border-border bg-cream/40 p-6 no-underline transition hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white hover:shadow-[0_16px_40px_rgba(28,80,60,0.1)] sm:p-7"
                >
                  <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-brand text-lime">
                    <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                  </span>
                  <h3 className="font-heading m-0 text-xl font-semibold text-brand md:text-2xl">
                    {page.navLabel}
                  </h3>
                  <p className="mt-3 mb-6 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition group-hover:gap-2.5">
                    Read policy
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
