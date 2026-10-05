import { Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ApiDocs() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Developer-First API</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Simple, powerful APIs designed for easy integration and scalability
        </p>
      </div>

      <Tabs defaultValue="authentication" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
          <TabsTrigger value="errors">Error Codes</TabsTrigger>
        </TabsList>

        <TabsContent value="authentication" className="mt-8">
          <Card id="authentication">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Account Authentication
              </CardTitle>
              <CardDescription>Authenticate your account to get access tokens for API calls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`POST /api/v1/accounts/authenticate

Headers:
  client-secret: your-client-secret
  client-key: your-client-key
  Accept: application/json

Success Response (200):
{
  "message": "Authentication successful",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}

Error Response (401):
{
  "message": "Invalid API credentials",
  "errorCode": "INVALID_API_CLIENT"
}

Error Response (400):
{
  "message": "Missing required headers",
  "errorCode": "INCOMPLETE_REQUEST_HEADERS"
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="mt-8">
          <Card id="payments">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Initiate Mobile Money Payment
              </CardTitle>
              <CardDescription>Process mobile money collections and disbursements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`POST /api/v1/transactions/initiate-momo-payment

Headers:
  Authorization: Bearer your-access-token
  client-secret: your-client-secret
  client-key: your-client-key
  Content-Type: application/json

Request Body:
{
  "phoneNumber": "+237123456789",
  "transactionType": "payin", // or "payout"
  "amount": 1000,
  "fullName": "John Doe",
  "emailAddress": "john@example.com",
  "currencyCode": "XAF",
  "countryCode": "CM",
  "paymentMode": "MOMO", // or "OM"
  "externalReference": "TXN-12345"
}

Success Response (200):
{
  "message": "Transaction initiated successfully",
  "data": {
    "reference": "PAY-123456789",
    "status": "pending",
    "amount": 1000,
    "currency": "XAF",
    "externalReference": "TXN-12345",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}

Error Response (400):
{
  "message": "Invalid phone number format",
  "errorCode": "CLIENT_ERROR"
}

Error Response (401):
{
  "message": "Access token expired or invalid",
  "errorCode": "ACCOUNT_TOKEN_EXPIRED_OR_INVALID"
}

Error Response (403):
{
  "message": "Insufficient funds in merchant account",
  "errorCode": "INSUFFICIENT_FUNDS"
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification" className="mt-8">
          <Card id="verification">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Transaction Status Verification
              </CardTitle>
              <CardDescription>Check the status of any transaction using the payment reference</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`GET /api/v1/transactions/{paymentReference}

Headers:
  Authorization: Bearer your-access-token
  client-secret: your-client-secret
  client-key: your-client-key
  Accept: application/json

Success Response (200) - Confirmed Transaction:
{
  "message": "Successful",
  "data": {
    "status": "confirmed",
    "fees": "15",
    "feePolicy": "percentage",
    "feeValue": "0.015",
    "amount": "1015",
    "rawAmount": "1000",
    "validatedAt": "2025-06-11T12:57:42.855Z",
    "providerCurrency": "XAF",
    "transactionCurrency": "XAF",
    "providerAmount": "1000",
    "specialOfferAmount": 1000,
    "baseCurrencyPaidAmount": "1015",
    "internalReference": "ACCT-851a76bc-EJARAX3wp2g5qvm9zyz2xj",
    "operatorReference": "b42ac589-a100-4f85-bd3b-0bc435466a5b",
    "providerReference": "99999174964663800087619048319560",
    "externalTransactionReference": "TXN-12345"
  }
}

Success Response (200) - Rejected Transaction:
{
  "message": "Successful",
  "data": {
    "status": "rejected",
    "fees": "3",
    "feePolicy": "percentage",
    "feeValue": "0.015",
    "amount": "203",
    "rawAmount": "200",
    "validatedAt": "2025-06-11T12:57:42.855Z",
    "providerCurrency": "XAF",
    "transactionCurrency": "XAF",
    "providerAmount": "200",
    "specialOfferAmount": 200,
    "baseCurrencyPaidAmount": "203",
    "internalReference": "ACCT-851a76bc-EJARAX3wp2g5qvm9zyz2xj",
    "operatorReference": "b42ac589-a100-4f85-bd3b-0bc435466a5b",
    "providerReference": "99999174964663800087619048319560",
    "externalTransactionReference": "TXN-REJECTED-12345"
  }
}

Error Response (404):
{
  "message": "Transaction not found",
  "errorCode": "RESOURCE_NOT_FOUND"
}

Error Response (401):
{
  "message": "Access token expired or invalid",
  "errorCode": "ACCOUNT_TOKEN_EXPIRED_OR_INVALID"
}

Error Response (403):
{
  "message": "Access denied to this resource",
  "errorCode": "RESOURCE_ACCESS_DENIED"
}`}
                </pre>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Response Fields Explained</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>
                      • <strong>amount</strong> - Total amount including fees
                    </li>
                    <li>
                      • <strong>rawAmount</strong> - Original transaction amount
                    </li>
                    <li>
                      • <strong>fees</strong> - Transaction fee amount
                    </li>
                    <li>
                      • <strong>feePolicy</strong> - How fees are calculated
                    </li>
                    <li>
                      • <strong>feeValue</strong> - Fee rate (e.g., 0.015 = 1.5%)
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Currency & Amount Fields</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>
                      • <strong>providerAmount</strong> - Amount in provider currency
                    </li>
                    <li>
                      • <strong>specialOfferAmount</strong> - Special offer amount
                    </li>
                    <li>
                      • <strong>baseCurrencyPaidAmount</strong> - Final paid amount
                    </li>
                    <li>
                      • <strong>providerCurrency</strong> - Provider's currency
                    </li>
                    <li>
                      • <strong>transactionCurrency</strong> - Transaction currency
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="mt-8">
          <Card id="error-codes">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Error Codes Reference
              </CardTitle>
              <CardDescription>Complete list of error codes and their meanings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-600">Client Errors (4xx)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-50 text-left">
                          <th className="px-4 py-2 border font-mono">Error Code</th>
                          <th className="px-4 py-2 border">Description</th>
                          <th className="px-4 py-2 border">Common Causes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">CLIENT_ERROR</td>
                          <td className="px-4 py-2 border">General client-side error</td>
                          <td className="px-4 py-2 border">Invalid request format, missing required fields</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">INCOMPLETE_REQUEST_HEADERS</td>
                          <td className="px-4 py-2 border">Missing required headers</td>
                          <td className="px-4 py-2 border">
                            client-secret, client-key, or Authorization header missing
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">INVALID_API_CLIENT</td>
                          <td className="px-4 py-2 border">Invalid API credentials</td>
                          <td className="px-4 py-2 border">Wrong client-key or client-secret</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">INVALID_AUTH_TOKEN</td>
                          <td className="px-4 py-2 border">Invalid authentication token</td>
                          <td className="px-4 py-2 border">Malformed or corrupted access token</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">ACCOUNT_TOKEN_EXPIRED_OR_INVALID</td>
                          <td className="px-4 py-2 border">Access token expired or invalid</td>
                          <td className="px-4 py-2 border">Token expired, need to re-authenticate</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">API_CLIENT_EXPIRED</td>
                          <td className="px-4 py-2 border">API client credentials expired</td>
                          <td className="px-4 py-2 border">Client credentials need renewal</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">RESOURCE_ACCESS_DENIED</td>
                          <td className="px-4 py-2 border">Access denied to resource</td>
                          <td className="px-4 py-2 border">Insufficient permissions for the operation</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">RESOURCE_IP_RESTRICTED</td>
                          <td className="px-4 py-2 border">IP address not whitelisted</td>
                          <td className="px-4 py-2 border">Request from unauthorized IP address</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">RESOURCE_INACTIVE</td>
                          <td className="px-4 py-2 border">Resource is inactive</td>
                          <td className="px-4 py-2 border">Account or service temporarily disabled</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">RESOURCE_NOT_FOUND</td>
                          <td className="px-4 py-2 border">Resource not found</td>
                          <td className="px-4 py-2 border">Transaction reference doesn't exist</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">RESOURCE_ALREADY_EXISTS</td>
                          <td className="px-4 py-2 border">Resource already exists</td>
                          <td className="px-4 py-2 border">Duplicate external reference</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">RESOURCE_ALREADY_APPROVED</td>
                          <td className="px-4 py-2 border">Resource already processed</td>
                          <td className="px-4 py-2 border">Transaction already confirmed</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">UNCOMPLETED_RESOURCE_PROCESSING</td>
                          <td className="px-4 py-2 border">Resource processing incomplete</td>
                          <td className="px-4 py-2 border">Previous operation still in progress</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-red-600">INSUFFICIENT_FUNDS</td>
                          <td className="px-4 py-2 border">Insufficient funds</td>
                          <td className="px-4 py-2 border">Not enough balance for the transaction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">Server Errors (5xx)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-50 text-left">
                          <th className="px-4 py-2 border font-mono">Error Code</th>
                          <th className="px-4 py-2 border">Description</th>
                          <th className="px-4 py-2 border">Resolution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-orange-600">SERVER_ERROR</td>
                          <td className="px-4 py-2 border">Internal server error</td>
                          <td className="px-4 py-2 border">Retry the request, contact support if persistent</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-mono text-orange-600">MOMO_PROVIDER_ERROR</td>
                          <td className="px-4 py-2 border">Mobile money provider error</td>
                          <td className="px-4 py-2 border">Provider service unavailable, retry later</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Error Handling Best Practices</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>
                      • Always check the <code>errorCode</code> field for programmatic error handling
                    </li>
                    <li>
                      • Use the <code>message</code> field for user-friendly error display
                    </li>
                    <li>• Implement exponential backoff for server errors (5xx)</li>
                    <li>• Log error codes for debugging and monitoring</li>
                    <li>• Handle token expiration by re-authenticating automatically</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
