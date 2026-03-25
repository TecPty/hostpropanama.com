"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "@/components/MobileMenu";
import { useState, useEffect } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logos/hostpro-logo-horizontal.png" 
            alt="HostPro Panamá" 
            width={540} 
            height={135} 
            className="h-[108px] md:h-[126px] w-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <Link href="/modelos/mujeres" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">
                Modelos
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-200">
                <div className="w-44 bg-black/95 border border-white/10 backdrop-blur-sm p-2 space-y-1">
                  <Link
                    href="/modelos/mujeres"
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#d4b200] hover:bg-white/5 transition-colors"
                  >
                    Mujeres
                  </Link>
                  <Link
                    href="/modelos/hombres"
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#d4b200] hover:bg-white/5 transition-colors"
                  >
                    Hombres
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/servicios" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Servicios</Link>
            <Link href="/planes" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Planes</Link>
            <Link href="/contacto" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Contacto</Link>
          </nav>
          {/* CTA Button */}
          <Link 
            href="/contacto"
            className="bg-[#d4b200] text-black px-6 py-3 font-black uppercase text-xs tracking-[0.15em] hover:bg-white transition-colors"
          >
            Cotizar
          </Link>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
