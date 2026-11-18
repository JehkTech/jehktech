# JehKTech

An interactive portfolio for Jehoiachin Katemangwe, built with Next.js, React and TypeScript. The site combines a native WebGL ink field with an accessible HTML-first portfolio.

## Run

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Design and performance

- A single native WebGL canvas powers the hero; it caps DPR below 2, stops while the tab is hidden, and falls back to a static CSS colour field.
- `prefers-reduced-motion` disables the animated canvas and motion transitions.
- The floating orb is CSS-only, keeping the initial payload small.

## Content

- Update biography, roles, contact information and social links in `data/portfolioData.ts`.
- Add verified portfolio work in `data/projects.ts`. Do not add a case-study URL until it exists.
- The hero shader is self-contained in `components/InkCanvas.tsx`. Its `fragment` source controls the colour field and ink radius.
- Core visual tokens are in `styles/tokens.css`; global layout styles are in `app/globals.css`.

## SEO and deployment

The app provides canonical metadata, OpenGraph metadata, JSON-LD Person data, `robots.ts` and `sitemap.ts`. The canonical URL currently follows the supplied Netlify deployment URL; update it in `app/layout.tsx`, `app/page.tsx`, `app/robots.ts`, and `app/sitemap.ts` if production moves.

The historical pre-redesign entry files are retained in `archive/pre-3d/` for rollback reference.
