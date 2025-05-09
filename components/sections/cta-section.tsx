import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Start building your next project with our comprehensive Next.js fullstack starter template.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/register">Create an Account</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/docs">Read the Docs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
