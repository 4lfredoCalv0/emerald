"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "contactoemerald@proton.me";

interface ContactFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  solucion: string;
  mensaje: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const { error } = await resend.emails.send({
      from: "Emerald Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      subject: `Nuevo contacto: ${data.nombre}${data.empresa ? ` — ${data.empresa}` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">Nuevo contacto Emerald</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Solicitud recibida desde el sitio web</p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 120px; font-weight: 500;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">${escapeHtml(data.nombre)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Empresa</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${escapeHtml(data.empresa || "No especificada")}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  <a href="mailto:${escapeHtml(data.email)}" style="color: #10b981; text-decoration: none;">${escapeHtml(data.email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Teléfono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${escapeHtml(data.telefono || "No especificado")}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Solución</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${escapeHtml(data.solucion || "No seleccionada")}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 500; vertical-align: top;">Mensaje</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px; line-height: 1.6;">${escapeHtml(data.mensaje || "Sin mensaje adicional")}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center;">
              <a href="mailto:${escapeHtml(data.email)}" style="display: inline-block; background: #10b981; color: #ffffff; padding: 10px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Responder a ${escapeHtml(data.nombre)}</a>
            </div>
          </div>

          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
            Emerald · Barranquilla, Colombia
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error.message);
      return { success: false, error: `No se pudo enviar: ${error.message}` };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Error inesperado. Por favor intenta de nuevo." };
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
