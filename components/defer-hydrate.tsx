"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Mount children after first paint / idle to keep the critical path light. */
export function DeferHydrate({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
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

  if (!ready) return fallback;
  return children;
}
