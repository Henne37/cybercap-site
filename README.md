# CyberCap website

Lead-generation marketing site built with **Astro + Tailwind CSS**. Static output, fast, GDPR-friendly. Verified to build cleanly (8 pages + sitemap).

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to /dist
npm run preview  # preview the production build
```

> ⚠️ **OneDrive note:** installing `node_modules` inside a OneDrive-synced folder is slow and can cause file-permission errors. If you hit problems, either pause OneDrive sync while developing, or move the project to a non-synced folder (e.g. `C:\dev\cybercap`). `node_modules` and `dist` are gitignored. If an old `node_modules` folder is still here, delete it from Explorer before the first `npm install`.

## Project structure
```
src/
  data/site.ts            ← contact details, nav, services (EDIT THIS)
  data/serviceDetails.ts  ← full copy for the 3 pillar pages
  layouts/Base.astro      ← shared <head>, SEO, header/footer
  components/             ← Header, Footer, ServiceCard, CTABand, Icon
  pages/                  ← index, services, about, contact, 404
  styles/global.css       ← Tailwind + brand component classes
public/
  brand/                  ← logos
  favicon.svg, robots.txt
```

## Lead capture — all configured in one place
Open `src/data/site.ts` and fill in:
- `formspreeId` — create a free form at https://formspree.io, paste the ID (the part after `/f/`). The contact form then submits via AJAX with an inline success message. Leave blank and the form shows a "not configured" notice.
- `calLink` — your Cal.com booking slug, e.g. `cybercap/intro-call`. When set, the scheduler embeds inline on the contact page; when blank, an "Open scheduler" button links to `bookingUrl` instead.

## Before launch — TODO checklist
1. **Contact details** — edit `src/data/site.ts` (email, phone, address, VAT).
2. **Domain** — set the real canonical URL in `astro.config.mjs` (`site:`), e.g. `https://cybercap.be`. Point your domain here and 301-redirect the other domain to it.
3. **Lead capture** — set `formspreeId` and `calLink` in `src/data/site.ts` (see above). Test a real submission.
4. **Analytics** — add a Plausible or Fathom snippet in `src/layouts/Base.astro` (GDPR-friendly, no cookie banner needed).
5. **Legal pages** — `/privacy`, `/cookies`, `/terms` are included as **templates** (linked in the footer). Fill the bracketed placeholders and have them reviewed by a professional before relying on them.
6. **Certifications** — add any you hold in `src/pages/about.astro` (marked with a TODO comment).
7. **Testimonial** — add a real quote on the home page when you have one.
8. **Logo** — current logo is the starter wordmark in `public/brand/`. Swap if you commission a new one.

## Deploy (recommended: Netlify, Vercel, or Cloudflare Pages)
- Connect the repo (or drag-and-drop `/dist`).
- Build command: `npm run build` · Publish directory: `dist`.
- Add your domain + HTTPS (automatic on all three).
