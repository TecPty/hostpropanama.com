import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WhatsAppButton } from "@/components/WhatsAppButton";

describe("WhatsAppButton", () => {
  it("prioritizes custom message link when message prop is provided", () => {
    const customMessage = "Hola, necesito staff para activacion urgente manana";
    render(<WhatsAppButton context="general" message={customMessage} />);

    const expectedHref = `https://wa.me/50769801194?text=${encodeURIComponent(customMessage)}`;
    const actionLink = screen.getByRole("link", {
      name: /chat por whatsapp - respuesta en menos de 1 hora/i,
    });

    expect(actionLink.getAttribute("href")).toBe(expectedHref);
  });
});
