import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const fallbackTo = process.env.RESEND_TO ?? "contacto@hostpropanama.com";
const fromEmail =
  process.env.RESEND_FROM ?? "HostPro Panama <contacto@hostpropanama.com>";

// Validación server-side
const leadSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(8).max(20),
  eventType: z.string().min(3),
  date: z.string().optional(),
  message: z.string().min(10).max(1000),
});

// Email HTML profesional para el equipo
function getAdminEmailHTML(data: z.infer<typeof leadSchema>) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0a; color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%); border: 1px solid rgba(212, 178, 0, 0.2); border-radius: 16px; padding: 32px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="margin: 0; font-size: 28px; color: #d4b200; font-weight: 700;">✨ Nueva Solicitud de Staff</h1>
            <p style="margin: 8px 0 0; color: #888; font-size: 14px;">Recibida el ${new Date().toLocaleDateString('es-PA', { dateStyle: 'long' })}</p>
          </div>
          
          <div style="background: rgba(0, 0, 0, 0.4); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                  <strong style="color: #d4b200; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Cliente</strong>
                  <p style="margin: 4px 0 0; color: #f5f5f5; font-size: 16px;">${data.name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                  <strong style="color: #d4b200; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Empresa</strong>
                  <p style="margin: 4px 0 0; color: #f5f5f5; font-size: 16px;">${data.company}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                  <strong style="color: #d4b200; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
                  <p style="margin: 4px 0 0;"><a href="mailto:${data.email}" style="color: #4a9eff; text-decoration: none;">${data.email}</a></p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                  <strong style="color: #d4b200; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono / WhatsApp</strong>
                  <p style="margin: 4px 0 0;"><a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #25d366; text-decoration: none;">${data.phone}</a></p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                  <strong style="color: #d4b200; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Tipo de Evento</strong>
                  <p style="margin: 4px 0 0; color: #f5f5f5; font-size: 16px;">${data.eventType}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                  <strong style="color: #d4b200; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Fecha Tentativa</strong>
                  <p style="margin: 4px 0 0; color: #f5f5f5; font-size: 16px;">${data.date || 'No especificada'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <strong style="color: #d4b200; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje</strong>
                  <p style="margin: 8px 0 0; color: #f5f5f5; font-size: 15px; line-height: 1.6;">${data.message}</p>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="text-align: center; margin-top: 24px;">
            <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(data.name)}%2C%20recibimos%20tu%20solicitud%20para%20${encodeURIComponent(data.eventType)}" style="display: inline-block; background: #d4b200; color: #0a0a0a; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 14px;">Responder por WhatsApp</a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 24px; color: #666; font-size: 12px;">
          <p>HostPro Panamá - Staff Premium para Eventos Corporativos</p>
          <p style="margin: 4px 0;">📱 +507 6980-1194 | 📧 contacto@hostpropanama.com</p>
        </div>
      </div>
    </body>
  </html>
  `;
}

// Email de confirmación para el cliente
function getClientConfirmationHTML(name: string, company: string) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0a; color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%); border: 1px solid rgba(212, 178, 0, 0.2); border-radius: 16px; padding: 32px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 32px; color: #d4b200; font-weight: 700;">¡Solicitud Recibida!</h1>
          </div>
          
          <p style="margin: 0 0 16px; color: #f5f5f5; font-size: 16px; line-height: 1.6;">
            Hola <strong style="color: #d4b200;">${name}</strong>,
          </p>
          
          <p style="margin: 0 0 16px; color: #f5f5f5; font-size: 16px; line-height: 1.6;">
            Gracias por contactar a <strong>HostPro Panamá</strong>. Recibimos tu solicitud de staff para <strong>${company}</strong> y nuestro equipo la está revisando.
          </p>
          
          <div style="background: rgba(212, 178, 0, 0.1); border-left: 4px solid #d4b200; padding: 16px; margin: 24px 0; border-radius: 8px;">
            <p style="margin: 0; color: #d4b200; font-weight: 600; font-size: 15px;">⚡ Promesa de respuesta:</p>
            <p style="margin: 8px 0 0; color: #f5f5f5; font-size: 14px;">Te contactaremos en <strong>menos de 1 hora hábil</strong> para confirmar disponibilidad y enviar una propuesta personalizada.</p>
          </div>
          
          <p style="margin: 24px 0 16px; color: #f5f5f5; font-size: 16px; line-height: 1.6;">
            ¿Tienes una urgencia? Escríbenos directo por WhatsApp:
          </p>
          
          <div style="text-align: center; margin: 24px 0;">
            <a href="https://wa.me/50769801194?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20mi%20solicitud" style="display: inline-block; background: #25d366; color: #ffffff; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px;">📱 WhatsApp +507 6980-1194</a>
          </div>
          
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="margin: 0 0 12px; color: #888; font-size: 14px;"><strong style="color: #d4b200;">Lo que nos diferencia:</strong></p>
            <ul style="margin: 0; padding-left: 20px; color: #f5f5f5; font-size: 14px; line-height: 1.8;">
              <li>✅ Respuesta en menos de 1 hora</li>
              <li>✅ Talento verificado AAA</li>
              <li>✅ Supervisión en sitio</li>
              <li>✅ Uniformes y briefing incluidos</li>
            </ul>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 24px; color: #666; font-size: 12px;">
          <p><strong>HostPro Panamá</strong> - Staff Premium para Eventos Corporativos</p>
          <p style="margin: 8px 0;">📱 +507 6980-1194 | 📧 contacto@hostpropanama.com</p>
          <p style="margin: 8px 0;">📍 Panamá, Panamá | Cobertura Nacional</p>
          <p style="margin: 12px 0 0;"><a href="https://instagram.com/hostpropanama" style="color: #d4b200; text-decoration: none; margin: 0 8px;">Instagram</a> | <a href="https://tiktok.com/@hostpropanama" style="color: #d4b200; text-decoration: none; margin: 0 8px;">TikTok</a></p>
        </div>
      </div>
    </body>
  </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validación server-side
    const validationResult = leadSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: validationResult.error.issues },
        { status: 400 }
      );
    }
    
    const data = validationResult.data;

    // Enviar email al equipo de HostPro
    await resend.emails.send({
      from: fromEmail,
      to: [fallbackTo],
      replyTo: data.email,
      subject: `🎯 Nueva Solicitud: ${data.company} - ${data.eventType}`,
      html: getAdminEmailHTML(data),
    });

    // Enviar confirmación automática al cliente
    await resend.emails.send({
      from: fromEmail,
      to: [data.email],
      subject: `✅ Solicitud Recibida - HostPro Panamá`,
      html: getClientConfirmationHTML(data.name, data.company),
    });

    return NextResponse.json({ ok: true, message: "Solicitud enviada exitosamente" });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
