import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { SectionEyebrow } from "@/components/home/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Contact us | Get Medical Marijuana Card in Fresno",
  description:
    "Feel free to connect with us! We’re available 24×7. Call +1-559-234-4795 or email contact@medicalcannabiscardfresno.com.",
};

const contactCards = [
  {
    label: "Phone No :",
    value: "+1-559-234-4795",
    href: PHONE_HREF,
    icon: Phone,
    detail: PHONE_DISPLAY,
  },
  {
    label: "Email :",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "Address :",
    value: ADDRESS,
    href: "https://maps.google.com/?q=1510+C+St+Fresno+CA+93706",
    icon: MapPin,
  },
  {
    label: "Hours :",
    value: HOURS,
    icon: Clock3,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="overflow-x-hidden">
        <section className="bg-grid border-b border-border px-4 py-10 sm:px-5 sm:py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <h1 className="font-heading m-0 mb-3 text-3xl font-semibold tracking-tight text-brand sm:mb-4 sm:text-4xl md:text-5xl">
              Contact Us!
            </h1>
            <p className="m-0 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Feel Free To Connect With Us! (24×7 Available At Your Service)
            </p>
          </div>
        </section>

        <section className="bg-cream px-4 py-10 sm:px-5 sm:py-14 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 md:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-brand text-lime sm:size-12">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-brand-soft uppercase">
                    {card.label}
                  </div>
                  <div className="text-base font-semibold tracking-tight break-words [overflow-wrap:anywhere] whitespace-pre-line text-brand sm:text-lg md:text-xl">
                    {card.value}
                  </div>
                  {"detail" in card && card.detail ? (
                    <div className="mt-1 text-sm text-muted-foreground">
                      {card.detail}
                    </div>
                  ) : null}
                </>
              );

              const cardClassName =
                "min-w-0 rounded-[1.5rem] bg-white p-5 no-underline shadow-[0_12px_40px_rgba(28,80,60,0.05)] ring-1 ring-border/70 sm:rounded-[1.75rem] sm:p-6";

              return "href" in card && card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`${cardClassName} transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(28,80,60,0.1)]`}
                >
                  {content}
                </a>
              ) : (
                <div key={card.label} className={cardClassName}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white px-4 pb-12 sm:px-5 sm:pb-16 md:px-10 md:pb-24">
          <div className="mx-auto max-w-[1240px]">
            <div className="overflow-hidden rounded-[1.5rem] border border-border sm:rounded-[2rem]">
              <iframe
                title="Medical Cannabis Card Fresno location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646470.7415821364!2d-119.94284955!3d36.29379600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809461a6cdb0477d%3A0x630c6c580c31357e!2sMedical%20Marijuana%20Card%20-%20Fresno!5e0!3m2!1sen!2sin!4v1786076226014!5m2!1sen!2sin"
                className="h-[240px] w-full max-w-full border-0 sm:h-[320px] md:h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2">
              <span className="max-w-full break-words">{ADDRESS}</span>
              <span className="hidden text-brand/30 sm:inline" aria-hidden>
                ·
              </span>
              <BookingCta className="font-semibold text-brand underline underline-offset-2">
                Get Started
              </BookingCta>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
