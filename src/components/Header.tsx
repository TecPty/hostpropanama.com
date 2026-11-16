"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_DROPDOWN, NAV_LINKS, NAV_CTA } from "@/constants/navigation";

const NAV_PANEL_ID = "hostpro-nav-panel";
const NAV_SUBMENU_ID = "hostpro-nav-modelos";
const SCROLL_SOLID_THRESHOLD = 40;

/**
 * Navegación principal de HostPro.
 *
 * Barra superior con logo + botón de menú, y panel desplegable bajo el botón en
 * todos los tamaños de pantalla (antes, en desktop era un sidebar fijo que tapaba
 * parte de la foto de portada).
 *
 * - mobile/tablet: barra negra sólida.
 * - desktop (lg+): barra transparente sobre la portada; se vuelve sólida al hacer scroll.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // El submenú de Modelos (Mujeres / Hombres / Bilingües) se muestra abierto por defecto.
  const [modelosOpen, setModelosOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = true) => {
    setMenuOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_SOLID_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={`hostpro-sidebar fixed top-0 right-0 z-[110] w-full border-b bg-[#0a0a0a] transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-white/10 lg:bg-[#0a0a0a]/95 lg:backdrop-blur-md"
          : "border-white/10 lg:border-transparent lg:bg-transparent lg:bg-gradient-to-b lg:from-black/70 lg:to-transparent"
      }`}
    >
      {/* Barra superior: logo + botón de menú */}
      <div className="relative flex items-center justify-between gap-4 px-5 py-3 lg:px-10 lg:py-4">
        <Link href="/" aria-label="Ir al inicio de HostPro Panamá" className="shrink-0">
          <Image
            src="/logos/hostpro-logo-horizontal.webp"
            alt="HostPro Panamá"
            width={640}
            height={640}
            className="h-12 w-auto lg:h-16"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#d4b200]/80 bg-[#0a0a0a] text-[#d4b200] shadow-sm transition-colors hover:border-[#d4b200] hover:bg-[#d4b200]/10 focus-visible:outline-offset-4 lg:h-12 lg:w-12"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Panel desplegable bajo el botón de menú */}
      <div
        ref={panelRef}
        id={NAV_PANEL_ID}
        data-state={menuOpen ? "open" : "closed"}
        className={`absolute top-[calc(100%+8px)] right-4 z-30 flex max-h-[calc(100dvh-96px)] w-[min(82vw,300px)] flex-col overflow-y-auto overscroll-contain rounded-xl border border-[#d4b200]/55 bg-[#0a0a0a] shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-[opacity,transform,visibility] duration-200 ease-out lg:right-10 ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Navegación principal" className="px-4 py-3">
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

        <div className="border-t border-[#d4b200]/20 p-4">
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
