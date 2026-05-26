# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

There are no tests in this project.

## Architecture

**Vite + React SPA** deployed on Netlify. Routing uses `HashRouter` (URLs like `/#/events`) so the site works on static hosting without server-side route handling. Four routes: `/`, `/events`, `/committee`, `/contact`.

### Content vs. layout separation

All user-editable content lives in **`src/data/`** — this is the key architectural decision. Pages import from these files; the JSX components contain only layout/styling logic. When updating events, committee members, sponsors, or FAQs, only the data files need to change.

- `src/data/events.js` — upcoming journal club, featured event (Careers Evening), past events list
- `src/data/committee.js` — committee members, regional reps, faculty advisors
- `src/data/sponsors.js` — sponsor names and logo paths
- `src/data/faqs.js` — FAQ accordion items on the Contact page

### Styling

All CSS is in `src/index.css` using CSS custom properties. No CSS modules or styled-components. Styles are applied via inline `style={{}}` props throughout components (matching the original Claude Design prototype approach). The design tone is set on `<html data-tone="formal">` which switches the paper background colour and serif font variant.

Key CSS variables: `--ink`, `--navy`, `--paper`, `--muted`, `--accent`, `--rule`, `--serif-display`, `--sans`, `--mono`.

Global utility classes used in JSX: `.container`, `.container-narrow`, `.eyebrow`, `.eyebrow-dot`, `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-arrow`, `.ph` (image placeholder), `.page-enter` (route transition animation).

### Contact form

The form in `ContactPage.jsx` submits to **Netlify Forms** via a `fetch` POST to `"/"` with `application/x-www-form-urlencoded`. The `<form>` element carries `data-netlify="true"` and a hidden `<input name="form-name" value="contact" />`. This only works when deployed on Netlify — in local dev the fetch will fail silently (the UI still shows "Sent").

### Assets

Static assets (logo, images, committee portraits) live in `public/assets/`. Committee portraits go in `public/assets/committee/`. Reference them as `/assets/filename.jpg` (absolute paths from public root). The NZPSEG logo uses `mixBlendMode: "multiply"` in the nav and `mixBlendMode: "screen"` in the dark footer so it renders correctly on both light and dark backgrounds.

### NZ Map

`src/components/NZMap.jsx` is a hand-traced inline SVG of New Zealand (viewBox 0 0 400 560). City coordinates are hardcoded; dot sizes and label positions are fixed. Pass the `regional` array from `src/data/committee.js` as a prop — the component matches on `region` name to look up rep counts.

## Deployment

Netlify reads `netlify.toml` for build config. `public/_redirects` also contains the SPA fallback rule as a backup. Pushing to the `main` branch on GitHub triggers an automatic Netlify redeploy.
