"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { href: "#galeria", label: "Experiencias" },
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#talento", label: "Talento" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] rounded-md"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-black border-l border-white/10 z-[70] md:hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-lg font-black uppercase text-[#d4b200]">
                  Menú
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 text-white hover:text-[#d4b200] transition-colors rounded-md"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col p-6 gap-1">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-4 px-4 text-lg font-bold uppercase tracking-wider text-white hover:text-[#d4b200] hover:bg-white/5 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA en menu */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
                <Link
                  href="https://wa.me/50769801194"
                  onClick={closeMenu}
                  className="block w-full bg-[#d4b200] text-black py-4 px-6 rounded-xl font-black text-center uppercase tracking-wider hover:bg-[#e6c700] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
                >
                  WhatsApp Directo
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
