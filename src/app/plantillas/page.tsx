import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import { templates } from "@/templates/registry";

const PAGE_URL = "https://www.hostpropanama.com/plantillas";
const TITLE = "Plantillas de Sitios Web para Negocios en Panamá | HostPro";
const DESCRIPTION =
  "Catálogo de modelos de sitios web listos para tu negocio en Panamá: responsive, optimizados para Google y con citas o ventas por WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: "Plantillas web HostPro Panamá" }],
  },
};

export default function PlantillasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4b200]">Plantillas web</p>
            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
              Modelos de sitios web para tu negocio
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">{DESCRIPTION}</p>
          </div>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <li key={template.slug} className="flex flex-col overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src={template.thumbnail.src}
                  alt={template.thumbnail.alt}
                  width={template.thumbnail.width}
                  height={template.thumbnail.height}
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#d4b200]">
                    {template.niche} · Plan {template.plan}
                  </p>
                  <h2 className="mt-2 text-lg font-black uppercase tracking-tight">{template.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{template.description}</p>
                  <Link
                    href={`/plantillas/${template.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-white"
                  >
                    Ver demo
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
