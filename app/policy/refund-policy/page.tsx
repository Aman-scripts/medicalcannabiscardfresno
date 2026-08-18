import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { refundPolicy } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.refund);

export default function Page() {
  return (
    <LegalLayout page={refundPolicy} seo={pages.refund}>
      <LegalSections page={refundPolicy} />
    </LegalLayout>
  );
}
