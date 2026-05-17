"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Clock, Zap, Eye, Shield, Globe, Lock, ArrowRight, Star, MapPin, Phone, ChevronRight, Menu } from "lucide-react";

interface ComparisonMockupProps {
  accentColor?: "emerald" | "blue" | "purple";
}

export default function ComparisonMockup({
  accentColor = "purple",
}: ComparisonMockupProps) {
  const colorMap = {
    emerald: { accent: "emerald", dot: "bg-emerald-400", text: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/10", gradient: "from-emerald-500 to-emerald-600", glow: "shadow-emerald-500/20", bar: "bg-emerald-500/40" },
    blue: { accent: "blue", dot: "bg-blue-400", text: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/10", gradient: "from-blue-500 to-blue-600", glow: "shadow-blue-500/20", bar: "bg-blue-500/40" },
    purple: { accent: "purple", dot: "bg-purple-400", text: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/10", gradient: "from-purple-500 to-purple-600", glow: "shadow-purple-500/20", bar: "bg-purple-500/40" },
  };

  const c = colorMap[accentColor];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="absolute -inset-8 bg-purple-500/5 rounded-3xl blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-red-400" />
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Sin modernizar</span>
            <div className="flex-1 h-px bg-red-500/10" />
          </div>

          <div className="rounded-2xl border border-red-500/10 bg-gray-950/80 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                <div className="w-2 h-2 rounded-full bg-green-500/30" />
              </div>
              <div className="flex-1 mx-3">
                <div className="h-5 rounded bg-white/5 border border-white/[0.06] flex items-center px-2">
                  <span className="text-[9px] text-gray-600">negocio-viejo.com</span>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="text-center py-3">
                <div className="h-4 w-40 mx-auto bg-gray-700/50 rounded mb-2" />
                <div className="h-2 w-32 mx-auto bg-gray-700/30 rounded" />
              </div>
              <div className="flex justify-center gap-4">
                {["Inicio", "Productos", "Contacto"].map((item, i) => (
                  <span key={i} className="text-[9px] text-gray-600 underline">{item}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[0, 1].map((i) => (
                  <div key={i} className="rounded bg-gray-800/50 border border-gray-700/30 p-2">
                    <div className="w-4 h-4 rounded bg-gray-700/50 mb-1" />
                    <div className="h-1.5 w-full bg-gray-700/40 rounded mb-1" />
                    <div className="h-1 w-3/4 bg-gray-700/30 rounded" />
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-gray-700/30">
                <div className="h-1.5 w-24 bg-gray-700/30 rounded mx-auto" />
              </div>
            </div>

            <div className="px-4 pb-4 space-y-2">
              {[
                { icon: Clock, text: "Carga lenta (+5s)" },
                { icon: Eye, text: "No responsive" },
                { icon: Lock, text: "Sin SSL" },
                { icon: Globe, text: "Sin SEO" },
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 text-[10px] text-gray-500"
                >
                  <problem.icon className="w-3 h-3 text-red-400/50 shrink-0" />
                  <span>{problem.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AFTER — Modern Sales Website */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Con Emerald</span>
            <div className="flex-1 h-px bg-purple-500/10" />
          </div>

          <div className={`rounded-2xl border ${c.border} bg-gray-950/80 backdrop-blur-xl overflow-hidden shadow-2xl ${c.glow}`}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 mx-3">
                <div className="h-5 rounded bg-white/5 border border-white/[0.06] flex items-center px-2 gap-1.5">
                  <svg className="w-2.5 h-2.5 text-emerald-400/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-[9px] text-gray-500">tu-negocio.com</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[8px] text-gray-600">Live</span>
              </div>
            </div>

            {/* Premium Sales Website Content */}
            <div className="p-0">
              {/* Navigation Bar */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="flex items-center justify-between px-4 py-2.5 border-b border-white/5"
              >
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="1.5" className="text-purple-400/60" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" className="text-purple-400/80" />
                    </svg>
                  </motion.div>
                  <div>
                    <span className="text-[9px] font-bold text-white/90 tracking-wide block leading-tight">TU NEGOCIO</span>
                    <span className="text-[6px] text-gray-600 tracking-wider">DESDE 2020</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="hidden sm:flex items-center gap-4">
                  {["Productos", "Servicios", "Nosotros", "Contacto"].map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.06 }}
                      className={`text-[8px] ${i === 0 ? "text-white font-medium" : "text-gray-500"} hover:text-white transition-colors cursor-pointer`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* Menu icon mobile */}
                <Menu className="w-3.5 h-3.5 text-gray-500 sm:hidden" />
              </motion.div>

              {/* Hero Section */}
              <div className="relative px-4 pt-5 pb-4">
                {/* Background decoration */}
                <motion.div
                  animate={{
                    background: [
                      "radial-gradient(circle at 60% 0%, rgba(168,85,247,0.06), transparent 60%)",
                      "radial-gradient(circle at 40% 0%, rgba(168,85,247,0.06), transparent 60%)",
                      "radial-gradient(circle at 60% 0%, rgba(168,85,247,0.06), transparent 60%)",
                    ],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />

                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Left: Text */}
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/15 mb-2">
                        <Zap className="w-2 h-2 text-purple-400" />
                        <span className="text-[7px] text-purple-400 font-medium">Nueva colección</span>
                      </div>
                      <div className="h-3.5 w-full bg-gradient-to-r from-white/12 via-white/22 to-white/12 rounded mb-1" />
                      <div className="h-3 w-4/5 bg-white/8 rounded mb-1.5" />
                      <div className="flex gap-1.5 mb-3">
                        <div className="h-1.5 w-12 bg-white/5 rounded" />
                        <div className="h-1.5 w-16 bg-white/5 rounded" />
                      </div>
                    </motion.div>

                    {/* Price */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.55, duration: 0.4 }}
                      className="flex items-center gap-2 mb-3"
                    >
                      <span className="text-[11px] font-bold text-purple-400">Desde $299</span>
                      <span className="text-[7px] text-gray-600 line-through">$499</span>
                      <span className="text-[6px] px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium">-40%</span>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.65, duration: 0.4 }}
                    >
                      <motion.div
                        animate={{ boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 12px rgba(168,85,247,0.2)", "0 0 0px rgba(168,85,247,0)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600"
                      >
                        <span className="text-[7px] text-white font-semibold">Comprar ahora</span>
                        <ArrowRight className="w-2.5 h-2.5 text-white/80" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Right: Product image placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative w-full aspect-square max-w-[160px] mx-auto rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/15 flex items-center justify-center overflow-hidden">
                      {/* Product visual */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/10 border border-purple-500/20 flex items-center justify-center"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/30 to-purple-600/20" />
                      </motion.div>

                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <span className="text-[5px] px-1.5 py-0.5 rounded bg-purple-500/80 text-white font-semibold">Nuevo</span>
                        <span className="text-[5px] px-1.5 py-0.5 rounded bg-emerald-500/80 text-white font-semibold">Oferta</span>
                      </div>

                      {/* Stars */}
                      <div className="absolute bottom-2 flex gap-0.5">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star key={s} className="w-2 h-2 text-purple-400/60 fill-purple-400/60" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex items-center gap-3 px-4 py-2 bg-white/[0.02] border-y border-white/[0.05]"
              >
                {[
                  { icon: Shield, text: "Pago seguro" },
                  { icon: Clock, text: "Envío 24h" },
                  { icon: Zap, text: "Garantía 1 año" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1 text-[7px] text-gray-500">
                    <badge.icon className="w-2.5 h-2.5 text-purple-400/60" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Product grid */}
              <div className="px-4 py-3 space-y-2.5">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75, duration: 0.4 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-[8px] text-gray-400 font-medium">Productos destacados</span>
                  <span className="text-[7px] text-purple-400 flex items-center gap-0.5">
                    Ver todo <ChevronRight className="w-2 h-2" />
                  </span>
                </motion.div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: "Premium A", price: "$299", badge: "Popular" },
                    { name: "Premium B", price: "$449", badge: "Nuevo" },
                    { name: "Premium C", price: "$599", badge: "Top" },
                  ].map((product, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.85 + i * 0.08, duration: 0.4 }}
                      className="group rounded-lg bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:border-purple-500/20 transition-all duration-500"
                    >
                      {/* Image placeholder */}
                      <div className="aspect-square bg-gradient-to-br from-white/[0.04] to-white/[0.02] flex items-center justify-center relative">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400/10 to-purple-600/5 border border-purple-500/10" />
                        <span className="absolute top-1 left-1 text-[4px] px-1 py-0.5 rounded bg-purple-500/70 text-white font-semibold">{product.badge}</span>
                        {/* Star rating mini */}
                        <div className="absolute bottom-1 flex gap-[1px]">
                          {[0, 1, 2, 3, 4].map((s) => (
                            <Star key={s} className="w-1.5 h-1.5 text-purple-400/40 fill-purple-400/40" />
                          ))}
                        </div>
                      </div>
                      {/* Info */}
                      <div className="p-1.5">
                        <div className="h-1 w-full bg-white/10 rounded mb-1" />
                        <div className="flex items-center justify-between">
                          <span className="text-[7px] font-bold text-purple-400">{product.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="mx-4 mb-3 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]"
              >
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-500/20 shrink-0 flex items-center justify-center">
                    <span className="text-[5px] text-purple-300/60">MC</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="h-1.5 w-14 bg-white/12 rounded" />
                      <div className="flex gap-[1px]">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <motion.div
                            key={s}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.25 + s * 0.05 }}
                          >
                            <Star className="w-2 h-2 text-purple-400/60 fill-purple-400/60" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-1 w-full bg-white/4 rounded" />
                      <div className="h-1 w-4/5 bg-white/4 rounded" />
                    </div>
                  </div>
                  <span className="text-[6px] text-gray-600">hoy</span>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.4 }}
                className="px-4 py-2 border-t border-white/5 flex items-center justify-between"
              >
                <div className="flex gap-2">
                  {["in", "ig", "fb", "tw"].map((social, i) => (
                    <div key={i} className="w-3 h-3 rounded bg-white/5 border border-white/[0.06] flex items-center justify-center">
                      <span className="text-[3px] text-gray-600">{social}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-10 bg-white/4 rounded" />
                  <div className="h-1 w-8 bg-white/4 rounded" />
                </div>
              </motion.div>
            </div>

            {/* Benefits list */}
            <div className="px-4 pb-4 space-y-2">
              {[
                { icon: Zap, text: "Carga instantánea (<1s)" },
                { icon: Globe, text: "100% responsive" },
                { icon: Shield, text: "SSL + seguridad" },
                { icon: Eye, text: "SEO optimizado" },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 text-[10px] text-gray-400"
                >
                  <benefit.icon className="w-3 h-3 text-purple-400 shrink-0" />
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center connector */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-10 h-10 rounded-full bg-gray-950 border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/20">
          <Zap className="w-4 h-4 text-purple-400" />
        </div>
      </motion.div>
    </div>
  );
}
