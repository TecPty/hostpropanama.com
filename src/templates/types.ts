/**
 * Contrato de contenido para todas las plantillas del catálogo HostPro.
 *
 * Cada modelo entrega un `content.json` que cumple este tipo. Los componentes de
 * `_shared/components` solo leen de aquí: ningún texto, imagen o enlace vive en JSX.
 */

import type { IconName } from "./_shared/components/Icon";

export type SectionId =
  | "hero"
  | "services"
  | "about"
  | "testimonials"
  | "gallery"
  | "faq"
  | "contact";

export interface TemplateImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface OpeningHours {
  /** Texto visible, ej. "Lunes a viernes". */
  label: string;
  /** Días schema.org, ej. ["Monday", "Tuesday"]. */
  days: string[];
  /** Formato 24 h "HH:MM". */
  opens: string;
  closes: string;
}

export interface TemplateContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    /** Dominio final del cliente. Se usa en canonical, OG y schema. */
    siteUrl: string;
    ogImage: TemplateImage;
  };
  business: {
    name: string;
    /** Subtipo schema.org de LocalBusiness: Dentist, Restaurant, LegalService, RealEstateAgent… */
    schemaType: string;
    logoText: string;
    phone: string;
    phoneDisplay: string;
    /** Solo dígitos, con código de país (507). */
    whatsapp: string;
    whatsappMessage: string;
    email: string;
    priceRange: string;
    address: {
      street: string;
      locality: string;
      region: string;
      country: string;
    };
    mapsUrl: string;
    hours: OpeningHours[];
    social: { label: string; href: string }[];
  };
  /** Orden y presencia de secciones. Quitar un id oculta la sección. */
  sections: SectionId[];
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: { label: string; href: string };
    highlights: string[];
    image: TemplateImage;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: IconName; title: string; description: string; price?: string }[];
    cta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
    stats: { value: string; label: string }[];
    image: TemplateImage;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; detail: string; rating: number }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: TemplateImage[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      serviceLabel: string;
      dateLabel: string;
      submit: string;
      note: string;
    };
  };
  footer: {
    tagline: string;
    legal: string;
  };
  whatsappFloat: { label: string };
}

/** Ficha comercial que se muestra en el catálogo de HostPro. */
export interface CatalogEntry {
  slug: string;
  name: string;
  niche: string;
  /** Máximo 40 palabras. */
  description: string;
  idealFor: string[];
  plan: "Básico" | "Profesional" | "E-commerce";
  thumbnail: TemplateImage;
  content: TemplateContent;
}
