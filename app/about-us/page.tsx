import type { Metadata } from "next";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { LegalLayout, LegalSections } from "@/components/legal/legal-layout";
import { aboutUs } from "@/lib/legal-content";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.about);

export default function Page() {
  return (
    <LegalLayout
      page={aboutUs}
      seo={pages.about}
      showLegalNav={false}
      belowContent={
        <ContactCtaSection
          eyebrow="Get Started"
          title="Ready to Get Started?"
          headingId="about-cta-heading"
          paragraphs={[
            "Getting your medical marijuana card doesn't have to be complicated. Reach out and we'll help you through it.",
          ]}
        />
      }
    >
      <LegalSections page={aboutUs} />
    </LegalLayout>
  );
}
