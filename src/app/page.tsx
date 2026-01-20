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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm, TalentForm } from "@/components/forms";
import { services, process, faqs, talent, gallery, plans } from "@/constants/content";


export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0 gold-gradient" />
      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/logos/logo.png"
              alt="HostPro Panama"
              width={98}
              height={98}
              className="rounded-lg"
              priority
            />
          </motion.div>
          <div className="hidden gap-8 text-base font-semibold md:flex">
            <a href="#servicios" className="relative group text-white/80 hover:text-[#d4b200] transition-colors">
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b200] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#planes" className="relative group text-white/80 hover:text-[#d4b200] transition-colors">
              Planes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b200] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#tecnologia" className="relative group text-white/80 hover:text-[#d4b200] transition-colors">
              Tecnología
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b200] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contacto" className="relative group text-white/80 hover:text-[#d4b200] transition-colors">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b200] group-hover:w-full transition-all duration-300" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://instagram.com/hostpropanama"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d4b200] hover:text-[#d4b200]"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@hostpropanama"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d4b200] hover:text-[#d4b200]"
            >
              <Music2 className="h-5 w-5" />
            </Link>
            <Link
              href="#contacto"
              className="rounded-full bg-[#d4b200] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e6c700] hover:shadow-lg hover:shadow-[#d4b200]/30"
            >
              Solicitar
            </Link>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* HERO SECTION - FULL SCREEN WITH BACKGROUND IMAGE */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 py-10 md:py-12">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-image.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            {/* Blur Effect Layer */}
            <div className="absolute inset-0 backdrop-blur-[14px]" />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content - Centered */}
          <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-3">
                <motion.h1 
                  className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <span className="block text-white">NO</span>
                  <span className="block text-[#d4b200]">IMPROVISEMOS</span>
                  <span className="block text-white">LAS ORDENAMOS</span>
                </motion.h1>

                <motion.p 
                  className="text-base sm:text-lg text-white/80 mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Staff verificado y profesional para tus eventos corporativos. Respuesta en menos de 1 hora.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 pt-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d4b200] px-6 py-3 text-black font-bold text-sm transition hover:bg-[#e6c700]"
                >
                  Solicitar staff
                </Link>
                <a
                  href="https://wa.me/50769801194"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-white font-bold text-sm transition hover:border-[#d4b200] hover:text-[#d4b200]"
                >
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SERVICIOS SECTION - ALTERNATING LAYOUT */}
        <section id="servicios" className="relative py-16 md:py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="space-y-4 mb-12 md:mb-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Servicios</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
                Soluciones de staff para eventos corporativos y luxury.
              </h2>
            </motion.div>

            {/* Services in alternating layout */}
            <div className="space-y-12 md:space-y-16">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {idx % 2 === 0 ? (
                    <>
                      {/* Text first for even indexes */}
                      <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#d4b200]/20 text-[#d4b200] font-bold text-base md:text-lg">
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="text-base md:text-lg text-white/70 leading-relaxed">{service.description}</p>
                        <ul className="space-y-3 pt-4">
                          <li className="flex items-center gap-3 text-white/70">
                            <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                            Personal verificado y capacitado
                          </li>
                          <li className="flex items-center gap-3 text-white/70">
                            <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                            Disponibilidad inmediata
                          </li>
                          <li className="flex items-center gap-3 text-white/70">
                            <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                            Atención al detalle garantizada
                          </li>
                        </ul>
                        <div className="pt-4">
                          <Link 
                            href="#contacto" 
                            className="inline-flex items-center gap-2 text-[#d4b200] font-semibold hover:gap-3 transition-all group"
                          >
                            Ver detalles
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                          </Link>
                        </div>
                      </motion.div>

                      {/* Image second for even indexes */}
                      <motion.div 
                        className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                        <Image
                          src={`/service-${idx + 1}.png`}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Image first for odd indexes */}
                      <motion.div 
                        className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent order-2 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                        <Image
                          src={`/service-${idx + 1}.png`}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Text second for odd indexes */}
                      <motion.div 
                        className="space-y-6 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#d4b200]/20 text-[#d4b200] font-bold text-base md:text-lg">
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="text-base md:text-lg text-white/70 leading-relaxed">{service.description}</p>
                        <ul className="space-y-3 pt-4">
                          <li className="flex items-center gap-3 text-white/70">
                            <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                            Personal verificado y capacitado
                          </li>
                          <li className="flex items-center gap-3 text-white/70">
                            <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                            Disponibilidad inmediata
                          </li>
                          <li className="flex items-center gap-3 text-white/70">
                            <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                            Atención al detalle garantizada
                          </li>
                        </ul>
                        <div className="pt-4">
                          <Link 
                            href="#contacto" 
                            className="inline-flex items-center gap-2 text-[#d4b200] font-semibold hover:gap-3 transition-all group"
                          >
                            Ver detalles
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                          </Link>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGÍA SECTION - IMPROVED LAYOUT */}
        <section id="tecnologia" className="relative py-16 md:py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Features grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {[
                  {
                    icon: Zap,
                    title: "Respuesta Rápida",
                    desc: "Confirmación en menos de 1 hora para cualquier solicitud",
                  },
                  {
                    icon: Users,
                    title: "Equipo Versátil",
                    desc: "Personal capacitado en múltiples roles y sectores",
                  },
                  {
                    icon: Briefcase,
                    title: "Experiencia Corporativa",
                    desc: "Años de trayectoria en eventos de alto nivel",
                  },
                  {
                    icon: Shield,
                    title: "Verificación Total",
                    desc: "100% talento verificado y asegurado",
                  },
                ].map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 md:p-6 hover:border-[#d4b200]/40 hover:bg-white/10 transition-all group"
                    >
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#d4b200]/20 group-hover:bg-[#d4b200]/30 transition">
                        <Icon className="h-6 w-6 text-[#d4b200]" />
                      </div>
                      <h3 className="font-semibold text-base md:text-lg mb-2 text-white">{feature.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Right - Content */}
              <motion.div 
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-3 md:space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Capacitación</p>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                    Staff capacitado en protocolo y tecnología.
                  </h2>
                  <p className="text-base md:text-lg text-white/70">
                    Nuestro equipo se mantiene actualizado en sistemas de registro, software de eventos y mejores prácticas en hospitality. Garantizamos ejecución impecable en cada detalle.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-sm font-semibold text-[#d4b200] uppercase tracking-[0.2em]">Incluye</p>
                  {[
                    "Sistema de check-in y registro digital",
                    "Protocolo VIP y manejo de marcas premium",
                    "Comunicación bilingüe avanzada",
                    "Gestión de eventos en tiempo real",
                  ].map((item, i) => (
                    <motion.div 
                      key={item} 
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4b200]/20">
                        <Check className="h-4 w-4 text-[#d4b200]" />
                      </div>
                      <p className="text-white/80 text-base md:text-lg">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4b200] px-6 md:px-8 py-3 text-black font-semibold transition hover:bg-[#e6c700] hover:shadow-lg hover:shadow-[#d4b200]/30 mt-4"
                >
                  Conocer más
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PLANES SECTION */}
        <section id="planes" className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="space-y-4 mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Planes y Precios</p>
              <h2 className="font-display text-4xl lg:text-5xl">
                Opciones flexible para tu presupuesto.
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Desde eventos pequeños hasta cobertura completa. Cada plan está diseñado para maximi
zar valor.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-3xl border p-8 transition-all ${
                    plan.featured
                      ? "border-[#d4b200]/60 bg-gradient-to-br from-[#d4b200]/20 via-white/5 to-transparent ring-2 ring-[#d4b200]/30"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#d4b200] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
                      Recomendado
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-white/60 text-sm mt-1">{plan.description}</p>
                    </div>

                    <div>
                      <p className="text-4xl font-bold text-[#d4b200]">{plan.price}</p>
                      <p className="text-xs text-white/50 mt-1">Solicitar cotización personalizada</p>
                    </div>

                    <div className="space-y-3 border-t border-white/10 pt-6">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`mt-1 ${feature.included ? "text-[#d4b200]" : "text-white/30"}`}>
                            {feature.included ? (
                              <Check className="h-5 w-5" />
                            ) : (
                              <X className="h-5 w-5" />
                            )}
                          </div>
                          <span className={feature.included ? "text-white" : "text-white/50"}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={plan.name === "Enterprise" ? "https://wa.me/50769801194" : "#contacto"}
                      className={`w-full rounded-full py-3 px-4 font-semibold text-center transition ${
                        plan.featured
                          ? "bg-[#d4b200] text-black hover:bg-[#e6c700] hover:shadow-lg hover:shadow-[#d4b200]/30"
                          : "border border-white/20 text-white hover:border-[#d4b200]/50 hover:text-[#d4b200]"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO SECTION */}
        <section className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="rounded-3xl border border-white/10 bg-white/5 p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Proceso</p>
                <Star className="h-5 w-5 text-[#d4b200]" />
              </div>
              <h2 className="font-display text-4xl mb-12">
                De la solicitud al evento: flujo sin fricciones.
              </h2>
              <div className="grid gap-6 md:grid-cols-5">
                {process.map((step, idx) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Connector line */}
                    {idx < process.length - 1 && (
                      <div className="absolute top-12 left-[calc(50%+20px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-[#d4b200] to-transparent hidden md:block" />
                    )}
                    <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 hover:border-[#d4b200]/30 hover:bg-black/70 transition-all">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4b200]/20 text-sm font-bold text-[#d4b200] mb-4">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-white/80 font-medium">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* GARANTÍA Y TALENTO */}
        <section className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
              {/* Left - Garantía */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Garantía HostPro</p>
                  <h2 className="font-display text-4xl">
                    Compromisos que respaldan tu confianza.
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Respuesta < 1 hora",
                      desc: "Canal directo para solicitudes urgentes y confirmación rápida.",
                      icon: Zap,
                    },
                    {
                      title: "Staff verificado",
                      desc: "Identidad, presencia y puntualidad validadas antes de cada evento.",
                      icon: Shield,
                    },
                    {
                      title: "Equipo listo < 24h",
                      desc: "Cobertura express para lanzamientos, ferias y activaciones.",
                      icon: Clock3,
                    },
                    {
                      title: "Cobertura nacional",
                      desc: "Coordinamos transporte, dress code y briefing según tu marca.",
                      icon: Users,
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#d4b200]/10 via-white/5 to-transparent p-6 hover:border-[#d4b200]/40 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#d4b200]/20">
                            <Icon className="h-6 w-6 text-[#d4b200]" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{item.title}</p>
                            <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right - Talento */}
              <motion.div 
                id="talento"
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-[#d4b200]" />
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">
                    Talento destacado
                  </p>
                </div>
                <div className="space-y-3">
                  {talent.map((person) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 hover:border-[#d4b200]/30 transition-all"
                    >
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#d4b200]/40 bg-black/60 shrink-0">
                        <Image
                          src={person.photo}
                          alt={person.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white">{person.name}</p>
                        <p className="text-xs text-white/70">{person.role}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200]">
                          {person.languages}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GALERIA SECTION - PROFESSIONAL GRID */}
        <section id="galeria" className="relative py-16 md:py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="space-y-3 md:space-y-4 mb-12 md:mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Galería</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
                Eventos y talento en acción.
              </h2>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                Cada evento refleja nuestro compromiso con la excelencia y el profesionalismo.
              </p>
            </motion.div>

            {/* Masonry-style gallery */}
            <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px]">
              {gallery.map((photo, idx) => (
                <motion.div
                  key={photo}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-black/40 hover:border-[#d4b200]/40 transition-all duration-300 cursor-pointer"
                  style={{
                    gridColumn: idx === 0 ? "span 2" : idx === 1 ? "span 1" : undefined,
                    gridRow: idx === 0 ? "span 2" : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:from-black/60 transition-all duration-300" />
                  
                  <Image
                    src={photo}
                    alt={`Evento ${idx + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 z-20">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="space-y-1"
                    >
                      <p className="font-semibold text-white text-xs md:text-sm">Evento Corporativo</p>
                      <p className="text-white/70 text-xs hidden md:block">Staff profesional en evento de alto nivel</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery CTA */}
            <motion.div 
              className="mt-10 md:mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm md:text-base text-white/70 mb-4">Más de 500 eventos exitosos en nuestro portafolio</p>
              <Link
                href="https://instagram.com/hostpropanama"
                className="inline-flex items-center gap-2 rounded-full border border-[#d4b200] px-5 md:px-6 py-2 md:py-3 text-[#d4b200] font-semibold text-sm md:text-base hover:bg-[#d4b200]/10 transition"
              >
                <Instagram className="h-5 w-5" />
                Síguenos en Instagram
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">¿Listo?</p>
              <h2 className="font-display text-5xl lg:text-6xl">
                Cuéntanos tu evento.
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Respuesta en menos de 1 hora. Envía tu solicitud y te presentaremos el staff ideal para tu marca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link
                  href="#contacto"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d4b200] px-8 py-4 text-black font-semibold text-lg transition hover:-translate-y-1 hover:bg-[#e6c700] hover:shadow-[0_20px_40px_rgba(212,178,0,0.3)]"
                >
                  Solicitar propuesta
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-2" />
                </Link>
                <a
                  href="https://wa.me/50769801194"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-semibold text-lg transition hover:border-[#d4b200] hover:text-[#d4b200]"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp directo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FORMULARIOS SECTION */}
        <section id="contacto" className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulario clientes */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Solicita tu staff</p>
                  <h2 className="font-display text-3xl">
                    Cuéntanos tu evento.
                  </h2>
                  <p className="text-white/70">
                    Respuesta en menos de 1 hora hábil. Cuéntanos los detalles de tu evento y te asignamos el equipo ideal.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <LeadForm />
                </div>
              </motion.div>

              {/* Formulario talento */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Únete al equipo</p>
                  <h2 className="font-display text-3xl">
                    Sé parte de HostPro.
                  </h2>
                  <p className="text-white/70">
                    Staff con presencia impecable, puntualidad y actitud proactiva. Envía tu aplicación y te contactamos.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <TalentForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="space-y-4 mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Preguntas frecuentes</p>
              <h2 className="font-display text-4xl lg:text-5xl">
                Resolvemos tus dudas.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((item, idx) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#d4b200]/30 hover:bg-white/10 transition-all"
                >
                  <p className="font-semibold text-lg text-white mb-3">{item.q}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-gradient-to-b from-black/50 to-black/80">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* Brand */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <Image 
                  src="/logos/logo.png" 
                  alt="HostPro Panama" 
                  width={48} 
                  height={48} 
                  className="rounded-lg" 
                />
                <div>
                  <p className="font-semibold uppercase tracking-[0.08em] text-[#d4b200]">
                    HostPro
                  </p>
                  <p className="text-xs text-white/60">Panama</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Representamos tu marca con presencia, puntualidad y servicio impecable en cada evento.
              </p>
            </motion.div>

            {/* Contacto */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#d4b200]">Contacto</p>
              <div className="space-y-3 text-sm">
                <Link 
                  href="mailto:contacto@hostpropamama.com" 
                  className="block text-white/80 hover:text-[#d4b200] transition"
                >
                  contacto@hostpropamama.com
                </Link>
                <Link 
                  href="tel:+50769801194" 
                  className="block text-white/80 hover:text-[#d4b200] transition"
                >
                  +507 6980-1194
                </Link>
                <Link 
                  href="https://wa.me/50769801194" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-[#d4b200] transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp directo
                </Link>
              </div>
            </motion.div>

            {/* Enlaces */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#d4b200]">Secciones</p>
              <div className="space-y-2 text-sm">
                <a href="#servicios" className="block text-white/80 hover:text-[#d4b200] transition">
                  Servicios
                </a>
                <a href="#planes" className="block text-white/80 hover:text-[#d4b200] transition">
                  Planes
                </a>
                <a href="#tecnologia" className="block text-white/80 hover:text-[#d4b200] transition">
                  Tecnología
                </a>
                <a href="#contacto" className="block text-white/80 hover:text-[#d4b200] transition">
                  Contacto
                </a>
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#d4b200]">Síguenos</p>
              <div className="flex gap-3">
                <Link
                  href="https://instagram.com/hostpropanama"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#d4b200] hover:text-[#d4b200] hover:bg-[#d4b200]/10"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@hostpropanama"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#d4b200] hover:text-[#d4b200] hover:bg-[#d4b200]/10"
                  aria-label="TikTok"
                >
                  <Music2 className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Footer bottom */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/50">
            <span>© {new Date().getFullYear()} HostPro Panama. Todos los derechos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#d4b200] transition">
                Política de privacidad
              </a>
              <a href="#" className="hover:text-[#d4b200] transition">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Link
        href="https://wa.me/50769801194"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[-2px] hover:bg-[#1ebe5b]"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Link>
    </div>
  );
}
