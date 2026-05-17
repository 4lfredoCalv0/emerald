"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

interface TransformationSectionProps {
  accentColor: "emerald" | "blue" | "purple";
  title: string;
  subtitle?: string;
  before: string[];
  after: string[];
  label?: string;
}

const colorMap = {
  emerald: {
    afterBg: "bg-emerald-500/[0.04]",
    afterBorder: "border-emerald-500/10",
    afterIcon: "text-emerald-400",
    afterDot: "bg-emerald-400/50",
    afterText: "text-gray-300",
    gradientText: "gradient-text",
  },
  blue: {
    afterBg: "bg-blue-500/[0.04]",
    afterBorder: "border-blue-500/10",
    afterIcon: "text-blue-400",
    afterDot: "bg-blue-400/50",
    afterText: "text-gray-300",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300",
  },
  purple: {
    afterBg: "bg-purple-500/[0.04]",
    afterBorder: "border-purple-500/10",
    afterIcon: "text-purple-400",
    afterDot: "bg-purple-400/50",
    afterText: "text-gray-300",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300",
  },
};

export default function TransformationSection({
  accentColor,
  title,
  subtitle,
  before,
  after,
  label = "Transformación",
}: TransformationSectionProps) {
  const colors = colorMap[accentColor];

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
            {label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl bg-red-500/[0.04] border border-red-500/10 p-6 sm:p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-5 h-5 text-red-400" />
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                  Antes
                </span>
              </div>
              <ul className="space-y-3.5">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-xl ${colors.afterBg} ${colors.afterBorder} border p-6 sm:p-8 h-full relative`}>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className={`w-5 h-5 ${colors.afterIcon}`} />
                <span className={`text-sm font-semibold ${colors.afterIcon} uppercase tracking-wider`}>
                  Después
                </span>
              </div>
              <ul className="space-y-3.5">
                {after.map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm ${colors.afterText}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.afterDot} mt-1.5 shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Glow */}
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-transparent via-emerald-500/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Arrow connector (desktop) */}
        <div className="hidden md:flex items-center justify-center -mt-32 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-10 h-10 rounded-full bg-gray-950 border border-white/10 flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
