import type { Metadata } from "next";
import {
  BenefitsSection,
  CardChoicesSection,
  ConditionsSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  PricingSection,
  ProcessSection,
  RenewalSection,
  TeamSection,
  TestimonialsSection,
} from "@/components/home";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildMetadata,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  pages,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.home);

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organizationSchema(),
            localBusinessSchema(),
            websiteSchema(),
            webPageSchema(pages.home),
            faqSchema(),
          ],
        }}
      />
      <SiteHeader />
      <main id="main-content" data-cv="home">
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <TeamSection />
        <ConditionsSection />
        <BenefitsSection />
        <CardChoicesSection />
        <PricingSection />
        <RenewalSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
