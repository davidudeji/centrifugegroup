import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenAI } from '@google/genai'
import { Pinecone } from '@pinecone-database/pinecone'
import { OpenAIEmbeddings } from '@langchain/openai'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 5000)

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  }),
)
app.use(express.json({ limit: '1mb' }))

const geminiApiKey = process.env.GEMINI_API_KEY
const openAiKey = process.env.OPENAI_API_KEY
const pineconeApiKey = process.env.PINECONE_API_KEY
const pineconeIndexName = process.env.PINECONE_INDEX_NAME || 'centrifuge-docs'

const genAI = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null
const embeddings = openAiKey ? new OpenAIEmbeddings({ openAIApiKey: openAiKey }) : null
const pinecone = pineconeApiKey ? new Pinecone({ apiKey: pineconeApiKey }) : null
const pineconeIndex = pinecone && pineconeIndexName ? pinecone.Index(pineconeIndexName) : null

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.post('/api/chat', async (request, response) => {
  try {
    const { question, history = [], conversationId } = request.body ?? {}

    if (!question || typeof question !== 'string' || !question.trim()) {
      return response.status(400).json({
        error: 'A valid question is required.',
      })
    }

    if (!genAI || !embeddings || !pineconeIndex) {
      return response.status(503).json({
        error: 'The chatbot backend is not fully configured. Set GEMINI_API_KEY, OPENAI_API_KEY, and PINECONE_API_KEY in your .env file.',
      })
    }

    const queryVector = await embeddings.embedQuery(question)
    const pineconeResult = await pineconeIndex.query({
      vector: queryVector,
      topK: 5,
      includeMetadata: true,
      includeValues: false,
    })

    const context = (pineconeResult.matches ?? [])
      .map((match) => match.metadata?.text)
      .filter(Boolean)
      .join('\n\n')

    const conversationalHistory = Array.isArray(history) ? history : []
    const systemInstruction = `You are a helpful enterprise assistant. Use only the retrieved context to answer the user's latest question. If the context does not contain the answer, say you do not have enough information from the knowledge base and ask the user to clarify. Do not invent facts or data. Always ground your answer in the supplied context and keep the tone professional, concise, and clear.`

    const promptMessages = [
      {
        role: 'user',
        parts: [{ text: `Conversation ID: ${conversationId ?? 'anonymous'}\n\nContext:\n${context || 'No relevant matching context is available in the vector store.'}\n\nConversation history:\n${conversationalHistory
          .map((item) => `${item.sender === 'user' ? 'User' : 'Assistant'}: ${item.text}`)
          .join('\n') || 'No prior messages'}\n\nCurrent user question:\n${question}` }],
      },
    ]

    const result = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      config: {
        systemInstruction,
      },
      contents: promptMessages,
    })

    const answer = result.text || 'I could not generate a response from the current knowledge base.'

    return response.json({ answer })
  } catch (error) {
    console.error('Chat request failed:', error)
    return response.status(500).json({
      error: 'Failed to generate a response from the chatbot service.',
    })
  }
})

app.listen(port, () => {
  console.log(`Chatbot backend listening on http://localhost:${port}`)
})
