"use client";

import { useEffect, useState, type ReactNode } from "react";

const INTERACTION_EVENTS = [
  "scroll",
  "mousemove",
  "keydown",
  "click",
  "touchstart",
] as const;

const FALLBACK_TIMEOUT_MS = 5000;

/**
 * Mounts children only after the user first interacts with the page (or a
 * 5s fallback), so third-party tags loaded through GTM (chat widget, ads
 * tags, Clarity) don't compete with the initial render for main-thread time.
 */
export function DeferThirdParty({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    const enable = () => setReady(true);
    const timer = setTimeout(enable, FALLBACK_TIMEOUT_MS);

    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, enable, { once: true, passive: true });
    }

    return () => {
      clearTimeout(timer);
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, enable);
      }
    };
  }, [ready]);

  if (!ready) return null;
  return children;
}
