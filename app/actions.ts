"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "contactoemerald@proton.me";
// FROM_EMAIL: usa un dominio verificado en Resend.
// Si aún no tienes dominio verificado, usa onboarding@resend.dev solo para pruebas.
// Verificar en: https://resend.com/domains
const FROM_CONTACT = process.env.FROM_EMAIL || "Emerald <onboarding@resend.dev>";
const FROM_AGENDA  = process.env.FROM_EMAIL || "Emerald <onboarding@resend.dev>";

interface ContactFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  solucion: string;
  mensaje: string;
}

interface AgendaFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  preferencia: string;
  mensaje: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // 1. Email interno a Emerald
    const { error } = await resend.emails.send({
      from: FROM_CONTACT,
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
      console.error("Resend error (internal):", error.message);
      return { success: false, error: `No se pudo enviar: ${error.message}` };
    }

    // 2. Email de confirmación al usuario
    await resend.emails.send({
      from: FROM_CONTACT,
      to: [data.email],
      subject: `Recibimos tu mensaje, ${data.nombre.split(" ")[0]} 👋`,
      html: confirmationEmailHtml({
        nombre: data.nombre,
        tipo: "contacto",
      }),
    }).catch((e) => console.error("Confirmation email failed:", e));

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

export async function submitAgendaForm(data: AgendaFormData) {
  try {
    // 1. Email interno a Emerald
    const { error } = await resend.emails.send({
      from: FROM_AGENDA,
      to: [TO_EMAIL],
      subject: `Consulta estratégica: ${data.nombre}${data.empresa ? ` — ${data.empresa}` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">Nueva consulta estratégica</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Solicitud de agenda recibida desde el sitio web</p>
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
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Preferencia</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${escapeHtml(data.preferencia || "No especificada")}</td>
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
      console.error("Resend error (agenda internal):", error.message);
      return { success: false, error: `No se pudo enviar: ${error.message}` };
    }

    // 2. Confirmación al usuario
    await resend.emails.send({
      from: FROM_AGENDA,
      to: [data.email],
      subject: `Solicitud recibida — te contactamos pronto, ${data.nombre.split(" ")[0]} 🗓️`,
      html: confirmationEmailHtml({
        nombre: data.nombre,
        tipo: "agenda",
      }),
    }).catch((e) => console.error("Agenda confirmation email failed:", e));

    return { success: true };
  } catch {
    return { success: false, error: "Error inesperado. Por favor intenta de nuevo." };
  }
}

// ─── Template de email de confirmación al usuario ────────────────────────────
function confirmationEmailHtml({ nombre, tipo }: { nombre: string; tipo: "contacto" | "agenda" }) {
  const primerNombre = escapeHtml(nombre.split(" ")[0]);
  const isAgenda = tipo === "agenda";

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#030303;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <div style="max-width:560px;margin:40px auto;padding:0 20px;">

        <!-- Header con gradiente Emerald -->
        <div style="background:linear-gradient(135deg,#052e1c 0%,#020810 100%);border:1px solid #10b98130;border-radius:16px 16px 0 0;padding:40px 36px 32px;">
          <div style="display:inline-flex;align-items:center;gap:8px;background:#10b98115;border:1px solid #10b98130;border-radius:99px;padding:6px 14px;margin-bottom:24px;">
            <span style="width:6px;height:6px;border-radius:50%;background:#10b981;display:inline-block;box-shadow:0 0 8px #10b981;"></span>
            <span style="font-size:11px;color:#34d399;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Emerald · Agencia AI-first</span>
          </div>
          <h1 style="margin:0 0 10px;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;line-height:1.2;">
            ${isAgenda ? `Recibimos tu solicitud, ${primerNombre}.` : `Hola ${primerNombre}, tu mensaje llegó.`}
          </h1>
          <p style="margin:0;font-size:15px;color:#94a3b8;line-height:1.6;">
            ${isAgenda
              ? "Revisaremos tu solicitud de consulta estratégica y te escribiremos para confirmar el horario."
              : "Revisamos tu mensaje y te responderemos a la brevedad con la información que necesitas."}
          </p>
        </div>

        <!-- Cuerpo -->
        <div style="background:#0a0f1a;border:1px solid #10b98118;border-top:none;border-radius:0 0 16px 16px;padding:32px 36px;">

          <!-- Qué pasa ahora -->
          <p style="margin:0 0 20px;font-size:12px;color:#10b981;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Qué pasa ahora</p>
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:28px;">
            ${isAgenda ? `
              <div style="display:flex;gap:14px;align-items:flex-start;">
                <div style="width:28px;height:28px;min-width:28px;border-radius:8px;background:#10b98115;border:1px solid #10b98125;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#10b981;line-height:28px;text-align:center;">1</div>
                <div><p style="margin:0;font-size:14px;color:#e2e8f0;font-weight:500;">Revisamos tu solicitud</p><p style="margin:4px 0 0;font-size:13px;color:#64748b;">En las próximas horas revisamos la información que nos enviaste.</p></div>
              </div>
              <div style="display:flex;gap:14px;align-items:flex-start;">
                <div style="width:28px;height:28px;min-width:28px;border-radius:8px;background:#10b98115;border:1px solid #10b98125;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#10b981;line-height:28px;text-align:center;">2</div>
                <div><p style="margin:0;font-size:14px;color:#e2e8f0;font-weight:500;">Te confirmamos el horario</p><p style="margin:4px 0 0;font-size:13px;color:#64748b;">Recibirás otro email con el enlace de la llamada y la hora confirmada.</p></div>
              </div>
              <div style="display:flex;gap:14px;align-items:flex-start;">
                <div style="width:28px;height:28px;min-width:28px;border-radius:8px;background:#10b98115;border:1px solid #10b98125;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#10b981;line-height:28px;text-align:center;">3</div>
                <div><p style="margin:0;font-size:14px;color:#e2e8f0;font-weight:500;">Consulta estratégica — 30 min</p><p style="margin:4px 0 0;font-size:13px;color:#64748b;">Analizamos tu operación y diseñamos un plan concreto para tu empresa.</p></div>
              </div>` : `
              <div style="display:flex;gap:14px;align-items:flex-start;">
                <div style="width:28px;height:28px;min-width:28px;border-radius:8px;background:#10b98115;border:1px solid #10b98125;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#10b981;line-height:28px;text-align:center;">1</div>
                <div><p style="margin:0;font-size:14px;color:#e2e8f0;font-weight:500;">Revisamos tu mensaje</p><p style="margin:4px 0 0;font-size:13px;color:#64748b;">Habitualmente respondemos dentro de las próximas 24 horas hábiles.</p></div>
              </div>
              <div style="display:flex;gap:14px;align-items:flex-start;">
                <div style="width:28px;height:28px;min-width:28px;border-radius:8px;background:#10b98115;border:1px solid #10b98125;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#10b981;line-height:28px;text-align:center;">2</div>
                <div><p style="margin:0;font-size:14px;color:#e2e8f0;font-weight:500;">Te respondemos con un plan</p><p style="margin:4px 0 0;font-size:13px;color:#64748b;">Nada genérico. Una propuesta pensada específicamente para tu situación.</p></div>
              </div>`}
          </div>

          <!-- CTA WhatsApp -->
          <div style="background:#10b98108;border:1px solid #10b98120;border-radius:12px;padding:20px 22px;margin-bottom:28px;">
            <p style="margin:0 0 6px;font-size:13px;color:#94a3b8;">¿Necesitas respuesta inmediata?</p>
            <a href="https://wa.me/573239168300" style="font-size:14px;color:#10b981;font-weight:600;text-decoration:none;">Escríbenos por WhatsApp →</a>
          </div>

          <!-- Footer -->
          <div style="border-top:1px solid #ffffff0a;padding-top:20px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#334155;">
              <strong style="color:#64748b;">Emerald</strong> · Barranquilla, Colombia · AI-first
            </p>
            <p style="margin:6px 0 0;font-size:11px;color:#1e293b;">
              <a href="https://emerald-co.vercel.app" style="color:#10b98170;text-decoration:none;">emerald-co.vercel.app</a>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
