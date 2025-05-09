import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Frontend Developer",
    content:
      "This Next.js starter has saved me countless hours of setup and configuration. The architecture is clean and the documentation is excellent.",
    avatar: "/avatars/alex.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Full-Stack Engineer",
    content:
      "I've used many starter templates, but this one stands out for its comprehensive features and attention to detail. It's the perfect foundation for my projects.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO at TechStart",
    content:
      "We've adopted this template for all our new projects. The full-stack capabilities and built-in authentication have accelerated our development process significantly.",
    avatar: "/avatars/michael.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">What People Are Saying</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Developers love our Next.js fullstack starter template
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
