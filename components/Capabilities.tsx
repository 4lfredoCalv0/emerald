"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Palette,
  BrainCircuit,
  MessageSquare,
  Workflow,
  BarChart3,
  Database,
  Shield,
} from "lucide-react";

const capabilities = [
  {
    icon: Globe2,
    title: "Sitios Web Premium",
    description:
      "Landing pages, sitios corporativos y plataformas digitales de alto impacto visual y rendimiento.",
  },
  {
    icon: Palette,
    title: "Identidad Digital",
    description:
      "Branding, diseño de marca y presencia online coherente que proyecta profesionalismo y confianza.",
  },
  {
    icon: BrainCircuit,
    title: "Agentes IA",
    description:
      "Agentes virtuales que manejan ventas, soporte, administración y tareas complejas sin intervención constante.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description:
      "Chatbots inteligentes, respuestas automáticas, agenda de citas y catálogos que venden por ti.",
  },
  {
    icon: Workflow,
    title: "CRM y Automatización",
    description:
      "Gestión de clientes automatizada con captura de leads, scoring y seguimiento inteligente.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description:
      "Reportes en tiempo real con lo que importa: ventas, clientes, rendimiento del negocio.",
  },
  {
    icon: Database,
    title: "Integraciones",
    description:
      "Conexión con facturación, inventarios, redes sociales, pasarelas de pago y más.",
  },
  {
    icon: Shield,
    title: "Seguridad y Respaldo",
    description:
      "Datos protegidos, copias de seguridad automáticas y cumplimiento de privacidad.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Capabilities() {
  return (
    <section id="capacidades" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3">
            Capacidades
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Todo lo que necesitas para modernizar tu operación
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            De la presencia online a la automatización con IA. Un solo ecosistema.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <cap.icon className="w-5 h-5 text-emerald-400/80" />
              </div>
              <h3 className="text-sm font-medium text-white mb-1">
                {cap.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
