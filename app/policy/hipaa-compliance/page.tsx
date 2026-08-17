import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { hipaaCompliance } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.hipaa);

export default function Page() {
  return (
    <LegalLayout page={hipaaCompliance} seo={pages.hipaa}>
      <LegalSections page={hipaaCompliance} />
    </LegalLayout>
  );
}
