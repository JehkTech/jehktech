# DESIGN.md — 3D Portfolio Upgrade (two separate projects)

> Hand this file to the coding agent as the brief. Work inside the existing repos; do not start new projects and do not merge them.

## 0. Mission

Upgrade **two separate portfolio repos**, each with its own design, content and identity, into immersive, award-grade **3D, motion-heavy** sites. The visual benchmark is motionsites.ai and getdesign.ai: oversized typography, a cursor-driven "ink reveal" hero, real WebGL objects, smooth scroll, tiny mono micro-labels. **Each project keeps its own content and links; presentation changes drastically.**

| Project | Path | Notes |
|---|---|---|
| **A — JehKTech (live)** | `D:\_jeh\WebApps\jehktech` | Not Deployed
| **B — Developer Portfolio Design** | `D:\_jeh\WebApps\Developer-Portfolio-Design` | Figma Make export (`npm i`, `npm run dev`). Source design: https://www.figma.com/design/mQZ40W5qyLEKSzvho4ZDp7/Developer-Portfolio-Design | Deployed at https://jehktech.netlify.app/ (Netlify). Client-rendered app.

They are **different repos with different designs**. Do not assume they share code, content or structure. Do not copy A's content into B or vice versa.

## 1. Step 1 — Audit each repo independently (mandatory)

For **each** repo, before changing anything:
1. Read it fully: `package.json`, entry files, routing, components, styles, assets, deploy config.
2. Write `AUDIT.md` **inside that repo**: framework and versions, sections present, all copy, projects (name, description, links, images), skills, contact/social links, SEO tags, analytics, forms, current visual identity (colours, fonts, layout).
3. **Preserve all content and each project's existing visual identity as the starting point.** Elevate it; don't replace it with a generic template. Where an element is missing, mark `TODO(Jeh)`; never invent content.
4. Keep each repo's framework unless it blocks the work.

Then write one short `PLAN.md` (outside both repos, or in A) stating: what is being kept and changed in each, and the order of work. **Start with Project A (the live site)**, finish it to the definition of done, then do B.

## 2. Reference look & feel

**Motionsites "Ink Reveal / Hover":** dark UI chrome, giant bold grotesque wordmark, a cursor-following **ink-blot mask** revealing a saturated smoke/liquid layer (magenta, blue, orange) beneath the type.

**getdesign.ai:** dense card grid; soft white/cream surfaces beside saturated 3D hero objects (glass slabs, metal forms, glossy objects); mono pill labels ("WEBSITE", "COMPONENT"); nearly every card has a live interactive element.

Default blend: **dark cinematic shell + light tactile project cards.** Adapt the palette and type per project so each stays recognisably itself (see section 3).

## 3. Design system (per project)

Each project gets its own token file (`src/styles/tokens.css` or equivalent). Start from these, then adapt to each project's audited identity:

- **Colour:** `--bg #0A0A0B`, `--surface #111113`, `--ink #F4F2EE`, `--muted #8B8B92`, `--paper #F3F0EA`; accents from the smoke palette `--magenta #FF2E93`, `--blue #2B3BFF`, `--amber #FF9A1F`; one tiny UI accent `--lime #C6FF3D`.
- **Type:** display = heavy grotesque (Anton / Archivo Black / Inter Tight 800 / Clash Display), `clamp(4rem, 16vw, 16rem)`, tracking -0.04em, line-height 0.85. Body = Inter or Geist. Labels = JetBrains Mono / Geist Mono, 11–12px, uppercase, +0.08em. Self-host or `font-display: swap`; preload display font.
- **Differentiation:** pick **different** hero object, accent emphasis and display font for A and B so they don't look like twins. Record choices in each repo's `CHANGELOG.md`.
- **Layout:** 12-col grid, 24px gutters, generous negative space, corner micro-labels ("Browse", "Roam to unveil", local time, section index).
- **Motion:** ease-out-expo, 0.6–1.2s reveals; no instant hovers; every element has an enter state; nothing moves without purpose.

## 4. Tech stack (added per repo)

- React repos: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`
- `gsap` + `ScrollTrigger`, `lenis`; optionally `framer-motion` for UI transitions
- `leva` for dev-only tuning (gated out of production)
- Non-React repo: plain `three` + `gsap` with the same structure.
- Build the 3D pieces (ink-reveal shader, glass object scene, tilt card, custom cursor) as **self-contained modules** so they can be reused in both repos, but each repo gets its own copy and its own configuration. No shared package, no monorepo.

## 5. Page structure (apply to each, using that project's real content)

1. **Preloader** — 0→100 counter with mono label, mask-wipe into hero; under 2.5s; skippable.
2. **Hero (signature)** — giant name/wordmark from the audit. Fullscreen WebGL canvas with a **cursor-driven ink trail** (ping-pong render target or noise-displaced metaball mask with trail history) revealing a domain-warped fbm smoke shader in the accent palette through the type. Touch: auto-drifting blob + touch response. Corner labels, CTA pill, scroll cue.
3. **3D showcase** — pinned scroll section with a floating glass/metal object (`MeshTransmissionMaterial`, HDRI, pointer parallax); scroll scrubs rotation/scale/colour; captions swap on scroll.
4. **About / Services** — large statement text with word-by-word scroll reveal; service rows with hover previews.
5. **Projects** — getdesign-style grid: rounded 20–28px cards, mono tag pill, live preview, 3D tilt (≤8°), cursor morphs to "VIEW", click → shared-element transition to a case-study page. Data in a typed `projects` file from the audit.
6. **Skills / Stack** — interactive 3D/physics cloud (`@react-three/rapier`) or marquee fallback, plus an accessible list.
7. **Contact** — oversized CTA, magnetic buttons, **keep the existing form handler/service**, socials, local time.
8. **Footer** — mono credits, smooth back-to-top.

Persistent: floating nav, custom cursor (dot + ring, blend-difference, magnetic), scroll progress.

Sections may be reordered or dropped per project **only** if the audit shows that project lacks that content; log it in `CHANGELOG.md`.

## 6. Performance & quality bars (non-negotiable, per project)

- Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95, CLS < 0.05.
- One shared WebGL canvas per site; DPR ≤ 2 (1.5 on mobile); pause when offscreen/hidden tab.
- Lazy-load scenes and models; Draco/meshopt GLBs, total < 1.5 MB; KTX2/WebP textures.
- **Fallbacks:** no-WebGL/low-power → static gradient hero + CSS animation. `prefers-reduced-motion` → no smooth-scroll hijack, parallax or ink trail; content fully usable.
- Responsive 360px → 4K, touch-friendly, no horizontal scroll.
- Semantic HTML, focus states, alt text, `aria-hidden` on decorative canvas, full keyboard support.
- Project A must keep its Netlify deploy working (build command, publish dir, SPA redirects). Check B's deploy config in its audit and keep it working too.

## 7. SEO & meta

Keep or improve title, description, OG/Twitter images (generate fresh OG images), canonical URL, `sitemap.xml`, `robots.txt`, JSON-LD `Person` + `WebSite`. Do not remove existing analytics.

## 8. Deliverables (per repo)

1. `AUDIT.md`, `CHANGELOG.md` (decisions, simplifications, `TODO(Jeh)` items).
2. `npm run dev` and `npm run build` succeed with no console errors.
3. Structure: `/src/components`, `/src/three` (scenes, `.glsl` shaders), `/src/hooks`, `/src/data`.
4. Updated `README.md`: stack, run steps, how to tune the hero shader, how to add a project.

## 9. Working rules for the agent

- Small commits per section, on a branch per repo (`feat/3d-redesign`); the site builds after each commit. Never force-push or touch `main` directly.
- Screenshot every section at 1440, 768 and 390 widths and fix visual bugs before moving on.
- Never fabricate testimonials, metrics, clients or project details.
- Don't delete assets; move unused ones to `/archive`.
- If a requirement conflicts with the performance/accessibility bars, keep the bars and say what you simplified.
- Ask only when blocked; otherwise pick the best option and log it.

## 10. Definition of done (each project)

A visitor lands on a dark, cinematic hero where moving the mouse paints colourful ink through giant type; scrolls into a pinned 3D glass object; browses tilt-on-hover project cards that open polished case studies; and reaches a working contact form, at 60fps on a mid-range laptop and gracefully degraded on phones, with the project's own content and identity intact and clearly distinct from the other project.
