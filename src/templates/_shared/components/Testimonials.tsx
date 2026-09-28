import { Star } from "lucide-react";
import type { TemplateContent } from "../../types";
import SectionHeading from "./SectionHeading";

export default function Testimonials({ content }: { content: TemplateContent["testimonials"] }) {
  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="tpl-section">
      <div className="tpl-container">
        <SectionHeading id="testimonios-title" eyebrow={content.eyebrow} title={content.title} />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {content.items.map((item) => (
            <li key={item.name} className="flex flex-col rounded-tpl-lg border border-tpl-border bg-tpl-bg p-6">
              <figure className="flex flex-1 flex-col">
                <div className="flex gap-1 text-tpl-star" role="img" aria-label={`${item.rating} de 5 estrellas`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${index < item.rating ? "fill-current" : "opacity-30"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">“{item.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-tpl-border pt-4">
                  <span className="block font-semibold">{item.name}</span>
                  <span className="text-sm text-tpl-muted">{item.detail}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
