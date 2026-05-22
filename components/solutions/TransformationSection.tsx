"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUpSpring, slideInLeft, slideInRight, SPRING_SNAPPY } from "@/lib/animation-variants";
import { MaskLine } from "@/components/motion/MotionPrimitives";

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
    labelText: "text-emerald-400",
  },
  blue: {
    afterBg: "bg-blue-500/[0.04]",
    afterBorder: "border-blue-500/10",
    afterIcon: "text-blue-400",
    afterDot: "bg-blue-400/50",
    afterText: "text-gray-300",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300",
    labelText: "text-blue-400",
  },
  purple: {
    afterBg: "bg-purple-500/[0.04]",
    afterBorder: "border-purple-500/10",
    afterIcon: "text-purple-400",
    afterDot: "bg-purple-400/50",
    afterText: "text-gray-300",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300",
    labelText: "text-purple-400",
  },
};

export default memo(function TransformationSection({
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
          {subtitle && (
            <motion.p variants={fadeUpSpring} className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Before — slide-in left + stagger items */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="rounded-xl bg-red-500/[0.04] border border-red-500/10 p-6 sm:p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-5 h-5 text-red-400" />
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                  Antes
                </span>
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
                }}
                className="space-y-3.5"
              >
                {before.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUpSpring}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* After — slide-in right + stagger items */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className={`rounded-xl ${colors.afterBg} ${colors.afterBorder} border p-6 sm:p-8 h-full relative group`}>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className={`w-5 h-5 ${colors.afterIcon}`} />
                <span className={`text-sm font-semibold ${colors.afterIcon} uppercase tracking-wider`}>
                  Después
                </span>
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
                }}
                className="space-y-3.5"
              >
                {after.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUpSpring}
                    className={`flex items-start gap-3 text-sm ${colors.afterText}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.afterDot} mt-1.5 shrink-0`} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Glow */}
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-transparent via-emerald-500/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Arrow connector (desktop) — anticipation overshoot */}
        <div className="hidden md:flex items-center justify-center -mt-32 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.15, transition: SPRING_SNAPPY }}
            className="w-10 h-10 rounded-full bg-gray-950 border border-white/10 flex items-center justify-center cursor-default"
          >
            <ArrowRight className={`w-4 h-4 ${colors.afterIcon}`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
});
