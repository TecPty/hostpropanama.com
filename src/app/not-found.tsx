import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | HostPro Panamá",
  description: "La página que buscás no está disponible. Volvé al inicio o contactanos por WhatsApp.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="flex flex-col items-center text-center max-w-md">
        <Link href="/" aria-label="Ir al inicio de HostPro Panamá" className="mb-10">
          <Image
            src="/logos/hostpro-logo.webp"
            alt="HostPro Panamá"
            width={80}
            height={80}
            className="rounded"
          />
        </Link>

        <p className="text-[#d4b200] font-black text-6xl mb-4">404</p>

        <h1 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
          Esta página no está disponible
        </h1>

        <p className="text-white/60 text-sm leading-relaxed mb-10">
          Podés volver al inicio o contactarnos para ayudarte con tu evento.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/"
            className="bg-[#d4b200] text-black px-6 py-3 font-black uppercase text-xs tracking-[0.15em] hover:bg-white transition-colors text-center"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/50769801194?text=Hola%20HostPro%20Panam%C3%A1%2C%20necesito%20informaci%C3%B3n%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#d4b200]/40 text-[#d4b200] px-6 py-3 font-black uppercase text-xs tracking-[0.15em] hover:bg-[#d4b200] hover:text-black transition-colors text-center"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
