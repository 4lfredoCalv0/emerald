"use client";

import { motion } from "framer-motion";

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-3xl" />

      {/* Browser frame */}
      <div className="relative rounded-2xl border border-white/10 bg-gray-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 rounded-md bg-white/5 flex items-center px-3">
              <span className="text-[10px] text-gray-500">app.emerald.ai/dashboard</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-3">
          {/* Top metrics row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Leads hoy", value: "24", change: "+12%", color: "emerald" },
              { label: "Conversaciones", value: "156", change: "+8%", color: "blue" },
              { label: "Conversiones", value: "18", change: "+23%", color: "purple" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5"
              >
                <p className="text-[9px] text-gray-500 mb-1">{metric.label}</p>
                <p className="text-lg font-bold text-white">{metric.value}</p>
                <p className={`text-[9px] font-medium ${
                  metric.color === "emerald" ? "text-emerald-400" :
                  metric.color === "blue" ? "text-blue-400" : "text-purple-400"
                }`}>{metric.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] text-gray-400 font-medium">Rendimiento semanal</p>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-1.5 h-20">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/60 to-emerald-400/30"
                />
              ))}
            </div>
            <div className="flex gap-1.5 mt-2">
              {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                <span key={i} className="flex-1 text-center text-[8px] text-gray-600">{d}</span>
              ))}
            </div>
          </motion.div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5"
            >
              <p className="text-[9px] text-gray-500 mb-2">Actividad reciente</p>
              <div className="space-y-1.5">
                {[
                  { dot: "bg-emerald-400", text: "Lead calificado" },
                  { dot: "bg-blue-400", text: "Cita agendada" },
                  { dot: "bg-purple-400", text: "Venta cerrada" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                    <span className="text-[9px] text-gray-400">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5"
            >
              <p className="text-[9px] text-gray-500 mb-2">Estado del sistema</p>
              <div className="space-y-1.5">
                {[
                  { label: "WhatsApp", status: "Activo", color: "text-emerald-400" },
                  { label: "CRM", status: "Activo", color: "text-emerald-400" },
                  { label: "Automatización", status: "Activo", color: "text-emerald-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[9px] text-gray-400">{item.label}</span>
                    <span className={`text-[9px] font-medium ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
