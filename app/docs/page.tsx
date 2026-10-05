import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ApiDocs } from "@/components/api-docs"
import { WebhookDocs } from "@/components/webhook-docs"
import { StatusIntegrationDocs } from "@/components/status-integration-docs"

export default function DocsPage() {
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
            <nav className="flex items-center space-x-8">
              <Link href="/#services" className="text-gray-600 hover:text-purple-600 transition-colors">
                Services
              </Link>
              <Link href="/docs" className="text-purple-600 font-medium">
                API Docs
              </Link>
              <Link href="/postman" className="text-gray-600 hover:text-purple-600 transition-colors">
                Postman
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Documentation Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ejara Pay Documentation</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive guides and references for integrating with the Ejara Pay API
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-lg border shadow-sm p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <a href="#api-reference" className="block text-purple-600 hover:text-purple-700 transition-colors">
                  API Reference
                </a>
                <div className="ml-4 space-y-1">
                  <a
                    href="#authentication"
                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Authentication
                  </a>
                  <a href="#payments" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Payments
                  </a>
                  <a
                    href="#verification"
                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Verification
                  </a>
                  <a href="#errors" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Error Codes
                  </a>
                </div>
                <a href="#status-integration" className="block text-purple-600 hover:text-purple-700 transition-colors">
                  Status Integration
                </a>
                <div className="ml-4 space-y-1">
                  <a href="#polling" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Polling Strategy
                  </a>
                  <a
                    href="#webhooks-strategy"
                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Webhook Strategy
                  </a>
                  <a href="#hybrid" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    Hybrid Approach
                  </a>
                </div>
                <a href="#webhooks" className="block text-purple-600 hover:text-purple-700 transition-colors">
                  Webhooks
                </a>
                <div className="ml-4 space-y-1">
                  <a
                    href="#webhook-events"
                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Webhook Events
                  </a>
                  <a
                    href="#webhook-payloads"
                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Example Payloads
                  </a>
                  <a
                    href="#webhook-security"
                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Security
                  </a>
                </div>
              </nav>
            </div>

            {/* API Documentation Section */}
            <div id="api-reference" className="mb-20">
              <ApiDocs />
            </div>

            {/* Status Integration Documentation Section */}
            <div id="status-integration" className="mb-20">
              <StatusIntegrationDocs />
            </div>

            {/* Webhooks Documentation Section */}
            <div id="webhooks">
              <WebhookDocs />
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
