import { prisma } from "@/lib/prisma"

export async function getUserProfile(userId?: string) {
  if (!userId) {
    throw new Error("User ID is required")
  }

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

export async function getUserStats(userId?: string) {
  if (!userId) {
    // Return mock data for unauthenticated users
    return {
      totalRevenue: 45231.89,
      subscriptions: 2350,
      sales: 12234,
      activeUsers: 573,
    }
  }

  try {
    // In a real application, you would fetch actual user stats from your database
    // This is just a mock implementation
    return {
      totalRevenue: 45231.89,
      subscriptions: 2350,
      sales: 12234,
      activeUsers: 573,
    }
  } catch (error) {
    console.error("Error fetching user stats:", error)
    throw error
  }
}
