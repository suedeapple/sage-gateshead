# Sage Gateshead

A Next.js site built for the Sage Gateshead name-change campaign. Visitors can browse and share stories about what Sage Gateshead means to them.

**Live site:** https://sage-gateshead.vercel.app

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Adobe Fonts (TypeKit) + Font Awesome 6 via CDN

## Project structure

```
app/
  components/
    Header.tsx          # Responsive header with hamburger nav
    Footer.tsx          # Footer with nav, social links, charity info
    SocialLinks.tsx     # Shared social icon links (header + footer)
    StoryWall.tsx       # Full story card grid + modals with interactions
    PlusIcon.tsx        # Reusable plus SVG icon
    QuoteIcon.tsx       # Reusable quote SVG icon
    YouTubeEmbed.tsx    # YouTube facade (thumbnail → iframe on click)
  about/page.tsx
  contact/page.tsx
  faq/page.tsx
  privacy-policy/page.tsx
  terms-conditions/page.tsx
  globals.css
  layout.tsx
  page.tsx
public/
  media/               # All images, GIFs, videos
  _assets/img/         # Decorative SVGs (quote marks)
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

The site deploys automatically to Vercel on push to `main`.
