"use client";

import { useState, useEffect, type ElementType, type ReactNode, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Calendar, MessageSquare, Zap, Globe, TrendingUp, Monitor, Bot, Cog,
  Workflow, Database, BarChart3, ChevronRight, Clock, Users, Shield, Sparkles,
  Search, Palette, Rocket, Bell, GitBranch,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimacionPremium from "@/components/visuals/AnimacionPremium";
import AnimacionChatbot from "@/components/visuals/AnimacionChatbot";
import AnimacionDashboard from "@/components/visuals/AnimacionDashboard";
import {
  staggerContainer,
  staggerContainerFast,
  fadeUpSpring,
  scaleInSpring,
  slideInLeft,
  slideInRight,
  buttonInteraction,
  SPRING_SNAPPY,
  EASE_OUT_EXPO,
} from "@/lib/animation-variants";
import { MaskLine, CountUp, TiltCard } from "@/components/motion/MotionPrimitives";

const HEADLINE = "El potencial de tu equipo, multiplicado por la Inteligencia Artificial";

function useTypewriter(text: string, startDelay = 500, speed = 42) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length && interval) { clearInterval(interval); interval = null; }
      }, speed);
    }, startDelay);
    return () => { clearTimeout(timeout); if (interval) clearInterval(interval); };
  }, [text, startDelay, speed]);
  return displayed;
}

const sparkDefs = [
  { left: "40%", top: "34%", rotate: 48,  len: 30, delay: 0.0, rd: 1.5 },
  { left: "44%", top: "28%", rotate: -36, len: 22, delay: 0.5, rd: 2.0 },
  { left: "47%", top: "42%", rotate: 68,  len: 18, delay: 0.9, rd: 1.2 },
  { left: "37%", top: "46%", rotate: -55, len: 26, delay: 0.3, rd: 1.8 },
  { left: "51%", top: "33%", rotate: 42,  len: 20, delay: 1.2, rd: 0.9 },
  { left: "43%", top: "52%", rotate: -28, len: 24, delay: 0.7, rd: 1.4 },
  { left: "36%", top: "39%", rotate: 58,  len: 16, delay: 1.5, rd: 2.2 },
  { left: "49%", top: "47%", rotate: -62, len: 28, delay: 0.2, rd: 1.7 },
  { left: "42%", top: "25%", rotate: 35,  len: 15, delay: 1.0, rd: 1.1 },
  { left: "53%", top: "41%", rotate: -48, len: 20, delay: 0.8, rd: 0.7 },
  { left: "39%", top: "30%", rotate: 72,  len: 12, delay: 1.3, rd: 1.9 },
  { left: "46%", top: "56%", rotate: -20, len: 18, delay: 0.4, rd: 2.3 },
];

// ─── Benefit card ─────────────────────────────────────────────────────────────
function BenefitCard({
  icon: Icon,
  title,
  description,
  tag,
  color,
}: {
  icon: ElementType;
  title: string;
  description: string;
  tag: string;
  color: string;
}) {
  return (
    <motion.div variants={scaleInSpring} className="will-change-transform">
      <TiltCard intensity={5} className="h-full">
        <div
          className="group relative p-7 overflow-hidden h-full"
          style={{
            background: `linear-gradient(135deg, ${color}09 0%, rgba(0,0,0,0) 55%)`,
            border: "1px solid rgba(255,255,255,0.07)",
            clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
            transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${color}1c`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
            background: `linear-gradient(90deg, ${color}, ${color}00)`,
          }} />
          <div className="absolute -bottom-3 -right-3 pointer-events-none" style={{ opacity: 0.05 }}>
            <Icon style={{ width: 110, height: 110, color }} />
          </div>
          <motion.div
            className="w-14 h-14 flex items-center justify-center mb-5"
            whileHover={{ scale: 1.1, rotate: -6 }}
            transition={SPRING_SNAPPY}
            style={{
              background: `${color}12`,
              border: `1px solid ${color}22`,
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            <Icon className="w-7 h-7" style={{ color }} />
          </motion.div>
          <span
            className="inline-block text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider rounded-full mb-3"
            style={{ background: `${color}15`, color }}
          >
            {tag}
          </span>
          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </TiltCard>
    </motion.div>
  );
}

// ─── Solution section wrapper ─────────────────────────────────────────────────
function SolutionSection({
  id,
  color,
  label,
  titleLine1,
  titleLine2,
  description,
  stat,
  statSuffix,
  statLabel,
  cards,
  href,
  ctaLabel,
  blobSide = "center",
  bgImage,
  flipBg = false,
  children,
}: {
  id: string;
  color: string;
  label: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  stat: number;
  statSuffix: string;
  statLabel: string;
  cards: ReactNode;
  href: string;
  ctaLabel: string;
  blobSide?: "center" | "left" | "right";
  bgImage?: string;
  flipBg?: boolean;
  children?: ReactNode;
}) {
  const blobStyle: CSSProperties =
    blobSide === "left"
      ? { left: "-150px", top: "50%", transform: "translateY(-50%)" }
      : blobSide === "right"
      ? { right: "-150px", top: "50%", transform: "translateY(-50%)" }
      : { left: "50%", top: "50%", transform: "translate(-50%, -50%)" };

  return (
    <section id={id} className="relative py-32 px-6 overflow-hidden">
      {bgImage && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.13,
            zIndex: 0,
            transform: flipBg ? "scaleX(-1)" : undefined,
          }}
        />
      )}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, #020810 0%, transparent 20%, transparent 80%, #020810 100%)",
        zIndex: 1,
      }} />
      <div
        className="absolute pointer-events-none"
        style={{
          ...blobStyle,
          width: "900px",
          height: "700px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${color}12 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color }}>
              {label}
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}
            >
              <MaskLine delay={0.1}>{titleLine1}</MaskLine>
              <MaskLine delay={0.25}>
                <span style={{ color, textShadow: `0 0 40px ${color}70, 0 0 80px ${color}40` }}>
                  {titleLine2}
                </span>
              </MaskLine>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">{description}</p>

            <div
              className="inline-flex items-center gap-4 px-6 py-4"
              style={{
                background: `${color}08`,
                border: `1px solid ${color}25`,
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              <p className="text-4xl font-bold tabular-nums" style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}>
                <CountUp to={stat} suffix={statSuffix} />
              </p>
              <p className="text-sm text-gray-400 leading-snug max-w-[160px]">{statLabel}</p>
            </div>
          </motion.div>

          {children && (
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {children}
            </motion.div>
          )}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpSpring}
          className="flex justify-center mt-12"
        >
          <motion.div {...buttonInteraction}>
            <Link
              href={href}
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold text-black"
              style={{
                background: color,
                clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                boxShadow: `0 0 0 ${color}00`,
                transition: "box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${color}66`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 ${color}00`;
              }}
            >
              {ctaLabel}
              <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={SPRING_SNAPPY}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Flow arrow ───────────────────────────────────────────────────────────────
function FlowArrow({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-2">
      <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: color + "99" }}>
        {label}
      </p>
      <div className="flex items-center gap-0">
        <motion.div
          className="h-px w-8"
          style={{ background: `linear-gradient(90deg, ${color}30, ${color})` }}
          animate={{ scaleX: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-4 h-4" style={{ color }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function HomeClient() {
  const headline = useTypewriter(HEADLINE);

  // En móvil o con prefers-reduced-motion se omiten las partículas/destellos
  // animados en bucle infinito — ahorran batería y CPU sin afectar el diseño.
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
    setLightMode(mq.matches);
    const handler = (e: MediaQueryListEvent) => setLightMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <main className="relative min-h-screen" style={{ background: "#020810" }}>

      {/* ==================== CINEMATIC HERO ==================== */}
      <section className="relative min-h-screen flex items-center pb-40 overflow-hidden">
        {/* Contenedor de fondo: simple inset-0, sin máscaras */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/LandingPageIMG.webp')",
              opacity: 0.55,
              filter: "saturate(1.8) contrast(1.15) brightness(1.1)",
            }}
          />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,163,0.25) 0%, transparent 70%)",
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 40% 30% at 80% 20%, rgba(6,182,212,0.15) 0%, transparent 60%)",
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 30% 40% at 10% 80%, rgba(236,72,153,0.08) 0%, transparent 50%)",
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }} />

        <div className="absolute inset-0 z-[2] pointer-events-none" style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.01) 1px, rgba(255,255,255,0.01) 3px)",
        }} />

        <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        {!lightMode && sparkDefs.map((s, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: s.left,
              top: s.top,
              width: "2px",
              height: `${s.len}px`,
              background: "linear-gradient(to bottom, transparent, #06b6d4, #bae6fd, transparent)",
              boxShadow: "0 0 5px #06b6d4, 0 0 10px rgba(6,182,212,0.5)",
              transformOrigin: "center",
              rotate: `${s.rotate}deg`,
              zIndex: 4,
            }}
            animate={{ opacity: [0, 1, 0.8, 0], scaleY: [0.3, 1, 0.7, 0.3] }}
            transition={{ duration: 0.55, delay: s.delay, repeat: Infinity, repeatDelay: s.rd, ease: "easeOut" }}
          />
        ))}

        {!lightMode && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? "#00FF66" : i % 3 === 1 ? "#06b6d4" : "#ec4899",
              boxShadow: `0 0 6px ${i % 3 === 0 ? "#00FF66" : i % 3 === 1 ? "#06b6d4" : "#ec4899"}`,
            }}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, Math.random() * 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}

        <div className="relative z-20 w-full">
          <Navbar />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1] tracking-tight mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {headline}
                {headline.length < HEADLINE.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[3px] h-[0.82em] bg-white ml-1 align-middle"
                  />
                )}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-10 font-light text-center mx-auto"
              >
                Delegamos lo repetitivo a las máquinas para que te enfoques en crear, conectar y crecer.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12, delayChildren: 3.8 } },
                }}
                className="flex flex-col sm:flex-row items-center justify-center gap-5"
              >
                <motion.div variants={fadeUpSpring}>
                  <motion.a
                    {...buttonInteraction}
                    href="/agenda"
                    className="group relative inline-flex items-center gap-3 px-10 py-5 text-base font-bold text-black overflow-hidden"
                    style={{
                      background: "#00FF66",
                      clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                      boxShadow: "0 0 0 rgba(0,255,102,0)",
                      transition: "box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(0,255,102,0.6), 0 0 100px rgba(0,255,102,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,255,102,0)";
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                    AGENDA CONSULTA
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={SPRING_SNAPPY}>
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </motion.a>
                </motion.div>

                <motion.div variants={fadeUpSpring}>
                  <motion.a
                    {...buttonInteraction}
                    href="#beneficios"
                    className="inline-flex items-center gap-3 px-10 py-5 text-base font-bold text-white"
                    style={{
                      border: "1px solid rgba(255,255,255,0.3)",
                      clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                      transition: "border-color 0.3s ease, background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,102,0.6)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,255,102,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    VER BENEFICIOS
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={SPRING_SNAPPY}>
                      <ChevronRight className="w-5 h-5" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 4.4 },
                  },
                }}
                className="flex flex-wrap gap-8 mt-16 pt-8 justify-center"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                {[
                  { value: 83, suffix: "%", prefix: "", label: "Hasta 83% de procesos automatizados", isNumeric: true },
                  { value: 0, suffix: "", prefix: "", label: "ATENCIÓN IA", isNumeric: false, displayStatic: "24/7" },
                  { value: 50, suffix: "%", prefix: "-", label: "COSTOS", isNumeric: true },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={scaleInSpring}
                    whileHover={{ y: -4, transition: SPRING_SNAPPY }}
                    className="text-center cursor-default"
                  >
                    <div className="text-3xl font-bold text-[#00FF66] tabular-nums" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {stat.isNumeric ? (
                        <CountUp to={stat.value} suffix={stat.suffix} prefix={stat.prefix} delay={4.5} />
                      ) : (
                        stat.displayStatic
                      )}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/*
          NIEBLA ESPEJO — mitad inferior
          El Hero muere disolviéndose hacia el color sólido #020810.
          Se empareja con el "top fog" inverso del wrapper de beneficios.
        */}
        <div className="absolute bottom-0 left-0 w-full h-64 z-[5] pointer-events-none bg-gradient-to-b from-transparent to-[#020810]" />

      </section>

      {/* ==================== BENEFICIOS ==================== */}
      <div className="relative overflow-hidden" style={{ background: "#020810" }}>

        {/* Global grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,102,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 0,
            maskImage: "linear-gradient(to bottom, transparent 0%, black 12%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%)",
          }}
        />

        {/*
          NIEBLA ESPEJO — mitad superior
          Degradado inverso: arranca en #020810 sólido y revela la imagen/grid
          gradualmente hacia abajo. Tapa el inicio brusco de la textura.
          Empareja con el "bottom fog" del Hero → puente continuo.
        */}
        <div className="absolute top-0 left-0 w-full h-64 pointer-events-none z-[2] bg-gradient-to-b from-[#020810] to-transparent" />

        {/* ── Hero stats ── */}
        <section id="beneficios" className="relative min-h-[85vh] flex items-center px-6 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "url('/PresenciaDigitalPremiumIMG.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.13,
            zIndex: 0,
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to bottom, transparent 0%, transparent 55%, #020810 100%)",
            zIndex: 1,
          }} />
          <div className="absolute inset-0 z-[2] pointer-events-none opacity-20" style={{
            backgroundImage: "linear-gradient(rgba(0,255,102,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 18%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%)",
          }} />
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,102,0.08) 0%, transparent 70%)",
          }} />

          <div className="relative z-[3] w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8"
              style={{
                background: "rgba(0,255,102,0.1)",
                border: "1px solid rgba(0,255,102,0.35)",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#00FF66]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00FF66]">
                Beneficios del Ecosistema
              </span>
            </motion.div>

            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.0 }}
            >
              <MaskLine delay={0.15}>RESULTADOS QUE</MaskLine>
              <MaskLine delay={0.32}>
                <span style={{
                  color: "#00FF66",
                  textShadow: "0 0 40px rgba(0,255,102,0.7), 0 0 80px rgba(0,255,102,0.4)",
                }}>
                  SE NOTAN
                </span>
              </MaskLine>
            </h2>

            <div className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed overflow-hidden">
              <motion.p
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
              >
                Tres soluciones diseñadas para operar juntas. Cada una entrega valor sola — combinadas, transforman cómo funciona tu negocio.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { to: 340, suffix: "%", label: "más consultas desde Google" },
                { to: 3, suffix: "min", label: "tiempo promedio de primera respuesta" },
                { to: 12, suffix: "h", label: "semanales recuperadas por equipo" },
                { to: 94, suffix: "%", label: "de satisfacción de clientes" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={scaleInSpring}
                  className="p-5 text-center"
                  style={{
                    background: "rgba(0,255,102,0.04)",
                    border: "1px solid rgba(0,255,102,0.1)",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  <p className="text-3xl font-bold text-[#00FF66] tabular-nums mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Presencia Digital ── */}
        <SolutionSection
          id="presencia-digital"
          color="#00FF66"
          bgImage="/PresenciaDigitalPremiumIMG2.webp"
          flipBg
          href="/soluciones/presencia-digital-premium"
          ctaLabel="EXPLORAR PRESENCIA DIGITAL"
          label="Solución 01 — Presencia Digital Premium"
          titleLine1="TU NEGOCIO, VISTO COMO"
          titleLine2="LO QUE MERECE"
          description="El 75% de las personas evalúa la credibilidad de un negocio por su sitio web antes de contactarlo. Una presencia digital premium no es un lujo — es la primera impresión que convierte desconocidos en clientes."
          stat={340}
          statSuffix="%"
          statLabel="más consultas desde Google en los primeros 3 meses"
          blobSide="left"
          cards={
            <>
              <BenefitCard icon={Monitor} title="Sitio Premium" description="Diseño moderno y responsive que convierte visitas en consultas. Primera impresión que genera confianza instantánea." tag="Web" color="#00FF66" />
              <BenefitCard icon={Search} title="SEO Local" description="Apareces primero cuando alguien en tu ciudad busca lo que ofreces. Visibilidad orgánica que no requiere publicidad constante." tag="Visibilidad" color="#00FF66" />
              <BenefitCard icon={Palette} title="Identidad de Marca" description="Logo, colores, tipografía y guía de estilo coherente. Tu marca comunica quién eres antes de que digas una sola palabra." tag="Branding" color="#00FF66" />
              <BenefitCard icon={Zap} title="Velocidad Ultra" description="Carga en menos de 1 segundo. Cada segundo adicional cuesta un 7% de conversiones — tu web trabaja a máxima velocidad." tag="Performance" color="#00FF66" />
              <BenefitCard icon={Rocket} title="Landing Pages" description="Páginas de alta conversión para campañas específicas. Cada peso invertido en publicidad rinde más con destinos optimizados." tag="Conversión" color="#00FF66" />
              <BenefitCard icon={Users} title="Captura Automática" description="Formularios inteligentes que capturan datos y notifican en tiempo real. Ningún prospecto se pierde por falta de respuesta." tag="Leads" color="#00FF66" />
            </>
          }
        >
          <AnimacionPremium />
        </SolutionSection>

        {/* ── Chatbots WhatsApp ── */}
        <SolutionSection
          id="chatbots-whatsapp"
          color="#06b6d4"
          bgImage="/ChatbotsWhatsAppIMG.webp"
          href="/soluciones/chatbots-whatsapp-ia"
          ctaLabel="EXPLORAR CHATBOTS IA"
          label="Solución 02 — Chatbots y WhatsApp IA"
          titleLine1="ATENCIÓN QUE NUNCA"
          titleLine2="DEJA PASAR UN LEAD"
          description="El 78% de los clientes compra al primero que responde. Tu negocio no puede perder ventas mientras duermes, comes o atiendes otro cliente. Un chatbot con IA convierte cada mensaje en una oportunidad gestionada."
          stat={78}
          statSuffix="%"
          statLabel="de clientes compra al primero que responde"
          blobSide="right"
          cards={
            <>
              <BenefitCard icon={MessageSquare} title="Respuesta 24/7" description="Sin importar la hora ni el día, cada mensaje recibe respuesta en segundos. Tu negocio nunca duerme." tag="Siempre activo" color="#06b6d4" />
              <BenefitCard icon={Bot} title="Calificación IA" description="El chatbot filtra y prioriza leads automáticamente. Tu equipo solo recibe prospectos listos para comprar." tag="Inteligencia" color="#06b6d4" />
              <BenefitCard icon={Calendar} title="Citas Automáticas" description="Agenda reuniones directamente desde WhatsApp sin intervención humana. Tu calendario se llena solo." tag="Agenda" color="#06b6d4" />
              <BenefitCard icon={Bell} title="Recordatorios" description="Reduce un 80% las ausencias con recordatorios automáticos. Menos citas perdidas, más ingresos garantizados." tag="Retención" color="#06b6d4" />
              <BenefitCard icon={Users} title="Atención Personalizada" description="Respuestas adaptadas al historial y contexto de cada cliente. Experiencia premium sin esfuerzo adicional." tag="Experiencia" color="#06b6d4" />
              <BenefitCard icon={TrendingUp} title="Follow-up Automático" description="Ningún prospecto cae en el olvido. El sistema hace el seguimiento en los tiempos exactos para convertir." tag="Seguimiento" color="#06b6d4" />
            </>
          }
        >
          <AnimacionChatbot />
        </SolutionSection>

        {/* ── Automatización ── */}
        <SolutionSection
          id="automatizacion"
          color="#8b5cf6"
          bgImage="/AutomatizacionInteligenteIMG.webp"
          href="/soluciones/automatizacion-inteligente"
          ctaLabel="EXPLORAR AUTOMATIZACIÓN"
          label="Solución 03 — Automatización Inteligente"
          titleLine1="OPERACIONES QUE"
          titleLine2="SE MANEJAN SOLAS"
          description="Cada proceso manual que realiza tu equipo hoy es tiempo que no se invierte en crecer. La automatización no reemplaza a tu equipo — le devuelve las horas que merece para hacer lo que realmente importa."
          stat={12}
          statSuffix="h"
          statLabel="horas semanales de trabajo manual eliminadas en promedio"
          blobSide="left"
          cards={
            <>
              <BenefitCard icon={Workflow} title="Workflows Automáticos" description="Desde la captura del lead hasta el seguimiento post-venta. Cada paso se ejecuta sin que nadie tenga que recordarlo." tag="Core" color="#8b5cf6" />
              <BenefitCard icon={Database} title="CRM Inteligente" description="Todos los datos de clientes centralizados, actualizados y accesibles. Decisiones informadas en segundos." tag="Clientes" color="#8b5cf6" />
              <BenefitCard icon={GitBranch} title="50+ Integraciones" description="Tu facturación, inventario, WhatsApp y más herramientas hablan entre sí sin fricción ni datos duplicados." tag="Conexiones" color="#8b5cf6" />
              <BenefitCard icon={BarChart3} title="Dashboards en Vivo" description="Métricas clave de tu negocio disponibles en tiempo real. Sin esperar reportes manuales que llegan tarde." tag="Analytics" color="#8b5cf6" />
              <BenefitCard icon={Shield} title="Datos Protegidos" description="Copias automáticas, cifrado y cumplimiento de privacidad. Tu información crítica nunca en riesgo." tag="Seguridad" color="#8b5cf6" />
              <BenefitCard icon={Clock} title="Tiempo Recuperado" description="Facturación, recordatorios, inventarios — todo en automático. Tu equipo enfocado en crecer, no en operar." tag="Productividad" color="#8b5cf6" />
            </>
          }
        >
          <AnimacionDashboard />
        </SolutionSection>

        {/* ── Ecosistema ── */}
        <section className="relative py-32 px-6 overflow-hidden" style={{ background: "transparent" }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "url('/PresenciaDigitalPremiumIMG.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.13,
            zIndex: 0,
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to bottom, #020810 0%, transparent 20%, transparent 80%, #020810 100%)",
            zIndex: 1,
          }} />
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.div variants={fadeUpSpring}>
                <p className="text-xs font-bold text-[#00FF66] uppercase tracking-[0.3em] mb-4">EL ECOSISTEMA COMPLETO</p>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05 }}>
                <MaskLine delay={0.15}>CADA SOLUCIÓN ES PODEROSA.</MaskLine>
                <MaskLine delay={0.3}>
                  <span style={{ color: "#00FF66", textShadow: "0 0 40px rgba(0,255,102,0.5)" }}>
                    JUNTAS, SON IMPARABLES.
                  </span>
                </MaskLine>
              </h2>
              <motion.p variants={fadeUpSpring} className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Un cliente te encuentra en Google, agenda por WhatsApp y su pedido se procesa solo. Sin fricción. Sin intervención. Sin límites de horario.
              </motion.p>
            </motion.div>

            {/* Flow diagram */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainerFast}
              className="mb-20"
            >
              {/* Desktop */}
              <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-0">
                <motion.div variants={scaleInSpring} className="text-center">
                  <div className="p-6 mx-auto max-w-[200px]" style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  }}>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-300">Prospecto</p>
                    <p className="text-xs text-gray-600 mt-1">Busca en Google</p>
                  </div>
                </motion.div>

                <FlowArrow color="#00FF66" label="Atrae" />

                <motion.div variants={scaleInSpring} className="text-center">
                  <div className="p-6 mx-auto max-w-[200px]" style={{
                    background: "rgba(0,255,102,0.06)",
                    border: "1px solid rgba(0,255,102,0.25)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    boxShadow: "0 0 30px rgba(0,255,102,0.1)",
                  }}>
                    <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3" style={{
                      background: "rgba(0,255,102,0.15)",
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}>
                      <Globe className="w-5 h-5 text-[#00FF66]" />
                    </div>
                    <p className="text-sm font-bold text-white">Presencia Digital</p>
                    <p className="text-xs text-[#00FF66]/70 mt-1">Sitio + SEO + Marca</p>
                  </div>
                </motion.div>

                <FlowArrow color="#06b6d4" label="Convierte" />

                <motion.div variants={scaleInSpring} className="text-center">
                  <div className="p-6 mx-auto max-w-[200px]" style={{
                    background: "rgba(6,182,212,0.06)",
                    border: "1px solid rgba(6,182,212,0.25)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    boxShadow: "0 0 30px rgba(6,182,212,0.1)",
                  }}>
                    <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3" style={{
                      background: "rgba(6,182,212,0.15)",
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}>
                      <MessageSquare className="w-5 h-5 text-[#06b6d4]" />
                    </div>
                    <p className="text-sm font-bold text-white">Chatbots WhatsApp</p>
                    <p className="text-xs text-[#06b6d4]/70 mt-1">Responde + Agenda</p>
                  </div>
                </motion.div>

                <FlowArrow color="#8b5cf6" label="Automatiza" />

                <motion.div variants={scaleInSpring} className="text-center">
                  <div className="p-6 mx-auto max-w-[200px]" style={{
                    background: "rgba(139,92,246,0.06)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    boxShadow: "0 0 30px rgba(139,92,246,0.1)",
                  }}>
                    <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3" style={{
                      background: "rgba(139,92,246,0.15)",
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}>
                      <Cog className="w-5 h-5 text-[#8b5cf6]" />
                    </div>
                    <p className="text-sm font-bold text-white">Automatización</p>
                    <p className="text-xs text-[#8b5cf6]/70 mt-1">Opera + Reporta</p>
                  </div>
                </motion.div>
              </div>

              {/* Mobile */}
              <div className="lg:hidden flex flex-col items-center gap-2">
                {[
                  { icon: Users, label: "Prospecto", sub: "Busca en Google", color: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.1)", textColor: "#9ca3af" },
                  { icon: Globe, label: "Presencia Digital", sub: "Sitio + SEO + Marca", color: "rgba(0,255,102,0.06)", border: "rgba(0,255,102,0.25)", textColor: "#00FF66" },
                  { icon: MessageSquare, label: "Chatbots WhatsApp", sub: "Responde + Agenda", color: "rgba(6,182,212,0.06)", border: "rgba(6,182,212,0.25)", textColor: "#06b6d4" },
                  { icon: Cog, label: "Automatización", sub: "Opera + Reporta", color: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.25)", textColor: "#8b5cf6" },
                ].map((node, i) => (
                  <div key={i} className="flex flex-col items-center w-full max-w-xs">
                    {i > 0 && (
                      <div className="flex flex-col items-center py-1">
                        <div className="w-px h-6 bg-white/10" />
                        <ArrowRight className="w-3 h-3 text-white/20 rotate-90" />
                      </div>
                    )}
                    <motion.div variants={scaleInSpring} className="w-full p-5 text-center" style={{
                      background: node.color, border: `1px solid ${node.border}`,
                      clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                    }}>
                      <node.icon className="w-5 h-5 mx-auto mb-2" style={{ color: node.textColor }} />
                      <p className="text-sm font-bold text-white">{node.label}</p>
                      <p className="text-xs mt-1" style={{ color: node.textColor + "99" }}>{node.sub}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Multiplier cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {[
                { color: "#00FF66", icon: Globe, headline: "Sin web premium, el SEO no sirve.", body: "Posicionarte en Google solo funciona si la página que llega el visitante convierte. Presencia + visibilidad = clientes reales." },
                { color: "#06b6d4", icon: MessageSquare, headline: "Sin chatbot, los leads se enfrían.", body: "El 50% de leads no compra porque nadie respondió a tiempo. La automatización de conversaciones captura lo que la web atrae." },
                { color: "#8b5cf6", icon: Cog, headline: "Sin automatización, el crecimiento tiene techo.", body: "Más clientes requieren más procesos. La automatización hace que escalar no signifique trabajar el doble." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUpSpring}>
                  <div
                    className="p-7 h-full"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}07 0%, rgba(0,0,0,0) 60%)`,
                      border: `1px solid ${item.color}20`,
                      clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                    }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center mb-4" style={{
                      background: `${item.color}15`,
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <p className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.headline}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* ==================== CTA ==================== */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "150px 20px", background: "#020810" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "url('/CTAIMG2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(to bottom, #020810 0%, transparent 20%, transparent 80%, #020810 100%)",
        }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#00FF66]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative max-w-3xl mx-auto flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
            <MaskLine delay={0.15}>
              ¿LISTO PARA EL <span className="text-[#00FF66]">FUTURO</span>?
            </MaskLine>
          </h2>
          <motion.p variants={fadeUpSpring} className="text-lg md:text-xl text-white mb-10 max-w-lg">
            Transformamos tu negocio con IA. Resultados reales y medibles.
          </motion.p>
          <motion.a
            {...buttonInteraction}
            variants={fadeUpSpring}
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
            <Zap className="w-5 h-5" />
            EMPEZAR AHORA
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
