# Claude Agent Guidelines

This project uses Next.js 16+ App Router, React 19, and strictly adheres to standard conventions.
Please read `@AGENTS.md` for Next.js specific breaking changes and rules.

## Core Directives
1. **Typescript First**: All new components and data models must include strict typing (interfaces/types).
2. **Path Aliasing**: Always use the `@/` prefix for internal imports (e.g., `@/components/...`, `@/data/...`). Do NOT use relative path traversals (`../../`).
3. **Component Structure**: Follow the established `components/[ComponentName]/[ComponentName].tsx` and `[ComponentName].module.css` structure.
4. **Data Layer**: Content and hardcoded copy should be centralized in `@/data/portfolioData.ts`.
5. **Assets**: All static assets (images, fonts, icons) should exclusively live in the `/public` directory.
6. **PRD Alignment**: See `.orchestrator/PRD.md` for the overarching UI/UX vision and mission.

Ensure all suggestions and edits respect these architectural boundaries and maintain a production-grade level of code quality.