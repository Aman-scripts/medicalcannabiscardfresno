"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const BookingForm = dynamic(
  () =>
    import("@/components/booking-form").then((mod) => mod.BookingForm),
  { ssr: false },
);

/** Mounts the hero booking form only on desktop so mobile avoids unused hydration. */
export function DesktopBookingForm() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!isDesktop) return null;

  return <BookingForm idPrefix="hero" />;
}
