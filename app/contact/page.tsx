import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact | Full-Stack Next.js Application",
  description: "Get in touch with our team",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>
      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>
    </div>
  )
}
