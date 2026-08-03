# Coura Pilates — V2

Next.js 16 rebuild of courapilates.com. Design language follows the FORM and
Soul Sync Body references; structure follows `coura-v2-nextjs-spec.md`.

**Stack:** Next.js 16.2.12 (App Router, Turbopack) · React 19.2 · TypeScript · Tailwind v4 · Vercel

---

## Run it

```bash
npm install
cp .env.example .env.local     # optional for local dev
npm run dev                    # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

Or push to GitHub and import the repo at vercel.com/new — Next.js is detected
automatically, no build config needed.

**Set this environment variable in Vercel** (Project → Settings → Environment Variables):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SQUARE_BOOKING_URL` | Your Square Appointments booking URL |

Everything else in `.env.example` is for later phases and can stay empty.

---

## Swap these before launch

Five placeholders, all clearly marked. Nothing else is stubbed.

**1. Courtney's credentials — `content/method.ts` → `instructor`**
Every `[BRACKETED]` value. This is the highest-value edit in the project:
specific credentials ("comprehensively certified through X, 8 years teaching")
convert far better than vague ones. Also set her last name.

**2. Images — currently pulled from the Squarespace CDN**
`next.config.ts` allows `images.squarespace-cdn.com` so the site looks right on
first run. Before launch, move the real photos into `/public`, update the `src`
values in `content/method.ts` and the section components, and delete the
`remotePatterns` entry.

**3. Hero video — `components/sections/Hero.tsx`**
Currently a static image. Swap for `<video>` with `poster` and
`preload="none"`, and keep the static image under 640px. Do not ship video to a
phone on cellular — that is where the reference sites' video heroes would blow
your performance budget.

**4. Two FAQ answers — `content/faqs.ts`**
Cancellation policy and the duets question are marked `[TODO]`. They are
filtered out of the FAQ JSON-LD automatically until you fill them in, so
nothing broken ships to Google.

**5. Contact email — `content/site.ts`**

---

## Architecture notes

**`content/site.ts` holds the brand name in one constant.** "COURA" is a live
registered trademark in Class 041 (fitness instruction) held by another party.
If the IP attorney says rename, it is a one-line change plus new artwork. Never
hardcode the name in a component.

**Booking is Tier 1 (deep links).** Every CTA is an `<a>` to Square with the
service preselected. No iframe — iframing Square's booking site breaks the back
button and mobile scroll. Tier 2 (on-domain booking via Square's Bookings API,
which is on Square's *free* plan) is week 10 in the tracker.

**Analytics events are typed** in `lib/analytics.ts`. Every CTA passes a
`placement`, so you can tell whether the hero, the pricing cards, or the sticky
mobile bar is doing the work. Wire `gtag` in `app/layout.tsx` — or swap the
`track()` body for Vercel Analytics' `track()`.

**Structured data** ships `HealthAndBeautyBusiness` with `areaServed` (service-area
business, not a storefront — the address is private) and `FAQPage` on `/faqs`.
`aggregateRating` is deliberately omitted until there are real Google reviews.

**Motion** respects `prefers-reduced-motion` in `globals.css` — marquee, scroll
reveals, and smooth scrolling all disable.

---

## Homepage section order

1. Announcement bar · 2. Hero · 3. Marquee · 4. Intro series *(moved up)* ·
5. Method pillars *(tabbed)* · 6. **Meet Courtney** *(new)* · 7. First session *(new)* ·
8. Pricing preview *(new)* · 9. Testimonials · 10. Studio *(new)* ·
11. Instagram *(new)* · 12. Email capture *(new)* · 13. Final CTA

---

## Verified

`npm run build` passes clean: 10 routes, 8 prerendered static, TypeScript with
`strict: true`. Built and tested on Node 22.
