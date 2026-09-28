"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import type { TalentModel } from "@/constants/content";
import LanguageBadges from "@/components/LanguageBadges";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { LANGUAGES, getForeignLanguages, getLanguageBySlug, type LanguageCode } from "@/utils/languages";

const QUERY_PARAM = "idioma";
const CHANGE_EVENT = "hostpro:idioma";

// El filtro vive en la URL: así se puede compartir y sobrevive al recargar.
const subscribe = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
};
const readSlug = () => new URLSearchParams(window.location.search).get(QUERY_PARAM);
const readServerSlug = () => null;

interface TalentCatalogProps {
  models: TalentModel[];
}

/**
 * Grilla del catálogo con filtro por idioma.
 * El HTML inicial lista todos los perfiles (SEO); el filtro se aplica en el cliente
 * y se refleja en la URL (?idioma=ingles) para poder compartir la búsqueda.
 */
export default function TalentCatalog({ models }: TalentCatalogProps) {
  const slug = useSyncExternalStore(subscribe, readSlug, readServerSlug);

  const languagesByModel = useMemo(
    () => new Map(models.map((model) => [model.slug, getForeignLanguages(model.languages).map((lang) => lang.code)])),
    [models],
  );

  const options = useMemo(
    () =>
      LANGUAGES.filter((lang) => lang.code !== "es")
        .map((lang) => ({
          ...lang,
          count: models.filter((model) => languagesByModel.get(model.slug)?.includes(lang.code)).length,
        }))
        .filter((lang) => lang.count > 0),
    [models, languagesByModel],
  );

  const requested = getLanguageBySlug(slug)?.code;
  const active = options.some((option) => option.code === requested) ? requested! : null;

  const select = (code: LanguageCode | null) => {
    const url = new URL(window.location.href);
    const slug = code ? LANGUAGES.find((lang) => lang.code === code)?.slug : undefined;
    if (slug) url.searchParams.set(QUERY_PARAM, slug);
    else url.searchParams.delete(QUERY_PARAM);
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const visible = active ? models.filter((model) => languagesByModel.get(model.slug)?.includes(active)) : models;
  const activeName = active ? LANGUAGES.find((lang) => lang.code === active)?.name : null;

  const chipClass = (selected: boolean) =>
    `min-h-11 border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
      selected
        ? "border-[#d4b200] bg-[#d4b200] text-black"
        : "border-white/15 text-white/75 hover:border-[#d4b200]/60 hover:text-white"
    }`;

  return (
    <>
      {options.length > 0 && (
        <div className="mb-8" role="group" aria-label="Filtrar por idioma">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">Filtrar por idioma</p>
          <div className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={active === null} onClick={() => select(null)} className={chipClass(active === null)}>
              Todos ({models.length})
            </button>
            {options.map((option) => (
              <button
                key={option.code}
                type="button"
                aria-pressed={active === option.code}
                onClick={() => select(option.code)}
                className={chipClass(active === option.code)}
              >
                {option.name} ({option.count})
              </button>
            ))}
          </div>
        </div>
      )}

      {activeName && (
        <div className="mb-8 flex flex-col gap-4 border border-[#d4b200]/30 bg-[#d4b200]/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">
            ¿Necesitas staff que hable <span className="font-bold text-white">{activeName.toLowerCase()}</span> para tu evento?
          </p>
          <a
            href={getWhatsAppLink("staff-bilingue", { service: activeName.toLowerCase() })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-[#d4b200] px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-black transition-colors hover:bg-[#e6c700]"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {activeName ? `${visible.length} perfiles que hablan ${activeName}` : `${visible.length} perfiles`}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {visible.map((model, idx) => (
          <Link
            key={model.slug}
            href={`/modelos/${model.slug}`}
            className="group relative overflow-hidden border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={model.photo}
                alt={`${model.name} - HostPro Panamá`}
                fill
                priority={idx < 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-3 transition-all duration-700 md:p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            </div>
            <LanguageBadges languages={model.languages} className="absolute left-3 top-3" />
            <div className="absolute bottom-0 left-0 right-0 space-y-1 p-4">
              <p className="text-sm font-black uppercase tracking-[0.08em] text-white">{model.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
