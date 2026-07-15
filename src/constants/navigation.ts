/**
 * Fuente central de navegación del header.
 * Única fuente de verdad para desktop, tablet y mobile.
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
  { label: "Servicios", href: "/#servicios" },
  { label: "Planes", href: "/#planes" },
  { label: "Testimoniales", href: "/#testimoniales" },
  { label: "Contacto", href: "/#contacto" },
];

export const NAV_CTA: NavLink = { label: "Cotizar", href: "/#contacto" };
