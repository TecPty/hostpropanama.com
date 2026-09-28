import type { TemplateContent } from "../../types";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import WhatsAppCta from "./WhatsAppCta";

interface ServicesProps {
  content: TemplateContent["services"];
  whatsappHref: string;
}

export default function Services({ content, whatsappHref }: ServicesProps) {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="tpl-section">
      <div className="tpl-container">
        <SectionHeading id="servicios-title" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-tpl-lg border border-tpl-border bg-tpl-bg p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-tpl bg-tpl-primary-soft text-tpl-primary">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 flex-1 text-tpl-muted">{item.description}</p>
              {item.price ? <p className="mt-4 text-sm font-semibold text-tpl-primary">{item.price}</p> : null}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <WhatsAppCta href={whatsappHref} label={content.cta} variant="outline" />
        </div>
      </div>
    </section>
  );
}
