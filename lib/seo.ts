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
  privacy: {
    path: "/privacy/",
    title: "Privacy Policy | Medical Cannabis Fresno",
    description:
      "How Medical Cannabis Card Fresno collects, uses, and protects your personal and medical information online.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  terms: {
    path: "/terms/",
    title: "Terms of Use | Medical Cannabis Fresno",
    description:
      "Read the Terms of Use for Medical Cannabis Card Fresno telehealth evaluations and medical cannabis card services.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  refund: {
    path: "/refund-policy/",
    title: "Refund Policy | Medical Cannabis Fresno",
    description:
      "Learn about refunds, money-back terms, and approval guarantees for Medical Cannabis Card Fresno services.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  shipment: {
    path: "/shipment-policy/",
    title: "Shipment Policy | Medical Cannabis Fresno",
    description:
      "Shipping details for physical medical cannabis cards ordered through Medical Cannabis Card Fresno.",
    published: SITE_DATES.published,
    modified: SITE_DATES.modified,
  },
  hipaa: {
    path: "/hipaa-compliance/",
    title: "HIPAA Compliance | Medical Cannabis Fresno",
    description:
      "How Medical Cannabis Card Fresno protects patient health information under HIPAA compliance standards.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  consent: {
    path: "/consent-for-telehealth/",
    title: "Telehealth Consent | Medical Cannabis Fresno",
    description:
      "Consent details for telehealth medical cannabis evaluations with Medical Cannabis Card Fresno doctors.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  accessibility: {
    path: "/accessibility-statement/",
    title: "Accessibility | Medical Cannabis Fresno",
    description:
      "Our accessibility commitment for Medical Cannabis Card Fresno website visitors and patients.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  editorial: {
    path: "/editorial-policy/",
    title: "Editorial Policy | Medical Cannabis Fresno",
    description:
      "Editorial standards for Medical Cannabis Card Fresno content, reviews, and medical cannabis education.",
    published: "2024-01-15T08:00:00-08:00",
    modified: "2025-09-16T08:00:00-07:00",
  },
  disclaimer: {
    path: "/disclaimer/",
    title: "Medical Disclaimer | Cannabis Card Fresno",
    description:
      "Important medical disclaimer for information on the Medical Cannabis Card Fresno website and services.",
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

/** Generates `/llms.txt` from the same SEO source of truth as sitemap/robots. */
export function buildLlmsTxt() {
  const indexable = sitemapEntries;
  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE}`,
    "",
    `Last-Updated: ${SITE_DATES.modified}`,
    "",
    "## Site",
    `- Home: ${absoluteUrl("/")}`,
    `- Contact: ${absoluteUrl("/contact/")}`,
    `- Phone: ${PHONE_DISPLAY}`,
    `- Email: ${EMAIL}`,
    `- Address: ${ADDRESS}`,
    "",
    "## Pages",
    ...indexable.map(
      (page) =>
        `- ${page.title}: ${absoluteUrl(page.path)} — ${page.description}`,
    ),
    "",
    "## Services",
    "- Same-day medical cannabis card evaluations",
    "- Online consultations with licensed doctors",
    "- Digital recommendations from $55",
    "- Physical plastic cards available",
    "- HIPAA-compliant patient intake",
    "",
    "## Optional",
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
    `- Robots: ${SITE_URL}/robots.txt`,
    `- LLMs: ${SITE_URL}/llms.txt`,
    "",
  ];

  return `${lines.join("\n")}\n`;
}
