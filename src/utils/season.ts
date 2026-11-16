/**
 * Temporada navideña de HostPro (hora de Panamá, UTC-5).
 * Activa desde el 16 de noviembre de 2026 y se apaga sola el 3 de enero de 2027
 * a las 00:00. Para otro año, solo cambia estas dos fechas.
 */
export const CHRISTMAS_START = new Date("2026-11-16T00:00:00-05:00");
export const CHRISTMAS_END = new Date("2027-01-03T00:00:00-05:00");

export function isChristmasSeason(date: Date = new Date()): boolean {
  return date >= CHRISTMAS_START && date < CHRISTMAS_END;
}

/** Permite previsualizar los adornos en cualquier fecha con `?navidad=1`. */
export function isChristmasPreview(search: string): boolean {
  return new URLSearchParams(search).get("navidad") === "1";
}
