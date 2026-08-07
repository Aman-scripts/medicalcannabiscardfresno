"use client";

import Link from "next/link";

export function BookingForm() {
  return (
    <div
      id="book"
      className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_60px_rgba(26,67,49,0.08)] md:p-8"
    >
      <div className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-lime uppercase">
        Book an Appointment
      </div>
      <h3 className="font-heading m-0 mb-1 text-2xl font-semibold text-brand">
        Plans starting at $55 only
      </h3>
      <p className="mb-6 text-sm text-muted-foreground">
        HIPAA-compliant form · 100% money-back if not approved
      </p>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-sm font-semibold text-brand"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Jane Smith"
            required
            className="box-border min-h-11 w-full rounded-2xl border border-brand/25 bg-cream px-3.5 text-sm text-brand outline-none placeholder:text-brand/45 focus:border-brand"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-semibold text-brand"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(559) 000-0000"
              required
              className="box-border min-h-11 w-full rounded-2xl border border-brand/25 bg-cream px-3.5 text-sm text-brand outline-none placeholder:text-brand/45 focus:border-brand"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-brand"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@email.com"
              required
              className="box-border min-h-11 w-full rounded-2xl border border-brand/25 bg-cream px-3.5 text-sm text-brand outline-none placeholder:text-brand/45 focus:border-brand"
            />
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm leading-snug text-brand">
          <input
            type="checkbox"
            required
            className="mt-0.5 size-4 shrink-0 rounded border-2 border-brand accent-brand"
          />
          <span>
            I accept the{" "}
            <Link
              href="/terms"
              className="font-semibold text-brand underline underline-offset-2 hover:text-brand-soft"
            >
              Terms and Conditions*
            </Link>
          </span>
        </label>

        <label className="flex items-start gap-3 text-sm leading-snug text-brand">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 rounded border-2 border-brand accent-brand"
          />
          <span>
            I agree to receive emails with educational content, exclusive
            offers, partnership discounts, and marketing updates
          </span>
        </label>

        <button
          type="submit"
          className="mt-1 w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep"
        >
          GET YOUR CARD
        </button>
      </form>
    </div>
  );
}
