"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/utils/constants";

export default function InstagramFloating() {
  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 right-8 z-[100] group"
      aria-label="Visitar Instagram de HostPro Panamá"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white text-xs font-black uppercase tracking-widest whitespace-nowrap border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block shadow-lg">
        Síguenos en Instagram
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#d62976]" />
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
          className="absolute inset-0 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] rounded-full blur-xl"
        />

        {/* Main Icon Circle */}
        <div className="relative w-16 h-16 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_rgba(214,41,118,0.3)] hover:shadow-[0_15px_50px_rgba(214,41,118,0.5)] transition-shadow">
          <Instagram className="w-8 h-8" />
        </div>
      </div>
    </motion.a>
  );
}
