/** Decorative hero photo — desktop/tablet only so mobile LCP stays on the headline. */
export function HeroBackground() {
  return (
    <div
      className="absolute inset-0 hidden bg-cover bg-[center_30%] opacity-70 md:block"
      style={{
        backgroundImage: "url(/hero-section-lg.webp)",
      }}
      aria-hidden
    />
  );
}
