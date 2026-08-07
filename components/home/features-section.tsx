import {
  BadgeDollarSign,
  GraduationCap,
  Headphones,
  ShieldCheck,
  ThumbsUp,
  UserRoundCheck,
} from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { SectionEyebrow, SectionHeading } from "@/components/home/section-heading";
import { features } from "@/lib/home-content";

const featureIcons = [
  ThumbsUp,
  UserRoundCheck,
  BadgeDollarSign,
  ShieldCheck,
  GraduationCap,
  Headphones,
] as const;

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-sand px-5 py-16 md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-lime/20 blur-3xl" />
      <div className="mx-auto max-w-[1240px]">
        <SectionEyebrow>Why Patients Choose Us</SectionEyebrow>
        <SectionHeading
          title="Features Crafted Around Your Needs"
          description="Our features are designed to simplify the process of obtaining a Medical Cannabis Card in Fresno, ensuring you receive the highest quality care."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-white/80 bg-white p-7 shadow-[0_12px_40px_rgba(28,80,60,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(28,80,60,0.1)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-lime">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading text-4xl font-semibold tracking-tight text-brand-soft md:text-5xl">
                    {feature.n}
                  </span>
                </div>
                <h3 className="font-heading m-0 mb-2 text-xl font-semibold text-brand">
                  {feature.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <BookingCta className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep">
            GET MMJ CARD
          </BookingCta>
        </div>
      </div>
    </section>
  );
}
