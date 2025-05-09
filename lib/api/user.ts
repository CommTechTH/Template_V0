import { prisma } from "@/lib/db/prisma"

export async function getUserProfile(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        bio: true,
        role: true,
        createdAt: true,
      },
    })

    if (!user) {
      throw new Error("User not found")
    }

    return user
  } catch (error) {
    console.error("Error fetching user profile:", error)
    throw error
  }
}

export async function updateUserProfile(userId: string, data: { name?: string; bio?: string; image?: string }) {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        bio: true,
        role: true,
        createdAt: true,
      },
    })

    return user
  } catch (error) {
    console.error("Error updating user profile:", error)
    throw error
  }
}
