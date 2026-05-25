"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, ArrowUp, Instagram, X } from "lucide-react";
import { useChat } from "@/components/chat-context";

const footerLinks = {
  soluciones: [
    { label: "Presencia Digital", href: "/soluciones/presencia-digital-premium" },
    { label: "Chatbots WhatsApp IA", href: "/soluciones/chatbots-whatsapp-ia" },
    { label: "Automatización", href: "/soluciones/automatizacion-inteligente" },
  ],
  empresa: [
    { label: "Sobre Emerald", href: "/sobre-emerald" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Términos", href: "/terminos-condiciones" },
    { label: "Privacidad", href: "/politica-privacidad" },
  ],
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  const { abierto, toggleAbierto } = useChat();

  return (
    <footer className="relative bg-black border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* BRAND */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img src="/LogoCyber.webp" alt="Emerald" className="w-8 h-8" />
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>EMERALD</span>
            </a>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              AI-First company. Modernización empresarial con inteligencia artificial.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:contactoemerald.ia@gmail.com" className="text-sm text-gray-400 hover:text-[#10b981] break-all">contactoemerald.ia@gmail.com</a>
              <a href="https://wa.me/573239168300" className="text-sm text-gray-400 hover:text-[#10b981]">+57 323 9168300</a>
            </div>
            <a
              href="https://www.instagram.com/ia.emerald/"
              target="_blank"
              className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-[#10b981]"
            >
              <Instagram className="w-4 h-4" /> @ia.emerald
            </a>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-4">
                {key === "soluciones" ? "SOLUCIONES" : key === "empresa" ? "EMPRESA" : "LEGAL"}
              </h3>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Emerald. Todos los derechos.</p>
        </div>
      </div>

      {/* SCROLL TOP */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center text-black"
        style={{
          background: "#00FF66",
          clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* CHAT LAUNCHER — mismo diseño que el botón de WhatsApp anterior */}
      <motion.button
        onClick={toggleAbierto}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 flex items-center justify-center text-black"
        style={{
          background: "#00FF66",
          clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
        whileTap={{ scale: 0.95 }}
        aria-label={abierto ? "Cerrar chat" : "Abrir chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {abierto ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </footer>
  );
}
