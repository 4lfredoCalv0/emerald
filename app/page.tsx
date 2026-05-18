"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Zap, Globe, BrainCircuit, Shield, TrendingUp, Users, Clock, Monitor, Smartphone, Bot, Cog, Workflow, Database, BarChart3 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardMockup from "@/components/visuals/DashboardMockup";
import ParticleField from "@/components/ParticleField";

const stats = [
  { value: "83%", label: "automatización de procesos" },
  { value: "24/7", label: "atención por WhatsApp IA" },
  { value: "-50%", label: "costos operativos" },
  { value: "4.8★", label: "satisfacción del cliente" },
];

const pillars = [
  {
    icon: Globe,
    title: "Presencia Digital Premium",
    subtitle: "Modernización online completa",
    href: "/soluciones/presencia-digital-premium",
    description:
      "Creamos sistemas digitales que transforman la forma en que tu negocio se presenta al mundo. Sitios web premium, landing pages de alto impacto y toda la infraestructura online que necesitas para competir hoy.",
    features: [
      "Sitios web premium de alto impacto",
      "Landing pages enfocadas en conversión",
      "Branding y diseño de marca digital",
      "Infraestructura online completa",
      "Presencia 24/7 en internet",
    ],
    visualFeatures: [
      { icon: Monitor, label: "Sitio Web" },
      { icon: Smartphone, label: "Responsive" },
      { icon: TrendingUp, label: "SEO" },
    ],
    gradient: "from-emerald-400 to-emerald-600",
    accentColor: "emerald" as const,
    dotColor: "bg-emerald-400",
    tagText: "text-emerald-400",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-500/20",
    iconBg: "from-emerald-400/20 to-emerald-600/10",
    iconBorder: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    accentLine: "from-emerald-500/0 via-emerald-500 to-emerald-500/0",
    hoverBorder: "hover:border-emerald-500/30",
    hoverShadow: "hover:shadow-emerald-500/10",
    ctaText: "text-emerald-400",
  },
  {
    icon: MessageSquare,
    title: "Chatbots y WhatsApp IA",
    subtitle: "Comunicación inteligente 24/7",
    href: "/soluciones/chatbots-whatsapp-ia",
    description:
      "Sistemas que atienden clientes, califican leads y agendan citas al instante por WhatsApp y web. Tu negocio responde siempre — cada mensaje se convierte en oportunidad.",
    features: [
      "Atención automática por WhatsApp",
      "Calificación inteligente de leads",
      "Agenda de citas automatizada",
      "Respuestas inteligentes 24/7",
      "Integración con CRM",
    ],
    visualFeatures: [
      { icon: Bot, label: "IA" },
      { icon: Calendar, label: "Agenda" },
      { icon: BrainCircuit, label: "Smart" },
    ],
    gradient: "from-blue-400 to-cyan-500",
    accentColor: "blue" as const,
    dotColor: "bg-blue-400",
    tagText: "text-blue-400",
    tagBg: "bg-blue-500/10",
    tagBorder: "border-blue-500/20",
    iconBg: "from-blue-400/20 to-cyan-400/10",
    iconBorder: "border-blue-500/30",
    iconColor: "text-blue-400",
    accentLine: "from-blue-500/0 via-blue-500 to-blue-500/0",
    hoverBorder: "hover:border-blue-500/30",
    hoverShadow: "hover:shadow-blue-500/10",
    ctaText: "text-blue-400",
  },
  {
    icon: Cog,
    title: "Automatización Inteligente",
    subtitle: "Operaciones en piloto automático",
    href: "/soluciones/automatizacion-inteligente",
    description:
      "Conectamos tus herramientas y automatizamos procesos: facturación, inventarios, CRM, marketing, seguimiento de clientes. Tu equipo se enfoca en lo importante, el sistema se encarga del resto.",
    features: [
      "Automatización de workflows",
      "CRM inteligente integrado",
      "Integraciones con herramientas",
      "Dashboards en tiempo real",
      "Optimización operativa continua",
    ],
    visualFeatures: [
      { icon: Workflow, label: "Flows" },
      { icon: Database, label: "CRM" },
      { icon: BarChart3, label: "Data" },
    ],
    gradient: "from-purple-400 to-pink-500",
    accentColor: "purple" as const,
    dotColor: "bg-purple-400",
    tagText: "text-purple-400",
    tagBg: "bg-purple-500/10",
    tagBorder: "border-purple-500/20",
    iconBg: "from-purple-400/20 to-pink-400/10",
    iconBorder: "border-purple-500/30",
    iconColor: "text-purple-400",
    accentLine: "from-purple-500/0 via-purple-500 to-purple-500/0",
    hoverBorder: "hover:border-purple-500/30",
    hoverShadow: "hover:shadow-purple-500/10",
    ctaText: "text-purple-400",
  },
];

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Analizamos tu operación actual, identificamos cuellos de botella y oportunidades de mejora.",
    icon: TrendingUp,
  },
  {
    step: "02",
    title: "Diseño de solución",
    description: "Creamos un plan personalizado con las herramientas y sistemas ideales para tu negocio.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Implementación",
    description: "Desplegamos los sistemas, conectamos tus herramientas y capacitamos a tu equipo.",
    icon: Shield,
  },
];

const results = [
  { icon: Users, value: "+150%", label: "más leads capturados" },
  { icon: Clock, value: "-70%", label: "tiempo en tareas repetitivas" },
  { icon: TrendingUp, value: "+40%", label: "tasa de conversión" },
  { icon: Zap, value: "10x", label: "velocidad de respuesta" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
      <ParticleField />
      <div className="relative z-10">
        <Navbar />

        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Copy */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Modernización empresarial con IA
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white"
                >
                  De la operación manual a la{" "}
                  <span className="gradient-text">excelencia digital</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
                >
                  Automatiza ventas, atención al cliente y operaciones con sistemas inteligentes que trabajan por ti.
                </motion.p>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8 grid grid-cols-2 gap-4"
                >
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                      <span className="text-xs text-gray-500">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-10 flex flex-col sm:flex-row items-start gap-4"
                >
                  <motion.a
                    href="/agenda"
                    className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Agenda tu consulta gratuita
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <motion.a
                    href="/beneficios"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver beneficios
                  </motion.a>
                </motion.div>
              </div>

              {/* Right: Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <DashboardMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== PILLARS ===== */}
        <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
                Soluciones
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Transformamos tu negocio{" "}
                <span className="gradient-text">desde la raíz</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Presencia digital premium, comunicación inteligente y automatización.
                Tres pilares para que tu negocio opere al nivel que merece.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {pillars.map((sol, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <Link href={sol.href} className="block h-full">
                    <div
                      className={`relative h-full glass-card p-0 overflow-hidden transition-all duration-500 ${sol.hoverBorder} ${sol.hoverShadow} hover:shadow-2xl`}
                    >
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${sol.accentLine}`} />
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${sol.gradient}/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-700`} />

                    <div className="relative p-8 sm:p-10">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sol.iconBg} ${sol.iconBorder} border flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                        >
                          <sol.icon className={`w-7 h-7 ${sol.iconColor}`} />
                        </motion.div>

                        <div className="flex gap-1.5">
                          {sol.visualFeatures.map((vf, i) => (
                            <div
                              key={i}
                              className={`w-8 h-8 rounded-lg ${sol.tagBg} ${sol.tagBorder} border flex items-center justify-center`}
                            >
                              <vf.icon className={`w-3.5 h-3.5 ${sol.iconColor}`} />
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className={`text-xs font-medium ${sol.tagText} uppercase tracking-wider mb-2`}>
                        {sol.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-8">
                        {sol.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {sol.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                            <div className={`w-1.5 h-1.5 rounded-full ${sol.dotColor} shrink-0`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`flex items-center gap-2 text-sm ${sol.ctaText} font-medium`}>
                        <span>Explorar solución</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${sol.accentLine} origin-left`}
                    />
                  </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
                Proceso
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Cómo{" "}
                <span className="gradient-text">trabajamos</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald-500/20 to-transparent" />
                  )}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-400/60">{step.step}</span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== RESULTS ===== */}
        <section className="relative py-24 sm:py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
                Resultados
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Impacto{" "}
                <span className="gradient-text">medible</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 text-center group hover:border-emerald-500/20 transition-all duration-500"
                >
                  <result.icon className="w-5 h-5 text-emerald-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white mb-1">{result.value}</p>
                  <p className="text-xs text-gray-500">{result.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consulta disponible</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                >
                  ¿Listo para dar el{" "}
                  <span className="gradient-text">siguiente paso?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                  Agenda una consulta estratégica gratuita. Analizamos tu operación y diseñamos los sistemas que tu negocio necesita.
                </motion.p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.a
                    href="/agenda"
                    className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Agenda tu consulta gratuita
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <motion.a
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-5 h-5" />
                    Escríbenos
                  </motion.a>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-sm text-gray-500"
                >
                  Sin compromiso. Respuesta en menos de 2 horas.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
