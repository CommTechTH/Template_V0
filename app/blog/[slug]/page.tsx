import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"
import { getPostBySlug, getPosts } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Full-Stack Next.js Application",
    }
  }

  return {
    title: `${post.title} | Full-Stack Next.js Application`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <BlogPost post={post} />
    </div>
  )
}
