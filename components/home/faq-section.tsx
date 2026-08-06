import { SectionEyebrow } from "@/components/home/section-heading";
import { faqs } from "@/lib/home-content";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-border bg-sand px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[840px]">
        <div className="mb-10 text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="font-heading m-0 text-3xl font-semibold text-brand md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[1.25rem] border border-border bg-white px-5 py-4 open:shadow-[0_10px_30px_rgba(28,80,60,0.06)]"
            >
              <summary className="font-heading flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-brand md:text-base">
                {item.q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sand text-brand ring-1 ring-border transition group-open:rotate-45 group-open:bg-lime">
                  +
                </span>
              </summary>
              <p className="mt-3 mb-1 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
