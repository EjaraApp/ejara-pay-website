"use client"

import { Mail, Phone, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { useActionState } from "react"
import { submitContactForm, type ContactFormState } from "./actions"

const initialState: ContactFormState = {}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img src="/ejara-logo.svg" alt="Ejara" className="h-8 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-gray-600 hover:text-purple-600 transition-colors">
                Services
              </Link>
              <Link href="/docs" className="text-gray-600 hover:text-purple-600 transition-colors">
                API Docs
              </Link>
              <Link href="/postman" className="text-gray-600 hover:text-purple-600 transition-colors">
                Postman
              </Link>
              <Link href="/contact" className="text-purple-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-12">
              Have questions about Ejara Pay? Our team is here to help you with any inquiries about our payment
              services.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-4">For general inquiries and support, please email us at:</p>
                    <a href="mailto:payment@ejara.africa" className="text-purple-600 font-medium hover:text-purple-700">
                      payment@ejara.africa
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-4">For urgent matters, you can reach our support team at:</p>
                    <a href="tel:+237651788664" className="text-purple-600 font-medium hover:text-purple-700">
                      +237 651 788 664
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg border shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {/* Success/Error Messages */}
              {state.message && (
                <Alert
                  className={`mb-6 ${state.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                >
                  {state.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription className={state.success ? "text-green-800" : "text-red-800"}>
                    {state.message}
                  </AlertDescription>
                </Alert>
              )}

              <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        state.errors?.name ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="Your name"
                      disabled={isPending}
                    />
                    {state.errors?.name && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        state.errors?.email ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                      disabled={isPending}
                    />
                    {state.errors?.email && <p className="text-sm text-red-600">{state.errors.email[0]}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      state.errors?.subject ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                    disabled={isPending}
                  />
                  {state.errors?.subject && <p className="text-sm text-red-600">{state.errors.subject[0]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      state.errors?.message ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Please describe your inquiry in detail..."
                    disabled={isPending}
                  ></textarea>
                  {state.errors?.message && <p className="text-sm text-red-600">{state.errors.message[0]}</p>}
                </div>
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {state.success && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Our team will review your message within 2-4 hours</li>
                    <li>• You'll receive a response within 24 hours</li>
                    <li>• For urgent matters, please call us directly</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/ejara-logo.svg" alt="Ejara" className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">
                Powering payments across Africa with secure, reliable mobile money solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/docs#api-reference" className="hover:text-white transition-colors">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/docs#webhooks" className="hover:text-white transition-colors">
                    Webhooks
                  </Link>
                </li>
                <li>
                  <Link href="/postman" className="hover:text-white transition-colors">
                    Postman Collection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="https://ejara.notion.site/5888d507486345a6beaf450fabb2e821?v=be3993971ae0470c874108a0195887aa"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link href="https://www.notion.so/ejara" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ejara Pay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
