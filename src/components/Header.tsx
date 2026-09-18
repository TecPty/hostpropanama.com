"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_DROPDOWN, NAV_LINKS, NAV_CTA } from "@/constants/navigation";

/** Clase que globals.css usa para bloquear el scroll del body con el drawer abierto. */
const BODY_LOCK_CLASS = "hostpro-nav-open";
const NAV_PANEL_ID = "hostpro-nav-panel";
const NAV_SUBMENU_ID = "hostpro-nav-modelos";

/**
 * Navegación principal de HostPro.
 *
 * Una sola estructura DOM sirve a los dos breakpoints:
 * - desktop (lg+): sidebar fijo a la izquierda, 288px, altura completa.
 * - mobile/tablet: barra superior compacta + drawer lateral izquierdo.
 *
 * El offset del contenido en desktop vive en globals.css vía `.hostpro-sidebar ~ main`.
 */
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modelosOpen, setModelosOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Bloquea el scroll de fondo mientras el drawer está abierto. El cleanup garantiza
  // que nunca quede un overflow:hidden colgado, ni siquiera al desmontar abierto.
  //
  // El bloqueo es de dos capas, y las dos hacen falta:
  //   1. `overflow:hidden` (globals.css) frena el scroll nativo — rueda y touch.
  //   2. `data-lenis-prevent` en overlay y panel frena a Lenis, que intercepta la
  //      rueda y hace scroll PROGRAMÁTICO, cosa que `overflow:hidden` no impide.
  // Se aplica sólo con el drawer abierto para no alterar la rueda sobre el sidebar
  // en desktop, donde el drawer no existe.
  useEffect(() => {
    if (!drawerOpen) return;
    document.body.classList.add(BODY_LOCK_CLASS);
    return () => document.body.classList.remove(BODY_LOCK_CLASS);
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen, closeDrawer]);

  return (
    <header className="hostpro-sidebar fixed top-0 left-0 z-[110] w-full border-b border-white/10 bg-[#0a0a0a] lg:flex lg:h-dvh lg:w-72 lg:flex-col lg:border-r lg:border-b-0">
      {/* Barra superior en mobile/tablet · bloque de marca en desktop */}
      <div className="flex items-center justify-between gap-4 px-5 py-3 lg:justify-center lg:px-8 lg:py-10">
        <Link href="/" aria-label="Ir al inicio de HostPro Panamá" className="shrink-0">
          <Image
            src="/logos/hostpro-logo-horizontal.webp"
            alt="HostPro Panamá"
            width={640}
            height={640}
            className="h-12 w-auto lg:h-32"
            priority
          />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setDrawerOpen((prev) => !prev)}
          aria-label="Menú de navegación"
          aria-expanded={drawerOpen}
          aria-controls={NAV_PANEL_ID}
          className="inline-flex h-10 w-10 items-center justify-center rounded text-white/80 transition-colors hover:text-[#d4b200] lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Backdrop del drawer — sólo mobile/tablet */}
      <div
        data-nav-overlay=""
        aria-hidden="true"
        onClick={closeDrawer}
        data-lenis-prevent={drawerOpen ? "" : undefined}
        className={`fixed inset-0 z-10 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel de navegación — drawer en mobile/tablet, columna del sidebar en desktop */}
      <div
        id={NAV_PANEL_ID}
        data-state={drawerOpen ? "open" : "closed"}
        data-lenis-prevent={drawerOpen ? "" : undefined}
        className={`fixed inset-y-0 left-0 z-20 flex w-[82%] max-w-[320px] flex-col overflow-y-auto border-r border-white/10 bg-[#0a0a0a] transition-transform duration-300 ease-out lg:static lg:z-auto lg:w-auto lg:max-w-none lg:flex-1 lg:visible lg:translate-x-0 lg:border-r-0 ${
          drawerOpen ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end px-5 py-3 lg:hidden">
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Cerrar menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded text-white/80 transition-colors hover:text-[#d4b200]"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Navegación principal" className="flex-1 px-5 pb-6 lg:px-8 lg:pb-0">
          <ul className="space-y-1">
            <li data-nav-entry="modelos">
              <button
                type="button"
                onClick={() => setModelosOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={modelosOpen}
                aria-controls={NAV_SUBMENU_ID}
                aria-label="Ver catálogo de modelos"
                className="flex w-full items-center justify-between gap-2 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
              >
                {NAV_DROPDOWN.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${modelosOpen ? "rotate-180" : ""}`}
                />
              </button>

              {modelosOpen && (
                <ul id={NAV_SUBMENU_ID} className="mb-1 space-y-1 border-l border-white/10 pl-4">
                  {NAV_DROPDOWN.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeDrawer}
                        className="block py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-[#d4b200]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {NAV_LINKS.map((link) => (
              <li key={link.href} data-nav-entry={link.label.toLowerCase()}>
                <Link
                  href={link.href}
                  onClick={closeDrawer}
                  className="block py-3 text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t border-white/10 px-5 py-6 lg:px-8 lg:py-8">
          <Link
            href={NAV_CTA.href}
            onClick={closeDrawer}
            className="block bg-[#d4b200] px-6 py-3 text-center text-xs font-black uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
          >
            {NAV_CTA.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
