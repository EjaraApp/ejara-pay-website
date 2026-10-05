import { ArrowLeft, Mail, TestTube, FileCheck, Rocket, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GetStartedPage() {
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

      {/* Get Started Content */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">Integration Guide</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get Started with Ejara Pay</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to integrate Ejara Pay into your application and start accepting mobile money
                payments across Africa.
              </p>
            </div>

            {/* Integration Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="border-2 hover:border-purple-200 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-purple-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Step 1: Get in Touch with Us</CardTitle>
                        <CardDescription>Start your integration journey</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      5 minutes
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Drop us an email and our team will be happy to attend to you. We'll discuss your requirements,
                    answer any questions, and guide you through the integration process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                      <Link href="/contact">
                        Contact Our Team
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="mailto:payment@ejara.africa">
                        <Mail className="mr-2 h-4 w-4" />
                        payment@ejara.africa
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-2 hover:border-purple-200 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <TestTube className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Step 2: Get the Sandbox</CardTitle>
                        <CardDescription>Test our APIs in a safe environment</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      1-2 days
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    After initial introduction, you'll be given sandbox access to play around and test our APIs. This
                    allows you to integrate and test without affecting real transactions.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">What you'll get:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Sandbox API credentials
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Test mobile money accounts
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Complete API documentation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Postman collection for testing
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-2 hover:border-purple-200 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <FileCheck className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Step 3: Get the KYB Done</CardTitle>
                        <CardDescription>Complete your business verification</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      3-5 days
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Get your business identified by providing the required documents for our Know Your Business (KYB)
                    process. This ensures compliance and security for all transactions.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Required documents typically include:</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Business registration certificate
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Tax identification number
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Director identification documents
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Proof of business address
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="border-2 hover:border-purple-200 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Rocket className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Step 4: Move to Production</CardTitle>
                        <CardDescription>Go live with real transactions</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      1 day
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    When you're ready and have completed testing, go live! We'll provide you with production credentials
                    and you can start processing real mobile money transactions.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Production benefits:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Real-time transaction processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        24/7 technical support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Webhook notifications
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Detailed transaction reporting
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-white p-8 rounded-lg border shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Join hundreds of businesses already using Ejara Pay to power their payment infrastructure across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/contact">
                    Start Your Integration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs">View Documentation</Link>
                </Button>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/docs" className="block p-4 border rounded-lg hover:border-purple-200 transition-colors">
                  <h4 className="font-semibold mb-2">API Documentation</h4>
                  <p className="text-sm text-gray-600">Complete API reference and integration guides</p>
                </Link>
                <Link href="/postman" className="block p-4 border rounded-lg hover:border-purple-200 transition-colors">
                  <h4 className="font-semibold mb-2">Postman Collection</h4>
                  <p className="text-sm text-gray-600">Ready-to-use API collection for testing</p>
                </Link>
                <Link href="/contact" className="block p-4 border rounded-lg hover:border-purple-200 transition-colors">
                  <h4 className="font-semibold mb-2">Technical Support</h4>
                  <p className="text-sm text-gray-600">Get help from our integration experts</p>
                </Link>
              </div>
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
