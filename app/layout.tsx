import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { BookingEnhancer } from "@/components/booking-enhancer";
import { BookingModalRoot } from "@/components/booking-modal-root";
import { DeferHydrate } from "@/components/defer-hydrate";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dm-sans",
  display: "optional",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair",
  // optional: avoid late LCP when the heading font swaps in after first paint
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  title: "Get a Medical Marijuana Card Fresno | Apply Online Today",
  description:
    "Get your medical cannabis card in Fresno online. Licensed doctors, same-day approvals, plans starting at $55. HIPAA-compliant telehealth evaluations.",
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
        </DeferHydrate>
        {children}
      </body>
    </html>
  );
}
