"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  UtensilsCrossed,
  Dumbbell,
  Building2,
  Store,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const scenarios = [
  {
    icon: Stethoscope,
    business: "Clínica Dental",
    description:
      "Automatizamos el sistema de citas, recordatorios y atención al paciente por WhatsApp.",
    before: [
      "Pérdida de citas por falta de recordatorios",
      "Agenda manual con errores frecuentes",
      "Pacientes llamando para confirmar horarios",
    ],
    after: [
      "Reservas automáticas 24/7 vía WhatsApp",
      "Recordatorios inteligentes sin intervención",
      "Atención al paciente centralizada y eficiente",
    ],
  },
  {
    icon: UtensilsCrossed,
    business: "Restaurante",
    description:
      "Implementamos pedidos automatizados y flujo operativo por WhatsApp con integración al sistema de cocina.",
    before: [
      "Pedidos desorganizados por múltiples canales",
      "Tiempos de respuesta lentos",
      "Errores en la transmisión de pedidos",
    ],
    after: [
      "Pedidos unificados y automatizados",
      "Confirmaciones en segundos",
      "Cocina recibe pedidos sin errores",
    ],
  },
  {
    icon: Dumbbell,
    business: "Gimnasio",
    description:
      "Modernizamos la captación de clientes, agenda de clases y seguimiento de membresías.",
    before: [
      "Leads perdidos fuera del horario laboral",
      "Proceso de inscripción manual y lento",
      "Dificultad para retener clientes",
    ],
    after: [
      "Captura de leads automatizada 24/7",
      "Inscripciones digitales en minutos",
      "Seguimiento inteligente de membresías",
    ],
  },
  {
    icon: Building2,
    business: "Inmobiliaria",
    description:
      "Conectamos CRM, seguimiento de clientes y automatización de visitas a propiedades.",
    before: [
      "Clientes sin seguimiento después de la primera visita",
      "Agenda de citas desorganizada",
      "Oportunidades de venta sin registrar",
    ],
    after: [
      "Seguimiento automatizado de cada cliente",
      "Agenda inteligente de visitas",
      "CRM con scoring de leads en tiempo real",
    ],
  },
  {
    icon: Store,
    business: "Tienda Local",
    description:
      "Digitalizamos catálogo, pedidos y comunicación con clientes a través de WhatsApp y web.",
    before: [
      "Catálogo físico sin alcance digital",
      "Pedidos manuales propensos a errores",
      "Comunicación desorganizada con clientes",
    ],
    after: [
      "Catálogo digital siempre disponible",
      "Pedidos automatizados sin errores",
      "Comunicación profesional y centralizada",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
            Transformaciones
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Cómo modernizamos{" "}
            <span className="gradient-text">negocios reales</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Escenarios de transformación. Cada negocio tiene retos distintos, pero
            el objetivo es el mismo: operar mejor.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {scenarios.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/5">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  <div className="lg:w-72 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                        <item.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                          Negocio
                        </span>
                        <h3 className="text-lg font-semibold text-white">
                          {item.business}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden lg:flex items-center justify-center shrink-0">
                    <ArrowRight className="w-5 h-5 text-emerald-500/40" />
                  </div>

                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="rounded-xl bg-red-500/[0.04] border border-red-500/10 p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                          Antes
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {item.before.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                            <span className="w-1 h-1 rounded-full bg-red-400/50 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10 p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                          Después
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {item.after.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                            <span className="w-1 h-1 rounded-full bg-emerald-400/50 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-x-2 -inset-y-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/[0.04] to-emerald-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Cada negocio tiene su propio camino de transformación.
            El tuyo empieza con una conversación.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
