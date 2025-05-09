import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getUserProfile } from "@/lib/user"
import { SettingsForm } from "@/components/dashboard/settings-form"

export default async function SettingsPage() {
  const session = await getServerSession(authOptions)
  const userProfile = await getUserProfile(session?.user?.id)

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Settings</h1>
      <SettingsForm initialData={userProfile} />
    </div>
  )
}
