"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  MessageSquare,
  Cog,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SystemDiagram, HeroVisual, BusinessDashboard } from "@/components/visuals";
import Breadcrumbs from "@/components/Breadcrumbs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function BeneficiosPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroVisual accentColor="emerald" type="nodes" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <Breadcrumbs items={[{ label: "Beneficios", href: "/beneficios" }]} />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
          >
            <span>Beneficios</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Resultados que{" "}
            <span className="gradient-text animate-gradient-x">transforman</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            De negocio tradicional a empresa moderna. Resultados que se notan desde
            el primer mes de operación.
          </motion.p>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                icon: Globe,
                title: "Presencia Profesional",
                description:
                  "Tu negocio se ve y opera como una empresa moderna. Sitio web premium, branding coherente y presencia digital que genera confianza desde el primer contacto.",
              },
              {
                icon: Clock,
                title: "Tiempo Recuperado",
                description:
                  "Automatiza tareas repetitivas y recupera horas de trabajo cada semana. Tu equipo se enfoca en lo que realmente importa: hacer crecer el negocio.",
              },
              {
                icon: TrendingUp,
                title: "Crecimiento Sostenible",
                description:
                  "Sistemas que escalan con tu negocio. Más clientes, más ventas, más eficiencia — sin necesidad de crecer en complicación.",
              },
              {
                icon: MessageSquare,
                title: "Comunicación Centralizada",
                description:
                  "WhatsApp, web y llamadas unificados en un solo sistema. Tus clientes reciben respuestas al instante, sin importar el canal ni la hora.",
              },
              {
                icon: Users,
                title: "Gestión Inteligente de Clientes",
                description:
                  "Cada consulta se captura, califica y asigna automáticamente. Nunca más pierdes un cliente potencial por falta de seguimiento.",
              },
              {
                icon: Cog,
                title: "Operaciones Optimizadas",
                description:
                  "Facturación, inventarios, CRM, recordatorios — todo conectado y funcionando sin intervención manual. Menos errores, más tranquilidad.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-6 sm:p-8 group hover:border-emerald-500/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual: Ecosystem overview */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />

        {/* Structural lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
              Ecosistema
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Todo conectado,{" "}
              <span className="gradient-text">todo funcionando</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Tu presencia digital, comunicación y automatización trabajan como un solo sistema.
              Sin piezas sueltas, sin datos perdidos, sin oportunidades desperdiciadas.
            </p>

            {/* Visual connector */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="w-12 h-px bg-emerald-500/20" />
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="w-12 h-px bg-emerald-500/20" />
            </div>
          </motion.div>

          {/* Ecosystem visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BusinessDashboard />
          </motion.div>

          {/* Feature pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              {
                icon: Globe,
                title: "Presencia digital",
                description: "Que genera confianza desde el primer contacto",
                color: "emerald",
              },
              {
                icon: MessageSquare,
                title: "Comunicación",
                description: "Que nunca duerme ni pierde una oportunidad",
                color: "blue",
              },
              {
                icon: Zap,
                title: "Operaciones",
                description: "Que funcionan solas, sin intervención manual",
                color: "purple",
              },
            ].map((pillar, i) => {
              const colorMap = {
                emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", text: "text-emerald-400" },
                blue: { border: "border-blue-500/20", bg: "bg-blue-500/5", text: "text-blue-400" },
                purple: { border: "border-purple-500/20", bg: "bg-purple-500/5", text: "text-purple-400" },
              };
              const colors = colorMap[pillar.color as keyof typeof colorMap];
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className={`rounded-xl ${colors.bg} ${colors.border} border p-5 sm:p-6 text-center group hover:shadow-lg transition-all duration-500`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className={`text-sm font-semibold ${colors.text} mb-1`}>
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Operational Impact */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
              Impacto Operativo
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Cómo evoluciona tu{" "}
              <span className="gradient-text">operación diaria</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              {
                icon: Zap,
                title: "Respuestas instantáneas",
                description:
                  "Tu negocio responde clientes al instante, sin importar la hora ni el día. Cada mensaje es una oportunidad capturada.",
              },
              {
                icon: Shield,
                title: "Datos centralizados y seguros",
                description:
                  "Toda la información de tu negocio en un solo lugar, protegida y accesible cuando la necesitas.",
              },
              {
                icon: TrendingUp,
                title: "Decisiones basadas en datos",
                description:
                  "Dashboards en tiempo real con métricas clave. Toma decisiones informadas sin esperar reportes manuales.",
              },
              {
                icon: Users,
                title: "Equipo enfocado en valor",
                description:
                  "Tu equipo deja de hacer tareas repetitivas y se concentra en lo que realmente genera resultados.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-card p-6 sm:p-8 flex items-start gap-5 transition-all duration-500 hover:border-emerald-500/20">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transformation Summary */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              De caos operativo a{" "}
              <span className="gradient-text">sistemas inteligentes</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              No se trata solo de tecnología. Se trata de hacer que tu negocio
              funcione como siempre debió hacerlo.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants}>
              <div className="rounded-xl bg-red-500/[0.04] border border-red-500/10 p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    Sin Emerald
                  </span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Tareas manuales que consumen horas diarias",
                    "Clientes perdidos por falta de seguimiento",
                    "Datos dispersos en múltiples herramientas",
                    "Sin visibilidad del rendimiento del negocio",
                    "Procesos que dependen de una sola persona",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10 p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                    Con Emerald
                  </span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Workflows automatizados que funcionan sin intervención",
                    "Cada lead capturado y calificado automáticamente",
                    "Todos los datos centralizados en un solo sistema",
                    "Dashboards en tiempo real con métricas clave",
                    "Procesos que operan independientemente del equipo",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              ¿Listo para modernizar tu{" "}
              <span className="gradient-text">operación?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Agenda una consulta estratégica gratuita. Analizamos cómo operas hoy y
              diseñamos los sistemas que tu negocio necesita para dar el siguiente paso.
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
            >
              Agenda tu consulta estratégica
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
