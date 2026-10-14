import 'dotenv/config'
import { createHmac, timingSafeEqual } from 'node:crypto'
import express from 'express'

const app = express()
const port = Number(process.env.PORT || 5000)
const webhookSecret = process.env.TAWK_WEBHOOK_SECRET?.trim()

function verifyTawkSignature(rawBody, signature) {
  if (!webhookSecret || typeof signature !== 'string' || !/^[a-f\d]{40}$/i.test(signature)) {
    return false
  }

  const expected = createHmac('sha1', webhookSecret).update(rawBody).digest()
  const received = Buffer.from(signature, 'hex')

  return received.length === expected.length && timingSafeEqual(received, expected)
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/tawk-webhook', express.raw({ type: 'application/json', limit: '1mb' }), (req, res) => {
  if (!webhookSecret) {
    return res.status(503).json({ error: 'Tawk.to webhook is not configured' })
  }

  const rawBody = Buffer.isBuffer(req.body) ? req.body : Buffer.alloc(0)
  const signature = req.get('X-Tawk-Signature')

  if (!verifyTawkSignature(rawBody, signature)) {
    return res.status(401).json({ error: 'Invalid Tawk.to webhook signature' })
  }

  let payload
  try {
    payload = JSON.parse(rawBody.toString('utf8'))
  } catch {
    return res.status(400).json({ error: 'Webhook payload must be valid JSON' })
  }

  if (!payload || typeof payload !== 'object' || typeof payload.event !== 'string') {
    return res.status(400).json({ error: 'Webhook payload must include an event name' })
  }

  console.info('Received verified Tawk.to webhook', {
    event: payload.event,
    eventId: req.get('X-Hook-Event-Id') || undefined,
  })

  return res.status(200).json({ received: true })
})

app.listen(port, () => {
  console.info(`Tawk.to webhook server listening on port ${port}`)
})
