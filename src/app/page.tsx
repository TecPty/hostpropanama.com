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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm, TalentForm } from "@/components/forms";

const services = [
  {
    title: "Azafatas y modelos corporativos",
    description:
      "Presencia impecable para ferias, congresos, lanzamientos y eventos premium.",
  },
  {
    title: "Staff bilingue VIP",
    description: "Talento capacitado en protocolo y atencion a invitados internacionales.",
  },
  {
    title: "Brand ambassadors y promotores",
    description: "Perfiles que comunican tu marca con seguridad y elegancia.",
  },
  {
    title: "Registro y hospitality",
    description:
      "Recepcion, check-in, control de accesos y acompanamiento con calidez y precision.",
  },
];

const process = [
  "Brief y requerimientos del evento",
  "Seleccion curada del staff",
  "Confirmacion y logistica",
  "Ejecucion y supervision en sitio",
  "Reporte y feedback post-evento",
];

const faqs = [
  {
    q: "En cuanto tiempo responden una solicitud?",
    a: "Respondemos en menos de 1 hora habil. Para urgencias, tienes WhatsApp directo +507 .",
  },
  {
    q: "Cuentan con talento bilingue?",
    a: "Si. Bilingue y perfiles con experiencia en protocolo, hospitality y marcas premium.",
  },
  {
    q: "Trabajan en todo Panama?",
    a: "Cobertura nacional. Coordinamos transporte y uniformes segun el evento.",
  },
  {
    q: "Como manejan uniformes y dress code?",
    a: "Nos adaptamos a tu guia. Podemos proveer propuestas de vestuario y briefing previo.",
  },
  {
    q: "Emiten factura y contratos?",
    a: "Si. Facturacion y acuerdos de confidencialidad disponibles para clientes corporativos.",
  },
];

const talent = [
  {
    name: "Ghazi",
    role: "Host corporativo",
    languages: "Espanol / Ingles",
    photo: "/talent/ghazi.png",
  },
  {
    name: "Jean",
    role: "Brand ambassador",
    languages: "Espanol / Ingles",
    photo: "/talent/jean.png",
  },
  {
    name: "Vanessa",
    role: "Hospitality / Protocolo",
    languages: "Espanol / Ingles",
    photo: "/talent/vanessa.png",
  },
  {
    name: "Sofia",
    role: "Promotora premium",
    languages: "Espanol",
    photo: "/talent/sofia.png",
  },
  {
    name: "Camila",
    role: "Recepcion y check-in",
    languages: "Espanol / Ingles",
    photo: "/talent/camila.png",
  },
  
];

const gallery = [
  "/talent/jean.png",
  "/talent/ghazi.png",
  "/talent/vanessa.png",
  "/talent/sofia.png",
  "/talent/camila.png",
  "/hero-image.png",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0 gold-gradient" />
      <header className="sticky top-0 z-30 border-b border-white/5 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="HostPro Panama"
              width={98}
              height={98}
              className="rounded-lg"
              priority
            />
          </div>
          <div className="hidden gap-6 text-base font-semibold md:flex">
            <a href="#servicios" className="hover:text-[#d4b200] transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="hover:text-[#d4b200] transition-colors">
              Proceso
            </a>
            <a href="#galeria" className="hover:text-[#d4b200] transition-colors">
              Galeria
            </a>
            <a href="#contacto" className="hover:text-[#d4b200] transition-colors">
              Contacto
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
              className="rounded-full bg-[#d4b200] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e6c700]"
            >
              Solicitar staff
            </Link>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-10">
        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#0e0f11] via-[#101014] to-[#0c0c0f] px-6 py-12 md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,178,0,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(212,178,0,0.1),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(125,211,252,0.14),transparent_40%)]" />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4b200]">
                Agencia de staff premium
              </div>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
                Staff profesional para tus eventos corporativos en Panama.
              </h1>
              <p className="max-w-2xl text-lg text-white/80">
                Azafatas, promotores y brand ambassadors verificados. Presencia impecable,
                actitud de servicio y respuesta inmediata para marcas exigentes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#d4b200] px-6 py-3 text-black transition hover:-translate-y-0.5 hover:bg-[#e6c700]"
                >
                  Solicitar staff
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#talento"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white transition hover:border-[#d4b200]/60 hover:text-[#d4b200]"
                >
                  Aplicar como talento
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#d4b200]" />
                  Talento verificado
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-[#d4b200]" />
                  Respuesta menor a 1 hora
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#d4b200]" />
                  Imagen impecable
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-center">
              <div className="relative h-[420px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[440px] md:h-[560px] md:max-w-[520px]">
                <div className="absolute left-8 top-10 h-72 w-72 rounded-full bg-[#d4b200]/22 blur-[130px]" />
                <div className="absolute right-6 top-16 h-72 w-72 rounded-full bg-[#7dd3fc]/18 blur-[140px]" />
                <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_60%_40%,rgba(125,211,252,0.35),transparent_45%),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.28),transparent_55%)] blur-[60px]" />
                <div className="absolute inset-0 overflow-visible">
                  <Image
                    src="/hero-image.png"
                    alt="Equipo HostPro Panama"
                    fill
                    className="object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.5)] scale-[1.2] translate-y-[4%] sm:scale-[1.35] sm:translate-y-[0%] md:scale-[1.5] md:translate-y-[-1%]"
                    priority
                  />
                </div>
                <div className="absolute -left-6 top-8 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
                  Bilingue VIP
                </div>
                <div className="absolute -right-6 top-20 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
                  Protocolo
                </div>
                <div className="absolute -left-4 bottom-16 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
                  Brand ambassador
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mt-16 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">Servicios</p>
              <h2 className="font-display text-3xl md:text-4xl">
                Soluciones de staff para eventos corporativos y luxury.
              </h2>
            </div>
            <Link
              href="#contacto"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[#d4b200]/60 hover:text-[#d4b200] md:inline-flex"
            >
              Solicitar propuesta
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#121212] via-[#0c0c0c] to-[#1a1500] p-6"
              >
                <div className="absolute right-4 top-4 h-12 w-12 rounded-full border border-[#d4b200]/30 bg-[#d4b200]/10" />
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4b200]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm text-[#d4b200]">
                    Detalles
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="proceso" className="mt-16 rounded-3xl border border-white/10 bg-white/5 px-6 py-12">
          <div className="flex items-center gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">Proceso</p>
            <Star className="h-5 w-5 text-[#d4b200]" />
          </div>
          <h2 className="mt-2 font-display text-3xl">
            Flujo agil para que tu evento este cubierto sin friccion.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-5">
            {process.map((step, idx) => (
              <div
                key={step}
                className="relative rounded-2xl border border-white/10 bg-black/50 p-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#d4b200]/20 text-sm font-bold text-[#d4b200]">
                  {idx + 1}
                </div>
                <p className="text-sm text-white/80">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="galeria" className="mt-16 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">Galeria</p>
              <h2 className="font-display text-3xl">Momentos de eventos y equipo.</h2>
            </div>
            <span className="text-sm text-white/60">Actualiza con tus fotos.</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((photo, idx) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Image
                  src={photo}
                  alt={`Galeria ${idx + 1}`}
                  width={600}
                  height={500}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  Evento corporativo
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">
              Garantia HostPro
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#d4b200]/10 via-black to-black px-6 py-5 shadow-lg">
                <p className="text-lg font-semibold text-white">Respuesta &lt; 1 hora</p>
                <p className="mt-2 text-sm text-white/70">
                  Canal directo para solicitudes urgentes y confirmacion rapida.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#d4b200]/10 via-black to-black px-6 py-5 shadow-lg">
                <p className="text-lg font-semibold text-white">Staff verificado</p>
                <p className="mt-2 text-sm text-white/70">
                  Identidad, presencia y puntualidad validadas antes de cada evento.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#d4b200]/10 via-black to-black px-6 py-5 shadow-lg">
                <p className="text-lg font-semibold text-white">Equipo listo &lt; 24h</p>
                <p className="mt-2 text-sm text-white/70">
                  Cobertura express para lanzamientos, ferias y activaciones.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#d4b200]/10 via-black to-black px-6 py-5 shadow-lg">
                <p className="text-lg font-semibold text-white">Cobertura nacional</p>
                <p className="mt-2 text-sm text-white/70">
                  Coordinamos transporte, dress code y briefing segun tu marca.
                </p>
              </div>
            </div>
          </div>
          <div
            id="talento"
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#d4b200]" />
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">
                Talento destacado
              </p>
            </div>
            <div className="mt-4 grid gap-3">
              {talent.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/60 px-4 py-3"
                >
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#d4b200]/40 bg-black/60">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold">{person.name}</p>
                    <p className="text-sm text-white/70">{person.role}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#d4b200]">
                      {person.languages}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/70">
              Carga tus fotos finales aqui para reemplazar los placeholders y mostrar tu
              equipo real.
            </p>
          </div>
        </section>

        <section id="contacto" className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="flex h-full flex-col space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">
              Solicita propuesta
            </p>
            <h2 className="font-display text-3xl">
              Cuentanos sobre tu evento y armamos el staff ideal.
            </h2>
            <p className="text-white/70">
              Respuesta en menos de 1 hora habil. Tambien puedes escribir a{" "}
              <Link
                className="font-semibold text-[#d4b200] hover:underline"
                href="mailto:contacto@hostpropamama.com"
              >
                contacto@hostpropamama.com
              </Link>{" "}
              o WhatsApp al{" "}
              <Link
                className="font-semibold text-[#d4b200] hover:underline"
                href="https://wa.me/50769801194"
              >
                +507 6980-1194
              </Link>
              .
            </p>
            <div className="flex h-full flex-1 flex-col rounded-3xl border border-white/10 bg-black/60 p-6">
              <LeadForm />
            </div>
          </div>
          <div className="flex h-full flex-col space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">Talento</p>
            <h3 className="text-2xl font-semibold">Unete al equipo HostPro.</h3>
            <p className="text-white/70">
              Staff con presencia impecable, puntualidad y actitud proactiva. Envia tu
              aplicacion y te contactamos.
            </p>
            <div className="flex h-full flex-1 flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
              <TalentForm />
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-black/60 px-6 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200]">FAQ</p>
              <h3 className="font-display text-3xl">Preguntas frecuentes.</h3>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 p-4">
                  <p className="font-semibold">{item.q}</p>
                  <p className="mt-2 text-sm text-white/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-white/10 bg-black/90">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4 md:items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="HostPro Panama" width={48} height={48} className="rounded-lg" />
              <div>
                <p className="font-semibold uppercase tracking-[0.08em] text-[#d4b200]">
                  HostPro Panama
                </p>
                <p className="text-sm text-white/60">Staff premium para eventos corporativos.</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Representamos tu marca con presencia, puntualidad y servicio impecable.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b200]">Contacto</p>
            <Link href="mailto:contacto@hostpropamama.com" className="block text-white/80 hover:text-[#d4b200]">
              contacto@hostpropamama.com
            </Link>
            <Link href="tel:+50769801194" className="block text-white/80 hover:text-[#d4b200]">
              +507 6980-1194
            </Link>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://instagram.com/hostpropanama"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d4b200] hover:text-[#d4b200]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@hostpropanama"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d4b200] hover:text-[#d4b200]"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5" />
              </Link>
            </div>
            <Link href="https://wa.me/50769801194" className="block text-white/80 hover:text-[#d4b200]">
              WhatsApp directo
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b200]">Secciones</p>
            <a href="#servicios" className="block text-white/80 hover:text-[#d4b200]">
              Servicios
            </a>
            <a href="#proceso" className="block text-white/80 hover:text-[#d4b200]">
              Proceso
            </a>
            <a href="#galeria" className="block text-white/80 hover:text-[#d4b200]">
              Galeria
            </a>
            <a href="#contacto" className="block text-white/80 hover:text-[#d4b200]">
              Contacto
            </a>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b200]">Solicita tu staff</p>
            <p className="text-sm text-white/70">
              Respuesta en menos de 1 hora habil. Cuéntanos tu evento y te asignamos el equipo ideal.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[#d4b200] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e6c700]"
            >
              Solicitar propuesta
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} HostPro Panama. Todos los derechos reservados.</span>
            <div className="flex gap-4">
              <a href="#contacto" className="hover:text-[#d4b200]">
                Privacidad
              </a>
              <a href="#contacto" className="hover:text-[#d4b200]">
                Terminos
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
