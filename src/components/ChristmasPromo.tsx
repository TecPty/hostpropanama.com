"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, MessageCircle, X } from "lucide-react";
import { useChristmasSeason } from "@/hooks/useChristmasSeason";
import { getWhatsAppLink } from "@/utils/whatsapp";

const DISMISS_KEY = "hostpro-navidad-promo-cerrado";
const SHOW_DELAY_MS = 2500;

/**
 * Tarjeta flotante de temporada: invita a cotizar staff para fiestas de fin de año.
 * - Solo en temporada navideña (se apaga sola con las fechas de `utils/season.ts`).
 * - Aparece a los 2,5 s, abajo a la izquierda, sin tapar WhatsApp/Instagram.
 * - Si el visitante la cierra, no vuelve a salir durante esa visita.
 */
export default function ChristmasPromo() {
  const season = useChristmasSeason();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!season) return;

    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // sessionStorage no disponible: se muestra igual
    }
    if (dismissed) return;

    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [season]);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignorar
    }
  };

  return (
    <AnimatePresence>
      {season && visible && (
        <motion.aside
          role="complementary"
          aria-label="Promoción de fiestas de fin de año"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-4 right-28 z-[100] max-w-sm rounded-xl border border-[#d4b200]/60 bg-[#0a0a0a]/95 p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md md:bottom-8 md:left-8 md:right-auto md:p-5"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Cerrar promoción"
            className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3 pr-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4b200]/15 text-[#d4b200]">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#d4b200]">
                ¿Fiesta de fin de año?
              </p>
              <p className="mt-1 text-sm leading-snug text-white/80">
                Reserva tu staff navideño: azafatas, anfitriones y coctelería. Asegura tu fecha de diciembre.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("navidad")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#d4b200] px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
          >
            <MessageCircle className="h-4 w-4" />
            Cotizar por WhatsApp
          </a>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
