import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { sendMock } = vi.hoisted(() => ({
  sendMock: vi.fn(),
}));

vi.mock("resend", () => {
  return {
    Resend: class {
      emails = {
        send: sendMock,
      };

      constructor(_apiKey: string) {}
    },
  };
});

import { GET, POST } from "./route";

const validPayload = {
  name: "Ana Gomez",
  email: "ana@correo.com",
  phone: "+50760000000",
  city: "Panama",
  role: "Brand Ambassador",
  languages: "Espanol e Ingles",
  portfolio: "@anagomez",
};

function makePostRequest(payload: unknown) {
  return new Request("http://localhost/api/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function makeRawPostRequest(rawBody: string) {
  return new Request("http://localhost/api/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: rawBody,
  });
}

describe("/api/apply route contract", () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = "test_resend_key";
    sendMock.mockReset();
    sendMock.mockResolvedValue({ id: "mail_456" });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("accepts valid payload and returns expected success contract", async () => {
    expect.assertions(3);
    const response = await POST(makePostRequest(validPayload));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      ok: true,
      message: "Aplicación enviada exitosamente",
    });
    expect(sendMock).toHaveBeenCalledTimes(2);
  });

  it("rejects invalid payload with 400 and validation details", async () => {
    expect.assertions(5);
    const response = await POST(
      makePostRequest({
        ...validPayload,
        email: "correo-invalido",
      }),
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toMatchObject({
      error: "Datos inválidos",
      details: expect.any(Array),
    });
    expect(body.details.length).toBeGreaterThan(0);
    expect(body).not.toHaveProperty("ok", true);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects missing required fields with 400", async () => {
    expect.assertions(4);
    const { role, ...payloadWithoutRole } = validPayload;
    void role;

    const response = await POST(makePostRequest(payloadWithoutRole));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Datos inválidos");
    expect(body.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          path: expect.arrayContaining(["role"]),
        }),
      ]),
    );
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("keeps unsupported method contract as 405-style JSON response shape", async () => {
    expect.assertions(4);

    const response =
      typeof GET === "function"
        ? await GET(new Request("http://localhost/api/apply", { method: "GET" }))
        : new Response(JSON.stringify({ error: "Method Not Allowed" }), {
            status: 405,
            headers: { "Content-Type": "application/json" },
          });
    const body = await response.json();

    expect(response.status).toBe(405);
    expect(body).toMatchObject({
      error: expect.any(String),
    });
    expect(GET).toBeUndefined();
    expect(typeof POST).toBe("function");
  });

  it("returns stable error format on provider/server failure", async () => {
    expect.assertions(4);
    sendMock.mockRejectedValueOnce(new Error("resend timeout"));

    const response = await POST(makePostRequest(validPayload));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toMatchObject({
      error: expect.any(String),
    });
    expect(body).not.toHaveProperty("ok", true);
    expect(body).not.toHaveProperty("details");
  });

  it("returns 500 with stable error contract when RESEND_API_KEY is missing", async () => {
    expect.assertions(4);
    delete process.env.RESEND_API_KEY;

    const response = await POST(makePostRequest(validPayload));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toMatchObject({
      error: expect.any(String),
    });
    expect(body).not.toHaveProperty("ok", true);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects empty JSON object body with 400 validation contract", async () => {
    expect.assertions(5);
    const response = await POST(makePostRequest({}));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toMatchObject({
      error: "Datos inválidos",
      details: expect.any(Array),
    });
    expect(body.details.length).toBeGreaterThan(0);
    expect(body).not.toHaveProperty("ok", true);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects required fields set as empty strings with 400", async () => {
    expect.assertions(4);
    const response = await POST(
      makePostRequest({
        ...validPayload,
        name: "",
        role: "",
        city: "",
      }),
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Datos inválidos");
    expect(body.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: expect.arrayContaining(["name"]) }),
        expect.objectContaining({ path: expect.arrayContaining(["role"]) }),
        expect.objectContaining({ path: expect.arrayContaining(["city"]) }),
      ]),
    );
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects malformed payload shape (array) with 400", async () => {
    expect.assertions(4);
    const response = await POST(makePostRequest([validPayload]));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toMatchObject({
      error: "Datos inválidos",
      details: expect.any(Array),
    });
    expect(body.details.length).toBeGreaterThan(0);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("returns 500 and stable JSON when request body is malformed JSON", async () => {
    expect.assertions(4);
    const response = await POST(makeRawPostRequest("{\"name\":"));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toMatchObject({
      error: expect.any(String),
    });
    expect(body).not.toHaveProperty("ok", true);
    expect(sendMock).not.toHaveBeenCalled();
  });
});
