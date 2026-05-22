"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { staggerContainer, fadeUpSpring, scaleInSpring, SPRING_SNAPPY } from "@/lib/animation-variants";
import { MaskLine, TiltCard } from "@/components/motion/MotionPrimitives";

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
  emerald: { labelText: "text-emerald-400" },
  blue: { labelText: "text-blue-400" },
  purple: { labelText: "text-purple-400" },
};

const hexColorMap = {
  emerald: "#10b981",
  blue: "#06b6d4",
  purple: "#8b5cf6",
};

export default memo(function FeatureShowcase({
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((feature, i) => {
            const hex = hexColorMap[accentColor];
            return (
              <motion.div key={i} variants={scaleInSpring} className="will-change-transform">
                <TiltCard intensity={5} className="h-full">
                  <div
                    className="group relative p-7 overflow-hidden h-full"
                    style={{
                      background: `linear-gradient(135deg, ${hex}09 0%, rgba(0,0,0,0) 55%)`,
                      border: "1px solid rgba(255,255,255,0.07)",
                      clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                      transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${hex}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${hex}1c`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
                      background: `linear-gradient(90deg, ${hex}, ${hex}00)`,
                    }} />
                    {/* Watermark icon */}
                    <div className="absolute -bottom-3 -right-3 pointer-events-none" style={{ opacity: 0.05 }}>
                      <feature.icon style={{ width: 110, height: 110, color: hex }} />
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center mb-5"
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      transition={SPRING_SNAPPY}
                      style={{
                        background: `${hex}12`,
                        border: `1px solid ${hex}22`,
                        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                      }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: hex }} />
                    </motion.div>

                    {/* Tag pill */}
                    {feature.tag && (
                      <span
                        className="inline-block text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider rounded-full mb-3"
                        style={{ background: `${hex}15`, color: hex }}
                      >
                        {feature.tag}
                      </span>
                    )}

                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
});
