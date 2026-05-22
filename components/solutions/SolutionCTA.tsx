"use client";

import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUpSpring, buttonInteraction, SPRING_SNAPPY } from "@/lib/animation-variants";

interface SolutionCTAProps {
  accentColor: "emerald" | "blue" | "purple";
  title: ReactNode;
  description: string;
  ctaText?: string;
}

const colorMap = {
  emerald: {
    button: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 shadow-emerald-500/25",
    gradientText: "gradient-text",
  },
  blue: {
    button: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 shadow-blue-500/25",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300",
  },
  purple: {
    button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 shadow-purple-500/25",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300",
  },
};

export default memo(function SolutionCTA({
  accentColor,
  title,
  description,
  ctaText = "Agenda tu consulta estratégica",
}: SolutionCTAProps) {
  const colors = colorMap[accentColor];

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05), transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(16,185,129,0.05), transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05), transparent 50%)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.h2
              variants={fadeUpSpring}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeUpSpring}
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {description}
            </motion.p>
            <motion.div variants={fadeUpSpring} className="inline-block">
              <motion.div {...buttonInteraction}>
                <Link
                  href="/agenda"
                  className={`group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all shadow-lg ${colors.button}`}
                >
                  {ctaText}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={SPRING_SNAPPY}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
