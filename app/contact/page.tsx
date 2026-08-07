import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { BookLink } from "@/components/book-link";
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
      <main>
        <section className="bg-grid border-b border-border px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <h1 className="font-heading m-0 mb-4 text-4xl font-semibold tracking-tight text-brand md:text-5xl">
              Contact Us!
            </h1>
            <p className="m-0 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Feel Free To Connect With Us! (24×7 Available At Your Service)
            </p>
          </div>
        </section>

        <section className="bg-cream px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-[1240px] gap-4 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-brand text-lime">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-brand-soft uppercase">
                    {card.label}
                  </div>
                  <div className="text-xl font-semibold tracking-tight break-words whitespace-pre-line text-brand">
                    {card.value}
                  </div>
                  {"detail" in card && card.detail ? (
                    <div className="mt-1 text-sm text-muted-foreground">
                      {card.detail}
                    </div>
                  ) : null}
                </>
              );

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
                  className="rounded-[1.75rem] bg-white p-6 no-underline shadow-[0_12px_40px_rgba(28,80,60,0.05)] ring-1 ring-border/70 transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(28,80,60,0.1)]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="rounded-[1.75rem] bg-white p-6 shadow-[0_12px_40px_rgba(28,80,60,0.05)] ring-1 ring-border/70"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white px-5 pb-16 md:px-10 md:pb-24">
          <div className="mx-auto max-w-[1240px]">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <iframe
                title="Medical Cannabis Card Fresno location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646470.7415821364!2d-119.94284955!3d36.29379600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809461a6cdb0477d%3A0x630c6c580c31357e!2sMedical%20Marijuana%20Card%20-%20Fresno!5e0!3m2!1sen!2sin!4v1786076226014!5m2!1sen!2sin"
                className="h-[320px] w-full border-0 md:h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {ADDRESS} ·{" "}
              <BookLink className="font-semibold text-brand underline underline-offset-2">
                Get Started
              </BookLink>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
