import Image from "next/image";
import Link from "next/link";
import { getTalentByGender } from "@/constants/content";

export default function ModelosMujeresPage() {
  const modelos = getTalentByGender("mujer");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">Modelos</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
            Catálogo
            <span className="text-[#d4b200] block">Mujeres</span>
          </h1>
          <p className="text-white/60 text-sm mt-6 max-w-2xl">
            Selección activa de perfiles para activaciones, protocolo, hospitality y experiencias de marca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {modelos.map((model, idx) => (
            <Link
              key={model.slug}
              href={`/modelos/${model.slug}`}
              className="group relative overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={model.photo}
                  alt={`${model.name} - HostPro Panamá`}
                  fill
                  priority={idx < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-3 md:p-4 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              </div>

              <div className="absolute left-0 right-0 bottom-0 p-4 space-y-1">
                <p className="text-white font-black uppercase tracking-[0.08em] text-sm">{model.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <Link
            href="/modelos/hombres"
            className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
          >
            Ver hombres
          </Link>
          <Link
            href="/"
            className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
