import Icon from "./Icon";

/** Botón flotante de WhatsApp. Usa el verde oficial para que el usuario lo reconozca al instante. */
export default function WhatsAppFloat({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <Icon name="message" className="h-7 w-7" />
    </a>
  );
}
