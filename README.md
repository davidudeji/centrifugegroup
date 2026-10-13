# Centrifuge Group Website

A React + TypeScript web platform for Centrifuge Group, an enterprise software and digital solutions company. It combines a corporate marketing site, a hardware shop with an admin console, and an AI chatbot backed by a retrieval-augmented generation (RAG) service.

> **Status:** active development. The marketing site, shop flow and admin UI run entirely in the browser on mock data. The chatbot is the only part with a real backend. See [Current Limitations](#current-limitations).

## Features

### Marketing site
- Home, About, Solutions, Services, Industries, Clients, Case Studies, Insights, Careers and Contact pages
- Product pages for Optimax (ERP), Logistics, Healthcare, Enterprise and Data Analytics
- Projects showcase with typed project data and per-project detail pages
- Dynamic routes for services, industries, case studies, insights, jobs and projects
- Legacy URL redirects for old site paths
- Per-page title and meta description via a small `SEO` component

### Shop
- Product listing and detail pages
- Persisted cart with a slide-out drawer
- Four-step checkout (customer, shipping, payment, confirmation) with 7.5% tax and free-shipping threshold logic
- Customer account area

### Admin console (`/admin`)
- Dashboard and analytics with Recharts
- Orders, products, categories, inventory, customers and discounts
- Showcase project and media management
- Users and roles, system settings
- Collapsible, responsive sidebar and toast notifications

### AI chatbot
- Floating chat widget with multiple conversation threads, saved in `localStorage`
- Express API that embeds the question, retrieves relevant chunks from Pinecone and asks Gemini to answer using only that context
- Ingestion script that loads a web page, chunks it and indexes it

## Tech Stack

| Area | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite, React Router v7 |
| Styling | Tailwind CSS v4, `clsx`, `tailwind-merge`, Lucide icons |
| State | Zustand (with `persist`), TanStack Query provider |
| Charts | Recharts |
| Chatbot backend | Node.js, Express, CORS, dotenv |
| AI / RAG | OpenAI embeddings (via LangChain), Pinecone vector database, Google Gemini (`gemini-2.0-flash`) |
| Tooling | ESLint, TypeScript project references |

## Architecture

**Chat request flow**

1. The widget sends `question`, `history` and `conversationId` to `POST /api/chat`.
2. The server validates the input (400 if empty) and checks that API keys are configured (503 if not).
3. The question is embedded and the top 5 matching chunks are fetched from Pinecone.
4. Gemini receives the retrieved context, the conversation history and the question, with a system instruction to answer only from that context.
5. The server returns `{ "answer": "..." }`.

**Data layer (shop and admin):** `productService`, `orderService` and `projectService` expose async methods and currently read and write `localStorage`, seeded from `src/data/mockData.ts`. `paymentService` defines a `PaymentGateway` interface with a simulated gateway, so a real provider such as Paystack can be plugged in without changing the checkout page.

## Project Structure

```
.
├── backend/                 # Chatbot API
│   ├── server.js            # Express server, /api/health and /api/chat
│   ├── ingest.js            # URL -> chunks -> embeddings -> Pinecone
│   └── .env.example
├── src/
│   ├── components/
│   │   ├── chatbot/         # Chat widget
│   │   ├── layout/          # Public and admin layouts, header, footer, cart drawer
│   │   └── ui/              # Button, Input, Modal, Badge, SEO, etc.
│   ├── features/marketing/  # Homepage sections
│   ├── pages/
│   │   ├── public/          # Marketing pages
│   │   ├── shop/            # Shop, cart, checkout, account
│   │   └── admin/           # Admin console pages
│   ├── services/            # Data and payment service layer
│   ├── stores/              # Zustand stores (auth, cart, ui)
│   ├── types/               # Shared TypeScript domain types
│   ├── data/mockData.ts     # Seed data
│   └── App.tsx              # Route table
├── centrifuge_spec.md       # Product and content specification
├── UI_UX_Specification_Document.md
├── project_spec.md
└── design.md
```

## Getting Started

### Prerequisites
- Node.js 20.19+ (or 22+) and npm
- For the chatbot only: OpenAI, Google Gemini and Pinecone API keys, and a Pinecone index whose dimension matches your OpenAI embedding model

### 1. Run the frontend

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### 2. Run the chatbot backend (optional)

```bash
cd backend
npm install
cp .env.example .env     # then fill in your keys
npm run dev
```

The API runs at `http://localhost:5000`. Check it with `curl http://localhost:5000/api/health`.

### 3. Index content for the chatbot

```bash
cd backend
node ingest.js https://example.com/page-to-index
```

Run it once per page you want the chatbot to know about.

### Environment variables (`backend/.env`)

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Server port (default `5000`) |
| `GEMINI_API_KEY` | Yes | Google Gemini API key |
| `OPENAI_API_KEY` | Yes | Used to create embeddings |
| `PINECONE_API_KEY` | Yes | Pinecone API key |
| `PINECONE_INDEX_NAME` | Yes for ingestion | Index name (server falls back to `centrifuge-docs`) |

Never commit `.env`. Without these keys the chat endpoint returns a `503` with a configuration message and the rest of the site keeps working.

## Scripts

| Command | Where | What it does |
|---|---|---|
| `npm run dev` | root | Start the Vite dev server |
| `npm run build` | root | Type-check and build for production |
| `npm run preview` | root | Preview the production build |
| `npm run lint` | root | Run ESLint |
| `npm run dev` | `backend/` | Start the API with file watching |
| `npm start` | `backend/` | Start the API |

## Demo Mode

Authentication and commerce are simulated so the whole UI can be explored without a backend:

- The admin console opens at `/admin` and the app starts signed in as a demo super admin. The admin login page at `/admin/login` is pre-filled with `admin@centrifugegroup.co` / `admin`, and any password is accepted.
- Orders, products and cart contents are stored in your browser. Clear site data to reset them.
- Checkout uses a simulated payment gateway and always succeeds.

## Current Limitations

- No database: shop and admin data live in `localStorage` and are not shared between users.
- Authentication and role permissions are not enforced on the server or on admin routes.
- The chatbot URL is hardcoded to `http://localhost:5000`, and CORS only allows local dev origins, so the chatbot needs configuration before deployment.
- No automated tests or CI pipeline yet.
- Chat history is sent by the client and is not validated or stored on the server.

## Roadmap

- [ ] PostgreSQL with Prisma to replace the `localStorage` services
- [ ] Real authentication with server-enforced roles and protected admin routes
- [ ] Paystack integration with webhook verification
- [ ] TanStack Query for data fetching, React Hook Form and Zod for forms
- [ ] Unit, integration and end-to-end tests with a GitHub Actions pipeline
- [ ] Docker setup and a deployed demo
- [ ] Streaming chat responses, rate limiting and source citations
- [ ] Route-level code splitting and error boundaries

## Author

Built by [David Udeji](https://github.com/davidudeji).
