import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { privacyPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | Medical Cannabis Card Fresno`,
  description: privacyPolicy.description,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout page={privacyPolicy}>
      <LegalSections page={privacyPolicy} />
    </LegalLayout>
  );
}
