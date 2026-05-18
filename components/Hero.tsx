"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, GitBranch, Workflow } from "lucide-react";
import { HeroVisual } from "@/components/visuals";

const floatingIcons = [
  { Icon: GitBranch, delay: 0, x: -160, y: -100 },
  { Icon: Workflow, delay: 0.5, x: 160, y: -80 },
  { Icon: Cpu, delay: 1, x: 140, y: 90 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      <HeroVisual accentColor="emerald" type="nodes" />

      {/* Ambient orbs - static, no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Structural lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Negocios Modernos · Sistemas Inteligentes</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          Llevamos tu negocio{" "}
          <span className="gradient-text">al siguiente nivel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Presencia digital premium, operaciones automatizadas y sistemas que trabajan por ti.
          Todo lo que tu negocio necesita para operar al nivel que merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/agenda"
            className="group px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Agenda tu consulta estratégica
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="/soluciones"
            className="px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Conoce nuestras soluciones
          </motion.a>
        </motion.div>

        {floatingIcons.map(({ Icon, delay, x, y }) => (
          <motion.div
            key={delay}
            className="absolute hidden lg:block"
            style={{ top: "50%", left: "50%", willChange: "transform" }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 0.3, 0.8, 0.8, 0.3, 0],
              x: [0, x * 0.5, x, x * 0.8, x * 0.5, 0],
              y: [0, y * 0.5, y, y * 0.8, y * 0.5, 0],
            }}
            transition={{
              duration: 8,
              delay,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            }}
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-emerald-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
