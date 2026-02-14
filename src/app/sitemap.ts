import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://devmama.io";

  const routes = [
    "",
    "/services",
    "/services/web-development",
    "/services/mobile-apps",
    "/services/ai-ml",
    "/services/cloud-devops",
    "/services/business-automation",
    "/about",
    "/portfolio",
    "/contact",
    "/blog",
    "/student-projects",
    "/enterprise-solutions",
    "/startup-mvp",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return sitemapEntries;
}
