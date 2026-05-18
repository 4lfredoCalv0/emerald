"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog";
import HeroVisual from "@/components/visuals/HeroVisual";
import Breadcrumbs from "@/components/Breadcrumbs";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ post, index }: { post: BlogPostMeta; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full glass-card p-6 sm:p-8 hover:border-emerald-500/20 transition-all duration-500"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {post.readingTime} min
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <time className="text-xs text-gray-500">{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1 text-sm text-emerald-400 group-hover:gap-2 transition-all">
            Leer
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function FeaturedArticle({ post }: { post: BlogPostMeta }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block glass-card overflow-hidden hover:border-emerald-500/20 transition-all duration-500"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/25 rounded-full uppercase tracking-wider">
                Destacado
              </span>
              <span className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                {post.readingTime} min de lectura
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors leading-tight tracking-tight">
              {post.title}
            </h2>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mb-8">
              {post.description}
            </p>

            <div className="flex items-center justify-between">
              <time className="text-sm text-gray-500">{formatDate(post.date)}</time>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:gap-3 transition-all">
                Leer artículo
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

interface BlogClientProps {
  featured?: BlogPostMeta;
  regularPosts: BlogPostMeta[];
  categories: string[];
}

export default function BlogClient({ featured, regularPosts, categories }: BlogClientProps) {
  return (
    <div className="relative">
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
        <HeroVisual accentColor="emerald" type="waves" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8"
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Perspectivas sobre{" "}
            <span className="gradient-text animate-gradient-x">modernización</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Contenido estratégico sobre automatización, IA y transformación digital
            para negocios que quieren evolucionar.
          </motion.p>
        </div>
      </section>

      <section className="relative py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-500/20 border border-emerald-500/30 rounded-full transition-all"
            >
              Todos
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className="px-4 py-2 text-sm font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full hover:text-emerald-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="relative py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <FeaturedArticle post={featured} />
          </div>
        </section>
      )}

      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, i) => (
              <ArticleCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No hay artículos en esta categoría todavía.</p>
            </div>
          )}
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                ¿Listo para modernizar tu negocio?
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
                El contenido es solo el comienzo. La transformación real empieza con una conversación.
              </p>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
              >
                Agenda tu consulta estratégica
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
