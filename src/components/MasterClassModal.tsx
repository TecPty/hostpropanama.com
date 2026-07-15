"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { getWhatsAppLink } from "@/utils/whatsapp";

const SESSION_KEY = "hostpro_masterclass_modal_shown";

export default function MasterClassModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const alreadyShown = window.sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;
    window.sessionStorage.setItem(SESSION_KEY, "1");
    // Diferido a un microtask: sessionStorage es una lectura síncrona de un
    // sistema externo al montar, sin evento al que suscribirse.
    queueMicrotask(() => setIsOpen(true));
  }, []);

  const close = () => setIsOpen(false);

  // Bloqueo de scroll del fondo, compensando el ancho del scrollbar para evitar saltos de layout
  useEffect(() => {
    if (!isOpen) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  // Foco: entra al modal al abrir, vuelve al elemento previo al cerrar
  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      dialogRef.current?.focus();
    } else if (previouslyFocused.current) {
      previouslyFocused.current.focus();
      previouslyFocused.current = null;
    }
  }, [isOpen]);

  // Escape para cerrar + trampa de foco (Tab/Shift+Tab) dentro del modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const whatsappHref = getWhatsAppLink("master-class");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="master-class-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto bg-black border border-white/10 shadow-2xl focus:outline-none"
          >
            <h2 id="master-class-modal-title" className="sr-only">
              Próxima Master Class de HostPro Panamá
            </h2>

            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 text-white hover:text-[#d4b200] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
            >
              <X className="h-5 w-5" />
            </button>

            {!imageError ? (
              <div className="relative w-full aspect-[4/5] bg-black">
                <Image
                  src="/promocional/master-class.png"
                  alt="Próxima Master Class de HostPro Panamá — reserva tu cupo"
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-contain"
                  onError={() => setImageError(true)}
                  priority
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/5] flex items-center justify-center px-6 text-center text-white/70 text-sm">
                Próxima Master Class de HostPro Panamá
              </div>
            )}

            <div className="p-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block w-full bg-[#d4b200] text-black py-3.5 px-6 text-center font-black uppercase text-sm tracking-[0.1em] hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
              >
                Reservar mi cupo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
