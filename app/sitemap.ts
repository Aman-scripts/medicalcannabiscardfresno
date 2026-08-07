import type { MetadataRoute } from "next";
import { SITE_URL, sitemapEntries, withTrailingSlash } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((page) => {
    const path = withTrailingSlash(page.path);
    return {
      url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
      lastModified: page.modified ? new Date(page.modified) : new Date(),
      changeFrequency: page.path === "/" ? "weekly" : "monthly",
      priority: page.path === "/" ? 1 : page.path === "/contact/" ? 0.9 : 0.6,
    };
  });
}
