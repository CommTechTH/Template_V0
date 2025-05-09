import { DashboardOverview } from "@/components/dashboard/overview"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getUserStats } from "@/lib/user"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const stats = await getUserStats(session?.user?.id)

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <DashboardOverview stats={stats} />
    </div>
  )
}
