"use client";

import { motion } from "framer-motion";

interface SystemDiagramProps {
  accentColor?: "emerald" | "blue" | "purple";
}

export default function SystemDiagram({ accentColor = "emerald" }: SystemDiagramProps) {
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  const colorMap = {
    emerald: {
      node: "fill-emerald-500/20 stroke-emerald-500/40",
      line: "stroke-emerald-500/20",
      pulse: "bg-emerald-400",
      glow: "shadow-emerald-500/20",
    },
    blue: {
      node: "fill-blue-500/20 stroke-blue-500/40",
      line: "stroke-blue-500/20",
      pulse: "bg-blue-400",
      glow: "shadow-blue-500/20",
    },
    purple: {
      node: "fill-purple-500/20 stroke-purple-500/40",
      line: "stroke-purple-500/20",
      pulse: "bg-purple-400",
      glow: "shadow-purple-500/20",
    },
  };

  const colors = colorMap[accentColor];

  const nodes = [
    { x: 150, y: 30, label: "WhatsApp" },
    { x: 30, y: 100, label: "Web" },
    { x: 150, y: 100, label: "CRM" },
    { x: 270, y: 100, label: "Email" },
    { x: 90, y: 170, label: "Automatización" },
    { x: 210, y: 170, label: "Dashboard" },
    { x: 150, y: 240, label: "Analytics" },
  ];

  const connections = [
    [0, 2], [1, 2], [2, 3], [2, 4], [2, 5], [4, 6], [5, 6],
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow */}
      <div className={`absolute -inset-8 ${colors.pulse}/5 rounded-full blur-3xl`} />

      <svg
        viewBox="0 0 300 280"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        {connections.map(([from, to], i) => {
          const a = nodes[from];
          const b = nodes[to];
          return (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className={colors.line}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
            />
          );
        })}

        {/* Animated data flow dots */}
        {connections.map(([from, to], i) => {
          const a = nodes[from];
          const b = nodes[to];
          return (
            <motion.circle
              key={`dot-${i}`}
              r="2"
              className={colors.pulse}
              initial={{ cx: a.x, cy: a.y, opacity: 0 }}
              animate={prefersReducedMotion ? {} : {
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                delay: 1 + i * 0.3,
                duration: 2,
                repeat: prefersReducedMotion ? 0 : 2,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="16"
              className={colors.node}
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white/80"
              style={{ fontSize: "8px", fontFamily: "Inter, sans-serif" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center pulse */}
        <motion.circle
          cx="150"
          cy="100"
          r="20"
          className={colors.pulse}
          initial={{ opacity: 0, r: 16 }}
          animate={prefersReducedMotion ? {} : {
            opacity: [0, 0.15, 0],
            r: [16, 28, 16],
          }}
          transition={{
            duration: 2,
            repeat: prefersReducedMotion ? 0 : 2,
            ease: "easeOut",
          }}
        />
      </svg>
    </div>
  );
}
