import Image from "next/image";
import { BookingCta } from "@/components/booking-cta";
import { SectionEyebrow } from "@/components/home/section-heading";
import { processMini, steps } from "@/lib/home-content";

const stepImages = [
  {
    src: "/process-section-one.jpg",
    alt: "Book an appointment for your medical cannabis card",
  },
  {
    src: "/process-section-two.jpg",
    alt: "Online consultation with a licensed doctor",
  },
  {
    src: "/process-section-three.jpg",
    alt: "Get your medical marijuana card recommendation",
  },
  {
    src: "/process-section-four.jpg",
    alt: "Access medical cannabis from a licensed dispensary",
  },
] as const;

export function ProcessSection() {
  return (
    <section id="our-process" className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 max-w-2xl">
          <SectionEyebrow>The Process</SectionEyebrow>
          <h2 className="font-heading m-0 mb-4 text-3xl font-semibold text-brand md:text-4xl">
            How to Get Your Medical Cannabis Card in Fresno?
          </h2>
          <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
            Getting a medical cannabis card in Fresno is easy. Follow our quick
            4-step process and access medical marijuana legally.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const image = stepImages[index];
            return (
              <article
                key={step.n}
                className="overflow-hidden rounded-[1.75rem] bg-brand text-primary-foreground shadow-[0_12px_40px_rgba(28,80,60,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-lime px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                    Step {step.n}
                  </span>
                </div>
                <div className="relative p-5 pt-4">
                  <h3 className="font-heading m-0 mb-2 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-white/90">
                    {step.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-sand px-6 py-8 md:px-10 md:py-9">
          <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h3 className="font-heading m-0 text-2xl font-semibold text-brand">
              Complete Process in 15 Minutes
            </h3>
            <BookingCta className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold whitespace-nowrap text-primary-foreground no-underline transition hover:bg-brand-deep">
              Start Your Consultation
            </BookingCta>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
            {processMini.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-brand/15 sm:pl-8 sm:ml-8"
                    : ""
                }
              >
                <div className="font-heading text-3xl font-semibold text-brand md:text-4xl">
                  {item.time}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs tracking-[0.04em] text-muted-foreground uppercase">
          100% Money-Back If Not Approved • Budget-Friendly Cost • Flexible
          Payment Modes
        </p>
      </div>
    </section>
  );
}
