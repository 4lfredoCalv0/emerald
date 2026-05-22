"use client";

import { motion } from "framer-motion";
import { User, Bot, Activity, Sparkles, CheckCircle2 } from "lucide-react";
import { CountUp } from "@/components/motion/MotionPrimitives";

// Bar chart heights — fixed deterministic values so SSR matches client
const BAR_HEIGHTS = [48, 72, 56, 88, 64, 92, 76, 84];

export default function HumanRobotDashboard() {
  return (
    <div className="relative w-full max-w-[480px]">
      {/* ───────── DATA FLOW LINES (SVG) — connect figures to dashboard ───────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
        viewBox="0 0 480 460"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowGradL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGradR" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* From human (top-left) to dashboard */}
        <motion.path
          d="M 50 60 Q 130 110, 180 160"
          stroke="url(#flowGradL)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
        <motion.circle
          r="3"
          fill="#a78bfa"
          style={{ filter: "drop-shadow(0 0 4px #a78bfa)" }}
        >
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 60 Q 130 110, 180 160" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" />
        </motion.circle>

        {/* From dashboard to robot (bottom-right) */}
        <motion.path
          d="M 300 320 Q 380 380, 430 410"
          stroke="url(#flowGradR)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        />
        <motion.circle
          r="3"
          fill="#f472b6"
          style={{ filter: "drop-shadow(0 0 4px #f472b6)" }}
        >
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.8s" path="M 300 320 Q 380 380, 430 410" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.2s" repeatCount="indefinite" begin="0.8s" />
        </motion.circle>
      </svg>

      {/* ───────── HUMAN AVATAR — top-left, breathing + pulse ring ───────── */}
      <motion.div
        className="absolute z-20"
        style={{ top: 10, left: 0 }}
        initial={{ opacity: 0, scale: 0.5, x: -20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Outer pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid rgba(167,139,250,0.4)",
              boxShadow: "0 0 30px rgba(167,139,250,0.3)",
            }}
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
          {/* Inner pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid rgba(167,139,250,0.25)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
          />
          {/* Avatar */}
          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(167,139,250,0.25), rgba(167,139,250,0.05))",
              border: "1.5px solid rgba(167,139,250,0.5)",
              boxShadow: "0 8px 32px rgba(139,92,246,0.35), inset 0 0 20px rgba(167,139,250,0.15)",
            }}
          >
            <User className="w-9 h-9 text-[#c4b5fd]" strokeWidth={1.8} />
          </div>
          {/* Label */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider whitespace-nowrap"
            style={{
              background: "rgba(10,6,18,0.92)",
              color: "#c4b5fd",
              border: "1px solid rgba(167,139,250,0.3)",
              borderRadius: "4px",
              backdropFilter: "blur(8px)",
            }}
          >
            EQUIPO
          </div>
        </motion.div>
      </motion.div>

      {/* ───────── ROBOT AVATAR — bottom-right, breathing + glitching eye ───────── */}
      <motion.div
        className="absolute z-20"
        style={{ bottom: 10, right: 0 }}
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0], rotate: [0, 0.8, -0.8, 0] }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative"
        >
          {/* Outer pulse ring — pink */}
          <motion.div
            className="absolute inset-0"
            style={{
              border: "1px solid rgba(244,114,182,0.4)",
              boxShadow: "0 0 28px rgba(244,114,182,0.3)",
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
          />
          {/* Avatar — octagonal */}
          <div
            className="relative w-20 h-20 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(244,114,182,0.22), rgba(167,139,250,0.12))",
              border: "1.5px solid rgba(244,114,182,0.55)",
              boxShadow: "0 8px 32px rgba(236,72,153,0.3), inset 0 0 20px rgba(244,114,182,0.18)",
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            }}
          >
            <Bot className="w-9 h-9 text-[#f9a8d4]" strokeWidth={1.8} />

            {/* Glowing "eye" indicator */}
            <motion.div
              className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#f472b6]"
              style={{ boxShadow: "0 0 6px #f472b6" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* Label */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider whitespace-nowrap"
            style={{
              background: "rgba(10,6,18,0.92)",
              color: "#f9a8d4",
              border: "1px solid rgba(244,114,182,0.35)",
              borderRadius: "4px",
              backdropFilter: "blur(8px)",
            }}
          >
            SISTEMA IA
          </div>
        </motion.div>
      </motion.div>

      {/* ───────── DASHBOARD PANEL — center ───────── */}
      <motion.div
        className="relative z-10 mx-auto"
        style={{
          width: "100%",
          maxWidth: "380px",
          marginTop: "60px",
          marginBottom: "60px",
          marginLeft: "auto",
          marginRight: "auto",
          background: "linear-gradient(180deg, rgba(20,12,32,0.96) 0%, rgba(12,8,22,0.96) 100%)",
          border: "1px solid rgba(167,139,250,0.18)",
          borderRadius: "14px",
          padding: "18px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(139,92,246,0.12), inset 0 1px 0 rgba(167,139,250,0.12)",
          backdropFilter: "blur(8px)",
        }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#10b981]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 6px #10b981" }}
            />
            <span className="text-[11px] font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Pipeline de Automatización
            </span>
          </div>
          <span className="text-[9px] text-gray-500 uppercase tracking-wider">En vivo</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-4">
          {[
            { label: "Lead entra", active: true },
            { label: "Calificación IA", active: true },
            { label: "Asignación", active: true },
            { label: "Seguimiento", active: false },
          ].map((tab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 px-2 py-1.5 text-center text-[8.5px] font-semibold uppercase tracking-wide"
              style={{
                background: tab.active ? "rgba(167,139,250,0.18)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${tab.active ? "rgba(167,139,250,0.35)" : "rgba(255,255,255,0.06)"}`,
                color: tab.active ? "#c4b5fd" : "#6b7280",
                borderRadius: "4px",
              }}
            >
              {tab.label}
            </motion.div>
          ))}
        </div>

        {/* Bar chart — animated heights */}
        <div className="mb-4">
          <div className="flex items-end justify-between gap-1.5 h-[90px] px-1">
            {BAR_HEIGHTS.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm relative overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, #a78bfa 0%, rgba(167,139,250,0.3) 100%)`,
                  boxShadow: "0 0 8px rgba(167,139,250,0.4)",
                }}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${h}%`, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Bar's animated "active" indicator at top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-white"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/30 to-transparent" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { value: 47, label: "En pipeline", suffix: "" },
            { value: 12, label: "Convertidos hoy", suffix: "" },
            { value: 2.3, label: "Tiempo promedio", suffix: "h", decimals: 1 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
              className="text-center px-2 py-2"
              style={{
                background: "rgba(167,139,250,0.05)",
                border: "1px solid rgba(167,139,250,0.1)",
                borderRadius: "6px",
              }}
            >
              <div className="text-lg font-bold text-white tabular-nums" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <CountUp to={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} delay={1.1 + i * 0.08} />
              </div>
              <div className="text-[8px] text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer status row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center justify-between pt-2 border-t border-white/[0.06]"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
            <span className="text-[9px] text-gray-400">
              <span className="text-[#10b981] font-semibold">124 procesos</span> activos
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#a78bfa]" />
            <span className="text-[9px] text-gray-500 uppercase tracking-wider">IA optimizando</span>
          </div>
        </motion.div>

        {/* Activity ping in corner */}
        <motion.div
          className="absolute top-3 right-3 flex items-center gap-1 text-[8px] text-[#a78bfa] uppercase tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Activity className="w-2.5 h-2.5" />
        </motion.div>
      </motion.div>

      {/* Floating ambient particles */}
      {[
        { x: "20%", y: "30%", size: 3, delay: 0, color: "#a78bfa" },
        { x: "75%", y: "25%", size: 2, delay: 1.2, color: "#f472b6" },
        { x: "85%", y: "55%", size: 2.5, delay: 0.6, color: "#a78bfa" },
        { x: "15%", y: "70%", size: 2, delay: 1.8, color: "#f472b6" },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            zIndex: 5,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
