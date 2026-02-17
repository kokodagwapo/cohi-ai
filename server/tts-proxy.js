import express from 'express'
import OpenAI from 'openai'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
})

const app = express()
app.use(express.json({ limit: '1mb' }))

const distPath = join(__dirname, '..', 'dist')
const indexPath = join(distPath, 'index.html')

app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

app.get('/', (req, res) => {
  if (existsSync(indexPath)) {
    res.set('Cache-Control', 'no-cache')
    res.sendFile(indexPath)
  } else {
    res.status(200).send('OK')
  }
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.post('/api/tts', async (req, res) => {
  const { text } = req.body
  if (!text) {
    return res.status(400).json({ error: 'No text provided' })
  }

  console.log('TTS: Processing request, text length:', text.length)

  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no',
  })
  res.flushHeaders()

  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-audio',
      modalities: ['text', 'audio'],
      audio: { voice: 'alloy', format: 'pcm16' },
      messages: [
        { role: 'system', content: 'You are an assistant that performs text-to-speech.' },
        { role: 'user', content: `Repeat the following text verbatim: ${text}` },
      ],
      stream: true,
    })

    let chunkCount = 0
    for await (const chunk of stream) {
      const delta = chunk.choices?.[0]?.delta
      if (!delta) continue
      if (delta?.audio?.data) {
        res.write(`data: ${JSON.stringify({ type: 'audio', data: delta.audio.data })}\n\n`)
        chunkCount++
      }
    }

    res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`)
    console.log(`TTS: Success, sent ${chunkCount} audio chunks`)
    res.end()
  } catch (err) {
    console.error('TTS error:', err.message)
    res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`)
    res.end()
  }
})

if (existsSync(distPath)) {
  app.use(express.static(distPath, { maxAge: '1h' }))
}

app.get('/{*splat}', (req, res) => {
  if (existsSync(indexPath)) {
    res.set('Cache-Control', 'no-cache')
    res.sendFile(indexPath)
  } else {
    res.status(200).send('OK')
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
