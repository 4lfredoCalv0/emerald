import { Resend } from "resend";
import { NextRequest } from "next/server";
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";

const resend = new Resend(process.env.RESEND_API_KEY);
const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
const EQUIPO_EMAIL = "contactoemerald@proton.me";
const FROM = process.env.FROM_EMAIL || "Emerald <onboarding@resend.dev>";

// ID de la base de datos de Leads en Notion
const NOTION_DB_ID = "a2f11f32-b585-4a77-a672-7532becf8077";

// Generar notas de la conversación usando Groq
async function generarNotas(conversacion: Array<{ role: string; content: string }>): Promise<string> {
  if (!conversacion || conversacion.length === 0) return "";

  try {
    // Filtrar mensajes relevantes (excluir el flujo de agendamiento)
    const FRASES_AGENDA = [
      "Voy a tomar tus datos",
      "¿Cuál es tu nombre completo?",
      "¿Cuál es tu correo electrónico?",
      "¿Tienes un número de WhatsApp",
      "¿En qué servicio estás interesado?",
      "Confirmemos los datos",
      "¿Todo correcto?",
      "Enviando tu solicitud",
      "Tu solicitud fue enviada",
      "Presencia Digital Premium",
      "Chatbot WhatsApp con IA",
      "Automatización Inteligente",
      "Aún no sé",
    ];

    const mensajesFiltrados = conversacion.filter(
      m => !FRASES_AGENDA.some(frase => m.content.includes(frase))
    );

    if (mensajesFiltrados.length === 0) return "";

    const conversacionTexto = mensajesFiltrados
      .map(m => `${m.role === "user" ? "Cliente" : "Asistente"}: ${m.content}`)
      .join("\n");

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      messages: [
        {
          role: "user",
          content: `Eres un asistente de ventas. Basado en esta conversación de chat con un lead, escribe una nota breve (máximo 3 oraciones) para el equipo de ventas de Emerald. Incluye: qué busca el cliente, contexto relevante de su negocio o situación, y cualquier detalle útil para la llamada. Escribe en español, en tercera persona, de forma directa y práctica. Si la conversación no tiene contexto útil, escribe solo: "Sin contexto adicional."\n\nConversación:\n${conversacionTexto}`,
        },
      ],
    });

    return text.trim();
  } catch (err) {
    console.error("Error generando notas:", err);
    return "";
  }
}

// Guardar lead en Notion
async function guardarEnNotion(datos: {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  notas: string;
}) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return; // Silencioso si no hay token aún

  const servicioNormalizado = datos.servicio.includes("Presencia")
    ? "Presencia Digital Premium"
    : datos.servicio.includes("Chatbot") || datos.servicio.includes("WhatsApp")
    ? "Chatbot WhatsApp con IA"
    : datos.servicio.includes("Automatiz")
    ? "Automatización Inteligente"
    : "Sin definir";

  try {
    await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DB_ID },
        properties: {
          Nombre: { title: [{ text: { content: datos.nombre } }] },
          Email: { email: datos.email },
          Teléfono: datos.telefono ? { phone_number: datos.telefono } : undefined,
          "Servicio de interés": { select: { name: servicioNormalizado } },
          Estado: { select: { name: "Nuevo" } },
          Fuente: { select: { name: "Chatbot Web" } },
          ...(datos.notas
            ? { Notas: { rich_text: [{ text: { content: datos.notas } }] } }
            : {}),
        },
      }),
    });
  } catch (err) {
    console.error("Error guardando en Notion:", err);
    // No fallar el endpoint si Notion falla
  }
}

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, telefono, servicio, conversacion } = await req.json();

    if (!nombre || !email) {
      return Response.json({ error: "Nombre y email son requeridos" }, { status: 400 });
    }

    const primerNombre = nombre.split(" ")[0];

    // Generar notas de la conversación (paralelo a emails)
    const notas = await generarNotas(conversacion || []);

    // Guardar en Notion con notas (sin bloquear si falla)
    guardarEnNotion({ nombre, email, telefono: telefono || "", servicio: servicio || "", notas });

    // Email interno al equipo
    await resend.emails.send({
      from: FROM,
      to: [EQUIPO_EMAIL],
      subject: `🗓 Nueva solicitud de llamada — ${nombre}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #030303; color: #fff; padding: 40px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid rgba(255,255,255,0.07);">
          <div style="background: #10b981; padding: 4px 12px; border-radius: 4px; display: inline-block; margin-bottom: 24px;">
            <span style="color: #000; font-size: 12px; font-weight: 700; letter-spacing: 0.1em;">NUEVA SOLICITUD — CHATBOT WEB</span>
          </div>
          <h2 style="color: #fff; margin: 0 0 24px; font-size: 24px;">${nombre} quiere hablar</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6b7280; font-size: 13px; width: 160px;">Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #fff; font-size: 14px;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px;"><a href="mailto:${email}" style="color: #10b981;">${email}</a></td>
            </tr>
            ${telefono ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6b7280; font-size: 13px;">WhatsApp</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #fff; font-size: 14px;"><a href="https://wa.me/${telefono.replace(/\D/g,'')}" style="color: #10b981;">${telefono}</a></td>
            </tr>` : ""}
            ${servicio ? `<tr>
              <td style="padding: 12px 0; ${notas ? 'border-bottom: 1px solid rgba(255,255,255,0.07);' : ''} color: #6b7280; font-size: 13px;">Interés</td>
              <td style="padding: 12px 0; ${notas ? 'border-bottom: 1px solid rgba(255,255,255,0.07);' : ''} color: #fff; font-size: 14px;">${servicio}</td>
            </tr>` : ""}
            ${notas ? `<tr>
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Notas del chat</td>
              <td style="padding: 12px 0; color: #9ca3af; font-size: 13px; line-height: 1.6; font-style: italic;">${notas}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 28px; display: flex; gap: 12px;">
            <a href="mailto:${email}" style="display: inline-block; background: #10b981; color: #000; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;">Responder por email</a>
            ${telefono ? `<a href="https://wa.me/${telefono.replace(/\D/g,'')}" style="display: inline-block; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.3); padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;">Abrir WhatsApp</a>` : ""}
          </div>
          <p style="margin-top: 24px; color: #374151; font-size: 12px;">También está guardado en <strong style="color: #6b7280;">Notion → D. Clientes & Propuestas → Solicitudes de Llamada</strong></p>
        </div>
      `,
    });

    // Email de bienvenida al cliente
    await resend.emails.send({
      from: FROM,
      to: [email],
      subject: `Bienvenido a Emerald, ${primerNombre} — tu solicitud está en camino`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background: #030303; font-family: 'Inter', -apple-system, sans-serif;">
          <div style="max-width: 560px; margin: 0 auto; padding: 48px 24px;">

            <!-- Logo / marca -->
            <div style="margin-bottom: 40px;">
              <span style="font-size: 20px; font-weight: 700; color: #10b981; letter-spacing: -0.02em;">EMERALD</span>
            </div>

            <!-- Hero -->
            <div style="background: linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(6,182,212,0.04) 100%); border: 1px solid rgba(16,185,129,0.15); border-radius: 12px; padding: 36px; margin-bottom: 32px;">
              <p style="color: #10b981; font-size: 12px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 12px;">Solicitud recibida</p>
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0 0 16px; line-height: 1.2;">
                Hola, ${primerNombre}.<br>Ya eres parte de la familia Emerald.
              </h1>
              <p style="color: #9ca3af; font-size: 15px; line-height: 1.7; margin: 0;">
                Recibimos tu solicitud. Nuestro equipo la revisará y te contactará en menos de <strong style="color: #fff;">24 horas</strong> para coordinar la llamada en el horario que mejor te funcione.
              </p>
            </div>

            <!-- Qué esperar -->
            <div style="margin-bottom: 32px;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 16px;">Lo que sigue</p>
              <div style="display: flex; flex-direction: column; gap: 0;">
                ${[
                  ["01", "Revisamos tu solicitud", "Alfredo o José Carlos leen tu mensaje y preparan la conversación."],
                  ["02", "Te contactamos", "En menos de 24 horas, por email o WhatsApp según prefieras."],
                  ["03", "Llamada estratégica", "30 minutos para entender tu negocio y diseñar la solución correcta."],
                ].map(([num, titulo, desc], i) => `
                <div style="display: flex; gap: 16px; padding: 16px 0; ${i < 2 ? 'border-bottom: 1px solid rgba(255,255,255,0.05);' : ''}">
                  <div style="flex-shrink: 0; width: 28px; height: 28px; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #10b981; font-size: 11px; font-weight: 700;">${num}</span>
                  </div>
                  <div>
                    <p style="color: #fff; font-size: 14px; font-weight: 600; margin: 0 0 4px;">${titulo}</p>
                    <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.5;">${desc}</p>
                  </div>
                </div>`).join("")}
              </div>
            </div>

            <!-- CTA WhatsApp -->
            <div style="text-align: center; margin-bottom: 40px;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 16px;">¿Necesitas respuesta inmediata?</p>
              <a href="https://wa.me/573239168300?text=Hola%2C%20soy%20${encodeURIComponent(primerNombre)}%20y%20acabo%20de%20solicitar%20una%20llamada%20con%20Emerald."
                style="display: inline-block; background: #10b981; color: #000; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 700;">
                Escríbenos por WhatsApp
              </a>
            </div>

            <!-- Datos confirmados -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 20px; margin-bottom: 32px;">
              <p style="color: #6b7280; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 12px;">Datos de tu solicitud</p>
              <p style="color: #9ca3af; font-size: 13px; margin: 0; line-height: 1.8;">
                <strong style="color: #fff;">Nombre:</strong> ${nombre}<br>
                <strong style="color: #fff;">Email:</strong> ${email}<br>
                ${telefono ? `<strong style="color: #fff;">Teléfono:</strong> ${telefono}<br>` : ""}
                ${servicio ? `<strong style="color: #fff;">Servicio:</strong> ${servicio}` : ""}
              </p>
            </div>

            <!-- Footer -->
            <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 24px; text-align: center;">
              <p style="color: #374151; font-size: 12px; margin: 0 0 8px;">
                <a href="https://emerald-co.vercel.app" style="color: #10b981; text-decoration: none;">emerald-co.vercel.app</a>
                &nbsp;·&nbsp;
                <a href="https://www.instagram.com/ia.emerald" style="color: #6b7280; text-decoration: none;">@ia.emerald</a>
                &nbsp;·&nbsp;
                <span style="color: #374151;">Barranquilla, Colombia</span>
              </p>
              <p style="color: #1f2937; font-size: 11px; margin: 0;">Diseño intencional. Tecnología moderna. Resultados medibles.</p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Error en agenda-chat:", msg);
    return Response.json({ error: msg }, { status: 500 });
  }
}
