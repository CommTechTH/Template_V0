import type React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-options"

export function withAuth<T>(Component: React.ComponentType<T>) {
  return async function AuthenticatedComponent(props: T) {
    const session = await getServerSession(authOptions)

    if (!session) {
      redirect("/auth/signin")
    }

    return <Component {...props} />
  }
}
