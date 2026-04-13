"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const phoneNumber = "50769801194";
  const message = encodeURIComponent("Hola HostPro Panamá, necesito información sobre staff para mi evento.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#25D366] text-white text-xs font-black uppercase tracking-widest whitespace-nowrap border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block shadow-lg">
        ¡Cotiza por WhatsApp!
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#25D366]" />
      </div>

      {/* Button Body */}
      <div className="relative">
        {/* Outer Glow / Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[#25D366] rounded-full blur-xl"
        />

        {/* Main Icon Circle */}
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.5)] transition-shadow">
          <MessageCircle className="w-8 h-8 fill-current" />
          
          {/* Notification Dot */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full border-2 border-[#25D366] animate-bounce" />
        </div>
      </div>
    </motion.a>

  );
}
