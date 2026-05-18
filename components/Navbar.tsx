"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, MessageSquare, Cog, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Beneficios", href: "/beneficios" },
  { label: "Transformaciones", href: "/transformaciones" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const soluciones = [
  {
    title: "Presencia Digital Premium",
    description: "Moderniza la imagen y presencia online de tu negocio.",
    icon: Globe,
    href: "/soluciones/presencia-digital-premium",
  },
  {
    title: "Chatbots y WhatsApp IA",
    description: "Automatiza conversaciones y ventas 24/7.",
    icon: MessageSquare,
    href: "/soluciones/chatbots-whatsapp-ia",
  },
  {
    title: "Automatización Inteligente",
    description: "Convierte procesos manuales en sistemas que funcionan solos.",
    icon: Cog,
    href: "/soluciones/automatizacion-inteligente",
  },
];

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background layer with smooth opacity transition */}
      <div
        className={`absolute inset-0 backdrop-blur-xl transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(to bottom, rgba(3,7,18,0.85), rgba(3,7,18,0.7))"
            : "transparent",
        }}
      />

      {/* Bottom border gradient with smooth opacity transition */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="/"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/logomark.png"
              alt="Emerald"
              className="w-8 h-8"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold text-white tracking-wide lowercase font-brand"
            >
              emerald
            </motion.span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-emerald-400 transition-colors group"
              >
                Soluciones
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 glass rounded-xl border border-white/10 shadow-2xl shadow-emerald-500/5 overflow-hidden"
                  >
                    <div className="p-2">
                      {soluciones.map((sol, i) => (
                        <motion.a
                          key={i}
                          href={sol.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                            <sol.icon className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                              {sol.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {sol.description}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="text-sm text-gray-300 hover:text-emerald-400 transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="/agenda"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Agenda tu consulta
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-gray-950/95 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Soluciones
                </p>
                {soluciones.map((sol, i) => (
                  <a
                    key={i}
                    href={sol.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <sol.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{sol.title}</p>
                      <p className="text-xs text-gray-500">{sol.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-white/5 pt-4 space-y-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="/agenda"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                >
              Agenda tu consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
