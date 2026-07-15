import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Header from "@/components/Header";
import { NAV_DROPDOWN, NAV_LINKS, NAV_CTA } from "@/constants/navigation";

describe("Header", () => {
  it("renders every nav link, dropdown item and the CTA exactly once (same structure for all breakpoints)", () => {
    render(<Header />);

    for (const link of NAV_LINKS) {
      const el = screen.getByRole("link", { name: new RegExp(`^${link.label}$`, "i") });
      expect(el.getAttribute("href")).toBe(link.href);
    }

    expect(
      screen.getByRole("button", { name: /ver catálogo de modelos/i })
    ).toBeInTheDocument();

    const cta = screen.getByRole("link", { name: new RegExp(`^${NAV_CTA.label}$`, "i") });
    expect(cta.getAttribute("href")).toBe(NAV_CTA.href);

    expect(screen.queryByRole("button", { name: /abrir men./i })).not.toBeInTheDocument();
  });

  it("opens the Modelos dropdown on click and exposes both destinations", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const trigger = screen.getByRole("button", { name: /ver catálogo de modelos/i });
    await user.click(trigger);

    for (const item of NAV_DROPDOWN.items) {
      const el = screen.getByRole("link", { name: new RegExp(`^${item.label}$`, "i") });
      expect(el.getAttribute("href")).toBe(item.href);
    }
  });
});
