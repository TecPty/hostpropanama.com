"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { NAV_DROPDOWN, NAV_LINKS, NAV_CTA } from "@/constants/navigation";

export default function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 min-[960px]:px-12 py-3 min-[960px]:py-0 min-[960px]:h-44 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        {/* Logo */}
        <Link href="/" className="order-1 shrink-0 flex items-center gap-2" aria-label="Ir al inicio de HostPro Panamá">
          <Image
            src="/logos/hostpro-logo-horizontal.webp"
            alt="HostPro Panamá"
            width={540}
            height={135}
            className="h-10 sm:h-12 md:h-16 min-[960px]:h-38 w-auto"
            priority
          />
        </Link>

        {/* CTA Button — junto al logo en mobile/tablet, al final en desktop */}
        <Link
          href={NAV_CTA.href}
          className="order-2 min-[960px]:order-3 shrink-0 bg-[#d4b200] text-black px-4 py-2.5 sm:px-6 sm:py-3 font-black uppercase text-xs tracking-[0.15em] hover:bg-white transition-colors"
        >
          {NAV_CTA.label}
        </Link>

        {/* Navegación — misma estructura en todos los tamaños, se apila debajo del logo/CTA cuando no entra en una sola fila */}
        <nav className="order-3 min-[960px]:order-2 w-full min-[960px]:w-auto flex flex-wrap items-center justify-center min-[960px]:justify-start gap-x-6 gap-y-2 min-[960px]:gap-8">
          {/* Dropdown Modelos — hover en desktop, click/touch en cualquier tamaño */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="Ver catálogo de modelos"
              className="inline-flex items-center gap-1 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] rounded"
            >
              {NAV_DROPDOWN.label}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                dropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-44 bg-black/95 border border-white/10 backdrop-blur-sm p-2 space-y-1">
                {NAV_DROPDOWN.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#d4b200] hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
