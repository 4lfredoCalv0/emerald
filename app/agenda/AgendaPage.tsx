"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { submitAgendaForm } from "@/app/actions";
import { MaskLine } from "@/components/motion/MotionPrimitives";
import { staggerContainer, fadeUpSpring, scaleInSpring } from "@/lib/animation-variants";

const ACCENT = "#8b5cf6";

const PREFERENCIAS = [
  { value: "", label: "Sin preferencia" },
  { value: "manana", label: "Mañana (8am - 12pm)" },
  { value: "tarde", label: "Tarde (12pm - 6pm)" },
  { value: "cualquiera", label: "Cualquier horario" },
];

const inputBase =
  "w-full px-4 py-3 text-sm text-white placeholder-gray-600 bg-white/[0.03] border border-white/[0.07] rounded-lg focus:outline-none transition-all disabled:opacity-50";
const inputNormal = `${inputBase} focus:border-[#8b5cf6]/40 focus:ring-1 focus:ring-[#8b5cf6]/15`;
const inputError  = `${inputBase} border-red-500/40 focus:border-red-500/40 focus:ring-1 focus:ring-red-500/15`;

interface FormErrors { nombre?: string; email?: string; mensaje?: string; }

export default function AgendaPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    nombre: "", empresa: "", email: "", telefono: "", preferencia: "", mensaje: "",
  });

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.nombre.trim()) e.nombre = "Tu nombre es requerido";
    if (!formData.email.trim()) { e.email = "Tu email es requerido"; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { e.email = "Ingresa un email válido"; }
    if (!formData.mensaje.trim()) e.mensaje = "Cuéntanos brevemente sobre tu negocio";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        if (name === "nombre" && value.trim()) delete next.nombre;
        if (name === "email") {
          if (!value.trim()) delete next.email;
          else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) delete next.email;
        }
        if (name === "mensaje" && value.trim()) delete next.mensaje;
        return next;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate();
    setErrors((prev) => {
      const next = { ...prev };
      if ((validationErrors as Record<string, string>)[name]) {
        next[name as keyof FormErrors] = (validationErrors as Record<string, string>)[name];
      } else { delete next[name as keyof FormErrors]; }
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ nombre: true, email: true, mensaje: true });
    if (Object.keys(validationErrors).length > 0) return;
    setError(null);
    startTransition(async () => {
      const result = await submitAgendaForm({
        nombre: formData.nombre.trim(),
        empresa: formData.empresa.trim(),
        email: formData.email.trim().toLowerCase(),
        telefono: formData.telefono.trim(),
        preferencia: formData.preferencia,
        mensaje: formData.mensaje.trim(),
      });
      if (result.success) { setSubmitted(true); }
      else { setError(result.error || "Error al enviar. Intenta de nuevo."); }
    });
  };

  return (
    <div className="relative overflow-hidden" style={{ background: "#020810" }}>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('/AGENDAIMG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.10,
        zIndex: 0,
      }} />
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(139,92,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px", zIndex: 0,
      }} />
      <div className="absolute pointer-events-none" style={{
        top: "-80px", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "600px",
        background: `radial-gradient(ellipse at center, ${ACCENT}07 0%, transparent 65%)`,
        zIndex: 0,
      }} />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUpSpring} className="inline-flex items-center gap-3 px-4 py-2 mb-8"
              style={{
                background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`,
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}>
              <Calendar className="w-3.5 h-3.5" style={{ color: ACCENT }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                Consulta Estratégica — Gratis
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05 }}>
              <MaskLine delay={0.1}>30 minutos que</MaskLine>
              <MaskLine delay={0.25}>
                <span style={{ color: ACCENT, textShadow: `0 0 40px ${ACCENT}70, 0 0 80px ${ACCENT}40` }}>
                  cambian la dirección.
                </span>
              </MaskLine>
            </h1>

            <motion.p variants={fadeUpSpring} className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Analizamos tu operación actual, identificamos oportunidades y diseñamos el plan de modernización que tu negocio necesita.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="relative py-8 pb-16 px-6 z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative p-8 sm:p-10"
              style={{
                background: "rgba(8,14,22,0.4)",
                border: "1px solid rgba(255,255,255,0.07)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}>
              <div className="absolute top-0 left-0 right-0 h-[1.5px]" style={{
                background: `linear-gradient(90deg, transparent, ${ACCENT}50, transparent)`,
              }} />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                    className="text-center py-16">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 16 }}>
                      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                        style={{
                          background: `${ACCENT}12`, border: `1px solid ${ACCENT}35`,
                          clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                        }}>
                        <CheckCircle2 className="w-8 h-8" style={{ color: ACCENT }} />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Gracias, {formData.nombre}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1 max-w-sm mx-auto leading-relaxed">
                      Recibimos tu solicitud de consulta estratégica. Te contactaremos para coordinar el horario.
                    </p>
                    <p className="text-xs text-gray-600 mb-10">Respondemos en las próximas 2 horas en horario laboral.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a href="/" className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
                        style={{ color: ACCENT }}>
                        Volver al inicio <ArrowRight className="w-4 h-4" />
                      </a>
                      <span className="hidden sm:block text-gray-700">·</span>
                      <a href="https://wa.me/573239168300" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                        <MessageSquare className="w-4 h-4" /> WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form key="form"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                    onSubmit={handleSubmit} className="space-y-5" noValidate>

                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: ACCENT }}>
                        Tu información
                      </p>
                      <div className="h-px" style={{ background: `linear-gradient(90deg, ${ACCENT}30, transparent)` }} />
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                          className="flex items-start gap-3 p-4 rounded-lg"
                          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                          <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <p className="text-sm text-red-300">{error}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Nombre <span style={{ color: ACCENT }}>*</span>
                        </label>
                        <input id="nombre" name="nombre" type="text" required
                          value={formData.nombre} onChange={handleChange} onBlur={handleBlur} disabled={isPending}
                          className={errors.nombre && touched.nombre ? inputError : inputNormal}
                          placeholder="Tu nombre" />
                        <div className="min-h-[1.25rem] mt-1">
                          {errors.nombre && touched.nombre && <p className="text-xs text-red-400">{errors.nombre}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Empresa
                        </label>
                        <input id="empresa" name="empresa" type="text"
                          value={formData.empresa} onChange={handleChange} disabled={isPending}
                          className={inputNormal} placeholder="Nombre de tu negocio" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Email <span style={{ color: ACCENT }}>*</span>
                        </label>
                        <input id="email" name="email" type="email" required
                          value={formData.email} onChange={handleChange} onBlur={handleBlur} disabled={isPending}
                          className={errors.email && touched.email ? inputError : inputNormal}
                          placeholder="tu@email.com" />
                        <div className="min-h-[1.25rem] mt-1">
                          {errors.email && touched.email && <p className="text-xs text-red-400">{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Teléfono
                        </label>
                        <input id="telefono" name="telefono" type="tel"
                          value={formData.telefono} onChange={handleChange} disabled={isPending}
                          className={inputNormal} placeholder="+57 300 000 0000" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferencia" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Preferencia de horario
                      </label>
                      <select id="preferencia" name="preferencia"
                        value={formData.preferencia} onChange={handleChange} disabled={isPending}
                        className={`${inputNormal} appearance-none`}>
                        {PREFERENCIAS.map((p) => (
                          <option key={p.value} value={p.value} className="bg-[#0d0d0d]">{p.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Cuéntanos sobre tu negocio <span style={{ color: ACCENT }}>*</span>
                      </label>
                      <textarea id="mensaje" name="mensaje" rows={4} required
                        value={formData.mensaje} onChange={handleChange} onBlur={handleBlur} disabled={isPending}
                        className={`${errors.mensaje && touched.mensaje ? inputError : inputNormal} resize-none`}
                        placeholder="Breve descripción de tu negocio y qué te gustaría mejorar..." />
                      <div className="min-h-[1.25rem] mt-1">
                        {errors.mensaje && touched.mensaje && <p className="text-xs text-red-400">{errors.mensaje}</p>}
                      </div>
                    </div>

                    <button type="submit" disabled={isPending}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        background: ACCENT,
                        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                        boxShadow: `0 0 30px ${ACCENT}28`,
                      }}
                      onMouseEnter={(e) => { if (!isPending) (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${ACCENT}50, 0 0 90px ${ACCENT}20`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${ACCENT}28`; }}>
                      {isPending ? (
                        <><Loader2 className="w-4 h-4 animate-spin" />Enviando solicitud...</>
                      ) : (
                        <><Calendar className="w-4 h-4" />Solicitar consulta estratégica</>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="relative py-8 pb-24 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="h-px mb-12" style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }} />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}>
            <motion.p variants={fadeUpSpring} className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: ACCENT }}>
              En la llamada
            </motion.p>
            <motion.h2 variants={fadeUpSpring}
              className="text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Qué puedes esperar
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, title: "Análisis de tu operación actual",
                  description: "Identificamos procesos manuales, cuellos de botella y oportunidades concretas." },
                { icon: CheckCircle2, title: "Recomendaciones personalizadas",
                  description: "Te mostramos exactamente qué soluciones aplican a tu negocio, no genéricas." },
                { icon: CheckCircle2, title: "Plan de implementación claro",
                  description: "Recibes un roadmap con pasos concretos y tiempos estimados reales." },
                { icon: Clock, title: "Sin presión comercial",
                  description: "La consulta es informativa. Tú decides si y cuándo avanzar, sin seguimiento agresivo." },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleInSpring}>
                  <div className="flex items-start gap-4 p-6 group"
                    style={{
                      background: "rgba(8,14,22,0.4)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}25`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${ACCENT}10`, border: `1px solid ${ACCENT}20`,
                        clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                      }}>
                      <item.icon className="w-4 h-4" style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
