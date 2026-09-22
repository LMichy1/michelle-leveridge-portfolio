# Michelle Leveridge — Portfolio

A single-page developer portfolio for Michelle Leveridge, built as a small, statically-deployable
Vue 3 application. Content (profile, skills, experience, education, projects) lives in typed
TypeScript data modules under `src/data/`, kept separate from presentation components.

## Technology stack

| Concern             | Choice                                    |
| ------------------- | ----------------------------------------- |
| Framework           | Vue 3 (Composition API, `<script setup>`) |
| Language            | TypeScript, strict mode                   |
| Build tool          | Vite                                      |
| Styling             | Tailwind CSS v4 (`@tailwindcss/vite`)     |
| Unit/component test | Vitest + Vue Test Utils                   |
| End-to-end test     | Playwright                                |
| Linting             | ESLint (flat config)                      |
| Formatting          | Prettier                                  |
| CI                  | GitHub Actions                            |
| Target deployment   | Vercel (static build)                     |

### Why this stack

- **Vue 3 + Composition API**: the brief required Vue; Composition API with `<script setup>` keeps
  each section component's logic and template co-located and typed without extra boilerplate.
- **Tailwind CSS v4**: the CSS-first `@theme` directive maps directly onto the design tokens
  (teal/black/white palette) required for this project, without a separate JS config file.
- **No router, no state library**: this is a single scrolling page with anchor navigation. Adding
  Vue Router or Pinia would be unused weight for a static content site.
- **TypeScript 6.0.x** (rather than the newer TypeScript 7 native compiler line) was chosen
  deliberately: TS 7 is a very recent architectural rewrite (Go-based compiler), and `vue-tsc`'s
  compatibility story with it was less established at the time of writing. TS 6.x is the same
  general track as 5.x with continued `vue-tsc` support, so it was the safer pick for a project
  that needs a working `vue-tsc --build` today.

## Project structure

```
src/
  components/
    layout/     AppHeader, AppFooter, MobileNav
    ui/         BaseButton, BaseBadge, SectionHeading, icons
    sections/   HeroSection, AboutSection, SkillsSection, ProjectsSection,
                ExperienceSection, EducationSection, ContactSection
    projects/   ProjectCard
  data/         profile.ts, skills.ts, experience.ts, education.ts,
                projects.ts, navigation.ts  (typed content — no prose in components)
  composables/  useScrollSpy.ts (active-section tracking + scroll-to-section),
                useReducedMotion.ts
  styles/       tokens.css (design tokens + Tailwind @theme), base.css
  App.vue, main.ts
public/
  favicon.svg, robots.txt
  resume/       (empty — see Known limitations)
tests/
  e2e/          Playwright specs
.github/workflows/ci.yml
```

Within `src/components/**`, each component's tests live in an adjacent `__tests__/` folder.

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev          # start the Vite dev server
```

## Development commands

| Command                   | Purpose                                         |
| ------------------------- | ----------------------------------------------- |
| `npm run dev`             | Start the dev server with HMR                   |
| `npm run build`           | Type-check (`vue-tsc -b`) then production build |
| `npm run preview`         | Serve the production build locally              |
| `npm run lint`            | ESLint, auto-fixing                             |
| `npm run lint:check`      | ESLint, check-only (used in CI)                 |
| `npm run format`          | Prettier, write                                 |
| `npm run format:check`    | Prettier, check-only (used in CI)               |
| `npm run typecheck`       | `vue-tsc -b --noEmit`                           |
| `npm run test:unit`       | Vitest, single run                              |
| `npm run test:unit:watch` | Vitest, watch mode                              |
| `npm run test:e2e`        | Playwright end-to-end suite                     |

## Testing

- **Unit/component** (Vitest + Vue Test Utils): 5 files, 15 tests, covering mobile-menu
  open/close state and `aria-expanded`, conditional rendering of external links (e.g. the resume
  button only renders once a resume asset is configured), project-card behavior (repository link
  only rendered when a verified `repoUrl` exists), skills rendering against the data module, and
  the navigation data model itself.
- **End-to-end** (Playwright, against the production build via `vite preview`): homepage load,
  desktop anchor navigation, verified social links, absence of fabricated project links, no
  horizontal overflow at 375/768/1280/1920px, and full mobile-navigation behavior (open, navigate,
  close, close-on-Escape) run under a dedicated mobile Chromium project.

All of the above were run locally as part of this implementation (lint, format check, typecheck,
15/15 unit tests, 7/7 Playwright E2E tests, and a production build all passed).

## Build & deployment

`npm run build` produces a static `dist/` directory (type-checked, then bundled by Vite). There is
no backend, so it deploys as a static site.

**Vercel**: framework preset "Vite", build command `npm run build`, output directory `dist`. No
environment variables are required. The project has not been deployed from this session — no
Vercel account was authenticated here, and no production domain is invented anywhere in the code
(no canonical URL, no hardcoded deployment URL).

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a single `h1` with an ordered
  heading hierarchy through each section.
- The mobile navigation toggle exposes `aria-expanded` and `aria-controls`; the panel is a
  `role="dialog"` with `aria-modal`, moves focus to its first link on open, and closes on
  <kbd>Escape</kbd>.
- Visible focus rings (`:focus-visible`) throughout; no interactive element relies on hover alone.
- `prefers-reduced-motion` is respected globally (smooth scroll and transitions are disabled).
- Text/background pairings follow the brief's rule (white text on the two dark-teal tones, black
  text on light teal and white) to meet WCAG AA contrast.

## Known limitations

These are intentional gaps, not oversights — publishing placeholder or fabricated content in their
place would violate the project's own content-integrity requirements:

- **No resume file**: `profile.resumeUrl` is `null`. The Resume button (header, mobile menu, hero)
  only renders when this is set, so no dead or fake link ships. Drop a PDF into `public/resume/`
  and update `src/data/profile.ts` to enable it.
- **Three of the four featured projects have no confirmed public repository.** They render as
  text-led cards with a "Described in resume" badge and no GitHub/live-demo button. Only this
  portfolio's own repository link is real.
- **No Open Graph image asset.** `og:image`/`twitter:image` tags were omitted rather than pointed
  at a non-existent file. `twitter:card` is `summary` (not `summary_large_image`) accordingly.
- **No sitemap.xml.** Generating one requires a known production domain, which doesn't exist yet.
  `robots.txt` is present and unrestrictive.
- **Playwright browser system dependencies** could not be fully installed in the sandboxed
  development environment used for this build (no root/sudo access); the Chromium _binary_ did
  install and all E2E tests ran successfully against it. CI installs with `--with-deps` on a full
  GitHub-hosted runner, where this is not a constraint.
