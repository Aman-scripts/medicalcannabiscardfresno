import type { Metadata } from "next";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  conditions,
  faqs,
} from "@/lib/home-content";

export const SITE_URL = "https://medicalcannabiscardfresno.com";
export const SITE_NAME = "Medical Cannabis Card Fresno";
export const SITE_TAGLINE = "Licensed medical cannabis card evaluations in Fresno, CA";

const PHONE_E164 = "+1-559-234-4795";
const MAPS_URL = "https://maps.google.com/?q=1510+C+St+Fresno+CA+93706";
const ORG_ID = `${SITE_URL}/#organization`;
const LOGO_ID = `${SITE_URL}/#logo`;
const HERO_IMAGE_ID = `${SITE_URL}/#hero-image`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;
const SERVICE_ID = `${SITE_URL}/#service`;
const BREADCRUMB_ID = `${SITE_URL}/#breadcrumb`;
const HOWTO_ID = `${SITE_URL}/#howto`;
const FAQ_ID = `${SITE_URL}/#faq`;
const CONDITIONS_ID = `${SITE_URL}/#conditions`;
const PHYSICIAN_ID = `${SITE_URL}/medical-marijuana-doctors/cheryl-bugailiskis/#physician`;
const PROFILE_PAGE_ID = `${SITE_URL}/medical-marijuana-doctors/cheryl-bugailiskis/#profilepage`;
const PHYSICIAN_URL = `${SITE_URL}/medical-marijuana-doctors/cheryl-bugailiskis/`;

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
  // Never force a trailing slash onto files (Fresno-logo.webp, sitemap.xml, etc.)
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
  faq: {
    path: "/faq/",
    title: "FAQ | Medical Cannabis Card Fresno",
    description:
      "Answers to common Fresno patient questions about getting and renewing a medical cannabis card online.",
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
  legal: {
    path: "/policy/",
    title: "Legal Policies | Medical Cannabis Fresno",
    description:
      "Review Privacy, HIPAA, Terms, Refund, and other policies for Medical Cannabis Card Fresno telehealth services.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  doctors: {
    path: "/medical-marijuana-doctors/",
    title: "Our Doctors | Medical Cannabis Fresno",
    description:
      "Meet our California-licensed medical marijuana doctors offering HIPAA-compliant telehealth evaluations in Fresno.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  doctorCheryl: {
    path: "/medical-marijuana-doctors/cheryl-bugailiskis/",
    title: "Cheryl Bugailiskis, MD | Fresno MMJ Doctor",
    description:
      "Dr. Cheryl Bugailiskis provides California-licensed medical cannabis evaluations for Fresno patients via telehealth.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
    ogImage: "/dr-cheryl-bugailiskis.webp",
  },
  privacy: {
    path: "/policy/privacy/",
    title: "Privacy Policy | Medical Cannabis Card Fresno",
    description:
      "Learn how Medical Cannabis Card Fresno collects, uses, and protects your personal and health information.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  terms: {
    path: "/policy/terms/",
    title: "Terms of Use | Medical Cannabis Card Fresno",
    description:
      "Read the terms that govern use of Medical Cannabis Card Fresno's website and telehealth evaluation services.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  refund: {
    path: "/policy/refund-policy/",
    title: "Refund Policy | Medical Cannabis Card Fresno",
    description:
      "Read our refund policy, including when you qualify for a full refund and how to request one.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  shipment: {
    path: "/policy/shipment-policy/",
    title: "Shipping Policy | Medical Cannabis Card Fresno",
    description:
      "Learn how Medical Cannabis Card Fresno ships your medical marijuana card, including delivery times and tracking.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  hipaa: {
    path: "/policy/hipaa-compliance/",
    title: "HIPAA Compliance | Medical Cannabis Card Fresno",
    description:
      "Learn how Medical Cannabis Card Fresno protects patient health information under HIPAA privacy standards.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  consent: {
    path: "/policy/consent-for-telehealth/",
    title: "Consent to Telehealth | Medical Cannabis Card Fresno",
    description:
      "Understand how telehealth works for your medical marijuana evaluation with Medical Cannabis Card Fresno.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  accessibility: {
    path: "/policy/accessibility-statement/",
    title: "Accessibility Statement | Medical Cannabis Card Fresno",
    description:
      "Medical Cannabis Card Fresno is committed to making our website and telehealth services accessible to all.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  editorial: {
    path: "/policy/editorial-policy/",
    title: "Editorial Policy | Medical Cannabis Card Fresno",
    description:
      "Learn about the standards behind Medical Cannabis Card Fresno content, from accuracy checks to review process.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  disclaimer: {
    path: "/policy/disclaimer/",
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
  const ogImage = absoluteUrl(page.ogImage ?? "/team-section_two.webp");

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

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "1510 C St",
  addressLocality: "Fresno",
  addressRegion: "CA",
  postalCode: "93706",
  addressCountry: "US",
} as const;

const openingHoursSpecification = [
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
    dayOfWeek: ["Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
] as const;

export function localBusinessSchema() {
  return {
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: absoluteUrl("/Fresno-logo.webp"),
    telephone: PHONE_E164,
    email: EMAIL,
    description: pages.home.description,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.7323,
      longitude: -119.7924,
    },
    openingHoursSpecification,
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
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
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
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
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

function faqMainEntity() {
  return faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));
}

/** Full JSON-LD @graph for `/about-us/` (Oklahoma About-page structure, Fresno data). */
export function aboutPageGraph() {
  const page = pages.about;
  const pageUrl = absoluteUrl(page.path);
  const webpageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return [
    {
      "@type": "MedicalBusiness",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description:
        "Medical Cannabis Card Fresno connects Fresno patients with state-licensed physicians for medical marijuana evaluations, entirely by telehealth.",
      telephone: PHONE_E164,
      address: postalAddress,
      openingHoursSpecification,
      areaServed: {
        "@type": "City",
        name: "Fresno",
        containedInPlace: {
          "@type": "State",
          name: "California",
        },
      },
      medicalSpecialty: "Other",
      sameAs: [MAPS_URL],
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": webpageId,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": breadcrumbId },
      inLanguage: "en-US",
      ...(page.published ? { datePublished: page.published } : {}),
      ...(page.modified ? { dateModified: page.modified } : {}),
    },
  ];
}

/** Full JSON-LD @graph for `/faq/` (Oklahoma FAQ-page structure, Fresno data). */
export function faqPageGraph() {
  const page = pages.faq;
  const pageUrl = absoluteUrl(page.path);
  const webpageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return [
    organizationSchema(),
    logoSchema(),
    websiteSchema(),
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": webpageId,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": breadcrumbId },
      inLanguage: "en-US",
      mainEntity: faqMainEntity(),
      ...(page.published ? { datePublished: page.published } : {}),
      ...(page.modified ? { dateModified: page.modified } : {}),
    },
    serviceSchema(),
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FAQ",
          item: pageUrl,
        },
      ],
    },
  ];
}

export function organizationSchema() {
  return {
    "@type": ["MedicalOrganization", "MedicalBusiness"],
    "@id": ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: { "@id": LOGO_ID },
    image: { "@id": LOGO_ID },
    description:
      "Medical Cannabis Card Fresno is a licensed telehealth network connecting Fresno, California patients with state-licensed physicians for medical cannabis evaluations and recommendations under Proposition 215 and MAUCRSA.",
    knowsAbout: [
      "Cannabis Medicine",
      "Telemedicine",
      "California Medical Marijuana Law",
    ],
    areaServed: {
      "@type": "City",
      name: "Fresno",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    address: postalAddress,
    telephone: PHONE_E164,
    email: EMAIL,
    openingHoursSpecification,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer service",
        areaServed: "US-CA",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: EMAIL,
        contactType: "customer support",
        areaServed: "US-CA",
        availableLanguage: ["English"],
      },
    ],
    publishingPrinciples: absoluteUrl("/policy/editorial-policy/"),
    slogan: "Get Your Medical Cannabis Card in Fresno",
  };
}

export function logoSchema() {
  return {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: absoluteUrl("/Fresno-logo.webp"),
    contentUrl: absoluteUrl("/Fresno-logo.webp"),
    width: 512,
    height: 512,
    caption: `${SITE_NAME} logo`,
  };
}

export function heroImageSchema() {
  return {
    "@type": "ImageObject",
    "@id": HERO_IMAGE_ID,
    url: absoluteUrl("/team-section_two.webp"),
    contentUrl: absoluteUrl("/team-section_two.webp"),
    width: 1200,
    height: 630,
    caption: `${SITE_NAME} care team`,
  };
}

export function physicianSchema() {
  return {
    "@type": ["Physician", "Person"],
    "@id": PHYSICIAN_ID,
    name: "Cheryl Bugailiskis, MD",
    honorificPrefix: "Dr.",
    honorificSuffix: "MD",
    givenName: "Cheryl",
    familyName: "Bugailiskis",
    jobTitle: "Medical Cannabis Evaluating Physician (California)",
    description:
      "Board-certified pediatrician with over 15 years of clinical experience, providing California-licensed medical cannabis evaluations for qualifying Fresno patients under Proposition 215 and MAUCRSA.",
    medicalSpecialty: ["Pediatric"],
    knowsAbout: [
      "Cannabis Medicine",
      "Pediatric Care",
      "Chronic Condition Management",
    ],
    url: PHYSICIAN_URL,
    telephone: PHONE_E164,
    memberOf: { "@id": ORG_ID },
    worksFor: { "@id": ORG_ID },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Board Certification in Pediatrics",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "California Medical License",
      },
    ],
  };
}

export function physicianProfilePageSchema() {
  return {
    "@type": "ProfilePage",
    "@id": PROFILE_PAGE_ID,
    url: PHYSICIAN_URL,
    name: "Dr. Cheryl Bugailiskis, MD — Fresno Medical Cannabis Doctor",
    mainEntity: { "@id": PHYSICIAN_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function medicalWebPageSchema() {
  return {
    "@type": "MedicalWebPage",
    "@id": WEBPAGE_ID,
    url: `${SITE_URL}/`,
    name: pages.home.title,
    description: pages.home.description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: { "@id": HERO_IMAGE_ID },
    about: { "@id": SERVICE_ID },
    mainEntity: { "@id": SERVICE_ID },
    breadcrumb: { "@id": BREADCRUMB_ID },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
      geographicArea: {
        "@type": "City",
        name: "Fresno",
        containedInPlace: {
          "@type": "State",
          name: "California",
        },
      },
    },
    ...(pages.home.published ? { datePublished: pages.home.published } : {}),
    ...(pages.home.modified ? { dateModified: pages.home.modified } : {}),
  };
}

export function homeBreadcrumbSchema() {
  return {
    "@type": "BreadcrumbList",
    "@id": BREADCRUMB_ID,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Doctors",
        item: absoluteUrl("/medical-marijuana-doctors/"),
      },
    ],
  };
}

export function serviceSchema() {
  return {
    "@type": "Service",
    "@id": SERVICE_ID,
    name: "Fresno Medical Cannabis Card Evaluation",
    description:
      "Online medical cannabis evaluation by a California-licensed physician via HIPAA-compliant telehealth, resulting in a signed recommendation for qualifying Fresno patients.",
    serviceType: "Medical Cannabis Evaluation",
    category: "Telemedicine",
    provider: [{ "@id": ORG_ID }, { "@id": PHYSICIAN_ID }],
    areaServed: {
      "@type": "City",
      name: "Fresno",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      availableLanguage: ["English"],
      serviceUrl: `${SITE_URL}/#book`,
    },
    hoursAvailable: openingHoursSpecification,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fresno Medical Cannabis Card Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Basic Plan — Digital Recommendation",
          description:
            "Digital recommendation signed by a board-licensed doctor, access to medical cannabis products, and 24/7 customer assistance. Valid for one year.",
          price: "55.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#price`,
          seller: { "@id": ORG_ID },
          eligibleRegion: {
            "@type": "State",
            name: "California",
          },
        },
        {
          "@type": "Offer",
          name: "Gold Plan — Plastic ID Card",
          description:
            "Includes everything in the Basic plan plus a wallet-size plastic card and printed doctor's recommendation. Valid for one year.",
          price: "99.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#price`,
          seller: { "@id": ORG_ID },
          eligibleRegion: {
            "@type": "State",
            name: "California",
          },
        },
        {
          "@type": "Offer",
          name: "Platinum Plan — Grower's License",
          description:
            "Includes everything in the Gold plan plus a grower license to cultivate up to 99 marijuana plants. Valid for one year.",
          price: "199.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#price`,
          seller: { "@id": ORG_ID },
          eligibleRegion: {
            "@type": "State",
            name: "California",
          },
        },
      ],
    },
  };
}

export function howToSchema() {
  return {
    "@type": "HowTo",
    "@id": HOWTO_ID,
    name: "How to Get Your Medical Cannabis Card in Fresno",
    description:
      "Getting a medical cannabis card in Fresno in a quick 4-step process.",
    totalTime: "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "55",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book an Appointment",
        text: "Fill out the application form, which requires basic details and your medical history.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Online Consultation",
        text: "Through a secure video or audio consultation, a doctor evaluates your medical condition and guides you on whether you're eligible for an MMJ card.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get Your Medical Marijuana Card",
        text: "If you're qualified, you receive a recommendation just after approval.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Access Medical Cannabis",
        text: "A valid MMJ card lets you buy medical marijuana from any licensed dispensary legally.",
      },
    ],
  };
}

export function conditionsSchema() {
  return {
    "@type": "ItemList",
    "@id": CONDITIONS_ID,
    name: "Qualifying Medical Conditions for a Fresno Medical Cannabis Card",
    description:
      "California allows physicians to recommend medical cannabis for any condition they believe could benefit from treatment. These are commonly evaluated qualifying conditions.",
    numberOfItems: conditions.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: conditions.map((condition, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalCondition",
        name: condition.title,
      },
    })),
  };
}

/** Home FAQ entities (matches home-page schema document). */
function homeFaqMainEntity() {
  return [
    {
      "@type": "Question",
      name: "Do I Have to Visit a Clinic to Apply for a Fresno MMJ Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you don't need to visit a clinic. You can apply for your Fresno medical marijuana card online through telehealth. Licensed doctors will evaluate your condition via video or audio call, and you can receive your MMJ recommendation from home.",
      },
    },
    {
      "@type": "Question",
      name: "How Long Does It Take to Get a Medical Marijuana Card in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete the online form in 2 to 3 minutes, have a brief consultation with a licensed doctor in 5 to 10 minutes, and once approved, you can receive your MMJ recommendation the same day.",
      },
    },
    {
      "@type": "Question",
      name: "How Much Does It Cost to Get a Medical Marijuana Card in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the format you choose. A digital recommendation is available for $55, while a physical plastic card costs $99.",
      },
    },
    {
      "@type": "Question",
      name: "Which Documents Do I Need to Get or Renew a Medical Marijuana Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll need a valid photo ID and proof of Fresno County residency. Fill out the online application form, upload your documents, and a licensed doctor will review your medical condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can I Still Use Medical Marijuana While Waiting for My Card to Be Renewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, it is illegal to use medical marijuana once your card has expired. Renew your card before it expires to maintain legal access.",
      },
    },
    {
      "@type": "Question",
      name: "Can I Apply for a Medical Marijuana Grower License in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, provided you meet all state and county requirements, including permits, zoning rules, and compliance with California's Medical and Adult-Use Cannabis Regulation and Safety Act (MAUCRSA).",
      },
    },
    {
      "@type": "Question",
      name: "Is Cannabis Still Illegal on a Federal Level?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, cannabis remains illegal at the federal level. State laws vary, and eligibility for legal access depends on specific state and county regulations.",
      },
    },
    {
      "@type": "Question",
      name: "How Do Purchase and Tax Rules Differ for MMJ and Recreational Users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Valid cardholders are exempt from state sales and use tax on medical cannabis purchases, saving up to 8.35%. Cardholders can also legally possess up to 8 ounces of dried cannabis, compared to 1 ounce for non-cardholders.",
      },
    },
    {
      "@type": "Question",
      name: "How Do I Renew My Medical Marijuana Card in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the online form, submit the required documents, and complete a review with a licensed doctor to renew your card.",
      },
    },
    {
      "@type": "Question",
      name: "What Happens if I Don't Renew My Medical Marijuana Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without a valid card, you lose the legal right to purchase, possess, or use medical cannabis, which may result in legal consequences.",
      },
    },
    {
      "@type": "Question",
      name: "Can I Still Get Fired or Denied a Job for Testing Positive for Marijuana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under California employment law (AB2188), employers cannot legally discriminate against or punish employees for off-duty marijuana use.",
      },
    },
    {
      "@type": "Question",
      name: "What Is the Legal Status of Cannabis in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both medical and recreational marijuana are legal under California law for individuals aged 18 (medical) and 21 (recreational). Local ordinances may differ from state law.",
      },
    },
    {
      "@type": "Question",
      name: "Can Minors Under 18 Apply for a Medical Marijuana Card in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if they have a qualifying condition and a doctor's recommendation. A parent, legal guardian, or approved caregiver must apply on their behalf and manage their use.",
      },
    },
    {
      "@type": "Question",
      name: "What Are the Possession and Cultivation Limits for Medical vs. Recreational Users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cardholders can possess up to 8 ounces of dried cannabis and cultivate up to 6 mature and 12 immature plants. Recreational users may possess up to 1 ounce and cultivate 6 plants per residence.",
      },
    },
    {
      "@type": "Question",
      name: "How Do I Choose the Right Medical Cannabis Clinic or Doctor in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check for state certifications, medical expertise, and patient reviews, and prioritize providers with state-licensed doctors who offer patient education and support.",
      },
    },
  ];
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    "@id": FAQ_ID,
    mainEntity: homeFaqMainEntity(),
  };
}

/** Full JSON-LD @graph for the Fresno home page (matches schema doc structure). */
export function homePageGraph() {
  return [
    organizationSchema(),
    logoSchema(),
    heroImageSchema(),
    websiteSchema(),
    physicianSchema(),
    physicianProfilePageSchema(),
    homeBreadcrumbSchema(),
    medicalWebPageSchema(),
    serviceSchema(),
    howToSchema(),
    faqSchema(),
    conditionsSchema(),
  ];
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
      "/faq/",
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
      "/policy/",
      "Hub page for Privacy, HIPAA, Terms, Refund, Accessibility, Editorial, and other compliance documents.",
    ),
    link(
      "Privacy Policy",
      "/policy/privacy/",
      "HIPAA-aligned data handling practices including what data is collected, how it is stored, and patient rights.",
    ),
    link(
      "Terms of Use",
      "/policy/terms/",
      "Patient agreement, telehealth consent terms, and service limitations.",
    ),
    link(
      "Disclaimer & Policies",
      "/policy/disclaimer/",
      "Medical and legal disclaimer covering the scope and limitations of telehealth physician recommendations.",
    ),
    link(
      "Refund Policy",
      "/policy/refund-policy/",
      "Details on the 100% money-back guarantee for patients not approved by a physician.",
    ),
    link(
      "Shipment Policy",
      "/policy/shipment-policy/",
      "Policy on digital delivery of physician recommendations and physical card mailing where applicable.",
    ),
    link(
      "Editorial Policy",
      "/policy/editorial-policy/",
      "Standards governing medical accuracy, sourcing, and content review for all site articles.",
    ),
    link(
      "HIPAA Compliance Policy",
      "/policy/hipaa-compliance/",
      "How the platform handles protected health information in compliance with federal HIPAA requirements.",
    ),
    link(
      "Consent to Telehealth",
      "/policy/consent-for-telehealth/",
      "Patient acknowledgment of telehealth evaluation terms, limitations, and rights under state telehealth laws.",
    ),
    link(
      "Accessibility Statement",
      "/policy/accessibility-statement/",
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
