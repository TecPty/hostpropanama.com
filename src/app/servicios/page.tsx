import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { services } from "@/constants/content";
import { getWhatsAppLink, type WhatsAppContext } from "@/utils/whatsapp";

export const metadata: Metadata = {
  title: "Servicios para Eventos y Marcas en Panamá | HostPro",
  description:
    "Servicios profesionales para eventos, activaciones BTL, experiencias de marca, producción audiovisual, capacitación y hospitalidad en Panamá.",
  alternates: {
    canonical: "https://www.hostpropanama.com/servicios",
  },
  openGraph: {
    title: "Servicios para Eventos y Marcas en Panamá | HostPro",
    description:
      "Servicios profesionales para eventos, activaciones BTL, experiencias de marca, producción audiovisual, capacitación y hospitalidad en Panamá.",
    url: "https://www.hostpropanama.com/servicios",
    images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: "Servicios HostPro Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios para Eventos y Marcas en Panamá | HostPro",
    description: "Servicios profesionales para eventos, activaciones BTL y experiencias de marca en Panamá.",
  },
};

const summaries: Record<string, string> = {
  "Talento para Experiencias de Marca":
    "Perfiles preparados para representar tu marca en ferias, congresos y lanzamientos con presencia impecable.",
  "Eventos corporativos":
    "Staff bilingüe especializado en protocolo, atención VIP y hospitalidad para invitados internacionales.",
  "Activaciones BTL":
    "Ejecución de activaciones en punto de venta, retail y eventos masivos con brand ambassadors capacitados.",
  Capacitaciones:
    "Formación práctica en protocolo, comunicación y ejecución en campo para equipos más consistentes.",
  "Iluminación y Audio":
    "Sonido, iluminación y producción técnica coordinados para que tu evento se vea y se escuche a la altura de tu marca.",
  "Fotografía y Video":
    "Cobertura fotográfica y audiovisual profesional para transformar tu evento en contenido de marca.",
  Gastronomía:
    "Servicio, propuestas culinarias y experiencias de coctelería molecular para elevar la experiencia de tus invitados.",
};

export default function ServiciosPage() {
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
            <span className="text-white/70">Servicios</span>
          </nav>

          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">Servicios</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Servicios Profesionales para Eventos y Marcas en Panamá
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
              HostPro Panamá integra talento, producción y logística para que tu marca tenga presencia
              profesional en cada punto de contacto con el público. Coordinamos staff, activaciones,
              producción audiovisual y experiencias de marca con cobertura en toda la República de Panamá.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <div key={service.title} className="border border-white/10 bg-white/5 flex flex-col overflow-hidden">
                <div className="relative aspect-[16/9] bg-black/40">
                  <Image
                    src={service.image}
                    alt={`${service.title} - HostPro Panamá`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 opacity-80"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                    {summaries[service.title] ?? service.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {service.href && (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/70 hover:text-white transition-colors"
                      >
                        Ver servicio
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    <a
                      href={getWhatsAppLink(service.whatsappContext as WhatsAppContext)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d4b200] hover:text-white transition-colors"
                      aria-label={`Consultar por WhatsApp — ${service.title}`}
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Talent catalog */}
          <div className="border-t border-white/10 pt-14 mb-14">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
              Talento para tus Servicios
            </h2>
            <p className="text-white/60 text-sm max-w-2xl mb-6">
              Conoce el catálogo de perfiles disponibles para acompañar cualquiera de estos servicios.
            </p>
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
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-white/10 pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-white/70 text-sm max-w-md">
              ¿Necesitás definir el servicio ideal para tu evento? Escríbenos y coordinamos los detalles.
            </p>
            <Link
              href="/#contacto"
              className="bg-[#d4b200] text-black px-6 py-3 text-xs font-black uppercase tracking-[0.15em] hover:bg-white transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Ir a Contacto
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
