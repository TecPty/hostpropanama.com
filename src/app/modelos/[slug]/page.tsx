import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTalentBySlug, talent } from "@/constants/content";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return talent.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getTalentBySlug(slug);

  if (!model) {
    return { title: "Modelo no encontrado | HostPro Panamá" };
  }

  return {
    title: `${model.name} | Portafolio HostPro Panamá`,
    description: `${model.role}. ${model.languages}${model.physical.height ? ` · ${model.physical.height}` : ""}`,
  };
}

export default async function ModeloPortfolioPage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = getTalentBySlug(slug);

  if (!model) {
    notFound();
  }

  const collectionRoute = model.gender === "mujer" ? "/modelos/mujeres" : "/modelos/hombres";
  const statusLabel = model.status === "disponible" ? "Disponible" : "Reservada";
  const statusClassName = model.status === "disponible"
    ? "bg-emerald-500/15 border-emerald-400/40 text-emerald-300"
    : "bg-amber-500/15 border-amber-400/40 text-amber-300";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8 md:mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-3">Portafolio Personal</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">{model.name}</h1>
          <p className="text-[#d4b200] text-sm md:text-base font-bold uppercase tracking-[0.12em] mt-4">{model.role}</p>
          <p className="text-white/70 text-sm mt-3">{model.languages}{model.physical.height ? ` · ${model.physical.height}` : ""}</p>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 text-[11px] uppercase tracking-[0.12em] border ${statusClassName}`}>
              {statusLabel}
            </span>
            <span className="px-3 py-1 text-[11px] uppercase tracking-[0.12em] border border-white/15 text-white/75">
              Actualizado {model.updatedAt}
            </span>
            <span className="px-3 py-1 text-[11px] uppercase tracking-[0.12em] border border-white/15 text-white/75">
              {model.city}
            </span>
          </div>
          <p className="text-white/70 text-sm max-w-3xl">{model.experienceSummary}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 border border-white/10 bg-white/5 p-5 space-y-4">
            <h2 className="text-sm uppercase tracking-[0.18em] text-[#d4b200] font-bold">Ficha Técnica</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <p className="text-white/70"><span className="text-white font-semibold">Idiomas:</span> {model.languages}</p>
              <p className="text-white/70"><span className="text-white font-semibold">Disponibilidad:</span> {model.availability.schedule}</p>
              <p className="text-white/70"><span className="text-white font-semibold">Viaja:</span> {model.availability.canTravel ? "Sí" : "No"}</p>
              {model.physical.height && <p className="text-white/70"><span className="text-white font-semibold">Estatura:</span> {model.physical.height}</p>}
              {model.physical.weight && <p className="text-white/70"><span className="text-white font-semibold">Peso:</span> {model.physical.weight}</p>}
              {model.physical.hairColor && <p className="text-white/70"><span className="text-white font-semibold">Cabello:</span> {model.physical.hairColor}</p>}
              {model.physical.eyeColor && <p className="text-white/70"><span className="text-white font-semibold">Ojos:</span> {model.physical.eyeColor}</p>}
              {model.physical.shirtSize && <p className="text-white/70"><span className="text-white font-semibold">Camisa:</span> {model.physical.shirtSize}</p>}
              {model.physical.pantsSize && <p className="text-white/70"><span className="text-white font-semibold">Pantalón:</span> {model.physical.pantsSize}</p>}
              {model.physical.shoeSize && <p className="text-white/70"><span className="text-white font-semibold">Zapatos:</span> {model.physical.shoeSize}</p>}
            </div>
          </div>

          <div className="border border-white/10 bg-white/5 p-5 space-y-4">
            <h2 className="text-sm uppercase tracking-[0.18em] text-[#d4b200] font-bold">Especialidades</h2>
            <div className="flex flex-wrap gap-2">
              {model.eventTypes.map((eventType) => (
                <span
                  key={eventType}
                  className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] bg-black/60 border border-white/15 text-white/80"
                >
                  {eventType}
                </span>
              ))}
            </div>
            <div className="space-y-1">
              {model.skills.map((skill) => (
                <p key={skill} className="text-white/75 text-sm">• {skill}</p>
              ))}
            </div>
            {(model.social?.instagram || model.social?.tiktok) && (
              <div className="pt-2 space-y-1 text-sm text-white/75">
                {model.social.instagram && <p><span className="text-white font-semibold">Instagram:</span> {model.social.instagram}</p>}
                {model.social.tiktok && <p><span className="text-white font-semibold">TikTok:</span> {model.social.tiktok}</p>}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.12em] text-white">
              Galería
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {model.media.gallery.map((imagePath, idx) => (
                <div key={`${imagePath}-${idx}`} className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src={imagePath}
                    alt={`${model.name} galería ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={collectionRoute}
            className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
          >
            Volver al catálogo
          </Link>
          <Link
            href="/"
            className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white hover:border-[#d4b200]/60 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="https://wa.me/50769801194"
            className="bg-[#d4b200] text-black px-5 py-3 text-xs font-black uppercase tracking-[0.14em] hover:bg-[#e6c700] transition-colors"
          >
            Solicitar este perfil
          </Link>
        </div>
      </div>
    </main>
  );
}
