import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";
import { BookingEnhancer } from "@/components/booking-enhancer";
import { BookingModalRoot } from "@/components/booking-modal-root";
import { DeferHydrate } from "@/components/defer-hydrate";
import { DeferThirdParty } from "@/components/defer-third-party";
import { IframeA11yPatch } from "@/components/iframe-a11y-patch";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SITE_NAME, SITE_URL, pages } from "@/lib/seo";
import "./globals.css";
import { cn } from "@/lib/utils";

const GTM_ID = "GTM-5MP4Q35";
const GA4_ID = "G-K5NT0CZNML";
const GSC_VERIFICATION = "VIBfR7NqPiaH10C4G2wVyljaem3ijOpLQpZCHkGjof0";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair",
  display: "optional",
  preload: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: pages.home.title,
  description: pages.home.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  verification: {
    google: GSC_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c503c",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full antialiased",
        dmSans.variable,
        playfair.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <DeferThirdParty>
          <GoogleTagManager gtmId={GTM_ID} />
        </DeferThirdParty>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <DeferHydrate>
          <ScrollToTop />
          <BookingEnhancer />
          <BookingModalRoot />
          <IframeA11yPatch />
        </DeferHydrate>
        {children}
        <DeferThirdParty>
          <GoogleAnalytics gaId={GA4_ID} />
        </DeferThirdParty>
      </body>
    </html>
  );
}
