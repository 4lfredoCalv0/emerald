"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { staggerContainer, fadeUpSpring, scaleInSpring, SPRING_SNAPPY } from "@/lib/animation-variants";
import { MaskLine, TiltCard } from "@/components/motion/MotionPrimitives";

interface NarrativeItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

interface NarrativeSectionProps {
  items: NarrativeItem[];
  accentColor: "emerald" | "blue" | "purple";
  title: string;
  subtitle: string;
  label?: string;
}

const colorMap = {
  emerald: {
    iconBg: "from-emerald-400/10 to-emerald-600/10",
    iconBorder: "border-emerald-500/10",
    iconColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/20",
    labelText: "text-emerald-400",
  },
  blue: {
    iconBg: "from-blue-400/10 to-cyan-400/10",
    iconBorder: "border-blue-500/10",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/20",
    labelText: "text-blue-400",
  },
  purple: {
    iconBg: "from-purple-400/10 to-pink-400/10",
    iconBorder: "border-purple-500/10",
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/20",
    labelText: "text-purple-400",
  },
};

export default memo(function NarrativeSection({
  items,
  accentColor,
  title,
  subtitle,
  label = "El sistema",
}: NarrativeSectionProps) {
  const colors = colorMap[accentColor];

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div variants={fadeUpSpring}>
            <p className={`text-xs font-medium ${colors.labelText} uppercase tracking-widest mb-4`}>
              {label}
            </p>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <MaskLine delay={0.15}>{title}</MaskLine>
          </h2>
          <motion.p variants={fadeUpSpring} className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={scaleInSpring} className="group will-change-transform">
              <TiltCard intensity={4} className="h-full">
                <div className={`glass-card p-6 sm:p-8 h-full transition-all duration-500 ${colors.hoverBorder} relative overflow-hidden`}>
                  {/* Subtle top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="relative">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.iconBg} ${colors.iconBorder} border flex items-center justify-center mb-5`}
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      transition={SPRING_SNAPPY}
                    >
                      <item.icon className={`w-6 h-6 ${colors.iconColor}`} />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-white mb-3">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
