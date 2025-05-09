import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Full-Stack Next.js Application",
  description: "Learn about our company and mission",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg">
          Welcome to our Full-Stack Next.js Application. This is a comprehensive template designed to help you quickly
          bootstrap your Next.js applications with all the modern features and best practices.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Our Mission</h2>
        <p>
          Our mission is to provide developers with a solid foundation for building modern, full-stack web applications
          using Next.js. We believe in creating maintainable, scalable, and performant applications that deliver
          exceptional user experiences.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Key Features</h2>
        <ul>
          <li>Modern Next.js App Router architecture</li>
          <li>Full-stack capabilities with server components and API routes</li>
          <li>Database integration with Prisma ORM</li>
          <li>Authentication system with NextAuth.js</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Dark mode support</li>
          <li>Deployment configurations for various platforms</li>
          <li>Testing setup with Jest and React Testing Library</li>
          <li>Comprehensive TypeScript integration</li>
        </ul>
      </div>
    </div>
  )
}
