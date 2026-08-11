import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  ChevronRight,
  GraduationCap,
  Home,
  ShieldCheck,
} from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { SectionEyebrow } from "@/components/home/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getDoctorBySlug,
  getDoctorSlugs,
} from "@/lib/doctors-content";
import {
  SITE_DATES,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  buildMetadata,
} from "@/lib/seo";

type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getDoctorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};

  return buildMetadata({
    path: `/medical-marijuana-doctors/${doctor.slug}/`,
    title: `${doctor.name} | Fresno MMJ Doctor`,
    description: `${doctor.name}: California-licensed medical cannabis evaluations for Fresno patients via HIPAA-compliant telehealth.`,
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
    ogImage: doctor.image,
  });
}

export default async function DoctorDetailPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const profileUrl = absoluteUrl(
    `/medical-marijuana-doctors/${doctor.slug}/`,
  );
  const physicianId = `${profileUrl}#physician`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Physician", "Person"],
              "@id": physicianId,
              name: doctor.name,
              honorificPrefix: doctor.honorificPrefix,
              honorificSuffix: doctor.honorificSuffix,
              givenName: doctor.givenName,
              familyName: doctor.familyName,
              jobTitle: doctor.jobTitle,
              description: doctor.shortBio,
              medicalSpecialty: ["Pediatric"],
              knowsAbout: ["Cannabis Medicine", "Telemedicine"],
              url: profileUrl,
              image: absoluteUrl(doctor.image),
              memberOf: { "@id": `${SITE_URL}/#organization` },
              worksFor: { "@id": `${SITE_URL}/#organization` },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "certification",
                  name: "Board Certification in Pediatrics",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "license",
                  name: "California Medical License",
                },
              ],
            },
            {
              "@type": "ProfilePage",
              "@id": `${profileUrl}#profilepage`,
              url: profileUrl,
              name: `${doctor.honorificPrefix} ${doctor.name} — Fresno Medical Marijuana Doctor`,
              description: doctor.shortBio,
              mainEntity: { "@id": physicianId },
              isPartOf: { "@id": `${SITE_URL}/#website` },
              breadcrumb: {
                "@id": `${profileUrl}#breadcrumb`,
              },
            },
            {
              ...breadcrumbSchema([
                { name: "Home", path: "/" },
                {
                  name: "Our Doctors",
                  path: "/medical-marijuana-doctors/",
                },
                {
                  name: doctor.name,
                  path: `/medical-marijuana-doctors/${doctor.slug}/`,
                },
              ]),
              "@id": `${profileUrl}#breadcrumb`,
            },
            {
              "@type": "FAQPage",
              "@id": `${profileUrl}#faq`,
              mainEntity: doctor.faqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
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
                  <Link
                    href="/medical-marijuana-doctors/"
                    className="inline-flex items-center rounded-full px-2 py-1 font-medium text-brand no-underline transition hover:bg-cream"
                  >
                    Our Doctors
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
                    {doctor.name}
                  </span>
                </li>
              </ol>
            </nav>

            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <SectionEyebrow>Physician Profile</SectionEyebrow>
                <h1 className="font-heading m-0 max-w-4xl text-3xl font-semibold tracking-tight text-brand sm:text-4xl md:text-5xl">
                  {doctor.name}
                </h1>
                <p className="mt-3 mb-0 text-sm font-semibold tracking-[0.04em] text-brand-soft uppercase sm:text-base">
                  {doctor.specialty}
                </p>
                <p className="mt-4 mb-0 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  Experienced physician providing professional medical
                  evaluations through secure telehealth consultations. Dedicated
                  to delivering patient-focused care through convenient and
                  confidential online appointments.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BookingCta className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep">
                    Start Your Evaluation
                  </BookingCta>
                  <Link
                    href="/medical-marijuana-doctors/"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-brand no-underline transition hover:bg-cream"
                  >
                    View All Doctors
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-border bg-sand shadow-[0_20px_50px_rgba(28,80,60,0.12)]">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="360px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Credentials</SectionEyebrow>
            <h2 className="font-heading m-0 mb-3 text-3xl font-semibold text-brand md:text-4xl">
              Medical Credentials
            </h2>
            <p className="m-0 mb-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
              All credentials are publicly verifiable through the NPPES NPI
              Registry maintained by the U.S. Department of Health &amp; Human
              Services.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {doctor.credentials.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-border bg-cream/50 p-6"
                >
                  <p className="m-0 text-[11px] font-semibold tracking-[0.12em] text-brand-soft uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 mb-0 font-heading text-xl font-semibold text-brand">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={`https://npiregistry.cms.hhs.gov/provider-view/${doctor.npi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline hover:underline"
            >
              <BadgeCheck className="size-4" aria-hidden />
              View on NPI Registry
            </a>
          </div>
        </section>

        <section className="border-t border-border bg-cream px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Training</SectionEyebrow>
            <h2 className="font-heading m-0 mb-8 text-3xl font-semibold text-brand md:text-4xl">
              Education &amp; Credentials
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {doctor.education.map((item) => (
                <article
                  key={item.school}
                  className="rounded-[1.75rem] border border-border bg-white p-6"
                >
                  <GraduationCap
                    className="mb-4 size-6 text-brand"
                    aria-hidden
                  />
                  <h3 className="font-heading m-0 mb-2 text-xl font-semibold text-brand">
                    {item.school}
                  </h3>
                  <p className="m-0 text-[15px] text-muted-foreground">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Licensing</SectionEyebrow>
            <h2 className="font-heading m-0 mb-3 text-3xl font-semibold text-brand md:text-4xl">
              Licensed in California
            </h2>
            <p className="m-0 mb-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
              Each license number below is publicly verifiable through that
              state&apos;s medical board.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {doctor.licenses.map((license) => (
                <article
                  key={license.state}
                  className="rounded-[1.5rem] border border-border bg-cream/40 p-6"
                >
                  <h3 className="font-heading m-0 text-lg font-semibold text-brand">
                    {license.state}
                  </h3>
                  <p className="mt-2 mb-4 text-sm text-muted-foreground">
                    License — {license.license}
                  </p>
                  {license.verifyUrl ? (
                    <a
                      href={license.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand no-underline hover:underline"
                    >
                      Verify
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-cream px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="font-heading m-0 mb-6 text-3xl font-semibold text-brand md:text-4xl">
              About {doctor.honorificPrefix} {doctor.givenName}{" "}
              {doctor.familyName} {doctor.honorificSuffix}
            </h2>
            <div className="max-w-3xl space-y-4">
              {doctor.longBio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="m-0 text-[15px] leading-relaxed text-[rgba(28,80,60,0.78)] md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="font-heading mt-10 mb-4 text-2xl font-semibold text-brand">
              Role at Medical Cannabis Card Fresno
            </h3>
            <div className="max-w-3xl space-y-4">
              {doctor.roleBio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="m-0 text-[15px] leading-relaxed text-[rgba(28,80,60,0.78)] md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Conditions</SectionEyebrow>
            <h2 className="font-heading m-0 mb-3 text-3xl font-semibold text-brand md:text-4xl">
              Conditions {doctor.honorificPrefix} {doctor.familyName} Evaluates
            </h2>
            <p className="m-0 mb-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
              Eligibility varies by patient and clinical judgment. Final
              eligibility is determined during your consultation under
              California&apos;s qualifying-condition framework.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {doctor.conditions.map((condition) => (
                <article
                  key={condition.name}
                  className="rounded-[1.5rem] border border-border bg-cream/40 p-5"
                >
                  <h3 className="font-heading m-0 text-lg font-semibold text-brand">
                    {condition.name}
                  </h3>
                  <p className="mt-2 mb-0 text-sm text-muted-foreground">
                    {condition.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-cream px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Trust</SectionEyebrow>
            <h2 className="font-heading m-0 mb-8 text-3xl font-semibold text-brand md:text-4xl">
              Trust &amp; Verification
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-[1.5rem] border border-border bg-white p-6">
                <ShieldCheck className="mb-3 size-5 text-brand" aria-hidden />
                <h3 className="font-heading m-0 mb-2 text-lg font-semibold text-brand">
                  Years of Experience
                </h3>
                <p className="m-0 text-sm text-muted-foreground">
                  Dr. Bugailiskis brings over {doctor.experienceYears} years of
                  clinical medical experience.
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border bg-white p-6">
                <ShieldCheck className="mb-3 size-5 text-brand" aria-hidden />
                <h3 className="font-heading m-0 mb-2 text-lg font-semibold text-brand">
                  HIPAA-Compliant Platform
                </h3>
                <p className="m-0 text-sm text-muted-foreground">
                  All evaluations conducted using encrypted, HIPAA-compliant
                  technology.
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border bg-white p-6">
                <ShieldCheck className="mb-3 size-5 text-brand" aria-hidden />
                <h3 className="font-heading m-0 mb-2 text-lg font-semibold text-brand">
                  Last Updated
                </h3>
                <p className="m-0 text-sm text-muted-foreground">
                  Doctor credentials and licensing information last verified:{" "}
                  {doctor.lastVerified}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border bg-white p-6">
                <ShieldCheck className="mb-3 size-5 text-brand" aria-hidden />
                <h3 className="font-heading m-0 mb-2 text-lg font-semibold text-brand">
                  Verified Profiles
                </h3>
                <p className="m-0 text-sm text-muted-foreground">
                  {doctor.verifiedProfiles.join(" • ")}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="bg-sand px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
          aria-labelledby="doctor-faq-heading"
        >
          <div className="mx-auto max-w-[840px]">
            <div className="mb-10 text-center">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2
                id="doctor-faq-heading"
                className="font-heading m-0 mb-3 text-3xl font-semibold text-brand md:text-4xl"
              >
                Frequently Asked Questions
              </h2>
              <p className="m-0 text-[15px] text-muted-foreground">
                Specific to consultations with {doctor.name}. For general
                questions, see our{" "}
                <Link href="/#faq" className="font-semibold text-brand">
                  main FAQ
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {doctor.faqs.map((item) => (
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

        <ContactCtaSection
          title="Ready to Get Your Medical Marijuana Card?"
          headingId="doctor-detail-cta-heading"
          paragraphs={[
            `Start your evaluation with ${doctor.name} or another California-licensed physician on our team.`,
            "Complete the process in 15 to 30 minutes, entirely online, no office visit required.",
          ]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
