import { describe, expect, it } from "vitest";
import { talent } from "@/constants/content";
import { getForeignLanguages, getLanguageBySlug, isBilingual, parseLanguages } from "../languages";

const codes = (text: string) => parseLanguages(text).map((lang) => lang.code);

describe("parseLanguages", () => {
  it.each([
    ["Español nativo / Inglés avanzado", ["es", "en"]],
    ["Inglés y Español", ["es", "en"]],
    ["Español, Francés, Ruso, Inglés", ["es", "en", "fr", "ru"]],
    ["Castellano, Inglés (nativo), Francés (avanzado), Hakka (A2.2)", ["es", "en", "fr", "hak"]],
    ["Español (nativo), Inglés (C2), Alemán (A2)", ["es", "en", "de"]],
  ])("reconoce los idiomas de %s", (text, expected) => {
    expect(codes(text)).toEqual(expected);
  });

  it("extrae el nivel declarado", () => {
    const [spanish, english, german] = parseLanguages("Español (nativo), Inglés (C2), Alemán (A2)");
    expect(spanish.level).toBe("Nativo");
    expect(english.level).toBe("C2");
    expect(german.level).toBe("A2");
    expect(parseLanguages("Español, Inglés intermedio")[1].level).toBe("Intermedio");
  });

  it("no inventa idiomas en texto vacío o desconocido", () => {
    expect(parseLanguages("")).toEqual([]);
    expect(parseLanguages("Por confirmar")).toEqual([]);
  });
});

describe("isBilingual", () => {
  it("cuenta idiomas extra salvo nivel básico", () => {
    expect(isBilingual("Español, Inglés")).toBe(true);
    expect(isBilingual("Inglés intermedio")).toBe(true);
    expect(isBilingual("Español nativo, Inglés básico")).toBe(false);
    expect(isBilingual("Español (Nativo)")).toBe(false);
  });
});

describe("getLanguageBySlug", () => {
  it("resuelve el slug de la URL", () => {
    expect(getLanguageBySlug("frances")?.code).toBe("fr");
    expect(getLanguageBySlug("klingon")).toBeUndefined();
    expect(getLanguageBySlug(null)).toBeUndefined();
  });
});

describe("catálogo de talento", () => {
  it.each(talent.map((model) => [model.name, model.languages]))(
    "%s tiene idiomas reconocibles (%s)",
    (_name, languages) => {
      expect(parseLanguages(languages).length).toBeGreaterThan(0);
    },
  );

  it("tiene perfiles para el filtro de inglés", () => {
    const english = talent.filter((model) => getForeignLanguages(model.languages).some((lang) => lang.code === "en"));
    expect(english.length).toBeGreaterThan(0);
  });
});
