import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fallbackTo = process.env.RESEND_TO ?? "info@hostpropanama.com";
const fromEmail = process.env.RESEND_FROM ?? "HostPro Panama <info@hostpropanama.com>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, eventType, date, message } = body;

    await resend.emails.send({
      from: fromEmail,
      to: [fallbackTo],
      replyTo: email,
      subject: `Nueva solicitud de staff - ${company ?? "sin empresa"}`,
      text: [
        `Nombre: ${name}`,
        `Empresa: ${company}`,
        `Email: ${email}`,
        `Teléfono: ${phone}`,
        `Tipo de evento: ${eventType}`,
        `Fecha: ${date ?? "No indicada"}`,
        `Mensaje: ${message}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);
    return NextResponse.json(
      { error: "No se pudo enviar el formulario" },
      { status: 500 },
    );
  }
}
