import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
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

  const title = `${model.name} | Staff Profesional HostPro Panamá`;
  const description = `${model.role} en Panamá. ${model.languages}${model.physical.height ? ` · ${model.physical.height}` : ""}. Consulta disponibilidad para eventos corporativos, activaciones y experiencias de marca.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.hostpropanama.com/modelos/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.hostpropanama.com/modelos/${slug}`,
      type: "profile",
      images: [
        {
          url: model.photo,
          width: 800,
          height: 1200,
          alt: `${model.name} - HostPro Panamá`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [model.photo],
    },
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
  const requestProfileMessage = `Hola, me interesa el perfil de ${model.name} (${model.role}). ¿Está disponible para mi evento?`;
  const requestProfileHref = `https://wa.me/50769801194?text=${encodeURIComponent(requestProfileMessage)}`;
  const instagramHandle = model.social?.instagram?.replace(/^@/, "");
  const tiktokHandle = model.social?.tiktok?.replace(/^@/, "");

  const technicalDetails = [
    ["Idiomas", model.languages],
    ["Estatura", model.physical.height],
    ["Peso", model.physical.weight],
    ["Cabello", model.physical.hairColor],
    ["Ojos", model.physical.eyeColor],
    ["Camisa", model.physical.shirtSize],
    ["Pantalón", model.physical.pantsSize],
    ["Calzado", model.physical.shoeSize],
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hostpropanama.com" },
              { "@type": "ListItem", position: 2, name: "Catálogo", item: `https://www.hostpropanama.com${collectionRoute}` },
              { "@type": "ListItem", position: 3, name: model.name, item: `https://www.hostpropanama.com/modelos/${model.slug}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: model.name,
            jobTitle: model.role,
            image: `https://www.hostpropanama.com${model.photo}`,
            knowsLanguage: model.languages,
            address: {
              "@type": "PostalAddress",
              addressLocality: model.city,
              addressCountry: "PA",
            },
            worksFor: {
              "@id": "https://www.hostpropanama.com/#organization",
            },
            ...(instagramHandle && {
              sameAs: [
                `https://instagram.com/${instagramHandle}`,
                ...(tiktokHandle ? [`https://www.tiktok.com/@${tiktokHandle}`] : []),
              ],
            }),
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-[#080808] text-white">
        <section className="relative overflow-hidden border-b border-white/10 pt-24 lg:pt-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,178,0,0.10),transparent_35%)]" />
          <div className="relative mx-auto grid min-h-[760px] max-w-7xl grid-cols-1 items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 flex flex-col justify-center px-6 py-14 md:px-12 lg:order-1 lg:py-20">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-white/45"
              >
                <Link href="/" className="transition-colors hover:text-white">Inicio</Link>
                <span>/</span>
                <Link href={collectionRoute} className="transition-colors hover:text-white">Catálogo</Link>
                <span>/</span>
                <span className="text-white/70">{model.name}</span>
              </nav>

              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#d4b200]">
                Staff profesional · HostPro Panamá
              </p>

              <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-8xl">
                {model.name}
              </h1>

              <p className="mt-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.12em] text-white/65 md:text-base">
                {model.role}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="border border-[#d4b200]/40 bg-[#d4b200]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#e6c700]">
                  {statusLabel}
                </span>
                <span className="border border-white/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white/70">
                  {model.city}
                </span>
                {model.physical.height && (
                  <span className="border border-white/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white/70">
                    {model.physical.height}
                  </span>
                )}
              </div>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/68">
                {model.experienceSummary}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={requestProfileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center bg-[#d4b200] px-6 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-black transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b200]"
                >
                  Solicitar disponibilidad
                </Link>
                <Link
                  href="#perfil"
                  className="inline-flex min-h-12 items-center justify-center border border-white/15 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-white/80 transition-colors hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Ver perfil
                </Link>
              </div>
            </div>

            <div className="order-1 min-h-[520px] bg-[#efefec] lg:order-2 lg:min-h-[760px]">
              <div className="relative h-full min-h-[520px] lg:min-h-[760px]">
                <Image
                  src={model.photo}
                  alt={`${model.name}, talento profesional de HostPro Panamá`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-bottom"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </section>

        <section id="perfil" className="border-b border-white/10 bg-[#0d0d0d]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#d4b200]">
                Perfil profesional
              </p>
              <h2 className="max-w-2xl text-3xl font-black uppercase tracking-[-0.025em] md:text-5xl">
                Presencia preparada para representar marcas y experiencias.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">
                {model.experienceSummary}
              </p>

              {model.eventTypes.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {model.eventTypes.map((eventType) => (
                    <span
                      key={eventType}
                      className="border border-white/15 bg-white/[0.025] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/75"
                    >
                      {eventType}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <aside className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#d4b200]">
                Información clave
              </p>
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {technicalDetails.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-white">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Disponibilidad
                </p>
                <p className="mt-1 text-sm text-white/80">{model.availability.schedule}</p>
              </div>

              {(instagramHandle || tiktokHandle) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {instagramHandle && (
                    <Link
                      href={`https://instagram.com/${instagramHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-[0.12em] text-[#d4b200] hover:text-white"
                    >
                      Instagram ↗
                    </Link>
                  )}
                  {tiktokHandle && (
                    <Link
                      href={`https://www.tiktok.com/@${tiktokHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-[0.12em] text-[#d4b200] hover:text-white"
                    >
                      TikTok ↗
                    </Link>
                  )}
                </div>
              )}
            </aside>
          </div>
        </section>

        {model.skills.length > 0 && (
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
              <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-[#d4b200]">
                Fortalezas del perfil
              </p>
              <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {model.skills.map((skill, index) => (
                  <div key={skill} className="bg-[#0a0a0a] p-6">
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#d4b200]/70">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.08em] text-white/85">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#f2f2ef] text-black">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:py-24">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8d7600]">
                  Portafolio
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase tracking-[-0.03em] md:text-6xl">
                  Galería
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-black/55">
                Imágenes profesionales del perfil para evaluar presencia, estilo y versatilidad visual.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {model.media.gallery.map((imagePath, idx) => (
                <figure
                  key={`${imagePath}-${idx}`}
                  className={`relative overflow-hidden bg-white ${idx === 0 ? "md:row-span-2 min-h-[640px]" : "min-h-[480px]"}`}
                >
                  <Image
                    src={imagePath}
                    alt={`${model.name} portafolio profesional ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#080808]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:py-24">
            <div className="grid gap-8 border border-white/10 bg-white/[0.025] p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d4b200]">
                  ¿Te interesa este perfil?
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase tracking-[-0.025em] md:text-5xl">
                  Consulta disponibilidad con HostPro.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
                  Cuéntanos fecha, horario y tipo de evento. Nuestro equipo confirma disponibilidad y prepara la propuesta comercial.
                </p>
              </div>

              <Link
                href={requestProfileHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#d4b200] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-black transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b200]"
              >
                Solicitar este perfil
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={collectionRoute}
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition-colors hover:border-[#d4b200]/60 hover:text-white"
              >
                Volver al catálogo
              </Link>
              <Link
                href="/"
                className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition-colors hover:border-[#d4b200]/60 hover:text-white"
              >
                Inicio
              </Link>
            </div>

            <p className="mt-12 text-[10px] uppercase tracking-[0.14em] text-white/30">
              Perfil actualizado {model.updatedAt} · Contratación gestionada exclusivamente por HostPro Panamá.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
