import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://emerald-co.vercel.app";

export default function sitemap() {
  const posts = getAllPosts();

  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/soluciones`, lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/soluciones/presencia-digital-premium`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/soluciones/chatbots-whatsapp-ia`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/soluciones/automatizacion-inteligente`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/beneficios`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/agenda`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/sobre-emerald`, lastModified: new Date(), priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/terminos-condiciones`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/politica-privacidad`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const blogPosts = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...blogPosts];
}
