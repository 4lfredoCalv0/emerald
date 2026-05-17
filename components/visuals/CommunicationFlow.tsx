"use client";

import { motion } from "framer-motion";

interface CommunicationFlowProps {
  accentColor?: "emerald" | "blue" | "purple";
}

export default function CommunicationFlow({ accentColor = "blue" }: CommunicationFlowProps) {
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  const colorMap = {
    emerald: {
      bubble: "bg-emerald-500/10 border-emerald-500/20",
      text: "text-emerald-300",
      dot: "bg-emerald-400",
      glow: "shadow-emerald-500/15",
    },
    blue: {
      bubble: "bg-blue-500/10 border-blue-500/20",
      text: "text-blue-300",
      dot: "bg-blue-400",
      glow: "shadow-blue-500/15",
    },
    purple: {
      bubble: "bg-purple-500/10 border-purple-500/20",
      text: "text-purple-300",
      dot: "bg-purple-400",
      glow: "shadow-purple-500/15",
    },
  };

  const colors = colorMap[accentColor];

  const messages = [
    { from: "user", text: "Hola, quiero agendar una cita", delay: 0 },
    { from: "bot", text: "¡Hola! Claro, ¿qué día te funciona?", delay: 0.5 },
    { from: "user", text: "El jueves a las 3pm", delay: 1 },
    { from: "bot", text: "✓ Cita confirmada: Jueves 3:00pm", delay: 1.5 },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow */}
      <div className={`absolute -inset-6 ${colors.dot}/5 rounded-3xl blur-3xl`} />

      {/* Phone frame */}
      <div className={`relative rounded-3xl border border-white/10 bg-gray-950/80 backdrop-blur-xl overflow-hidden shadow-2xl ${colors.glow}`}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 py-2 border-b border-white/5">
          <span className="text-[10px] text-gray-500">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 rounded-sm bg-gray-600" />
            <div className="w-3 h-1.5 rounded-sm bg-gray-600" />
            <div className="w-3 h-1.5 rounded-sm bg-gray-600" />
          </div>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className={`w-8 h-8 rounded-full ${colors.bubble} border flex items-center justify-center`}>
            <span className="text-xs">🤖</span>
          </div>
          <div>
            <p className="text-xs text-white font-medium">Emerald Assistant</p>
            <p className="text-[9px] text-emerald-400">En línea</p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 min-h-[200px]">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: msg.delay + 0.5, duration: 0.4 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                  msg.from === "user"
                    ? "bg-white/10 text-white rounded-br-md"
                    : `${colors.bubble} border ${colors.text} rounded-bl-md`
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: [0, 1, 0] }}
            transition={{ delay: 2, duration: 1.5, repeat: prefersReducedMotion ? 0 : 3 }}
            className="flex justify-start"
          >
            <div className={`px-3 py-2 rounded-2xl rounded-bl-md ${colors.bubble} border flex gap-1`}>
              <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            </div>
          </motion.div>
        </div>

        {/* Input bar */}
        <div className="px-4 py-3 border-t border-white/5">
          <div className="h-8 rounded-full bg-white/5 border border-white/10 flex items-center px-3">
            <span className="text-[10px] text-gray-600">Escribir mensaje...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
