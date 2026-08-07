import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { termsOfUse } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${termsOfUse.title} | Medical Cannabis Card Fresno`,
  description: termsOfUse.description,
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout page={termsOfUse}>
      <LegalSections page={termsOfUse} />
    </LegalLayout>
  );
}
