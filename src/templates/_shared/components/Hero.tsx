import Image from "next/image";
import { Check } from "lucide-react";
import type { TemplateContent } from "../../types";
import WhatsAppCta from "./WhatsAppCta";

interface HeroProps {
  content: TemplateContent["hero"];
  whatsappHref: string;
}

/** Hero: h1 + CTA principal visibles sin scroll desde 320px. La imagen va después en móvil. */
export default function Hero({ content, whatsappHref }: HeroProps) {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-tpl-surface">
      <div className="tpl-container grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="inline-flex rounded-full bg-tpl-primary-soft px-3 py-1 text-sm font-semibold text-tpl-primary">
            {content.eyebrow}
          </p>
          <h1 id="hero-title" className="mt-4 text-[2rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-tpl-muted">{content.subtitle}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppCta href={whatsappHref} label={content.primaryCta} size="lg" className="sm:whitespace-nowrap" />
            <a
              href={content.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 font-semibold text-tpl-primary underline-offset-4 hover:underline"
            >
              {content.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {content.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-tpl-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-tpl-lg shadow-xl shadow-black/5">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
