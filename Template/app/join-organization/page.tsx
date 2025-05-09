import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function JoinOrganizationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center">Join Organization</h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="org-code">Organization Code</Label>
            <Input
              id="org-code"
              placeholder="Enter invitation code"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#27688a] hover:bg-[#1d4d66]">
            Join Organization
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
