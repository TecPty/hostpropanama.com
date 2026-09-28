import Icon from "./Icon";

interface WhatsAppCtaProps {
  href: string;
  label: string;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
}

/** Botón principal de conversión. Todas las CTAs de WhatsApp de la plantilla pasan por aquí. */
export default function WhatsAppCta({ href, label, variant = "solid", size = "md", className = "" }: WhatsAppCtaProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors min-h-12 text-center";
  const sizes = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-3 text-sm";
  const variants =
    variant === "solid"
      ? "bg-tpl-primary text-tpl-on-primary hover:bg-tpl-primary-hover"
      : "border-2 border-tpl-primary text-tpl-primary hover:bg-tpl-primary-soft";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes} ${variants} ${className}`}>
      <Icon name="message" className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
