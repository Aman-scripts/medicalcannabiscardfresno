import Image from "next/image";
import { BookingCta } from "@/components/booking-cta";
import { SectionEyebrow, SectionHeading } from "@/components/home/section-heading";
import { cardChoices } from "@/lib/home-content";

const cardImages = [
  {
    src: "/card-choices-section-one.jpg",
    alt: "Digital medical cannabis recommendation",
  },
  {
    src: "/card-choices-section-two.jpg",
    alt: "Plastic medical cannabis ID card",
  },
  {
    src: "/card-choices-section-three.jpg",
    alt: "Medical cannabis grower’s license",
  },
] as const;

export function CardChoicesSection() {
  return (
    <section
      id="card-choices"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f3f6f2_0%,#e6eee6_100%)] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionEyebrow>Choose Your Format</SectionEyebrow>
        <SectionHeading
          title="Flexible Card Choices For Every Patient"
          description="For Fresno residents, we offer fast and reliable cannabis access by providing digital recommendations, a plastic card, or a grower license, all in one place."
        />

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {cardChoices.map((choice, index) => {
            const image = cardImages[index];
            return (
              <article
                key={choice.title}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_40px_rgba(28,80,60,0.06)] ring-1 ring-border/70"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/55 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-5 font-heading text-5xl font-semibold tracking-tight text-lime md:text-6xl">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-heading m-0 mb-2 text-xl font-semibold text-brand">
                    {choice.title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-muted-foreground">
                    {choice.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-brand p-8 text-primary-foreground md:flex-row md:items-center md:px-10">
          <div>
            <h3 className="font-heading m-0 mb-2 text-2xl font-semibold">
              Need Help Selecting the Right Product?
            </h3>
            <p className="m-0 max-w-2xl text-sm leading-relaxed text-white/90">
              If you are unsure which plan is most appropriate, our specialists
              can guide you through each option, outline the benefits, and assist
              you in selecting the best plan for your health needs
            </p>
          </div>
          <BookingCta className="inline-flex shrink-0 items-center justify-center rounded-full bg-lime px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-brand no-underline transition hover:bg-white">
            Connect with an Expert
          </BookingCta>
        </div>
      </div>
    </section>
  );
}
