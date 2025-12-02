import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fallbackTo = process.env.RESEND_TO ?? "contacto@hostpropamama.com";
const fromEmail =
  process.env.RESEND_FROM ?? "HostPro Panama <contacto@hostpropamama.com>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, role, languages, portfolio } = body;

    await resend.emails.send({
      from: fromEmail,
      to: [fallbackTo],
      replyTo: email,
      subject: `Nueva aplicacion de talento - ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Telefono: ${phone}`,
        `Ciudad: ${city}`,
        `Rol: ${role}`,
        `Idiomas: ${languages}`,
        `Portafolio/IG: ${portfolio || "No proporcionado"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("TALENT_FORM_ERROR", error);
    return NextResponse.json(
      { error: "No se pudo enviar la aplicacion" },
      { status: 500 },
    );
  }
}
