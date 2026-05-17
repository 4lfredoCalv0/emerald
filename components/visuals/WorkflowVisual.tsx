"use client";

import { motion } from "framer-motion";

interface WorkflowVisualProps {
  accentColor?: "emerald" | "blue" | "purple";
}

export default function WorkflowVisual({ accentColor = "emerald" }: WorkflowVisualProps) {
  const colorMap = {
    emerald: {
      bar: "from-emerald-500/40 to-emerald-400/20",
      dot: "bg-emerald-400",
      line: "bg-emerald-500/20",
      glow: "shadow-emerald-500/20",
    },
    blue: {
      bar: "from-blue-500/40 to-cyan-400/20",
      dot: "bg-blue-400",
      line: "bg-blue-500/20",
      glow: "shadow-blue-500/20",
    },
    purple: {
      bar: "from-purple-500/40 to-pink-400/20",
      dot: "bg-purple-400",
      line: "bg-purple-500/20",
      glow: "shadow-purple-500/20",
    },
  };

  const colors = colorMap[accentColor];

  const steps = [
    { label: "Lead entra", width: "w-16", delay: 0 },
    { label: "Calificación IA", width: "w-20", delay: 0.2 },
    { label: "Asignación", width: "w-14", delay: 0.4 },
    { label: "Seguimiento", width: "w-18", delay: 0.6 },
    { label: "Conversión", width: "w-16", delay: 0.8 },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow */}
      <div className={`absolute -inset-4 ${colors.dot}/5 rounded-2xl blur-3xl`} />

      <div className="relative rounded-2xl border border-white/10 bg-gray-950/60 backdrop-blur-xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse`} />
            <span className="text-xs text-gray-400 font-medium">Pipeline de automatización</span>
          </div>
          <span className="text-[10px] text-gray-600">En tiempo real</span>
        </div>

        {/* Pipeline */}
        <div className="flex items-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              {/* Step block */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + step.delay, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className={`h-10 ${step.width} rounded-lg bg-gradient-to-br ${colors.bar} border border-white/[0.06] flex items-center justify-center mb-2`}>
                  <span className="text-[9px] text-white/70 font-medium text-center leading-tight">
                    {step.label}
                  </span>
                </div>
                {/* Status dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: step.delay,
                  }}
                  className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                />
              </motion.div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px ${colors.line} mx-1 relative`}>
                  <motion.div
                    className={`absolute top-0 left-0 h-full w-3 ${colors.dot} rounded-full`}
                    animate={{
                      left: ["0%", "100%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-6 pt-4 border-t border-white/5 grid grid-cols-3 gap-3"
        >
          {[
            { label: "En pipeline", value: "47" },
            { label: "Convertidos hoy", value: "12" },
            { label: "Tiempo promedio", value: "2.3h" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-[9px] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
