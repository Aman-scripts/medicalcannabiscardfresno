"use client";

import { useEffect } from "react";
import {
  isMobileOrTabletViewport,
  openBookingModal,
} from "@/lib/booking-events";

/** One listener for all [data-booking-cta] links — avoids per-button client islands. */
export function BookingEnhancer() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const cta = target.closest("[data-booking-cta]");
      if (!(cta instanceof HTMLAnchorElement)) return;
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      if (isMobileOrTabletViewport()) {
        event.preventDefault();
        openBookingModal();
        return;
      }

      // Desktop: smooth-scroll to the hero form when already on the home page.
      if (window.location.pathname === "/") {
        event.preventDefault();
        const el = document.getElementById("book");
        if (!el) return;
        window.history.pushState(null, "", "/#book");
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
