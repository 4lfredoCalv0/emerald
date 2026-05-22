"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  Workflow,
  Database,
  BarChart3,
  Zap,
  Shield,
  ArrowRight,
  GitBranch,
  Clock,
  Link2,
  Activity,
  Heart,
  Coffee,
  Dumbbell,
  Building2,
  ShoppingCart,
  Briefcase,
  HardHat,
  Sparkles,
  GraduationCap,
  Truck,
  Gauge,
  Network,
} from "lucide-react";
import FeatureShowcase from "@/components/solutions/FeatureShowcase";
import IndustryFit from "@/components/solutions/IndustryFit";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import HumanRobotDashboard from "@/components/visuals/HumanRobotDashboard";
import FAQSection from "@/components/seo/faq-section";
import {
  staggerContainer,
  fadeUpSpring,
  scaleInSpring,
  slideInLeft,
  slideInRight,
  buttonInteraction,
  EASE_OUT_EXPO,
  SPRING_SNAPPY,
} from "@/lib/animation-variants";
import { MaskLine } from "@/components/motion/MotionPrimitives";

const automationFeatures = [
  { icon: Workflow, label: "Workflows" },
  { icon: Network, label: "Integraciones" },
  { icon: Gauge, label: "Analytics" },
  { icon: Zap, label: "Velocidad" },
];

export default function AutomatizacionPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative overflow-hidden" style={{ background: "#0a0612" }}>
      {/* ── Global grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
      {/* ── Ambient light blobs — continuous lighting that bridges all sections ── */}
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 100px)", left: "50%", transform: "translateX(-50%)",
        width: "1000px", height: "900px",
        background: "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 65%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 900px)", right: "-200px",
        width: "800px", height: "900px",
        background: "radial-gradient(ellipse at right, rgba(236,72,153,0.07) 0%, transparent 60%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 1800px)", left: "-150px",
        width: "750px", height: "850px",
        background: "radial-gradient(ellipse at left, rgba(139,92,246,0.09) 0%, transparent 60%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 2700px)", left: "50%", transform: "translateX(-50%)",
        width: "950px", height: "850px",
        background: "radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, transparent 65%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 3500px)", right: "-100px",
        width: "700px", height: "800px",
        background: "radial-gradient(ellipse at right, rgba(236,72,153,0.06) 0%, transparent 60%)",
      }} />

      {/* ==================== CINEMATIC HERO - FULL WIDTH IMAGE ==================== */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* FULL WIDTH HERO IMAGE */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/AutomatizacionInteligenteIMG.webp')",
              opacity: 0.85,
              filter: "saturate(1.4) contrast(1.15) brightness(1.0)",
            }}
          />
          
          {/* PURPLE GLOW */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,92,246,0.35) 0%, transparent 70%)",
          }} />
          
          {/* MAGENTA/PINK ACCENT */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 40% 35% at 80% 85%, rgba(236,72,153,0.25) 0%, transparent 60%)",
          }} />
          
          {/* CYAN SECONDARY */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 30% 25% at 20% 75%, rgba(6,182,212,0.12) 0%, transparent 50%)",
          }} />
          
          {/* Dark gradient - top + bottom darker, vignette around text for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
          {/* Centered scrim — concentrates darkness behind the headline */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 75%)",
          }} />
        </motion.div>

        {/* BOTTOM FADE — smooth transition into the dark page background */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-[4] pointer-events-none" style={{
          background: "linear-gradient(to bottom, transparent, #0a0612)",
        }} />

        {/* GRAIN TEXTURE */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }} />

        {/* SCANLINES */}
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.01) 1px, rgba(255,255,255,0.01) 2px)",
        }} />

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 z-[3] pointer-events-none opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />

        {/* CONTENT - CENTER, OVERLAYING IMAGE */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center">
          <div className="px-6 py-20 md:px-12 lg:px-20 max-w-2xl text-center">
            {/* BADGE — anticipation overshoot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8"
              style={{
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.4)",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#8b5cf6]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#8b5cf6" }}>
                Automatización Inteligente
              </span>
            </motion.div>

            {/* HEADLINE — mask reveal per line, bright lavender + strong glow for legibility */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.05,
                textShadow: "0 2px 24px rgba(0,0,0,0.55)",
              }}
            >
              <MaskLine delay={0.15}>TU OPERACIÓN EN</MaskLine>
              <MaskLine delay={0.32}>
                <span style={{
                  color: "#c4b5fd",
                  textShadow: "0 0 40px rgba(139,92,246,0.7), 0 0 80px rgba(139,92,246,0.4), 0 2px 24px rgba(0,0,0,0.6)",
                }}>
                  PILOTO AUTOMÁTICO
                </span>
              </MaskLine>
            </h1>

            {/* SUBHEADLINE — mask reveal */}
            <div className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.55 }}
                >
                  Conectamos tus herramientas y automatizamos procesos. Tu equipo se enfoca en lo importante.
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-3">
                <motion.span
                  className="block text-[#ec4899]"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.72 }}
                >
                  El sistema se encarga del resto.
                </motion.span>
              </span>
            </div>

            {/* FEATURE PILLS — stagger + spring hover */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.9 } },
              }}
              className="flex flex-wrap gap-3 mb-10 justify-center"
            >
              {automationFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={scaleInSpring}
                  whileHover={{ y: -3, scale: 1.04, transition: SPRING_SNAPPY }}
                  className="flex items-center gap-2 px-3 py-1.5 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <feature.icon className="w-3.5 h-3.5" style={{ color: i === 0 ? "#8b5cf6" : i === 1 ? "#06b6d4" : i === 2 ? "#ec4899" : "#10b981" }} />
                  <span className="text-xs font-medium text-gray-300">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAS — spring + squash & stretch */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={fadeUpSpring}>
                <motion.div {...buttonInteraction}>
                  <Link
                    href="/agenda"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-black"
                    style={{
                      background: "#8b5cf6",
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                      boxShadow: "0 0 0 rgba(139,92,246,0)",
                      transition: "box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(139,92,246,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(139,92,246,0)";
                    }}
                  >
                    AUTOMATIZA TU OPERACIÓN
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={SPRING_SNAPPY}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-[#8b5cf6] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== HUMAN + ROBOT COLLAB DASHBOARD ==================== */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: narrative + bullets */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-xs font-bold text-[#a78bfa] uppercase tracking-[0.3em] mb-4">EL SISTEMA</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
                <MaskLine delay={0.15}>HUMANO Y MÁQUINA</MaskLine>
                <MaskLine delay={0.3}>
                  <span style={{ color: "#c4b5fd", textShadow: "0 0 40px rgba(139,92,246,0.5)" }}>EN SINCRONÍA</span>
                </MaskLine>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                La automatización no reemplaza a tu equipo, lo amplifica. Tu gente toma las decisiones; el sistema ejecuta los procesos sin descanso, sin errores, sin esperar a nadie.
              </p>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {[
                  { icon: Workflow, text: "Workflows que se ejecutan solos" },
                  { icon: Link2, text: "Datos sincronizados entre +50 herramientas" },
                  { icon: Activity, text: "Reportes y alertas en tiempo real" },
                  { icon: Shield, text: "Respaldo automático y seguridad garantizada" },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUpSpring} className="flex items-center gap-3 group">
                    <motion.div
                      className="w-9 h-9 shrink-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      transition={SPRING_SNAPPY}
                      style={{
                        background: "rgba(139,92,246,0.1)",
                        border: "1px solid rgba(139,92,246,0.18)",
                        clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                      }}
                    >
                      <item.icon className="w-4 h-4 text-[#a78bfa]" />
                    </motion.div>
                    <span className="text-base text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* RIGHT: animated dashboard with human + robot collaborators */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex justify-center lg:justify-end"
            >
              <HumanRobotDashboard />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <FeatureShowcase
        accentColor="purple"
        label="Capacidades"
        title="Todo lo que incluye tu sistema de automatización"
        subtitle="Cada módulo se integra con los demás para crear una operación inteligente y sin fricciones."
        features={[
          {
            icon: Workflow,
            title: "Automatización de Workflows",
            description:
              "Procesos que se ejecutan automáticamente: desde la captura del lead hasta el seguimiento post-venta.",
            tag: "Core",
          },
          {
            icon: Database,
            title: "CRM Inteligente",
            description:
              "Gestión de clientes con scoring de leads, recordatorios automáticos y seguimiento personalizado.",
            tag: "Clientes",
          },
          {
            icon: GitBranch,
            title: "Integraciones",
            description:
              "Conexión con facturación, inventarios, redes sociales, pasarelas de pago y más herramientas.",
            tag: "Conexiones",
          },
          {
            icon: BarChart3,
            title: "Dashboards en Tiempo Real",
            description:
              "Métricas clave de tu negocio al instante: ventas, clientes, rendimiento y más.",
            tag: "Analytics",
          },
          {
            icon: Clock,
            title: "Recordatorios Automáticos",
            description:
              "Sistema que nunca olvida: citas, pagos, seguimientos y tareas programadas.",
            tag: "Automatización",
          },
          {
            icon: Shield,
            title: "Seguridad y Respaldo",
            description:
              "Datos protegidos, copias de seguridad automáticas y cumplimiento de privacidad.",
            tag: "Seguridad",
          },
        ]}
      />

      {/* Industries */}
      <IndustryFit
        accentColor="purple"
        title="Diseñado para tu tipo de negocio"
        subtitle="Cualquier negocio con procesos repetitivos puede automatizar su operación y liberar tiempo para lo que importa."
        industries={[
          { name: "Clínicas y consultorios", icon: Heart },
          { name: "Restaurantes", icon: Coffee },
          { name: "Gimnasios y spas", icon: Dumbbell },
          { name: "Inmobiliarias", icon: Building2 },
          { name: "Tiendas y e-commerce", icon: ShoppingCart },
          { name: "Estudios profesionales", icon: Briefcase },
          { name: "Constructoras", icon: HardHat },
          { name: "Servicios de belleza", icon: Sparkles },
          { name: "Educación y cursos", icon: GraduationCap },
          { name: "Distribuidoras", icon: Truck },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        accentColor="purple"
        items={[
          {
            question: "¿Qué herramientas pueden integrarse con la automatización?",
            answer: "Conectamos con más de 50 herramientas: facturación electrónica, inventarios, CRM, pasarelas de pago, redes sociales, email marketing, Google Sheets, y muchas más. Si tu herramienta tiene API, la conectamos.",
          },
          {
            question: "¿Necesito conocimientos técnicos para usar el sistema?",
            answer: "No. Diseñamos dashboards intuitivos y capacitamos a tu equipo. El sistema funciona automáticamente en segundo plano — tú solo ves los resultados.",
          },
          {
            question: "¿Mis datos están seguros con la automatización?",
            answer: "Sí. Implementamos cifrado de datos, respaldos automáticos y cumplimos con estándares de privacidad. Tus datos nunca se comparten con terceros.",
          },
          {
            question: "¿Cuánto tiempo toma implementar la automatización?",
            answer: "Depende de la complejidad. Una automatización básica puede estar lista en 1-2 semanas. Sistemas completos con múltiples integraciones toman 3-6 semanas.",
          },
        ]}
      />

      {/* Final CTA */}
      <SolutionCTA
        accentColor="purple"
        title={
          <>
            ¿Listo para automatizar tu{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
              operación?
            </span>
          </>
        }
        description="Agenda una consulta estratégica gratuita. Analizamos tus procesos actuales y diseñamos el sistema de automatización que tu negocio necesita."
        ctaText="Agenda tu consulta estratégica"
      />
    </div>
  );
}
