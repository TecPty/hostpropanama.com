/**
 * Idiomas del talento.
 *
 * Los perfiles guardan los idiomas como texto libre ("Español nativo / Inglés avanzado").
 * Este módulo lo convierte en datos estructurados para mostrar insignias y filtrar el catálogo,
 * sin obligar a reescribir cada ficha.
 */

export type LanguageCode = "es" | "en" | "fr" | "de" | "pt" | "it" | "ru" | "zh" | "hak";

export interface LanguageSkill {
  code: LanguageCode;
  /** Nombre en español, ej. "Inglés". */
  name: string;
  /** Nivel tal como lo declara el perfil, ej. "Avanzado" o "C2". */
  level?: string;
}

interface LanguageDefinition {
  code: LanguageCode;
  name: string;
  /** Slug usado en la URL del filtro (?idioma=ingles). */
  slug: string;
  aliases: string[];
}

/** Orden en que se muestran los idiomas en filtros e insignias. */
export const LANGUAGES: LanguageDefinition[] = [
  { code: "es", name: "Español", slug: "espanol", aliases: ["espanol", "castellano"] },
  { code: "en", name: "Inglés", slug: "ingles", aliases: ["ingles", "english"] },
  { code: "fr", name: "Francés", slug: "frances", aliases: ["frances", "french"] },
  { code: "pt", name: "Portugués", slug: "portugues", aliases: ["portugues"] },
  { code: "it", name: "Italiano", slug: "italiano", aliases: ["italiano"] },
  { code: "de", name: "Alemán", slug: "aleman", aliases: ["aleman"] },
  { code: "ru", name: "Ruso", slug: "ruso", aliases: ["ruso"] },
  { code: "zh", name: "Mandarín", slug: "mandarin", aliases: ["mandarin", "chino"] },
  { code: "hak", name: "Hakka", slug: "hakka", aliases: ["hakka"] },
];

const NAMED_LEVELS: Record<string, string> = {
  nativo: "Nativo",
  nativa: "Nativo",
  basico: "Básico",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
  fluido: "Fluido",
};

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

function findLevel(chunk: string, original: string): string | undefined {
  const cefr = original.match(/\b([ABC][12](?:\.\d)?)\b/i);
  if (cefr) return cefr[1].toUpperCase();
  const word = Object.keys(NAMED_LEVELS).find((key) => new RegExp(`\\b${key}\\b`).test(chunk));
  return word ? NAMED_LEVELS[word] : undefined;
}

/** Convierte el texto libre de idiomas en una lista ordenada y sin duplicados. */
export function parseLanguages(text: string): LanguageSkill[] {
  const found = new Map<LanguageCode, LanguageSkill>();

  text
    .split(/[,/;]|\s+y\s+/i)
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const chunk = normalize(part);
      const language = LANGUAGES.find((lang) => lang.aliases.some((alias) => new RegExp(`\\b${alias}\\b`).test(chunk)));
      if (!language || found.has(language.code)) return;
      found.set(language.code, { code: language.code, name: language.name, level: findLevel(chunk, part) });
    });

  return LANGUAGES.filter((lang) => found.has(lang.code)).map((lang) => found.get(lang.code)!);
}

/** Idiomas distintos del español, que son los que el cliente busca al pedir staff bilingüe. */
export function getForeignLanguages(text: string): LanguageSkill[] {
  return parseLanguages(text).filter((lang) => lang.code !== "es");
}

/** Bilingüe = habla al menos un idioma además del español con nivel superior a básico. */
export function isBilingual(text: string): boolean {
  return getForeignLanguages(text).some((lang) => lang.level !== "Básico");
}

export function getLanguageBySlug(slug: string | null | undefined): LanguageDefinition | undefined {
  return LANGUAGES.find((lang) => lang.slug === slug);
}

export function getLanguageByCode(code: LanguageCode): LanguageDefinition {
  return LANGUAGES.find((lang) => lang.code === code)!;
}
