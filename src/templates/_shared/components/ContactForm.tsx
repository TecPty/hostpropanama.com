"use client";

import { useId, useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "../whatsapp";
import Icon from "./Icon";

interface ContactFormProps {
  labels: { nameLabel: string; serviceLabel: string; dateLabel: string; submit: string; note: string };
  services: string[];
  whatsapp: string;
  baseMessage: string;
}

/** Arma un mensaje de WhatsApp con los datos del paciente/cliente. No requiere backend. */
export default function ContactForm({ labels, services, whatsapp, baseMessage }: ContactFormProps) {
  const id = useId();
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0] ?? "");
  const [date, setDate] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      baseMessage,
      name && `${labels.nameLabel}: ${name}`,
      service && `${labels.serviceLabel}: ${service}`,
      date && `${labels.dateLabel}: ${date}`,
    ].filter(Boolean);
    window.open(buildWhatsAppLink(whatsapp, lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "mt-2 block w-full min-h-12 rounded-tpl border border-tpl-border bg-tpl-bg px-4 text-base text-tpl-text placeholder:text-tpl-muted focus:border-tpl-primary";

  return (
    <form onSubmit={handleSubmit} className="rounded-tpl-lg border border-tpl-border bg-tpl-bg p-6 shadow-lg shadow-black/5 sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor={`${id}-name`} className="text-sm font-semibold">
            {labels.nameLabel}
          </label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${id}-service`} className="text-sm font-semibold">
            {labels.serviceLabel}
          </label>
          <select
            id={`${id}-service`}
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className={fieldClass}
          >
            {services.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-date`} className="text-sm font-semibold">
            {labels.dateLabel}
          </label>
          <input
            id={`${id}-date`}
            name="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-tpl-primary px-6 py-3.5 font-semibold text-tpl-on-primary transition-colors hover:bg-tpl-primary-hover"
      >
        <Icon name="message" className="h-5 w-5" />
        {labels.submit}
      </button>
      <p className="mt-3 text-center text-sm text-tpl-muted">{labels.note}</p>
    </form>
  );
}
