import type { CatalogEntry } from "./types";
import clinicaDentalPro from "./clinica-dental-pro/catalog";

/**
 * Catálogo de plantillas HostPro. Para publicar un modelo nuevo:
 * 1. Copia src/templates/clinica-dental-pro/ con el nuevo slug.
 * 2. Edita content.json, tokens.css y catalog.ts.
 * 3. Importa tokens.css en src/styles/globals.css y agrega la ficha aquí.
 */
export const templates: CatalogEntry[] = [clinicaDentalPro];

export function getTemplate(slug: string): CatalogEntry | undefined {
  return templates.find((template) => template.slug === slug);
}
