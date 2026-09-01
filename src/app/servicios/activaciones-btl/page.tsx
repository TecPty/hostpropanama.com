import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { process } from "@/constants/content";
import { getWhatsAppLink } from "@/utils/whatsapp";

export const metadata: Metadata = {
  title: "Activaciones BTL en Panamá | HostPro Panamá",
  description:
    "Activaciones BTL, sampling, promociones en punto de venta y brand ambassadors para marcas en Panamá. Planificamos talento y ejecución para experiencias de marca profesionales.",
  alternates: {
    canonical: "https://www.hostpropanama.com/servicios/activaciones-btl",
  },
  openGraph: {
    title: "Activaciones BTL en Panamá | HostPro Panamá",
    description:
      "Activaciones BTL, sampling, promociones en punto de venta y brand ambassadors para marcas en Panamá.",
    url: "https://www.hostpropanama.com/servicios/activaciones-btl",
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: "Activaciones BTL HostPro Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Activaciones BTL en Panamá | HostPro Panamá",
    description: "Activaciones BTL, sampling y brand ambassadors para marcas en Panamá.",
  },
};

const faqs = [
  {
    q: "¿Dónde realizan activaciones BTL en Panamá?",
    a: "Ejecutamos activaciones en supermercados, retail, ferias, eventos corporativos y eventos masivos. Cobertura nacional, coordinando transporte y uniformes según el evento.",
  },
  {
    q: "¿Qué perfiles pueden participar en una activación?",
    a: "Brand ambassadors capacitados para representar tu marca en punto de venta, sampling, lanzamientos y ferias, seleccionados según el perfil que necesita tu marca.",
  },
  {
    q: "¿Pueden apoyar sampling y ejecución en punto de venta?",
    a: "Sí, la ejecución en punto de venta es parte central de nuestro servicio de activaciones BTL.",
  },
  {
    q: "¿Cómo seleccionan el talento para una activación?",
    a: "Con una selección curada del staff según el brief y los requerimientos del evento, seguida de confirmación, logística y supervisión en sitio.",
  },
  {
    q: "¿Cómo solicito una cotización para una activación BTL?",
    a: "Escríbenos por WhatsApp o desde el formulario de contacto y coordinamos los detalles de tu activación.",
  },
];

export default function ActivacionesBTLPage() {
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
              { "@type": "ListItem", "position": 3, "name": "Activaciones BTL", "item": "https://www.hostpropanama.com/servicios/activaciones-btl" },
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
            "name": "Activaciones BTL",
            "provider": {
              "@type": "Organization",
              "name": "HostPro Panamá",
              "url": "https://www.hostpropanama.com",
            },
            "areaServed": "Panama",
            "url": "https://www.hostpropanama.com/servicios/activaciones-btl",
            "description":
              "Activaciones BTL, sampling, promociones en punto de venta y brand ambassadors para marcas en Panamá.",
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.14em] text-white/45 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-white/70">Activaciones BTL</span>
          </nav>

          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">Servicios</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Activaciones BTL en Panamá para Marcas y Eventos
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
              Una activación no es solo presencia: es percepción, experiencia y ejecución coherente en el
              punto de contacto con el consumidor. En HostPro planificamos el talento y la logística para
              que tu marca esté representada de forma profesional en cada activación.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Dónde funciona una activación BTL
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Ejecutamos activaciones en punto de venta y retail, sampling de producto, lanzamientos,
                ferias y eventos corporativos, y eventos masivos. Cada formato requiere un perfil de
                talento distinto, por lo que ajustamos la selección según el objetivo comercial de tu marca.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Brand ambassadors y preparación del talento
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Trabajamos con brand ambassadors capacitados, con briefing previo sobre tu producto o
                servicio para que la interacción con el público sea consistente con la identidad de tu
                marca. Diseñamos la ejecución pensando en resultados medibles para tu marca.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Ejecución, coordinación y cobertura en Panamá
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Coordinamos logística, transporte y uniformes según el evento, con supervisión en sitio
                durante la activación. Cobertura nacional en toda la República de Panamá.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Nuestro proceso
              </h2>
              <ol className="space-y-4">
                {process.map((step, idx) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="text-[#d4b200] font-black text-xl leading-none shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/75 text-sm pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-6">
              Preguntas Frecuentes sobre Activaciones BTL
            </h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group bg-white/5 border border-white/10 p-5"
                >
                  <summary className="cursor-pointer font-bold text-white text-sm list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]">
                    {item.q}
                  </summary>
                  <p className="text-white/70 text-sm leading-relaxed mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Talent + related links */}
          <div className="border-t border-white/10 pt-14 mb-14">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
              Talento para tu Activación
            </h2>
            <div className="flex flex-wrap gap-4">
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
                href="/servicios/eventos-corporativos"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Staff para Eventos Corporativos
              </Link>
              <Link
                href="/servicios"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-white/10 pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-white/70 text-sm max-w-md">
              ¿Necesitás planificar una activación BTL para tu marca? Escríbenos y coordinamos los detalles.
            </p>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={getWhatsAppLink("service-btl")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d4b200] text-black px-6 py-3 text-xs font-black uppercase tracking-[0.15em] hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar por WhatsApp
              </a>
              <Link
                href="/#contacto"
                className="border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Ir a Contacto
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
