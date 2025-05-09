import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function CreateOrganizationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center">Create Organization</h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="org-name">Organization Name</Label>
            <Input id="org-name" placeholder="Acme Inc." type="text" autoCapitalize="none" autoCorrect="off" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-email">Organization Email</Label>
            <Input
              id="org-email"
              placeholder="info@acmeinc.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#27688a] hover:bg-[#1d4d66]">
            Create Organization
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
