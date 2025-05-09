import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { RegisterForm } from "@/components/auth/register-form"

export const metadata: Metadata = {
  title: "Register | Full-Stack Next.js Application",
  description: "Create a new account",
}

export default async function RegisterPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Create an Account</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
