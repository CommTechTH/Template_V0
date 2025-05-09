"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 flex justify-center">
        <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="h-10 w-10" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e0e0e0]">
        <h2 className="text-xl font-medium mb-6 text-center">Register</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border-[#d9d9d9]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-[#d9d9d9]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-[#d9d9d9]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="border-[#d9d9d9]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-[#d9d9d9]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={formData.agreeTerms} onCheckedChange={handleCheckboxChange} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions
            </label>
          </div>
          <Button type="submit" className="w-full bg-[#27688a] hover:bg-[#27688a]/90">
            Register
          </Button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-[#27688a] hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  )
}
