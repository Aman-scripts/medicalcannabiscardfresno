import { BookLink } from "@/components/book-link";
import { SectionEyebrow, SectionHeading } from "@/components/home/section-heading";
import { conditions } from "@/lib/home-content";

export function ConditionsSection() {
  return (
    <section
      id="qualify-condition"
      className="bg-cream px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionEyebrow>Eligibility</SectionEyebrow>
        <SectionHeading
          title="Is Medical Cannabis Right for You?"
          description="We’ve listed the qualifying conditions for a medical cannabis recommendation, but your doctor may approve additional conditions based on your health needs."
        />

        <div className="mb-8 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((c) => (
            <div key={c.title} className="bg-white p-5">
              <h3 className="font-heading m-0 mb-1.5 text-base font-semibold text-brand">
                {c.title}
              </h3>
              <p className="m-0 text-[13px] leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.7fr_1.5fr_0.7fr]">
          <div className="rounded-[2rem] bg-brand p-8 text-primary-foreground">
            <div className="font-heading text-5xl font-semibold text-lime">
              12+
            </div>
            <p className="mt-2 text-sm text-white/75">Qualifying Conditions</p>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(28,80,60,0.06)] md:flex-row md:items-center">
            <div>
              <h3 className="font-heading m-0 mb-2 text-2xl font-semibold text-brand md:text-3xl">
                Qualified or Not?
              </h3>
              <p className="m-0 max-w-md text-sm leading-relaxed text-muted-foreground">
                Let our experts determine your eligibility and help with your
                MMIC.
              </p>
            </div>
            <BookLink className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground no-underline transition hover:bg-brand-deep">
              Get Evaluate
            </BookLink>
          </div>
          <div className="rounded-[2rem] bg-lime p-8 text-brand">
            <div className="font-heading text-5xl font-semibold">$55</div>
            <p className="mt-2 text-sm text-brand/70">Starting Price</p>
          </div>
        </div>
      </div>
    </section>
  );
}
