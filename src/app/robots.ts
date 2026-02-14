import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*",
          "/admin/*",
          "/private/*",
          "/_next/*",
          "/static/*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/*"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Mobile",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/*"],
      },
    ],
    sitemap: "https://devmama.io/sitemap.xml",
    host: "https://devmama.io",
  };
}
