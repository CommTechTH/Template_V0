import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations/contact"
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const result = contactFormSchema.safeParse(json)

    if (!result.success) {
      return NextResponse.json({ error: result.error.format() }, { status: 400 })
    }

    const { name, email, message } = result.data

    // Send email
    await sendEmail({
      to: process.env.CONTACT_EMAIL || "contact@example.com",
      subject: `Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
