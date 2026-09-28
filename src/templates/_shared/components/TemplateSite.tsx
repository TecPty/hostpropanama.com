import { Fragment, type ReactNode } from "react";
import type { SectionId, TemplateContent } from "../../types";
import { buildTemplateSchema } from "../schema";
import { buildWhatsAppLink } from "../whatsapp";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Services from "./Services";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import Testimonials from "./Testimonials";
import WhatsAppFloat from "./WhatsAppFloat";

interface TemplateSiteProps {
  slug: string;
  content: TemplateContent;
}

/** Ensambla una plantilla completa a partir de su content.json. El orden lo define `content.sections`. */
export default function TemplateSite({ slug, content }: TemplateSiteProps) {
  const whatsappHref = buildWhatsAppLink(content.business.whatsapp, content.business.whatsappMessage);
  const serviceNames = content.services.items.map((item) => item.title);

  const renderers: Record<SectionId, () => ReactNode> = {
    hero: () => <Hero content={content.hero} whatsappHref={whatsappHref} />,
    services: () => <Services content={content.services} whatsappHref={whatsappHref} />,
    about: () => <About content={content.about} />,
    testimonials: () => <Testimonials content={content.testimonials} />,
    gallery: () => <Gallery content={content.gallery} />,
    faq: () => <Faq content={content.faq} />,
    contact: () => <Contact content={content.contact} business={content.business} services={serviceNames} />,
  };

  const navTargets = new Set(content.sections);
  const sectionAnchors: Record<string, SectionId> = {
    "#servicios": "services",
    "#nosotros": "about",
    "#testimonios": "testimonials",
    "#galeria": "gallery",
    "#preguntas": "faq",
    "#contacto": "contact",
  };
  // Si una sección se desactiva en content.json, su enlace desaparece del menú.
  const nav = content.nav.filter((item) => {
    const section = sectionAnchors[item.href];
    return !section || navTargets.has(section);
  });

  return (
    <div data-template={slug} lang="es-PA">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildTemplateSchema(content)).replace(/</g, "\\u003c") }}
      />
      <SiteHeader
        logoText={content.business.logoText}
        nav={nav}
        ctaLabel={content.whatsappFloat.label}
        whatsappHref={whatsappHref}
      />
      <main id="contenido">
        {content.sections.map((section) => (
          <Fragment key={section}>{renderers[section]()}</Fragment>
        ))}
      </main>
      <SiteFooter business={content.business} nav={nav} footer={content.footer} />
      <WhatsAppFloat href={whatsappHref} label={content.whatsappFloat.label} />
    </div>
  );
}
