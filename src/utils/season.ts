/**
 * Temporada navideña de HostPro: del 1 de diciembre al 6 de enero (inclusive),
 * según la hora de Panamá. Fuera de esas fechas los adornos no se muestran.
 */
const PANAMA_TZ = "America/Panama";

export function isChristmasSeason(date: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: PANAMA_TZ,
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);

  return month === 12 || (month === 1 && day <= 6);
}

/** Permite previsualizar los adornos en cualquier fecha con `?navidad=1`. */
export function isChristmasPreview(search: string): boolean {
  return new URLSearchParams(search).get("navidad") === "1";
}
