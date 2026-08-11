import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
} from "@/lib/home-content";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function GET() {
  const link = (label: string, path: string, summary?: string) =>
    summary
      ? `- [${label}](${absoluteUrl(path)}): ${summary}`
      : `- [${label}](${absoluteUrl(path)})`;

  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is a California-based telehealth platform that connects Fresno patients with state-licensed physicians for online medical marijuana (MMJ) evaluations and physician recommendations through HIPAA-compliant telehealth consultations. The company does not cultivate, sell, or dispense cannabis products. The platform facilitates physician-issued recommendations recognized under California's medical cannabis program, allowing qualifying patients to access licensed dispensaries where permitted by law.`,
    "",
    "- Founded in 2020 by Gourav Sharma; serving patients in Fresno, California.",
    "- Consultations typically last about 10–15 minutes, conducted entirely online; most physician recommendations are issued the same day if the patient is approved.",
    "- Digital recommendations start at $55/year; plastic ID cards at $99/year; grower’s license plans at $199/year. State MMIC filing fees, if applicable, are paid separately.",
    "- 100% refund guaranteed if the physician does not approve the patient.",
    "- HIPAA-compliant intake and consultation; physician licensure verified for California.",
    "- Serving patients for more than 6 years with 24/7 assistance.",
    "- Not a dispensary, not a recreational cannabis service, and not an in-person clinic chain.",
    "",
    "",
    "## How It Works",
    "",
    link(
      "How It Works",
      "/#our-process",
      "Step-by-step patient journey, including online intake form completion, video consultation with a licensed physician, and same-day digital recommendation when approved.",
    ),
    link(
      "Book an Appointment",
      "/#book",
      "Online booking form to start a medical cannabis card evaluation in Fresno.",
    ),
    link(
      "Features",
      "/#features",
      "Same-day approvals, licensed professionals, affordable pricing, data security, educational support, and 24/7 assistance.",
    ),
    link(
      "Card Choices",
      "/#card-choices",
      "Digital recommendation vs. plastic ID card options for Fresno patients.",
    ),
    link(
      "Renewal",
      "/#renewal",
      "Renew a Fresno 420 / MMJ card online with a licensed physician for $55.",
    ),
    "",
    "",
    "## Pricing",
    "",
    link(
      "Pricing Plans",
      "/#price",
      "Basic Plan ($55 digital recommendation), Gold Plan ($99 plastic ID card), and Platinum Plan ($199 grower’s license up to 99 plants).",
    ),
    "",
    "",
    "## Qualifying Conditions",
    "",
    link(
      "Qualifying Conditions Overview",
      "/#qualify-condition",
      "Common conditions evaluated for California medical cannabis recommendations, including chronic pain, PTSD, anxiety, cancer-related symptoms, and other physician-assessed needs.",
    ),
    link(
      "Benefits of a Medical Cannabis Card",
      "/#benefits",
      "Legal access, tax advantages vs. recreational purchase, higher possession limits, and patient protections under California law.",
    ),
    "",
    "",
    "## Patient Guides",
    "",
    link(
      "FAQ",
      "/#faq",
      "Answers on telehealth evaluations, timelines, costs, documents, renewals, possession limits, and Fresno / California cannabis rules.",
    ),
    link(
      "About the Team",
      "/#about",
      "HIPAA compliance, California and Fresno program alignment, and support tailored to patient health needs.",
    ),
    link(
      "Patient Testimonials",
      "/#testimonials",
      "Verified patient feedback on evaluation speed, support, and card delivery.",
    ),
    "",
    "",
    "## Special Services",
    "",
    link(
      "Grower’s License (99 Plants)",
      "/#price",
      "Physician recommendation supporting a larger cultivation exemption (up to 99 plants) for qualifying California medical patients via the Platinum Plan.",
    ),
    link(
      "Medical Marijuana Card Renewal",
      "/#renewal",
      "Renewal service for patients whose MMJ certifications are expiring in Fresno.",
    ),
    "",
    "",
    "## Medical Marijuana Doctors",
    "",
    link(
      "Doctors Overview",
      "/medical-marijuana-doctors/",
      "Directory of licensed physicians who conduct telehealth medical cannabis evaluations for Fresno patients.",
    ),
    link(
      "Cheryl Bugailiskis, MD",
      "/medical-marijuana-doctors/cheryl-bugailiskis/",
      "Board-certified pediatrician providing California-compliant medical cannabis evaluations via telehealth.",
    ),
    "",
    "",
    "## Company & Legal",
    "",
    link(
      "About Us",
      "/about-us/",
      "Company history, founder Gourav Sharma, platform mission, and the physician-network model.",
    ),
    link(
      "Contact Us",
      "/contact/",
      `Phone ${PHONE_DISPLAY}, email ${EMAIL}, appointment booking, and Fresno address at ${ADDRESS}.`,
    ),
    link(
      "Reviews",
      "/reviews/",
      "Patient testimonials and review summaries for Medical Cannabis Card Fresno.",
    ),
    link(
      "Legal Policies",
      "/legal/",
      "Hub page for Privacy, HIPAA, Terms, Refund, Accessibility, Editorial, and other compliance documents.",
    ),
    link(
      "Privacy Policy",
      "/privacy/",
      "HIPAA-aligned data handling practices including what data is collected, how it is stored, and patient rights.",
    ),
    link(
      "Terms of Use",
      "/terms/",
      "Patient agreement, telehealth consent terms, and service limitations.",
    ),
    link(
      "Disclaimer & Policies",
      "/disclaimer/",
      "Medical and legal disclaimer covering the scope and limitations of telehealth physician recommendations.",
    ),
    link(
      "Refund Policy",
      "/refund-policy/",
      "Details on the 100% money-back guarantee for patients not approved by a physician.",
    ),
    link(
      "Shipment Policy",
      "/shipment-policy/",
      "Policy on digital delivery of physician recommendations and physical card mailing where applicable.",
    ),
    link(
      "Editorial Policy",
      "/editorial-policy/",
      "Standards governing medical accuracy, sourcing, and content review for all site articles.",
    ),
    link(
      "HIPAA Compliance Policy",
      "/hipaa-compliance/",
      "How the platform handles protected health information in compliance with federal HIPAA requirements.",
    ),
    link(
      "Consent to Telehealth",
      "/consent-for-telehealth/",
      "Patient acknowledgment of telehealth evaluation terms, limitations, and rights under state telehealth laws.",
    ),
    link(
      "Accessibility Statement",
      "/accessibility-statement/",
      "Commitment to web accessibility standards for patients with disabilities.",
    ),
    "",
    "",
    "---",
    "",
    "*For current pricing, qualifying conditions, or California program rules, consult the linked pages directly, as cannabis laws change frequently.*",
    "",
    `[XML Sitemap](${SITE_URL}/sitemap.xml)`,
    "",
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
