import { Metadata } from "next";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { getAllPosts, getPostBySlug, BlogPostMeta } from "@/lib/blog";
import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Artículo no encontrado — Emerald" };

  return {
    title: `${post.title} — Blog Emerald`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Emerald"],
    },
  };
}

async function renderMarkdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const htmlContent = await renderMarkdownToHtml(post.content);

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <ArticleClient
      post={post}
      htmlContent={htmlContent}
      relatedPosts={relatedPosts}
    />
  );
}
