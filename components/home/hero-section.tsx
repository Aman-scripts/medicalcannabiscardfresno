import Link from "next/link";
import { Phone } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { DesktopBookingForm } from "@/components/desktop-booking-form";
import { HeroBackground } from "@/components/home/hero-background";
import { CheckIcon } from "@/components/check-icon";
import { PHONE_HREF, trustList } from "@/lib/home-content";

export function HeroSection() {
  return (
    <section
      id="book"
      className="relative min-h-[560px] overflow-hidden bg-brand md:min-h-[640px]"
    >
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/80 via-brand/50 to-brand/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/55 via-transparent to-brand/30" />

      <div className="relative mx-auto grid max-w-[1240px] items-start gap-10 px-5 pt-14 pb-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-20 lg:pb-20">
        <div className="text-primary-foreground">
          <h1 className="max-w-[14ch] font-sans text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-white md:font-heading md:text-5xl lg:text-[3.45rem]">
            Get Your Medical Cannabis Card{" "}
            <span className="text-[#d8f0b8]">in Fresno</span>
          </h1>

          <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-white md:text-base">
            4.8/5 Rating and 15K+ Cards | 100% Legal Access | Licensed Doctors
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <BookingCta className="inline-flex min-h-12 items-center rounded-full bg-lime px-6 py-3.5 text-base font-semibold text-brand transition hover:bg-white lg:hidden">
              Book an Appointment
            </BookingCta>
            <Link
              href="#our-process"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-brand no-underline transition hover:bg-cream lg:bg-lime lg:hover:bg-white"
            >
              Check Our Process
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white/15 px-6 py-3.5 text-base font-semibold text-white no-underline ring-1 ring-white/70 transition hover:bg-white/25 lg:bg-white lg:text-brand lg:ring-0 lg:hover:bg-cream"
            >
              <Phone className="size-4" aria-hidden />
              Call Us Today
            </a>
          </div>

          <div className="mt-10 flex max-w-md flex-col gap-3 border-t border-white/20 pt-6">
            {trustList.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-sm text-white"
              >
                <CheckIcon className="text-lime" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <DesktopBookingForm />
        </div>
      </div>
    </section>
  );
}
