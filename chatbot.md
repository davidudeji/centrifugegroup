# System Specification: Custom Gemini RAG Chatbot Integration with Multi-Conversation Memory
**Stack:** React (Frontend), Node.js with Express (Backend), Pinecone (Vector DB), and Google Gemini API

Please write the complete, production-ready codebase based on the system specification below. Organize the response into clear file paths so I can easily copy and paste them.

---

## 1. Backend Setup (`/backend`)

### File: `/backend/package.json`
Generate a standard package.json file with dependencies: `express`, `cors`, `dotenv`, `@google/genai`, `@pinecone-database/pinecone`, `@langchain/openai`, `@langchain/community`. Use ES Modules (`"type": "module"`).

### File: `/backend/.env.example`
Provide an environment variable template holding:
- `PORT=5000`
- `GEMINI_API_KEY=`
- `OPENAI_API_KEY=` # Used solely for LangChain vector embeddings computation
- `PINECONE_API_KEY=`
- `PINECONE_INDEX_NAME=`

### File: `/backend/ingest.js`
Create an isolated data ingestion script. It should:
1. Accept a target URL string.
2. Use LangChain's `CheerioWebBaseLoader` to extract the main content.
3. Use `RecursiveCharacterTextSplitter` to chunk the text (size: 1000, overlap: 200).
4. Use `OpenAIEmbeddings` to convert chunks to vector data arrays.
5. Push them seamlessly to your specified Pinecone index.

### File: `/backend/server.js`
Build an Express API application.
1. Configure global CORS handling to allow requests from your React development server.
2. Expose a POST route at `/api/chat` that accepts `{ question, history, conversationId }`.
3. Process the question: generate an embedding vector via OpenAI, query Pinecone for top matches, and join the retrieved text blocks into a text context block.
4. Interact with the Google Gemini API (using the stable `@google/genai` SDK or `https://googleapis.com` stable endpoints). 
5. Construct a chat model invocation that passes the prior conversational history array along with a system instruction block forcing the Gemini model to anchor its final answer strictly onto the retrieved vector context. Return a JSON block containing `{ answer }`.

---

## 2. Frontend Setup (`/frontend`)

Organize the React project into isolated component modules. Ensure all local application state (Theme tracking, Active Conversation indexing, View toggles) is managed robustly in the parent shell wrapper.

### File: `/frontend/src/components/Header.jsx`
Build a modern top navbar containing:
- A clean brand title layout with a fallback logo icon layout.
- A functional Light/Dark mode toggle button that switches styles or injects a class across your parent container.
- A button to trigger a "New Conversation/Chat Thread".

### File: `/frontend/src/components/ChatMessage.jsx`
Build a highly readable chat bubble layout component.
- Accepts `message` objects containing `{ sender: 'user' | 'model', text: string }`.
- User messages must align directly to the right margin with distinctive primary coloring.
- AI/Model responses must align directly to the left margin with a softer neutral backdrop.

### File: `/frontend/src/components/ChatInput.jsx`
Build a sticky bottom input footer containing:
- A clean form wrapper with a styled text box stretching dynamically.
- A dedicated 'Send' button.
- Prevent action or dim states when a prompt submission is currently flying out or if the input is entirely empty.

### File: `/frontend/src/components/Chatbot.jsx`
This acts as the primary layout coordinator. Implement the following:
1. **Interactive Opening/Closing Interface:** A floating circular launcher button fixed at the bottom right corner. Clicking it toggles open the full chat panel container with smooth visibility state changes.
2. **Multi-Conversation Management & Memory:** Keep a local record of historical chat sessions (e.g., `conversations: { [id]: { title: string, history: [] } }`). Allow switching between previous chat threads or generating a clean new one.
3. **Animated Loading Indicator:** Display an animated three-dot pulsing text loading state immediately underneath the bubble sequence while waiting for the Gemini backend pipeline.
4. **Error Handling:** Gracefully catch and display safe inline warnings if a network request fails, or if an API response returns completely empty. Target your local endpoint `http://localhost:5000/api/chat`.

Please output the code blocks sequentially with comprehensive comments. Ensure all asset and parameter connections align across your script layouts.