"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight, Tag, Calendar } from "lucide-react";
import { BlogPost, BlogPostMeta } from "@/lib/blog";
import TableOfContents from "@/components/seo/table-of-contents";
import { MaskLine } from "@/components/motion/MotionPrimitives";
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

interface ArticleClientProps {
  post: BlogPost;
  htmlContent: string;
  relatedPosts: BlogPostMeta[];
}

export default function ArticleClient({ post, htmlContent, relatedPosts }: ArticleClientProps) {
  return (
    <div className="relative overflow-hidden" style={{ background: "#020810" }}>

      {/* Global grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(59,130,246,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        zIndex: 0,
      }} />

      {/* Hero ambient blob */}
      <div className="absolute pointer-events-none" style={{
        top: "-100px", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "500px",
        background: `radial-gradient(ellipse at center, ${ACCENT}07 0%, transparent 65%)`,
        zIndex: 0,
      }} />

      <TableOfContents htmlContent={htmlContent} />

      {/* ── Article header ── */}
      <section className="relative pt-24 pb-12 px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-all duration-300 group"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = ACCENT; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Volver al blog
            </Link>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span
                className="text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-full"
                style={{ background: `${ACCENT}14`, color: ACCENT, border: `1px solid ${ACCENT}25` }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} min de lectura
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <MaskLine delay={0.1}>{post.title}</MaskLine>
            </h1>

            {/* Lead */}
            <p className="text-lg text-gray-400 leading-relaxed">
              {post.description}
            </p>
          </motion.div>

          {/* Divider */}
          <div className="mt-10 h-px" style={{
            background: `linear-gradient(90deg, ${ACCENT}30, ${ACCENT}00)`,
          }} />
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="relative py-8 px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>

      {/* ── Tags ── */}
      {post.tags.length > 0 && (
        <section className="relative py-8 px-6 z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 pt-8" style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}>
              <Tag className="w-3.5 h-3.5 text-gray-600" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-medium rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#6b7280",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related posts ── */}
      {relatedPosts.length > 0 && (
        <section className="relative py-16 px-6 z-10">
          <div className="max-w-3xl mx-auto">
            <div className="h-px mb-10" style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }} />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUpSpring}
                className="text-xs font-bold uppercase tracking-[0.25em] mb-2"
                style={{ color: ACCENT }}
              >
                Seguir leyendo
              </motion.p>
              <motion.h2
                variants={fadeUpSpring}
                className="text-xl font-bold text-white mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Artículos relacionados
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <motion.div key={related.slug} variants={scaleInSpring}>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="group block h-full"
                    >
                      <div
                        className="relative p-6 h-full overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${ACCENT}05 0%, rgba(0,0,0,0) 55%)`,
                          border: "1px solid rgba(255,255,255,0.07)",
                          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}30`;
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${ACCENT}0e`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                      >
                        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
                          background: `linear-gradient(90deg, ${ACCENT}50, ${ACCENT}00)`,
                        }} />
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 mb-3 inline-block"
                          style={{ background: `${ACCENT}10`, color: ACCENT }}
                        >
                          {related.category}
                        </span>
                        <h3
                          className="text-sm font-bold text-white group-hover:text-[#60a5fa] transition-colors leading-snug mb-3"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {related.title}
                        </h3>
                        <span
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                          style={{ color: ACCENT }}
                        >
                          Leer
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Subtle footer nav ── */}
      <section className="relative py-16 px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="h-px mb-10" style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }} />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              Todos los artículos
            </Link>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
              style={{ color: ACCENT }}
            >
              ¿Quieres implementar esto en tu negocio?
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
