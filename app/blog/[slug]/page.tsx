import { Metadata } from "next";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { getAllPosts, getPostBySlug, BlogPostMeta } from "@/lib/blog";
import { generateArticleSchema } from "@/lib/seo/schema";
import { generatePageMetadata } from "@/lib/seo/metadata";
import ArticleClient from "./ArticleClient";

const BASE_URL = "https://emerald-co.vercel.app";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Artículo no encontrado — Emerald" };

  const postUrl = `${BASE_URL}/blog/${params.slug}`;

  return {
    title: `${post.title} — Blog Emerald`,
    description: post.description,
    keywords: post.tags.join(", "),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Emerald"],
      url: postUrl,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
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

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags,
    slug: post.slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleClient
        post={post}
        htmlContent={htmlContent}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
