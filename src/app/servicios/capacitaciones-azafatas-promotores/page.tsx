import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { getWhatsAppLink } from "@/utils/whatsapp";

export const metadata: Metadata = {
  title: "Capacitación para Azafatas y Promotores en Panamá | HostPro",
  description:
    "Formación práctica para azafatas, promotores y brand ambassadors en Panamá: protocolo, comunicación, servicio al cliente, manejo de objeciones y representación de marca.",
  alternates: {
    canonical: "https://www.hostpropanama.com/servicios/capacitaciones-azafatas-promotores",
  },
  openGraph: {
    title: "Capacitación para Azafatas y Promotores en Panamá | HostPro",
    description:
      "Formación práctica para trabajar en eventos, activaciones y representación de marca con mayor preparación y consistencia.",
    url: "https://www.hostpropanama.com/servicios/capacitaciones-azafatas-promotores",
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: "Capacitaciones HostPro Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacitación para Azafatas y Promotores en Panamá | HostPro",
    description:
      "Formación práctica en protocolo, comunicación, atención al cliente y representación de marca para eventos y activaciones.",
  },
};

const trainingModules = [
  "Protocolo e imagen profesional",
  "Comunicación y atención al cliente",
  "Manejo de objeciones e interacción con público",
  "Ejecución en activaciones y representación de marca",
];

const methodology = [
  "Entrenamiento práctico por módulos",
  "Role play y simulaciones de situaciones reales",
  "Evaluación final del aprendizaje",
];

const faqs = [
  {
    q: "¿A quién están dirigidas las capacitaciones de HostPro?",
    a: "A personas que buscan prepararse para trabajar como azafatas, promotores o brand ambassadors, y a talento que quiere fortalecer habilidades aplicables a eventos, activaciones y representación de marca.",
  },
  {
    q: "¿Qué temas se trabajan durante la capacitación?",
    a: "El enfoque incluye protocolo, comunicación, servicio al cliente, manejo de objeciones, ejecución en activaciones y representación de marca.",
  },
  {
    q: "¿La capacitación incluye práctica?",
    a: "Sí. La metodología contempla entrenamiento por módulos, role play, simulaciones de situaciones reales y una evaluación final del aprendizaje.",
  },
  {
    q: "¿La formación sirve para activaciones y eventos corporativos?",
    a: "Sí. Los contenidos están orientados a situaciones de campo como activaciones, ferias, eventos corporativos y experiencias de marca.",
  },
  {
    q: "¿Cómo puedo conocer las próximas fechas disponibles?",
    a: "Puedes escribirnos por WhatsApp para consultar próximas fechas, modalidad y detalles de las capacitaciones disponibles.",
  },
];

export default function CapacitacionesAzafatasPromotoresPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://www.hostpropanama.com/servicios" },
              { "@type": "ListItem", "position": 3, "name": "Capacitaciones", "item": "https://www.hostpropanama.com/servicios/capacitaciones-azafatas-promotores" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Capacitación para Azafatas, Promotores y Brand Ambassadors",
            "provider": {
              "@id": "https://www.hostpropanama.com/#organization",
            },
            "areaServed": "Panama",
            "url": "https://www.hostpropanama.com/servicios/capacitaciones-azafatas-promotores",
            "description":
              "Formación práctica para azafatas, promotores y brand ambassadors en protocolo, comunicación, servicio al cliente, ejecución en activaciones y representación de marca.",
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <nav
            aria-label="Breadcrumb"
            className="text-[11px] uppercase tracking-[0.14em] text-white/45 flex items-center gap-2 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-white/70">Capacitaciones</span>
          </nav>

          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">
              Formación profesional
            </p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Capacitación para Azafatas y Promotores en Panamá
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
              Preparamos talento para desenvolverse con mayor seguridad y consistencia en eventos,
              activaciones y experiencias de marca. La formación combina habilidades de protocolo,
              comunicación, atención al cliente y ejecución en campo.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                ¿Para quién es esta formación?
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Está dirigida a personas que quieren prepararse para trabajar como azafatas, promotores
                o brand ambassadors, y a perfiles que desean fortalecer su desempeño en atención de
                público, protocolo, activaciones y representación de marca.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-4">
                Habilidades que trabajamos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trainingModules.map((module) => (
                  <div key={module} className="border border-white/10 bg-white/5 p-5">
                    <p className="text-white/80 text-sm font-semibold">{module}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-4">
                Metodología práctica
              </h2>
              <ol className="space-y-4">
                {methodology.map((step, idx) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="text-[#d4b200] font-black text-xl leading-none shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/75 text-sm pt-1">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-white/55 text-xs mt-5 leading-relaxed">
                La evaluación corresponde al proceso formativo de HostPro y no implica acreditación de
                una entidad educativa externa.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Preparación para activaciones, ferias y eventos
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Los ejercicios están orientados a situaciones que pueden presentarse durante una
                activación, feria o evento corporativo: interacción con público, comunicación de marca,
                atención de invitados, manejo de preguntas y adaptación a un briefing.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Próximas fechas y detalles
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Las fechas y modalidades pueden variar. Escríbenos para consultar las próximas
                capacitaciones disponibles y recibir información actualizada.
              </p>
            </section>
          </div>

          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-6">
              Preguntas Frecuentes sobre Capacitaciones
            </h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="group bg-white/5 border border-white/10 p-5">
                  <summary className="cursor-pointer font-bold text-white text-sm list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]">
                    {item.q}
                  </summary>
                  <p className="text-white/70 text-sm leading-relaxed mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="border-t border-white/10 pt-14 mb-14">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
              Servicios y Talento Relacionado
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/servicios/azafatas-promotoras"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Azafatas y Promotoras
              </Link>
              <Link
                href="/servicios/activaciones-btl"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Activaciones BTL
              </Link>
              <Link
                href="/servicios/eventos-corporativos"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Eventos Corporativos
              </Link>
              <Link
                href="/modelos/mujeres"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Catálogo Mujeres
              </Link>
              <Link
                href="/modelos/hombres"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Catálogo Hombres
              </Link>
              <Link
                href="/servicios"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-white/70 text-sm max-w-md">
              ¿Quieres conocer las próximas fechas y modalidad? Escríbenos y te compartimos la información disponible.
            </p>
            <a
              href={getWhatsAppLink("service-capacitaciones")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d4b200] text-black px-6 py-3 text-xs font-black uppercase tracking-[0.15em] hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar Capacitaciones
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
