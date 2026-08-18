"use client";

import { useEffect } from "react";

/**
 * Third-party widgets (e.g. the GTM-injected live-chat iframe) sometimes
 * omit a title attribute, which fails WCAG 4.1.2 / Lighthouse's frame-title
 * audit. We don't control their markup, so patch it in as it appears.
 */
export function IframeA11yPatch() {
  useEffect(() => {
    const labelIframe = (iframe: HTMLIFrameElement) => {
      if (iframe.title || iframe.getAttribute("aria-label")) return;
      iframe.title = "Live chat widget";
    };

    for (const iframe of document.querySelectorAll("iframe")) {
      labelIframe(iframe);
    }

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node instanceof HTMLIFrameElement) labelIframe(node);
          for (const iframe of node.querySelectorAll?.("iframe") ?? [])
            labelIframe(iframe);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
