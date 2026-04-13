"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
import { services, process, faqs, getTalentByGender, plans } from "@/constants/content";

const ChevronIcon = () => (
  <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform duration-300" />
);

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateFrom?: "left" | "right";
};

const SpotlightCard = ({ children, className = "", delay = 0, animateFrom = "left" }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: animateFrom === "left" ? -60 : 60, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      viewport={{ once: true, amount: 0.25 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden bg-black/40 border border-white/10 p-8 lg:p-10 transition-colors duration-300 ${isHovered ? "border-[#d4b200]/60" : ""} ${className}`}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(212,178,0,0.13), transparent 70%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const VisionMisionTabs = () => {
  return (
    <section className="py-20 bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Visión */}
          <SpotlightCard animateFrom="left" delay={0}>
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4b200]/10 border-2 border-[#d4b200] mb-4">
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
          </SpotlightCard>

          {/* Misión */}
          <SpotlightCard animateFrom="right" delay={0.15}>
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4b200]/10 border-2 border-[#d4b200] mb-4">
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
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState<'booking' | 'activaciones' | 'talento'>('booking');
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

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleParallaxMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 25;
    const moveY = (clientY - window.innerHeight / 2) / 25;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  // Inverse transforms for background depth (Parallax Inverso)
  const bgX = useTransform(mouseX, (value) => value * -0.6);
  const bgY = useTransform(mouseY, (value) => value * -0.6);

  const femaleTalent = getTalentByGender("mujer");
  const maleTalent = getTalentByGender("hombre");
  const featuredWomen = femaleTalent
    .filter((model) => model.slug === "ana-lorena")
    .concat(
      femaleTalent.filter(
        (model) =>
          model.slug !== "sofia-sanchez" && model.slug !== "marianne-diaz" && model.slug !== "ana-lorena",
      ),
    )
    .slice(0, 4);
  const featuredMen = maleTalent
    .filter((model) => model.slug === "carlos-wilson" || model.slug === "irving-rios")
    .concat(
      maleTalent.filter(
        (model) => model.slug !== "carlos-wilson" && model.slug !== "irving-rios",
      ),
    )
    .slice(0, 2);
  const featuredTalent = [...featuredWomen, ...featuredMen];

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
              src="/logos/hostpro-logo-horizontal.webp" 
              alt="HostPro Panamá" 
              width={540} 
              height={135} 
              className="h-16 md:h-20 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-8">
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <Link href="/modelos/mujeres" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">
                  Modelos
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-200">
                  <div className="w-44 bg-black/95 border border-white/10 backdrop-blur-sm p-2 space-y-1">
                    <Link
                      href="/modelos/mujeres"
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#d4b200] hover:bg-white/5 transition-colors"
                    >
                      Mujeres
                    </Link>
                    <Link
                      href="/modelos/hombres"
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#d4b200] hover:bg-white/5 transition-colors"
                    >
                      Hombres
                    </Link>
                  </div>
                </div>
              </div>
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
        <section 
          className="relative h-screen flex items-center justify-center overflow-hidden"
          onMouseMove={handleParallaxMouseMove}
        >
          {/* Background Image - Mobile & Tablet */}
          <div className="absolute inset-0 z-0 md:hidden">
            {/* Background base */}
            <motion.div 
              className="absolute inset-0"
              style={{ x: bgX, y: bgY, scale: 1.1 }}
            >
              <Image
                src="/images/background-hero.webp"
                alt="Fondo evento corporativo HostPro Panamá"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </motion.div>

            {/* Talento en primer plano - Versión Mobile */}
            <motion.div 
              className="absolute inset-0"
              style={{ x: mouseX, y: mouseY, scale: 1.05 }}
            >
              <Image
                src="/images/woman-background-mobile.webp"
                alt="Talento profesional de HostPro en evento corporativo de lujo en Panamá"
                fill
                className="object-cover object-center contrast-[1.1] brightness-[1.05]"
                priority
                quality={100}
              />
            </motion.div>
          </div>

          {/* Background Image - Desktop */}
          <div className="absolute inset-0 z-0 hidden md:block">
            {/* Background base - Inverse Parallax */}
            <motion.div 
              className="absolute inset-0"
              style={{ x: bgX, y: bgY, scale: 1.1 }}
            >
              <Image
                src="/images/background-hero.webp"
                alt="Fondo evento corporativo HostPro Panamá"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </motion.div>

            {/* Talento en primer plano - Versión Desktop */}
            <motion.div 
              className="absolute inset-0"
              style={{ x: mouseX, y: mouseY, scale: 1.05 }}
            >
              <Image
                src="/images/woman-background.webp"
                alt="Talento profesional de HostPro en evento corporativo de lujo en Panamá"
                fill
                className="object-cover object-right contrast-[1.1] brightness-[1.05]"
                priority
                quality={100}
              />
            </motion.div>
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
                <span className="block text-white text-[45px] md:text-[65px] lg:text-[110px] tracking-[-0.05em]">HOSTPRO</span>
                <span className="block text-[#d4b200] text-[45px] md:text-[65px] lg:text-[110px] tracking-[-0.05em]">PANAMÁ</span>
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
                className="text-white/80 text-sm md:text-base max-w-2xl mb-16 leading-relaxed font-light tracking-wide"
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
                  className="inline-flex items-center gap-3 bg-[#d4b200] text-black px-10 py-5 font-black uppercase text-xs md:text-sm tracking-[0.15em] hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4b200]/50 shadow-[0_20px_50px_rgba(212,178,0,0.2)]"
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
                    ? "bg-gradient-to-br from-[#d4b200] via-[#b89a00] to-[#8a7100] border-2 border-[#d4b200] shadow-[0_0_40px_rgba(212,178,0,0.3)]"
                    : "bg-slate-900 border border-white/5 hover:border-white/10"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-[#d4b200] px-4 py-1 rounded-full text-xs font-black uppercase whitespace-nowrap">
                    Más Popular
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <span className={`font-bold text-xs uppercase ${plan.featured ? "text-black/60" : "text-slate-500"}`}>{plan.name}</span>
                    <h3 className={`text-lg font-black mt-1 ${plan.featured ? "text-black" : "text-white"}`}>{plan.description}</h3>
                  </div>

                  <div>
                    <p className={`text-4xl font-black ${plan.featured ? "text-black" : "text-white"}`}>
                      {plan.price}
                    </p>
                  </div>

                  <div className={`space-y-2 border-t pt-5 ${plan.featured ? "border-black/20" : "border-white/10"}`}>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`mt-0.5 ${feature.included ? (plan.featured ? "text-black" : "text-[#d4b200]") : "text-white/30"}`}>
                          {feature.included ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <X className="h-4 w-4" />
                          )}
                        </div>
                        <span className={`text-xs ${feature.included ? (plan.featured ? "text-black" : "text-white") : "text-white/50"}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={plan.featured ? "https://wa.me/50769801194" : "#contacto"}
                    className={`w-full rounded-xl py-4 px-4 font-bold text-center transition uppercase tracking-widest block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                      plan.featured
                        ? "bg-black text-[#d4b200] hover:bg-black/80 hover:shadow-lg hover:shadow-black/30"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                <span className="block mb-1">ACTIVACIONES</span>
                <span className={`block text-xs font-semibold tracking-[0.15em] ${
                  activeTab === 'activaciones' ? 'text-black/80' : 'text-black/30'
                }`}>
                  BTL, EVENTOS, LANZAMIENTOS
                </span>
              </button>

              <button
                onClick={() => setActiveTab('talento')}
                className={`py-8 px-6 font-black text-xl md:text-2xl uppercase tracking-tight transition-all duration-300 ${
                  activeTab === 'talento'
                    ? 'bg-[#d4b200] text-black border-2 border-[#d4b200] scale-105 shadow-2xl shadow-[#d4b200]/40'
                    : 'bg-black/5 text-black/40 border-2 border-black/10 hover:border-[#d4b200]/50 hover:bg-black/10 scale-100'
                }`}
              >
                <span className="block mb-1">UNIRSE</span>
                <span className={`block text-xs font-semibold tracking-[0.15em] ${
                  activeTab === 'talento' ? 'text-black/80' : 'text-black/30'
                }`}>
                  REGÍSTRATE COMO TALENTO
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
                {/* Form Integration */}
                {activeTab === 'talento' ? <TalentForm /> : <LeadForm mode={activeTab} />}
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
              <p className="text-white/60 text-sm mt-6 max-w-2xl">
                Muestra destacada de perfiles activos. Para ver el catálogo completo por categoría, usa el menú de modelos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {featuredTalent.map((model, idx) => (
                <motion.div
                  key={model.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group relative aspect-[3/4] [perspective:1200px]"
                >
                  <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden border border-white/10 bg-white/5 [backface-visibility:hidden]">
                      <Image
                        src={model.photo}
                        alt={`${model.name} - HostPro Panamá`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-3 md:p-4"
                      />
                    </div>

                    <div className="absolute inset-0 border border-[#d4b200]/40 bg-black/95 p-5 flex flex-col items-center justify-center gap-2 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="text-white font-black uppercase tracking-[0.08em] text-lg">{model.name}</p>
                      <p className="text-[#d4b200] text-xs uppercase tracking-[0.1em] font-bold">{model.languages}</p>
                      <p className="text-white/80 text-sm">{model.physical.height ?? "Estatura por confirmar"}</p>
                      <Link
                        href={`/modelos/${model.slug}`}
                        className="inline-flex mt-4 w-fit bg-[#d4b200] text-black px-4 py-2 text-[11px] uppercase tracking-[0.12em] font-black hover:bg-[#e6c700] transition-colors"
                      >
                        Ver portafolio
                      </Link>
                    </div>
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
                href="/modelos/mujeres"
                className="inline-flex items-center gap-3 text-white/60 hover:text-white uppercase text-xs tracking-[0.15em] font-bold transition-colors"
              >
                Ver catálogo por categoría
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
                <Image src="/logos/hostpro-logo.webp" alt="HostPro Panamá - Agencia de Talento para Experiencias de Marca" width={96} height={96} className="rounded" />
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
              <p className="text-xs text-slate-600 uppercase tracking-widest">© {new Date().getFullYear()} HOSTPRO PANAMA. TODOS LOS DERECHOS RESERVADOS.</p>
              <div className="flex gap-6 text-xs text-slate-600 uppercase tracking-widest">
                <Link className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="https://wa.me/50769801194?text=Hola,%20deseo%20consultar%20los%20Términos%20y%20Condiciones">Términos</Link>
                <Link className="hover:text-[#d4b200] transition-colors focus-visible:outline-none focus-visible:text-[#d4b200] focus-visible:underline" href="https://wa.me/50769801194?text=Hola,%20deseo%20consultar%20la%20Política%20de%20Privacidad">Privacidad</Link>
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
