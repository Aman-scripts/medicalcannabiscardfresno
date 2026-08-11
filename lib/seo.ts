import type { Metadata } from "next";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  faqs,
} from "@/lib/home-content";

export const SITE_URL = "https://medicalcannabiscardfresno.com";
export const SITE_NAME = "Medical Cannabis Card Fresno";
export const SITE_TAGLINE = "Licensed medical cannabis card evaluations in Fresno, CA";

/** Site-wide publish / modify timestamps (ISO 8601). */
export const SITE_DATES = {
  published: "2024-01-15T08:00:00-08:00",
  modified: "2025-09-16T08:00:00-07:00",
} as const;

export const TITLE_MAX = 55;
export const DESCRIPTION_MAX = 130;

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  published?: string;
  modified?: string;
  ogImage?: string;
  noIndex?: boolean;
};

function assertLength(label: string, value: string, max: number) {
  if (process.env.NODE_ENV !== "production" && value.length > max) {
    console.warn(`[seo] ${label} is ${value.length} chars (max ${max}): ${value}`);
  }
}

function isFilePath(path: string) {
  return /\.[a-z0-9]+$/i.test(path.split("?")[0] ?? "");
}

export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  if (path.includes("#")) {
    const [base, hash] = path.split("#");
    return `${withTrailingSlash(base ?? "/")}#${hash ?? ""}`;
  }
  if (path.includes("?")) {
    const [base, query] = path.split("?");
    return `${withTrailingSlash(base ?? "/")}?${query ?? ""}`;
  }
  // Never force a trailing slash onto files (logo.png, sitemap.xml, etc.)
  if (isFilePath(path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

/** Absolute page/asset URL. Pages keep a trailing slash; files do not. */
export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (isFilePath(normalized)) return `${SITE_URL}${normalized}`;
  const pagePath = withTrailingSlash(normalized);
  return pagePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${pagePath}`;
}

/**
 * Canonical URL in the preferred SEO format:
 * https://medicalcannabiscardfresno.com/contact/
 */
export function canonicalUrl(path = "/") {
  return absoluteUrl(path);
}

/** Paths that should return HTTP 410 Gone (add retired URLs here). */
export const GONE_PATHS = new Set([
  "/old-home/",
  "/wp-admin/",
  "/blog/",
  "/blog",
  "/old-home",
]);

export const pages: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "Medical Cannabis Card Fresno | Apply Online",
    description:
      "Get a medical cannabis card in Fresno online. Licensed doctors, same-day approvals, plans from $55. HIPAA-compliant telehealth.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  contact: {
    path: "/contact/",
    title: "Contact Us | Medical Cannabis Fresno",
    description:
      "Call (559) 234-4795 or email Medical Cannabis Card Fresno anytime for MMJ card help, appointments, and support.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  about: {
    path: "/about-us/",
    title: "About Us | Medical Cannabis Card Fresno",
    description:
      "Learn about Medical Cannabis Card Fresno, our team, and how we connect Fresno patients with licensed physicians.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  reviews: {
    path: "/reviews/",
    title: "Reviews | Medical Cannabis Card Fresno",
    description:
      "Read verified patient reviews for Medical Cannabis Card Fresno and what patients say about their evaluation.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  privacy: {
    path: "/privacy/",
    title: "Privacy Policy | Medical Cannabis Card Fresno",
    description:
      "Learn how Medical Cannabis Card Fresno collects, uses, and protects your personal and health information.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  terms: {
    path: "/terms/",
    title: "Terms of Use | Medical Cannabis Card Fresno",
    description:
      "Read the terms that govern use of Medical Cannabis Card Fresno's website and telehealth evaluation services.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  refund: {
    path: "/refund-policy/",
    title: "Refund Policy | Medical Cannabis Card Fresno",
    description:
      "Read our refund policy, including when you qualify for a full refund and how to request one.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  shipment: {
    path: "/shipment-policy/",
    title: "Shipping Policy | Medical Cannabis Card Fresno",
    description:
      "Learn how Medical Cannabis Card Fresno ships your medical marijuana card, including delivery times and tracking.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  hipaa: {
    path: "/hipaa-compliance/",
    title: "HIPAA Compliance | Medical Cannabis Card Fresno",
    description:
      "Learn how Medical Cannabis Card Fresno protects patient health information under HIPAA privacy standards.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  consent: {
    path: "/consent-for-telehealth/",
    title: "Consent to Telehealth | Medical Cannabis Card Fresno",
    description:
      "Understand how telehealth works for your medical marijuana evaluation with Medical Cannabis Card Fresno.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  accessibility: {
    path: "/accessibility-statement/",
    title: "Accessibility Statement | Medical Cannabis Card Fresno",
    description:
      "Medical Cannabis Card Fresno is committed to making our website and telehealth services accessible to all.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  editorial: {
    path: "/editorial-policy/",
    title: "Editorial Policy | Medical Cannabis Card Fresno",
    description:
      "Learn about the standards behind Medical Cannabis Card Fresno content, from accuracy checks to review process.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  disclaimer: {
    path: "/disclaimer/",
    title: "Disclaimer & Policies | Medical Cannabis Card Fresno",
    description:
      "Review the disclaimers and policies for Medical Cannabis Card Fresno's website and evaluation services.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  gone: {
    path: "/gone/",
    title: "Page Removed | Medical Cannabis Fresno",
    description:
      "This page has been permanently removed from Medical Cannabis Card Fresno and is no longer available.",
    noIndex: true,
  },
};

for (const page of Object.values(pages)) {
  assertLength(`${page.path} title`, page.title, TITLE_MAX);
  assertLength(`${page.path} description`, page.description, DESCRIPTION_MAX);
}

export const sitemapEntries = Object.values(pages).filter((p) => !p.noIndex);

export function buildMetadata(page: PageSeo): Metadata {
  const canonical = canonicalUrl(page.path);
  const ogImage = absoluteUrl(page.ogImage ?? "/logo.png");

  return {
    metadataBase: new URL(`${SITE_URL}/`),
    title: {
      absolute: page.title,
    },
    description: page.description,
    alternates: {
      canonical,
    },
    robots: page.noIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    other: {
      ...(page.published
        ? { "article:published_time": page.published }
        : {}),
      ...(page.modified ? { "article:modified_time": page.modified } : {}),
    },
  };
}

export function localBusinessSchema() {
  return {
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: absoluteUrl("/logo.png"),
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    description: pages.home.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1510 C St",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93706",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.7323,
      longitude: -119.7924,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Fresno",
    },
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_TAGLINE,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
  };
}

export function webPageSchema(page: PageSeo) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
    ...(page.published ? { datePublished: page.published } : {}),
    ...(page.modified ? { dateModified: page.modified } : {}),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl("/logo.png"),
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1510 C St",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93706",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-559-234-4795",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };
}

/** Generates `/llms.txt` (markdown links) for agents and Lighthouse Agentic Browsing. */
export function buildAgentLlmsTxt() {
  const link = (label: string, path: string, summary?: string) =>
    summary
      ? `- [${label}](${absoluteUrl(path)}): ${summary}`
      : `- [${label}](${absoluteUrl(path)})`;

  const lines = [
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
  ];

  return `${lines.join("\n")}\n`;
}

/** @deprecated Use buildAgentLlmsTxt */
export const buildLlmsTxt = buildAgentLlmsTxt;
