import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Términos y Condiciones | HostPro Panamá",
  description: "Términos y condiciones de uso de los servicios de HostPro Panamá.",
  alternates: {
    canonical: "https://hostpropanama.com/terminos",
  },
};

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-4">Legal</p>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Términos y Condiciones</h1>
          <p className="text-white/40 text-sm mb-12">
            Última actualización: junio 2025. Pendiente de revisión legal formal.
          </p>

          <div className="space-y-10 text-white/75 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">1. Sobre HostPro Panamá</h2>
              <p>
                HostPro Panamá es una agencia de talento profesional con operaciones en la República de Panamá.
                Proveemos servicios de staff, azafatas, promotoras, modelos, brand ambassadors, activaciones BTL,
                eventos corporativos, capacitaciones y producción audiovisual para marcas y organizaciones.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">2. Uso del sitio web</h2>
              <p>
                El uso de este sitio implica la aceptación de estos términos. El contenido publicado —
                incluyendo perfiles de talento, imágenes y descripciones de servicios — es propiedad de
                HostPro Panamá y no puede reproducirse sin autorización escrita.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">3. Cotizaciones y servicios</h2>
              <p>
                Las cotizaciones presentadas en este sitio son precios base en dólares estadounidenses (USD)
                y están sujetas a modificación según el alcance, duración y requerimientos específicos de
                cada evento. La cotización final se confirma por escrito antes de la prestación del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">4. Formularios de contacto</h2>
              <p>
                La información enviada a través de los formularios de este sitio se utiliza exclusivamente
                para responder solicitudes comerciales y de talento. No compartimos datos de contacto con
                terceros sin consentimiento previo.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">5. Limitación de responsabilidad</h2>
              <p>
                HostPro Panamá no se responsabiliza por daños derivados del uso incorrecto de la información
                publicada en este sitio. Las imágenes de talento son referenciales y la disponibilidad
                de perfiles específicos debe confirmarse al momento de la solicitud.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">6. Contacto</h2>
              <p>
                Para consultas sobre estos términos, contáctanos directamente:
              </p>
              <ul className="mt-3 space-y-1">
                <li>WhatsApp: <a href="https://wa.me/50769801194" className="text-[#d4b200] hover:underline">+507 6980-1194</a></li>
                <li>Email: <a href="mailto:contacto@hostpropanama.com" className="text-[#d4b200] hover:underline">contacto@hostpropanama.com</a></li>
              </ul>
            </section>
          </div>

          <div className="mt-16 flex gap-4">
            <Link
              href="/"
              className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
            >
              Volver al inicio
            </Link>
            <Link
              href="/privacidad"
              className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
