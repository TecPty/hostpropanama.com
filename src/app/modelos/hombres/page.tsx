import Image from "next/image";
import Link from "next/link";
import { getTalentByGender } from "@/constants/content";

export default function ModelosHombresPage() {
  const modelos = getTalentByGender("hombre");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">Modelos</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
            Catálogo
            <span className="text-[#d4b200] block">Hombres</span>
          </h1>
          <p className="text-white/60 text-sm mt-6 max-w-2xl">
            Perfiles masculinos para eventos corporativos, activaciones y producciones audiovisuales.
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
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              </div>

              <div className="absolute left-0 right-0 bottom-0 p-4 space-y-1">
                <p className="text-white font-black uppercase tracking-[0.08em] text-sm">{model.name}</p>
                <p className="text-[#d4b200] text-xs uppercase tracking-[0.1em] font-bold">{model.role}</p>
                <p className="text-white/80 text-xs">{model.languages}{model.physical.height ? ` · ${model.physical.height}` : ""}</p>
                <p className="text-white/60 text-[11px]">{model.availability.schedule} · Viajes: {model.availability.canTravel ? "Sí" : "No"}</p>
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {model.eventTypes.slice(0, 2).map((eventType) => (
                    <span
                      key={`${model.slug}-${eventType}`}
                      className="px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] bg-black/60 border border-white/15 text-white/80"
                    >
                      {eventType}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] bg-[#d4b200]/20 border border-[#d4b200]/40 text-[#d4b200]">
                    {model.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <Link
            href="/modelos/mujeres"
            className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
          >
            Ver mujeres
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
