import { ArrowLeft, Download, ExternalLink, Play, FileText, Code } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PostmanPage() {
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
              <Link href="/docs" className="text-gray-600 hover:text-purple-600 transition-colors">
                API Docs
              </Link>
              <Link href="/postman" className="text-purple-600 font-medium">
                Postman
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Postman Collection Content */}
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
              <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-100">
                <img src="/placeholder.svg?height=16&width=16" alt="Postman" className="mr-2 h-4 w-4" />
                Postman Collection
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ejara Pay Postman Collection</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get started quickly with our comprehensive Postman collection. Test all API endpoints with
                pre-configured requests and examples.
              </p>
            </div>

            {/* Quick Start Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Download className="h-5 w-5 mr-2 text-purple-600" />
                    <CardTitle>Download Collection</CardTitle>
                  </div>
                  <CardDescription>Import our complete API collection directly into Postman</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg" asChild>
                      <a href="/ejara-payment-service.postman_collection.json" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Postman Collection
                      </a>
                    </Button>
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">Collection includes:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Account authentication</li>
                        <li>Mobile money payment initiation</li>
                        <li>Transaction status verification</li>
                        <li>Pre-configured environment variables</li>
                        <li>Example requests and responses</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <ExternalLink className="h-5 w-5 mr-2 text-purple-600" />
                    <CardTitle>Run in Postman</CardTitle>
                  </div>
                  <CardDescription>Open the collection directly in your Postman workspace</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                      size="lg"
                      asChild
                    >
                      <a
                        href="https://app.getpostman.com/run-collection/ejara-payment-service"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Run in Postman
                      </a>
                    </Button>
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">Requirements:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Postman Desktop App or Web</li>
                        <li>Valid Ejara Pay API credentials</li>
                        <li>Internet connection for API calls</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Setup Instructions */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-purple-600" />
                  Setup Instructions
                </CardTitle>
                <CardDescription>
                  Follow these steps to get started with the Ejara Pay Postman collection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-purple-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Import the Collection</h3>
                      <p className="text-gray-600 mb-2">
                        Download the collection file and import it into Postman using the "Import" button in your
                        workspace.
                      </p>
                      <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono">
                        File → Import → Upload Files → Select ejara-payment-service.postman_collection.json
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-purple-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Configure Environment Variables</h3>
                      <p className="text-gray-600 mb-2">Set up your environment variables with your API credentials:</p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          {`{
  "baseUrl": "https://testbox-valentines-payment.ejaraapis.xyz",
  "client-key": "your-client-key",
  "client-secret": "your-client-secret",
  "accountToken": "{{auth_token}}"
}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-purple-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Authenticate</h3>
                      <p className="text-gray-600 mb-2">
                        Run the "Used to authenticate account" request first to get your access token. The token will be
                        automatically saved to your environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-purple-600">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Start Testing</h3>
                      <p className="text-gray-600">
                        You're ready to test all API endpoints! Each request includes example data and detailed
                        descriptions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Collection Contents */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-purple-600" />
                  Collection Contents
                </CardTitle>
                <CardDescription>Overview of all requests included in the Postman collection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-600">Authentication</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        POST /api/v1/accounts/authenticate
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-600">Transactions</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        POST /api/v1/transactions/initiate-momo-payment
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        GET /api/v1/transactions/{"{paymentReference}"}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Payment Types Supported:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>
                      • <strong>payin</strong> - Collection from customer mobile money accounts
                    </li>
                    <li>
                      • <strong>payout</strong> - Disbursement to customer mobile money accounts
                    </li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Supported Payment Modes:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>
                      • <strong>MOMO</strong> - MTN Mobile Money
                    </li>
                    <li>
                      • <strong>OM</strong> - Orange Money
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
                <CardDescription>More tools and documentation to help you integrate with Ejara Pay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/docs" className="block p-4 border rounded-lg hover:border-purple-200 transition-colors">
                    <h3 className="font-semibold mb-2">API Documentation</h3>
                    <p className="text-sm text-gray-600">Complete API reference and guides</p>
                  </Link>
                  <Link
                    href="/docs#webhooks"
                    className="block p-4 border rounded-lg hover:border-purple-200 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">Webhook Guide</h3>
                    <p className="text-sm text-gray-600">Learn how to handle webhook events</p>
                  </Link>
                  <Link
                    href="/contact"
                    className="block p-4 border rounded-lg hover:border-purple-200 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">Get Support</h3>
                    <p className="text-sm text-gray-600">Contact our developer support team</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
