"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";
import { maskRevealUp, EASE_OUT_EXPO } from "@/lib/animation-variants";

// ───────────────── MaskLine ─────────────────
// Reveals a line of text by sliding it up from below a clipped mask.
// The outer wrapper owns the whileInView trigger so the IntersectionObserver
// isn't fooled by the inner element's initial translateY:115% offset.
//
// Note: while the inner element is sliding up we need overflow:hidden to
// clip it. But ONCE the slide finishes, we switch to overflow:visible so
// any text-shadow / drop-shadow on the children can render fully without
// being clipped to a rectangle.
export function MaskLine({
  children,
  delay = 0,
  className = "",
  duration = 0.85,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}) {
  const [revealed, setRevealed] = useState(false);
  // Asymmetric clip-path during slide: -200px insets on top/left/right
  // (so text-shadow glow can spill horizontally and above) but 0 at the
  // bottom edge (so the inner element translated below stays hidden).
  // Once the slide completes, the bottom inset transitions to -200px too
  // so the bottom glow fades in smoothly. CSS transition keeps the open
  // motion soft instead of snapping.
  return (
    <motion.span
      className="block"
      style={{
        clipPath: revealed
          ? "inset(-200px -200px -200px -200px)"
          : "inset(-200px -200px 0 -200px)",
        transition: "clip-path 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.span
        className={`block ml-glow-target ${revealed ? "" : "ml-glow-hidden"} ${className}`}
        variants={maskRevealUp}
        transition={{ duration, ease: EASE_OUT_EXPO, delay }}
        onAnimationComplete={(state) => {
          if (state === "visible") setRevealed(true);
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

// ───────────────── CountUp ─────────────────
// Animates a number from 0 → `to` when scrolled into view.
// `delay` (seconds) defers the start — useful when the surrounding container
// has an entrance delay (e.g. after a typewriter or staggered reveal).
export function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.6,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(
    `${prefix}0${decimals > 0 ? "." + "0".repeat(decimals) : ""}${suffix}`,
  );

  useEffect(() => {
    if (!inView) return;
    let controls: { stop: () => void } | null = null;
    const timer = setTimeout(() => {
      controls = animate(0, to, {
        duration,
        ease: EASE_OUT_EXPO,
        onUpdate: (latest) => {
          setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`);
        },
      });
    }, delay * 1000);
    return () => {
      clearTimeout(timer);
      if (controls) controls.stop();
    };
  }, [inView, to, prefix, suffix, decimals, duration, delay]);

  return <span ref={ref}>{display}</span>;
}

// ───────────────── TiltCard ─────────────────
// 3D mouse-tracked tilt wrapper. Applies subtle rotateX/rotateY following
// the cursor position. Children inherit the perspective.
export function TiltCard({
  children,
  className = "",
  style,
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
    >
      {children}
    </motion.div>
  );
}
