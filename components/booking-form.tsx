"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  { id: "basic", label: "Basic $55" },
  { id: "gold", label: "Gold $99" },
  { id: "platinum", label: "Platinum $199" },
] as const;

export function BookingForm() {
  const [plan, setPlan] = useState<(typeof plans)[number]["id"]>("basic");

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
            className="mb-1.5 block text-xs font-medium text-muted-foreground"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Jane Smith"
            required
            className="box-border min-h-11 w-full rounded-2xl border border-border bg-cream px-3.5 text-sm outline-none focus:border-brand"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-xs font-medium text-muted-foreground"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(559) 000-0000"
              required
              className="box-border min-h-11 w-full rounded-2xl border border-border bg-cream px-3.5 text-sm outline-none focus:border-brand"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@email.com"
              required
              className="box-border min-h-11 w-full rounded-2xl border border-border bg-cream px-3.5 text-sm outline-none focus:border-brand"
            />
          </div>
        </div>

        <div>
          <span className="mb-2 block text-xs font-medium text-muted-foreground">
            Preferred plan
          </span>
          <div className="inline-flex overflow-hidden rounded-full border border-border bg-cream p-1">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[13px] font-medium transition",
                  plan === p.id
                    ? "bg-brand text-primary-foreground"
                    : "text-brand hover:bg-white",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
          <input type="hidden" name="plan" value={plan} />
        </div>

        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input type="checkbox" required className="mt-0.5 accent-brand" />
          <span>
            I accept the{" "}
            <Link href="/terms" className="underline">
              Terms and Conditions*
            </Link>
          </span>
        </label>

        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input type="checkbox" className="mt-0.5 accent-brand" />
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
