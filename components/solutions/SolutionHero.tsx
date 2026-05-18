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
    badgeBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/20",
    badgeText: "text-emerald-300",
    button: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 shadow-emerald-500/25",
    secondaryHover: "hover:border-emerald-500/50 hover:text-emerald-300",
    orb1: "bg-emerald-500/5",
    orb2: "bg-emerald-500/5",
  },
  blue: {
    badgeBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/20",
    badgeText: "text-blue-300",
    button: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 shadow-blue-500/25",
    secondaryHover: "hover:border-blue-500/50 hover:text-blue-300",
    orb1: "bg-blue-500/5",
    orb2: "bg-cyan-500/5",
  },
  purple: {
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/20",
    badgeText: "text-purple-300",
    button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 shadow-purple-500/25",
    secondaryHover: "hover:border-purple-500/50 hover:text-purple-300",
    orb1: "bg-purple-500/5",
    orb2: "bg-pink-500/5",
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
  const colors = colorMap[accentColor];

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
          className={`absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full ${colors.orb1} blur-3xl`}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full ${colors.orb2} blur-3xl`}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.badgeBg} ${colors.badgeBorder} border ${colors.badgeText} text-sm mb-8`}
        >
          <Icon className="w-4 h-4" />
          <span>{badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          {title}{" "}
          <span className={accentColor === "emerald" ? "gradient-text animate-gradient-x" : `bg-clip-text text-transparent bg-gradient-to-r ${accentColor === "blue" ? "from-blue-300 via-cyan-300 to-blue-400" : "from-purple-300 via-pink-300 to-purple-400"} animate-gradient-x`}>
            {titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={ctaHref}
            className={`group px-8 py-4 text-base font-medium text-white rounded-full transition-all shadow-lg flex items-center gap-2 ${colors.button}`}
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
              className={`px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full transition-all ${colors.secondaryHover}`}
            >
              {secondaryCtaText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
});
