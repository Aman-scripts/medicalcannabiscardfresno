import { Mail, MapPin, Phone } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { SectionEyebrow } from "@/components/home/section-heading";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/home-content";

type ContactCtaSectionProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  headingId?: string;
};

export function ContactCtaSection({
  eyebrow = "Get Started",
  title,
  paragraphs,
  headingId = "contact-cta-heading",
}: ContactCtaSectionProps) {
  return (
    <section
      className="bg-cream px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-20"
      aria-labelledby={headingId}
    >
      <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[2rem] border border-border bg-white lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2
            id={headingId}
            className="font-heading m-0 mb-4 text-3xl font-semibold text-brand md:text-4xl"
          >
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === paragraphs.length - 1
                  ? "m-0 mb-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
                  : "m-0 mb-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
              }
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-3">
            <BookingCta className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep">
              Get Started
            </BookingCta>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-brand no-underline transition hover:bg-cream"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 bg-brand p-8 text-primary-foreground md:p-10">
          <p className="m-0 text-[11px] font-semibold tracking-[0.14em] text-[#d8f0b8] uppercase">
            Talk to our team directly
          </p>
          <a
            href={PHONE_HREF}
            className="group flex items-start gap-3 no-underline"
          >
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lime">
              <Phone className="size-4" strokeWidth={1.9} aria-hidden />
            </span>
            <span>
              <span className="mb-1 block text-[11px] font-semibold tracking-[0.12em] text-[#d8f0b8] uppercase">
                Phone
              </span>
              <span className="text-base font-semibold text-white transition group-hover:text-lime">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-start gap-3 no-underline"
          >
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lime">
              <Mail className="size-4" strokeWidth={1.9} aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="mb-1 block text-[11px] font-semibold tracking-[0.12em] text-[#d8f0b8] uppercase">
                Email
              </span>
              <span className="break-all text-base font-semibold text-white transition group-hover:text-lime">
                {EMAIL}
              </span>
            </span>
          </a>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lime">
              <MapPin className="size-4" strokeWidth={1.9} aria-hidden />
            </span>
            <span>
              <span className="mb-1 block text-[11px] font-semibold tracking-[0.12em] text-[#d8f0b8] uppercase">
                Visit Us
              </span>
              <span className="text-base font-semibold text-white">
                {ADDRESS}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
