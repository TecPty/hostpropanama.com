import Image from "next/image";
import type { TemplateContent } from "../../types";
import SectionHeading from "./SectionHeading";

export default function Gallery({ content }: { content: TemplateContent["gallery"] }) {
  return (
    <section id="galeria" aria-labelledby="galeria-title" className="tpl-section bg-tpl-surface">
      <div className="tpl-container">
        <SectionHeading id="galeria-title" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {content.items.map((image) => (
            <li key={image.src} className="overflow-hidden rounded-tpl">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 380px, 50vw"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
