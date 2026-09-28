import type { MetadataRoute } from "next";
import { talent } from "@/constants/content";
import { templates } from "@/templates/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hostpropanama.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/modelos/mujeres`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/modelos/hombres`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/azafatas-promotoras`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/capacitaciones-azafatas-promotores`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/activaciones-btl`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/eventos-corporativos`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terminos`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const modelRoutes: MetadataRoute.Sitemap = talent.map((model) => ({
    url: `${baseUrl}/modelos/${model.slug}`,
    lastModified: new Date(model.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const templateRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/plantillas`, changeFrequency: "monthly", priority: 0.6 },
    ...templates.map((template) => ({
      url: `${baseUrl}/plantillas/${template.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  return [...staticRoutes, ...modelRoutes, ...templateRoutes];
}
