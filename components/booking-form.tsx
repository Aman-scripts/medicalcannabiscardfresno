"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import {
  formatPhone,
  startHeallyBooking,
  validateEmail,
  validateName,
  validatePhone,
} from "@/lib/heally";

type LeadErrors = {
  name?: string;
  email?: string;
  phone?: string;
  termsAccepted?: string;
};

const inputClassName =
  "box-border min-h-11 w-full rounded-none border border-brand/25 bg-cream px-3.5 text-sm text-brand outline-none placeholder:text-brand/45 focus:border-brand aria-[invalid=true]:border-red-500";

export function BookingForm({
  idPrefix = "booking",
  titleId,
}: {
  idPrefix?: string;
  titleId?: string;
} = {}) {
  const fieldId = (name: string) => `${idPrefix}-${name}`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({ ...prev, name: validateName(value) ?? undefined }));
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value) ?? undefined,
    }));
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    setErrors((prev) => ({
      ...prev,
      phone: validatePhone(formatted) ?? undefined,
    }));
  }

  function handleTermsAcceptedChange(checked: boolean) {
    setTermsAccepted(checked);
    setErrors((prev) => ({
      ...prev,
      termsAccepted: checked ? undefined : prev.termsAccepted,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const termsAcceptedError = termsAccepted
      ? null
      : "Please accept the Terms and Conditions to continue.";

    setErrors({
      name: nameError ?? undefined,
      email: emailError ?? undefined,
      phone: phoneError ?? undefined,
      termsAccepted: termsAcceptedError ?? undefined,
    });

    if (nameError || emailError || phoneError || termsAcceptedError) {
      return;
    }

    setSubmitting(true);
    startHeallyBooking({ name, email, phone });
  }

  return (
    <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_60px_rgba(26,67,49,0.08)] md:p-8">
      <div className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-brand-soft uppercase">
        Book an Appointment
      </div>
      <p
        id={titleId}
        className="font-heading m-0 mb-1 text-2xl font-semibold text-brand"
      >
        Plans starting at $55 only
      </p>
      <p className="mb-6 text-sm text-muted-foreground">
        HIPAA-compliant form · 100% money-back if not approved
      </p>

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        noValidate
        // WebMCP declarative annotations (ignored by browsers without support)
        {...{
          toolname: "bookMedicalCannabisCardForm",
          tooldescription:
            "Book a medical cannabis card evaluation in Fresno by submitting full name, email, and phone number.",
          toolautosubmit: "",
        }}
      >
        <div>
          <label
            htmlFor={fieldId("fullName")}
            className="mb-1.5 block text-sm font-semibold text-brand"
          >
            Full Name
          </label>
          <input
            id={fieldId("fullName")}
            name="fullName"
            placeholder="Jane Smith"
            value={name}
            onChange={handleNameChange}
            aria-invalid={!!errors.name}
            required
            className={inputClassName}
            {...{
              toolparamdescription: "Patient first and last name",
            }}
          />
          {errors.name ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={fieldId("email")}
            className="mb-1.5 block text-sm font-semibold text-brand"
          >
            Email
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            placeholder="jane@email.com"
            value={email}
            onChange={handleEmailChange}
            aria-invalid={!!errors.email}
            required
            className={inputClassName}
            {...{
              toolparamdescription: "Patient email address",
            }}
          />
          {errors.email ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={fieldId("phone")}
            className="mb-1.5 block text-sm font-semibold text-brand"
          >
            Phone
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            placeholder="999-999-9999"
            value={phone}
            onChange={handlePhoneChange}
            aria-invalid={!!errors.phone}
            required
            className={inputClassName}
            {...{
              toolparamdescription:
                "Patient phone number formatted as 999-999-9999",
            }}
          />
          {errors.phone ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-snug text-brand">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={termsAccepted}
              onChange={(e) => handleTermsAcceptedChange(e.target.checked)}
              aria-invalid={!!errors.termsAccepted}
              required
              className="mt-0.5 size-4 shrink-0 rounded border-2 border-brand accent-brand"
              {...{
                toolparamdescription:
                  "Patient accepted the Terms and Conditions",
              }}
            />
            <span>
              I accept the{" "}
              <Link
                href="/terms/"
                className="font-semibold text-brand underline underline-offset-2 hover:text-brand-soft"
              >
                Terms and Conditions*
              </Link>
            </span>
          </label>
          {errors.termsAccepted ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.termsAccepted}</p>
          ) : null}
        </div>

        <label className="flex items-start gap-3 text-sm leading-snug text-brand">
          <input
            type="checkbox"
            name="marketingOptIn"
            className="mt-0.5 size-4 shrink-0 rounded border-2 border-brand accent-brand"
          />
          <span>
            I agree to receive emails with educational content, exclusive
            offers, partnership discounts, and marketing updates
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="mt-1 w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Processing..." : "GET YOUR CARD"}
        </button>
      </form>
    </div>
  );
}
