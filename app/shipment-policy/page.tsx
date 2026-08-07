import type { Metadata } from "next";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { shipmentPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `${shipmentPolicy.title} | Medical Cannabis Card Fresno`,
  description: shipmentPolicy.description,
};

export default function ShipmentPolicyPage() {
  return (
    <LegalLayout page={shipmentPolicy}>
      <LegalSections page={shipmentPolicy} />
    </LegalLayout>
  );
}
