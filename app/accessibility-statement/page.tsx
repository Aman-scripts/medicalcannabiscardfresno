import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { accessibilityStatement } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.accessibility);

export default function Page() {
  return (
    <LegalLayout page={accessibilityStatement} seo={pages.accessibility}>
      <LegalSections page={accessibilityStatement} />
    </LegalLayout>
  );
}
