import { isChristmasPreview, isChristmasSeason } from "../season";

// Mediodía en Panamá (UTC-5) = 17:00 UTC
const panama = (iso: string) => new Date(`${iso}T17:00:00Z`);

describe("isChristmasSeason", () => {
  it.each(["2026-11-30", "2026-12-01", "2026-12-25", "2026-12-31", "2027-01-02"])(
    "is active on %s",
    (day) => {
      expect(isChristmasSeason(panama(day))).toBe(true);
    }
  );

  it.each(["2026-11-16", "2026-11-18", "2026-11-29", "2027-01-03", "2027-01-06", "2027-12-25"])(
    "is inactive on %s",
    (day) => {
      expect(isChristmasSeason(panama(day))).toBe(false);
    }
  );

  it("turns on at midnight Panama time on November 30", () => {
    expect(isChristmasSeason(new Date("2026-11-29T23:59:00-05:00"))).toBe(false);
    expect(isChristmasSeason(new Date("2026-11-30T00:00:00-05:00"))).toBe(true);
  });

  it("turns off at midnight Panama time on January 3", () => {
    expect(isChristmasSeason(new Date("2027-01-02T23:59:00-05:00"))).toBe(true);
    expect(isChristmasSeason(new Date("2027-01-03T00:00:00-05:00"))).toBe(false);
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
