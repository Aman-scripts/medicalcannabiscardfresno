import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { privacyPolicy } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.privacy);

export default function Page() {
  return (
    <LegalLayout page={privacyPolicy} seo={pages.privacy}>
      <LegalSections page={privacyPolicy} />
    </LegalLayout>
  );
}
