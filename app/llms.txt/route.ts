import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
} from "@/lib/home-content";
import {
  SITE_DATES,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
  sitemapEntries,
} from "@/lib/seo";

export const dynamic = "force-dynamic";

export function GET() {
  const link = (label: string, path: string, summary: string) =>
    `- [${label}](${absoluteUrl(path)}): ${summary}`;

  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE}`,
    "",
    `Last-Updated: ${SITE_DATES.modified}`,
    "",
    "## Site",
    link("Home", "/", "Book a medical cannabis card evaluation in Fresno"),
    link(
      "Contact",
      "/contact/",
      `Phone ${PHONE_DISPLAY}, email ${EMAIL}`,
    ),
    link("About Us", "/about-us/", "Our team and how evaluations work"),
    link("Reviews", "/reviews/", "Verified patient feedback"),
    "",
    "## Pages",
    ...sitemapEntries.map((page) =>
      link(page.title, page.path, page.description),
    ),
    "",
    "## Services",
    "- Same-day medical cannabis card evaluations",
    "- Online consultations with licensed doctors",
    "- Digital recommendations from $55",
    "- Physical plastic cards available",
    "- HIPAA-compliant patient intake",
    "",
    "## Location",
    `- Address: ${ADDRESS}`,
    "",
    "## Optional",
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    `- [Robots](${SITE_URL}/robots.txt)`,
    `- [LLMs](${SITE_URL}/llms.txt)`,
    "",
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
