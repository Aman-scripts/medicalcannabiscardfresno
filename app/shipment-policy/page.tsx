import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { shipmentPolicy } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.shipment);

export default function Page() {
  return (
    <LegalLayout page={shipmentPolicy} seo={pages.shipment}>
      <LegalSections page={shipmentPolicy} />
    </LegalLayout>
  );
}
