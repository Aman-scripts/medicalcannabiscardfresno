import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { consentForTelehealth } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${consentForTelehealth.title} | Medical Cannabis Card Fresno`,
  description: consentForTelehealth.description,
};

export default function ConsentForTelehealthPage() {
  return (
    <LegalLayout page={consentForTelehealth}>
      <LegalSections page={consentForTelehealth} />
    </LegalLayout>
  );
}
