"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  Bot,
  Calendar,
  Users,
  ArrowRight,
  BrainCircuit,
  MessageCircle,
  Filter,
  Repeat,
  Sparkles,
  Heart,
  Coffee,
  Dumbbell,
  Building2,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  HardHat,
  Plane,
  MessageSquarePlus,
  Wifi,
  Smartphone,
} from "lucide-react";
import FAQSection from "@/components/seo/faq-section";
import {
  staggerContainer,
  staggerContainerFast,
  fadeUpSpring,
  scaleInSpring,
  slideInLeft,
  slideInRight,
  buttonInteraction,
  EASE_OUT_EXPO,
  SPRING_SNAPPY,
} from "@/lib/animation-variants";
import { MaskLine, TiltCard } from "@/components/motion/MotionPrimitives";

const capabilities = [
  {
    icon: Smartphone,
    title: "WhatsApp Automatizado",
    description: "Chatbot inteligente que responde, califica y agenda sin intervención humana.",
    tag: "WhatsApp",
    tagColor: "#06b6d4",
  },
  {
    icon: Bot,
    title: "Agente IA Web",
    description: "Asistente virtual en tu sitio web que guía visitantes y convierte consultas en acciones.",
    tag: "Web",
    tagColor: "#06b6d4",
  },
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Sistema de reservas automático integrado con tu calendario y confirmaciones.",
    tag: "Agenda",
    tagColor: "#06b6d4",
  },
  {
    icon: BrainCircuit,
    title: "Respuestas Contextuales",
    description: "IA que entiende el contexto de cada conversación y responde de forma natural.",
    tag: "IA",
    tagColor: "#06b6d4",
  },
  {
    icon: Users,
    title: "Calificación de Leads",
    description: "Cada consulta se evalúa automáticamente para priorizar oportunidades valiosas.",
    tag: "Leads",
    tagColor: "#06b6d4",
  },
  {
    icon: MessageSquarePlus,
    title: "Seguimiento Automático",
    description: "El sistema envía follow-ups y reenganche a leads inactivos sin que tengas que intervenir.",
    tag: "Follow-up",
    tagColor: "#06b6d4",
  },
];


const pillars = [
  {
    icon: MessageCircle,
    label: "Responde al instante",
    description: "Cada mensaje recibe respuesta inmediata, sin importar la hora. Tu cliente siente que tu negocio está siempre disponible.",
  },
  {
    icon: Filter,
    label: "Califica automáticamente",
    description: "El sistema identifica qué necesita cada persona, filtra consultas rutinarias y prioriza oportunidades reales.",
  },
  {
    icon: Repeat,
    label: "Convierte sin intervención",
    description: "Desde la primera consulta hasta la cita o venta concretada. Todo fluye automáticamente.",
  },
];

const industries = [
  { name: "Clínicas y consultorios", icon: Heart },
  { name: "Restaurantes y delivery", icon: Coffee },
  { name: "Gimnasios y spas", icon: Dumbbell },
  { name: "Inmobiliarias", icon: Building2 },
  { name: "Tiendas y e-commerce", icon: ShoppingCart },
  { name: "Estudios profesionales", icon: Briefcase },
  { name: "Servicios de belleza", icon: Sparkles },
  { name: "Educación y cursos", icon: GraduationCap },
  { name: "Constructoras", icon: HardHat },
  { name: "Agencias de viajes", icon: Plane },
];

const chatFeatures = [
  { icon: Wifi, label: "Online 24/7" },
  { icon: Sparkles, label: "Respuesta IA" },
  { icon: Calendar, label: "Agenda" },
  { icon: Users, label: "Leads" },
];

export default function ChatbotsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative overflow-hidden" style={{ background: "#020810" }}>
      {/* ── Global grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
      {/* ── Ambient light blobs — continuous lighting that bridges all sections ── */}
      {/* Blob A: narrative → capabilities */}
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 100px)", left: "50%", transform: "translateX(-50%)",
        width: "1000px", height: "900px",
        background: "radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, transparent 65%)",
      }} />
      {/* Blob B: capabilities → process */}
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 1000px)", right: "-150px",
        width: "750px", height: "850px",
        background: "radial-gradient(ellipse at right, rgba(6,182,212,0.08) 0%, transparent 60%)",
      }} />
      {/* Blob C: process → industries */}
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 1900px)", left: "-100px",
        width: "700px", height: "800px",
        background: "radial-gradient(ellipse at left, rgba(6,182,212,0.08) 0%, transparent 60%)",
      }} />
      {/* Blob D: industries → FAQ → CTA */}
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 2800px)", left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "800px",
        background: "radial-gradient(ellipse at center, rgba(6,182,212,0.09) 0%, transparent 65%)",
      }} />

      {/* ==================== HERO ==================== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* BACKGROUND: full-width image */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/ChatbotsWhatsAppIMG.webp')",
              opacity: 0.85,
              filter: "saturate(1.4) contrast(1.15) brightness(1.0)",
            }}
          />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6,182,212,0.35) 0%, transparent 70%)",
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 40% 35% at 80% 85%, rgba(139,92,246,0.25) 0%, transparent 60%)",
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 30% 25% at 20% 75%, rgba(236,72,153,0.12) 0%, transparent 50%)",
          }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/70" />
        </motion.div>

        {/* GRAIN */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }} />

        {/* SCANLINES */}
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.01) 1px, rgba(255,255,255,0.01) 2px)",
        }} />

        {/* BOTTOM FADE — smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-[4] pointer-events-none" style={{
          background: "linear-gradient(to bottom, transparent, #020810)",
        }} />

        {/* CONTENT */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-end">
          <div className="px-6 py-20 md:px-12 lg:px-20 max-w-2xl mr-0 ml-auto">
            {/* Badge — anticipation overshoot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8"
              style={{
                background: "rgba(6,182,212,0.15)",
                border: "1px solid rgba(6,182,212,0.4)",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#06b6d4]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#06b6d4" }}>
                Chatbots y WhatsApp IA
              </span>
            </motion.div>

            {/* Headline — mask reveal per line */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05 }}
            >
              <MaskLine delay={0.15}>CADA MENSAJE ES UNA</MaskLine>
              <MaskLine delay={0.32} className="text-[#06b6d4]" >
                <span style={{ textShadow: "0 0 60px rgba(6,182,212,0.6)" }}>OPORTUNIDAD</span>
              </MaskLine>
            </h1>

            {/* Subheadline — mask reveal */}
            <div className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.55 }}
                >
                  Sistemas inteligentes que atienden clientes, califican leads y agendan citas al instante.
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-3">
                <motion.span
                  className="block text-white"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.72 }}
                >
                  Tu negocio responde siempre.
                </motion.span>
              </span>
            </div>

            {/* Chat status pills — fast stagger */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.85 } },
              }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {chatFeatures.map((feature, i) => (
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
                  <feature.icon className="w-3.5 h-3.5" style={{ color: "#06b6d4" }} />
                  <span className="text-xs font-medium text-gray-300">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs — spring + squash & stretch */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 1.15 } },
              }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <motion.div variants={fadeUpSpring}>
                <motion.div {...buttonInteraction}>
                  <Link
                    href="/agenda"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-black"
                    style={{
                      background: "#06b6d4",
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                      boxShadow: "0 0 0 rgba(6,182,212,0)",
                      transition: "box-shadow 0.4s ease, background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(6,182,212,0.6)";
                      (e.currentTarget as HTMLElement).style.background = "#22d3ee";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(6,182,212,0)";
                      (e.currentTarget as HTMLElement).style.background = "#06b6d4";
                    }}
                  >
                    AUTOMATIZA TU COMUNICACIÓN
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
            <div className="w-1 h-2 bg-[#06b6d4] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== NARRATIVE: TWO COLUMN ==================== */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: texto + pillars — slide-in left + stagger pillars */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-xs font-bold text-[#06b6d4] uppercase tracking-[0.3em] mb-4">EL SISTEMA</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
                <MaskLine delay={0.15}>COMUNICACIÓN</MaskLine>
                <MaskLine delay={0.3} className="text-[#06b6d4]">INTELIGENTE</MaskLine>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                No es un chatbot genérico. Es un sistema de atención diseñado para convertir cada conversación en una oportunidad de negocio real.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="space-y-6"
              >
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpSpring}
                    className="flex gap-4 group"
                  >
                    <motion.div
                      className="w-10 h-10 shrink-0 flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      transition={SPRING_SNAPPY}
                      style={{
                        background: "rgba(6,182,212,0.08)",
                        border: "1px solid rgba(6,182,212,0.15)",
                        clipPath: "polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px))",
                      }}
                    >
                      <pillar.icon className="w-5 h-5 text-[#06b6d4]" />
                    </motion.div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {pillar.label}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: chat UI mockup — slide-in right with spring */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Phone frame */}
                <div
                  className="relative w-72 rounded-[2rem] overflow-hidden"
                  style={{
                    background: "rgba(6,10,18,0.97)",
                    border: "1px solid rgba(6,182,212,0.15)",
                    boxShadow: "0 0 80px rgba(6,182,212,0.1), 0 40px 80px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 px-4 py-3" style={{
                    background: "rgba(6,182,212,0.07)",
                    borderBottom: "1px solid rgba(6,182,212,0.1)",
                  }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                      background: "rgba(6,182,212,0.15)",
                      border: "1px solid rgba(6,182,212,0.2)",
                    }}>
                      <Bot className="w-4 h-4 text-[#06b6d4]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Emerald Bot</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        <p className="text-[10px] text-[#10b981]">En línea ahora</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3" style={{ minHeight: "300px" }}>
                    {/* User */}
                    <div className="flex justify-end">
                      <div className="text-xs px-3 py-2 rounded-xl rounded-tr-none max-w-[75%] font-medium" style={{ background: "#06b6d4", color: "#000" }}>
                        Hola, quiero agendar una cita
                      </div>
                    </div>
                    {/* Bot 1 */}
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(6,182,212,0.15)" }}>
                        <Bot className="w-2.5 h-2.5 text-[#06b6d4]" />
                      </div>
                      <div className="text-xs px-3 py-2 rounded-xl rounded-tl-none max-w-[75%]" style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.85)",
                      }}>
                        ¡Hola! Con gusto. ¿Para cuándo necesitas la cita? 📅
                      </div>
                    </div>
                    {/* User */}
                    <div className="flex justify-end">
                      <div className="text-xs px-3 py-2 rounded-xl rounded-tr-none font-medium" style={{ background: "#06b6d4", color: "#000" }}>
                        Mañana si es posible
                      </div>
                    </div>
                    {/* Bot 2 */}
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(6,182,212,0.15)" }}>
                        <Bot className="w-2.5 h-2.5 text-[#06b6d4]" />
                      </div>
                      <div className="text-xs px-3 py-2 rounded-xl rounded-tl-none" style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.85)",
                      }}>
                        ✓ Confirmado para mañana 10 AM. Te envío recordatorio.
                      </div>
                    </div>
                    {/* Typing */}
                    <div className="flex gap-2 items-center">
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ background: "rgba(6,182,212,0.15)" }}>
                        <Bot className="w-2.5 h-2.5 text-[#06b6d4]" />
                      </div>
                      <div className="px-3 py-2 rounded-xl" style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}>
                        <div className="flex gap-1.5 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="px-4 pb-5 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex gap-2 items-center px-3 py-2 rounded-full" style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}>
                      <span className="flex-1 text-xs text-white/20">Escribe un mensaje...</span>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#06b6d4" }}>
                        <ArrowRight className="w-2.5 h-2.5 text-black" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat: leads */}
                <div
                  className="absolute -left-8 top-14 px-3 py-2 rounded-xl"
                  style={{
                    background: "rgba(4,8,16,0.92)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider">Leads / mes</p>
                  <p className="text-base font-bold text-[#10b981]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+248</p>
                </div>

                {/* Stat: tiempo */}
                <div
                  className="absolute -left-4 bottom-24 px-3 py-2 rounded-xl"
                  style={{
                    background: "rgba(4,8,16,0.92)",
                    border: "1px solid rgba(6,182,212,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider">Respuesta</p>
                  <p className="text-base font-bold text-[#06b6d4]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>&lt; 2 seg</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="relative py-32 px-6">

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpSpring}>
              <p className="text-xs font-bold text-[#06b6d4] uppercase tracking-[0.3em] mb-4">ARQUITECTURA</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.15}>TODO LO QUE HACE</MaskLine>
              <MaskLine delay={0.3} className="text-[#06b6d4]">TU SISTEMA DE CHATBOTS</MaskLine>
            </h2>
            <motion.p variants={fadeUpSpring} className="mt-5 text-lg text-gray-400 max-w-xl mx-auto">
              Cada pieza diseñada para que tu negocio atienda, califique y convierta sin intervención humana.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {capabilities.map((cap, i) => (
              <motion.div key={i} variants={scaleInSpring} className="will-change-transform">
                <TiltCard intensity={5} className="h-full">
                  <div
                    className="group relative p-7 overflow-hidden h-full"
                    style={{
                      background: `linear-gradient(135deg, ${cap.tagColor}09 0%, rgba(0,0,0,0) 55%)`,
                      border: "1px solid rgba(255,255,255,0.07)",
                      clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                      transition: "border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${cap.tagColor}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${cap.tagColor}1c`;
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${cap.tagColor}14 0%, rgba(0,0,0,0) 60%)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${cap.tagColor}09 0%, rgba(0,0,0,0) 55%)`;
                    }}
                  >
                    {/* Top colored border */}
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
                      background: `linear-gradient(90deg, ${cap.tagColor}, ${cap.tagColor}00)`,
                    }} />

                    {/* Watermark icon */}
                    <div className="absolute -bottom-3 -right-3 pointer-events-none" style={{ opacity: 0.05 }}>
                      <cap.icon style={{ width: 110, height: 110, color: cap.tagColor }} />
                    </div>

                    {/* Icon — spring bounce on hover */}
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center mb-5"
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      transition={SPRING_SNAPPY}
                      style={{
                        background: `${cap.tagColor}12`,
                        border: `1px solid ${cap.tagColor}22`,
                        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                      }}
                    >
                      <cap.icon className="w-7 h-7" style={{ color: cap.tagColor }} />
                    </motion.div>

                    {/* Tag pill */}
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider rounded-full mb-3"
                      style={{ background: `${cap.tagColor}15`, color: cap.tagColor }}
                    >
                      {cap.tag}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {cap.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="relative py-32 px-6">

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpSpring}>
              <p className="text-xs font-bold text-[#06b6d4] uppercase tracking-[0.3em] mb-4">INDUSTRIAS</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.15}>PERFECTO PARA TU</MaskLine>
              <MaskLine delay={0.3} className="text-[#06b6d4]">TIPO DE NEGOCIO</MaskLine>
            </h2>
            <motion.p variants={fadeUpSpring} className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Cualquier negocio que recibe consultas puede automatizar su atención y convertir más.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainerFast}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                variants={scaleInSpring}
                whileHover={{ y: -4, scale: 1.025, transition: SPRING_SNAPPY }}
                className="group flex items-center gap-3 p-4 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                }}
              >
                <motion.div
                  className="w-8 h-8 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  transition={SPRING_SNAPPY}
                  style={{
                    background: "rgba(6,182,212,0.1)",
                    clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                  }}
                >
                  <industry.icon className="w-4 h-4 text-[#06b6d4]" />
                </motion.div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-4"
          >
            <motion.div variants={fadeUpSpring}>
              <p className="text-xs font-bold text-[#06b6d4] uppercase tracking-[0.3em] mb-4">PREGUNTAS FRECUENTES</p>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.15}>RESOLVEMOS TUS DUDAS</MaskLine>
            </h2>
          </motion.div>

          {/* showTitle={false} evita el título duplicado dentro del componente */}
          <FAQSection
            accentColor="blue"
            showTitle={false}
            items={[
              {
                question: "¿El chatbot puede atender en español?",
                answer: "Sí. Nuestros chatbots están configurados para atender en español con respuestas naturales y contextuales. También pueden manejar múltiples idiomas si tu negocio lo requiere.",
              },
              {
                question: "¿Puedo personalizar las respuestas del chatbot?",
                answer: "Absolutamente. Diseñamos cada flujo de conversación basado en las preguntas reales de tus clientes. Tú defines el tono, las respuestas y las reglas de escalamiento a un agente humano.",
              },
              {
                question: "¿Funciona con WhatsApp Business?",
                answer: "Sí. Integramos con la API oficial de WhatsApp Business para automatización completa: respuestas, calificación de leads, agenda de citas y seguimiento.",
              },
              {
                question: "¿Qué pasa si el chatbot no puede responder una pregunta?",
                answer: "El sistema está diseñado para escalar automáticamente a un agente humano cuando detecta una consulta que requiere intervención personal. Nunca pierdes una oportunidad de venta.",
              },
            ]}
          />
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative py-32 px-6">

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative max-w-3xl mx-auto text-center p-12"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
            border: "1px solid rgba(6,182,212,0.2)",
            clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.2}>¿LISTO PARA QUE TU NEGOCIO</MaskLine>
              <MaskLine delay={0.38} className="text-[#06b6d4]">RESPONDA SIEMPRE?</MaskLine>
            </h2>
            <motion.p variants={fadeUpSpring} className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
              Agenda una consulta estratégica gratuita. Te mostramos cómo funciona el sistema y cómo se adapta a tu negocio.
            </motion.p>
            <motion.div variants={fadeUpSpring} className="inline-block">
              <motion.div {...buttonInteraction}>
                <Link
                  href="/agenda"
                  className="inline-flex items-center gap-3 px-12 py-5 text-base font-bold text-black"
                  style={{
                    background: "#06b6d4",
                    clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                    boxShadow: "0 0 0 rgba(6,182,212,0)",
                    transition: "box-shadow 0.4s ease, background 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(6,182,212,0.6)";
                    (e.currentTarget as HTMLElement).style.background = "#22d3ee";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(6,182,212,0)";
                    (e.currentTarget as HTMLElement).style.background = "#06b6d4";
                  }}
                >
                  <motion.span
                    animate={{ rotate: [0, 12, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  >
                    <MessageSquarePlus className="w-5 h-5" />
                  </motion.span>
                  AGENDA TU CONSULTA ESTRATÉGICA
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
