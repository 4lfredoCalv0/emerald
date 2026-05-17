"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Phone,
  Globe,
  Cog,
  Send,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { HeroVisual } from "@/components/visuals";
import { submitAgendaForm } from "@/app/actions";

const PREFERENCIAS = [
  { value: "", label: "Sin preferencia" },
  { value: "manana", label: "Mañana (8am - 12pm)" },
  { value: "tarde", label: "Tarde (12pm - 6pm)" },
  { value: "cualquiera", label: "Cualquier horario" },
];

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

export default function AgendaPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    preferencia: "",
    mensaje: "",
  });

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.nombre.trim()) e.nombre = "Tu nombre es requerido";
    if (!formData.email.trim()) {
      e.email = "Tu email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Ingresa un email válido";
    }
    if (!formData.mensaje.trim()) e.mensaje = "Cuéntanos brevemente sobre tu negocio";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate();
    setErrors((prev) => {
      const next = { ...prev };
      if ((validationErrors as Record<string, string>)[name]) {
        next[name as keyof FormErrors] = (validationErrors as Record<string, string>)[name];
      } else {
        delete next[name as keyof FormErrors];
      }
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

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || "Error al enviar. Intenta de nuevo.");
      }
    });
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroVisual accentColor="emerald" type="nodes" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
          >
            <Calendar className="w-4 h-4" />
            <span>Consulta Estratégica</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Agenda tu consulta{" "}
            <span className="gradient-text animate-gradient-x">estratégica</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            30 minutos para analizar tu operación actual y diseñar
            la estrategia de modernización que tu negocio necesita.
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Cómo funciona la{" "}
              <span className="gradient-text">consulta estratégica</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                step: "01",
                title: "Envía tu solicitud",
                description:
                  "Completa el formulario con tus datos y preferencia de horario. Confirmación inmediata por email.",
              },
              {
                icon: MessageSquare,
                step: "02",
                title: "Análisis de tu negocio",
                description:
                  "En 30 minutos analizamos tu operación, identificamos oportunidades y definimos prioridades.",
              },
              {
                icon: Cog,
                step: "03",
                title: "Plan de acción",
                description:
                  "Recibes un plan personalizado con las soluciones ideales y los siguientes pasos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 sm:p-8 text-center group hover:border-emerald-500/20 transition-all duration-500"
              >
                <span className="text-xs font-mono text-emerald-400/60 mb-4 block">
                  {item.step}
                </span>
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 sm:p-8 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Gracias, {formData.nombre}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 max-w-sm mx-auto leading-relaxed">
                    Hemos recibido tu solicitud de consulta estratégica. Nos pondremos en contacto contigo para coordinar el horario.
                  </p>
                  <p className="text-xs text-gray-500 mb-8">
                    Respondemos en las próximas 2 horas en horario laboral.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Volver al inicio
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <span className="hidden sm:inline text-gray-600">·</span>
                    <a
                      href="https://wa.me/573239168300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Escríbenos por WhatsApp
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-red-300">{error}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Nombre <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isPending}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all text-sm ${
                          errors.nombre && touched.nombre
                            ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                            : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500/50"
                        } disabled:opacity-50`}
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && touched.nombre && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.nombre}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleChange}
                        disabled={isPending}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm disabled:opacity-50"
                        placeholder="Nombre de tu negocio"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isPending}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all text-sm ${
                          errors.email && touched.email
                            ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                            : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500/50"
                        } disabled:opacity-50`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={isPending}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm disabled:opacity-50"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="preferencia"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Preferencia de horario
                    </label>
                    <select
                      id="preferencia"
                      name="preferencia"
                      value={formData.preferencia}
                      onChange={handleChange}
                      disabled={isPending}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm appearance-none disabled:opacity-50"
                    >
                      {PREFERENCIAS.map((p) => (
                        <option key={p.value} value={p.value} className="bg-gray-900">
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Cuéntanos sobre tu negocio{" "}
                      <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isPending}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all text-sm resize-none ${
                        errors.mensaje && touched.mensaje
                          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                          : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500/50"
                      } disabled:opacity-50`}
                      placeholder="Breve descripción de tu negocio y qué te gustaría mejorar..."
                    />
                    {errors.mensaje && touched.mensaje && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.mensaje}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-emerald-500 disabled:hover:to-emerald-600"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Solicitar consulta estratégica
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* What to expect */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Qué esperar de la{" "}
              <span className="gradient-text">consulta</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: CheckCircle2,
                title: "Análisis de tu operación actual",
                description:
                  "Identificamos procesos manuales, cuellos de botella y oportunidades.",
              },
              {
                icon: CheckCircle2,
                title: "Recomendaciones personalizadas",
                description:
                  "Te mostramos exactamente qué soluciones aplican a tu negocio.",
              },
              {
                icon: CheckCircle2,
                title: "Plan de implementación claro",
                description:
                  "Recibes un roadmap con pasos concretos y tiempos estimados.",
              },
              {
                icon: CheckCircle2,
                title: "Sin presión comercial",
                description:
                  "La consulta es informativa. Tú decides si y cuándo avanzar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 sm:p-8 flex items-start gap-5 group hover:border-emerald-500/20 transition-all duration-500"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
