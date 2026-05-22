"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog";
import { fadeUpSpring, scaleInSpring, staggerContainer } from "@/lib/animation-variants";

const ACCENT = "#3b82f6";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Article card ──────────────────────────────────────────────────────────
function ArticleCard({ post }: { post: BlogPostMeta }) {
  return (
    <motion.article variants={scaleInSpring} layout>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div
          className="relative p-6 h-full flex flex-col overflow-hidden"
          style={{
            background: "rgba(8,14,22,0.4)",
            border: "1px solid rgba(255,255,255,0.06)",
            clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
            transition: "border-color 0.3s ease, background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}30`;
            (e.currentTarget as HTMLElement).style.background = "rgba(14,20,28,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLElement).style.background = "rgba(8,14,22,0.4)";
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider rounded-full"
              style={{ background: `${ACCENT}12`, color: ACCENT }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-gray-600">
              <Clock className="w-3 h-3" />
              {post.readingTime} min
            </span>
          </div>

          <h3
            className="text-base font-bold text-white mb-2.5 leading-snug group-hover:text-[#60a5fa] transition-colors duration-300 flex-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <time className="text-[11px] text-gray-600">{formatDate(post.date)}</time>
            <span
              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider"
              style={{ color: ACCENT }}
            >
              Leer
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ─── Featured article ───────────────────────────────────────────────────────
function FeaturedArticle({ post }: { post: BlogPostMeta }) {
  return (
    <motion.article variants={fadeUpSpring}>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div
          className="relative overflow-hidden p-8 sm:p-10"
          style={{
            background: "rgba(8,14,22,0.4)",
            border: "1px solid rgba(255,255,255,0.07)",
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
            transition: "border-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}30`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px]" style={{
            background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}00)`,
          }} />

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-[10px] font-bold px-3 py-1 uppercase tracking-[0.18em]"
              style={{
                background: `${ACCENT}15`,
                border: `1px solid ${ACCENT}30`,
                color: ACCENT,
                clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
              }}
            >
              Destacado
            </span>
            <span
              className="text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider rounded-full"
              style={{ background: "rgba(255,255,255,0.05)", color: "#6b7280" }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <Clock className="w-3 h-3" />
              {post.readingTime} min
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight tracking-tight group-hover:text-[#60a5fa] transition-colors duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {post.title}
          </h2>

          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-7">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <time className="text-sm text-gray-600">{formatDate(post.date)}</time>
            <span
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300"
              style={{ color: ACCENT }}
            >
              Leer artículo
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
interface BlogClientProps {
  allPosts: BlogPostMeta[];
  featured?: BlogPostMeta;
  categories: string[];
}

export default function BlogClient({ allPosts, featured, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  const showFeatured = !activeCategory && featured;
  const visiblePosts = showFeatured
    ? filteredPosts.filter((p) => p.slug !== featured!.slug)
    : filteredPosts;

  return (
    <div className="relative overflow-hidden" style={{ background: "#020810" }}>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('/BLOGIMG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.10,
        zIndex: 0,
      }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(59,130,246,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        zIndex: 0,
      }} />

      {/* ── Header ── */}
      <section className="relative pt-28 pb-12 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeUpSpring}
              className="text-xs font-bold uppercase tracking-[0.28em] mb-4"
              style={{ color: ACCENT }}
            >
              Blog
            </motion.p>
            <motion.h1
              variants={fadeUpSpring}
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}
            >
              Automatización, IA<br />y diseño con propósito.
            </motion.h1>
            <motion.p variants={fadeUpSpring} className="text-gray-400 max-w-xl leading-relaxed">
              Artículos para negocios que quieren entender — y aprovechar — las herramientas que están cambiando cómo se trabaja.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Category filter ── */}
      {categories.length > 0 && (
        <section className="relative pb-6 px-6 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              {/* Todos */}
              <button
                onClick={() => setActiveCategory(null)}
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                style={!activeCategory ? {
                  background: ACCENT,
                  color: "#000",
                  clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                } : {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#6b7280",
                  clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                }}
              >
                Todos
              </button>

              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(isActive ? null : cat)}
                    className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    style={isActive ? {
                      background: ACCENT,
                      color: "#000",
                      clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                    } : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#6b7280",
                      clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = ACCENT;
                        (e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}35`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "#6b7280";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      }
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Featured ── */}
      <AnimatePresence>
        {showFeatured && (
          <section className="relative py-6 px-6 z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <FeaturedArticle post={featured!} />
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* ── Article grid ── */}
      <section className="relative py-6 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {visiblePosts.length > 0 ? (
              <motion.div
                key={activeCategory ?? "all"}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {visiblePosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <BookOpen className="w-7 h-7 mx-auto mb-4 text-gray-700" />
                <p className="text-sm text-gray-600">No hay artículos en esta categoría todavía.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
