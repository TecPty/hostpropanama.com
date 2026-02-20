"use client";

import { useState, useEffect } from "react";
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
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm, TalentForm } from "@/components/forms";
import { services, process, faqs, talent, gallery, plans } from "@/constants/content";

const ChevronIcon = () => (
  <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform duration-300" />
);

const VisionMisionTabs = () => {
  return (
    <section className="py-20 bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-[#d4b200]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4b200]/10"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4b200]/10 border-2 border-[#d4b200] mb-4">
                <Star className="w-8 h-8 text-[#d4b200]" />
              </div>
              <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs block mb-3">
                Nuestra Visión
              </span>
              <h2 className="text-xl md:text-2xl font-black uppercase leading-tight text-white mb-4">
                Convertirnos en la agencia de referencia en Panamá para la gestión de talento operativo
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              En eventos, contenido y experiencias de marca. Reconocida por elevar el estándar de representación profesional y por construir relaciones sostenibles entre marcas y talento.
            </p>
          </motion.div>

          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-[#d4b200]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4b200]/10"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4b200]/10 border-2 border-[#d4b200] mb-4">
                <Zap className="w-8 h-8 text-[#d4b200]" />
              </div>
              <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs block mb-3">
                Nuestra Misión
              </span>
              <h3 className="text-xl md:text-2xl font-black uppercase leading-tight text-white mb-4">
                Garantizar que las marcas se representen de forma profesional, coherente y confiable
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              En cada punto de contacto con el público, mediante la selección, preparación y gestión de talento operativo alineado a su identidad, mensaje y contexto.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'booking' | 'activaciones'>('booking');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setShowNav(false);
      } else {
        // Scrolling up - show navbar
        setShowNav(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          {/* Logo - PNG */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logos/hostpro-logo-horizontal.png" 
              alt="HostPro Panamá" 
              width={540} 
              height={135} 
              className="h-[108px] md:h-[126px] w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-8">
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#galeria" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Modelos</Link>
              <Link href="#servicios" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Servicios</Link>
              <Link href="#planes" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Planes</Link>
              <Link href="#contacto" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">Contacto</Link>
            </nav>

            {/* CTA Button */}
            <Link 
              href="#contacto"
              className="bg-[#d4b200] text-black px-6 py-3 font-black uppercase text-xs tracking-[0.15em] hover:bg-white transition-colors"
            >
              Cotizar
            </Link>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - Mobile */}
          <div className="absolute inset-0 z-0 md:hidden">
            <Image
              src="/images/hero-mobile.png"
              alt="Talento profesional de HostPro en evento corporativo de lujo en Panamá"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Background Image - Desktop */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <Image
              src="/images/hero-desktop.png"
              alt="Talento profesional de HostPro en evento corporativo de lujo en Panamá"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Content - Left Aligned */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Title - Ultra Bold */}
              <h1 className="font-black uppercase leading-[0.85] mb-12 translate-y-[20%]">
                <span className="block text-white text-[48px] md:text-[78px] lg:text-[105px] tracking-tight">HOSTPRO</span>
                <span className="block text-[#d4b200] text-[48px] md:text-[78px] lg:text-[105px] tracking-tight">PANAMÁ</span>
              </h1>

              {/* Subtitle - Bold with spacing */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[#d4b200] text-base md:text-lg lg:text-xl font-black uppercase tracking-tight mb-12 max-w-3xl border-l-4 border-[#d4b200] pl-6"
              >
                Somos una agencia de talento para experiencia de marca, eventos corporativos y producción audiovisual.
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white/80 text-sm md:text-base max-w-2xl mb-16 leading-relaxed"
              >
                Conectamos marcas con profesionales verificados para crear experiencias memorables que generan resultados.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link 
                  href="#contacto" 
                  className="inline-flex items-center gap-3 bg-[#d4b200] text-black px-10 py-5 font-black uppercase text-xs md:text-sm tracking-[0.15em] hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4b200]/50"
                >
                  Cotizar ahora
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* VISIÓN Y MISIÓN SECTION - TABS */}
        <VisionMisionTabs />

        {/* SERVICIOS SECTION */}
        <section id="servicios" className="py-32 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="mb-20">
              <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs">Servicios</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mt-4 leading-[0.9]">
                SOLUCIÓN INTEGRAL<br />
                <span className="text-[#d4b200]">360°</span>
              </h2>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group border-l-2 border-[#d4b200] pl-6 hover:border-white transition-colors"
                >
                  {/* Number */}
                  <span className="text-white/20 font-black text-5xl md:text-6xl leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mt-4 mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits - Simplified */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, benefitIdx) => (
                      <div key={benefitIdx} className="flex items-center gap-2 text-white/80 text-xs">
                        <div className="w-1 h-1 bg-[#d4b200]" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Image - Hidden on mobile for cleaner look */}
                  <div className="hidden md:block aspect-[4/3] relative overflow-hidden bg-white/5 mt-8 group-hover:scale-[1.02] transition-transform duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANES SECTION */}
        <section id="planes" className="py-16 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 text-center mb-10">
            <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs">Packs Comerciales</span>
            <h2 className="text-2xl font-black mt-3 uppercase text-white">Planes para Tu Evento Corporativo</h2>
          </div>
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative rounded-3xl p-8 transition-all ${
                  plan.featured
                    ? "bg-black border-2 border-[#d4b200] shadow-[0_0_25px_rgba(212,178,0,0.15)]"
                    : "bg-slate-900 border border-white/5 hover:border-white/10"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4b200] text-black px-4 py-1 rounded-full text-xs font-black uppercase whitespace-nowrap">
                    Más Popular
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <span className="text-slate-500 font-bold text-xs uppercase">{plan.name}</span>
                    <h3 className="text-lg font-black text-white mt-1">{plan.description}</h3>
                  </div>

                  <div>
                    <p className="text-4xl font-black text-white">
                      {plan.price}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-5">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`mt-0.5 ${feature.included ? "text-[#d4b200]" : "text-white/30"}`}>
                          {feature.included ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <X className="h-4 w-4" />
                          )}
                        </div>
                        <span className={`text-xs ${feature.included ? "text-white" : "text-white/50"}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={plan.featured ? "https://wa.me/50769801194" : "#contacto"}
                    className={`w-full rounded-xl py-4 px-4 font-bold text-center transition uppercase tracking-widest block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                      plan.featured
                        ? "bg-[#d4b200] text-black hover:bg-[#e6c700] hover:shadow-lg hover:shadow-[#d4b200]/30"
                        : "border border-[#d4b200] text-[#d4b200] hover:bg-[#d4b200]/10"
                    }`}
                  >
                    Seleccionar
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VALUE PROPOSITION SECTION */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-black border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-[#d4b200]/10 px-6 py-3 rounded-full border border-[#d4b200]/20">
                <Shield className="h-5 w-5 text-[#d4b200]" />
                <span className="text-[#d4b200] font-bold uppercase tracking-wider text-sm">Garantía de Excelencia</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl mx-auto">
                Si <span className="text-[#d4b200]">HostPro</span> está en tu proyecto,
              </h2>
              <p className="text-2xl md:text-3xl text-slate-300 font-medium max-w-3xl mx-auto italic">
                la experiencia humana no será un problema, todo fluirá con excelencia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="min-h-screen flex items-center justify-center overflow-hidden relative bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/talent-model.avif"
              alt="Talento profesional HostPro Panamá"
              fill
              className="object-cover opacity-40"
            />
          </div>

          {/* Content - Centered with space distribution */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main CTA Title - Ultra Bold */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-[1.1] mb-16 tracking-tight">
                No uses a tus colaboradores. <br className="hidden md:block" />
                Usa los modelos de <span className="text-[#d4b200]">HostPro Panamá</span> y conectarás mejor con tu consumidor.
              </h2>

              {/* CTA Button - Premium Style */}
              <Link 
                href="#contacto"
                className="inline-flex items-center gap-4 bg-[#d4b200] text-black px-12 py-6 font-black uppercase text-xs md:text-sm tracking-[0.2em] hover:bg-white transition-colors mt-8"
              >
                Agendemos una reunión estratégica
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4b200] to-transparent" />
        </section>

        {/* METODOLOGÍA SECTION */}
        <section id="metodologia" className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs">Nuestra Metodología</span>
              <h2 className="text-3xl font-black mt-4 uppercase text-white">Cómo Garantizamos el Éxito de tu Evento</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Análisis", desc: "Analizamos tu proyecto para identificar los perfiles ideales que necesitas." },
                { title: "Casting", desc: "Selección rigurosa de perfiles alineados a tu marca y objetivos." },
                { title: "Preparación", desc: "Capacitación y briefing personalizado para garantizar excelencia." },
                { title: "Ejecución", desc: "Gestión completa con supervisión en sitio y seguimiento de resultados." },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-slate-900 p-8 rounded-2xl border border-white/10 hover:border-[#d4b200] transition-colors"
                >
                  <div className="text-4xl mb-4 text-[#d4b200]">★</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO SECTION */}
        <section id="contacto" className="py-32 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Tabs Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <button
                onClick={() => setActiveTab('booking')}
                className={`py-8 px-6 font-black text-xl md:text-2xl uppercase tracking-tight transition-all duration-300 ${
                  activeTab === 'booking'
                    ? 'bg-[#d4b200] text-black border-2 border-[#d4b200] scale-105 shadow-2xl shadow-[#d4b200]/40'
                    : 'bg-black/5 text-black/40 border-2 border-black/10 hover:border-[#d4b200]/50 hover:bg-black/10 scale-100'
                }`}
              >
                <span className="block mb-1">BOOKING</span>
                <span className={`block text-xs font-semibold tracking-[0.15em] ${
                  activeTab === 'booking' ? 'text-black/80' : 'text-black/30'
                }`}>
                  BAILARÍN, MODERADOR, MODELO
                </span>
              </button>

              <button
                onClick={() => setActiveTab('activaciones')}
                className={`py-8 px-6 font-black text-xl md:text-2xl uppercase tracking-tight transition-all duration-300 ${
                  activeTab === 'activaciones'
                    ? 'bg-[#d4b200] text-black border-2 border-[#d4b200] scale-105 shadow-2xl shadow-[#d4b200]/40'
                    : 'bg-black/5 text-black/40 border-2 border-black/10 hover:border-[#d4b200]/50 hover:bg-black/10 scale-100'
                }`}
              >
                <span className="block mb-1">ACTIVACIONES BTL</span>
                <span className={`block text-xs font-semibold tracking-[0.15em] ${
                  activeTab === 'activaciones' ? 'text-black/80' : 'text-black/30'
                }`}>
                  TIPO DE EVENTO, LOCACIÓN, TIPO DE ACTIVACIÓN
                </span>
              </button>
            </div>

            {/* Form Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Contact Info */}
              <div className="border-l-4 border-[#d4b200] pl-6">
                <h3 className="text-2xl font-black uppercase mb-6 text-black">
                  DIRECT CONTACT
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#a0a0a0] font-bold mb-2">
                      BOOKING DESK
                    </p>
                    <a 
                      href="mailto:contacto@hostpropanama.com"
                      className="text-base font-black text-black hover:text-[#d4b200] transition-colors"
                    >
                      contacto@hostpropanama.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#a0a0a0] font-bold mb-2">
                      WHATSAPP
                    </p>
                    <a 
                      href="https://wa.me/50769801194"
                      className="text-xl font-black text-black hover:text-[#d4b200] transition-colors"
                    >
                      +507 6980-1194
                    </a>
                  </div>

                  <div className="pt-4 border-t border-black/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#a0a0a0] font-bold mb-3">
                      CERTIFICACIÓN
                    </p>
                    <p className="text-sm text-black/70 leading-relaxed">
                      Trabajamos exclusivamente con talento profesional verificado.
                      Facturación inmediata.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                {/* Banner Indicador */}
                <div className="bg-[#f9f3d9] border-l-4 border-[#d4b200] px-6 py-4 mb-8 flex items-center gap-3">
                  <div className="bg-black rounded-full p-2">
                    <svg className="w-5 h-5 text-[#d4b200]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-black uppercase tracking-wide text-black">
                    {activeTab === 'booking' ? 'COTIZANDO BOOKING DE TALENTO' : 'COTIZANDO ACTIVACIÓN BTL'}
                  </span>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="marca" className="block text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
                        MARCA / CLIENTE *
                      </label>
                      <input
                        id="marca"
                        type="text"
                        required
                        className="w-full bg-white border-2 border-black/20 px-4 py-3 text-black focus:border-[#d4b200] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
                        EMAIL DE CONTACTO *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-white border-2 border-black/20 px-4 py-3 text-black focus:border-[#d4b200] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
                        TELÉFONO / CELULAR *
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        required
                        className="w-full bg-white border-2 border-black/20 px-4 py-3 text-black focus:border-[#d4b200] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="tipo" className="block text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
                        {activeTab === 'booking' ? 'TIPO DE TALENTO' : 'TIPO DE EVENTO'}
                      </label>
                      <select id="tipo" className="w-full bg-white border-2 border-black/20 px-4 py-3 text-black focus:border-[#d4b200] focus:outline-none transition-colors">
                        {activeTab === 'booking' ? (
                          <>
                            <option>Bailarín</option>
                            <option>Moderador</option>
                            <option>Modelo</option>
                          </>
                        ) : (
                          <>
                            <option>Lanzamiento de producto</option>
                            <option>Evento corporativo</option>
                            <option>Feria comercial</option>
                            <option>Promoción en punto de venta</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  {activeTab === 'activaciones' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="locacion" className="block text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
                          LOCACIÓN
                        </label>
                        <input
                          id="locacion"
                          type="text"
                          placeholder="Ciudad de Panamá, Colón, etc."
                          className="w-full bg-white border-2 border-black/20 px-4 py-3 text-black focus:border-[#d4b200] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="activacion" className="block text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
                          TIPO DE ACTIVACIÓN
                        </label>
                        <select id="activacion" className="w-full bg-white border-2 border-black/20 px-4 py-3 text-black focus:border-[#d4b200] focus:outline-none transition-colors">
                          <option>Sampling</option>
                          <option>Demostración</option>
                          <option>Experiencial</option>
                          <option>Roadshow</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="brief" className="block text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
                      BRIEF CREATIVO / VOLUMEN
                    </label>
                    <textarea
                      id="brief"
                      rows={4}
                      placeholder="Describe cantidad de personal, estética buscada, fechas, etc..."
                      className="w-full bg-white border-2 border-black/20 px-4 py-3 text-black focus:border-[#d4b200] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-8 font-black uppercase text-sm tracking-[0.15em] hover:bg-[#d4b200] hover:text-black transition-all"
                  >
                    Enviar solicitud
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA SECTION */}
        <section id="galeria" className="py-32 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Section Header */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200] font-bold mb-4">Portfolio</p>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9]">
                NEW<br />
                <span className="text-[#d4b200]">FACES</span>
              </h2>
            </motion.div>

            {/* Grid - Premium Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {gallery.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group relative aspect-[3/4] overflow-hidden bg-white/5"
                >
                  {/* Image */}
                  <Image
                    src={photo}
                    alt={`Talento profesional HostPro`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Overlay - Minimal */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  
                  {/* Number Badge - Top Right */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1">
                    <span className="text-white font-black text-xs tracking-wider">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link 
                href="#contacto"
                className="inline-flex items-center gap-3 text-white/60 hover:text-white uppercase text-xs tracking-[0.15em] font-bold transition-colors"
              >
                Ver catálogo completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="space-y-4 mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Soporte</p>
              <h2 className="text-3xl font-black text-white">Preguntas Frecuentes sobre Nuestros Servicios</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((item, idx) => (
                <motion.details
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group bg-slate-900 rounded-2xl border border-white/10 overflow-hidden hover:border-[#d4b200]/30 transition-colors focus-within:ring-2 focus-within:ring-[#d4b200]"
                >
                  <summary className="p-6 cursor-pointer flex justify-between items-center font-bold text-lg list-none text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                    {item.q}
                    <ChevronIcon />
                  </summary>
                  <div className="p-6 pt-0 text-slate-300 border-t border-white/10">
                    {item.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Image src="/logos/hostpro-logo.png" alt="HostPro Panamá - Agencia de Talento para Experiencias de Marca" width={96} height={96} className="rounded" />
              </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Agencia líder en talento profesional para experiencias de marca, eventos corporativos y producción audiovisual en Panamá.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://instagram.com/hostpropanama" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#d4b200] hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link 
                    href="https://www.tiktok.com/@hostpropanama" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#d4b200] hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
                    aria-label="TikTok"
                  >
                    <Music2 className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase text-sm mb-6 text-white">Navegación</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#servicios">Servicios</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#planes">Planes</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#metodologia">Metodología</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#contacto">Contacto</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase text-sm mb-6 text-white">Servicios</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#servicios">Experiencias de Marca</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#servicios">Eventos Corporativos</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#servicios">Producción Audiovisual</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#talento">Únete al Equipo</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase text-sm mb-6 text-white">Contacto</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li>Ciudad de Panamá, Panamá</li>
                  <li>+507 6980-1194</li>
                  <li className="pt-4">
                    <Link 
                      href="https://wa.me/50769801194"
                      className="bg-[#d4b200]/10 text-[#d4b200] px-4 py-2 rounded-lg font-bold border border-[#d4b200]/20 hover:bg-[#d4b200] hover:text-black transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Soporte 24/7
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-600 uppercase tracking-widest">2024 HOSTPRO PANAMA. TODOS LOS DERECHOS RESERVADOS.</p>
              <div className="flex gap-6 text-xs text-slate-600 uppercase tracking-widest">
                <a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#">Términos</a>
                <a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#">Privacidad</a>
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/50769801194"
          aria-label="Hablar por WhatsApp"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[-2px] hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Link>
      </main>
    </div>
  );
}
