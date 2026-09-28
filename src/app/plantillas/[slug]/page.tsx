import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TemplateSite from "@/templates/_shared/components/TemplateSite";
import { getTemplate, templates } from "@/templates/registry";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) return {};

  const { meta, business } = template.content;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: meta.siteUrl },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.siteUrl,
      siteName: business.name,
      locale: "es_PA",
      type: "website",
      images: [{ url: meta.ogImage.src, width: meta.ogImage.width, height: meta.ogImage.height, alt: meta.ogImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage.src],
    },
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();

  return <TemplateSite slug={template.slug} content={template.content} />;
}
