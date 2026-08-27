# JehkTech Personal Portfolio

A modern, sleek, and high-performance personal portfolio for Jehoiachin Katemangwe. This project showcases his multifaceted identity: Trader, UI Designer, Software Engineer, QA Tester, Visionary, and Mentalist.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Routing**: Next.js App Router (`app/` directory)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **Styling**: Vanilla CSS Modules for locally scoped, lightweight styling
- **Deployment**: [Vercel](https://vercel.com/) (Recommended)

## 📁 Architecture & Structure

This project strictly adheres to production-grade Next.js best practices:

```
/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Global CSS variables, resets, typography
│   ├── layout.tsx        # Root layout (Navbar, Footer, Meta tags)
│   └── page.tsx          # Main landing page
├── components/           # Reusable UI components
│   ├── About/            # About section component
│   ├── Contact/          # Contact section component
│   └── Hero/             # Hero section component
├── data/                 # Static data layer
│   └── portfolioData.ts  # Strongly-typed data driving the site content
└── public/               # Static assets (images, icons, etc.)
```

### Key Technical Decisions
- **TypeScript First**: Data layer (`data/portfolioData.ts`) and components are strictly typed to ensure robust refactoring and error prevention.
- **Path Aliasing**: Imports utilize the `@/` alias (e.g., `import Hero from '@/components/Hero/Hero'`) to maintain clean and scalable dependency paths.
- **CSS Modules**: Native CSS modules are used (e.g., `Hero.module.css`) to prevent global namespace collisions while remaining lightweight without third-party styling overhead.
- **Server Components (RSC)**: The Next.js App Router defaults to React Server Components to optimize payload sizes and Core Web Vitals.

## 💻 Getting Started

First, ensure you have Node.js installed, then install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will auto-update as you modify the files.

## 🛠️ Development Guide

### Updating Content
All primary site content is centralized in `@/data/portfolioData.ts`. This allows you to easily update the text, roles, and links without touching the component markup. 

### Adding New Components
1. Create a new directory in `components/` (e.g., `components/Projects/`).
2. Add a `.tsx` file for the component markup (`Projects.tsx`).
3. Add a `.module.css` file for scoped styles (`Projects.module.css`).
4. Import into `app/page.tsx` using the `@/components/...` alias.

## 📚 Documentation
- **Product Requirements**: See `.orchestrator/PRD.md` for the core product vision and design decisions.
- **AI Agent Guidelines**: See `AGENTS.md` and `CLAUDE.md` for AI assistant guardrails and project context.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub/GitLab repository.
2. Import the project in Vercel.
3. Vercel will automatically detect the Next.js framework and handle the build/deploy process.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
