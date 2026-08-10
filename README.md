# Mobile Desk Knowledge Base

A mobile-only Astro starter for a small German team knowledge base. A compact
desk dashboard links to separate object-themed pages for dates, responsibilities,
FAQs, onboarding, and contact information.

## Features

- Static HTML with minimal client-side JavaScript
- German website copy and `de-AT` document language
- Markdown-managed onboarding, FAQ, responsibilities, and contact content
- Local onboarding progress stored on each device
- Upcoming events fetched from the public iCalendar feed at build time
- Animated page changes with a reduced-motion fallback
- PR validation with GitHub Actions
- Automatic GitHub Pages deployment after merging to `main`
- Scheduled calendar refresh through GitHub Actions

## Local development

Use Node.js 24.

```sh
npm install
npm run dev
```

Then open <http://localhost:4321/SVUrfahr-Team-Guide/>.

```sh
npm run check
npm run build
npm run preview
```

## Edit content

Content is stored in Markdown:

```text
src/content/
├── onboarding/
├── faq/
├── parents/
├── children/
└── info/
```

Each file has validated frontmatter. Use `order` to control its position.

Onboarding example:

```md
---
title: Mannschaftskalender abonnieren
order: 4
---

Den Kalender am Mobiltelefon abonnieren.
```

FAQ example:

```md
---
question: Wann sollen wir beim Training sein?
order: 1
---

Bitte spätestens **15 Minuten vorher** am Platz sein.
```

General site labels are in `src/config.ts`. The calendar URL can be replaced in
`src/lib/calendar.ts` or supplied as the `CALENDAR_URL` build variable.

The included red-and-black `SVU` crest is an original placeholder. Replace the
markup in `src/components/SiteHeader.astro` with an officially authorized club
logo asset when one is available.

## Pull request workflow

1. Create a branch and edit Markdown on GitHub or locally.
2. Open a pull request.
3. The `Check website` workflow validates all content and builds the site.
4. Review and merge the pull request.
5. The `Deploy to GitHub Pages` workflow publishes the updated website.

Enable branch protection for `main` and require the `check` job if merges should
be blocked when content is invalid.

GitHub Pages does not create per-pull-request preview sites. Contributors can
run `npm run dev` locally, while the pull request build confirms that the site
can be generated successfully.

## GitHub Pages

The repository is configured for the project site:

<https://dzoech.github.io/SVUrfahr-Team-Guide/>

The `.github/workflows/deploy.yml` workflow uses Astro's official Pages action.
It deploys after every push to `main`, can be started manually, and rebuilds the
site every six hours so calendar changes appear without a content commit.

No repository secrets are required.

## Calendar behavior

`src/lib/calendar.ts`:

- fetches the public ICS feed during the Astro build,
- repairs the feed's double-encoded German characters,
- removes cancelled and past events while retaining today's all-day events,
- sorts upcoming events, and
- displays the next six entries in Europe/Vienna time.

A failed calendar request fails the build instead of silently publishing an
apparently current but incomplete calendar.
