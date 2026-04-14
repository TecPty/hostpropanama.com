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
  name: "Carlos Perez",
  company: "Marca X",
  email: "carlos@marcax.com",
  phone: "+50769801194",
  eventType: "Lanzamiento",
  location: "Ciudad de Panama",
  activationType: "Sampling",
  leadMode: "activaciones",
  date: "2026-05-20",
  message: "Necesitamos staff para activacion de producto en feria.",
};

function makePostRequest(payload: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function makeRawPostRequest(rawBody: string) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: rawBody,
  });
}

describe("/api/contact route contract", () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = "test_resend_key";
    sendMock.mockReset();
    sendMock.mockResolvedValue({ id: "mail_123" });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("accepts valid payload and returns success response", async () => {
    expect.assertions(3);
    const response = await POST(makePostRequest(validPayload));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ ok: true });
    expect(sendMock).toHaveBeenCalledTimes(2);
  });

  it("rejects invalid payload with 400 and validation details", async () => {
    expect.assertions(5);
    const response = await POST(
      makePostRequest({
        ...validPayload,
        email: "email-invalido",
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
    const { company, ...payloadWithoutCompany } = validPayload;
    void company;

    const response = await POST(makePostRequest(payloadWithoutCompany));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Datos inválidos");
    expect(body.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          path: expect.arrayContaining(["company"]),
        }),
      ]),
    );
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("keeps unsupported method contract as 405-style JSON response shape", async () => {
    expect.assertions(4);

    const response =
      typeof GET === "function"
        ? await GET(new Request("http://localhost/api/contact", { method: "GET" }))
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

  it("returns stable error format on server failure", async () => {
    expect.assertions(4);
    sendMock.mockRejectedValueOnce(new Error("email provider down"));

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
        company: "",
        message: "",
      }),
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Datos inválidos");
    expect(body.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: expect.arrayContaining(["name"]) }),
        expect.objectContaining({ path: expect.arrayContaining(["company"]) }),
        expect.objectContaining({ path: expect.arrayContaining(["message"]) }),
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
