import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { SectionEyebrow } from "@/components/home/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { doctors, doctorsHub } from "@/lib/doctors-content";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/home-content";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildMetadata,
  pages,
  webPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.doctors);

const badgeIcons = [ShieldCheck, Lock, Star, ShieldCheck] as const;

export default function DoctorsHubPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema(pages.doctors),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Our Doctors", path: "/medical-marijuana-doctors/" },
            ]),
            {
              "@type": "ItemList",
              "@id": `${absoluteUrl("/medical-marijuana-doctors/")}#doctor-list`,
              name: "Medical Cannabis Card Fresno Doctors",
              itemListElement: doctors.map((doctor, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`/medical-marijuana-doctors/${doctor.slug}/`),
                name: doctor.name,
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
                    {doctorsHub.breadcrumb}
                  </span>
                </li>
              </ol>
            </nav>

            <SectionEyebrow>{doctorsHub.eyebrow}</SectionEyebrow>
            <h1 className="font-heading m-0 max-w-4xl text-3xl font-semibold tracking-tight text-brand sm:text-4xl md:text-5xl">
              {doctorsHub.titleBefore}{" "}
              <em className="not-italic text-brand-soft">
                {doctorsHub.titleAccent}
              </em>
            </h1>
            <p className="mt-4 mb-0 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              {doctorsHub.heroSubhead}
            </p>

            <ul className="mt-8 m-0 flex list-none flex-wrap gap-3 p-0">
              {doctorsHub.trustBadges.map((badge, index) => {
                const Icon = badgeIcons[index] ?? ShieldCheck;
                return (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-sm font-medium text-brand"
                  >
                    <Icon
                      className="size-4 text-brand-soft"
                      strokeWidth={1.9}
                      aria-hidden
                    />
                    {badge}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          className="bg-white px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
          aria-labelledby="board-certified-doctor-heading"
        >
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Physician Network</SectionEyebrow>
            <h2
              id="board-certified-doctor-heading"
              className="font-heading m-0 mb-3 max-w-3xl text-3xl font-semibold text-brand md:text-4xl"
            >
              {doctorsHub.doctorSection.title}
            </h2>
            <p className="m-0 mb-10 max-w-3xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {doctorsHub.doctorSection.subhead}
            </p>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {doctors.map((doctor) => (
                <Link
                  key={doctor.slug}
                  href={`/medical-marijuana-doctors/${doctor.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-cream/40 no-underline transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_16px_40px_rgba(28,80,60,0.1)]"
                >
                  <div className="relative aspect-[4/3] bg-sand">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-heading m-0 text-2xl font-semibold text-brand">
                      {doctor.name}
                    </h3>
                    <p className="mt-2 mb-0 text-sm text-muted-foreground">
                      Licensed: {doctor.licensedStatesLabel} · Experience:{" "}
                      {doctor.experienceYears} Years
                    </p>
                    <p className="mt-4 mb-6 flex-1 text-[15px] leading-relaxed text-[rgba(28,80,60,0.78)]">
                      {doctor.shortBio}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:text-brand-deep">
                      View Profile
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-border bg-cream px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
          aria-labelledby="why-doctor-heading"
        >
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2
              id="why-doctor-heading"
              className="font-heading m-0 mb-3 max-w-3xl text-3xl font-semibold text-brand md:text-4xl"
            >
              {doctorsHub.whySection.title}
            </h2>
            <p className="m-0 mb-10 max-w-3xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {doctorsHub.whySection.subhead}
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {doctorsHub.whySection.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="rounded-[1.75rem] border border-border bg-white p-6"
                >
                  <div className="mb-4 font-heading text-sm font-semibold tracking-[0.14em] text-brand-soft uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-heading m-0 mb-2 text-xl font-semibold text-brand">
                    {feature.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 rounded-[1.75rem] border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="m-0 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {doctorsHub.whySection.ctaNote}
              </p>
              <BookingCta className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep">
                Book Your Consultation Today
              </BookingCta>
            </div>
          </div>
        </section>

        <section
          className="bg-white px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
          aria-labelledby="evaluation-process-heading"
        >
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Evaluation Process</SectionEyebrow>
            <h2
              id="evaluation-process-heading"
              className="font-heading m-0 mb-3 max-w-3xl text-3xl font-semibold text-brand md:text-4xl"
            >
              {doctorsHub.processSection.title}
            </h2>
            <p className="m-0 mb-10 max-w-3xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {doctorsHub.processSection.subhead}
            </p>

            <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-2">
              {doctorsHub.processSection.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[1.75rem] border border-border bg-cream/50 p-6"
                >
                  <div className="mb-3 font-heading text-sm font-semibold tracking-[0.14em] text-brand-soft uppercase">
                    Step {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-heading m-0 mb-2 text-xl font-semibold text-brand">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="border-t border-border bg-sand px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
          aria-labelledby="doctors-faq-heading"
        >
          <div className="mx-auto max-w-[840px]">
            <div className="mb-10 text-center">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2
                id="doctors-faq-heading"
                className="font-heading m-0 mb-3 text-3xl font-semibold text-brand md:text-4xl"
              >
                {doctorsHub.faqSection.title}
              </h2>
              <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
                {doctorsHub.faqSection.subhead}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {doctorsHub.faqSection.faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[1.25rem] border border-border bg-white px-5 py-4 open:shadow-[0_10px_30px_rgba(28,80,60,0.06)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-brand">
                    <h3 className="font-heading m-0 text-[15px] font-semibold md:text-base">
                      {item.q}
                    </h3>
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sand text-brand ring-1 ring-border transition group-open:rotate-45 group-open:bg-lime"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 mb-1 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-brand no-underline transition hover:bg-cream"
              >
                Contact Our Support Team
              </Link>
            </div>
          </div>
        </section>

        <section
          className="bg-white px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
          aria-labelledby="schedule-appointment-heading"
        >
          <div className="mx-auto max-w-[1240px]">
            <div className="rounded-[2rem] border border-border bg-cream/60 p-8 md:p-12">
              <SectionEyebrow>Get Started</SectionEyebrow>
              <h2
                id="schedule-appointment-heading"
                className="font-heading m-0 mb-3 max-w-3xl text-3xl font-semibold text-brand md:text-4xl"
              >
                {doctorsHub.scheduleSection.title}
              </h2>
              <p className="m-0 mb-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {doctorsHub.scheduleSection.subhead}
              </p>
              <p className="m-0 mb-8 text-sm text-brand-soft">
                {doctorsHub.scheduleSection.microcopy}
              </p>
              <BookingCta className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep">
                Get Your CA MMJ Card Today
              </BookingCta>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-3 rounded-[1.5rem] border border-border bg-white p-5 no-underline transition hover:bg-cream"
                >
                  <Phone className="mt-0.5 size-5 text-brand" aria-hidden />
                  <span>
                    <span className="block font-heading text-base font-semibold text-brand">
                      Call Now
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Talk to our friendly team instantly. {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 rounded-[1.5rem] border border-border bg-white p-5 no-underline transition hover:bg-cream"
                >
                  <Mail className="mt-0.5 size-5 text-brand" aria-hidden />
                  <span>
                    <span className="block font-heading text-base font-semibold text-brand">
                      Email
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Get answers to your medical cannabis questions.
                    </span>
                  </span>
                </a>
                <Link
                  href="/contact/"
                  className="flex items-start gap-3 rounded-[1.5rem] border border-border bg-white p-5 no-underline transition hover:bg-cream"
                >
                  <MessageCircle
                    className="mt-0.5 size-5 text-brand"
                    aria-hidden
                  />
                  <span>
                    <span className="block font-heading text-base font-semibold text-brand">
                      Live Chat
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Connect with our support team anytime.
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactCtaSection
          title="Ready to Meet Our Licensed Doctor?"
          headingId="doctors-hub-cta-heading"
          paragraphs={[
            "Book a secure online evaluation with a California-licensed physician and get clear next steps for your Fresno medical cannabis recommendation.",
          ]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
