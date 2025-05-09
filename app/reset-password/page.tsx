import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#27688a] hover:bg-[#1d4d66]">
            Reset Password
          </Button>
        </form>
        <div className="text-center text-sm">
          <Link href="/" className="font-medium text-primary hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
