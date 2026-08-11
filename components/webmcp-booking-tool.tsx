"use client";

import { useEffect, type FormEvent } from "react";
import {
  formatPhone,
  startHeallyBooking,
  validateEmail,
  validateName,
  validatePhone,
} from "@/lib/heally";

type ModelContextTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
};

type ModelContext = {
  registerTool: (tool: ModelContextTool) =>
    | { unregister?: () => void }
    | (() => void)
    | void;
};

function submitLead(form: HTMLFormElement) {
  const data = new FormData(form);
  const fullName = String(data.get("fullName") ?? "");
  const email = String(data.get("email") ?? "");
  const phone = formatPhone(String(data.get("phone") ?? ""));
  const termsAccepted = data.get("termsAccepted") === "on";

  const nameError = validateName(fullName);
  const emailError = validateEmail(email);
  const phoneError = validatePhone(phone);

  if (!termsAccepted) {
    return "Please accept the Terms and Conditions to continue.";
  }
  if (nameError || emailError || phoneError) {
    return [nameError, emailError, phoneError].filter(Boolean).join(" ");
  }

  startHeallyBooking({ name: fullName, email, phone });
  return null;
}

/**
 * Always-on WebMCP booking surface for Agentic Browsing audits and AI agents.
 * Uses a visually hidden declarative form (works when the hero form is not shown
 * on mobile) plus imperative registration when `navigator.modelContext` exists.
 */
export function WebMcpBookingTool() {
  useEffect(() => {
    const modelContext = (
      navigator as Navigator & { modelContext?: ModelContext }
    ).modelContext;

    if (!modelContext?.registerTool) return;

    const registration = modelContext.registerTool({
      name: "bookMedicalCannabisCard",
      description:
        "Start a medical cannabis card evaluation in Fresno, California by submitting the patient's full name, email, and phone number.",
      inputSchema: {
        type: "object",
        properties: {
          fullName: {
            type: "string",
            description: "Patient first and last name",
          },
          email: {
            type: "string",
            description: "Patient email address",
          },
          phone: {
            type: "string",
            description: "Patient phone number formatted as 999-999-9999",
          },
          termsAccepted: {
            type: "boolean",
            description: "Patient accepted the Terms and Conditions",
          },
        },
        required: ["fullName", "email", "phone", "termsAccepted"],
      },
      async execute(input) {
        const fullName = String(input.fullName ?? "");
        const email = String(input.email ?? "");
        const phone = formatPhone(String(input.phone ?? ""));
        const termsAccepted = Boolean(input.termsAccepted);

        if (!termsAccepted) {
          return {
            content: [
              {
                type: "text",
                text: "Please accept the Terms and Conditions to continue.",
              },
            ],
          };
        }

        const nameError = validateName(fullName);
        const emailError = validateEmail(email);
        const phoneError = validatePhone(phone);

        if (nameError || emailError || phoneError) {
          return {
            content: [
              {
                type: "text",
                text: [nameError, emailError, phoneError]
                  .filter(Boolean)
                  .join(" "),
              },
            ],
          };
        }

        const url = startHeallyBooking({ name: fullName, email, phone });
        return {
          content: [
            {
              type: "text",
              text: `Booking started. Redirecting to schedule at ${url}`,
            },
          ],
        };
      },
    });

    return () => {
      if (typeof registration === "function") {
        registration();
        return;
      }
      registration?.unregister?.();
    };
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitLead(e.currentTarget);
  }

  return (
    <form
      className="sr-only"
      aria-label="Book a medical cannabis card evaluation"
      onSubmit={handleSubmit}
      {...{
        toolname: "bookMedicalCannabisCard",
        tooldescription:
          "Start a medical cannabis card evaluation in Fresno, California by submitting the patient's full name, email, and phone number.",
        toolautosubmit: "",
      }}
    >
      <label>
        Full Name
        <input
          name="fullName"
          type="text"
          required
          autoComplete="name"
          {...{
            toolparamdescription: "Patient first and last name",
          }}
        />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          {...{
            toolparamdescription: "Patient email address",
          }}
        />
      </label>
      <label>
        Phone
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          {...{
            toolparamdescription:
              "Patient phone number formatted as 999-999-9999",
          }}
        />
      </label>
      <label>
        <input
          name="termsAccepted"
          type="checkbox"
          required
          {...{
            toolparamdescription:
              "Patient accepted the Terms and Conditions",
          }}
        />
        I accept the Terms and Conditions
      </label>
      <button type="submit">Get Your Card</button>
    </form>
  );
}
