import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Next.js <span className="text-primary">Fullstack</span> Application
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
          A comprehensive starter template for building modern web applications with Next.js, featuring full-stack
          capabilities, authentication, database integration, and more.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button size="lg" asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/yourusername/nextjs-fullstack" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
