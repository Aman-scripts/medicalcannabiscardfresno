import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { refundPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${refundPolicy.title} | Medical Cannabis Card Fresno`,
  description: refundPolicy.description,
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout page={refundPolicy}>
      <LegalSections page={refundPolicy} />
    </LegalLayout>
  );
}
