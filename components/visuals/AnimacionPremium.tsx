"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

// ─── Old web panel ────────────────────────────────────────────────────────
function OldWebPanel() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: "#f0ede8", borderRadius: "12px" }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#e0dcd6", borderBottom: "1px solid #c8c4be" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        <div className="flex-1 mx-3 h-5 rounded flex items-center px-2 text-[9px]" style={{ background: "#d0ccc6", color: "#888" }}>
          www.tienda-vieja.com.co
        </div>
      </div>
      <div className="px-5 py-3 flex items-center justify-between" style={{ background: "#003880", borderBottom: "2px solid #ffd700" }}>
        <span className="text-white font-bold text-xs tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>TIENDA S.A.S</span>
        <div className="flex gap-3">
          {["Inicio","Catálogo","Nosotros","Contacto"].map(t => (
            <span key={t} className="text-[9px] text-yellow-300" style={{ fontFamily: "Arial, sans-serif" }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="px-5 py-4" style={{ background: "#e8e4de" }}>
        <div className="h-16 flex items-center justify-center rounded" style={{ background: "#d0ccc6", border: "2px dashed #b0acA6" }}>
          <span className="text-[10px] text-gray-500" style={{ fontFamily: "Arial, sans-serif" }}>[ BANNER OFERTA ]</span>
        </div>
        <div className="mt-2 h-3 rounded" style={{ background: "#c0bcb6", width: "70%" }} />
        <div className="mt-1 h-2.5 rounded" style={{ background: "#c8c4be", width: "50%" }} />
      </div>
      <div className="flex flex-1 gap-0" style={{ overflow: "hidden" }}>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="rounded overflow-hidden" style={{ background: "#dddad4", border: "1px solid #c8c4be" }}>
                <div className="h-8" style={{ background: "#c8c4be" }} />
                <div className="p-1.5">
                  <div className="h-1.5 rounded mb-1" style={{ background: "#b8b4ae" }} />
                  <div className="h-2 rounded" style={{ background: "#003880", width: "60%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-24 p-3" style={{ background: "#e0dcd6", borderLeft: "1px solid #c8c4be" }}>
          <div className="text-[8px] font-bold text-gray-600 mb-2 uppercase" style={{ fontFamily: "Arial, sans-serif" }}>Categorías</div>
          {["Ropa","Calzado","Acces.","Ofertas"].map(c => (
            <div key={c} className="mb-1.5 text-[8px]" style={{ color: "#555", fontFamily: "Arial, sans-serif" }}>• {c}</div>
          ))}
        </div>
      </div>
      <div className="text-center pb-2">
        <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: "#c0b090" }}>2009 — Sin actualizar</span>
      </div>
    </div>
  );
}

// ─── Product illustrations — computer parts (cyberpunk) ───────────────────
function GpuArt() {
  return (
    <svg viewBox="0 0 100 70" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* PCB / backplate */}
      <rect x="8" y="18" width="84" height="34" rx="3" fill="#15161f" stroke="#00e5ff" strokeWidth="1" />
      <rect x="8" y="18" width="84" height="34" rx="3" fill="none" stroke="#00e5ff" strokeWidth="2" opacity="0.25" />
      {/* shroud */}
      <rect x="14" y="22" width="72" height="26" rx="2" fill="#1d1e2b" />
      {/* fans */}
      {[34, 64].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="35" r="10" fill="#0c0d14" stroke="#2a2c3d" strokeWidth="1" />
          <circle cx={cx} cy="35" r="10" fill="none" stroke="#ff2d78" strokeWidth="1" opacity="0.5" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <path key={a} d={`M${cx} 35 L${cx + 8 * Math.cos((a * Math.PI) / 180)} ${35 + 8 * Math.sin((a * Math.PI) / 180)}`} stroke="#3a3d52" strokeWidth="1.6" strokeLinecap="round" />
          ))}
          <circle cx={cx} cy="35" r="2.5" fill="#00e5ff" />
        </g>
      ))}
      {/* neon vent strip */}
      <rect x="14" y="48" width="72" height="2" fill="#00e5ff" opacity="0.7" />
      {/* PCIe connector teeth */}
      <rect x="24" y="52" width="30" height="5" fill="#caa64a" />
      {[26, 32, 38, 44, 50].map((x) => <rect key={x} x={x} y="52" width="2" height="5" fill="#15161f" />)}
    </svg>
  );
}

function CpuArt() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* pins around */}
      {[...Array(7)].map((_, i) => (
        <g key={i}>
          <rect x={18 + i * 7} y="14" width="3" height="5" fill="#3a3d52" />
          <rect x={18 + i * 7} y="61" width="3" height="5" fill="#3a3d52" />
          <rect x="14" y={18 + i * 7} width="5" height="3" fill="#3a3d52" />
          <rect x="61" y={18 + i * 7} width="5" height="3" fill="#3a3d52" />
        </g>
      ))}
      {/* substrate */}
      <rect x="19" y="19" width="42" height="42" rx="2" fill="#15161f" stroke="#ff2d78" strokeWidth="1" />
      {/* heat spreader */}
      <rect x="25" y="25" width="30" height="30" rx="2" fill="#22232f" stroke="#2a2c3d" strokeWidth="1" />
      <rect x="25" y="25" width="30" height="30" rx="2" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.4" />
      {/* die glow */}
      <rect x="33" y="33" width="14" height="14" rx="1" fill="#00e5ff" opacity="0.18" />
      <text x="40" y="43" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#00e5ff" fontFamily="monospace">Ai</text>
      {/* corner marker */}
      <path d="M25 31 L25 25 L31 25" fill="none" stroke="#ff2d78" strokeWidth="2" />
    </svg>
  );
}

function RamArt() {
  return (
    <svg viewBox="0 0 110 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* PCB */}
      <rect x="10" y="30" width="90" height="18" rx="1.5" fill="#15161f" stroke="#2a2c3d" strokeWidth="1" />
      {/* gold contacts */}
      {[...Array(20)].map((_, i) => <rect key={i} x={13 + i * 4.4} y="44" width="2.6" height="4" fill="#caa64a" />)}
      {/* heatsink */}
      <rect x="10" y="10" width="90" height="24" rx="2" fill="#1d1e2b" stroke="#ff2d78" strokeWidth="1" />
      {/* fins */}
      {[...Array(11)].map((_, i) => <rect key={i} x={15 + i * 8} y="13" width="3" height="18" fill="#2a2c3d" />)}
      {/* RGB diffuser bar */}
      <rect x="12" y="9" width="86" height="3" rx="1.5" fill="#00e5ff" opacity="0.8" />
      <rect x="12" y="9" width="86" height="3" rx="1.5" fill="url(#ramGlow)" />
      <defs>
        <linearGradient id="ramGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="50%" stopColor="#ff2d78" />
          <stop offset="100%" stopColor="#00ff88" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const PRODUCT_ART: Record<string, () => JSX.Element> = {
  "RTX Titan X": GpuArt,
  "Neural CPU i9": CpuArt,
  "HyperRAM 32GB": RamArt,
};

// ─── Premium e-commerce panel — cyberpunk PC parts store ──────────────────
function PremiumWebPanel() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: "#0a0a12", borderRadius: "12px", border: "1px solid #1d1e2b" }}>
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#0e0e1a", borderBottom: "1px solid #1d1e2b" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,45,120,0.8)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(0,229,255,0.8)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(0,255,136,0.8)" }} />
        <div className="flex-1 mx-3 h-5 rounded flex items-center px-3 text-[9px]" style={{ background: "#15161f", border: "1px solid #1d1e2b", color: "#6b7280" }}>
          🔒 nexus-hardware.io
        </div>
      </div>
      {/* Store header */}
      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: "#0e0e1a", borderBottom: "1px solid #1d1e2b" }}>
        <span className="font-bold text-xs tracking-widest" style={{ fontFamily: "monospace", letterSpacing: "0.15em", color: "#00e5ff", textShadow: "0 0 8px rgba(0,229,255,0.6)" }}>NEXUS//HW</span>
        <div className="flex items-center gap-3">
          {["GPU","CPU","RAM"].map(t => (
            <span key={t} className="text-[9px] text-gray-500" style={{ fontFamily: "monospace" }}>{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <div className="relative">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full flex items-center justify-center text-[6px] font-bold text-white" style={{ background: "#ff2d78" }}>3</div>
          </div>
        </div>
      </div>
      {/* Hero banner */}
      <div className="mx-3 mt-2 rounded-xl overflow-hidden flex-shrink-0 relative" style={{ background: "linear-gradient(135deg, #15161f 0%, #1d1e2b 100%)", height: "52px", border: "1px solid rgba(0,229,255,0.2)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 60%, rgba(255,45,120,0.12))" }} />
        <div className="h-full flex items-center justify-between px-4 relative">
          <div>
            <div className="text-[8px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "#ff2d78", fontFamily: "monospace" }}>// drop_2099</div>
            <div className="text-[11px] font-bold text-white leading-none" style={{ fontFamily: "monospace" }}>
              BUILD <span style={{ color: "#00e5ff", textShadow: "0 0 8px rgba(0,229,255,0.6)" }}>NEXT-GEN</span>
            </div>
          </div>
          <div className="px-3 py-1 text-[8px] font-bold rounded" style={{ background: "#00e5ff", color: "#0a0a12", fontFamily: "monospace", boxShadow: "0 0 12px rgba(0,229,255,0.5)" }}>
            ENTRAR
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="flex-1 grid grid-cols-3 gap-2 px-3 py-2 min-h-0">
        {[
          { name: "RTX Titan X", price: "$8.990.000", was: null, tag: "NUEVO", neon: "#00e5ff", rating: "4.9" },
          { name: "Neural CPU i9", price: "$2.450.000", was: "$3.500.000", tag: "−30%", neon: "#ff2d78", sale: true, rating: "4.8" },
          { name: "HyperRAM 32GB", price: "$680.000", was: null, tag: "TOP", neon: "#00ff88", rating: "5.0" },
        ].map(({ name, price, was, tag, neon, sale, rating }) => {
          const Art = PRODUCT_ART[name];
          return (
            <div key={name} className="rounded-lg overflow-hidden flex flex-col" style={{ background: "#0e0e1a", border: `1px solid ${neon}33` }}>
              {/* Image */}
              <div className="relative flex-1 min-h-0 p-2" style={{ background: `radial-gradient(ellipse at 50% 40%, ${neon}14, #0a0a12 75%)` }}>
                <Art />
                <div
                  className="absolute top-1.5 left-1.5 px-1.5 py-0.5 text-[7px] font-bold rounded"
                  style={{ background: sale ? "#ff2d78" : neon, color: "#0a0a12", fontFamily: "monospace" }}
                >
                  {tag}
                </div>
                <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(10,10,18,0.8)", border: "1px solid #2a2c3d" }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
              </div>
              {/* Info */}
              <div className="p-2" style={{ borderTop: `1px solid ${neon}22` }}>
                <div className="text-[8px] text-gray-200 font-semibold leading-tight mb-1 truncate" style={{ fontFamily: "monospace" }}>{name}</div>
                <div className="flex items-center gap-1 mb-1">
                  <svg width="6" height="6" viewBox="0 0 24 24" fill={neon}><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
                  <span className="text-[7px] text-gray-500" style={{ fontFamily: "monospace" }}>{rating}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[9px] font-bold" style={{ color: neon, fontFamily: "monospace", textShadow: `0 0 6px ${neon}55` }}>{price}</span>
                  {was && <span className="text-[6px] text-gray-600 line-through" style={{ fontFamily: "monospace" }}>{was}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Add to cart row */}
      <div className="px-3 pb-2 flex gap-2 flex-shrink-0">
        <div className="flex-1 h-6 rounded-lg flex items-center justify-center text-[8px] font-bold" style={{ background: "#00e5ff", color: "#0a0a12", fontFamily: "monospace", boxShadow: "0 0 14px rgba(0,229,255,0.4)" }}>
          AÑADIR AL CARRITO
        </div>
        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "#15161f", border: "1px solid #ff2d78" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ff2d78" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
      </div>
      <div className="text-center pb-1.5 flex-shrink-0">
        <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: "#3a3d52", fontFamily: "monospace" }}>// diseño premium · alta conversión</span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────
export default function AnimacionPremium() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPremium, setIsPremium] = useState(false);

  // Scroll-linked rotation: fires when element scrolls through viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.4"],
  });

  // Map scroll progress to Y rotation: 0 → 0°, scrolled in → 180°
  const rawRotateY = useTransform(scrollYProgress, [0, 0.65, 1], [0, 180, 180]);
  const rotateY = useSpring(rawRotateY, { stiffness: 80, damping: 28, mass: 0.8 });

  // Track which face is visible for the badge label
  useMotionValueEvent(rotateY, "change", (v) => {
    setIsPremium(v > 90);
  });

  return (
    <div ref={containerRef} className="relative w-full" style={{ perspective: "900px" }}>
      {/* Label badge */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={isPremium ? "premium" : "old"}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4 }}
            className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
            style={{
              background: isPremium ? "rgba(0,255,102,0.15)" : "rgba(160,140,100,0.2)",
              border: isPremium ? "1px solid rgba(0,255,102,0.3)" : "1px solid rgba(160,140,100,0.3)",
              color: isPremium ? "#00FF66" : "#c8b880",
              borderRadius: "4px",
            }}
          >
            {isPremium ? "E-commerce Premium" : "Web Antigua"}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Outer glow — appears on premium face */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "12px",
          boxShadow: useTransform(
            scrollYProgress,
            [0.5, 1],
            ["0 0 0px rgba(0,255,102,0)", "0 0 60px rgba(0,255,102,0.12), 0 0 120px rgba(0,255,102,0.06)"]
          ),
        }}
      />

      {/* 3D flip container */}
      <motion.div
        className="relative w-full"
        style={{ transformStyle: "preserve-3d", aspectRatio: "4/3", rotateY }}
      >
        {/* Front face — old web */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          <OldWebPanel />
        </div>

        {/* Back face — premium e-commerce */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <PremiumWebPanel />
        </div>
      </motion.div>

      {/* Bottom neon line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(0,255,102,0.4) 40%, rgba(0,255,102,0.4) 60%, transparent 100%)",
          opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]),
        }}
      />

      {/* Scroll progress indicator */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="w-12 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              width: useTransform(scrollYProgress, [0, 0.65], ["0%", "100%"]),
              background: "rgba(200,184,128,0.8)",
            }}
          />
        </div>
        <div className="w-12 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              width: useTransform(scrollYProgress, [0.35, 1], ["0%", "100%"]),
              background: "#00FF66",
              boxShadow: "0 0 8px rgba(0,255,102,0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
