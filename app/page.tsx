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
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
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
