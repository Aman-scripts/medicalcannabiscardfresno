import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BookLink } from "@/components/book-link";
import { BookingForm } from "@/components/booking-form";
import { CheckIcon } from "@/components/check-icon";
import { PHONE_HREF, trustList } from "@/lib/home-content";

export function HeroSection() {
  return (
    <section id="book" className="relative overflow-hidden">
      <Image
        src="/hero-section.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-brand/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/75 via-brand/45 to-brand/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/50 via-transparent to-brand/25" />

      <div className="relative mx-auto grid max-w-[1240px] items-start gap-10 px-5 pt-14 pb-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-20 lg:pb-20">
        <div className="animate-rise text-primary-foreground">
          <h1 className="font-heading max-w-[14ch] text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-5xl lg:text-[3.45rem]">
            Get Your Medical Cannabis Card{" "}
            <span className="text-lime">in Fresno</span>
          </h1>

          <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] md:text-base">
            4.8/5 Rating and 15K+ Cards | 100% Legal Access | Licensed Doctors
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <BookLink className="inline-flex items-center rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-brand transition hover:bg-white lg:hidden">
              Book an Appointment
            </BookLink>
            <Link
              href="#our-process"
              className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand no-underline transition hover:bg-cream lg:bg-lime lg:hover:bg-white"
            >
              Check Our Process
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white no-underline ring-1 ring-white/55 transition hover:bg-white/10 lg:bg-white lg:text-brand lg:ring-0 lg:hover:bg-cream"
            >
              <Phone className="size-4" />
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

        <div className="animate-rise-delay hidden lg:block">
          <BookingForm idPrefix="hero" />
        </div>
      </div>
    </section>
  );
}
