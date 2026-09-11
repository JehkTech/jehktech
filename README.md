# JehkTech — Jehoiachin Katemangwe

> **UI/UX Designer · QA Automation Engineer · Systematic Trader · SaaS Builder**  
> Building at the intersection of fintech, intelligent systems, and precision execution.

---

## Who I Am

I'm Jehoiachin Katemangwe (Jeh) — based in Lusaka, Zambia.

Three years in production fintech building cashless payment systems, QA automation pipelines, and real-time integrations for platforms used across Southern Africa. Simultaneously building SaaS products, running a systematic prop trading operation, and scaling an AI automation agency.

I operate under the umbrella identity **JehKTech** — and under the trading/content brand **KTMNGW** (*Precision Under Pressure*).

No degree. No apologies. Production experience speaks.

---

## 🔗 Connect

| Platform | Link |
|---|---|
| GitHub | [github.com/JehkTech](https://github.com/JehkTech) |
| LinkedIn | [linkedin.com/in/jkatemangwe](https://linkedin.com/in/jkatemangwe) |
| Research | [Academia.edu](https://www.academia.edu) · [Zenodo DOI](https://zenodo.org) |
| Freelance | [Contra](https://contra.com) |
| Company | [F6S — JehKTech](https://www.f6s.com/jehktech) |
| Email | jehoiachinkatemangwe1@gmail.com |
| Phone | (+260) 970-435-346 |

---

## 🏢 Professional Experience

### UI/UX Designer & QA Automation Engineer — Mount Meru / Mamastops
*Cashless Logistics Platform · Lusaka, Zambia · 3 Years*

Production fintech work across multiple live payment integrations:

- **E-Toll Integration** — BookNow & NRFA payment gateway flows
- **Airtel Money V2** — Mobile money disbursement and collection API
- **M-Pesa Mozambique** — Cross-border mobile payment integration
- **WhatsApp OTP** — Two-factor authentication via WhatsApp Business API
- **TFN Payments** — Transaction flow and reconciliation pipelines

Responsibilities span end-to-end: wireframing, prototyping, UI implementation, QA automation scripting, regression testing, and integration validation.

---

## 🛠️ Projects

### StatusHub
> Webhook management & status monitoring SaaS

Real-time infrastructure visibility for developers and ops teams. Built on a production-grade stack with SSE-based live updates, webhook event routing, and a multi-tenant status page system.

**Stack:** Next.js 14 · Express · Prisma · PostgreSQL · Firebase Auth · Upstash Redis · SSE · Tailwind CSS v4  
**Status:** Active development — backend hardened (P0/P1 resolved), StatusPage CRUD + global search wiring in progress

---

### OnboardAI
> AI-powered client onboarding dashboard

Intelligent onboarding flow management for SaaS businesses. Full backend spec complete — PostgreSQL/Prisma schema, REST API inventory, WebSocket catalog, RBAC matrix, BullMQ async job architecture.

**Stack:** React · Vite · Node.js · PostgreSQL · Prisma · BullMQ · Socket.io · Resend  
**Status:** 4-week MVP sprint in execution — auth → core data → AI reports → hardening

---

### Luminous Pixels Agency
> AI automation agency targeting US-based clients

Builds AI Receptionist solutions, workflow automation pipelines, and web presence for businesses replacing manual processes with intelligent systems. Production Vite/React site live.

**Services:** AI Receptionist · Document Processing Automation · Website Builds · Lead Intelligence  
**Stack:** React · Vite · Node.js · Africa's Talking · Flutterwave · Calendly  
**Payment Infra:** PayPal · Whop · Sellix (crypto) · Flutterwave (mobile money)

---

### KTMNGW — Systematic Trading & Content Brand
> Precision Under Pressure

Systematic prop trading operation under the **R0TK framework** — a structured SMC approach covering HTF structure identification, ITF liquidity mapping, and LTF MSS/FVG entry confirmation.

- **Instruments:** NQ · ES · YM · XAU · XAG · BTC (NY AM/PM) · GBPJPY (Asian/London)
- **Prop Firms:** GoatFunded · Topstep · Tradeify · Alpha Futures
- **Scaling Mechanism:** MT5 copier architecture across multiple funded accounts
- **Published Research:** DOI-registered Zenodo paper — *Midnight Opening Gap (MNOG)* microstructure study (2026)

---

## 🔬 Research

**Midnight Opening Gap (MNOG) — Trading Microstructure Study**  
Published: Zenodo · DOI-registered · 2026  
Profiles: [Academia.edu](https://www.academia.edu) · [Zenodo](https://zenodo.org)

---

## 🧰 Full Tech Stack

| Layer | Tools |
|---|---|
| **Frontend** | Next.js 14 · React · Vite · TypeScript · Tailwind CSS v4 · React Router v7 · CSS Modules |
| **Backend** | Node.js · Express · Prisma · PostgreSQL · BullMQ · Socket.io · SSE |
| **Auth & Infra** | Firebase Auth · Upstash Redis · Cloudflare R2 · AWS · Vercel · Netlify |
| **Payments** | Flutterwave · PayPal · Whop · Sellix · Africa's Talking (SMS/OTP) |
| **Trading** | MetaTrader 5 · Python MT5 SDK · Prop Firm Copier Architecture |
| **Design** | SVG · Node.js Sharp · ReportLab (Python) · python-docx |
| **Comms** | Resend · WhatsApp Business API · Africa's Talking |

---

## 📁 This Repository — Portfolio Site

A production-grade personal portfolio built on Next.js 14 with TypeScript, CSS Modules, and Vercel deployment. Dark minimalist design reflecting the JehKTech brand identity.

### Architecture

```
/
├── app/                        # Next.js App Router root
│   ├── globals.css             # CSS variables, resets, typography
│   ├── layout.tsx              # Root layout (Navbar, Footer, Meta)
│   └── page.tsx                # Main landing page
├── components/
│   ├── About/                  # About section
│   ├── Contact/                # Contact section
│   ├── Hero/                   # Hero section
│   └── Projects/               # Projects showcase
├── data/
│   └── portfolioData.ts        # Strongly-typed content layer
└── public/                     # Static assets
```

### Key Technical Decisions

- **TypeScript First** — Data layer and components fully typed for robust refactoring
- **Path Aliasing** — `@/` alias throughout for clean imports
- **CSS Modules** — Scoped styles, zero global namespace pollution
- **React Server Components** — App Router defaults to RSC for optimal Core Web Vitals

---

## 💻 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Hot reloads on save.

---

## 🛠️ Content Guide

### Update site content
All content lives in `@/data/portfolioData.ts` — edit roles, projects, links there without touching markup.

### Add a new section
```bash
# 1. Create component directory
mkdir components/NewSection

# 2. Add component + styles
touch components/NewSection/NewSection.tsx
touch components/NewSection/NewSection.module.css

# 3. Import in app/page.tsx
import NewSection from '@/components/NewSection/NewSection'
```

---

## 🚀 Deployment

Deploy to Vercel in three steps:

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — build and deploy

---

## 📚 Internal Docs

| File | Purpose |
|---|---|
| `.orchestrator/PRD.md` | Product requirements & design decisions |
| `AGENTS.md` | AI assistant guardrails |
| `CLAUDE.md` | Claude-specific project context |

---

---

# 🕐 Content Clock — Template for Other Builders

> Copy this section into your own portfolio README. Fill each slot. This is your positioning, not a biography.

```markdown
## Who I Am

Jehoiachin Katemangwe (Jeh). Lusaka, Zambia.

Building cashless payment systems, QA automation pipelines, and SaaS products for fintech and logistics platforms across Southern Africa.
Three years in production fintech — simultaneously running a systematic prop trading operation and an AI automation agency.

No degree. No apologies. Production experience speaks.

---

## Connect

| Platform | Link |
|---|---|
| GitHub   | [github.com/JehkTech](https://github.com/JehkTech) |
| LinkedIn | [linkedin.com/in/jkatemangwe](https://linkedin.com/in/jkatemangwe) |
| Email    | jehoiachinkatemangwe1@gmail.com |
| Phone    | (+260) 970-435-346 |
| Research | [Academia.edu](https://www.academia.edu) · [Zenodo](https://zenodo.org) |
| Freelance | [Contra](https://contra.com) |
| Company  | [F6S — JehKTech](https://www.f6s.com/jehktech) |

---

## Experience

### UI/UX Designer & QA Automation Engineer — Mount Meru / Mamastops
*Cashless Logistics Platform · Lusaka, Zambia · 3 Years*

- Shipped E-Toll integrations across BookNow and NRFA payment gateway flows
- Integrated Airtel Money V2, M-Pesa Mozambique, and TFN Payments for cross-border mobile money disbursement and collection
- Implemented WhatsApp OTP two-factor authentication via WhatsApp Business API
- Owned end-to-end: wireframing → UI implementation → QA automation scripting → regression testing → integration validation

---

## Projects

### StatusHub
> Webhook management & status monitoring SaaS

Real-time infrastructure visibility for developers and ops teams. SSE-based live updates, webhook event routing, and multi-tenant status page system built on a production-grade stack.

**Stack:** Next.js 14 · Express · Prisma · PostgreSQL · Firebase Auth · Upstash Redis · SSE · Tailwind CSS v4  
**Status:** Active development — backend hardened, StatusPage CRUD + global search wiring in progress

---

### OnboardAI
> AI-powered client onboarding dashboard

Intelligent onboarding flow management for SaaS businesses. Full backend spec complete — PostgreSQL/Prisma schema, REST API, WebSocket catalog, RBAC matrix, BullMQ async job architecture.

**Stack:** React · Vite · Node.js · PostgreSQL · Prisma · BullMQ · Socket.io · Resend  
**Status:** 4-week MVP sprint in execution — auth → core data → AI reports → hardening

---

### Luminous Pixels Agency
> AI automation agency targeting US-based clients

AI Receptionist solutions, workflow automation pipelines, and web presence for businesses replacing manual processes with intelligent systems.

**Stack:** React · Vite · Node.js · Africa's Talking · Flutterwave · Calendly · PayPal · Whop · Sellix  
**Status:** Live — production Vite/React site deployed

---

### KTMNGW — Systematic Trading Operation
> Precision Under Pressure

Systematic prop trading under the R0TK framework — HTF structure identification, ITF liquidity mapping, LTF MSS/FVG entry confirmation. MT5 copier architecture scaling across multiple funded accounts. DOI-registered Zenodo research paper published 2026.

**Instruments:** NQ · ES · YM · XAU · XAG · BTC · GBPJPY  
**Prop Firms:** GoatFunded · Topstep · Tradeify · Alpha Futures  
**Status:** Live — active funded accounts

---

## Stack

| Layer | Tools |
|---|---|
| Frontend | Next.js 14 · React · Vite · TypeScript · Tailwind CSS v4 · React Router v7 · CSS Modules |
| Backend  | Node.js · Express · Prisma · PostgreSQL · BullMQ · Socket.io · SSE |
| Infra    | Firebase Auth · Upstash Redis · Cloudflare R2 · AWS · Vercel · Netlify |
| Payments | Flutterwave · PayPal · Whop · Sellix · Africa's Talking |
| Trading  | MetaTrader 5 · Python MT5 SDK · Prop Firm Copier Architecture |
| Design   | SVG · Node.js Sharp · ReportLab (Python) · python-docx |
| Comms    | Resend · WhatsApp Business API · Africa's Talking |

---

## This Repo

Production-grade personal portfolio built on Next.js 14 with TypeScript, CSS Modules, and Vercel deployment — dark minimalist design reflecting the JehKTech brand identity.

### Architecture

​```
/
├── app/                # Next.js App Router root (layout, globals, page)
├── components/         # Section components — About, Contact, Hero, Projects
├── data/               # portfolioData.ts — strongly-typed content layer
└── public/             # Static assets
​```

---

## Getting Started

​```bash
npm install
npm run dev
​```

Open [http://localhost:3000](http://localhost:3000). Hot reloads on save. All site content lives in `@/data/portfolioData.ts`.
```

> **Clock rules:** Fill every slot before publishing. A blank slot is worse than no slot.  
> Delete any section that doesn't apply to your work. Don't pad.  
> Update the Status field on every project whenever it changes.

---

*Built by [Jehoiachin Katemangwe](https://github.com/JehkTech) — JehKTech · KTMNGW*
