/**
 * Fuente central de navegación del header.
 * Única fuente de verdad para el sidebar desktop y el drawer mobile/tablet.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export const NAV_DROPDOWN: NavDropdown = {
  label: "Modelos",
  items: [
    { label: "Mujeres", href: "/modelos/mujeres" },
    { label: "Hombres", href: "/modelos/hombres" },
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: "Eventos", href: "/servicios/eventos-corporativos" },
  { label: "Precios", href: "/#planes" },
  { label: "Contactos", href: "/#contacto" },
];

export const NAV_CTA: NavLink = { label: "Cotizar", href: "/#contacto" };
