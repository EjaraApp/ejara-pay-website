import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCw, Bell, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function StatusIntegrationDocs() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transaction Status Integration</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the best strategy for tracking transaction status updates in your application
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <div className="flex items-center mb-2">
              <RefreshCw className="h-5 w-5 mr-2 text-blue-600" />
              <CardTitle className="text-blue-800">Polling Strategy</CardTitle>
            </div>
            <CardDescription className="text-blue-700">
              Actively check transaction status at regular intervals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Simple to implement
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Full control over timing
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                Higher API usage
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <div className="flex items-center mb-2">
              <Bell className="h-5 w-5 mr-2 text-green-600" />
              <CardTitle className="text-green-800">Webhook Strategy</CardTitle>
            </div>
            <CardDescription className="text-green-700">
              Receive real-time notifications when status changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-green-700">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Real-time updates
              </div>
              <div className="flex items-center text-sm text-green-700">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Efficient resource usage
              </div>
              <div className="flex items-center text-sm text-green-700">
                <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                Requires webhook endpoint
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="polling" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="polling">Polling Implementation</TabsTrigger>
          <TabsTrigger value="webhooks">Webhook Implementation</TabsTrigger>
          <TabsTrigger value="hybrid">Hybrid Approach</TabsTrigger>
        </TabsList>

        <TabsContent value="polling" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RefreshCw className="h-5 w-5 mr-2 text-blue-600" />
                Polling Strategy Implementation
              </CardTitle>
              <CardDescription>
                Use GET /api/v1/transactions/{"{paymentReference}"} with intelligent polling intervals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Recommended Polling Schedule</h3>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <Badge className="mb-2 bg-blue-100 text-blue-800">First 2 minutes</Badge>
                        <p className="text-blue-700">
                          Poll every <strong>5 seconds</strong>
                        </p>
                      </div>
                      <div>
                        <Badge className="mb-2 bg-blue-100 text-blue-800">Next 10 minutes</Badge>
                        <p className="text-blue-700">
                          Poll every <strong>30 seconds</strong>
                        </p>
                      </div>
                      <div>
                        <Badge className="mb-2 bg-blue-100 text-blue-800">After 12 minutes</Badge>
                        <p className="text-blue-700">
                          Poll every <strong>2 minutes</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Node.js Implementation</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      {`class TransactionPoller {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.activePolls = new Map();
  }

  async startPolling(paymentReference, onStatusUpdate, onComplete) {
    const pollConfig = {
      reference: paymentReference,
      startTime: Date.now(),
      onStatusUpdate,
      onComplete,
      attempts: 0,
      maxAttempts: 100 // Stop after ~30 minutes
    };

    this.activePolls.set(paymentReference, pollConfig);
    this.poll(paymentReference);
  }

  async poll(paymentReference) {
    const config = this.activePolls.get(paymentReference);
    if (!config) return;

    try {
      const response = await this.apiClient.getTransactionStatus(paymentReference);
      const { status } = response.data;

      // Notify about status update
      config.onStatusUpdate(response.data);

      // Check if transaction is final
      if (status === 'confirmed' || status === 'rejected') {
        config.onComplete(response.data);
        this.stopPolling(paymentReference);
        return;
      }

      // Calculate next poll interval
      const elapsed = Date.now() - config.startTime;
      const interval = this.getPollingInterval(elapsed);

      // Schedule next poll
      setTimeout(() => this.poll(paymentReference), interval);
      config.attempts++;

      // Stop polling after max attempts
      if (config.attempts >= config.maxAttempts) {
        this.stopPolling(paymentReference);
      }

    } catch (error) {
      console.error('Polling error:', error);
      
      // Retry with exponential backoff on error
      const retryDelay = Math.min(1000 * Math.pow(2, config.attempts), 30000);
      setTimeout(() => this.poll(paymentReference), retryDelay);
    }
  }

  getPollingInterval(elapsedMs) {
    const elapsedMinutes = elapsedMs / (1000 * 60);
    
    if (elapsedMinutes < 2) return 5000;    // 5 seconds
    if (elapsedMinutes < 12) return 30000;  // 30 seconds
    return 120000; // 2 minutes
  }

  stopPolling(paymentReference) {
    this.activePolls.delete(paymentReference);
  }
}

// Usage example
const poller = new TransactionPoller(apiClient);

poller.startPolling(
  'PAY-123456789',
  (data) => {
    console.log('Status update:', data.status);
    // Update UI with current status
  },
  (data) => {
    console.log('Transaction final:', data.status);
    // Handle final status (confirmed/rejected)
  }
);`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Python Implementation</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      {`import asyncio
import time
from typing import Callable, Optional

class TransactionPoller:
    def __init__(self, api_client):
        self.api_client = api_client
        self.active_polls = {}

    async def start_polling(
        self, 
        payment_reference: str, 
        on_status_update: Callable,
        on_complete: Callable,
        max_attempts: int = 100
    ):
        poll_config = {
            'reference': payment_reference,
            'start_time': time.time(),
            'on_status_update': on_status_update,
            'on_complete': on_complete,
            'attempts': 0,
            'max_attempts': max_attempts
        }
        
        self.active_polls[payment_reference] = poll_config
        await self._poll(payment_reference)

    async def _poll(self, payment_reference: str):
        config = self.active_polls.get(payment_reference)
        if not config:
            return

        try:
            response = await self.api_client.get_transaction_status(payment_reference)
            status = response['data']['status']

            # Notify about status update
            await config['on_status_update'](response['data'])

            # Check if transaction is final
            if status in ['confirmed', 'rejected']:
                await config['on_complete'](response['data'])
                self.stop_polling(payment_reference)
                return

            # Calculate next poll interval
            elapsed = time.time() - config['start_time']
            interval = self._get_polling_interval(elapsed)

            # Schedule next poll
            await asyncio.sleep(interval)
            config['attempts'] += 1

            # Continue polling if under max attempts
            if config['attempts'] < config['max_attempts']:
                await self._poll(payment_reference)
            else:
                self.stop_polling(payment_reference)

        except Exception as error:
            print(f"Polling error: {error}")
            
            # Retry with exponential backoff
            retry_delay = min(2 ** config['attempts'], 30)
            await asyncio.sleep(retry_delay)
            await self._poll(payment_reference)

    def _get_polling_interval(self, elapsed_seconds: float) -> float:
        elapsed_minutes = elapsed_seconds / 60
        
        if elapsed_minutes < 2:
            return 5  # 5 seconds
        elif elapsed_minutes < 12:
            return 30  # 30 seconds
        else:
            return 120  # 2 minutes

    def stop_polling(self, payment_reference: str):
        self.active_polls.pop(payment_reference, None)

# Usage example
async def main():
    poller = TransactionPoller(api_client)
    
    await poller.start_polling(
        'PAY-123456789',
        lambda data: print(f"Status update: {data['status']}"),
        lambda data: print(f"Transaction final: {data['status']}")
    )`}
                    </pre>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Polling Best Practices</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Use exponential backoff for failed requests</li>
                    <li>• Implement maximum polling duration (30 minutes recommended)</li>
                    <li>• Store polling state to survive application restarts</li>
                    <li>• Consider rate limiting to avoid API quota issues</li>
                    <li>• Log polling activities for debugging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-green-600" />
                Webhook Strategy with Retry Mechanism
              </CardTitle>
              <CardDescription>
                Handle real-time notifications with built-in retry logic for reliability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ejara Pay Retry Mechanism</h3>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <Badge className="mb-2 bg-green-100 text-green-800">Attempt 1</Badge>
                        <p className="text-green-700">Immediate delivery</p>
                      </div>
                      <div>
                        <Badge className="mb-2 bg-green-100 text-green-800">Attempt 2</Badge>
                        <p className="text-green-700">
                          After <strong>1 minute</strong>
                        </p>
                      </div>
                      <div>
                        <Badge className="mb-2 bg-green-100 text-green-800">Attempt 3</Badge>
                        <p className="text-green-700">
                          After <strong>5 minutes</strong>
                        </p>
                      </div>
                      <div>
                        <Badge className="mb-2 bg-green-100 text-green-800">Final Attempts</Badge>
                        <p className="text-green-700">
                          Up to <strong>24 hours</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Webhook Handler Implementation</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      {`// Express.js webhook handler with retry awareness
const express = require('express');
const crypto = require('crypto');

class WebhookHandler {
  constructor() {
    this.processedEvents = new Set(); // Prevent duplicate processing
    this.eventStore = new Map(); // Store events for debugging
  }

  async handleWebhook(req, res) {
    try {
      // Verify webhook signature
      const signature = req.headers['ejara-signature'];
      const { data } = req.body;
      
      if (!this.verifySignature(data, signature)) {
        return res.status(401).send('Invalid signature');
      }

      // Check for duplicate events (idempotency)
      const eventId = data.internalReference;
      if (this.processedEvents.has(eventId)) {
        console.log('Duplicate event received:', eventId);
        return res.status(200).send('Already processed');
      }

      // Store event for audit trail
      this.eventStore.set(eventId, {
        ...req.body,
        receivedAt: new Date().toISOString(),
        headers: req.headers
      });

      // Process the webhook
      await this.processEvent(req.body);

      // Mark as processed
      this.processedEvents.add(eventId);

      // Always respond with 200 to stop retries
      res.status(200).send('Webhook processed successfully');

    } catch (error) {
      console.error('Webhook processing error:', error);
      
      // Return 500 to trigger Ejara Pay retry mechanism
      res.status(500).send('Processing failed - will retry');
    }
  }

  async processEvent(payload) {
    const { event, data } = payload;
    
    switch (event) {
      case 'payment.confirmed':
        await this.handlePaymentConfirmed(data);
        break;
      case 'payment.rejected':
        await this.handlePaymentRejected(data);
        break;
      case 'transfer.confirmed':
        await this.handleTransferConfirmed(data);
        break;
      case 'transfer.rejected':
        await this.handleTransferRejected(data);
        break;
      default:
        console.log('Unknown event type:', event);
    }
  }

  async handlePaymentConfirmed(data) {
    try {
      // Update database
      await this.updateTransactionStatus(
        data.externalTransactionReference,
        'confirmed',
        data
      );

      // Send confirmation email
      await this.sendConfirmationEmail(data);

      // Update user balance
      await this.updateUserBalance(data);

      console.log('Payment confirmed processed:', data.externalTransactionReference);
    } catch (error) {
      console.error('Error processing payment confirmation:', error);
      throw error; // Re-throw to trigger retry
    }
  }

  async handlePaymentRejected(data) {
    try {
      // Update database
      await this.updateTransactionStatus(
        data.externalTransactionReference,
        'rejected',
        data
      );

      // Send failure notification
      await this.sendFailureNotification(data);

      console.log('Payment rejection processed:', data.externalTransactionReference);
    } catch (error) {
      console.error('Error processing payment rejection:', error);
      throw error;
    }
  }

  verifySignature(data, signature) {
    const expectedSignature = crypto
      .createHmac('sha256', process.env.WEBHOOK_SECRET)
      .update(JSON.stringify(data))
      .digest('hex');
      
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  }
}

// Setup webhook endpoint
const app = express();
const webhookHandler = new WebhookHandler();

app.use(express.json());

app.post('/webhook', (req, res) => {
  webhookHandler.handleWebhook(req, res);
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Fallback Polling for Webhooks</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      {`// Hybrid approach: Webhook + fallback polling
class HybridStatusTracker {
  constructor(apiClient, webhookHandler) {
    this.apiClient = apiClient;
    this.webhookHandler = webhookHandler;
    this.pendingTransactions = new Map();
  }

  async trackTransaction(paymentReference, onStatusUpdate) {
    // Store transaction for tracking
    this.pendingTransactions.set(paymentReference, {
      reference: paymentReference,
      onStatusUpdate,
      createdAt: Date.now(),
      lastWebhookAt: null
    });

    // Set up webhook listener
    this.webhookHandler.onEvent(paymentReference, (data) => {
      this.handleWebhookUpdate(paymentReference, data);
    });

    // Start fallback polling after 5 minutes
    setTimeout(() => {
      this.startFallbackPolling(paymentReference);
    }, 5 * 60 * 1000);
  }

  handleWebhookUpdate(paymentReference, data) {
    const transaction = this.pendingTransactions.get(paymentReference);
    if (!transaction) return;

    transaction.lastWebhookAt = Date.now();
    transaction.onStatusUpdate(data);

    // Remove from tracking if final status
    if (data.paymentStatus === 'confirmed' || data.paymentStatus === 'rejected') {
      this.pendingTransactions.delete(paymentReference);
    }
  }

  async startFallbackPolling(paymentReference) {
    const transaction = this.pendingTransactions.get(paymentReference);
    if (!transaction) return;

    // Check if we received recent webhook
    const timeSinceWebhook = Date.now() - (transaction.lastWebhookAt || 0);
    if (timeSinceWebhook < 2 * 60 * 1000) { // 2 minutes
      // Recent webhook received, skip polling
      return;
    }

    try {
      const response = await this.apiClient.getTransactionStatus(paymentReference);
      const { status } = response.data;

      // Update if status changed
      transaction.onStatusUpdate(response.data);

      // Continue polling if not final
      if (status !== 'confirmed' && status !== 'rejected') {
        setTimeout(() => {
          this.startFallbackPolling(paymentReference);
        }, 60000); // Poll every minute as fallback
      } else {
        this.pendingTransactions.delete(paymentReference);
      }

    } catch (error) {
      console.error('Fallback polling error:', error);
    }
  }
}`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Webhook Best Practices</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Always respond with HTTP 200 for successful processing</li>
                    <li>• Implement idempotency using internalReference</li>
                    <li>• Use database transactions for atomic updates</li>
                    <li>• Log all webhook events for audit and debugging</li>
                    <li>• Implement graceful error handling</li>
                    <li>• Consider webhook ordering (events may arrive out of order)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hybrid" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-purple-600" />
                Hybrid Approach: Best of Both Worlds
              </CardTitle>
              <CardDescription>
                Combine webhooks for real-time updates with polling as a reliable fallback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Recommended Strategy</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm font-semibold text-green-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800">Primary: Webhooks</h4>
                          <p className="text-sm text-green-700">
                            Use webhooks for immediate status updates. Most transactions will be handled this way.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm font-semibold text-blue-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800">Fallback: Polling</h4>
                          <p className="text-sm text-blue-700">
                            Start polling after 5 minutes if no webhook received. Handles edge cases.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Benefits</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• 99%+ real-time updates via webhooks</li>
                        <li>• 100% reliability with polling fallback</li>
                        <li>• Minimal API usage</li>
                        <li>• Handles network issues gracefully</li>
                        <li>• Self-healing system</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Implementation Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <Badge className="bg-green-100 text-green-800">0-5 min</Badge>
                      <span className="text-sm">Webhook-only mode - Real-time updates expected</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <Badge className="bg-blue-100 text-blue-800">5-15 min</Badge>
                      <span className="text-sm">Hybrid mode - Polling every 30 seconds + webhooks</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <Badge className="bg-orange-100 text-orange-800">15+ min</Badge>
                      <span className="text-sm">Polling-only mode - Every 2 minutes until resolved</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Complete Implementation</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      {`class SmartTransactionTracker {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.transactions = new Map();
    this.webhookHandler = new WebhookHandler();
    this.poller = new TransactionPoller(apiClient);
  }

  async trackTransaction(paymentReference, callbacks) {
    const tracker = {
      reference: paymentReference,
      callbacks,
      startTime: Date.now(),
      webhookReceived: false,
      pollingStarted: false,
      status: 'pending'
    };

    this.transactions.set(paymentReference, tracker);

    // Setup webhook listener
    this.webhookHandler.onEvent(paymentReference, (data) => {
      this.handleWebhookUpdate(paymentReference, data);
    });

    // Schedule fallback polling
    setTimeout(() => {
      this.startFallbackIfNeeded(paymentReference);
    }, 5 * 60 * 1000); // 5 minutes

    // Safety timeout - start aggressive polling after 15 minutes
    setTimeout(() => {
      this.startAggressivePolling(paymentReference);
    }, 15 * 60 * 1000); // 15 minutes
  }

  handleWebhookUpdate(paymentReference, data) {
    const tracker = this.transactions.get(paymentReference);
    if (!tracker) return;

    tracker.webhookReceived = true;
    tracker.status = data.paymentStatus;
    
    // Notify callbacks
    tracker.callbacks.onUpdate(data);

    // Clean up if final status
    if (data.paymentStatus === 'confirmed' || data.paymentStatus === 'rejected') {
      tracker.callbacks.onComplete(data);
      this.cleanup(paymentReference);
    }
  }

  async startFallbackIfNeeded(paymentReference) {
    const tracker = this.transactions.get(paymentReference);
    if (!tracker || tracker.webhookReceived || tracker.pollingStarted) {
      return;
    }

    console.log('Starting fallback polling for:', paymentReference);
    tracker.pollingStarted = true;

    // Start gentle polling
    this.poller.startPolling(
      paymentReference,
      (data) => {
        if (!tracker.webhookReceived) {
          tracker.callbacks.onUpdate(data);
        }
      },
      (data) => {
        tracker.callbacks.onComplete(data);
        this.cleanup(paymentReference);
      }
    );
  }

  async startAggressivePolling(paymentReference) {
    const tracker = this.transactions.get(paymentReference);
    if (!tracker || tracker.status !== 'pending') {
      return;
    }

    console.log('Starting aggressive polling for:', paymentReference);
    
    // Stop gentle polling and start aggressive
    this.poller.stopPolling(paymentReference);
    
    // Poll every 30 seconds
    this.aggressivePoll(paymentReference);
  }

  async aggressivePoll(paymentReference) {
    const tracker = this.transactions.get(paymentReference);
    if (!tracker) return;

    try {
      const response = await this.apiClient.getTransactionStatus(paymentReference);
      const { status } = response.data;

      tracker.callbacks.onUpdate(response.data);

      if (status === 'confirmed' || status === 'rejected') {
        tracker.callbacks.onComplete(response.data);
        this.cleanup(paymentReference);
        return;
      }

      // Continue aggressive polling
      setTimeout(() => {
        this.aggressivePoll(paymentReference);
      }, 30000); // 30 seconds

    } catch (error) {
      console.error('Aggressive polling error:', error);
      setTimeout(() => {
        this.aggressivePoll(paymentReference);
      }, 60000); // 1 minute on error
    }
  }

  cleanup(paymentReference) {
    this.transactions.delete(paymentReference);
    this.poller.stopPolling(paymentReference);
    this.webhookHandler.removeListener(paymentReference);
  }
}

// Usage
const tracker = new SmartTransactionTracker(apiClient);

tracker.trackTransaction('PAY-123456789', {
  onUpdate: (data) => {
    console.log('Status update:', data.paymentStatus);
    updateUI(data);
  },
  onComplete: (data) => {
    console.log('Transaction complete:', data.paymentStatus);
    showFinalResult(data);
  }
});`}
                    </pre>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">🎯 Hybrid Strategy Benefits</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                    <div>
                      <h5 className="font-semibold mb-1">Performance</h5>
                      <ul className="space-y-1">
                        <li>• Instant updates via webhooks</li>
                        <li>• Minimal API calls</li>
                        <li>• Efficient resource usage</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Reliability</h5>
                      <ul className="space-y-1">
                        <li>• 100% transaction coverage</li>
                        <li>• Handles webhook failures</li>
                        <li>• Self-healing mechanism</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
