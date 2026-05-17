"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
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
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-400",
    tagBorder: "border-emerald-500/20",
  },
  blue: {
    iconBg: "from-blue-400/10 to-cyan-400/10",
    iconBorder: "border-blue-500/10",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/20",
    tagBg: "bg-blue-500/10",
    tagText: "text-blue-400",
    tagBorder: "border-blue-500/20",
  },
  purple: {
    iconBg: "from-purple-400/10 to-pink-400/10",
    iconBorder: "border-purple-500/10",
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/20",
    tagBg: "bg-purple-500/10",
    tagText: "text-purple-400",
    tagBorder: "border-purple-500/20",
  },
};

export default function FeatureShowcase({
  features,
  accentColor,
  title,
  subtitle,
  label = "Capacidades",
}: FeatureShowcaseProps) {
  const colors = colorMap[accentColor];

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
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
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className={`glass-card p-6 sm:p-7 h-full transition-all duration-500 ${colors.hoverBorder} hover:shadow-lg relative overflow-hidden`}>
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.iconBg} ${colors.iconBorder} border flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className={`w-5 h-5 ${colors.iconColor}`} />
                    </div>
                    {feature.tag && (
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.tagBg} ${colors.tagText} ${colors.tagBorder} border`}>
                        {feature.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
