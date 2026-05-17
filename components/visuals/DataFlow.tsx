"use client";

import { motion } from "framer-motion";
import { Activity, Timer, RefreshCw, ShieldAlert } from "lucide-react";

interface DataFlowProps {
  accentColor?: "emerald" | "blue" | "purple";
}

export default function DataFlow({ accentColor = "purple" }: DataFlowProps) {
  const tools = [
    { x: 15, y: 25, icon: "mail" },
    { x: 50, y: 10, icon: "chat" },
    { x: 85, y: 25, icon: "globe" },
    { x: 10, y: 75, icon: "cart" },
    { x: 35, y: 85, icon: "db" },
    { x: 65, y: 85, icon: "chart" },
    { x: 90, y: 75, icon: "user" },
  ];

  const hub = { x: 50, y: 50 };

  const stats = [
    { icon: Timer, value: "24/7", color: "text-emerald-400" },
    { icon: RefreshCw, value: "+50", color: "text-blue-400" },
    { icon: ShieldAlert, value: "0", color: "text-purple-400" },
  ];

  const iconPaths: Record<string, (cx: number, cy: number) => React.ReactNode> = {
    mail: (cx, cy) => (
      <g>
        <rect x={cx - 3} y={cy - 2.5} width="6" height="5" rx="0.6" stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <path d={`M${cx - 3},${cy - 2.5} L${cx},${cy + 0.5} L${cx + 3},${cy - 2.5}`} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
      </g>
    ),
    chat: (cx, cy) => (
      <g>
        <path d={`M${cx - 3},${cy - 2} L${cx + 3},${cy - 2} L${cx + 3},${cy + 1.5} L${cx},${cy + 1.5} L${cx - 1.5},${cy + 3} L${cx - 1.5},${cy + 1.5} L${cx - 3},${cy + 1.5} Z`} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <circle cx={cx - 1.5} cy={cy - 0.5} r="0.4" fill="rgba(168,85,247,0.5)" />
        <circle cx={cx} cy={cy - 0.5} r="0.4" fill="rgba(168,85,247,0.5)" />
        <circle cx={cx + 1.5} cy={cy - 0.5} r="0.4" fill="rgba(168,85,247,0.5)" />
      </g>
    ),
    globe: (cx, cy) => (
      <g>
        <circle cx={cx} cy={cy} r="3" stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <ellipse cx={cx} cy={cy} rx="1.5" ry="3" stroke="rgba(168,85,247,0.5)" strokeWidth="0.2" fill="none" />
        <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke="rgba(168,85,247,0.5)" strokeWidth="0.2" />
      </g>
    ),
    cart: (cx, cy) => (
      <g>
        <path d={`M${cx - 3.5},${cy - 2} L${cx + 3.5},${cy - 2} L${cx + 2.5},${cy + 1.5} L${cx - 2.5},${cy + 1.5} Z`} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <circle cx={cx - 1.5} cy={cy + 3} r="0.7" stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <circle cx={cx + 1.5} cy={cy + 3} r="0.7" stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
      </g>
    ),
    db: (cx, cy) => (
      <g>
        <ellipse cx={cx} cy={cy - 2} rx="3" ry="1.2" stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <path d={`M${cx - 3},${cy - 2} L${cx - 3},${cy + 2} A3,1.2 0 0,0 ${cx + 3},${cy + 2} L${cx + 3},${cy - 2}`} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
      </g>
    ),
    chart: (cx, cy) => (
      <g>
        <line x1={cx - 2.5} y1={cy + 2.5} x2={cx - 2.5} y2={cy - 2.5} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" />
        <line x1={cx - 2.5} y1={cy + 2.5} x2={cx + 2.5} y2={cy + 2.5} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" />
        <path d={`M${cx - 1.5},${cy + 1.5} L${cx - 0.5},${cy - 0.5} L${cx + 0.5},${cy + 0.5} L${cx + 1.5},${cy - 1.5}`} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <circle cx={cx} cy={cy + 2} r="0.3" fill="rgba(168,85,247,0.5)" />
      </g>
    ),
    user: (cx, cy) => (
      <g>
        <circle cx={cx} cy={cy - 1} r="1.2" stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
        <path d={`M${cx - 2.5},${cy + 3.5} C${cx - 2.5},${cy + 0.5} ${cx + 2.5},${cy + 0.5} ${cx + 2.5},${cy + 3.5}`} stroke="rgba(168,85,247,0.5)" strokeWidth="0.3" fill="none" />
      </g>
    ),
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 bg-gray-950/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-purple-500/10">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span className="text-xs text-gray-400 font-medium">Conexiones activas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-medium">7</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <svg viewBox="0 0 100 100" className="w-full h-auto" fill="none">
            <defs>
              <filter id="glowDot">
                <feGaussianBlur stdDeviation="0.4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background grid */}
            {[25, 50, 75].map((pos, i) => (
              <g key={`grid-${i}`}>
                <line x1="0" y1={pos} x2="100" y2={pos} stroke="rgba(255,255,255,0.02)" strokeWidth="0.15" />
                <line x1={pos} y1="0" x2={pos} y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.15" />
              </g>
            ))}

            {/* Connection lines from tools to hub */}
            {tools.map((tool, i) => (
              <g key={`conn-${i}`}>
                <line
                  x1={tool.x}
                  y1={tool.y}
                  x2={hub.x}
                  y2={hub.y}
                  stroke="rgba(168,85,247,0.1)"
                  strokeWidth="0.3"
                />
                {/* Animated data particle */}
                <motion.circle
                  r="0.7"
                  fill="rgba(168,85,247,0.7)"
                  filter="url(#glowDot)"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                    opacity: [0, 0.8, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                  style={{
                    offsetPath: `path('M${tool.x},${tool.y} L${hub.x},${hub.y}')`,
                  }}
                />
              </g>
            ))}

            {/* Hub node - central orchestrator */}
            <g>
              {/* Outer pulsating ring */}
              <motion.circle
                cx={hub.x}
                cy={hub.y}
                r="14"
                fill="none"
                stroke="rgba(168,85,247,0.2)"
                strokeWidth="0.4"
                animate={{ r: [13, 17, 13], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              {/* Middle ring */}
              <motion.circle
                cx={hub.x}
                cy={hub.y}
                r="11"
                fill="none"
                stroke="rgba(168,85,247,0.3)"
                strokeWidth="0.3"
                animate={{ r: [10, 12, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              {/* Core */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r="8"
                fill="rgba(3,7,18,0.95)"
                stroke="rgba(168,85,247,0.5)"
                strokeWidth="0.6"
              />
              {/* Inner glow */}
              <motion.circle
                cx={hub.x}
                cy={hub.y}
                r="5"
                fill="rgba(168,85,247,0.1)"
                animate={{ r: [4, 6, 4], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Hexagon symbol in center */}
              <polygon
                points="50,45 54,47 54,53 50,55 46,53 46,47"
                stroke="rgba(168,85,247,0.6)"
                strokeWidth="0.4"
                fill="rgba(168,85,247,0.15)"
              />
            </g>

            {/* Tool nodes */}
            {tools.map((tool, i) => (
              <g key={`tool-${i}`}>
                {/* Pulse ring */}
                <motion.circle
                  cx={tool.x}
                  cy={tool.y}
                  r="6.5"
                  fill="none"
                  stroke="rgba(168,85,247,0.15)"
                  strokeWidth="0.3"
                  animate={{ r: [6, 8.5, 6], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                />
                {/* Node circle */}
                <circle
                  cx={tool.x}
                  cy={tool.y}
                  r="5.5"
                  fill="rgba(3,7,18,0.88)"
                  stroke="rgba(168,85,247,0.3)"
                  strokeWidth="0.5"
                />
                {/* Inner icon path */}
                {iconPaths[tool.icon]?.(tool.x, tool.y)}
                {/* Activity dot */}
                <motion.circle
                  cx={tool.x}
                  cy={tool.y - 7}
                  r="0.6"
                  fill="rgba(16,185,129,0.7)"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              </g>
            ))}
          </svg>

          {/* Stats counters */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="flex items-center gap-1">
                  <stat.icon className={`w-2.5 h-2.5 ${stat.color}`} />
                  <span className="text-xs font-bold text-white">{stat.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>
    </div>
  );
}
