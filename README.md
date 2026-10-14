# Centrifuge Group Website

A React + TypeScript web platform for Centrifuge Group, an enterprise software and digital solutions company. It combines a corporate marketing site, a hardware shop with an admin console, and Tawk.to live chat with a verified webhook receiver.

> **Status:** active development. The marketing site, shop flow and admin UI run entirely in the browser on mock data. Tawk.to provides live chat; the optional Express service receives its webhooks. See [Current Limitations](#current-limitations).

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

### Tawk.to live chat
- Official Tawk.to JavaScript widget embed, enabled with property and widget IDs from the Tawk.to dashboard
- Optional Express webhook endpoint that verifies Tawk.to's HMAC-SHA1 signature against the original request body

## Tech Stack

| Area | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite, React Router v7 |
| Styling | Tailwind CSS v4, `clsx`, `tailwind-merge`, Lucide icons |
| State | Zustand (with `persist`), TanStack Query provider |
| Charts | Recharts |
| Live chat | Tawk.to JavaScript API |
| Webhook backend | Node.js, Express, dotenv, Node.js crypto |
| Tooling | ESLint, TypeScript project references |

## Architecture

**Tawk.to chat and webhook flow**

1. The frontend loads Tawk.to's official widget script when `VITE_TAWK_PROPERTY_ID` and `VITE_TAWK_WIDGET_ID` are configured.
2. Tawk.to sends selected chat and ticket events to `POST /tawk-webhook`.
3. The Express endpoint verifies `X-Tawk-Signature` using HMAC-SHA1 over the exact raw JSON request body and `TAWK_WEBHOOK_SECRET`.
4. Verified events are acknowledged with HTTP 200; the server logs only the event name and retry-stable `X-Hook-Event-Id`, not visitor or transcript contents.

Configure the webhook URL and selected events in the Tawk.to dashboard. The endpoint must be publicly reachable over HTTPS in production.

**Data layer (shop and admin):** `productService`, `orderService` and `projectService` expose async methods and currently read and write `localStorage`, seeded from `src/data/mockData.ts`. `paymentService` defines a `PaymentGateway` interface with a simulated gateway, so a real provider such as Paystack can be plugged in without changing the checkout page.

## Project Structure

```
.
├── backend/                 # Tawk.to webhook receiver
│   ├── server.js            # Express health check and signed webhook endpoint
│   └── .env.example
├── src/
│   ├── components/
│   │   ├── chatbot/         # Tawk.to JavaScript widget embed
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
- A Tawk.to property and chat widget; configure their IDs for the frontend integration

### 1. Run the frontend

Set these values in the root `.env` file using the IDs from **Tawk.to Admin > Channels > Chat Widget**:

```dotenv
VITE_TAWK_PROPERTY_ID=your-property-id
VITE_TAWK_WIDGET_ID=your-widget-id
```

These IDs are public identifiers needed by the browser widget, not API secrets. Restart Vite after changing them.

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### 2. Run the Tawk.to webhook backend (optional)

```bash
cd backend
npm install
cp .env.example .env     # then set TAWK_WEBHOOK_SECRET
npm run dev
```

The service runs at `http://localhost:5000`. Check it with `curl http://localhost:5000/api/health`. Configure the Tawk.to webhook URL as `https://your-domain/tawk-webhook`, and copy its webhook secret into `backend/.env`.

### Environment variables (`backend/.env`)

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Server port (default `5000`) |
| `TAWK_WEBHOOK_SECRET` | For webhook delivery | Secret configured for the webhook in the Tawk.to dashboard; keep this on the server only |

Never commit `.env`. Without the frontend widget IDs, the Tawk.to widget is not loaded. Without the webhook secret, the endpoint returns HTTP 503 and Tawk.to will retry delivery.

For the provider API contract, see the official [JavaScript API documentation](https://developer.tawk.to/jsapi/) and [webhook documentation](https://developer.tawk.to/webhooks/).

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
- Tawk.to Secure Mode is not enabled: the current demo authentication is stored in the browser and cannot securely prove visitor identity to the server. Enable it only after adding trusted server-side authentication.
- Webhook events are signature-verified and acknowledged, but are not persisted or forwarded; transcript contents are discarded and only event metadata is logged.
- No automated tests or CI pipeline yet.

## Roadmap

- [ ] PostgreSQL with Prisma to replace the `localStorage` services
- [ ] Real authentication with server-enforced roles and protected admin routes
- [ ] Paystack integration with webhook verification
- [ ] TanStack Query for data fetching, React Hook Form and Zod for forms
- [ ] Unit, integration and end-to-end tests with a GitHub Actions pipeline
- [ ] Docker setup and a deployed demo
- [ ] Streaming chat responses, rate limiting and source citations
- [ ] Route-level code splitting and error boundaries
