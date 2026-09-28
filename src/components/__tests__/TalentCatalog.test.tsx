import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import TalentCatalog from "../TalentCatalog";
import type { TalentModel } from "@/constants/content";

const model = (name: string, slug: string, languages: string): TalentModel => ({
  name,
  slug,
  role: "Azafata",
  languages,
  status: "disponible",
  updatedAt: "2026-01-01",
  city: "Ciudad de Panamá",
  experienceSummary: "",
  skills: [],
  eventTypes: [],
  availability: { schedule: "", canTravel: false },
  physical: {},
  gender: "mujer",
  photo: `/talent/${slug}.webp`,
  media: { gallery: [] },
});

const models = [
  model("Ana", "ana", "Español, Inglés avanzado"),
  model("Bea", "bea", "Español"),
  model("Cleo", "cleo", "Español, Francés"),
];

const profileNames = () =>
  screen
    .getAllByRole("link")
    .filter((link) => link.getAttribute("href")?.startsWith("/modelos/"))
    .map((link) => within(link).getByText(/^(Ana|Bea|Cleo)$/).textContent);

afterEach(() => window.history.replaceState(null, "", "/"));

describe("TalentCatalog", () => {
  it("muestra solo los idiomas presentes, con conteo", () => {
    render(<TalentCatalog models={models} />);
    expect(screen.getByRole("button", { name: "Todos (3)" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Inglés (1)" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Francés (1)" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Alemán/ })).not.toBeInTheDocument();
  });

  it("filtra por idioma y lo refleja en la URL", () => {
    render(<TalentCatalog models={models} />);
    fireEvent.click(screen.getByRole("button", { name: "Inglés (1)" }));

    expect(profileNames()).toEqual(["Ana"]);
    expect(window.location.search).toBe("?idioma=ingles");
    expect(screen.getByRole("link", { name: /cotizar por whatsapp/i })).toHaveAttribute(
      "href",
      expect.stringContaining(encodeURIComponent("hable inglés")),
    );

    fireEvent.click(screen.getByRole("button", { name: "Todos (3)" }));
    expect(profileNames()).toHaveLength(3);
    expect(window.location.search).toBe("");
  });

  it("aplica el filtro que llega en la URL", () => {
    window.history.replaceState(null, "", "/?idioma=frances");
    render(<TalentCatalog models={models} />);
    expect(profileNames()).toEqual(["Cleo"]);
  });

  it("muestra insignias de idioma en cada perfil", () => {
    render(<TalentCatalog models={models} />);
    expect(screen.getByRole("list", { name: "Idiomas: Español, Inglés (Avanzado)" })).toBeInTheDocument();
  });
});
