"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Zap, Globe, BrainCircuit, Shield, TrendingUp, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardMockup } from "@/components/visuals";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; baseAlpha: number;
      phase: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.08 + 0.03,
        size: Math.random() * 1.5 + 0.3,
        alpha: 0,
        baseAlpha: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() / 2000;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        p.alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(time + p.phase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            const alpha = 0.03 * (1 - dist / 120) * ((a.alpha + b.alpha) / 2);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}

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
    description: "Sitios web de alto impacto, landing pages y toda la infraestructura online que tu negocio necesita para competir hoy.",
    features: ["Sitios web premium", "Landing pages de conversión", "Branding digital"],
  },
  {
    icon: MessageSquare,
    title: "Chatbots y WhatsApp IA",
    description: "Sistemas que atienden clientes, califican leads y agendan citas al instante. Tu negocio responde siempre.",
    features: ["Atención automática 24/7", "Calificación de leads", "Agenda inteligente"],
  },
  {
    icon: BrainCircuit,
    title: "Automatización Inteligente",
    description: "Conectamos tus herramientas y automatizamos procesos: facturación, inventarios, CRM, marketing y más.",
    features: ["Workflows automatizados", "CRM integrado", "Dashboards en tiempo real"],
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
                    href="/soluciones"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver soluciones
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
        <section className="relative py-24 sm:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
                Soluciones
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Tres pilares para{" "}
                <span className="gradient-text">modernizar tu negocio</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Presencia digital, comunicación inteligente y automatización. Todo lo que necesitas en un solo ecosistema.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group glass-card p-8 hover:border-emerald-500/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
