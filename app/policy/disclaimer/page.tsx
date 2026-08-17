import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { disclaimer } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.disclaimer);

export default function Page() {
  return (
    <LegalLayout page={disclaimer} seo={pages.disclaimer}>
      <LegalSections page={disclaimer} />
    </LegalLayout>
  );
}
