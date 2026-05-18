"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  accentColor: "emerald" | "blue" | "purple";
  title: string;
  subtitle?: string;
  label?: string;
}

const colorMap = {
  emerald: {
    numberBg: "bg-emerald-500/10",
    numberText: "text-emerald-400",
    iconBg: "from-emerald-400/10 to-emerald-600/10",
    iconBorder: "border-emerald-500/10",
    iconColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/20",
    line: "bg-emerald-500/20",
  },
  blue: {
    numberBg: "bg-blue-500/10",
    numberText: "text-blue-400",
    iconBg: "from-blue-400/10 to-cyan-400/10",
    iconBorder: "border-blue-500/10",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/20",
    line: "bg-blue-500/20",
  },
  purple: {
    numberBg: "bg-purple-500/10",
    numberText: "text-purple-400",
    iconBg: "from-purple-400/10 to-pink-400/10",
    iconBorder: "border-purple-500/10",
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/20",
    line: "bg-purple-500/20",
  },
};

export default memo(function ProcessSteps({
  steps,
  accentColor,
  title,
  subtitle,
  label = "Proceso",
}: ProcessStepsProps) {
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

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px">
            <div className={`w-full h-full ${colors.line} rounded-full`} />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative flex items-start gap-6 sm:gap-8"
              >
                {/* Step indicator */}
                <div className="shrink-0 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${colors.numberBg} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-mono ${colors.numberText}`}>
                      {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
