"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  Monitor,
  Palette,
  Zap,
  ArrowRight,
  Sparkles,
  Heart,
  Coffee,
  Dumbbell,
  Building2,
  Store,
  Briefcase,
  HardHat,
  GraduationCap,
  ShoppingCart,
  Search,
  Users,
  Rocket,
} from "lucide-react";
import FAQSection from "@/components/seo/faq-section";
import {
  staggerContainer,
  staggerContainerFast,
  fadeUpSpring,
  scaleInSpring,
  slideInRight,
  slideInLeft,
  buttonInteraction,
  EASE_OUT_EXPO,
  SPRING_GENTLE,
  SPRING_SNAPPY,
} from "@/lib/animation-variants";
import { MaskLine, CountUp, TiltCard } from "@/components/motion/MotionPrimitives";

const features = [
  {
    icon: Monitor,
    title: "Sitio Web Premium",
    description: "Diseño moderno, responsive y optimizado para convertir visitantes en clientes.",
    tag: "Core",
    tagColor: "#00FF66",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas enfocadas en conversión para campañas, productos o servicios específicos.",
    tag: "Conversión",
    tagColor: "#00FF66",
  },
  {
    icon: Palette,
    title: "Branding Digital",
    description: "Identidad visual coherente: logo, colores, tipografía y guía de estilo completa.",
    tag: "Identidad",
    tagColor: "#00FF66",
  },
  {
    icon: Zap,
    title: "Rendimiento Ultra",
    description: "Velocidad de carga ultrarrápida y optimización técnica para la mejor experiencia.",
    tag: "Performance",
    tagColor: "#00FF66",
  },
  {
    icon: Search,
    title: "SEO Local",
    description: "Posicionamiento en Google para que clientes de tu zona te encuentren primero.",
    tag: "Visibilidad",
    tagColor: "#00FF66",
  },
  {
    icon: Users,
    title: "Captura de Leads",
    description: "Formularios inteligentes y sistemas integrados para captar clientes automáticamente.",
    tag: "Growth",
    tagColor: "#00FF66",
  },
];


const industries = [
  { name: "Clínicas y consultorios", icon: Heart },
  { name: "Restaurantes", icon: Coffee },
  { name: "Gimnasios y spas", icon: Dumbbell },
  { name: "Inmobiliarias", icon: Building2 },
  { name: "Tiendas locales", icon: Store },
  { name: "Estudios profesionales", icon: Briefcase },
  { name: "Constructoras", icon: HardHat },
  { name: "Servicios de belleza", icon: Sparkles },
  { name: "Educación y cursos", icon: GraduationCap },
  { name: "Comercio electrónico", icon: ShoppingCart },
];

export default function PresenciaDigitalPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="relative overflow-hidden" style={{ background: "#020810" }}>
      {/* ── Global grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,102,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
      {/* ── Ambient light blobs ── */}
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 100px)", left: "50%", transform: "translateX(-50%)",
        width: "1000px", height: "900px",
        background: "radial-gradient(ellipse at center, rgba(0,255,102,0.09) 0%, transparent 65%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 1000px)", right: "-150px",
        width: "750px", height: "850px",
        background: "radial-gradient(ellipse at right, rgba(0,255,102,0.07) 0%, transparent 60%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 1900px)", left: "-100px",
        width: "700px", height: "800px",
        background: "radial-gradient(ellipse at left, rgba(0,255,102,0.07) 0%, transparent 60%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        zIndex: 0, top: "calc(100vh + 2800px)", left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "800px",
        background: "radial-gradient(ellipse at center, rgba(0,255,102,0.08) 0%, transparent 65%)",
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
              backgroundImage: "url('/PresenciaDigitalPremiumIMG2.webp')",
              opacity: 0.85,
              filter: "saturate(1.4) contrast(1.15) brightness(1.0)",
            }}
          />
          
          {/* NEON GREEN GLOW */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,102,0.35) 0%, transparent 70%)",
          }} />
          
          {/* MAGENTA ACCENT */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 40% 35% at 80% 85%, rgba(236,72,153,0.25) 0%, transparent 60%)",
          }} />
          
          {/* CYAN SECONDARY */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 30% 25% at 20% 75%, rgba(6,182,212,0.12) 0%, transparent 50%)",
          }} />
          
          {/* Dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
        </motion.div>

        {/* BOTTOM FADE — smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-[4] pointer-events-none" style={{
          background: "linear-gradient(to bottom, transparent, #020810)",
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
            linear-gradient(rgba(0,255,102,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,102,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />

        {/* CONTENT - LEFT SIDE, OVERLAYING IMAGE */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-start">
          <div className="px-6 py-20 md:px-12 lg:px-20 max-w-2xl ml-0 mr-auto">
            {/* Badge — anticipation entrance (scale up from 0.9 with overshoot) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8"
              style={{
                background: "rgba(0,255,102,0.15)",
                border: "1px solid rgba(0,255,102,0.4)",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#00FF66]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#00FF66" }}>
                Presencia Digital Premium
              </span>
            </motion.div>

            {/* Headline — mask reveal per line (clipPath slide-up) */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05 }}
            >
              <MaskLine delay={0.15}>TU NEGOCIO MERECE UNA</MaskLine>
              <MaskLine delay={0.32}>
                <span style={{
                  color: "#00FF66",
                  textShadow: "0 0 40px rgba(0,255,102,0.7), 0 0 80px rgba(0,255,102,0.4), 0 2px 24px rgba(0,0,0,0.6)",
                }}>
                  IDENTIDAD PREMIUM
                </span>
              </MaskLine>
            </h1>

            {/* Subheadline — mask reveal */}
            <div className="text-lg md:text-xl text-white mb-8 leading-relaxed overflow-hidden">
              <motion.p
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.55 }}
              >
                Creamos sistemas digitales que transforman la forma en que tu negocio se presenta al mundo.
              </motion.p>
            </div>

            {/* CTAs — stagger + squash & stretch */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } },
              }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <motion.div variants={fadeUpSpring}>
                <motion.div {...buttonInteraction}>
                  <Link
                    href="/agenda"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-black"
                    style={{
                      background: "#00FF66",
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                      boxShadow: "0 0 0 rgba(0,255,102,0)",
                      transition: "box-shadow 0.4s ease, background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,255,102,0.6)";
                      (e.currentTarget as HTMLElement).style.background = "#22ff8a";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,255,102,0)";
                      (e.currentTarget as HTMLElement).style.background = "#00FF66";
                    }}
                  >
                    MODERNIZA TU PRESENCIA
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={SPRING_SNAPPY}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR — fades out as user scrolls */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <motion.div
              className="w-1 h-2 bg-[#00FF66] rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== COMPARISON: WEB OBSOLETA vs WEB EMERALD ==================== */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header — stagger eyebrow → headline mask → subtitle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpSpring} className="overflow-hidden inline-block">
              <p className="text-xs font-bold text-[#00FF66] uppercase tracking-[0.3em] mb-4">EL PROBLEMA</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.15}>TU WEB ACTUAL TE ESTÁ</MaskLine>
              <MaskLine delay={0.3} className="text-[#00FF66]">COSTANDO CLIENTES</MaskLine>
            </h2>
            <motion.p variants={fadeUpSpring} className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              El 75% de las personas juzgan la credibilidad de un negocio por su sitio web. ¿El tuyo comunica lo que mereces?
            </motion.p>
          </motion.div>

          {/* Stats row — stagger + count-up numbers + spring hover */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
          >
            {[
              { to: 0.05, suffix: "s", decimals: 2, label: "para formar la primera impresión", source: "Google" },
              { to: 88, suffix: "%", decimals: 0, label: "no regresan tras mala experiencia web", source: "Sweor" },
              { to: 3, suffix: "×", decimals: 0, label: "más conversiones con carga menor a 1 seg", source: "Portent" },
              { to: 75, suffix: "%", decimals: 0, label: "juzgan credibilidad por diseño del sitio", source: "Stanford" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleInSpring}
                whileHover={{ y: -4, transition: SPRING_GENTLE }}
                className="p-5 text-center cursor-default"
                style={{
                  background: "rgba(0,255,102,0.04)",
                  border: "1px solid rgba(0,255,102,0.12)",
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#00FF66] mb-1 tabular-nums" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <CountUp to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
                </p>
                <p className="text-xs text-gray-400 leading-tight mb-1">{stat.label}</p>
                <p className="text-[10px] text-gray-600 uppercase tracking-wider">{stat.source}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Browser mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_48px_1fr] items-start gap-6 lg:gap-0">

            {/* ── LEFT: Sitio obsoleto - Zapatería — slides in from left with spring ── */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-[0.2em]">Sitio Obsoleto</span>
              </div>
              {/* Chrome */}
              <div style={{ borderRadius: "8px 8px 0 0", background: "#3a3a3a", padding: "7px 10px", border: "1px solid #555", borderBottom: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />)}
                  </div>
                  <div style={{ flex: 1, background: "#222", borderRadius: "3px", padding: "3px 8px", textAlign: "center", fontSize: "9px", color: "#777" }}>
                    zapateriadonpedro.com.co/index.html
                  </div>
                </div>
              </div>
              {/* Site */}
              <div style={{ border: "1px solid #555", borderTop: "none", borderRadius: "0 0 8px 8px", overflow: "hidden", height: "360px", background: "#d4d4d4" }}>
                {/* Nav */}
                <div style={{ background: "#002D8C", padding: "5px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "#FFFF00", fontWeight: "bold", fontSize: "9.5px", fontFamily: "serif", textShadow: "1px 1px 0 #000", whiteSpace: "nowrap" }}>★ ZAPATERÍA DON PEDRO ★</span>
                  <div style={{ display: "flex", gap: "6px", fontSize: "6.5px", color: "#ccc" }}>
                    {["INICIO","DAMAS","CABALLEROS","NIÑOS","OUTLET","CONTACTO"].map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
                {/* Marquee */}
                <div style={{ background: "#CC0000", color: "#fff", fontSize: "7px", padding: "2px 8px", fontFamily: "monospace", overflow: "hidden", whiteSpace: "nowrap" }}>
                  ⚡ REMATE DE TEMPORADA ⚡ HASTA 70% DSCTO ⚡ LLÁMENOS: 312-000-0000 ⚡ ENVÍO GRATIS HOY ⚡ TALLAS 34 AL 44 ⚡
                </div>
                {/* Hero */}
                <div style={{ background: "linear-gradient(180deg,#1a3a7a,#0047a0)", padding: "10px 10px 8px", position: "relative" }}>
                  <div style={{ position: "absolute", top: "5px", right: "8px", background: "#FF6600", color: "#fff", fontSize: "5.5px", borderRadius: "50%", fontWeight: "bold", textAlign: "center", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: "1.15", border: "2px solid #FF9900", transform: "rotate(15deg)" }}>¡2X1<br/>HOY!</div>
                  <p style={{ color: "#FFFF00", fontFamily: "Comic Sans MS, cursive", fontSize: "11.5px", fontWeight: "bold", textShadow: "2px 2px 0 #000", marginBottom: "4px" }}>
                    ¡Zapatos para Toda<br/>la Familia!! 👟
                  </p>
                  <p style={{ color: "#ddd", fontSize: "6.5px", fontFamily: "Times New Roman, serif", lineHeight: "1.5", marginBottom: "6px" }}>
                    Mas de 500 modelos en damas, caballeros y niños. Los mejores precios garantizados del mercado colombiano.
                  </p>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[["#FF6600","#FF9900","VER MODELOS >>"],["#00CC00","#00FF00","PEDIR YA!!!"],["#FFFF00","#CCCC00","OFERTA 2X1"]].map(([bg,border,text]) => (
                      <button key={text} style={{ background: bg, color: bg === "#FFFF00" ? "#000" : "#fff", border: `2px outset ${border}`, fontSize: "6.5px", padding: "3px 5px", cursor: "pointer" }}>{text}</button>
                    ))}
                  </div>
                </div>
                {/* Category cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4px", padding: "6px", background: "#d4d4d4" }}>
                  {[["#003087","👠 DAMAS","Tacones, sandalias y baletas desde $35.000"],["#145214","👞 CABALLEROS","Mocasines, deportivos desde $45.000"],["#8B0000","👟 NIÑOS","Colegiales y tenis desde $28.000"]].map(([bg,title,desc]) => (
                    <div key={title} style={{ background: "#fff", border: "2px solid #999", fontSize: "6.5px" }}>
                      <div style={{ background: bg, color: "#fff", padding: "3px 5px", fontWeight: "bold", textAlign: "center", fontSize: "7px" }}>{title}</div>
                      <div style={{ padding: "4px 5px", color: "#333", lineHeight: "1.4" }}>{desc}</div>
                      <div style={{ padding: "0 5px 4px", color: "#00c", textDecoration: "underline", fontSize: "6.5px" }}>Ver todos &gt;&gt;</div>
                    </div>
                  ))}
                </div>
                {/* Featured products */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "3px", padding: "5px 6px", background: "#e8e8e8", borderTop: "2px dashed #aaa" }}>
                  {[["BOTA CUERO","$89.000"],["TENIS CASUAL","$65.000"],["SANDALIA DAMA","$42.000"],["MOCASÍN","$78.000"]].map(([name, price]) => (
                    <div key={name} style={{ background: "#fff", border: "1px solid #ccc", padding: "3px", textAlign: "center", fontSize: "6px" }}>
                      <div style={{ fontSize: "14px", lineHeight: "1" }}>👟</div>
                      <div style={{ color: "#333", fontWeight: "bold", lineHeight: "1.3", marginTop: "2px" }}>{name}</div>
                      <div style={{ color: "#CC0000", fontWeight: "bold" }}>{price}</div>
                    </div>
                  ))}
                </div>
                {/* Footer */}
                <div style={{ background: "#001a6e", padding: "4px 10px", fontSize: "6px", color: "#999", textAlign: "center", borderTop: "3px solid #FFFF00" }}>
                  © 2009 Zapatería Don Pedro — Cra 45 #12-34 Barranquilla — Tel: 312-000-0000 — Contador: [004,392] — Hecho por WebMaster
                </div>
              </div>
              {/* Metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "10px" }}>
                {[["Velocidad","6.4s"],["SEO Score","28/100"],["Conversión","~0.6%"]].map(([label,value]) => (
                  <div key={label} style={{ padding: "8px", textAlign: "center", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.14)" }}>
                    <p style={{ color: "#f87171", fontWeight: "700", fontSize: "12px", fontFamily: "'Space Grotesk', sans-serif" }}>{value}</p>
                    <p style={{ color: "#6b7280", fontSize: "10px" }}>{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* VS */}
            <div className="hidden lg:flex flex-col items-center justify-center pt-10">
              <div style={{ flex: 1, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)", minHeight: "120px" }} />
              <div style={{ margin: "12px 0", padding: "6px 8px", fontSize: "11px", fontWeight: "700", color: "#4b5563", border: "1px solid rgba(255,255,255,0.07)", letterSpacing: "2px" }}>VS</div>
              <div style={{ flex: 1, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)", minHeight: "120px" }} />
            </div>

            {/* ── RIGHT: Sitio premium - Zapatería moderna (LIGHT) — slides in from right with spring ── */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                <span className="text-xs font-bold text-[#00FF66] uppercase tracking-[0.2em]">Sitio Premium</span>
              </div>
              {/* Chrome — light */}
              <div style={{ borderRadius: "8px 8px 0 0", background: "#e8e8e8", padding: "7px 10px", border: "1px solid #ccc", borderBottom: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />)}
                  </div>
                  <div style={{ flex: 1, background: "#fff", borderRadius: "3px", padding: "3px 8px", textAlign: "center", fontSize: "9px", color: "#555", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", border: "1px solid #ddd" }}>
                    <svg width="8" height="9" viewBox="0 0 10 12" fill="none"><path d="M5 1C3.3 1 2 2.3 2 4v1H1v6h8V5H9V4C9 2.3 7.7 1 5 1zm0 1.5c1 0 1.8.8 1.8 1.8V5H3.2V4.3C3.2 3.3 4 2.5 5 2.5z" fill="#16a34a"/></svg>
                    stride.com.co
                  </div>
                </div>
              </div>
              {/* Site — WHITE/LIGHT */}
              <div style={{ border: "1px solid #d1d5db", borderTop: "none", borderRadius: "0 0 8px 8px", overflow: "hidden", height: "420px", background: "#ffffff" }}>
                {/* Nav */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 16px", borderBottom: "1px solid #f3f4f6", background: "#fff" }}>
                  <span style={{ color: "#111", fontFamily: "'Space Grotesk',sans-serif", fontWeight: "900", fontSize: "11px", letterSpacing: "2.5px" }}>STRIDE</span>
                  <div style={{ display: "flex", gap: "14px", fontSize: "7.5px", color: "#6b7280" }}>
                    {["Hombres","Mujeres","Niños","Sale"].map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div style={{ background: "#111", color: "#fff", fontSize: "7px", padding: "4px 10px", fontWeight: "700", borderRadius: "2px" }}>Tienda →</div>
                </div>
                {/* Hero */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#f8f7f4" }}>
                  <div style={{ padding: "16px 12px 12px 16px" }}>
                    <div style={{ fontSize: "5.5px", color: "#9ca3af", letterSpacing: "3px", marginBottom: "6px", fontWeight: "700", textTransform: "uppercase" }}>Colección Otoño 2025</div>
                    <div style={{ color: "#111", fontFamily: "'Space Grotesk',sans-serif", fontWeight: "800", fontSize: "15px", lineHeight: "1.1", letterSpacing: "-0.5px", marginBottom: "7px" }}>
                      El zapato<br/>perfecto para<br/><span style={{ color: "#e63946" }}>cada paso.</span>
                    </div>
                    <p style={{ color: "#6b7280", fontSize: "6.5px", lineHeight: "1.6", marginBottom: "10px" }}>
                      Diseño premium, confort garantizado.<br/>Envío gratis en compras +$150k.
                    </p>
                    <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                      <div style={{ background: "#111", color: "#fff", fontSize: "6.5px", padding: "5px 11px", fontWeight: "700", borderRadius: "2px" }}>COMPRAR AHORA</div>
                      <span style={{ color: "#9ca3af", fontSize: "6.5px" }}>Ver colección →</span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", marginTop: "10px", paddingTop: "8px", borderTop: "1px solid #e5e7eb" }}>
                      {[["500+","modelos"],["4.9★","clientes"],["Día sig.","envío"]].map(([v,l]) => (
                        <div key={l}>
                          <div style={{ color: "#111", fontWeight: "800", fontSize: "8px" }}>{v}</div>
                          <div style={{ color: "#9ca3af", fontSize: "5.5px" }}>{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Shoe visual */}
                  <div style={{ background: "#edeae3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", minHeight: "110px" }}>
                    <div style={{ fontSize: "42px", filter: "drop-shadow(3px 6px 10px rgba(0,0,0,0.18))", transform: "rotate(-20deg) scaleX(-1)" }}>👟</div>
                    <div style={{ position: "absolute", bottom: "8px", right: "10px", background: "#fff", fontSize: "7px", padding: "4px 7px", borderRadius: "3px", fontWeight: "800", color: "#111", boxShadow: "0 1px 6px rgba(0,0,0,0.1)" }}>$125.000</div>
                    <div style={{ position: "absolute", top: "8px", left: "8px", background: "#e63946", color: "#fff", fontSize: "5.5px", padding: "2px 6px", borderRadius: "2px", fontWeight: "700" }}>NUEVO</div>
                  </div>
                </div>
                {/* Product grid */}
                <div style={{ padding: "10px 14px 8px", background: "#fff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "8px", fontWeight: "800", color: "#111", fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "0.5px" }}>MÁS VENDIDOS</span>
                    <span style={{ fontSize: "7px", color: "#9ca3af" }}>Ver todos →</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "7px" }}>
                    {[["Urban Runner","$125k","👟","NUEVO"],["Classic Loafer","$98k","👞",""],["Sandal Diva","$75k","👡","SALE"],["Boot Pro","$145k","🥾",""]].map(([name,price,emoji,tag]) => (
                      <div key={name} style={{ border: "1px solid #f3f4f6", borderRadius: "3px", overflow: "hidden", cursor: "pointer" }}>
                        <div style={{ background: "#f8f7f4", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", position: "relative" }}>
                          {emoji}
                          {tag && <div style={{ position: "absolute", top: "3px", right: "3px", background: tag === "SALE" ? "#e63946" : "#111", color: "#fff", fontSize: "4.5px", padding: "1px 4px", borderRadius: "1px", fontWeight: "800" }}>{tag}</div>}
                        </div>
                        <div style={{ padding: "5px 6px" }}>
                          <div style={{ color: "#111", fontWeight: "700", fontSize: "6.5px", lineHeight: "1.2" }}>{name}</div>
                          <div style={{ color: "#111", fontWeight: "800", fontSize: "7.5px", marginTop: "2px" }}>{price}</div>
                          <div style={{ color: "#9ca3af", fontSize: "5.5px", marginTop: "1px" }}>Agregar →</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Footer */}
                <div style={{ background: "#111", padding: "7px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#fff", fontSize: "9px", fontWeight: "900", letterSpacing: "2px", fontFamily: "'Space Grotesk',sans-serif" }}>STRIDE</span>
                  <div style={{ display: "flex", gap: "14px", fontSize: "6px", color: "#4b5563" }}>
                    {["Tallas","Devoluciones","Envíos","Contacto"].map(t => <span key={t}>{t}</span>)}
                  </div>
                  <span style={{ color: "#374151", fontSize: "6px" }}>© 2025 Stride</span>
                </div>
              </div>
              {/* Metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "10px" }}>
                {[["Velocidad","< 1s"],["SEO Score","94/100"],["Conversión","~5%"]].map(([label,value]) => (
                  <div key={label} style={{ padding: "8px", textAlign: "center", background: "rgba(0,255,102,0.05)", border: "1px solid rgba(0,255,102,0.18)" }}>
                    <p style={{ color: "#00FF66", fontWeight: "700", fontSize: "12px", fontFamily: "'Space Grotesk',sans-serif" }}>{value}</p>
                    <p style={{ color: "#6b7280", fontSize: "10px" }}>{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative">
          {/* Section header — mask reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpSpring}>
              <p className="text-xs font-bold text-[#00FF66] uppercase tracking-[0.3em] mb-4">CAPACIDADES</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.15}>TODO LO QUE INCLUYE TU</MaskLine>
              <MaskLine delay={0.3} className="text-[#00FF66]">PRESENCIA DIGITAL</MaskLine>
            </h2>
          </motion.div>

          {/* Cards — staggered entrance + 3D mouse-tracked tilt + spring icon bounce on hover */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={scaleInSpring} className="will-change-transform">
                <TiltCard intensity={5} className="h-full">
                  <div
                    className="group relative p-7 overflow-hidden h-full"
                    style={{
                      background: `linear-gradient(135deg, ${feature.tagColor}09 0%, rgba(0,0,0,0) 55%)`,
                      border: "1px solid rgba(255,255,255,0.07)",
                      clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                      transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${feature.tagColor}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${feature.tagColor}1c`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
                      background: `linear-gradient(90deg, ${feature.tagColor}, ${feature.tagColor}00)`,
                    }} />
                    {/* Watermark icon */}
                    <div className="absolute -bottom-3 -right-3 pointer-events-none" style={{ opacity: 0.05 }}>
                      <feature.icon style={{ width: 110, height: 110, color: feature.tagColor }} />
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center mb-5"
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      transition={SPRING_SNAPPY}
                      style={{
                        background: `${feature.tagColor}12`,
                        border: `1px solid ${feature.tagColor}22`,
                        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                      }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: feature.tagColor }} />
                    </motion.div>

                    {/* Tag pill */}
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider rounded-full mb-3"
                      style={{ background: `${feature.tagColor}15`, color: feature.tagColor }}
                    >
                      {feature.tag}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
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
          {/* Header — mask reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpSpring}>
              <p className="text-xs font-bold text-[#00FF66] uppercase tracking-[0.3em] mb-4">INDUSTRIAS</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.15}>DISEÑADO PARA TU</MaskLine>
              <MaskLine delay={0.3} className="text-[#00FF66]">TIPO DE NEGOCIO</MaskLine>
            </h2>
            <motion.p variants={fadeUpSpring} className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Cada industria tiene necesidades distintas. Adaptamos el sistema a las tuyas.
            </motion.p>
          </motion.div>

          {/* Industry chips — fast stagger + spring lift on hover + icon overshoot */}
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
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,255,102,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,102,0.25)";
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
                    background: "rgba(0,255,102,0.1)",
                    clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                  }}
                >
                  <industry.icon className="w-4 h-4 text-[#00FF66]" />
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
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpSpring}>
              <p className="text-xs font-bold text-[#00FF66] uppercase tracking-[0.3em] mb-4">PREGUNTAS FRECUENTES</p>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.15}>RESOLVEMOS TUS DUDAS</MaskLine>
            </h2>
          </motion.div>

          <FAQSection
            accentColor="emerald"
            showTitle={false}
            items={[
              {
                question: "¿Cuánto cuesta un sitio web premium con Emerald?",
                answer: "Cada proyecto es único. Diseñamos soluciones modulares que se adaptan al tamaño y presupuesto de tu negocio. Agenda una consulta gratuita para recibir una cotización personalizada.",
              },
              {
                question: "¿Cuánto tiempo toma crear mi presencia digital?",
                answer: "Un sitio web premium típico se entrega en 2-4 semanas, dependiendo de la complejidad. Landing pages pueden estar listas en menos de una semana.",
              },
              {
                question: "¿Incluyen SEO en el diseño del sitio web?",
                answer: "Sí. Cada sitio incluye optimización SEO técnica: velocidad de carga, estructura semántica, meta tags, schema markup y SEO local para que clientes de tu zona te encuentren en Google.",
              },
              {
                question: "¿Puedo actualizar el contenido de mi sitio web después?",
                answer: "Sí. Construimos sitios con sistemas de gestión de contenido que te permiten actualizar textos, imágenes y productos sin necesidad de conocimientos técnicos.",
              },
            ]}
          />
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative py-32 px-6">
        {/* Outer card — anticipation entrance with slight overshoot */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative max-w-3xl mx-auto text-center p-12"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
            border: "1px solid rgba(0,255,102,0.2)",
            clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
          }}
        >
          {/* Inner content — stagger headline → subtitle → button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
              <MaskLine delay={0.2}>¿LISTO PARA MODERNIZAR TU</MaskLine>
              <MaskLine delay={0.38} className="text-[#00FF66]">PRESENCIA DIGITAL?</MaskLine>
            </h2>

            <motion.p variants={fadeUpSpring} className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
              Agenda una consulta estratégica gratuita. Analizamos tu situación actual y diseñamos la identidad digital que tu negocio necesita.
            </motion.p>

            <motion.div variants={fadeUpSpring} className="inline-block">
              <motion.div {...buttonInteraction}>
                <Link
                  href="/agenda"
                  className="inline-flex items-center gap-3 px-12 py-5 text-base font-bold text-black"
                  style={{
                    background: "#00FF66",
                    clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                    boxShadow: "0 0 0 rgba(0,255,102,0)",
                    transition: "box-shadow 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(0,255,102,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,255,102,0)";
                  }}
                >
                  <motion.span
                    animate={{ rotate: [0, 12, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  >
                    <Sparkles className="w-5 h-5" />
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