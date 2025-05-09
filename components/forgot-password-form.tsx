"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 flex justify-center">
        <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="h-10 w-10" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e0e0e0]">
        <h2 className="text-xl font-medium mb-6 text-center">Forgot Password</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#d9d9d9]"
            />
          </div>
          <Button type="submit" className="w-full bg-[#27688a] hover:bg-[#27688a]/90">
            Submit
          </Button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-[#27688a] hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
