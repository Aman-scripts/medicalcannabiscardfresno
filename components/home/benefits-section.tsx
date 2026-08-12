import Image from "next/image";
import { SectionEyebrow, SectionHeading } from "@/components/home/section-heading";
import { benefits, laws } from "@/lib/home-content";

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionEyebrow>Benefits</SectionEyebrow>
        <SectionHeading
          title="What Are the Benefits of a Fresno Medical Cannabis Card?"
          description="Explore the benefits you can have with a medical cannabis card in Fresno."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const dark = index === 0 || index === 3;
            return (
              <article
                key={benefit.title}
                className={
                  dark
                    ? "rounded-[1.75rem] bg-brand p-6 text-primary-foreground"
                    : "rounded-[1.75rem] bg-sand p-6 text-brand ring-1 ring-border/60"
                }
              >
                <div
                  className={
                    dark
                      ? "font-heading text-4xl font-semibold tracking-tight text-lime md:text-5xl"
                      : "font-heading text-4xl font-semibold tracking-tight text-brand md:text-5xl"
                  }
                >
                  0{index + 1}
                </div>
                <h3 className="font-heading mt-3 mb-2 text-xl font-semibold">
                  {benefit.title}
                </h3>
                <p
                  className={
                    dark
                      ? "m-0 text-sm leading-relaxed text-white/90"
                      : "m-0 text-sm leading-relaxed text-muted-foreground"
                  }
                >
                  {benefit.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="grid items-stretch gap-8 rounded-[2rem] bg-sand p-4 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
              alt="Helping patients manage their conditions"
              width={900}
              height={700}
              sizes="(max-width: 1024px) 100vw, 45vw"
              quality={90}
              loading="lazy"
              className="h-full min-h-[280px] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 max-w-[min(100%-2rem,16rem)] rounded-2xl bg-white px-4 py-3 shadow-lg sm:bottom-5 sm:left-5 sm:max-w-none sm:px-5 sm:py-4">
              <div className="font-heading text-2xl leading-none font-semibold tracking-tight text-brand sm:text-3xl sm:leading-tight">
                98% Happy Customers
              </div>
              <div className="mt-1.5 text-sm leading-snug text-muted-foreground">
                Helping patients manage their conditions
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-2 md:p-4">
            <h3 className="font-heading m-0 mb-5 text-2xl font-semibold text-brand">
              Understanding Medical Cannabis Laws and Regulations
            </h3>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {laws.map((law) => (
                <li
                  key={law.title}
                  className="rounded-[1.25rem] border-l-4 border-lime bg-white p-5"
                >
                  <span className="font-semibold text-brand">{law.title}</span>{" "}
                  <span className="text-sm text-muted-foreground">{law.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
