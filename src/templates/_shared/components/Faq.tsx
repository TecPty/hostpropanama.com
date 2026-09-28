import { ChevronDown } from "lucide-react";
import type { TemplateContent } from "../../types";
import SectionHeading from "./SectionHeading";

/** FAQ con <details>/<summary>: accesible por teclado y sin JavaScript. */
export default function Faq({ content }: { content: TemplateContent["faq"] }) {
  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className="tpl-section">
      <div className="tpl-container max-w-3xl">
        <SectionHeading id="preguntas-title" eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-10 divide-y divide-tpl-border rounded-tpl-lg border border-tpl-border">
          {content.items.map((item) => (
            <details key={item.question} className="group px-5 sm:px-6">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg">{item.question}</h3>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-tpl-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-tpl-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
