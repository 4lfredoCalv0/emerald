"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { MaskLine } from "@/components/motion/MotionPrimitives";
import { staggerContainer, fadeUpSpring, scaleInSpring } from "@/lib/animation-variants";

const ACCENT = "#FFD60A";

const SOLUTIONS = [
  { value: "", label: "Selecciona una solución" },
  { value: "presencia", label: "Presencia Digital Premium" },
  { value: "chatbots", label: "Chatbots y WhatsApp IA" },
  { value: "automatizacion", label: "Automatización Inteligente" },
  { value: "integral", label: "Transformación completa" },
];

// ─── Shared input styles ──────────────────────────────────────────────────
const inputBase =
  "w-full px-4 py-3 text-sm text-white placeholder-gray-600 bg-white/[0.03] border border-white/[0.07] rounded-lg focus:outline-none transition-all disabled:opacity-50";
const inputNormal = `${inputBase} focus:border-[#FFD60A]/40 focus:ring-1 focus:ring-[#FFD60A]/15`;
const inputError  = `${inputBase} border-red-500/40 focus:border-red-500/40 focus:ring-1 focus:ring-red-500/15`;

interface FormErrors { nombre?: string; email?: string; mensaje?: string; }

export default function ContactoPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    nombre: "", empresa: "", email: "", telefono: "", solucion: "", mensaje: "",
  });

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.nombre.trim()) e.nombre = "Tu nombre es requerido";
    if (!formData.email.trim()) { e.email = "Tu email es requerido"; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { e.email = "Ingresa un email válido"; }
    if (!formData.mensaje.trim()) e.mensaje = "Cuéntanos sobre tu negocio";
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
      const result = await submitContactForm({
        nombre: formData.nombre.trim(),
        empresa: formData.empresa.trim(),
        email: formData.email.trim().toLowerCase(),
        telefono: formData.telefono.trim(),
        solucion: formData.solucion,
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
        backgroundImage: "url('/CTAIMG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.10,
        zIndex: 0,
      }} />
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,214,10,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,10,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px", zIndex: 0,
      }} />
      {/* Ambient blob */}
      <div className="absolute pointer-events-none" style={{
        top: "-80px", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "500px",
        background: `radial-gradient(ellipse at center, ${ACCENT}07 0%, transparent 65%)`,
        zIndex: 0,
      }} />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUpSpring} className="inline-flex items-center gap-3 px-4 py-2 mb-8"
              style={{
                background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`,
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}>
              <motion.div className="w-2 h-2 rounded-full" style={{ background: ACCENT }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Contacto</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05 }}>
              <MaskLine delay={0.1}>Hablemos de</MaskLine>
              <MaskLine delay={0.25}>
                <span style={{ color: ACCENT, textShadow: `0 0 40px ${ACCENT}70, 0 0 80px ${ACCENT}40` }}>tu negocio.</span>
              </MaskLine>
            </h1>

            <motion.p variants={fadeUpSpring} className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Cuéntanos sobre tu operación. Analizamos tu situación y diseñamos la estrategia que más te conviene.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="relative pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

            {/* ── Left: info ── */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden" animate="visible" variants={staggerContainer}
            >
              {/* Contact info card */}
              <motion.div variants={scaleInSpring} className="p-7 mb-5"
                style={{
                  background: `linear-gradient(135deg, rgba(8,14,22,0.4) 0%, rgba(2,8,16,0.4) 100%)`,
                  border: "1px solid rgba(255,255,255,0.07)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}>
                <div className="absolute top-0 left-0 right-0 h-[1.5px]" style={{
                  background: `linear-gradient(90deg, ${ACCENT}70, ${ACCENT}00)`,
                }} />
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
                  Información directa
                </p>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "contactoemerald.ia@gmail.com", href: "mailto:contactoemerald.ia@gmail.com" },
                    { icon: MessageSquare, label: "WhatsApp", value: "+57 323 9168300", href: "https://wa.me/573239168300" },
                    { icon: MapPin, label: "Ubicación", value: "Barranquilla, Colombia", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${ACCENT}10`, border: `1px solid ${ACCENT}20`,
                          clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                        }}>
                        <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-600 uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm text-white transition-colors duration-200"
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = ACCENT; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}>
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-white">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div variants={scaleInSpring}>
                <a href="https://wa.me/573239168300" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 mb-5 group transition-all duration-300"
                  style={{
                    background: "rgba(8,14,22,0.4)", border: "1px solid rgba(255,255,255,0.07)",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}35`;
                    (e.currentTarget as HTMLElement).style.background = "rgba(14,20,28,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(8,14,22,0.4)";
                  }}>
                  <MessageSquare className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                  <span className="text-sm font-medium text-white">Escríbenos por WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-600 group-hover:translate-x-0.5 group-hover:text-[#FFD60A] transition-all duration-200" />
                </a>
              </motion.div>

              {/* Prefer a call */}
              <motion.div variants={fadeUpSpring}
                className="px-6 pt-5 border-t"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-gray-600">¿Prefieres una llamada?</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Agenda una consulta estratégica gratuita de 30 minutos.
                </p>
                <Link href="/agenda"
                  className="inline-flex items-center gap-1.5 text-sm font-bold group transition-colors duration-200"
                  style={{ color: ACCENT }}>
                  Agenda tu consulta
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>

            {/* ── Right: form ── */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
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
                        Recibimos tu mensaje y te contactaremos pronto.
                      </p>
                      <p className="text-xs text-gray-600 mb-10">Respondemos en las próximas 2 horas en horario laboral.</p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
                          style={{ color: ACCENT }}>
                          Volver al inicio <ArrowRight className="w-4 h-4" />
                        </Link>
                        <span className="hidden sm:block text-gray-700">·</span>
                        <a href="https://wa.me/573239168300" target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                          <MessageSquare className="w-4 h-4" /> WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form"
                      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                      onSubmit={handleSubmit} className="space-y-5" noValidate>

                      <AnimatePresence>
                        {error && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                            className="flex items-start gap-3 p-4"
                            style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px" }}>
                            <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                            <p className="text-sm text-red-300">{error}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Nombre + Empresa */}
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

                      {/* Email + Teléfono */}
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

                      {/* Solución */}
                      <div>
                        <label htmlFor="solucion" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          ¿Qué solución te interesa?
                        </label>
                        <select id="solucion" name="solucion"
                          value={formData.solucion} onChange={handleChange} disabled={isPending}
                          className={`${inputNormal} appearance-none`}>
                          {SOLUTIONS.map((s) => (
                            <option key={s.value} value={s.value} className="bg-[#0d0d0d]">{s.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Mensaje */}
                      <div>
                        <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Cuéntanos sobre tu negocio <span style={{ color: ACCENT }}>*</span>
                        </label>
                        <textarea id="mensaje" name="mensaje" rows={4} required
                          value={formData.mensaje} onChange={handleChange} onBlur={handleBlur} disabled={isPending}
                          className={`${errors.mensaje && touched.mensaje ? inputError : inputNormal} resize-none`}
                          placeholder="Cuéntanos sobre tu negocio y qué te gustaría mejorar..." />
                        <div className="min-h-[1.25rem] mt-1">
                          {errors.mensaje && touched.mensaje && <p className="text-xs text-red-400">{errors.mensaje}</p>}
                        </div>
                      </div>

                      {/* Submit */}
                      <button type="submit" disabled={isPending}
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-bold text-black transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: ACCENT,
                          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                          boxShadow: `0 0 24px ${ACCENT}28`,
                        }}
                        onMouseEnter={(e) => { if (!isPending) (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${ACCENT}50, 0 0 80px ${ACCENT}20`; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${ACCENT}28`; }}>
                        {isPending ? (
                          <><Loader2 className="w-4 h-4 animate-spin" />Enviando...</>
                        ) : (
                          <><Send className="w-4 h-4" />Enviar mensaje</>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
