import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { editorialPolicy } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.editorial);

export default function Page() {
  return (
    <LegalLayout page={editorialPolicy} seo={pages.editorial}>
      <LegalSections page={editorialPolicy} />
    </LegalLayout>
  );
}
