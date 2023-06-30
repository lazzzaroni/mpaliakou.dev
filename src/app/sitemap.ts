import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/about"].map((route) => ({
    url: `https://mpaliakou.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
