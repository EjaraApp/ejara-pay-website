"use server"

import { z } from "zod"

// Define the form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Extract form data
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  // Validate the form data
  const validatedFields = contactFormSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, subject, message } = validatedFields.data

  try {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save the message to a database
    // 3. Send notifications to your team

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Here you could integrate with email services:
    // await sendEmail({
    //   to: 'payment@ejara.africa',
    //   from: email,
    //   subject: `Contact Form: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
    }
  }
}
