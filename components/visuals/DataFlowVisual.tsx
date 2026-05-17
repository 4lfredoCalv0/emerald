"use client";

import { motion } from "framer-motion";
import { Globe, MessageSquare, Mail, Database, Zap, BarChart3, Activity } from "lucide-react";

export default function DataFlowVisual() {
  const sources = [
    { icon: Globe, label: "Web", x: 15, y: 20 },
    { icon: MessageSquare, label: "WhatsApp", x: 50, y: 10 },
    { icon: Mail, label: "Email", x: 85, y: 20 },
  ];

  const processors = [
    { label: "CRM", sub: "Central", x: 50, y: 50 },
    { label: "Auto", sub: "Pipeline", x: 50, y: 72 },
  ];

  const outputs = [
    { label: "Dashboard", sub: "Visualiza", x: 30, y: 92 },
    { label: "Analytics", sub: "Analiza", x: 70, y: 92 },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="absolute -inset-8 bg-emerald-500/5 rounded-3xl blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 bg-gray-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400 font-medium">Flujo de datos en tiempo real</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-600">3 fuentes activas</span>
            <span className="text-[10px] text-emerald-400 font-medium">● Conectado</span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <svg viewBox="0 0 100 100" className="w-full h-auto" fill="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background grid */}
            {[20, 40, 60, 80].map((pos, i) => (
              <g key={`grid-${i}`}>
                <line x1="0" y1={pos} x2="100" y2={pos} stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
                <line x1={pos} y1="0" x2={pos} y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
              </g>
            ))}

            {/* Flow paths - Source to CRM */}
            {sources.map((source, i) => (
              <g key={`path-source-${i}`}>
                <path
                  d={`M${source.x},${source.y + 8} Q${source.x},${source.y + 20} ${50},${50 - 12}`}
                  stroke="rgba(16,185,129,0.15)"
                  strokeWidth="0.4"
                  fill="none"
                  strokeDasharray="1 1"
                />
                <motion.circle
                  r="0.8"
                  fill="rgba(16,185,129,0.8)"
                  filter="url(#glow)"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    offsetPath: `path('M${source.x},${source.y + 8} Q${source.x},${source.y + 20} ${50},${50 - 12}')`,
                  }}
                />
              </g>
            ))}

            {/* Flow path - CRM to Automation */}
            <g>
              <path
                d={`M50,${50 + 12} L50,${72 - 12}`}
                stroke="rgba(168,85,247,0.2)"
                strokeWidth="0.5"
                fill="none"
              />
              <motion.circle
                r="1"
                fill="rgba(168,85,247,0.8)"
                filter="url(#glow)"
                animate={{
                  cy: [50 + 12, 72 - 12],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>

            {/* Flow paths - Automation to Outputs */}
            {[
              { from: { x: 50, y: 72 + 12 }, to: { x: 30, y: 92 - 12 }, color: "rgba(59,130,246,0.8)" },
              { from: { x: 50, y: 72 + 12 }, to: { x: 70, y: 92 - 12 }, color: "rgba(59,130,246,0.8)" },
            ].map((path, i) => (
              <g key={`path-output-${i}`}>
                <path
                  d={`M${path.from.x},${path.from.y} Q${(path.from.x + path.to.x) / 2},${(path.from.y + path.to.y) / 2 + 5} ${path.to.x},${path.to.y}`}
                  stroke="rgba(59,130,246,0.15)"
                  strokeWidth="0.4"
                  fill="none"
                  strokeDasharray="1 1"
                />
                <motion.circle
                  r="0.8"
                  fill={path.color}
                  filter="url(#glow)"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.9,
                    ease: "easeInOut",
                  }}
                  style={{
                    offsetPath: `path('M${path.from.x},${path.from.y} Q${(path.from.x + path.to.x) / 2},${(path.from.y + path.to.y) / 2 + 5} ${path.to.x},${path.to.y}')`,
                  }}
                />
              </g>
            ))}

            {/* Source nodes */}
            {sources.map((source, i) => {
              const Icon = source.icon;
              return (
                <g key={`source-${i}`}>
                  <motion.circle
                    cx={source.x}
                    cy={source.y}
                    r="10"
                    fill="none"
                    stroke="rgba(16,185,129,0.2)"
                    strokeWidth="0.3"
                    animate={{ r: [9, 12, 9] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <circle
                    cx={source.x}
                    cy={source.y}
                    r="7"
                    fill="rgba(3,7,18,0.9)"
                    stroke="rgba(16,185,129,0.4)"
                    strokeWidth="0.5"
                  />
                  <circle cx={source.x} cy={source.y} r="2" fill="rgba(16,185,129,0.3)" />
                  <text
                    x={source.x}
                    y={source.y - 10}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.7)"
                    style={{ fontSize: "3px", fontFamily: "Inter, sans-serif", fontWeight: "600" }}
                  >
                    {source.label}
                  </text>
                </g>
              );
            })}

            {/* CRM node */}
            <g>
              <motion.circle
                cx="50"
                cy="50"
                r="12"
                fill="none"
                stroke="rgba(168,85,247,0.25)"
                strokeWidth="0.4"
                animate={{ r: [11, 14, 11] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <circle
                cx="50"
                cy="50"
                r="9"
                fill="rgba(3,7,18,0.95)"
                stroke="rgba(168,85,247,0.5)"
                strokeWidth="0.6"
              />
              <text
                x="50"
                y="49"
                textAnchor="middle"
                fill="rgba(255,255,255,0.8)"
                style={{ fontSize: "3.5px", fontFamily: "Inter, sans-serif", fontWeight: "700" }}
              >
                CRM
              </text>
              <text
                x="50"
                y="53"
                textAnchor="middle"
                fill="rgba(168,85,247,0.6)"
                style={{ fontSize: "2px", fontFamily: "Inter, sans-serif" }}
              >
                Central
              </text>
            </g>

            {/* Automation node */}
            <g>
              <circle
                cx="50"
                cy="72"
                r="8"
                fill="rgba(3,7,18,0.9)"
                stroke="rgba(59,130,246,0.4)"
                strokeWidth="0.5"
              />
              <text
                x="50"
                y="71"
                textAnchor="middle"
                fill="rgba(255,255,255,0.8)"
                style={{ fontSize: "3px", fontFamily: "Inter, sans-serif", fontWeight: "600" }}
              >
                Auto
              </text>
              <text
                x="50"
                y="75"
                textAnchor="middle"
                fill="rgba(59,130,246,0.6)"
                style={{ fontSize: "2px", fontFamily: "Inter, sans-serif" }}
              >
                Pipeline
              </text>
            </g>

            {/* Output nodes */}
            {outputs.map((output, i) => (
              <g key={`output-${i}`}>
                <circle
                  cx={output.x}
                  cy={output.y}
                  r="6"
                  fill="rgba(3,7,18,0.85)"
                  stroke="rgba(16,185,129,0.3)"
                  strokeWidth="0.4"
                />
                <text
                  x={output.x}
                  y={output.y - 9}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.7)"
                  style={{ fontSize: "3px", fontFamily: "Inter, sans-serif", fontWeight: "600" }}
                >
                  {output.label}
                </text>
                <text
                  x={output.x}
                  y={output.y + 10}
                  textAnchor="middle"
                  fill="rgba(16,185,129,0.5)"
                  style={{ fontSize: "2px", fontFamily: "Inter, sans-serif" }}
                >
                  {output.sub}
                </text>
              </g>
            ))}

            {/* Live indicator */}
            <g transform="translate(85, 5)">
              <rect x="0" y="0" width="12" height="6" rx="1" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,247,0.2)" strokeWidth="0.2" />
              <text x="6" y="3.5" textAnchor="middle" fill="rgba(16,185,129,0.8)" style={{ fontSize: "2.5px", fontFamily: "Inter, sans-serif", fontWeight: "700" }}>
                LIVE
              </text>
            </g>
          </svg>

          {/* Bottom metrics */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { label: "Flujos activos", value: "24", sub: "datos/min", color: "text-emerald-400" },
              { label: "Latencia", value: "<50ms", sub: "tiempo real", color: "text-blue-400" },
              { label: "Precisión", value: "99.8%", sub: "procesamiento", color: "text-purple-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3 text-center"
              >
                <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-[10px] text-gray-400 font-medium">{stat.label}</p>
                <p className="text-[9px] text-gray-600">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
