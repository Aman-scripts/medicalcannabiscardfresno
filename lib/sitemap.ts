import { SITE_URL, sitemapEntries, withTrailingSlash } from "@/lib/seo";

export type SitemapRow = {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
};

function sitemapMeta(path: string): Pick<SitemapRow, "changefreq" | "priority"> {
  if (path === "/") return { changefreq: "weekly", priority: "1.0" };
  if (path === "/reviews/") return { changefreq: "weekly", priority: "0.8" };
  if (
    path === "/about-us/" ||
    path === "/contact/" ||
    path === "/legal/" ||
    path === "/medical-marijuana-doctors/"
  ) {
    return { changefreq: "monthly", priority: "0.8" };
  }
  if (path.startsWith("/medical-marijuana-doctors/")) {
    return { changefreq: "monthly", priority: "0.7" };
  }
  if (
    path === "/privacy/" ||
    path === "/terms/" ||
    path === "/hipaa-compliance/" ||
    path === "/consent-for-telehealth/" ||
    path === "/refund-policy/" ||
    path === "/shipment-policy/" ||
    path === "/accessibility-statement/" ||
    path === "/editorial-policy/" ||
    path === "/disclaimer/"
  ) {
    return { changefreq: "yearly", priority: "0.4" };
  }
  return { changefreq: "monthly", priority: "0.7" };
}

export function getSitemapRows(): SitemapRow[] {
  return sitemapEntries.map((page) => {
    const path = withTrailingSlash(page.path);
    const { changefreq, priority } = sitemapMeta(path);
    const lastmod = page.modified
      ? new Date(page.modified).toISOString()
      : new Date().toISOString();

    return {
      loc: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
      lastmod,
      changefreq,
      priority,
    };
  });
}

export function buildSitemapXml(rows: SitemapRow[] = getSitemapRows()) {
  const urls = rows
    .map(
      (row) => `  <url>
    <loc>${row.loc}</loc>
    <lastmod>${row.lastmod}</lastmod>
    <changefreq>${row.changefreq}</changefreq>
    <priority>${row.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
