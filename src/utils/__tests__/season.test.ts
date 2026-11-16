import { isChristmasPreview, isChristmasSeason } from "../season";

// Mediodía en Panamá (UTC-5) = 17:00 UTC
const panama = (iso: string) => new Date(`${iso}T17:00:00Z`);

describe("isChristmasSeason", () => {
  it.each(["2026-12-01", "2026-12-25", "2026-12-31", "2027-01-01", "2027-01-06"])(
    "is active on %s",
    (day) => {
      expect(isChristmasSeason(panama(day))).toBe(true);
    }
  );

  it.each(["2026-11-30", "2026-11-16", "2027-01-07", "2027-07-15"])(
    "is inactive on %s",
    (day) => {
      expect(isChristmasSeason(panama(day))).toBe(false);
    }
  );

  it("uses Panama time, not UTC", () => {
    // 1 dic 02:00 UTC = 30 nov 21:00 en Panamá → aún no es temporada
    expect(isChristmasSeason(new Date("2026-12-01T02:00:00Z"))).toBe(false);
  });
});

describe("isChristmasPreview", () => {
  it("activates with ?navidad=1", () => {
    expect(isChristmasPreview("?navidad=1")).toBe(true);
    expect(isChristmasPreview("?utm=x&navidad=1")).toBe(true);
  });

  it("stays off otherwise", () => {
    expect(isChristmasPreview("")).toBe(false);
    expect(isChristmasPreview("?navidad=0")).toBe(false);
  });
});
