import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { ICON_NAMES } from "../_shared/components/Icon";
import ContactForm from "../_shared/components/ContactForm";
import { buildTemplateSchema } from "../_shared/schema";
import { buildWhatsAppLink } from "../_shared/whatsapp";
import { getTemplate, templates } from "../registry";
import type { SectionId } from "../types";

const SECTION_IDS: SectionId[] = ["hero", "services", "about", "testimonials", "gallery", "faq", "contact"];
const publicPath = (src: string) => path.join(process.cwd(), "public", src);

describe.each(templates)("plantilla $slug", (template) => {
  const { content } = template;

  it("tiene una ficha de catálogo válida", () => {
    expect(template.slug).toMatch(/^[a-z0-9-]+$/);
    expect(template.description.split(/\s+/).length).toBeLessThanOrEqual(40);
    expect(template.idealFor.length).toBeGreaterThan(0);
  });

  it("cumple las reglas de SEO", () => {
    expect(content.meta.title.length).toBeLessThanOrEqual(80);
    expect(content.meta.description.length).toBeGreaterThanOrEqual(70);
    expect(content.meta.description.length).toBeLessThanOrEqual(160);
    expect(content.meta.siteUrl).toMatch(/^https:\/\//);
  });

  it("usa teléfonos de Panamá (+507)", () => {
    expect(content.business.whatsapp).toMatch(/^507\d{7,8}$/);
    expect(content.business.phone).toMatch(/^\+507\d{7,8}$/);
  });

  it("solo declara secciones e íconos conocidos", () => {
    content.sections.forEach((section) => expect(SECTION_IDS).toContain(section));
    content.services.items.forEach((item) => expect(ICON_NAMES).toContain(item.icon));
  });

  it("tiene todas las imágenes en /public con texto alternativo", () => {
    const images = [content.meta.ogImage, content.hero.image, content.about.image, ...content.gallery.items];
    images.forEach((image) => {
      expect(image.alt.trim().length).toBeGreaterThan(5);
      expect(existsSync(publicPath(image.src)), image.src).toBe(true);
    });
  });

  it("genera schema.org del nicho y FAQPage", () => {
    const [business, faq] = buildTemplateSchema(content) as Array<Record<string, unknown>>;
    expect(business["@type"]).toBe(content.business.schemaType);
    expect(business).not.toHaveProperty("aggregateRating");
    expect(faq["@type"]).toBe("FAQPage");
  });
});

describe("registro", () => {
  it("encuentra plantillas por slug", () => {
    expect(getTemplate("clinica-dental-pro")?.name).toBe("Clínica Dental Pro");
    expect(getTemplate("no-existe")).toBeUndefined();
  });
});

describe("buildWhatsAppLink", () => {
  it("limpia el número y codifica el mensaje", () => {
    expect(buildWhatsAppLink("+507 6123-4567", "Hola, cita")).toBe("https://wa.me/50761234567?text=Hola%2C%20cita");
  });
});

describe("ContactForm", () => {
  it("abre WhatsApp con los datos del formulario", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(
      <ContactForm
        labels={{ nameLabel: "Nombre", serviceLabel: "Servicio", dateLabel: "Fecha", submit: "Enviar", note: "" }}
        services={["Limpieza", "Ortodoncia"]}
        whatsapp="50761234567"
        baseMessage="Hola"
      />,
    );

    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "María" } });
    fireEvent.change(screen.getByLabelText("Servicio"), { target: { value: "Ortodoncia" } });
    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    const url = new URL(open.mock.calls[0][0] as string);
    expect(url.pathname).toBe("/50761234567");
    expect(url.searchParams.get("text")).toBe("Hola\nNombre: María\nServicio: Ortodoncia");
    open.mockRestore();
  });
});
