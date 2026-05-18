"use client";

import { motion } from "framer-motion";
import { MapPin, Hexagon, ArrowRight, Lightbulb, Eye, Target, Sparkles, Cpu, Globe } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SobreEmeraldPage() {
  return (
    <div className="relative">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroVisual />

        {/* Ambient orbs - static */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -left-1/3 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        {/* Structural lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
          <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />
          <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto w-full">
          <Breadcrumbs items={[{ label: "Sobre Emerald", href: "/sobre-emerald" }]} />
          <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
          >
            <Hexagon className="w-3.5 h-3.5" />
            <span>Infraestructura inteligente para empresas modernas</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            Conectando negocios tradicionales{" "}
            <span className="gradient-text">con el futuro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Emerald nace en Barranquilla con una misión clara: ayudar a negocios que aún
            operan de forma manual a convertirse en empresas modernas, inteligentes y preparadas
            para lo que viene.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Barranquilla, Colombia</span>
          </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== THE PROBLEM ==================== */}
      <section className="relative py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
              La realidad
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Muchos negocios siguen operando{" "}
              <span className="gradient-text">como hace diez años</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: Cpu,
                title: "Sistemas desactualizados",
                description:
                  "Equipos y software que ya no dan abasto. Procesos que dependen de una sola persona. Sin respaldo, sin redundancia, sin escalabilidad.",
              },
              {
                icon: Globe,
                title: "Presencia digital débil",
                description:
                  "Un sitio web que no representa la calidad del negocio. Invisibles en Google. Sin presencia en redes que realmente genere clientes.",
              },
              {
                icon: Lightbulb,
                title: "Procesos manuales",
                description:
                  "Facturación a mano. Inventarios en cuadernos. Seguimiento de clientes en hojas sueltas. Oportunidades que se pierden por falta de organización.",
              },
              {
                icon: Target,
                title: "Oportunidades perdidas",
                description:
                  "Clientes que llaman y nadie responde. Leads que se enfrían. Citas que se cruzan. Ventas que no se concretan porque el sistema no acompaña.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center text-sm text-gray-500 max-w-lg mx-auto"
          >
            Esta no es la excepción. Es la realidad de la mayoría de los negocios locales y
            regionales en Latinoamérica.
          </motion.p>
        </div>
      </section>

      {/* ==================== THE VISION ==================== */}
      <section className="relative py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
              La visión
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              La tecnología no debería ser{" "}
              <span className="gradient-text">solo para grandes corporaciones</span>
            </h2>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Automatización que libera",
                description:
                  "Creamos sistemas que eliminan tareas repetitivas. Procesos que antes tomaban horas ahora fluyen solos. Tu equipo se enfoca en lo que realmente importa: hacer crecer el negocio.",
              },
              {
                title: "Sistemas que entienden tu negocio",
                description:
                  "No instalamos software genérico. Diseñamos infraestructura digital a la medida de cada operación. Cada flujo, cada integración, cada detalle está pensado para tu realidad.",
              },
              {
                title: "Presencia que genera confianza",
                description:
                  "Tu presencia digital debe reflejar la calidad de lo que ofreces. Diseñamos experiencias que comunican profesionalismo desde el primer clic y convierten visitantes en clientes.",
              },
              {
                title: "Datos que hablan",
                description:
                  "Dashboards en tiempo real, métricas claras, información accesible. Saber exactamente cómo está tu negocio en cualquier momento no debería ser un lujo.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY EMERALD EXISTS ==================== */}
      <section className="relative py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
              Por qué existimos
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Porque modernizarse no debería ser{" "}
              <span className="gradient-text">complicado ni costoso</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Las grandes empresas tienen departamentos enteros de tecnología. Los negocios
              locales tienen dueños que hacen de todo. Creamos Emerald para acercar esa
              capacidad a quienes más la necesitan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Eye,
                title: "Visión clara",
                description:
                  "Sabemos lo que funciona porque trabajamos con negocios reales. No teorizamos: construimos sistemas que resuelven problemas concretos.",
              },
              {
                icon: Sparkles,
                title: "Tecnología accesible",
                description:
                  "No necesitas un presupuesto corporativo para tener sistemas inteligentes. Diseñamos soluciones modulares que se adaptan al tamaño y necesidades de tu negocio.",
              },
              {
                icon: Hexagon,
                title: "Compromiso local",
                description:
                  "Entendemos el contexto de Barranquilla y Latinoamérica porque somos parte de él. No somos una empresa externa — somos parte del ecosistema que queremos transformar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BARRANQUILLA ==================== */}
      <section className="relative py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-10 lg:p-14 text-center relative overflow-hidden"
          >
            {/* Static ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-6 sm:mb-8"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Barranquilla, Colombia</span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6">
                Hecho en Barranquilla.{" "}
                <span className="gradient-text">Para el mundo.</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6">
                Barranquilla es una ciudad que se transforma. Moderna, empresarial, conectada.
                Emerald nace aquí porque creemos que el talento y la visión no dependen de la
                ubicación — dependen de la determinación.
              </p>

              <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
                No somos una startup de Silicon Valley. Somos una empresa de tecnología
                construida desde el Caribe colombiano, con perspectiva global y ADN local.
                Y eso nos da una visión que ninguna corporación tiene.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== THE FUTURE ==================== */}
      <section className="relative py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
              El futuro
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Estamos construyendo el futuro de{" "}
              <span className="gradient-text">los negocios modernos</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Nuestra visión es clara: ayudar a miles de negocios a dar el salto hacia la
              modernización. No con promesas vacías, sino con sistemas que funcionan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "+500 negocios modernizados",
                description: "Para 2027, queremos haber ayudado a más de 500 empresas en Latinoamérica a transformar su operación.",
              },
              {
                title: "Infraestructura que evoluciona",
                description: "Sistemas que se actualizan, escalan y mejoran con el tiempo. Tu negocio nunca se queda atrás.",
              },
              {
                title: "Talento local, impacto global",
                description: "Seguir formando y atrayendo talento tecnológico en Barranquilla para construir desde aquí soluciones de clase mundial.",
              },
              {
                title: "Tecnología con propósito",
                description: "Seguir democratizando el acceso a sistemas inteligentes para que cualquier negocio, sin importar su tamaño, pueda competir.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12 text-center"
          >
            <a
              href="/agenda"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
            >
              Agenda tu consulta estratégica
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="hexGrid" width="8" height="14" patternUnits="userSpaceOnUse">
            <path d="M4,0 L8,2.3 L8,6.9 L4,9.2 L0,6.9 L0,2.3 Z" fill="none" stroke="#10b981" strokeWidth="0.1" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#hexGrid)" />
      </svg>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40%] h-[40%]">
        <div className="w-full h-full rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* Static vertical lines */}
      {[15, 35, 55, 75].map((x, i) => (
        <div key={i} className="absolute top-0 h-full w-px" style={{ left: `${x}%` }}>
          <div className="w-full h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        </div>
      ))}
    </div>
  );
}
