import type { MetadataRoute } from "next";
import { portfolioPages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return portfolioPages
    .filter((page) => !page.canonicalPath)
    .map((page) => ({ url: `${site.url}${page.path}` }));
}
