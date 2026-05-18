"use client";

import { motion } from "framer-motion";

interface HeroVisualProps {
  accentColor?: "emerald" | "blue" | "purple";
  type?: "grid" | "nodes" | "waves";
}

export default function HeroVisual({ accentColor = "emerald", type = "grid" }: HeroVisualProps) {
  const colorMap = {
    emerald: {
      primary: "16, 185, 129",
      secondary: "52, 211, 153",
      glow: "rgba(16, 185, 129, 0.15)",
    },
    blue: {
      primary: "59, 130, 246",
      secondary: "6, 182, 212",
      glow: "rgba(59, 130, 246, 0.15)",
    },
    purple: {
      primary: "168, 85, 247",
      secondary: "236, 72, 153",
      glow: "rgba(168, 85, 247, 0.15)",
    },
  };

  const colors = colorMap[accentColor];

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  if (type === "nodes") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={prefersReducedMotion ? {} : {
              y: [0, -20 + Math.random() * 40, 0],
              x: [0, -10 + Math.random() * 20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: prefersReducedMotion ? 0 : Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                backgroundColor: `rgba(${colors.primary}, 0.6)`,
              }}
            />
          </motion.div>
        ))}

        {/* Central glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: prefersReducedMotion ? 0 : Infinity }}
        >
          <div
            className="rounded-full blur-3xl"
            style={{
              width: "400px",
              height: "400px",
              background: `radial-gradient(circle, ${colors.glow}, transparent 70%)`,
            }}
          />
        </motion.div>
      </div>
    );
  }

  if (type === "waves") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M 0,${150 + i * 50} Q 200,${100 + i * 50} 400,${150 + i * 50} T 800,${150 + i * 50}`}
              fill="none"
              stroke={`rgba(${colors.primary}, ${0.05 + i * 0.02})`}
              strokeWidth="1"
              animate={prefersReducedMotion ? {} : {
                d: [
                  `M 0,${150 + i * 50} Q 200,${100 + i * 50} 400,${150 + i * 50} T 800,${150 + i * 50}`,
                  `M 0,${150 + i * 50} Q 200,${200 + i * 50} 400,${150 + i * 50} T 800,${150 + i * 50}`,
                  `M 0,${150 + i * 50} Q 200,${100 + i * 50} 400,${150 + i * 50} T 800,${150 + i * 50}`,
                ],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: prefersReducedMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  // Default: grid
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(${colors.primary}, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${colors.primary}, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${colors.glow}, transparent)`,
        }}
      />

      {/* Floating elements */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={prefersReducedMotion ? {} : {
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
            transition={{
              duration: 3 + i,
              repeat: prefersReducedMotion ? 0 : Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${3 + i * 2}px`,
              height: `${3 + i * 2}px`,
              backgroundColor: `rgba(${colors.primary}, 0.4)`,
              boxShadow: `0 0 ${8 + i * 4}px rgba(${colors.primary}, 0.2)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
