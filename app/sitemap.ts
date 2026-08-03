import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/method", "/sessions", "/faqs", "/contact", "/book"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
