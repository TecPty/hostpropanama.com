"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface LightboxProps {
  images: Array<{ src: string; alt: string; caption?: string }>;
}

export function Lightbox({ images }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((image, idx) => (
          <motion.button
            key={idx}
            onClick={() => open(idx)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-black/40 hover:border-[#d4b200]/40 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
            style={{
              gridColumn: idx === 0 ? "span 2" : idx === 1 ? "span 1" : undefined,
              gridRow: idx === 0 ? "span 2" : undefined,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:from-black/60 transition-all" />
            
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Icon de expand en hover */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-[#d4b200] text-black p-3 rounded-full">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                <p className="text-xs text-white font-semibold line-clamp-2">{image.caption}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center"
            onClick={close}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-6 right-6 z-50 p-2 text-white hover:text-[#d4b200] transition-colors rounded-full bg-black/50 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
              aria-label="Cerrar galería"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation - Previous */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 z-50 p-3 text-white hover:text-[#d4b200] transition-colors rounded-full bg-black/50 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            {/* Navigation - Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 z-50 p-3 text-white hover:text-[#d4b200] transition-colors rounded-full bg-black/50 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[85vh] w-full mx-auto px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="w-full h-full object-contain"
                  quality={100}
                  priority
                />
              </div>
              
              {images[currentIndex].caption && (
                <div className="mt-6 text-center">
                  <p className="text-white text-lg font-semibold">
                    {images[currentIndex].caption}
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
