import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { LeadForm } from "@/components/forms";

describe("LeadForm", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("shows error feedback when lead submission API fails", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    fetchMock.mockResolvedValue({ ok: false });
    const user = userEvent.setup();
    render(<LeadForm />);

    await user.type(screen.getByPlaceholderText("Nombre de la persona de contacto"), "Ana");
    await user.type(screen.getByPlaceholderText("correo@empresa.com"), "ana@empresa.com");
    await user.type(screen.getByPlaceholderText("+507 6980-1194"), "+50760000000");
    await user.click(screen.getByRole("button", { name: /solicitar cotizaci.n/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
    expect(await screen.findByText(/error al enviar/i)).toBeInTheDocument();
    errorSpy.mockRestore();
  });

  it("submits valid data to /api/contact and includes lead mode", async () => {
    fetchMock.mockResolvedValue({ ok: true });
    const user = userEvent.setup();

    render(<LeadForm mode="activaciones" />);

    await user.type(screen.getByPlaceholderText("Nombre de la persona de contacto"), "Carlos Perez");
    await user.type(screen.getByPlaceholderText("correo@empresa.com"), "carlos@empresa.com");
    await user.type(screen.getByPlaceholderText("+507 6980-1194"), "+50769801194");
    await user.type(
      screen.getByPlaceholderText(/describe cantidad de personal, est.tica buscada, fechas, etc/i),
      "Necesitamos 4 promotores para feria.",
    );

    await user.click(screen.getByRole("button", { name: /solicitar cotizaci.n/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/contact");
    expect(options.method).toBe("POST");

    const payload = JSON.parse(String(options.body)) as Record<string, string>;
    expect(payload.name).toBe("Carlos Perez");
    expect(payload.email).toBe("carlos@empresa.com");
    expect(payload.leadMode).toBe("activaciones");

    expect(await screen.findByText(/enviado exitosamente/i)).toBeInTheDocument();
  });

  it("renders conditional fields by mode (activaciones vs booking)", () => {
    const { rerender } = render(<LeadForm mode="activaciones" />);

    expect(screen.getByPlaceholderText(/ciudad de panam., col.n, etc./i)).toBeInTheDocument();
    expect(screen.getByText(/tipo de activaci.n/i)).toBeInTheDocument();

    rerender(<LeadForm mode="booking" />);

    expect(screen.queryByPlaceholderText(/ciudad de panam., col.n, etc./i)).not.toBeInTheDocument();
    expect(screen.queryByText(/tipo de activaci.n/i)).not.toBeInTheDocument();
    expect(screen.getByText(/tipo de talento/i)).toBeInTheDocument();
  });
});
