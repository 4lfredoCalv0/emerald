"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  UtensilsCrossed,
  Dumbbell,
  Building2,
  Store,
  Scale,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { HeroVisual, WorkflowVisual } from "@/components/visuals";

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
  {
    icon: Scale,
    business: "Estudio Jurídico",
    description:
      "Automatizamos la captación de clientes, agenda de consultas y seguimiento de casos.",
    before: [
      "Consultas perdidas por falta de respuesta rápida",
      "Agenda de reuniones manual y propensa a conflictos",
      "Seguimiento de casos sin sistema organizado",
    ],
    after: [
      "Captura automática de consultas potenciales",
      "Agenda inteligente sin conflictos de horario",
      "Seguimiento estructurado de cada caso",
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

export default function TransformacionesPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroVisual accentColor="emerald" type="waves" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
          >
            <span>Transformaciones</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Cómo modernizamos{" "}
            <span className="gradient-text animate-gradient-x">negocios reales</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Escenarios de transformación. Cada negocio tiene retos distintos, pero
            el objetivo es el mismo: operar mejor.
          </motion.p>
        </div>
      </section>

      {/* Scenarios */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual: Transformation summary */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <WorkflowVisual accentColor="emerald" />
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
                El resultado
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Una operación que{" "}
                <span className="gradient-text">funciona sola</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Cada transformación sigue el mismo patrón: identificar el caos,
                diseñar el sistema, implementar la automatización. El resultado
                siempre es el mismo: un negocio que opera mejor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Industrias", value: "6+" },
                  { label: "Procesos", value: "100%" },
                  { label: "Automatizados", value: "24/7" },
                  { label: "Resultados", value: "Reales" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3 text-center">
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Tu negocio puede ser la{" "}
              <span className="gradient-text">próxima transformación</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Cada transformación empieza con una conversación. Agenda una
              consulta estratégica gratuita y descubre cómo podemos mejorar tu operación.
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
            >
              Agenda tu consulta estratégica
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
