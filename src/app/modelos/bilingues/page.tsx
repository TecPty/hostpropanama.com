import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, MessageCircle } from "lucide-react";
import { talent } from "@/constants/content";
import Header from "@/components/Header";
import TalentCatalog from "@/components/TalentCatalog";
import { LANGUAGES, getForeignLanguages, isBilingual } from "@/utils/languages";
import { getWhatsAppLink } from "@/utils/whatsapp";

const PAGE_URL = "https://www.hostpropanama.com/modelos/bilingues";

export const metadata: Metadata = {
  title: "Staff Bilingüe y Azafatas que Hablan Inglés en Panamá | HostPro",
  description:
    "Azafatas, modelos y brand ambassadors bilingües en Panamá: inglés, francés, alemán y más. Filtra por idioma y cotiza staff para congresos, ferias y eventos internacionales.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Staff Bilingüe en Panamá | HostPro",
    description: "Encuentra azafatas y modelos que hablan inglés, francés, alemán y otros idiomas para tu evento en Panamá.",
    url: PAGE_URL,
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: "Staff bilingüe HostPro Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Staff Bilingüe | HostPro Panamá",
    description: "Azafatas y modelos bilingües para eventos en Panamá. Filtra por idioma.",
  },
};

const useCases = [
  "Congresos y convenciones internacionales",
  "Ferias y exposiciones con visitantes extranjeros",
  "Delegaciones, embajadas y protocolo VIP",
  "Lanzamientos de marcas globales",
  "Turismo, cruceros y hospitality",
];

export default function ModelosBilinguesPage() {
  const modelos = talent.filter((model) => isBilingual(model.languages));
  const languageCounts = LANGUAGES.filter((lang) => lang.code !== "es")
    .map((lang) => ({
      ...lang,
      count: modelos.filter((model) => getForeignLanguages(model.languages).some((skill) => skill.code === lang.code)).length,
    }))
    .filter((lang) => lang.count > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.hostpropanama.com" },
              { "@type": "ListItem", "position": 2, "name": "Staff Bilingüe", "item": PAGE_URL },
            ],
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.14em] text-white/45 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white/70">Staff bilingüe</span>
          </nav>

          <div className="mb-10 md:mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3 flex items-center gap-2">
              <Globe2 className="h-4 w-4" aria-hidden="true" />
              Modelos
            </p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Staff{" "}
              <span className="text-[#d4b200] block">Bilingüe</span>
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
              Azafatas, modelos y brand ambassadors que hablan inglés y otros idiomas para atender a invitados
              internacionales. Filtra por idioma para encontrar el perfil que tu evento necesita.
            </p>
          </div>

          <dl className="mb-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            <div className="flex flex-col-reverse bg-[#0a0a0a] p-4">
              <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/60">Perfiles bilingües</dt>
              <dd className="text-3xl font-black text-[#d4b200]">{modelos.length}</dd>
            </div>
            {languageCounts.map((lang) => (
              <div key={lang.code} className="flex flex-col-reverse bg-[#0a0a0a] p-4">
                <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/60">Hablan {lang.name.toLowerCase()}</dt>
                <dd className="text-3xl font-black text-white">{lang.count}</dd>
              </div>
            ))}
          </dl>

          <TalentCatalog models={modelos} />

          <section className="mt-16 grid gap-8 border-t border-white/10 pt-14 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">¿Cuándo necesitas staff bilingüe?</h2>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {useCases.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#d4b200]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#d4b200]/30 bg-[#d4b200]/5 p-6 md:p-8">
              <p className="text-lg font-bold">¿Buscas un idioma que no aparece en la lista?</p>
              <p className="mt-2 text-sm text-white/70">
                Escríbenos con el idioma y la fecha de tu evento y te confirmamos disponibilidad.
              </p>
              <a
                href={getWhatsAppLink("staff-bilingue")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 bg-[#d4b200] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition-colors hover:bg-[#e6c700]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Cotizar staff bilingüe
              </a>
            </div>
          </section>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/modelos/mujeres"
              className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
            >
              Ver mujeres
            </Link>
            <Link
              href="/modelos/hombres"
              className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
            >
              Ver hombres
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
