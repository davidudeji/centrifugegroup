import dotenv from 'dotenv'
import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { OpenAIEmbeddings } from '@langchain/openai'
import { Pinecone } from '@pinecone-database/pinecone'

dotenv.config()

const targetUrl = process.argv[2]

if (!targetUrl) {
  console.error('Usage: node ingest.js <https://example.com>')
  process.exit(1)
}

const loader = new CheerioWebBaseLoader(targetUrl)
const docs = await loader.load()

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
})

const chunks = await splitter.splitDocuments(docs)
const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
})
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
})
const index = pinecone.Index(process.env.PINECONE_INDEX_NAME)

const vectorRecords = await Promise.all(
  chunks.map(async (chunk, chunkIndex) => {
    const values = await embeddings.embedQuery(chunk.pageContent)

    return {
      id: `${Date.now()}-${chunkIndex}`,
      values,
      metadata: {
        text: chunk.pageContent,
        source: targetUrl,
      },
    }
  }),
)

await index.upsert(vectorRecords)

console.log(`Indexed ${vectorRecords.length} document chunks for ${targetUrl}`)
