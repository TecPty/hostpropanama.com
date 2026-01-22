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
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm, TalentForm } from "@/components/forms";
import { services, process, faqs, talent, gallery, plans } from "@/constants/content";

const ChevronIcon = () => (
  <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform duration-300" />
);

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/logo.png" alt="HostPro Panamá - Staff premium para eventos corporativos" width={80} height={80} className="rounded" />
          </Link>
          
          <div className="flex items-center gap-12">
            <nav className="hidden md:flex items-center gap-12">
              <Link href="#galeria" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Experiencias</Link>
              <Link href="#servicios" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Servicios</Link>
              <Link href="#planes" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Planes</Link>
              <Link href="#contacto" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Contacto</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="https://instagram.com/hostpropanama" className="text-sm font-bold hover:text-[#d4b200] transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md" aria-label="Instagram de HostPro Panamá">
                <Instagram className="h-5 w-5" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d4b200] text-black px-6 py-2 rounded-lg font-black text-xs uppercase tracking-wider"
              >
                <Link href="#contacto">Empieza Ahora</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-image.png"
              alt="Staff profesional de HostPro en evento corporativo de lujo en Panamá"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 backdrop-blur-[10px]" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content - Centered */}
          <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase italic leading-tight tracking-tighter mb-6"
            >
              <span className="block text-white">NO IMPROVISAMOS</span>
              <span className="block text-[#d4b200]">EXPERIENCIAS,</span>
              <span className="block text-white">LAS DISEÑAMOS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
            >
              Staff profesional bilingüe para eventos corporativos en Panamá. Respuesta garantizada en menos de 1 hora.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="#contacto" className="bg-[#d4b200] text-black px-8 py-4 rounded-full font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4b200]/50">
                Solicitar Staff
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="https://wa.me/50769801194" className="border-2 border-[#d4b200] text-[#d4b200] px-8 py-4 rounded-full font-black uppercase text-sm tracking-wider hover:bg-[#d4b200]/10 transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4b200]/50">
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* VISIÓN SECTION */}
        <section className="py-16 bg-slate-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs">Nuestra Visión</span>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic leading-tight max-w-4xl mx-auto text-white">
                Diseñamos <span className="text-[#d4b200]">experiencias de impacto</span> con staff de clase mundial.
              </h2>
              <div className="h-1 w-24 bg-[#d4b200] mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* SERVICIOS SECTION */}
        <section id="servicios" className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs">Servicios</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mt-4">Staff Profesional para Eventos Corporativos en Panamá</h2>
            </div>
            
            <div className="space-y-20">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex-1 space-y-6">
                    <div className="inline-block bg-[#d4b200] text-black font-black px-4 py-2 text-lg rounded-md">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">{service.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-slate-300">
                        <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                        Personal verificado y capacitado
                      </li>
                      <li className="flex items-center gap-3 text-slate-300">
                        <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                        Disponibilidad inmediata
                      </li>
                      <li className="flex items-center gap-3 text-slate-300">
                        <Check className="h-5 w-5 text-[#d4b200] flex-shrink-0" />
                        Atención al detalle garantizada
                      </li>
                    </ul>
                    <Link 
                      href="#contacto" 
                      className="inline-flex items-center gap-2 text-[#d4b200] font-bold uppercase text-sm tracking-wider hover:gap-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md py-2"
                    >
                      Ver detalles <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  
                  <motion.div 
                    className="flex-1 w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-slate-900 relative group">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Staff profesional de HostPro Panamá en acción durante evento corporativo`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
                    </div>
                  </motion.div>
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

        {/* CTA SECTION */}
        <section className="bg-[#d4b200] py-16 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 leading-tight">
                ¿LISTO PARA GARANTIZAR EL ÉXITO DE TU EVENTO?
              </h2>
              <p className="text-black/80 font-medium mb-10 max-w-xl mx-auto text-lg">
                Confía tu staffing a profesionales verificados y enfócate en crear una experiencia memorable para tus invitados.
              </p>
              <Link 
                href="#contacto"
                className="bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/30"
              >
                Solicitar Cotización Gratis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
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
                { title: "Análisis", desc: "Analizamos cada evento para diseñar la arquitectura de staff ideal." },
                { title: "Diseño", desc: "Diseñamos perfiles personalizados pensados en tus objetivos." },
                { title: "Estrategia", desc: "Implementamos soluciones tácticas que optimizan resultados." },
                { title: "Ejecución", desc: "Despliegue ágil con monitoreo proactivo durante todo el evento." },
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
        <section id="contacto" className="py-16 bg-slate-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 italic text-white">
                  Cotiza tu evento <br/><span className="text-[#d4b200] italic">en menos de 1 hora</span>
                </h2>
                <p className="text-slate-300 mb-8 max-w-md">
                  Envíanos tus requerimientos y nuestro equipo se pondrá en contacto en menos de 1 hora.
                </p>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-[#d4b200] bg-[#d4b200]/10 p-2 rounded-lg" style={{width: '32px', height: '32px'}} />
                    <span>contacto@hostpropanama.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-[#d4b200] bg-[#d4b200]/10 p-2 rounded-lg" style={{width: '32px', height: '32px'}} />
                    <span>+507 6980-1194</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-white/10"
              >
                <LeadForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TALENTO SECTION */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Talento */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                id="talento"
                className="rounded-3xl border border-white/10 bg-slate-900 p-8"
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
                          src={`/talent/${person.name.toLowerCase()}.png`}
                          alt={`${person.name} - ${person.role} bilingüe de HostPro Panamá`}
                          fill
                          className="w-full h-full object-cover"
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

              {/* Unirse al equipo */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Únete al equipo</p>
                  <h2 className="text-2xl font-black text-white">
                    Trabaja con las Mejores Marcas de Panamá
                  </h2>
                  <p className="text-slate-300">
                    Staff con presencia impecable, puntualidad y actitud proactiva. Envía tu aplicación.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
                  <TalentForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GALERÍA SECTION */}
        <section id="galeria" className="py-16 px-6 overflow-hidden bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="space-y-3 mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">Galería</p>
              <h2 className="text-2xl md:text-4xl font-black text-white">
                Nuestro Staff en Eventos Corporativos Reales
              </h2>
            </motion.div>

            <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px]">
              {gallery.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-black/40 hover:border-[#d4b200]/40 transition-all"
                  style={{
                    gridColumn: idx === 0 ? "span 2" : idx === 1 ? "span 1" : undefined,
                    gridRow: idx === 0 ? "span 2" : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:from-black/60 transition-all" />
                  <Image
                    src={photo}
                    alt={`Staff profesional HostPro en evento corporativo de alto nivel en Panamá`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl font-black text-white">Preguntas Frecuentes sobre Nuestro Staff</h2>
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
                <Image src="/logos/logo.png" alt="HostPro Panamá - Staff premium para eventos corporativos" width={96} height={96} className="rounded" />
              </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Líderes en staffing profesional para eventos corporativos y experiencias de impacto en Panamá.
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
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#servicios">Staffing Corporativo</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#servicios">Eventos Premium</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#servicios">Lanzamientos</a></li>
                  <li><a className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="#talento">Talento</a></li>
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
