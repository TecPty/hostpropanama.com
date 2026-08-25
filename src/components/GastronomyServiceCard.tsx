"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { services, gastronomySubservices } from "@/constants/content";
import { getWhatsAppLink, type WhatsAppContext } from "@/utils/whatsapp";

type GastronomyServiceCardProps = {
  service: (typeof services)[number];
  index: number;
};

export default function GastronomyServiceCard({ service, index }: GastronomyServiceCardProps) {
  const { molecularCocktail, staffHospitalidad, chefEventos } = gastronomySubservices;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group border-l-2 border-[#d4b200] pl-6 hover:border-white transition-colors md:col-span-2 flex flex-col"
    >
      <span className="text-white/20 font-black text-3xl md:text-4xl leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mt-2 mb-2 leading-tight">
        {service.title}
      </h3>

      {service.headline && (
        <p className="text-[#d4b200] text-sm font-bold leading-snug mb-2">
          {service.headline}
        </p>
      )}

      <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-3xl">
        {service.description}
      </p>

      <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-white/5 mb-8">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover opacity-70 group-hover:opacity-80 transition-opacity"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
            <Image
              src={staffHospitalidad.image}
              alt={staffHospitalidad.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h4 className="text-white font-black uppercase text-sm tracking-tight">
            {staffHospitalidad.title}
          </h4>
          <p className="text-white/60 text-xs leading-relaxed">{staffHospitalidad.description}</p>
          <p className="text-white/45 text-xs leading-relaxed">{staffHospitalidad.complement}</p>
        </div>

        <div className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
            <Image
              src={chefEventos.image}
              alt={chefEventos.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h4 className="text-white font-black uppercase text-sm tracking-tight">
            {chefEventos.title}
          </h4>
          <p className="text-white/60 text-xs leading-relaxed">{chefEventos.description}</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-black uppercase text-sm tracking-tight">
            {molecularCocktail.title}
          </h4>
          <p className="text-white/60 text-xs leading-relaxed">{molecularCocktail.intro}</p>
          <p className="text-white/45 text-xs leading-relaxed">{molecularCocktail.description}</p>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {molecularCocktail.experiences.map((experience) => (
              <div key={experience.title} className="space-y-1">
                <div className="relative aspect-square overflow-hidden bg-white/5">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <p className="text-white/75 text-[9px] uppercase tracking-wide font-bold text-center leading-tight">
                  {experience.title}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[#d4b200] text-xs italic leading-relaxed pt-1">
            {molecularCocktail.closingLine}
          </p>

          <a
            href={getWhatsAppLink(molecularCocktail.whatsappContext as WhatsAppContext)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Cotizar experiencia — ${molecularCocktail.title}`}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-[#d4b200] hover:text-white transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Cotizar experiencia
          </a>
        </div>
      </div>

      <a
        href={getWhatsAppLink(service.whatsappContext as WhatsAppContext)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${service.cta ?? "Consultar por WhatsApp"} — ${service.title}`}
        className="mt-auto w-fit inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d4b200] hover:text-white transition-colors"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        {service.cta ?? "Consultar por WhatsApp"}
      </a>
    </motion.div>
  );
}
