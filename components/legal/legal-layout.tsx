import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { legalNav, type LegalPage } from "@/lib/legal-content";
import {
  breadcrumbSchema,
  type PageSeo,
  webPageSchema,
  withTrailingSlash,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LegalLayout({
  page,
  seo,
  children,
  showLegalNav = true,
  belowContent,
}: {
  page: LegalPage;
  seo?: PageSeo;
  children: React.ReactNode;
  showLegalNav?: boolean;
  belowContent?: React.ReactNode;
}) {
  const currentPath = withTrailingSlash(page.href);
  const publishedLabel = formatDate(seo?.published);
  const modifiedLabel = formatDate(seo?.modified ?? undefined);

  return (
    <>
      {seo ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              webPageSchema(seo),
              breadcrumbSchema([
                { name: "Home", path: "/" },
                { name: page.title, path: currentPath },
              ]),
            ],
          }}
        />
      ) : null}
      <SiteHeader />
      <main id="main-content" className="bg-white">
        <div
          className={cn(
            "mx-auto grid max-w-[1100px] gap-10 px-5 py-12 md:px-10 md:py-16",
            showLegalNav && "lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16",
          )}
        >
          <article className="min-w-0">
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="m-0 inline-flex list-none flex-wrap items-center gap-1 rounded-full border border-border bg-cream/80 px-2.5 py-1.5 text-sm shadow-[0_1px_2px_rgba(28,80,60,0.04)]">
                <li>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-medium text-brand no-underline transition hover:bg-white"
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
                    {page.title}
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="font-heading m-0 text-4xl font-semibold tracking-tight text-brand md:text-5xl">
              {page.title}
            </h1>

            <div className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
              {seo?.published && publishedLabel ? (
                <p className="m-0">
                  <span className="sr-only">Date published: </span>
                  Published{" "}
                  <time dateTime={seo.published}>{publishedLabel}</time>
                </p>
              ) : null}
              {seo?.modified && modifiedLabel ? (
                <p className="m-0">
                  <span className="sr-only">Date modified: </span>
                  Last updated{" "}
                  <time dateTime={seo.modified}>{modifiedLabel}</time>
                </p>
              ) : page.lastUpdated ? (
                <p className="m-0 italic">Last updated: {page.lastUpdated}</p>
              ) : null}
            </div>

            <div className="legal-prose mt-10">{children}</div>
          </article>

          {showLegalNav ? (
            <aside className="lg:pt-1">
              <div className="rounded-2xl border border-border bg-cream/60 p-5 lg:sticky lg:top-28">
                <p className="mb-4 whitespace-nowrap text-[11px] font-semibold tracking-[0.12em] text-brand-soft uppercase">
                  Legal, Compliance &amp; Editorial
                </p>
                <nav aria-label="Legal pages">
                  <ul className="m-0 flex list-none flex-col gap-1 p-0">
                    {legalNav.map((item) => {
                      const href = withTrailingSlash(item.href);
                      const active = href === currentPath;
                      return (
                        <li key={href}>
                          <Link
                            href={href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "block border-l-2 py-2 pl-3 text-sm no-underline transition",
                              active
                                ? "border-brand font-semibold text-brand"
                                : "border-transparent font-medium text-brand underline-offset-2 hover:border-brand/40 hover:underline",
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </aside>
          ) : null}
        </div>
        {belowContent}
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSections({ page }: { page: LegalPage }) {
  return (
    <div className="flex flex-col gap-8">
      {page.sections.map((section, index) => (
        <section
          key={`${section.heading ?? "intro"}-${index}`}
          aria-labelledby={
            section.heading ? `legal-section-${index}` : undefined
          }
        >
          {section.heading ? (
            <h2
              id={`legal-section-${index}`}
              className="font-heading m-0 mb-3 text-xl font-semibold text-brand md:text-2xl"
            >
              {section.heading}
            </h2>
          ) : null}
          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="m-0 mb-3 text-[15px] leading-relaxed text-[rgba(28,80,60,0.78)] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
          {section.listItems && section.listItems.length > 0 ? (
            <ul className="mt-3 mb-0 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[rgba(28,80,60,0.78)]">
              {section.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
