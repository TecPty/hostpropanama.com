import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { MobileMenu } from "@/components/MobileMenu";

describe("MobileMenu", () => {
  it("opens menu and closes after selecting a navigation link", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: /abrir men./i }));

    const serviciosLink = await screen.findByRole("link", { name: /servicios/i });
    expect(serviciosLink).toBeInTheDocument();
    expect(serviciosLink.getAttribute("href")).toContain("/#servicios");

    await user.click(serviciosLink);

    await waitFor(() => {
      expect(screen.queryByRole("link", { name: /servicios/i })).not.toBeInTheDocument();
    });
  });

  it("exposes direct WhatsApp CTA in mobile panel", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: /abrir men./i }));

    const cta = await screen.findByRole("link", { name: /whatsapp directo/i });
    expect(cta).toBeInTheDocument();
    expect(cta.getAttribute("href")).toContain("https://wa.me/50769801194");
  });
});
