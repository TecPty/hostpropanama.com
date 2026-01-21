"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Shield,
  Clock3,
  Sparkles,
  MessageCircle,
  Instagram,
  Music2,
  Check,
  X,
  Zap,
  Users,
  Briefcase,
  Heart,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm, TalentForm } from "@/components/forms";
import { services, process, faqs, talent, gallery, plans } from "@/constants/content";


export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-2xl font-black font-display tracking-tighter italic text-white">
                HOSTPRO<span className="text-[#d4b200]">.</span>
              </span>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider text-slate-300">
              <a className="hover:text-[#d4b200] transition-colors" href="#servicios">Servicios</a>
              <a className="hover:text-[#d4b200] transition-colors" href="#planes">Planes</a>
              <a className="hover:text-[#d4b200] transition-colors" href="#metodologia">Metodolog�a</a>
              <a className="hover:text-[#d4b200] transition-colors" href="#contacto">Contacto</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/hostpropanama"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d4b200] hover:text-[#d4b200]"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#contacto"
                className="rounded-full bg-[#d4b200] px-6 py-2 text-sm font-bold text-black transition hover:bg-[#e6c700]"
              >
                Solicitar
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-image-background.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 backdrop-blur-[10px]" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content - Centered */}
          <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight font-black uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <span className="block text-white">NO IMPROVISAMOS</span>
                <span className="block text-[#d4b200]">EXPERIENCIAS,</span>
                <span className="block text-white">LAS DISE�AMOS</span>
              </motion.h1>

              <motion.p 
                className="text-lg md:text-xl text-slate-300 mx-auto max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Staff verificado y profesional para tus eventos corporativos. Respuesta en menos de 1 hora.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4b200] text-black px-8 py-4 font-bold text-base uppercase tracking-widest transition hover:bg-[#e6c700] hover:shadow-lg hover:shadow-[#d4b200]/30"
                >
                  Solicitar staff
                </Link>
                <a
                  href="https://wa.me/50769801194"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-bold text-base uppercase tracking-widest transition hover:border-[#d4b200] hover:text-[#d4b200]"
                >
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2 md:col-span-1">
                <span className="text-2xl font-black font-display tracking-tighter italic mb-6 block text-white">
                  HOSTPRO<span className="text-[#d4b200]">.</span>
                </span>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  L�deres en staffing profesional para eventos corporativos y experiencias de impacto en Panam�.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://instagram.com/hostpropanama" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#d4b200] hover:text-black transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link 
                    href="https://www.tiktok.com/@hostpropanama" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#d4b200] hover:text-black transition-colors"
                    aria-label="TikTok"
                  >
                    <Music2 className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase text-sm mb-6 text-white">Navegaci�n</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#servicios">Servicios</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#planes">Planes</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#metodologia">Metodolog�a</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#contacto">Contacto</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase text-sm mb-6 text-white">Servicios</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#servicios">Staffing Corporativo</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#servicios">Eventos Premium</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#servicios">Lanzamientos</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors" href="#talento">Talento</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase text-sm mb-6 text-white">Contacto</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li>Ciudad de Panam�, Panam�</li>
                  <li>+507 6980-1194</li>
                  <li className="pt-4">
                    <Link 
                      href="https://wa.me/50769801194"
                      className="bg-[#d4b200]/10 text-[#d4b200] px-4 py-2 rounded-lg font-bold border border-[#d4b200]/20 hover:bg-[#d4b200] hover:text-black transition-all inline-flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Soporte 24/7
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-600 uppercase tracking-widest"> 2024 HOSTPRO PANAMA. TODOS LOS DERECHOS RESERVADOS.</p>
              <div className="flex gap-6 text-xs text-slate-600 uppercase tracking-widest">
                <a className="hover:text-[#d4b200] transition-colors" href="#">T�rminos</a>
                <a className="hover:text-[#d4b200] transition-colors" href="#">Privacidad</a>
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/50769801194"
          aria-label="Hablar por WhatsApp"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[-2px] hover:bg-[#1ebe5b]"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Link>
      </main>
    </div>
  );
}
