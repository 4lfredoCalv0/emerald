"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  DollarSign,
  MessageSquare,
  Calendar,
  BarChart3,
  Activity,
  Globe,
  Shield,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  Target,
  ShoppingCart,
  Eye,
} from "lucide-react";

export default function BusinessDashboard() {
  const weeklyData = [42, 58, 35, 67, 52, 78, 64];
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const recentActivities = [
    { icon: Users, text: "Nuevo lead capturado", time: "hace 2 min", color: "text-emerald-400" },
    { icon: ShoppingCart, text: "Venta procesada - $2,450", time: "hace 8 min", color: "text-blue-400" },
    { icon: MessageSquare, text: "Chatbot respondió consulta", time: "hace 15 min", color: "text-purple-400" },
    { icon: Calendar, text: "Cita agendada - Dr. Martínez", time: "hace 23 min", color: "text-amber-400" },
    { icon: CheckCircle2, text: "Workflow completado", time: "hace 31 min", color: "text-emerald-400" },
  ];

  const topProducts = [
    { name: "Producto Premium A", sales: 142, revenue: "$42,600", trend: "+18%" },
    { name: "Producto Premium B", sales: 98, revenue: "$29,400", trend: "+12%" },
    { name: "Producto Premium C", sales: 76, revenue: "$22,800", trend: "+8%" },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-emerald-500/5 rounded-3xl blur-3xl" />

      {/* Main container */}
      <div className="relative rounded-2xl border border-white/10 bg-gray-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400 font-medium">Dashboard Emerald</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/[0.06]">
              <Search className="w-2.5 h-2.5 text-gray-500" />
              <span className="text-[9px] text-gray-500">Buscar...</span>
            </div>
            <Bell className="w-3.5 h-3.5 text-gray-500" />
            <Settings className="w-3.5 h-3.5 text-gray-500" />
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Top metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Users, label: "Leads totales", value: "1,247", change: "+23%", up: true, color: "text-emerald-400" },
              { icon: DollarSign, label: "Ingresos", value: "$94,800", change: "+18%", up: true, color: "text-blue-400" },
              { icon: ShoppingCart, label: "Ventas", value: "342", change: "+12%", up: true, color: "text-purple-400" },
              { icon: MessageSquare, label: "Conversaciones", value: "2,891", change: "+31%", up: true, color: "text-amber-400" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className={`w-3.5 h-3.5 ${metric.color}`} />
                  <div className={`flex items-center gap-0.5 ${metric.up ? "text-emerald-400" : "text-red-400"}`}>
                    {metric.up ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
                    <span className="text-[8px] font-medium">{metric.change}</span>
                  </div>
                </div>
                <p className="text-[8px] text-gray-500 mb-0.5">{metric.label}</p>
                <p className="text-lg font-bold text-white">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Main chart + Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Weekly performance chart */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:col-span-2 rounded-lg bg-white/[0.03] border border-white/[0.06] p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[9px] text-gray-400 font-medium">Rendimiento semanal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-3 h-3 text-gray-500" />
                  <MoreHorizontal className="w-3 h-3 text-gray-500" />
                </div>
              </div>

              <div className="flex items-end gap-2 h-28">
                {weeklyData.map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                      className="w-full rounded-t bg-gradient-to-t from-emerald-500/60 to-emerald-400/30 hover:from-emerald-400/80 hover:to-emerald-300/50 transition-all cursor-pointer"
                      style={{ minHeight: "8px" }}
                    />
                    <span className="text-[7px] text-gray-600">{days[i]}</span>
                  </div>
                ))}
              </div>

              {/* Chart legend */}
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded bg-emerald-400/60" />
                  <span className="text-[7px] text-gray-500">Leads</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded bg-blue-400/60" />
                  <span className="text-[7px] text-gray-500">Conversiones</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded bg-purple-400/60" />
                  <span className="text-[7px] text-gray-500">Ingresos</span>
                </div>
              </div>
            </motion.div>

            {/* Recent activity */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[9px] text-gray-400 font-medium">Actividad reciente</span>
              </div>

              <div className="space-y-2.5">
                {recentActivities.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    <div className="mt-0.5">
                      <activity.icon className={`w-3 h-3 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] text-gray-300 leading-tight">{activity.text}</p>
                      <p className="text-[7px] text-gray-600 mt-0.5">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom row: Top products + System status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Top products */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[9px] text-gray-400 font-medium">Top productos</span>
                </div>
                <span className="text-[7px] text-emerald-400 font-medium">Este mes</span>
              </div>

              <div className="space-y-2">
                {topProducts.map((product, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="flex items-center justify-between py-1.5 border-b border-white/[0.03] last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center">
                        <span className="text-[7px] text-emerald-400 font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-[8px] text-gray-300">{product.name}</p>
                        <p className="text-[7px] text-gray-500">{product.sales} ventas</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-semibold text-white">{product.revenue}</p>
                      <p className="text-[7px] text-emerald-400">{product.trend}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* System status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[9px] text-gray-400 font-medium">Estado del sistema</span>
              </div>

              <div className="space-y-2">
                {[
                  { icon: Globe, label: "Sitio web", status: "Activo", uptime: "99.9%" },
                  { icon: MessageSquare, label: "WhatsApp IA", status: "Activo", uptime: "99.8%" },
                  { icon: Zap, label: "Automatización", status: "Activo", uptime: "99.7%" },
                  { icon: Eye, label: "Analytics", status: "Activo", uptime: "100%" },
                ].map((system, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.08 }}
                    className="flex items-center justify-between py-1.5 border-b border-white/[0.03] last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <system.icon className="w-3 h-3 text-gray-500" />
                      <span className="text-[8px] text-gray-400">{system.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[7px] text-emerald-400 font-medium">{system.status}</span>
                      </div>
                      <span className="text-[7px] text-gray-600">{system.uptime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Overall health */}
              <div className="mt-3 pt-3 border-t border-white/5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[7px] text-gray-500">Salud general</span>
                  <span className="text-[8px] font-bold text-emerald-400">Excelente</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "97%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
