import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Bell, Shield } from "lucide-react"

export function WebhookDocs() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Webhook Integration</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real-time notifications for your payment events</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center mb-2">
            <Bell className="h-5 w-5 mr-2 text-purple-600" />
            <CardTitle>Webhook Overview</CardTitle>
          </div>
          <CardDescription>
            Webhooks allow your application to receive real-time notifications about payment events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Ejara Pay uses webhooks to notify your application when events happen in your account. Webhooks are
            particularly useful for events that happen asynchronously, like when a payment is confirmed or when a
            transfer is completed.
          </p>
          <h3 className="text-lg font-semibold mb-2">Setting Up Webhooks</h3>
          <ol className="list-decimal pl-5 mb-4 space-y-2">
            <li>Log in to your Ejara Pay dashboard</li>
            <li>Navigate to the Developer Settings section</li>
            <li>Add a new webhook endpoint URL where you want to receive notifications</li>
            <li>Select the events you want to subscribe to</li>
            <li>Save your webhook configuration</li>
          </ol>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
            <p className="text-sm text-purple-800">
              <strong>Security Tip:</strong> We recommend using HTTPS endpoints for your webhooks to ensure data
              security.
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="events">Webhook Events</TabsTrigger>
          <TabsTrigger value="payload">Example Payloads</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="mt-8">
          <Card id="webhook-events">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Available Webhook Events
              </CardTitle>
              <CardDescription>Events your application can subscribe to</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-2 border">Event Type</th>
                      <th className="px-4 py-2 border">Description</th>
                      <th className="px-4 py-2 border">When It's Triggered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-mono text-sm">payment.confirmed</td>
                      <td className="px-4 py-2 border">Payment has been confirmed successfully</td>
                      <td className="px-4 py-2 border">When a mobile money payment is confirmed by the provider</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-mono text-sm">payment.rejected</td>
                      <td className="px-4 py-2 border">Payment has been rejected</td>
                      <td className="px-4 py-2 border">When a payment is rejected or fails for any reason</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-mono text-sm">transfer.confirmed</td>
                      <td className="px-4 py-2 border">Transfer has been confirmed successfully</td>
                      <td className="px-4 py-2 border">When funds have been successfully sent to the recipient</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-mono text-sm">transfer.rejected</td>
                      <td className="px-4 py-2 border">Transfer has been rejected</td>
                      <td className="px-4 py-2 border">When a transfer/disbursement fails for any reason</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Payment Events</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>
                      • <strong>payment.confirmed</strong> - Customer payment successful
                    </li>
                    <li>
                      • <strong>payment.rejected</strong> - Customer payment failed
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Transfer Events</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>
                      • <strong>transfer.confirmed</strong> - Disbursement successful
                    </li>
                    <li>
                      • <strong>transfer.rejected</strong> - Disbursement failed
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payload" className="mt-8">
          <Card id="webhook-payloads">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Example Webhook Payloads
              </CardTitle>
              <CardDescription>Sample data your server will receive</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Payment Rejected Event (Complete Example)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`{
  "sentAt": "2025-06-11T13:07:12.849Z",
  "event": "payment.rejected",
  "data": {
    "fees": "3",
    "feePolicy": "percentage",
    "feeValue": "0.015",
    "validatedAt": "2025-06-11T13:07:12.836Z",
    "providerCurrency": "XAF",
    "transactionCurrency": "XAF",
    "paidAmount": "203",
    "featureCode": "ACT",
    "paymentStatus": "rejected",
    "internalReference": "ACCT-851a76bc-EJARAXj2813ozambryrkk4",
    "operatorReference": "056837ea-6de8-4c9b-a194-1a70cf1377ad",
    "providerReference": "99999174964720500097687540248939",
    "externalTransactionReference": "1749647196",
    "transactionType": "payin"
  }
}`}
                </pre>
              </div>

              <h3 className="text-lg font-semibold mb-2">Payment Confirmed Event</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`{
  "sentAt": "2025-06-11T13:07:12.849Z",
  "event": "payment.confirmed",
  "data": {
    "fees": "15",
    "feePolicy": "percentage",
    "feeValue": "0.015",
    "validatedAt": "2025-06-11T13:07:12.836Z",
    "providerCurrency": "XAF",
    "transactionCurrency": "XAF",
    "paidAmount": "1015",
    "featureCode": "ACT",
    "paymentStatus": "confirmed",
    "internalReference": "ACCT-6dcbdcc2-EJARAX3wp2g5qvm9zyz2xj",
    "operatorReference": "e7cfdfb5-5aca-45b9-96b8-f33d9c51543d",
    "providerReference": "99999174577771700084517743639168",
    "externalTransactionReference": "TXN-12345",
    "transactionType": "payin"
  }
}`}
                </pre>
              </div>

              <h3 className="text-lg font-semibold mb-2">Transfer Confirmed Event</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`{
  "sentAt": "2025-06-11T13:07:12.849Z",
  "event": "transfer.confirmed",
  "data": {
    "fees": "75",
    "feePolicy": "percentage",
    "feeValue": "0.015",
    "validatedAt": "2025-06-11T13:07:12.836Z",
    "providerCurrency": "XAF",
    "transactionCurrency": "XAF",
    "paidAmount": "5075",
    "featureCode": "ACT",
    "paymentStatus": "confirmed",
    "internalReference": "ACCT-6dcbdcc2-EJARAX3wp2g5qvm9zyz2xj",
    "operatorReference": "e7cfdfb5-5aca-45b9-96b8-f33d9c51543d",
    "providerReference": "99999174577771700084517743639168",
    "externalTransactionReference": "PAYOUT-54321",
    "transactionType": "payout"
  }
}`}
                </pre>
              </div>

              <h3 className="text-lg font-semibold mb-2">Transfer Rejected Event</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`{
  "sentAt": "2025-06-11T13:07:12.849Z",
  "event": "transfer.rejected",
  "data": {
    "fees": "75",
    "feePolicy": "percentage",
    "feeValue": "0.015",
    "validatedAt": "2025-06-11T13:07:12.836Z",
    "providerCurrency": "XAF",
    "transactionCurrency": "XAF",
    "paidAmount": "5075",
    "featureCode": "ACT",
    "paymentStatus": "rejected",
    "internalReference": "ACCT-6dcbdcc2-EJARAX3wp2g5qvm9zyz2xj",
    "operatorReference": "e7cfdfb5-5aca-45b9-96b8-f33d9c51543d",
    "providerReference": "99999174577771700084517743639168",
    "externalTransactionReference": "PAYOUT-54321",
    "transactionType": "payout"
  }
}`}
                </pre>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Core Payload Fields</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>
                      • <strong>sentAt</strong> - Timestamp when webhook was sent
                    </li>
                    <li>
                      • <strong>event</strong> - Type of event that occurred
                    </li>
                    <li>
                      • <strong>paidAmount</strong> - Total amount including fees
                    </li>
                    <li>
                      • <strong>paymentStatus</strong> - Current status of payment
                    </li>
                    <li>
                      • <strong>validatedAt</strong> - When transaction was validated
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Fee & Currency Fields</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>
                      • <strong>fees</strong> - Transaction fee amount
                    </li>
                    <li>
                      • <strong>feePolicy</strong> - Fee calculation method
                    </li>
                    <li>
                      • <strong>feeValue</strong> - Fee rate (e.g., 0.015 = 1.5%)
                    </li>
                    <li>
                      • <strong>providerCurrency</strong> - Provider's currency
                    </li>
                    <li>
                      • <strong>transactionCurrency</strong> - Transaction currency
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Reference Fields</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>
                      • <strong>internalReference</strong> - Ejara's internal reference
                    </li>
                    <li>
                      • <strong>operatorReference</strong> - Mobile operator reference
                    </li>
                    <li>
                      • <strong>providerReference</strong> - Provider's transaction ID
                    </li>
                    <li>
                      • <strong>externalTransactionReference</strong> - Your reference
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Additional Fields</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>
                      • <strong>transactionType</strong> - "payin" or "payout"
                    </li>
                    <li>
                      • <strong>featureCode</strong> - Feature identifier (e.g., "ACT")
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-8">
          <Card id="webhook-security">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-purple-600" />
                Webhook Security
              </CardTitle>
              <CardDescription>Best practices for securing your webhook endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Signature Verification</h3>
              <p className="mb-4">
                Each webhook request includes a signature in the{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">ejara-signature</code> header. You should verify this
                signature to ensure the webhook came from Ejara Pay. The signature is computed using HMAC SHA256 on the
                entire <code className="bg-gray-100 px-1 py-0.5 rounded">data</code> object.
              </p>

              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`// Node.js example for verifying webhook signatures
const crypto = require('crypto');

function verifyWebhookSignature(data, signature, secret) {
  // Create HMAC SHA256 signature from the data object only
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(data))
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Express.js route handler example
app.post('/webhook', express.json(), (req, res) => {
  const signature = req.headers['ejara-signature'];
  const { data } = req.body;
  
  // Verify signature using only the data object
  const isValid = verifyWebhookSignature(
    data,
    signature,
    process.env.WEBHOOK_SECRET
  );
  
  if (!isValid) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process the webhook
  const { event } = req.body;
  
  switch (event) {
    case 'payment.confirmed':
      // Handle successful payment
      console.log('Payment confirmed:', {
        amount: data.paidAmount,
        fees: data.fees,
        reference: data.externalTransactionReference,
        internalRef: data.internalReference,
        validatedAt: data.validatedAt
      });
      break;
      
    case 'payment.rejected':
      // Handle failed payment
      console.log('Payment rejected:', {
        amount: data.paidAmount,
        reference: data.externalTransactionReference,
        status: data.paymentStatus
      });
      break;
      
    case 'transfer.confirmed':
      // Handle successful transfer
      console.log('Transfer confirmed:', {
        amount: data.paidAmount,
        fees: data.fees,
        reference: data.externalTransactionReference,
        type: data.transactionType
      });
      break;
      
    case 'transfer.rejected':
      // Handle failed transfer
      console.log('Transfer rejected:', {
        amount: data.paidAmount,
        reference: data.externalTransactionReference,
        status: data.paymentStatus
      });
      break;
      
    default:
      console.log('Unknown event type:', event);
  }
  
  res.status(200).send('Webhook received');
});`}
                </pre>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Security Note</h4>
                <p className="text-sm text-yellow-700">
                  The HMAC signature is computed from <strong>only the data object</strong>, not the entire webhook
                  payload. Make sure to extract the <code>data</code> object and use it for signature verification.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-2">Python Example</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-green-400 text-sm">
                  {`import hmac
import hashlib
import json
from flask import Flask, request

app = Flask(__name__)

def verify_webhook_signature(data, signature, secret):
    """Verify webhook signature using HMAC SHA256"""
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        json.dumps(data, separators=(',', ':')).encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(signature, expected_signature)

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    signature = request.headers.get('ejara-signature')
    payload = request.get_json()
    
    # Extract data object for signature verification
    data = payload.get('data')
    
    if not verify_webhook_signature(data, signature, WEBHOOK_SECRET):
        return 'Invalid signature', 401
    
    event = payload.get('event')
    
    if event == 'payment.confirmed':
        # Handle successful payment
        print(f"Payment confirmed: {data['paidAmount']} (fees: {data['fees']}) for {data['externalTransactionReference']}")
    elif event == 'payment.rejected':
        # Handle failed payment
        print(f"Payment rejected: {data['externalTransactionReference']}")
    elif event == 'transfer.confirmed':
        # Handle successful transfer
        print(f"Transfer confirmed: {data['paidAmount']} (fees: {data['fees']}) for {data['externalTransactionReference']}")
    elif event == 'transfer.rejected':
        # Handle failed transfer
        print(f"Transfer rejected: {data['externalTransactionReference']}")
    
    return 'OK', 200`}
                </pre>
              </div>

              <h3 className="text-lg font-semibold mb-2">Additional Security Recommendations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Always use HTTPS for your webhook endpoints</li>
                <li>Implement proper error handling to avoid exposing sensitive information</li>
                <li>Set up IP whitelisting to only accept requests from Ejara Pay's IP ranges</li>
                <li>
                  Implement idempotency checks using the <code>internalReference</code> to prevent duplicate processing
                </li>
                <li>Store webhook events in your database before processing them</li>
                <li>Validate the event type before processing to handle unknown events gracefully</li>
                <li>
                  Use the <code>sentAt</code> timestamp to reject old webhook requests
                </li>
              </ul>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Event Handling Best Practices</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Always respond with HTTP 200 status code for successful webhook processing</li>
                  <li>• Process webhooks asynchronously to avoid timeouts</li>
                  <li>• Implement retry logic for failed webhook processing</li>
                  <li>• Log all webhook events for debugging and audit purposes</li>
                  <li>
                    • Use <code>internalReference</code> for idempotency checks
                  </li>
                  <li>
                    • Match <code>externalTransactionReference</code> with your transaction records
                  </li>
                  <li>
                    • Track fees using <code>fees</code>, <code>feePolicy</code>, and <code>feeValue</code> fields
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
