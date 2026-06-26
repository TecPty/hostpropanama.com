import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Política de Privacidad | HostPro Panamá",
  description: "Política de privacidad y manejo de datos de HostPro Panamá.",
  alternates: {
    canonical: "https://hostpropanama.com/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-4">Legal</p>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Política de Privacidad</h1>
          <p className="text-white/40 text-sm mb-12">
            Última actualización: junio 2025. Pendiente de revisión legal formal.
          </p>

          <div className="space-y-10 text-white/75 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">1. Responsable del tratamiento</h2>
              <p>
                HostPro Panamá es responsable del tratamiento de los datos personales que se recopilan
                a través de este sitio web y sus formularios de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">2. Datos que recopilamos</h2>
              <p>Recopilamos únicamente la información que el usuario proporciona voluntariamente:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Teléfono / WhatsApp</li>
                <li>Información sobre el evento o rol solicitado</li>
                <li>Portafolio o redes sociales (solo en formulario de talento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">3. Finalidad del uso</h2>
              <p>Los datos recopilados se utilizan exclusivamente para:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Responder solicitudes comerciales de marcas y empresas</li>
                <li>Evaluar aplicaciones de talento para nuestra agencia</li>
                <li>Enviar cotizaciones personalizadas</li>
              </ul>
              <p className="mt-3">
                No utilizamos los datos para envíos masivos de marketing ni los cedemos a terceros.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">4. Almacenamiento y seguridad</h2>
              <p>
                Los datos enviados por formulario son procesados a través de Resend (proveedor de email
                transaccional) y recibidos directamente por el equipo de HostPro Panamá. No almacenamos
                datos en bases de datos propias más allá del correo recibido.
              </p>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">5. Derechos del usuario</h2>
              <p>
                Podés solicitar en cualquier momento la eliminación de tus datos enviando un mensaje a:
              </p>
              <ul className="mt-3 space-y-1">
                <li>WhatsApp: <a href="https://wa.me/50769801194" className="text-[#d4b200] hover:underline">+507 6980-1194</a></li>
                <li>Email: <a href="mailto:contacto@hostpropanama.com" className="text-[#d4b200] hover:underline">contacto@hostpropanama.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-black uppercase tracking-wide text-base mb-3">6. Cookies</h2>
              <p>
                Este sitio utiliza Google Analytics y Google Tag Manager para análisis de tráfico
                de forma anónima y agregada. No utilizamos cookies de seguimiento de publicidad
                personalizada de terceros.
              </p>
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
              href="/terminos"
              className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
