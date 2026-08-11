import { sendGTMEvent } from "@next/third-parties/google";
import { SITE_URL } from "@/lib/seo";

export function getHeallyUtmSource() {
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return `utm-${hostname}`;
}

export function validateName(value: string) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2 || parts.some((part) => !/^[a-zA-Z'-]+$/.test(part))) {
    return "Please enter your first and last name.";
  }
  return null;
}

export function validateEmail(value: string) {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validatePhone(value: string) {
  if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
    return "Please enter a valid phone number (e.g., 999-999-9999).";
  }
  return null;
}

export function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length > 3) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
}

export type HeallyLead = {
  name: string;
  email: string;
  phone: string;
};

/** Builds the Heally prefill URL and fires the GTM event. */
export function startHeallyBooking({ name, email, phone }: HeallyLead) {
  const heallyUtmSource = getHeallyUtmSource();
  const nameParts = name.trim().split(/\s+/);
  const payload = {
    first_name: nameParts[0],
    last_name: nameParts.slice(1).join(" "),
    email: email.trim().toLowerCase(),
    phone,
    state: "CA",
    state_of_evaluation: "CA",
    timezone: "PST",
    extra_data: {
      "contact[contact_type]": "Web Form",
      "product[name]": "Eva",
      utm_source: heallyUtmSource,
    },
  };

  const preset = btoa(JSON.stringify(payload))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  sendGTMEvent({
    event: "heallyValidatedSubmit",
    utm_source: heallyUtmSource,
  });

  const url = `https://mymmj.getheally.com/patient_admin/prefill?redirect=sched&preset=${preset}&utm_source=${encodeURIComponent(heallyUtmSource)}`;
  window.location.href = url;
  return url;
}
