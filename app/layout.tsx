import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { BookingModalProvider } from "@/components/booking-modal";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
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
        <BookingModalProvider>
          <ScrollToTop />
          {children}
        </BookingModalProvider>
      </body>
    </html>
  );
}
