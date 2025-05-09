import { Server, Shield, Database, Layers, Zap, Globe } from "lucide-react"

const features = [
  {
    name: "Full-Stack Capabilities",
    description: "Build complete applications with both frontend and backend functionality in a single codebase.",
    icon: Server,
  },
  {
    name: "Authentication",
    description: "Secure user authentication with NextAuth.js, supporting multiple providers and strategies.",
    icon: Shield,
  },
  {
    name: "Database Integration",
    description: "Seamless database integration with Prisma ORM for type-safe database access.",
    icon: Database,
  },
  {
    name: "Modern Architecture",
    description: "Built with the latest Next.js App Router and React Server Components for optimal performance.",
    icon: Layers,
  },
  {
    name: "Performance Optimized",
    description: "Optimized for performance with automatic code splitting, image optimization, and more.",
    icon: Zap,
  },
  {
    name: "Deployment Ready",
    description: "Ready for deployment on various platforms with Docker and platform-specific configurations.",
    icon: Globe,
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Key Features</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to build modern, full-stack web applications with Next.js
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="rounded-lg bg-background p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
