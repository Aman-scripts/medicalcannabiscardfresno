export function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={
        light
          ? "mb-3 text-[11px] font-semibold tracking-[0.16em] text-[#d8f0b8] uppercase"
          : "mb-3 text-[11px] font-semibold tracking-[0.16em] text-brand-soft uppercase"
      }
    >
      <span className="mr-2 inline-block h-px w-6 translate-y-[-3px] bg-lime align-middle" />
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  description,
  light = false,
}: {
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2
        className={
          light
            ? "font-heading m-0 mb-4 text-3xl font-semibold text-white md:text-4xl"
            : "font-heading m-0 mb-4 text-3xl font-semibold text-brand md:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            light
              ? "m-0 text-[15px] leading-relaxed text-white/90"
              : "m-0 text-[15px] leading-relaxed text-muted-foreground"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
