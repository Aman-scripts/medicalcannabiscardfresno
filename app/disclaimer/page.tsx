import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { disclaimer } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${disclaimer.title} | Medical Cannabis Card Fresno`,
  description: disclaimer.description,
};

export default function DisclaimerPage() {
  return (
    <LegalLayout page={disclaimer}>
      <LegalSections page={disclaimer} />
    </LegalLayout>
  );
}
