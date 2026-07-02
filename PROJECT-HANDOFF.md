# CyberCap Website — Project Handoff / Context Summary

This document summarizes a working session in which a lead-generation website was designed and built for a cybersecurity consulting agency. Paste it into another AI model to continue the work with full context.

---

## 1. Business context

- **Company:** CyberCapital, branded/shortened to **CyberCap**. Canonical brand + domain: **cybercap** (the full "cybercapital" domain should 301-redirect to it).
- **Founder:** Hendrik Sleeckx (operates/has operated via "Legile / InfoSentry" per internal notes).
- **Business:** Cybersecurity & compliance consulting. Purpose of the site is **lead generation only**.
- **Three service pillars:**
  1. Compliance Assessments & Audits
  2. Compliance Implementation
  3. Operational Cybersecurity & Manpower (vCISO / interim / advisory)
- **Audience:** Belgium / EU decision-makers. Site language: **English**. Positioning anchored on EU frameworks: **NIS2, GDPR, ISO/IEC 27001, DORA**.

## 2. Real experience (pulled from the founder's Notion "Security Consulting Hub")

Used to make the copy concrete. Kept **high-level / not too personal**, and **client names are NOT shown publicly** (sector-based proof only, pending written consent).

- **7+ active engagements** across sectors: aviation/aerospace software, fintech & financial services, insurance/benefits, telecom, IT & managed services, identity/KYC tech.
- **Frameworks delivered:** ISO/IEC 27001, ISO 9001, NIS2, DORA, GDPR, CyberFundamentals (CyFun), BCP/BCM, aviation safety (ED-153 / ED-109A).
- **Roles held:** vCISO / CISO-as-a-Service, virtual DPO (vDPO), ISMS Manager, Compliance Manager, audits, assessments, advisory.
- Anonymized proof snippets used on the site: aviation ISO 9001/27001 QMS/ISMS; DORA programme lead for a fintech (NBB deadlines); NIS2 programme for a managed-services/telecom provider; CISO-as-a-Service for an insurance/benefits org.

> ⚠️ Naming clients publicly is sensitive in security/compliance work. Default is sector-based proof; only add named logos/case studies with per-client written consent.

## 3. Key decisions made

- **Deliverable path:** architecture doc → full page copy → starter brand → hand-coded site → legal pages + lead capture.
- **Tone:** approachable & advisory.
- **Voice:** "we" (small expert team), with a founder-forward About page.
- **Tech stack:** hand-coded **Astro + Tailwind CSS** (static output), hosted on Netlify/Vercel/Cloudflare Pages.
- **Analytics:** planned to be privacy-friendly (Plausible/Fathom) to avoid cookie-consent friction — not yet added.

## 4. Starter brand (generated this session)

- **Logo concept:** a shield (security) with a negative-space "C" and a node dot; wordmark splits **Cyber** (navy) + **Cap** (teal).
- **Files:** `brand/logo-full.svg`, `brand/logo-full-inverse.svg` (for dark bg), `brand/logo-mark.svg`; also copied into `public/brand/` and used as `public/favicon.svg`.
- **Palette:** Ink Navy `#0A2540`, Teal Accent `#17B6A7`, Link Blue `#1E6FD9`, Slate `#5B7083`, Mist BG `#F5F8FA`, Cloud border `#E1E8ED`.
- **Type:** Inter (Google Fonts).
- This is a launch-ready starter; can be replaced by a commissioned logo later.

## 5. What was built (site structure)

Astro project at repo root. Verified to build cleanly: **11 pages + sitemap**.

```
src/
  data/site.ts            → name, contact placeholders, nav, services, lead-capture config
  data/serviceDetails.ts  → full copy for the 3 pillar pages
  layouts/Base.astro      → <head>, SEO meta, Open Graph, Organization JSON-LD, header/footer, skip-link
  layouts/Legal.astro     → wrapper for legal pages
  components/Header.astro  (sticky nav + mobile menu + CTA)
  components/Footer.astro  (services, company, contact, legal links)
  components/ServiceCard.astro
  components/CTABand.astro
  components/Icon.astro    (inline SVG icon set)
  pages/index.astro        → hero, trust strip, 3 pillars, why-us, how-we-work (4 steps), sector proof, CTA
  pages/services/index.astro         → services hub
  pages/services/[slug].astro        → dynamic pillar pages (3)
  pages/about.astro
  pages/contact.astro      → form + Cal.com embed
  pages/privacy.astro / cookies.astro / terms.astro   → GDPR templates
  pages/404.astro
  styles/global.css        → Tailwind + brand component classes (.btn-*, .h1/.h2, .legal, etc.)
public/
  brand/ (logos), favicon.svg, robots.txt
astro.config.mjs (site URL + tailwind + sitemap integrations)
tailwind.config.mjs (brand colors, Inter font, max-w-content)
```

- **SEO:** per-page title/description, canonical URLs, Open Graph, Organization schema, auto sitemap (`@astrojs/sitemap`), robots.txt.
- **Legal pages:** privacy / cookies / terms as GDPR-appropriate **templates** with bracketed placeholders and a "have this reviewed" note. Cover data controller, legal bases, retention, data subject rights, Belgian DPA, processors, cookieless-analytics stance.

## 6. Lead capture (wired, needs credentials)

All configured in `src/data/site.ts`:
- `formspreeId` — Formspree form ID. Contact form submits via AJAX with an inline success/error message + honeypot anti-spam. Blank → shows a "not configured" notice.
- `calLink` — Cal.com booking slug (e.g. `cybercap/intro-call`). Set → inline scheduler embeds on the contact page; blank → "Open scheduler" button links to `bookingUrl`.

## 7. Dependency versions (important)

- `astro ^4.16.18`, `@astrojs/tailwind ^5.1.4`, `tailwindcss ^3.4.17`.
- **`@astrojs/sitemap` pinned to exactly `3.2.1`** — newer 3.7.x targets Astro 5 and throws `Cannot read properties of undefined (reading 'reduce')` on the Astro-4 build hook. Do not bump without also upgrading Astro.

## 8. Known environment gotcha (OneDrive)

The project folder is OneDrive-synced. During the build, the Linux sandbox occasionally read **half-synced / placeholder** copies of just-edited files, causing false errors (a null byte appended to `package.json`; a truncated `site.ts`; a truncated `global.css`). The authoritative files are correct; the build was verified against clean copies.
**Recommendation:** develop from a non-synced folder (e.g. `C:\dev\cybercap`), or pause OneDrive sync while running `npm install` / `npm run dev`. `node_modules` and `dist` are gitignored.

## 9. Run & deploy

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → /dist
npm run preview
```
Deploy: connect repo (or drag/drop `/dist`) to Netlify/Vercel/Cloudflare Pages. Build cmd `npm run build`, publish dir `dist`. Add domain + HTTPS.

## 10. Outstanding TODOs before launch

1. Fill real contact details in `src/data/site.ts` (email, phone, address, BE VAT).
2. Set canonical domain in `astro.config.mjs` (`site:`), point DNS, 301-redirect the other domain.
3. Set `formspreeId` + `calLink`; test a real submission and a booking.
4. Add Plausible/Fathom analytics snippet in `src/layouts/Base.astro`.
5. Complete + legally review the privacy/cookies/terms placeholders.
6. Add formal certifications (if any) in `src/pages/about.astro`.
7. Add a real testimonial to the home page once available.
8. Optional Phase 2: Insights/blog for SEO, named case studies (with consent), lead magnet (e.g. "NIS2 readiness checklist").

## 11. Supporting docs produced this session (in the outputs folder, not the site)

- `cybercap-site-architecture.md` — sitemap, page plan, SEO, phasing.
- `cybercap-website-copy.md` — full drafted copy for every page + SEO meta + client-naming note.
- `brand/brand-guide.md` — logo usage + palette + typography.
