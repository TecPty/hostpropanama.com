interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/** Encabezado estándar de sección: eyebrow + h2 + bajada. Mantiene la jerarquía h1 → h2 → h3. */
export default function SectionHeading({ id, eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-tpl-primary">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-tpl-muted">{subtitle}</p> : null}
    </div>
  );
}
