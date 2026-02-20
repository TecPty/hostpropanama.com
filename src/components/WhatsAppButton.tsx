"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-ocultar tooltip después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip expandido */}
      <AnimatePresence>
        {(isExpanded || showTooltip) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white text-black rounded-2xl shadow-2xl p-4 max-w-xs relative"
          >
            {isExpanded && (
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 p-1 hover:bg-black/10 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            
            <div className="flex items-start gap-3">
              <div className="bg-[#25D366] p-2 rounded-full flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-black text-sm mb-1">
                  ¿Necesitas ayuda?
                </p>
                <p className="text-xs text-black/70 mb-3">
                  Chatea con nosotros. Respuesta en menos de 1 hora.
                </p>
                <Link
                  href="https://wa.me/50769801194?text=Hola%2C%20necesito%20cotizar%20staff%20para%20un%20evento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white text-center py-2 px-4 rounded-lg font-bold text-xs hover:bg-[#1ebe5b] transition-colors"
                >
                  Abrir WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.div className="relative">
        {/* Badge "En línea" */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-1 -right-1 z-10"
        >
          <div className="bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
            EN LÍNEA
          </div>
        </motion.div>

        {/* Botón */}
        <Link
          href="https://wa.me/50769801194?text=Hola%2C%20necesito%20cotizar%20staff%20para%20un%20evento"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsExpanded(false)}
          onMouseEnter={() => setIsExpanded(true)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-all hover:translate-y-[-4px] hover:shadow-[0_16px_40px_rgba(37,211,102,0.5)] hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 group"
          aria-label="Chat por WhatsApp - Respuesta en menos de 1 hora"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
          >
            <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
          </motion.div>
        </Link>

        {/* Ripple effect */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        />
      </motion.div>
    </div>
  );
}
