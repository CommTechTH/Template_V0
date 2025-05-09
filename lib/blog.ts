import { cache } from "react"
import { prisma } from "@/lib/prisma"

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage?: string
  author: {
    name: string
    image?: string
  }
  createdAt: Date
  updatedAt: Date
}

export const getPosts = cache(async (): Promise<BlogPost[]> => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
})

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    })

    return post
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error)
    return null
  }
})
