import { getAllPosts, getFeaturedPost, getAllCategories } from "@/lib/blog";
import BlogClient from "./BlogClient";
import { blogMetadata } from "@/lib/seo/metadata";

export const metadata = blogMetadata;

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();
  const categories = getAllCategories();
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <BlogClient
      featured={featured}
      regularPosts={regularPosts}
      categories={categories}
    />
  );
}
