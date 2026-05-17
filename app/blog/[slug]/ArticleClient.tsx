"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight, Tag, Calendar } from "lucide-react";
import { BlogPost, BlogPostMeta } from "@/lib/blog";

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
    <div className="relative">
      <section className="relative pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} min de lectura
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              {post.description}
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
      </section>

      <article className="relative py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>

      {post.tags.length > 0 && (
        <section className="relative py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-white/5">
              <Tag className="w-4 h-4 text-gray-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="relative py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
            <h2 className="text-xl font-semibold text-white mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group glass-card p-6 hover:border-emerald-500/20 transition-all duration-500"
                >
                  <span className="text-xs text-emerald-400 mb-2 block">{related.category}</span>
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                    {related.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-500 mt-3 group-hover:text-emerald-400 transition-colors">
                    Leer
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
                ¿Este contenido resuena con tu realidad?
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
                Hablar es gratis. Modernizar tu negocio no debería ser complicado.
                Empecemos con una conversación.
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
