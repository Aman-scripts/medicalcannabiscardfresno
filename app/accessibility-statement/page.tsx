import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { accessibilityStatement } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${accessibilityStatement.title} | Medical Cannabis Card Fresno`,
  description: accessibilityStatement.description,
};

export default function AccessibilityStatementPage() {
  return (
    <LegalLayout page={accessibilityStatement}>
      <LegalSections page={accessibilityStatement} />
    </LegalLayout>
  );
}
