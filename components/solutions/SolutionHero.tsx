"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

interface SolutionHeroProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  accentColor: "emerald" | "blue" | "purple";
  pattern?: "mesh" | "grid" | "flow";
}

const colorMap = {
  emerald: {
    primary: "#10b981",
    bright: "#34d399",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.15)",
    glow: "rgba(16,185,129,0.4)",
    orb1: "rgba(16,185,129,0.04)",
    orb2: "rgba(16,185,129,0.03)",
  },
  blue: {
    primary: "#06b6d4",
    bright: "#22d3ee",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.15)",
    glow: "rgba(6,182,212,0.4)",
    orb1: "rgba(6,182,212,0.04)",
    orb2: "rgba(6,182,212,0.03)",
  },
  purple: {
    primary: "#ec4899",
    bright: "#f472b6",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.15)",
    glow: "rgba(236,72,153,0.4)",
    orb1: "rgba(236,72,153,0.04)",
    orb2: "rgba(236,72,153,0.03)",
  },
};

export default memo(function SolutionHero({
  icon: Icon,
  badge,
  title,
  titleHighlight,
  description,
  ctaText,
  ctaHref = "/agenda",
  secondaryCtaText,
  secondaryCtaHref = "/soluciones",
  accentColor,
  pattern = "mesh",
}: SolutionHeroProps) {
  const c = colorMap[accentColor];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground
        primaryColor={accentColor === "emerald" ? "emerald" : accentColor === "blue" ? "blue" : "purple"}
        secondaryColor={accentColor === "blue" ? "cyan" : accentColor === "purple" ? "pink" : "emerald"}
        intensity="medium"
        pattern={pattern}
      />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: c.orb1 }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: c.orb2 }}
        />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
      }} />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8"
          style={{
            background: c.bg,
            border: `1px solid ${c.border}`,
            clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          }}
        >
          <Icon className="w-4 h-4" style={{ color: c.primary }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: c.bright }}>
            {badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white font-heading"
        >
          {title}{" "}
          <span
            className="bg-clip-text text-transparent animate-gradient-x"
            style={{
              backgroundImage: `linear-gradient(135deg, ${c.bright} 0%, ${accentColor === "blue" ? "#22d3ee" : accentColor === "purple" ? "#f472b6" : "#34d399"} 50%, ${c.primary} 100%)`,
              backgroundSize: "200% 200%",
            }}
          >
            {titleHighlight}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={ctaHref}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-black overflow-hidden transition-all duration-300"
            style={{
              background: c.primary,
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${c.glow}, 0 0 80px ${c.primary}26`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {ctaText}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
          {secondaryCtaText && (
            <Link
              href={secondaryCtaHref}
              className="px-8 py-4 text-base font-medium text-gray-300 transition-all duration-300 hover:text-white"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = c.border;
                (e.currentTarget as HTMLElement).style.color = c.bright;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color = "";
              }}
            >
              {secondaryCtaText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
});
