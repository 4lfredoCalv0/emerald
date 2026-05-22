"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCheck } from "lucide-react";

// ─── Conversation sequence ─────────────────────────────────────────────────
// type: "user" | "typing" | "bot"
const CONVERSATION: Array<{
  id: number;
  type: "user" | "typing" | "bot";
  text?: string;
  delay: number;
}> = [
  { id: 1,  type: "user",   text: "Hola, quiero info sobre sus planes",  delay: 0 },
  { id: 2,  type: "typing", delay: 800 },
  { id: 3,  type: "bot",    text: "¡Hola! Soy Aria, asistente de Emerald. ¿Qué necesitas?", delay: 1800 },
  { id: 4,  type: "user",   text: "¿Cuánto cuesta el chatbot?", delay: 3200 },
  { id: 5,  type: "typing", delay: 4000 },
  { id: 6,  type: "bot",    text: "Tenemos planes desde $49/mes. ¿Te agendo una llamada?", delay: 5200 },
  { id: 7,  type: "user",   text: "Sí, mañana a las 10am", delay: 6600 },
  { id: 8,  type: "typing", delay: 7400 },
  { id: 9,  type: "bot",    text: "¡Perfecto! Reservado para mañana 10am. Te confirmo por email 🤝", delay: 8400 },
];

const LOOP_DURATION = 11000;
const ACCENT = "#06b6d4";

// ─── Typing indicator ────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-end gap-1.5 px-4 py-3" style={{
      background: "rgba(6,182,212,0.1)",
      border: "1px solid rgba(6,182,212,0.2)",
      borderRadius: "16px 16px 16px 4px",
      display: "inline-flex",
      maxWidth: "72px",
    }}>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: ACCENT }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─── Message bubble ───────────────────────────────────────────────────────
function Bubble({ msg }: { msg: typeof CONVERSATION[number] }) {
  const isUser = msg.type === "user";
  const isTyping = msg.type === "typing";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && !isTyping && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 self-end"
          style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
        >
          <MessageCircle className="w-3.5 h-3.5" style={{ color: ACCENT }} />
        </div>
      )}
      {isTyping ? (
        <div className="ml-9">
          <TypingIndicator />
        </div>
      ) : (
        <div
          className="px-3.5 py-2.5 text-[12px] leading-relaxed max-w-[78%]"
          style={isUser ? {
            background: "rgba(6,182,212,0.18)",
            border: "1px solid rgba(6,182,212,0.3)",
            borderRadius: "16px 16px 4px 16px",
            color: "#e0f8ff",
          } : {
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px 16px 16px 4px",
            color: "#d4d8de",
          }}
        >
          {msg.text}
          {isUser && (
            <span className="ml-1.5 inline-flex items-center" style={{ color: ACCENT, opacity: 0.8 }}>
              <CheckCheck className="w-3 h-3" />
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────
export default function AnimacionChatbot() {
  const [visibleIds, setVisibleIds] = useState<number[]>([]);
  const [loopKey, setLoopKey] = useState(0);

  // Drive the conversation sequence
  useEffect(() => {
    setVisibleIds([]);
    const timers: ReturnType<typeof setTimeout>[] = [];

    CONVERSATION.forEach(msg => {
      timers.push(setTimeout(() => {
        setVisibleIds(prev => {
          if (msg.type === "typing") {
            return [...prev, msg.id];
          }
          if (msg.type === "bot") {
            const typingId = msg.id - 1;
            return [...prev.filter(id => id !== typingId), msg.id];
          }
          return [...prev, msg.id];
        });
      }, msg.delay));
    });

    timers.push(setTimeout(() => {
      setLoopKey(k => k + 1);
    }, LOOP_DURATION));

    return () => timers.forEach(clearTimeout);
  }, [loopKey]);

  // Show only the last 4 messages — no scrollbar needed
  const visibleMessages = CONVERSATION.filter(m => visibleIds.includes(m.id)).slice(-4);

  return (
    // pointer-events: none → purely decorative, no user interaction
    <div className="relative w-full" style={{ maxWidth: "360px", margin: "0 auto", pointerEvents: "none" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        borderRadius: "24px",
      }} />

      {/* Chat window */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "rgba(6,10,20,0.95)",
          border: "1px solid rgba(6,182,212,0.2)",
          borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(6,182,212,0.08), 0 0 0 1px rgba(6,182,212,0.05)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: "rgba(6,182,212,0.06)", borderBottom: "1px solid rgba(6,182,212,0.12)" }}
        >
          <div className="relative">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
            >
              <MessageCircle className="w-4.5 h-4.5" style={{ color: ACCENT }} />
            </div>
            {/* Online dot */}
            <div
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
              style={{ background: "#22c55e", border: "2px solid rgba(6,10,20,0.95)" }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "#22c55e" }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-none mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Aria IA
            </p>
            <p className="text-[10px]" style={{ color: ACCENT }}>En línea · responde en &lt;3 min</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: "rgba(6,182,212,0.1)", color: ACCENT, border: "1px solid rgba(6,182,212,0.2)" }}>
              WhatsApp IA
            </span>
          </div>
        </div>

        {/* Messages area — overflow hidden, no scrollbar */}
        <div
          className="flex flex-col justify-end gap-2.5 px-4 py-4 overflow-hidden"
          style={{ height: "260px" }}
        >
          <AnimatePresence>
            {visibleMessages.map(msg => (
              <Bubble key={`${loopKey}-${msg.id}`} msg={msg} />
            ))}
          </AnimatePresence>
        </div>

        {/* Input area */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "rgba(6,182,212,0.03)", borderTop: "1px solid rgba(6,182,212,0.1)" }}
        >
          <div
            className="flex-1 h-9 rounded-full px-4 flex items-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(6,182,212,0.15)" }}
          >
            <span className="text-[11px] text-gray-600">Escribe un mensaje...</span>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: ACCENT }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="#000" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom metric strip */}
      <div className="mt-3 flex justify-center gap-6">
        {[
          { label: "Tiempo resp.", value: "< 3 min" },
          { label: "Satisfacción", value: "94%" },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="text-base font-bold" style={{ color: ACCENT, fontFamily: "'Space Grotesk', sans-serif" }}>{value}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
