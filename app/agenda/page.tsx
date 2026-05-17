"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Phone,
  Globe,
  Cog,
} from "lucide-react";
import { HeroVisual } from "@/components/visuals";

export default function AgendaPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroVisual accentColor="emerald" type="nodes" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
          >
            <Calendar className="w-4 h-4" />
            <span>Consulta Estratégica</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Agenda tu consulta{" "}
            <span className="gradient-text animate-gradient-x">estratégica</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            30 minutos para analizar tu operación actual y diseñar
            la estrategia de modernización que tu negocio necesita.
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Cómo funciona la{" "}
              <span className="gradient-text">consulta estratégica</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                step: "01",
                title: "Elige tu horario",
                description:
                  "Selecciona el día y hora que mejor te funcione. Confirmación inmediata por email y WhatsApp.",
              },
              {
                icon: MessageSquare,
                step: "02",
                title: "Análisis de tu negocio",
                description:
                  "En 30 minutos analizamos tu operación, identificamos oportunidades y definimos prioridades.",
              },
              {
                icon: Cog,
                step: "03",
                title: "Plan de acción",
                description:
                  "Recibes un plan personalizado con las soluciones ideales y los siguientes pasos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 sm:p-8 text-center group hover:border-emerald-500/20 transition-all duration-500"
              >
                <span className="text-xs font-mono text-emerald-400/60 mb-4 block">
                  {item.step}
                </span>
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8">
                <Clock className="w-4 h-4" />
                <span>30 minutos · Consulta estratégica</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              ¿Listo para modernizar tu{" "}
              <span className="gradient-text">operación?</span>
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Agenda tu consulta estratégica. Analizamos cómo operas hoy
                y diseñamos los sistemas que tu negocio necesita para dar el siguiente paso.
              </p>

              {/* Placeholder for Calendly or scheduling widget */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-300">
                    Integración de agenda disponible próximamente
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="group px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Agenda tu consulta estratégica
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contacto"
                  className="px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full hover:border-emerald-500/50 hover:text-emerald-300 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Cuéntanos primero
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Respuesta en menos de 2 horas. Sin compromiso.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to expect */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Qué esperar de la{" "}
              <span className="gradient-text">consulta</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: CheckCircle2,
                title: "Análisis de tu operación actual",
                description:
                  "Identificamos procesos manuales, cuellos de botella y oportunidades.",
              },
              {
                icon: CheckCircle2,
                title: "Recomendaciones personalizadas",
                description:
                  "Te mostramos exactamente qué soluciones aplican a tu negocio.",
              },
              {
                icon: CheckCircle2,
                title: "Plan de implementación claro",
                description:
                  "Recibes un roadmap con pasos concretos y tiempos estimados.",
              },
              {
                icon: CheckCircle2,
                title: "Sin presión comercial",
                description:
                  "La consulta es informativa. Tú decides si y cuándo avanzar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 sm:p-8 flex items-start gap-5 group hover:border-emerald-500/20 transition-all duration-500"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
