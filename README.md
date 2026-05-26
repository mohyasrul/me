# Algorhytme Portfolio v2

Premium static portfolio for **Mohammad Yasrul** — Product Builder.

## What Changed (v2.0)

- **Build system** — Tailwind CSS via PostCSS (no more CDN, ~16KB output vs 500KB)
- **SEO** — Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Consistent dark theme** — All project pages now share the same design system
- **Hero visual** — Texty Chrome Extension screenshot floating mockup
- **Case study format** — Problem → Solution → Result for every project
- **Resume section** — Profile photo, skills, service offerings, CV download
- **Micro-blog** — Writing section with 3 initial posts
- **Footer** — Navigation, social links, copyright
- **Accessibility** — Skip link, ARIA labels, focus styles, WCAG AA contrast
- **Animations** — Scroll reveal with Intersection Observer
- **Mobile responsive** — Hamburger menu, fluid typography
- **Project filtering** — Filter by category (All / Live / Client / Case Study)

## Tech Stack

- HTML5 + Tailwind CSS 3 (PostCSS build)
- Vanilla JavaScript (no framework)
- Deployed on GitHub Pages

## Build

```bash
npm install
npm run build:css    # Build Tailwind CSS
```

## Files

- `index.html` — Main landing
- `projects/*.html` — Individual project case studies
- `src/input.css` — Tailwind input with custom base styles
- `dist/style.css` — Built & minified CSS
- `assets/` — Screenshots, logo, profile photo

## TODO

- [ ] Create `assets/cv-mohammad-yasrul.pdf` for the CV download button
- [ ] Set up custom domain (algorhytme.site) with GitHub Pages
- [ ] Write full blog posts for the 3 micro-blog entries

## Live

**https://mohyasrul.github.io/me/**