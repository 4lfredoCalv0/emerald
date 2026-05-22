"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { TrendingUp, Zap, Users } from "lucide-react";

const ACCENT = "#8b5cf6";

// ─── Animated number ──────────────────────────────────────────────────────
function AnimatedNumber({
  to,
  suffix = "",
  duration = 1.6,
  trigger,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const runningRef = useRef(false);

  useEffect(() => {
    if (!trigger || runningRef.current) return;
    runningRef.current = true;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => { runningRef.current = false; },
    });
    return () => controls.stop();
  }, [trigger, to, duration]);

  return <>{display}{suffix}</>;
}

// ─── KPI Card ─────────────────────────────────────────────────────────────
function KpiCard({
  icon: Icon,
  label,
  to,
  suffix,
  sublabel,
  trigger,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  to: number;
  suffix: string;
  sublabel: string;
  trigger: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 p-4 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${ACCENT}0a 0%, rgba(0,0,0,0) 60%)`,
        border: "1px solid rgba(139,92,246,0.15)",
        borderRadius: "12px",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
        background: `linear-gradient(90deg, ${ACCENT}60, ${ACCENT}00)`,
      }} />
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 flex items-center justify-center rounded-lg"
          style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: ACCENT }} />
        </div>
        <span className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</span>
      </div>
      <p
        className="text-2xl font-bold tabular-nums leading-none"
        style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <AnimatedNumber to={to} suffix={suffix} trigger={trigger} duration={1.4 + delay * 0.3} />
      </p>
      <p className="text-[10px] text-gray-500 mt-1">{sublabel}</p>
    </motion.div>
  );
}

// ─── SVG Line chart ───────────────────────────────────────────────────────
const CHART_POINTS = [8, 22, 18, 35, 28, 45, 38, 58, 52, 72, 65, 88];
const CHART_W = 260;
const CHART_H = 72;

function toPath(points: number[]): string {
  const step = CHART_W / (points.length - 1);
  const max = Math.max(...points);
  const coords = points.map((p, i) => [i * step, CHART_H - (p / max) * CHART_H]);
  return coords.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
}

function toAreaPath(points: number[]): string {
  return toPath(points) + ` L ${CHART_W} ${CHART_H} L 0 ${CHART_H} Z`;
}

function LineChart({ trigger }: { trigger: boolean }) {
  const path = toPath(CHART_POINTS);
  const areaPath = toAreaPath(CHART_POINTS);
  const pathId = "chart-path";
  const gradId = "chart-area-grad";

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider">Leads generados</span>
        <span className="text-[10px] font-bold" style={{ color: ACCENT }}>+340% vs año anterior</span>
      </div>
      <svg width="100%" viewBox={`0 0 ${CHART_W} ${CHART_H}`} preserveAspectRatio="xMidYMid meet" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.25" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0.01" />
          </linearGradient>
        </defs>
        {/* Horizontal grid lines */}
        {[0.25, 0.5, 0.75, 1].map(f => (
          <line
            key={f}
            x1={0} y1={CHART_H * (1 - f)}
            x2={CHART_W} y2={CHART_H * (1 - f)}
            stroke="rgba(139,92,246,0.1)"
            strokeWidth={0.5}
          />
        ))}
        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill={`url(#${gradId})`}
          initial={{ opacity: 0 }}
          animate={trigger ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        {/* Line stroke — animated pathLength */}
        <motion.path
          id={pathId}
          d={path}
          fill="none"
          stroke={ACCENT}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={trigger ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        {/* Glow duplicate */}
        <motion.path
          d={path}
          fill="none"
          stroke={ACCENT}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "blur(4px)", opacity: 0.3 }}
          initial={{ pathLength: 0 }}
          animate={trigger ? { pathLength: 1 } : {}}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        {/* End dot */}
        {trigger && (
          <motion.circle
            cx={CHART_W}
            cy={CHART_H - (CHART_POINTS[CHART_POINTS.length - 1] / Math.max(...CHART_POINTS)) * CHART_H}
            r={4}
            fill={ACCENT}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.8 }}
          >
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </motion.circle>
        )}
      </svg>
    </div>
  );
}

// ─── Progress bar ──────────────────────────────────────────────────────────
function ProgressBar({
  label,
  pct,
  trigger,
  delay,
}: {
  label: string;
  pct: number;
  trigger: boolean;
  delay: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-[11px] text-gray-400">{label}</span>
        <motion.span
          className="text-[11px] font-bold"
          style={{ color: ACCENT, fontFamily: "'Space Grotesk', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={trigger ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3 }}
        >
          {pct}%
        </motion.span>
      </div>
      <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(139,92,246,0.12)" }}>
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: `linear-gradient(90deg, ${ACCENT}80, ${ACCENT})` }}
          initial={{ width: "0%" }}
          animate={trigger ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Shine */}
        <motion.div
          className="absolute inset-y-0 w-12 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
          initial={{ left: "-48px" }}
          animate={trigger ? { left: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────
export default function AnimacionDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative w-full" style={{ maxWidth: "420px", margin: "0 auto" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,92,246,0.1) 0%, transparent 70%)",
        borderRadius: "24px",
      }} />

      {/* Dashboard card */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "rgba(10,6,18,0.95)",
          border: "1px solid rgba(139,92,246,0.18)",
          borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(139,92,246,0.08)",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6) 30%, rgba(139,92,246,0.6) 70%, transparent)",
        }} />

        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{ background: "rgba(139,92,246,0.05)", borderBottom: "1px solid rgba(139,92,246,0.1)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 flex items-center justify-center rounded-lg"
              style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}
            >
              <TrendingUp className="w-3.5 h-3.5" style={{ color: ACCENT }} />
            </div>
            <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Panel de Operaciones</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }}>
              <motion.div
                className="w-full h-full rounded-full"
                style={{ background: "#22c55e" }}
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-[10px] text-gray-500">En vivo</span>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-5">
          {/* KPI cards row */}
          <div className="flex gap-3">
            <KpiCard icon={Users}      label="Leads / mes" to={284}  suffix=""    sublabel="+68% este mes" trigger={inView} delay={0} />
            <KpiCard icon={Zap}        label="Automatizados" to={97} suffix="%"   sublabel="Tasa de cierre" trigger={inView} delay={0.1} />
            <KpiCard icon={TrendingUp} label="ROI"           to={340} suffix="%"  sublabel="vs año anterior" trigger={inView} delay={0.2} />
          </div>

          {/* Line chart */}
          <motion.div
            className="p-4 rounded-xl"
            style={{ background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.1)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <LineChart trigger={inView} />
          </motion.div>

          {/* Progress bars */}
          <motion.div
            className="p-4 rounded-xl flex flex-col gap-3"
            style={{ background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.1)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Canales activos</p>
            <ProgressBar label="WhatsApp IA"       pct={94} trigger={inView} delay={0.6} />
            <ProgressBar label="Automatización"    pct={87} trigger={inView} delay={0.75} />
            <ProgressBar label="SEO / Web"         pct={78} trigger={inView} delay={0.9} />
          </motion.div>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="mt-3 flex justify-center gap-8">
        {[
          { label: "Uptime", value: "99.9%" },
          { label: "Workflows", value: "12h/día" },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="text-base font-bold" style={{ color: ACCENT, fontFamily: "'Space Grotesk', sans-serif" }}>{value}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
