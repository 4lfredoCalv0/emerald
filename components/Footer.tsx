"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Instagram, ArrowUp, MessageSquare } from "lucide-react";

const footerLinks = {
  soluciones: [
    { label: "Presencia Digital Premium", href: "/soluciones/presencia-digital-premium" },
    { label: "Chatbots y WhatsApp IA", href: "/soluciones/chatbots-whatsapp-ia" },
    { label: "Automatización Inteligente", href: "/soluciones/automatizacion-inteligente" },
  ],
  empresa: [
    { label: "Sobre Emerald", href: "/sobre-emerald" },
    { label: "Transformaciones", href: "/transformaciones" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "/terminos-condiciones" },
    { label: "Política de Privacidad", href: "/politica-privacidad" },
  ],
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.a
              href="#"
              className="flex items-center gap-2.5 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/logomark.svg"
                alt="Emerald"
                className="w-8 h-8"
                loading="lazy"
              />
              <span className="text-xl font-semibold text-white lowercase font-brand tracking-wide">emerald</span>
            </motion.a>

            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              Modernizamos negocios con presencia digital premium, automatización
              y sistemas que trabajan por ti. Barranquilla, Colombia.
            </p>

            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-400"
                whileHover={{ x: 3 }}
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Barranquilla, Colombia</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-400"
                whileHover={{ x: 3 }}
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <a
                  href="mailto:contactoemerald@proton.me"
                  className="hover:text-emerald-400 transition-colors"
                >
                  contactoemerald@proton.me
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-400"
                whileHover={{ x: 3 }}
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <a
                  href="https://wa.me/573239168300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +57 323 9168300
                </a>
              </motion.div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              {[Github, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([key, links], colIndex) => (
            <motion.div
              key={key}
              custom={colIndex + 1}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {key === "soluciones" ? "Soluciones" : key === "empresa" ? "Empresa" : "Legal"}
              </h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-gray-500"
          >
            &copy; {new Date().getFullYear()} Emerald. Todos los derechos
            reservados.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-500"
          >
            Hecho con{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-emerald-400 inline-block"
            >
              &hearts;
            </motion.span>{" "}
            en Barranquilla, Colombia
          </motion.p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25 flex items-center justify-center text-white"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/573239168300"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25 flex items-center justify-center text-white"
      >
        <MessageSquare className="w-5 h-5" />
      </motion.a>
    </footer>
  );
}
