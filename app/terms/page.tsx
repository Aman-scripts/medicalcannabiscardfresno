import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { termsOfUse } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.terms);

export default function Page() {
  return (
    <LegalLayout page={termsOfUse} seo={pages.terms}>
      <LegalSections page={termsOfUse} />
    </LegalLayout>
  );
}
