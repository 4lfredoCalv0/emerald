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
import { HeroVisual } from "@/components/visuals";
import Breadcrumbs from "@/components/Breadcrumbs";
import { submitContactForm } from "@/app/actions";

const SOLUTIONS = [
  { value: "", label: "Selecciona una solución" },
  { value: "presencia", label: "Presencia Digital Premium" },
  { value: "chatbots", label: "Chatbots y WhatsApp IA" },
  { value: "automatizacion", label: "Automatización Inteligente" },
  { value: "integral", label: "Transformación completa" },
];

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

export default function ContactoPage() {
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
    solucion: "",
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
    if (!formData.mensaje.trim()) e.mensaje = "Cuéntanos sobre tu negocio";
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
      const result = await submitContactForm({
        nombre: formData.nombre.trim(),
        empresa: formData.empresa.trim(),
        email: formData.email.trim().toLowerCase(),
        telefono: formData.telefono.trim(),
        solucion: formData.solucion,
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
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroVisual accentColor="emerald" type="waves" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <Breadcrumbs items={[{ label: "Contacto", href: "/contacto" }]} />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
          >
            <span>Contacto</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Hablemos de tu{" "}
            <span className="gradient-text">negocio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Cuéntanos sobre tu negocio. Analizamos tu situación actual y
            diseñamos la estrategia de modernización que más te conviene.
          </motion.p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Información de contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a
                          href="mailto:contactoemerald@proton.me"
                          className="text-sm text-white hover:text-emerald-400 transition-colors"
                        >
                          contactoemerald@proton.me
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">WhatsApp</p>
                        <a
                          href="https://wa.me/573239168300"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white hover:text-emerald-400 transition-colors"
                        >
                          +57 323 9168300
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">Ubicación</p>
                        <p className="text-sm text-white">
                          Barranquilla, Colombia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    WhatsApp directo
                  </h3>
                  <a
                    href="https://wa.me/573239168300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-emerald-500/10 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Escríbenos por WhatsApp
                  </a>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    ¿Prefieres una llamada?
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Agenda una consulta estratégica gratuita de 30 minutos.
                    Analizamos tu negocio y te recomendamos la solución ideal.
                  </p>
                  <Link
                    href="/agenda"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Agenda tu consulta estratégica
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                        Hemos recibido tu información y pronto nos pondremos en contacto contigo.
                      </p>
                      <p className="text-xs text-gray-500 mb-8">
                        Respondemos en las próximas 2 horas en horario laboral.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                          href="/"
                          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          Volver al inicio
                          <ArrowRight className="w-4 h-4" />
                        </Link>
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
                          <div className="min-h-[1.25rem] mt-1.5">
                            {errors.nombre && touched.nombre && (
                              <p className="text-xs text-red-400">{errors.nombre}</p>
                            )}
                          </div>
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
                          <div className="min-h-[1.25rem] mt-1.5">
                            {errors.email && touched.email && (
                              <p className="text-xs text-red-400">{errors.email}</p>
                            )}
                          </div>
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
                          htmlFor="solucion"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          ¿Qué solución te interesa?
                        </label>
                        <select
                          id="solucion"
                          name="solucion"
                          value={formData.solucion}
                          onChange={handleChange}
                          disabled={isPending}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm appearance-none disabled:opacity-50"
                        >
                          {SOLUTIONS.map((s) => (
                            <option key={s.value} value={s.value} className="bg-gray-900">
                              {s.label}
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
                          placeholder="Cuéntanos sobre tu negocio y qué te gustaría mejorar..."
                        />
                        <div className="min-h-[1.25rem] mt-1.5">
                          {errors.mensaje && touched.mensaje && (
                            <p className="text-xs text-red-400">{errors.mensaje}</p>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-emerald-500 disabled:hover:to-emerald-600"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Enviar
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
