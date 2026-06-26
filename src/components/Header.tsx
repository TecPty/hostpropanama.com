"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "@/components/MobileMenu";
import { useState, useEffect, useRef } from "react";

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-32 md:h-44 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Ir al inicio de HostPro Panamá">
          <Image
            src="/logos/hostpro-logo-horizontal.webp"
            alt="HostPro Panamá"
            width={540}
            height={135}
            className="h-28 md:h-38 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          {/* Desktop Navigation — visible desde 960px */}
          <nav className="hidden min-[960px]:flex items-center gap-8">

            {/* Dropdown Modelos — hover en desktop, click en táctil */}
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
                aria-label="Ver catálogo de modelos"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] rounded"
              >
                Modelos
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                  dropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-44 bg-black/95 border border-white/10 backdrop-blur-sm p-2 space-y-1">
                  <Link
                    href="/modelos/mujeres"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#d4b200] hover:bg-white/5 transition-colors"
                  >
                    Mujeres
                  </Link>
                  <Link
                    href="/modelos/hombres"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#d4b200] hover:bg-white/5 transition-colors"
                  >
                    Hombres
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/#servicios" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Servicios</Link>
            <Link href="/#planes" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Planes</Link>
            <Link href="/#testimoniales" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Testimoniales</Link>
            <Link href="/#contacto" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Contacto</Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/#contacto"
            className="bg-[#d4b200] text-black px-6 py-3 font-black uppercase text-xs tracking-[0.15em] hover:bg-white transition-colors"
          >
            Cotizar
          </Link>

          {/* Mobile Menu — visible debajo de 960px */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
