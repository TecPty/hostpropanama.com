import type { TemplateContent } from "../../types";
import ContactForm from "./ContactForm";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

interface ContactProps {
  content: TemplateContent["contact"];
  business: TemplateContent["business"];
  services: string[];
}

export default function Contact({ content, business, services }: ContactProps) {
  const { address } = business;
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="tpl-section bg-tpl-surface">
      <div className="tpl-container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="contacto-title"
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
            align="left"
          />

          <address className="mt-10 space-y-6 not-italic">
            <div className="flex gap-4">
              <Icon name="map-pin" className="mt-1 h-5 w-5 shrink-0 text-tpl-primary" />
              <div>
                <p>{address.street}</p>
                <p className="text-tpl-muted">
                  {address.locality}, {address.region}
                </p>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-tpl-primary underline-offset-4 hover:underline"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-tpl-primary" />
              <a href={`tel:${business.phone}`} className="hover:text-tpl-primary">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="flex gap-4">
              <Icon name="mail" className="mt-1 h-5 w-5 shrink-0 text-tpl-primary" />
              <a href={`mailto:${business.email}`} className="break-all hover:text-tpl-primary">
                {business.email}
              </a>
            </div>
            <div className="flex gap-4">
              <Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-tpl-primary" />
              <ul>
                {business.hours.map((slot) => (
                  <li key={slot.label}>
                    <span className="font-medium">{slot.label}:</span>{" "}
                    <span className="text-tpl-muted">
                      {slot.opens} – {slot.closes}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </address>
        </div>

        <ContactForm
          labels={content.form}
          services={services}
          whatsapp={business.whatsapp}
          baseMessage={business.whatsappMessage}
        />
      </div>
    </section>
  );
}
