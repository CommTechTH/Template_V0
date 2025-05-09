"use client"

import type { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

interface AuthContextProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>
}
