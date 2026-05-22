import { getAllPosts, getFeaturedPost, getAllCategories } from "@/lib/blog";
import BlogClient from "./BlogClient";
import { blogMetadata } from "@/lib/seo/metadata";

export const metadata = blogMetadata;

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPost();
  const categories = getAllCategories();

  return (
    <BlogClient
      allPosts={allPosts}
      featured={featured}
      categories={categories}
    />
  );
}
