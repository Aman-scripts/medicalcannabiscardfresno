import { BookingCta } from "@/components/booking-cta";
import { CheckIcon } from "@/components/check-icon";
import { SectionEyebrow } from "@/components/home/section-heading";
import { pricingPlans } from "@/lib/home-content";

export function PricingSection() {
  return (
    <section id="price" className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-12 max-w-2xl text-center [&_p]:mx-auto [&_div]:mx-auto">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h2 className="font-heading m-0 mb-4 text-3xl font-semibold text-brand md:text-4xl">
            Pricing That Suits Your Pocket
          </h2>
          <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
            Our cost is upfront with no surprise charges. We assure 100%
            money-back if you are not approved.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "relative flex h-full flex-col rounded-[1.75rem] bg-brand p-6 text-primary-foreground shadow-[0_24px_60px_rgba(28,80,60,0.22)] md:-translate-y-2 md:p-8"
                  : "flex h-full flex-col rounded-[1.75rem] border border-border bg-cream p-6 md:p-8"
              }
            >
              {plan.featured ? (
                <span className="mb-3 inline-flex self-start rounded-full bg-lime px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-brand uppercase">
                  Most Chosen
                </span>
              ) : null}
              <div
                className={
                  plan.featured
                    ? "text-[11px] font-semibold tracking-[0.12em] text-[#d8f0b8] uppercase"
                    : "text-[11px] font-semibold tracking-[0.12em] text-brand-soft uppercase"
                }
              >
                {plan.tag}
              </div>
              <h3 className="font-heading mt-2 mb-1 text-2xl font-semibold">
                {plan.name}
              </h3>
              <div className="font-heading mb-7 text-4xl font-semibold tracking-tight md:text-5xl">
                {plan.price}
              </div>
              <div className="mb-8 flex flex-col gap-3.5">
                {plan.items.map((item) => (
                  <div
                    key={item}
                    className={
                      plan.featured
                        ? "flex gap-2 text-sm leading-snug text-white/90 md:text-[15px]"
                        : "flex gap-2 text-sm leading-snug text-muted-foreground md:text-[15px]"
                    }
                  >
                    <CheckIcon
                      className={
                        plan.featured
                          ? "mt-0.5 text-lime"
                          : "mt-0.5 text-brand"
                      }
                    />
                    {item}
                  </div>
                ))}
              </div>
              <BookingCta
                className={
                  plan.featured
                    ? "mt-auto inline-flex items-center justify-center rounded-full bg-white py-3.5 text-sm font-semibold text-brand no-underline transition hover:bg-lime"
                    : "mt-auto inline-flex items-center justify-center rounded-full bg-brand py-3.5 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep"
                }
              >
                Book an Appointment
              </BookingCta>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
