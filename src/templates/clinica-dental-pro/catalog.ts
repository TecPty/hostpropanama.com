import type { CatalogEntry, TemplateContent } from "../types";
import content from "./content.json";

/** Ficha comercial del modelo para el catálogo de HostPro. */
const clinicaDentalPro: CatalogEntry = {
  slug: "clinica-dental-pro",
  name: "Clínica Dental Pro",
  niche: "Salud · Odontología",
  description:
    "Sitio para clínicas dentales que convierte visitas en citas por WhatsApp: servicios con precios en USD, equipo, testimonios, galería, preguntas frecuentes y formulario que abre WhatsApp con el mensaje listo.",
  idealFor: ["Clínicas dentales", "Odontólogos independientes", "Ortodoncistas", "Consultorios médicos pequeños"],
  plan: "Profesional",
  thumbnail: content.hero.image,
  content: content as TemplateContent,
};

export default clinicaDentalPro;
