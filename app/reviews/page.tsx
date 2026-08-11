import type { Metadata } from "next";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { LegalLayout } from "@/components/legal/legal-layout";
import { testimonials } from "@/lib/home-content";
import type { LegalPage } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.reviews);

const reviewsPage: LegalPage = {
  slug: "reviews",
  href: "/reviews/",
  navLabel: "Reviews",
  title: "Reviews",
  description:
    "Read verified patient reviews for Medical Cannabis Card Fresno and what patients say about their evaluation.",
};

function StarRow() {
  return (
    <div
      className="flex gap-1 text-[#c48a00]"
      role="img"
      aria-label="5 star rating"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.97 6.97 0 0 1 5.5 12c0-.72.12-1.41.34-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.07l3.66-2.98Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  );
}

export default function ReviewsPage() {
  return (
    <LegalLayout
      page={reviewsPage}
      seo={pages.reviews}
      showLegalNav={false}
      belowContent={
        <>
          <section
            className="border-t border-border bg-cream px-5 py-12 md:px-10 md:py-16"
            aria-labelledby="verified-reviews-heading"
          >
            <div className="mx-auto max-w-[1100px]">
              <h2
                id="verified-reviews-heading"
                className="font-heading m-0 mb-3 text-2xl font-semibold text-brand md:text-3xl"
              >
                Verified Patient Reviews
              </h2>
              <p className="m-0 mb-10 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                This section pulls in genuine reviews submitted through
                Google&apos;s verified review system, so what you see here
                reflects real experiences from real patients, not anything
                written by us.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {testimonials.map((t) => (
                  <article
                    key={t.name}
                    className="rounded-[1.75rem] border border-border bg-white p-7"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <StarRow />
                      <span
                        className="inline-flex size-8 items-center justify-center rounded-full bg-cream ring-1 ring-border"
                        title="Google Review"
                        role="img"
                        aria-label="Google Review"
                      >
                        <GoogleIcon className="size-4" />
                      </span>
                    </div>
                    <p className="mt-2 mb-5 text-sm leading-relaxed text-muted-foreground italic">
                      “{t.body}”
                    </p>
                    <div className="font-heading text-base font-semibold text-brand">
                      {t.name}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Trustindex verifies that the original source of the review
                      is Google.
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                <strong className="text-brand">Google</strong> rating score:{" "}
                <strong className="text-brand">3.4</strong> of 5, based on{" "}
                <strong className="text-brand">5 reviews</strong>
              </p>

              <p className="mx-auto mt-8 mb-0 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
                If you&apos;ve completed an evaluation with us, we&apos;d love to
                hear about your experience. Your feedback helps future patients
                know what to expect.
              </p>
            </div>
          </section>

          <ContactCtaSection
            title="Get Your Medical Marijuana Card Today"
            headingId="reviews-cta-heading"
            paragraphs={[
              "Your trusted partner for medical cannabis care in Fresno. We're here to make the process as easy and stress free as possible.",
              "Complete the process in 15 to 30 minutes, entirely online, no office visit required.",
            ]}
          />
        </>
      }
    >
      <div className="flex flex-col gap-4">
        <p className="m-0 text-[15px] leading-relaxed text-[rgba(28,80,60,0.78)]">
          At Medical Cannabis Card Fresno, we care about giving Fresno patients a
          smooth, dependable experience from start to finish. Our goal is always
          the same: clear guidance and responsible medical oversight throughout
          your evaluation.
        </p>
        <p className="m-0 text-[15px] leading-relaxed text-[rgba(28,80,60,0.78)]">
          Transparency matters to us, which is why this page is dedicated to
          real, verified feedback from patients who&apos;ve completed their
          evaluation with our licensed physicians.
        </p>
      </div>
    </LegalLayout>
  );
}
