"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  MessageSquare,
  Cog,
  ArrowRight,
  Monitor,
  Smartphone,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Bot,
  Calendar,
  BrainCircuit,
  Workflow,
  Database,
  GitBranch,
  Clock,
  Shield,
} from "lucide-react";
import { HeroVisual } from "@/components/visuals";

const soluciones = [
  {
    icon: Globe,
    title: "Presencia Digital Premium",
    subtitle: "Modernización online completa",
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
    href: "/soluciones/presencia-digital-premium",
  },
  {
    icon: MessageSquare,
    title: "Chatbots y WhatsApp IA",
    subtitle: "Comunicación inteligente 24/7",
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
    href: "/soluciones/chatbots-whatsapp-ia",
  },
  {
    icon: Cog,
    title: "Automatización Inteligente",
    subtitle: "Operaciones en piloto automático",
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
    href: "/soluciones/automatizacion-inteligente",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function SolutionCard({ sol, index }: { sol: typeof soluciones[0]; index: number }) {
  const colorMap = {
    emerald: {
      iconBg: "from-emerald-400/20 to-emerald-600/10",
      iconBorder: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      hoverBorder: "hover:border-emerald-500/30",
      hoverShadow: "hover:shadow-emerald-500/10",
      tagBg: "bg-emerald-500/10",
      tagText: "text-emerald-400",
      tagBorder: "border-emerald-500/20",
      dotColor: "bg-emerald-400",
      ctaText: "text-emerald-400",
      accentLine: "from-emerald-500/0 via-emerald-500 to-emerald-500/0",
    },
    blue: {
      iconBg: "from-blue-400/20 to-cyan-400/10",
      iconBorder: "border-blue-500/30",
      iconColor: "text-blue-400",
      hoverBorder: "hover:border-blue-500/30",
      hoverShadow: "hover:shadow-blue-500/10",
      tagBg: "bg-blue-500/10",
      tagText: "text-blue-400",
      tagBorder: "border-blue-500/20",
      dotColor: "bg-blue-400",
      ctaText: "text-blue-400",
      accentLine: "from-blue-500/0 via-blue-500 to-blue-500/0",
    },
    purple: {
      iconBg: "from-purple-400/20 to-pink-400/10",
      iconBorder: "border-purple-500/30",
      iconColor: "text-purple-400",
      hoverBorder: "hover:border-purple-500/30",
      hoverShadow: "hover:shadow-purple-500/10",
      tagBg: "bg-purple-500/10",
      tagText: "text-purple-400",
      tagBorder: "border-purple-500/20",
      dotColor: "bg-purple-400",
      ctaText: "text-purple-400",
      accentLine: "from-purple-500/0 via-purple-500 to-purple-500/0",
    },
  };

  const colors = colorMap[sol.accentColor];

  return (
    <motion.div variants={itemVariants} className="group">
      <Link href={sol.href} className="block h-full">
        <div
          className={`relative h-full glass-card p-0 overflow-hidden transition-all duration-500 ${colors.hoverBorder} ${colors.hoverShadow} hover:shadow-2xl`}
        >
          {/* Top accent line */}
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.accentLine}`} />

          {/* Ambient glow */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${sol.gradient}/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-700`} />

          {/* Content */}
          <div className="relative p-8 sm:p-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.iconBg} ${colors.iconBorder} border flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
              >
                <sol.icon className={`w-7 h-7 ${colors.iconColor}`} />
              </motion.div>

              {/* Visual feature tags */}
              <div className="flex gap-1.5">
                {sol.visualFeatures.map((vf, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-lg ${colors.tagBg} ${colors.tagBorder} border flex items-center justify-center`}
                  >
                    <vf.icon className={`w-3.5 h-3.5 ${colors.iconColor}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Title */}
            <p className={`text-xs font-medium ${colors.tagText} uppercase tracking-wider mb-2`}>
              {sol.subtitle}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
              {sol.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              {sol.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {sol.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${colors.dotColor} shrink-0`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`flex items-center gap-2 text-sm ${colors.ctaText} font-medium`}>
              <span>Explorar solución</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.accentLine} origin-left`}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function SolucionesPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroVisual accentColor="emerald" type="grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        {/* Structural lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8 animate-glow-pulse"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Nuestras soluciones</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Sistemas inteligentes para{" "}
            <span className="gradient-text animate-gradient-x">tu negocio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Tres pilares. Un solo ecosistema. Todo lo que necesitas para
            modernizar tu operación con tecnología que funciona.
          </motion.p>

          {/* Visual connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="w-16 h-px bg-emerald-500/20" />
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="w-16 h-px bg-emerald-500/20" />
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          {/* Section header */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Transformamos tu negocio{" "}
              <span className="gradient-text animate-gradient-x">desde la raíz</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Presencia digital premium, comunicación inteligente y automatización.
              Tres pilares para que tu negocio opere al nivel que merece.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {soluciones.map((sol, index) => (
              <SolutionCard key={index} sol={sol} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />

        {/* Structural lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Animated ambient glow */}
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.1), transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(16,185,129,0.1), transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.1), transparent 50%)",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0"
            />

            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

            <div className="relative z-10">
              {/* Status indicator */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Consulta disponible</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                ¿No sabes por dónde{" "}
                <span className="gradient-text">empezar?</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Agenda una consulta estratégica gratuita. Analizamos tu negocio y te recomendamos
                la solución que más te conviene.
              </p>
              <Link
                href="/agenda"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
              >
                Agenda tu consulta estratégica
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
