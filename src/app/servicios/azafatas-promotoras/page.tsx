import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { process } from "@/constants/content";
import { getWhatsAppLink } from "@/utils/whatsapp";

export const metadata: Metadata = {
  title: "Azafatas y Promotoras en Panamá | HostPro Panamá",
  description:
    "Azafatas, promotoras y brand ambassadors para ferias, lanzamientos, activaciones y experiencias de marca en Panamá. Seleccionamos perfiles según tu brief y objetivos.",
  alternates: {
    canonical: "https://www.hostpropanama.com/servicios/azafatas-promotoras",
  },
  openGraph: {
    title: "Azafatas y Promotoras en Panamá | HostPro Panamá",
    description:
      "Talento para representar marcas en ferias, lanzamientos, activaciones y experiencias comerciales en Panamá.",
    url: "https://www.hostpropanama.com/servicios/azafatas-promotoras",
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: "Azafatas y Promotoras HostPro Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azafatas y Promotoras en Panamá | HostPro Panamá",
    description:
      "Azafatas, promotoras y brand ambassadors para ferias, lanzamientos y experiencias de marca en Panamá.",
  },
};

const faqs = [
  {
    q: "¿Para qué tipo de eventos puedo contratar azafatas o promotoras?",
    a: "Trabajamos perfiles para ferias, congresos, lanzamientos, activaciones, eventos corporativos y otras experiencias de marca, ajustando la selección al brief del proyecto.",
  },
  {
    q: "¿Cuál es la diferencia entre una azafata, una promotora y un brand ambassador?",
    a: "El perfil depende de la función requerida. Una azafata puede enfocarse en protocolo, recepción u hospitalidad; una promotora en interacción comercial y apoyo promocional; y un brand ambassador en representar la marca y comunicar su propuesta frente al público.",
  },
  {
    q: "¿Cómo seleccionan el talento para una marca?",
    a: "Partimos del brief y de los requerimientos del evento para realizar una selección curada del staff, seguida de confirmación, logística, preparación y supervisión en sitio.",
  },
  {
    q: "¿Tienen perfiles bilingües?",
    a: "Sí. El catálogo incluye perfiles bilingües y talento con experiencia en protocolo, hospitality y representación de marca.",
  },
  {
    q: "¿Trabajan fuera de Ciudad de Panamá?",
    a: "Sí. HostPro tiene cobertura nacional y coordina transporte y logística según las necesidades del evento.",
  },
];

export default function AzafatasPromotorasPage() {
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
              { "@type": "ListItem", "position": 3, "name": "Azafatas y Promotoras", "item": "https://www.hostpropanama.com/servicios/azafatas-promotoras" },
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
            "name": "Azafatas, Promotoras y Brand Ambassadors",
            "provider": {
              "@id": "https://www.hostpropanama.com/#organization",
            },
            "areaServed": "Panama",
            "url": "https://www.hostpropanama.com/servicios/azafatas-promotoras",
            "description":
              "Azafatas, promotoras y brand ambassadors para ferias, lanzamientos, activaciones y experiencias de marca en Panamá.",
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
            <span className="text-white/70">Azafatas y Promotoras</span>
          </nav>

          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">Talento para marcas</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Azafatas y Promotoras en Panamá para Representar tu Marca
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
              Seleccionamos azafatas, promotoras y brand ambassadors según el perfil que necesita cada
              marca. El objetivo es que el talento no solo esté presente, sino que represente de forma
              coherente la experiencia, el producto y el tipo de interacción que requiere tu evento.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Talento para ferias, lanzamientos y experiencias de marca
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Trabajamos perfiles para ferias, congresos, lanzamientos, activaciones y eventos
                corporativos. La selección cambia según el objetivo: recepción, protocolo, interacción
                con público, promoción de marca, hospitality o apoyo comercial durante la experiencia.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Azafatas, promotoras y brand ambassadors: funciones distintas
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Una azafata puede enfocarse en recepción, protocolo y atención de invitados. Una
                promotora puede apoyar la interacción comercial y promocional con el público. Un brand
                ambassador representa la marca y comunica su propuesta durante la experiencia. Definimos
                el perfil según el brief, no solo por apariencia.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Selección, preparación y coordinación del staff
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                El proceso parte de los requerimientos del evento y continúa con selección curada,
                confirmación, logística, briefing y supervisión en sitio. Cuando el proyecto lo requiere,
                coordinamos transporte y uniformes de acuerdo con la guía de la marca.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Cobertura en Panamá
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                HostPro opera con cobertura nacional. La logística se define según la ubicación, el
                horario, la cantidad de perfiles y los requerimientos específicos de cada evento.
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

          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-6">
              Preguntas Frecuentes sobre Azafatas y Promotoras
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
              Explora el Talento y los Servicios Relacionados
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/modelos/mujeres" className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors">
                Catálogo Mujeres
              </Link>
              <Link href="/modelos/hombres" className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors">
                Catálogo Hombres
              </Link>
              <Link href="/servicios/activaciones-btl" className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors">
                Activaciones BTL
              </Link>
              <Link href="/servicios/eventos-corporativos" className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors">
                Eventos Corporativos
              </Link>
              <Link href="/servicios" className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors">
                Ver todos los servicios
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-white/70 text-sm max-w-md">
              ¿Necesitás definir el perfil ideal para representar tu marca? Envíanos el brief y coordinamos la selección.
            </p>
            <a
              href={getWhatsAppLink("service-experiencias")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d4b200] text-black px-6 py-3 text-xs font-black uppercase tracking-[0.15em] hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
