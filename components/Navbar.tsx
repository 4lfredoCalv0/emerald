"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const soluciones = [
  { title: "Presencia Digital", description: "Webs premium, landing pages, branding", href: "/soluciones/presencia-digital-premium" },
  { title: "Chatbots WhatsApp IA", description: "Atención 24/7 automatizada", href: "/soluciones/chatbots-whatsapp-ia" },
  { title: "Automatización", description: "Workflows, CRM, integraciones", href: "/soluciones/automatizacion-inteligente" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setIsOpen(false);
      }
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
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LOGO */}
          <motion.a
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/LogoCyber.webp" alt="Emerald" className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
            <span className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              EMERALD
            </span>
          </motion.a>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
              >
                SOLUCIONES
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 p-3"
                    style={{
                      background: "rgba(0,0,0,0.95)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    }}
                  >
                    {soluciones.map((sol, i) => (
                      <a
                        key={i}
                        href={sol.href}
                        className="block p-3 hover:bg-white/[0.03] transition-colors"
                      >
                        <p className="text-sm font-bold text-white">{sol.title}</p>
                        <p className="text-xs text-gray-500">{sol.description}</p>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                {link.label.toUpperCase()}
              </a>
            ))}

            <motion.a
              href="/agenda"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-black transition-all"
              style={{
                background: "#00FF66",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
              whileHover={{
                boxShadow: "0 0 30px rgba(0,255,102,0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="w-4 h-4" />
              AGENDAR
            </motion.a>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-white/[0.05]"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-[#10b981] uppercase tracking-[0.2em]">SOLUCIONES</p>
                {soluciones.map((sol, i) => (
                  <a key={i} href={sol.href} onClick={() => setIsOpen(false)} className="block py-2 text-white">
                    {sol.title}
                  </a>
                ))}
              </div>
              <div className="border-t border-white/[0.05] pt-4 space-y-3">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-400">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}