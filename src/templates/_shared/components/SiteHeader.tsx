"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { TemplateContent } from "../../types";
import WhatsAppCta from "./WhatsAppCta";

interface SiteHeaderProps {
  logoText: string;
  nav: TemplateContent["nav"];
  ctaLabel: string;
  whatsappHref: string;
}

const PANEL_ID = "tpl-mobile-nav";

export default function SiteHeader({ logoText, nav, ctaLabel, whatsappHref }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-tpl-border bg-tpl-bg/95 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-tpl focus:bg-tpl-primary focus:px-4 focus:py-2 focus:text-tpl-on-primary"
      >
        Saltar al contenido
      </a>
      <div className="tpl-container flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="text-lg font-extrabold tracking-tight text-tpl-primary">
          {logoText}
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-tpl-text transition-colors hover:text-tpl-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppCta href={whatsappHref} label={ctaLabel} />
          </div>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-tpl-text hover:bg-tpl-surface lg:hidden"
            aria-expanded={open}
            aria-controls={PANEL_ID}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id={PANEL_ID}
        aria-label="Principal móvil"
        hidden={!open}
        className="border-t border-tpl-border bg-tpl-bg lg:hidden"
      >
        <ul className="tpl-container flex flex-col py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-tpl px-2 py-3 text-base font-medium hover:bg-tpl-surface"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="py-3">
            <WhatsAppCta href={whatsappHref} label={ctaLabel} className="w-full" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
