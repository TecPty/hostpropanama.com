import type { MetadataRoute } from "next";
import { talent } from "@/constants/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hostpropanama.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/modelos/mujeres`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/modelos/hombres`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const modelRoutes: MetadataRoute.Sitemap = talent.map((model) => ({
    url: `${baseUrl}/modelos/${model.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...modelRoutes];
}
