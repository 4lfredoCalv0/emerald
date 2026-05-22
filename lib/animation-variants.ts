export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

export const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInUpDelayed = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

export const fadeInUpDelayed2 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4 },
  },
};

// ─────────────────────────────────────────────────────────────
// Motion design system — eases, springs, variants, interactions
// Built from web-motion-design (Disney 12 principles) +
// framer-motion-animator skill patterns.
// ─────────────────────────────────────────────────────────────

// Custom cubic-bezier curves
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;       // standard "smooth out" — premium feel
export const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const;
export const EASE_ANTICIPATION = [0.34, 1.56, 0.64, 1] as const; // slight overshoot
export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

// Spring presets (use as `transition: SPRING_*`)
export const SPRING_GENTLE = { type: "spring", stiffness: 180, damping: 22 } as const;
export const SPRING_SOFT = { type: "spring", stiffness: 140, damping: 24 } as const;
export const SPRING_BOUNCY = { type: "spring", stiffness: 260, damping: 14 } as const;
export const SPRING_SNAPPY = { type: "spring", stiffness: 400, damping: 28 } as const;

// Stagger containers — apply to parent, items use `variants={itemVariant}`
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};
export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

// Item variants — spring physics, replaces flat fade-up
export const fadeUpSpring = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 160, damping: 22 },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 160, damping: 22 },
  },
};

// Mask reveal — wrap text in <span overflow-hidden> and animate child up
export const maskRevealUp = {
  hidden: { y: "115%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

// Button squash & stretch (Disney principle) — use as spread on motion.* components
export const buttonInteraction = {
  whileHover: {
    scale: 1.035,
    y: -2,
    transition: { type: "spring", stiffness: 380, damping: 22 },
  },
  whileTap: {
    scale: 0.96,
    y: 0,
    transition: { duration: 0.1 },
  },
} as const;

// Anticipation entry — small reverse before going forward (Disney principle)
export const anticipationIn = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
};
