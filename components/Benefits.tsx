"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import {
  Globe,
  MessageCircle,
  Users,
  Clock,
  Waypoints,
  ArrowRight,
} from "lucide-react";

const transformations = [
  {
    icon: Globe,
    from: "Presencia online anticuada",
    to: "Identidad digital moderna y profesional",
    description:
      "Tu negocio se ve y opera como una empresa moderna. Sitio web premium, presencia digital coherente y una imagen que genera confianza desde el primer clic.",
  },
  {
    icon: MessageCircle,
    from: "Comunicación desorganizada",
    to: "Atención inteligente y centralizada",
    description:
      "WhatsApp, web y llamadas unificados en un solo sistema. Tus clientes reciben respuestas al instante, sin importar el canal ni la hora.",
  },
  {
    icon: Users,
    from: "Clientes que se pierden",
    to: "Gesti\u00f3n de leads automatizada",
    description:
      "Cada consulta se captura, califica y asigna autom\u00e1ticamente. Nunca m\u00e1s vuelves a perder un cliente potencial por falta de seguimiento.",
  },
  {
    icon: Clock,
    from: "Procesos manuales interminables",
    to: "Operaciones automatizadas y eficientes",
    description:
      "Facturaci\u00f3n, inventarios, recordatorios, CRM. Todo conectado y funcionando sin intervenci\u00f3n manual. Tu equipo se enfoca en lo que realmente importa.",
  },
  {
    icon: Waypoints,
    from: "Sistemas desconectados",
    to: "Infraestructura digital integrada",
    description:
      "Tus herramientas trabajan juntas. Ventas, marketing, atenci\u00f3n al cliente y operaciones sincronizados en un ecosistema digital inteligente.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
            Transformación
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            De negocio tradicional a{" "}
            <span className="gradient-text">empresa moderna</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            No se trata solo de tecnología. Se trata de hacer que tu negocio
            funcione bien, desde el primer día.
          </p>

          {/* Visual progression indicator */}
          <div className="mt-8 flex items-center justify-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="h-0.5 w-8 bg-emerald-500/30 rounded-full origin-left"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-5"
        >
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5">
                {/* Step number */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="text-xs font-mono text-gray-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-start gap-5 sm:gap-8">
                  <div className="shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-500">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-3">
                      <span className="text-sm text-gray-500 font-medium line-through decoration-gray-600/50">
                        {item.from}
                      </span>
                      <ArrowRight className="hidden sm:block w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm sm:text-base font-semibold text-emerald-300">
                        {item.to}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-x-2 -inset-y-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
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
            Resultados concretos. No prometemos magia — construimos sistemas
            que mejoran la operación de tu negocio día a día.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
