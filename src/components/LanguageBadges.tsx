import { parseLanguages, type LanguageSkill } from "@/utils/languages";

interface LanguageBadgesProps {
  languages: string;
  /** "compact" muestra solo el código (EN, FR) para tarjetas; "full" muestra nombre y nivel. */
  variant?: "compact" | "full";
  /** Oculta el español: en el catálogo lo relevante es el idioma extra. */
  hideSpanish?: boolean;
  className?: string;
}

const describe = (lang: LanguageSkill) => (lang.level ? `${lang.name} (${lang.level})` : lang.name);

export default function LanguageBadges({ languages, variant = "compact", hideSpanish = false, className = "" }: LanguageBadgesProps) {
  const skills = parseLanguages(languages).filter((lang) => !hideSpanish || lang.code !== "es");
  if (skills.length === 0) return null;

  const label = `Idiomas: ${skills.map(describe).join(", ")}`;

  return (
    <ul aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
      {skills.map((lang) => (
        <li
          key={lang.code}
          title={describe(lang)}
          className={
            lang.code === "es"
              ? "border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80"
              : "border border-[#d4b200]/70 bg-[#d4b200] px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] text-black"
          }
        >
          {variant === "compact" ? (
            <span aria-hidden="true">{lang.code.toUpperCase()}</span>
          ) : (
            <span>
              {lang.name}
              {lang.level ? <span className="font-semibold opacity-75"> · {lang.level}</span> : null}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
