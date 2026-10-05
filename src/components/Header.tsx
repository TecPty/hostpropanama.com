"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_DROPDOWN, NAV_LINKS, NAV_CTA } from "@/constants/navigation";

const NAV_PANEL_ID = "hostpro-nav-panel";
const NAV_SUBMENU_ID = "hostpro-nav-modelos";
const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

/**
 * Navegación principal de HostPro.
 *
 * - desktop (lg+): sidebar fijo a la derecha, 288px, altura completa.
 * - mobile/tablet: barra superior + panel compacto desplegable bajo el botón.
 *
 * El offset del contenido en desktop vive en globals.css vía `.hostpro-sidebar ~ main`.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modelosOpen, setModelosOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = true) => {
    setMenuOpen(false);
    setModelosOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu(false);
    };

    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, [closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || menuButtonRef.current?.contains(target)) {
        return;
      }
      closeMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="hostpro-sidebar fixed top-0 right-0 z-[110] w-full border-b border-white/10 bg-[#0a0a0a] lg:flex lg:h-dvh lg:w-72 lg:flex-col lg:border-l lg:border-b-0">
      {/* Barra superior en mobile/tablet · bloque de marca en desktop */}
      <div className="relative flex items-center justify-between gap-4 px-5 py-3 lg:justify-center lg:px-8 lg:py-10">
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
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={menuOpen}
          aria-controls={NAV_PANEL_ID}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#d4b200]/80 bg-[#0a0a0a] text-[#d4b200] shadow-sm transition-colors hover:border-[#d4b200] hover:bg-[#d4b200]/10 focus-visible:outline-offset-4 lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Panel móvil compacto / sidebar desktop */}
      <div
        ref={panelRef}
        id={NAV_PANEL_ID}
        data-state={menuOpen ? "open" : "closed"}
        className={`absolute top-[calc(100%+8px)] right-4 z-30 flex max-h-[calc(100dvh-96px)] w-[min(82vw,300px)] flex-col overflow-y-auto overscroll-contain rounded-xl border border-[#d4b200]/55 bg-[#0a0a0a] shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-[opacity,transform,visibility] duration-200 ease-out lg:static lg:z-auto lg:w-auto lg:max-w-none lg:flex-1 lg:visible lg:translate-y-0 lg:overflow-y-auto lg:rounded-none lg:border-0 lg:bg-transparent lg:opacity-100 lg:shadow-none ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 lg:visible"
        }`}
      >
        <nav aria-label="Navegación principal" className="px-4 py-3 lg:flex-1 lg:px-8 lg:py-0">
          <ul className="space-y-1">
            <li data-nav-entry="modelos">
              <button
                type="button"
                onClick={() => setModelosOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={modelosOpen}
                aria-controls={NAV_SUBMENU_ID}
                aria-label="Ver catálogo de modelos"
                className="flex min-h-11 w-full items-center justify-between gap-2 rounded-md px-2 py-2.5 text-left text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {NAV_DROPDOWN.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${modelosOpen ? "rotate-180" : ""}`}
                />
              </button>

              {modelosOpen && (
                <ul
                  id={NAV_SUBMENU_ID}
                  className="mb-1 space-y-1 border-l border-[#d4b200]/25 pl-3"
                >
                  {NAV_DROPDOWN.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => closeMenu()}
                        className="block min-h-10 rounded-md px-2 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white/65 transition-colors hover:bg-white/5 hover:text-[#d4b200]"
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
                  onClick={() => closeMenu()}
                  className="flex min-h-11 items-center rounded-md px-2 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-[#d4b200]/20 p-4 lg:mt-auto lg:border-white/10 lg:px-8 lg:py-8">
          <Link
            href={NAV_CTA.href}
            onClick={() => closeMenu()}
            className="block rounded-md bg-[#d4b200] px-6 py-3 text-center text-xs font-black uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
          >
            {NAV_CTA.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
