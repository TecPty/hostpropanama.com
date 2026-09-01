import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { process } from "@/constants/content";
import { getWhatsAppLink } from "@/utils/whatsapp";

export const metadata: Metadata = {
  title: "Staff para Eventos Corporativos en Panamá | HostPro",
  description:
    "Staff profesional, azafatas, protocolo y perfiles bilingües para eventos corporativos en Panamá. Talento verificado para atención, hospitalidad y representación de marca.",
  alternates: {
    canonical: "https://www.hostpropanama.com/servicios/eventos-corporativos",
  },
  openGraph: {
    title: "Staff para Eventos Corporativos en Panamá | HostPro",
    description:
      "Staff profesional, azafatas, protocolo y perfiles bilingües para eventos corporativos en Panamá.",
    url: "https://www.hostpropanama.com/servicios/eventos-corporativos",
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: "Staff para Eventos Corporativos HostPro Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Staff para Eventos Corporativos en Panamá | HostPro",
    description: "Staff profesional y perfiles bilingües para eventos corporativos en Panamá.",
  },
};

const faqs = [
  {
    q: "¿Qué tipo de eventos corporativos cubre HostPro?",
    a: "Ferias, congresos, lanzamientos de producto y eventos corporativos en general, con staff preparado para protocolo y atención VIP.",
  },
  {
    q: "¿Tienen talento bilingüe?",
    a: "Sí. Contamos con perfiles bilingües con experiencia en protocolo, hospitality y marcas premium.",
  },
  {
    q: "¿Cómo se selecciona el staff para mi evento?",
    a: "Seleccionamos el staff según el brief de tu evento, con confirmación, logística y supervisión en sitio.",
  },
  {
    q: "¿Trabajan en todo Panamá?",
    a: "Cobertura nacional. Coordinamos transporte y uniformes según el evento.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Escríbenos por WhatsApp o desde el formulario de contacto y coordinamos los detalles de tu evento.",
  },
];

export default function EventosCorporativosPage() {
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
              { "@type": "ListItem", "position": 3, "name": "Eventos Corporativos", "item": "https://www.hostpropanama.com/servicios/eventos-corporativos" },
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
            "name": "Staff para Eventos Corporativos",
            "provider": {
              "@type": "Organization",
              "name": "HostPro Panamá",
              "url": "https://www.hostpropanama.com",
            },
            "areaServed": "Panama",
            "url": "https://www.hostpropanama.com/servicios/eventos-corporativos",
            "description":
              "Staff profesional, azafatas, protocolo y perfiles bilingües para eventos corporativos en Panamá.",
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
            <span className="text-white/70">Eventos Corporativos</span>
          </nav>

          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">Servicios</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Staff Profesional para Eventos Corporativos en Panamá
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
              Perfiles bilingües especializados en protocolo, atención VIP y hospitalidad para invitados
              internacionales. HostPro prepara el staff que representa a tu marca en cada punto de
              contacto durante tu evento corporativo.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Protocolo, hospitalidad y atención VIP
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Nuestro staff está preparado en protocolo, atención VIP y hospitalidad para acompañar
                la atención de invitados durante el evento, representando tu marca de forma coherente
                y profesional.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Perfiles bilingües para invitados internacionales
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Contamos con perfiles bilingües con experiencia en protocolo, hospitality y marcas
                premium, útiles cuando tu evento recibe invitados o delegaciones internacionales.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Ferias, congresos y lanzamientos
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Cubrimos ferias, congresos, lanzamientos de producto y eventos corporativos en general,
                ajustando el perfil del staff según el formato y los objetivos de cada evento. Cobertura
                nacional en toda la República de Panamá.
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
              Preguntas Frecuentes sobre Staff para Eventos Corporativos
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
              Talento para tu Evento
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
                href="/servicios/activaciones-btl"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
              >
                Activaciones BTL
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
              ¿Necesitás staff para tu próximo evento corporativo? Escríbenos y coordinamos los detalles.
            </p>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={getWhatsAppLink("service-corporativo")}
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
