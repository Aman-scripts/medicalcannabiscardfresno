import Image from "next/image";
import { CheckIcon } from "@/components/check-icon";
import { SectionEyebrow } from "@/components/home/section-heading";
import { teamPoints } from "@/lib/home-content";

export function TeamSection() {
  return (
    <section
      id="about"
      className="border-y border-border bg-brand px-5 py-16 text-primary-foreground md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionEyebrow light>6+ Years in Fresno</SectionEyebrow>
          <h2 className="font-heading m-0 mb-4 text-3xl font-semibold md:text-4xl">
            Your Trusted Team for Medical Cannabis Card in Fresno
          </h2>
          <p className="mb-7 text-[15px] leading-relaxed text-white/75">
            With 6+ years of experience, we ensure safe access, educate patients
            about their rights, and help improve overall quality of life. We
            connect you with licensed specialists who provide 420 evaluations in
            Fresno.
          </p>
          <ul className="mb-8 m-0 grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-3.5">
            {teamPoints.map((point) => (
              <li
                key={point}
                className="flex min-h-[4.5rem] items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3.5 text-[14px] leading-snug text-white/90 sm:text-[15px]"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-lime/20 ring-1 ring-lime/35">
                  <CheckIcon className="size-3.5 text-lime" />
                </span>
                <span className="pt-0.5 font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <div className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
              Important:
            </div>
            <p className="m-0 text-sm leading-relaxed text-white/80">
              We adhere to the Compassionate Use Act (Proposition 215, 1996) and
              the California Health and Safety Code §11362.5. Licensed
              professionals provide recommendations based on qualifying
              conditions.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-brand-deep p-2 ring-1 ring-lime/30">
          <div className="overflow-hidden rounded-[1.6rem]">
            <Image
              src="/team-section.jpg"
              alt="Your trusted medical cannabis card team in Fresno"
              width={1000}
              height={750}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute right-6 bottom-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
            <div className="font-heading text-3xl font-semibold text-brand">
              6+ Years
            </div>
            <div className="text-sm text-muted-foreground">Serving Fresno</div>
          </div>
        </div>
      </div>
    </section>
  );
}
