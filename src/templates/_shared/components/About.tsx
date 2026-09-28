import Image from "next/image";
import { Check } from "lucide-react";
import type { TemplateContent } from "../../types";
import SectionHeading from "./SectionHeading";

export default function About({ content }: { content: TemplateContent["about"] }) {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="tpl-section bg-tpl-surface">
      <div className="tpl-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 overflow-hidden rounded-tpl-lg lg:order-1">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            sizes="(min-width: 1024px) 540px, 100vw"
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading id="nosotros-title" eyebrow={content.eyebrow} title={content.title} align="left" />
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg text-tpl-muted">
              {paragraph}
            </p>
          ))}

          <ul className="mt-6 space-y-3">
            {content.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-tpl-primary" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-tpl-border pt-8">
            {content.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-tpl-muted">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-tpl-primary sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
