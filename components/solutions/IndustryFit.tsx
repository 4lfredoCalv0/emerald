"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { staggerContainer, staggerContainerFast, fadeUpSpring, scaleInSpring, SPRING_SNAPPY } from "@/lib/animation-variants";
import { MaskLine } from "@/components/motion/MotionPrimitives";

interface IndustryItem {
  name: string;
  icon: LucideIcon;
}

interface IndustryFitProps {
  industries: IndustryItem[];
  accentColor: "emerald" | "blue" | "purple";
  title: string;
  subtitle?: string;
}

const colorMap = {
  emerald: {
    hoverBorder: "hover:border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    labelText: "text-emerald-400",
  },
  blue: {
    hoverBorder: "hover:border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    labelText: "text-blue-400",
  },
  purple: {
    hoverBorder: "hover:border-purple-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    labelText: "text-purple-400",
  },
};

export default memo(function IndustryFit({
  industries,
  accentColor,
  title,
  subtitle,
}: IndustryFitProps) {
  const colors = colorMap[accentColor];

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div variants={fadeUpSpring}>
            <p className={`text-xs font-medium ${colors.labelText} uppercase tracking-widest mb-4`}>
              Industrias
            </p>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <MaskLine delay={0.15}>{title}</MaskLine>
          </h2>
          {subtitle && (
            <motion.p variants={fadeUpSpring} className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainerFast}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                variants={scaleInSpring}
                whileHover={{ y: -4, scale: 1.025, transition: SPRING_SNAPPY }}
                className={`text-center p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] ${colors.hoverBorder} hover:bg-white/[0.06] transition-all duration-300 cursor-default group`}
              >
                <motion.div
                  className={`w-8 h-8 mx-auto mb-2.5 rounded-lg ${colors.iconBg} flex items-center justify-center`}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={SPRING_SNAPPY}
                >
                  <Icon className={`w-4 h-4 ${colors.iconColor}`} />
                </motion.div>
                <p className="text-sm text-gray-300">{industry.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
});
