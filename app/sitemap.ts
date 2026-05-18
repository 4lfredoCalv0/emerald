import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://emerald-co.vercel.app";

export default function sitemap() {
  const posts = getAllPosts();

  const staticPages = [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/beneficios`, lastModified: new Date() },
    { url: `${BASE_URL}/agenda`, lastModified: new Date() },
    { url: `${BASE_URL}/contacto`, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    { url: `${BASE_URL}/sobre-emerald`, lastModified: new Date() },
    { url: `${BASE_URL}/terminos-condiciones`, lastModified: new Date() },
    { url: `${BASE_URL}/politica-privacidad`, lastModified: new Date() },
  ];

  const blogPosts = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...blogPosts];
}
