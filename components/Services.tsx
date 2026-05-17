"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Globe, MessageSquare, Cog, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Presencia Digital Premium",
    subtitle: "Modernización online completa",
    description:
      "Creamos sistemas digitales que transforman la imagen de tu negocio: sitios web premium, landing pages de alto impacto y toda la infraestructura online que necesitas para competir hoy.",
    gradient: "from-emerald-400 to-emerald-600",
    outcomes: [
      "Presencia online profesional y moderna",
      "Sistemas que convierten visitantes en clientes",
      "Tu negocio disponible 24/7 en internet",
    ],
    href: "/soluciones/presencia-digital-premium",
  },
  {
    icon: MessageSquare,
    title: "Chatbots y WhatsApp IA",
    subtitle: "Comunicación inteligente",
    description:
      "Sistemas que atienden clientes, califican leads y agendan citas al instante por WhatsApp y web. Tu negocio responde siempre — cada mensaje se convierte en oportunidad.",
    gradient: "from-blue-400 to-cyan-500",
    outcomes: [
      "Respondes clientes al instante",
      "Nunca pierdes un lead",
      "Ventas automatizadas 24/7",
    ],
    href: "/soluciones/chatbots-whatsapp-ia",
  },
  {
    icon: Cog,
    title: "Automatización Inteligente",
    subtitle: "Operaciones con IA",
    description:
      "Conectamos tus herramientas y automatizamos procesos: facturación, inventarios, CRM, marketing, seguimiento de clientes. Tu equipo se enfoca en lo importante, el sistema se encarga del resto.",
    gradient: "from-purple-400 to-pink-500",
    outcomes: [
      "Eliminas tareas repetitivas",
      "Todo conectado y sincronizado",
      "Resultados medibles en tiempo real",
    ],
    href: "/soluciones/automatizacion-inteligente",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <Link href={service.href} className="block">
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-card p-8 sm:p-10 h-full transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 cursor-pointer relative overflow-hidden"
          whileHover={{ y: -6 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient}/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
          >
            <service.icon className="w-7 h-7 text-white" />
          </motion.div>

          <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-2">
            {service.subtitle}
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">
            {service.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="space-y-2 mb-6">
            {service.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1 text-sm text-emerald-400 font-medium">
            <span>Explorar solución</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0 origin-left rounded-b-2xl"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-4 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
            Soluciones
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Transformamos tu negocio{" "}
            <span className="gradient-text animate-gradient-x">desde la raíz</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Presencia digital premium, comunicación inteligente y automatización.
            Tres pilares para que tu negocio opere al nivel que merece.
          </p>

          {/* Visual connector line */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-emerald-500/30" />
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="w-8 h-px bg-emerald-500/30" />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
