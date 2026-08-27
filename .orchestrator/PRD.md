# Product Requirements Document & Technical Design

## 1. Product Overview
**Project Name:** JehkTech Personal Portfolio
**Target Platform:** Vercel
**Mission:** Scrap legacy files and build a new, modern, sleek, and professional personal portfolio for Jehoiachin Katemangwe. The portfolio must uniquely highlight his multifaceted identity: Trader, UI Designer, Software Engineer, QA Tester, Visionary, and Mentalist.

## 2. Product Requirements (PRD)

### 2.1 Target Audience
- Recruiters, hiring managers, potential clients, and collaborators seeking a versatile technologist, creative mind, and analytical thinker.

### 2.2 Site Structure & Sections
The site will utilize a modern web architecture, providing a seamless user experience. 

- **Home/Landing:** High-impact hero section introducing Jehoiachin and his multifaceted identity. Engaging visual hooks that nod to his diverse skill set.
- **About Identity:** A narrative section detailing the synergy between his roles (Trading, UI/UX, Engineering, QA, Mentalism, Visionary ideas).
- **Projects/Showcase:** A visual showcase of past work. Needs to handle diverse types of projects (e.g., UI mockups, code repos, trading algorithms/stats, QA automation frameworks).
- **Contact:** A sleek, accessible contact form and professional social links.

### 2.3 UI/UX Vibe
- **Theme:** Modern, sleek, professional. Dark mode default with high-contrast, clean typography to evoke a "Mentalist/Visionary" aura combined with "Software Engineer/Trader" precision.
- **Animations:** Smooth, performant micro-interactions. Fade-ins, slide-ups on scroll, and hover effects that feel premium but not overwhelming.
- **Responsiveness:** Mobile-first, fully responsive design ensuring pixel-perfect display on all devices.

## 3. Technical Design (Architecture)

### 3.1 Tech Stack
- **Framework:** Next.js (React)
- **Routing:** App Router (`/app` directory paradigm)
- **Styling:** Vanilla CSS (using CSS Modules for component scoping)
- **Animations:** Native CSS transitions and animations (or a lightweight library like Framer Motion if complex orchestration is needed later, but starting with CSS).
- **Deployment:** Vercel

### 3.2 System Architecture
- **React Server Components (RSC):** Default to server components in the App Router for optimal performance and SEO. Use client components (`'use client'`) only where interactivity (hooks, state) is strictly required.
- **Static Site Generation (SSG):** Leverage Next.js static rendering for portfolio content to ensure blazing fast load times.

### 3.3 Proposed Directory Structure
```text
/
├── app/
│   ├── layout.tsx         # Global layout (Navbar, Footer, Meta tags)
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global CSS variables, resets, and typography
│   ├── about/page.tsx     # About section route
│   ├── projects/page.tsx  # Projects section route
│   └── contact/page.tsx   # Contact section route
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.css
│   └── ProjectCard/
│       ├── ProjectCard.tsx
│       └── ProjectCard.module.css
├── data/
│   └── portfolioData.ts   # Static JSON/TS data for projects, skills, etc.
└── public/                # Static assets (images, icons)
```

### 3.4 Key Technical Decisions
1. **App Router over Pages Router:** Future-proofs the application and aligns with the latest React/Next.js paradigms, offering better layout nesting and performance.
2. **Vanilla CSS Modules:** Ensures styles are locally scoped, avoiding global namespace collisions while remaining lightweight without the need for additional tooling like Tailwind or Styled Components.
3. **Static Data Layer:** Since a personal portfolio does not require a highly dynamic backend (unless a blog is added later), project and skill data will be managed via local TypeScript files (`data/portfolioData.ts`).
4. **Vercel CI/CD:** Push-to-deploy workflow via GitHub/GitLab integration with Vercel for automated builds and preview deployments.