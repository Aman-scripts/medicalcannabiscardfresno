"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


const MobileNav = dynamic(
  () => import("@/components/mobile-nav").then((mod) => mod.MobileNav),
  { ssr: false },
);

/** Loads the mobile menu after idle so it stays off the critical path. */
export function MobileNavSlot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    const ric = window.requestIdleCallback?.bind(window);
    if (ric) {
      const id = ric(enable, { timeout: 1500 });
      return () => window.cancelIdleCallback?.(id);
    }
    const t = setTimeout(enable, 1);
    return () => clearTimeout(t);
  }, []);

  if (!ready) {
    return <div className="size-12 shrink-0 md:hidden" aria-hidden />;
  }

  return <MobileNav />;
}
