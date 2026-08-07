import { BookingCta } from "@/components/booking-cta";
import { CheckIcon } from "@/components/check-icon";
import { SectionEyebrow } from "@/components/home/section-heading";
import { renewalPoints } from "@/lib/home-content";

export function RenewalSection() {
  return (
    <section
      id="renewal"
      className="bg-sand px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[2rem] border border-border bg-white lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-8 md:p-12">
          <SectionEyebrow>Renewal</SectionEyebrow>
          <h2 className="font-heading m-0 mb-6 text-3xl font-semibold text-brand md:text-4xl">
            Fresno 420 Evaluation &amp; Renewal Made Easy
          </h2>
          <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
            {renewalPoints.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-brand">
                <CheckIcon className="mt-0.5 text-brand" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center bg-brand p-10 text-center text-primary-foreground">
          <div className="font-heading text-6xl font-semibold text-lime">$55</div>
          <p className="mt-3 mb-6 max-w-[18ch] text-sm text-white/90">
            Renew your 420 card in Fresno for just $55.
          </p>
          <BookingCta className="inline-flex rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-brand no-underline transition hover:bg-white">
            Book an Appointment
          </BookingCta>
        </div>
      </div>
    </section>
  );
}
