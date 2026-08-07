import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { consentForTelehealth } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.consent);

export default function Page() {
  return (
    <LegalLayout page={consentForTelehealth} seo={pages.consent}>
      <LegalSections page={consentForTelehealth} />
    </LegalLayout>
  );
}
