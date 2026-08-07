import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { editorialPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${editorialPolicy.title} | Medical Cannabis Card Fresno`,
  description: editorialPolicy.description,
};

export default function EditorialPolicyPage() {
  return (
    <LegalLayout page={editorialPolicy}>
      <LegalSections page={editorialPolicy} />
    </LegalLayout>
  );
}
