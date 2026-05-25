"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Bot, CheckCircle2 } from "lucide-react";
import { useChat } from "@/components/chat-context";

// Tipos
interface Mensaje {
  role: "user" | "assistant";
  content: string;
}

// Pasos del flujo de agenda
type AgendaStep = "idle" | "nombre" | "email" | "telefono" | "servicio" | "confirmar" | "enviando" | "listo";

interface DatosAgenda {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
}

const MENSAJE_BIENVENIDA = "Hola, soy Karl, el asistente de Emerald. ¿En qué puedo ayudarte hoy?";

// Palabras clave que activan el flujo de agenda
const PALABRAS_AGENDA = ["agendar", "agenda", "cita", "llamada", "reunión", "reunion", "contactar", "hablar con", "quiero hablar", "quiero una llamada", "solicitar", "cotización", "cotizacion"];

const detectaAgenda = (texto: string) =>
  PALABRAS_AGENDA.some(p => texto.toLowerCase().includes(p));

export function ChatWidget() {
  const { abierto, setAbierto } = useChat();

  const [inputValue, setInputValue] = useState("");
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Estado del flujo de agenda
  const [agendaStep, setAgendaStep] = useState<AgendaStep>("idle");
  const [datosAgenda, setDatosAgenda] = useState<DatosAgenda>({ nombre: "", email: "", telefono: "", servicio: "" });
  const [agendaCompletada, setAgendaCompletada] = useState(false);
  const agendaCompletadaRef = useRef(false); // ref para closures async

  const mensajesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll automático
  useEffect(() => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
    }
  }, [mensajes]);

  // Focus al abrir
  useEffect(() => {
    if (abierto) setTimeout(() => inputRef.current?.focus(), 200);
  }, [abierto]);

  // Agregar mensaje del bot
  const agregarMensajeBot = (content: string) => {
    setMensajes(prev => [...prev, { role: "assistant", content }]);
  };

  // Agregar mensaje del usuario
  const agregarMensajeUsuario = (content: string) => {
    setMensajes(prev => [...prev, { role: "user", content }]);
  };

  // Iniciar flujo de agenda
  const iniciarAgenda = () => {
    setAgendaStep("nombre");
    agregarMensajeBot("Perfecto. Voy a tomar tus datos para coordinar la llamada.\n\n¿Cuál es tu nombre completo?");
  };

  // Procesar respuesta según el paso actual del flujo de agenda
  const procesarPasoAgenda = async (texto: string) => {
    agregarMensajeUsuario(texto);

    switch (agendaStep) {
      case "nombre": {
        const nombre = texto.trim();
        setDatosAgenda(prev => ({ ...prev, nombre }));
        setAgendaStep("email");
        setTimeout(() => agregarMensajeBot(`Gracias, ${nombre.split(" ")[0]}. ¿Cuál es tu correo electrónico?`), 400);
        break;
      }
      case "email": {
        const email = texto.trim().toLowerCase();
        if (!email.includes("@") || !email.includes(".")) {
          setTimeout(() => agregarMensajeBot("Ese correo no parece válido. ¿Puedes revisarlo?"), 300);
          return;
        }
        setDatosAgenda(prev => ({ ...prev, email }));
        setAgendaStep("telefono");
        setTimeout(() => agregarMensajeBot("¿Tienes un número de WhatsApp donde podamos contactarte? (Si no, escribe 'no')"), 400);
        break;
      }
      case "telefono": {
        const telefono = texto.trim().toLowerCase() === "no" ? "" : texto.trim();
        setDatosAgenda(prev => ({ ...prev, telefono }));
        setAgendaStep("servicio");
        setTimeout(() => agregarMensajeBot(
          "¿En qué servicio estás interesado?\n\n1. Presencia Digital Premium (web, branding, SEO)\n2. Chatbot WhatsApp con IA\n3. Automatización Inteligente\n4. Aún no sé, quiero más información"
        ), 400);
        break;
      }
      case "servicio": {
        const opciones: Record<string, string> = {
          "1": "Presencia Digital Premium",
          "2": "Chatbot WhatsApp con IA",
          "3": "Automatización Inteligente",
          "4": "Aún no sé, quiero más información",
        };
        const servicio = opciones[texto.trim()] || texto.trim();
        const nuevoDatos = { ...datosAgenda, servicio };
        setDatosAgenda(nuevoDatos);
        setAgendaStep("confirmar");
        setTimeout(() => agregarMensajeBot(
          `Perfecto. Confirmemos los datos:\n\n` +
          `📋 **Nombre:** ${nuevoDatos.nombre}\n` +
          `📧 **Email:** ${nuevoDatos.email}\n` +
          `${nuevoDatos.telefono ? `📱 **Teléfono:** ${nuevoDatos.telefono}\n` : ""}` +
          `🎯 **Servicio:** ${servicio}\n\n` +
          `¿Todo correcto? Escribe **sí** para confirmar o **no** para corregir.`
        ), 400);
        break;
      }
      case "confirmar": {
        const respuesta = texto.trim().toLowerCase();
        if (respuesta === "sí" || respuesta === "si" || respuesta === "s" || respuesta === "yes") {
          setAgendaStep("enviando");
          setTimeout(() => agregarMensajeBot("Enviando tu solicitud..."), 300);
          await enviarSolicitud();
        } else {
          // Reiniciar flujo
          setAgendaStep("nombre");
          setDatosAgenda({ nombre: "", email: "", telefono: "", servicio: "" });
          setTimeout(() => agregarMensajeBot("Empecemos de nuevo. ¿Cuál es tu nombre completo?"), 400);
        }
        break;
      }
    }
  };

  // Enviar solicitud de agenda
  const enviarSolicitud = async () => {
    try {
      const res = await fetch("/api/agenda-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...datosAgenda, conversacion: mensajes }),
      });
      if (!res.ok) throw new Error("Error al enviar");

      setAgendaStep("listo");
      setAgendaCompletada(true);
      agendaCompletadaRef.current = true; // sincrónico, sin timing issues
      setTimeout(() => agregarMensajeBot(
        `✅ ¡Listo! Tu solicitud fue enviada.\n\nNuestro equipo se pondrá en contacto en menos de 24 horas. También te enviamos una confirmación a **${datosAgenda.email}**.\n\n¿Tienes alguna otra pregunta mientras tanto?`
      ), 500);
      // Resetear datos pero mantener chat activo
      setTimeout(() => {
        setAgendaStep("idle");
        setDatosAgenda({ nombre: "", email: "", telefono: "", servicio: "" });
      }, 1000);
    } catch {
      setAgendaStep("confirmar");
      setTimeout(() => agregarMensajeBot("Hubo un error al enviar tu solicitud. ¿Intentamos de nuevo? Escribe 'sí' para confirmar."), 400);
    }
  };

  // Manejar envío principal
  const handleEnviar = async (e: React.FormEvent) => {
    e.preventDefault();
    const texto = inputValue.trim();
    if (!texto || cargando || agendaStep === "enviando") return;
    setInputValue("");
    setError(null);

    // Si estamos en un paso del flujo de agenda
    if (agendaStep !== "idle" && agendaStep !== "listo") {
      procesarPasoAgenda(texto);
      return;
    }

    // Detectar si el usuario quiere agendar (solo si no ha agendado ya)
    if (detectaAgenda(texto) && !agendaCompletadaRef.current) {
      agregarMensajeUsuario(texto);
      iniciarAgenda();
      return;
    }

    // Chat normal con IA
    const nuevosMensajes: Mensaje[] = [...mensajes, { role: "user", content: texto }];
    setMensajes(nuevosMensajes);
    setCargando(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nuevosMensajes, agendaCompletada: agendaCompletadaRef.current }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Error ${res.status}`);

      // Detectar marcador oculto de agenda
      const textoLimpio = (data.text as string).replace("[INICIAR_AGENDA]", "").trim();
      const debeIniciarAgenda = (data.text as string).includes("[INICIAR_AGENDA]");

      setMensajes(prev => [...prev, { role: "assistant", content: textoLimpio }]);

      if (debeIniciarAgenda && !agendaCompletadaRef.current) {
        setTimeout(() => iniciarAgenda(), 700);
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  // Placeholder dinámico según el paso
  const getPlaceholder = () => {
    switch (agendaStep) {
      case "nombre": return "Escribe tu nombre completo...";
      case "email": return "tu@correo.com";
      case "telefono": return "+57 300 000 0000 (o escribe 'no')";
      case "servicio": return "Escribe 1, 2, 3 o 4...";
      case "confirmar": return "Escribe 'sí' para confirmar...";
      default: return "Escribe tu pregunta...";
    }
  };

  return (
    <AnimatePresence>
      {abierto && (
        // Panel posicionado sobre el botón del Footer (bottom-8 left-8 = 32px)
        // h-12 (48px) + 32px + 8px gap = 88px → bottom-[88px]
        <div className="fixed bottom-[88px] left-4 sm:left-8 z-50">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col overflow-hidden"
            style={{
              width: "min(340px, calc(100vw - 32px))",
              height: "480px",
              background: "rgba(6, 10, 18, 0.97)",
              border: "1px solid rgba(255, 255, 255, 0.07)",
              borderRadius: "12px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(16, 185, 129, 0.06), 0 25px 50px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(16,185,129,0.05)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "6px" }}>
                  {agendaStep === "listo" ? <CheckCircle2 size={14} style={{ color: "#10b981" }} /> : <Bot size={14} style={{ color: "#10b981" }} />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {agendaStep !== "idle" && agendaStep !== "listo" ? "Agendando llamada" : "Karl · Emerald"}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" style={{ boxShadow: "0 0 6px #10b981" }} />
                    <span className="text-[10px] text-gray-500">
                      {agendaStep !== "idle" && agendaStep !== "listo"
                        ? `Paso ${["nombre","email","telefono","servicio","confirmar","enviando"].indexOf(agendaStep) + 1} de 5`
                        : "En línea"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {agendaStep !== "idle" && agendaStep !== "listo" && (
                  <button onClick={() => { setAgendaStep("idle"); setDatosAgenda({ nombre: "", email: "", telefono: "", servicio: "" }); }} className="text-gray-600 hover:text-gray-400 text-xs transition-colors">cancelar</button>
                )}
                <button onClick={() => setAbierto(false)} className="text-gray-500 hover:text-white transition-colors p-1">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Área de mensajes */}
            <div ref={mensajesRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: "none" }}>
              <MensajeBot texto={MENSAJE_BIENVENIDA} />

              {mensajes.map((msg, i) => (
                msg.role === "assistant"
                  ? <MensajeBot key={i} texto={msg.content} />
                  : <MensajeUsuario key={i} texto={msg.content} />
              ))}

              {(cargando || agendaStep === "enviando") && (
                <div className="flex items-center gap-2">
                  <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "4px" }} className="w-6 h-6 flex items-center justify-center">
                    <Bot size={12} style={{ color: "#10b981" }} />
                  </div>
                  <div className="flex gap-1">
                    {[0,1,2].map(j => (
                      <motion.div key={j} className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50"
                        animate={{ opacity: [0.3,1,0.3] }} transition={{ duration: 1, repeat: Infinity, delay: j * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {error && <p className="text-xs text-red-400/70 text-center py-2">{error}</p>}
            </div>

            {/* Input */}
            <div className="px-3 py-3 flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <form onSubmit={handleEnviar} className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder={getPlaceholder()}
                  disabled={cargando || agendaStep === "enviando"}
                  className="flex-1 px-3 py-2 text-sm text-white placeholder-gray-600 border rounded-lg focus:outline-none transition-all disabled:opacity-50"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: agendaStep !== "idle" ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.07)" }}
                  autoComplete="off"
                  autoCorrect="off"
                />
                <button
                  type="submit"
                  disabled={cargando || agendaStep === "enviando" || !inputValue.trim()}
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg transition-all disabled:opacity-30"
                  style={{ background: inputValue.trim() ? "#10b981" : "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
                >
                  {cargando || agendaStep === "enviando"
                    ? <Loader2 size={14} className="animate-spin text-white/70" />
                    : <Send size={14} className="text-white" />
                  }
                </button>
              </form>
              {agendaStep !== "idle" && agendaStep !== "listo" && (
                <p className="text-[10px] text-[#10b981]/50 text-center mt-1.5">Proceso de agendamiento activo</p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function MensajeBot({ texto }: { texto: string }) {
  const renderTexto = (t: string) => {
    return t.split("\n").map((linea, i) => {
      const partes = linea.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {partes.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: "#10b981" }}>{p}</strong> : p)}
          {i < t.split("\n").length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="flex items-start gap-2">
      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "4px" }}>
        <Bot size={12} style={{ color: "#10b981" }} />
      </div>
      <div className="px-3 py-2 text-sm text-gray-200 leading-relaxed max-w-[85%]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0 8px 8px 8px" }}>
        {renderTexto(texto)}
      </div>
    </div>
  );
}

function MensajeUsuario({ texto }: { texto: string }) {
  return (
    <div className="flex justify-end">
      <div className="px-3 py-2 text-sm text-white leading-relaxed max-w-[85%]" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: "8px 0 8px 8px" }}>
        {texto}
      </div>
    </div>
  );
}
