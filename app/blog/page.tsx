import type { Metadata } from "next"
import { BlogPostList } from "@/components/blog/blog-post-list"
import { getPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog | Full-Stack Next.js Application",
  description: "Read our latest articles and updates",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">Blog</h1>
      <BlogPostList posts={posts} />
    </div>
  )
}
