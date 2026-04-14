import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { TalentForm } from "@/components/forms";

describe("TalentForm", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  async function fillRequiredFields() {
    render(<TalentForm />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText("Nombre y apellido"), "Ana Gomez");
    await user.type(screen.getByPlaceholderText("+507 6980-1194"), "+50760000000");
    await user.type(screen.getByPlaceholderText("correo@ejemplo.com"), "ana@correo.com");
    await user.type(screen.getByPlaceholderText(/panam., col.n, david/i), "Panama");
    await user.type(screen.getByPlaceholderText(/azafata, host, modelo, brand ambassador/i), "Host");
    await user.type(screen.getByPlaceholderText(/espa.ol \/ ingl.s \/ franc.s/i), "Espanol e Ingles");

    return user;
  }

  it("shows portfolio validation error and prevents submission", async () => {
    const user = await fillRequiredFields();

    await user.type(
      screen.getByPlaceholderText("https://instagram.com/usuario o @usuario"),
      "perfil-invalido***",
    );

    await user.click(screen.getByRole("button", { name: /aplicar ahora/i }));

    expect(await screen.findByText(/url completa/i)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("submits valid talent application to /api/apply", async () => {
    fetchMock.mockResolvedValue({ ok: true });

    const user = await fillRequiredFields();
    await user.type(
      screen.getByPlaceholderText("https://instagram.com/usuario o @usuario"),
      "@anagomez",
    );

    await user.click(screen.getByRole("button", { name: /aplicar ahora/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/apply");
    expect(options.method).toBe("POST");

    const payload = JSON.parse(String(options.body)) as Record<string, string>;
    expect(payload.name).toBe("Ana Gomez");
    expect(payload.portfolio).toBe("@anagomez");

    expect(await screen.findByText(/enviado exitosamente/i)).toBeInTheDocument();
  });
});
