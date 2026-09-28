/** Construye un enlace wa.me con mensaje prellenado. `phone` solo dígitos con código 507. */
export function buildWhatsAppLink(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
