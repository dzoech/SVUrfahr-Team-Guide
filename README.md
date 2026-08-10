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
- Cloudflare Pages preview deployments and production deployment on merge
- Scheduled calendar refresh through a Cloudflare deploy hook

## Local development

Use Node.js 24.

```sh
npm install
npm run dev
```

Then open <http://localhost:4321>.

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
4. Cloudflare Pages creates a preview URL for the pull request.
5. Merge the pull request to deploy it to production.

Enable branch protection for `main` and require the `check` job if merges should
be blocked when content is invalid.

## Deploy to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, create a Pages project and connect the repository.
3. Select the Astro framework preset, or configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `24`
4. Keep production deployments on the `main` branch.
5. Enable preview deployments for pull requests.

Hosting, production deployments, and preview deployments fit within the normal
Cloudflare Pages free plan limits for a site of this size.

### Refresh the calendar every six hours

The calendar is embedded during a build. To refresh it without a content change:

1. Create a production deploy hook in the Cloudflare Pages project settings.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
3. Add the hook URL as the repository secret `CLOUDFLARE_DEPLOY_HOOK_URL`.
4. Run the `Refresh calendar` workflow manually once to verify it.

GitHub Actions then triggers a fresh production build every six hours. The URL
is a secret because anyone with the deploy hook can trigger a build.

## Calendar behavior

`src/lib/calendar.ts`:

- fetches the public ICS feed during the Astro build,
- repairs the feed's double-encoded German characters,
- removes cancelled and past events while retaining today's all-day events,
- sorts upcoming events, and
- displays the next six entries in Europe/Vienna time.

A failed calendar request fails the build instead of silently publishing an
apparently current but incomplete calendar.
