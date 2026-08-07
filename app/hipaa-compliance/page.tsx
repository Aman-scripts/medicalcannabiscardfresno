import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { hipaaCompliance } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${hipaaCompliance.title} | Medical Cannabis Card Fresno`,
  description: hipaaCompliance.description,
};

export default function HipaaCompliancePage() {
  return (
    <LegalLayout page={hipaaCompliance}>
      <LegalSections page={hipaaCompliance} />
    </LegalLayout>
  );
}
