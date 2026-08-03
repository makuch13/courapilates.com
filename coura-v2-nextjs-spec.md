# Coura Pilates V2 — Next.js Structural Spec

> **Reconstructed 2026-08-03** from the shipped codebase at commit `8167e57`
> ("Website v2"), cross-referenced against `audit.md`. The original spec was
> lost in the Aug 2 home-directory incident. This document describes the site
> **as built**, and is authoritative going forward.

---

## 1. Purpose

Replace the Squarespace site at courapilates.com with a Next.js application
that (a) fixes the conversion bugs found in the w1 audit, (b) adds the trust
content a private studio needs, and (c) serves as a portfolio-grade build.

**The audit findings this rebuild is designed to close:**

| Audit finding | How V2 resolves it |
|---|---|
| Book buttons resolve to an empty link | Every CTA routes through `bookingUrl()` in `content/site.ts`. One source, no dead links possible. |
| Placeholder testimonials from a coaching company | `content/testimonials.ts` holds three real, attributed client quotes. |
| `/offerings` vs `/services`, `/appointments-4` vs `/programs` | Five canonical routes. Nav defined once in `content/site.ts`. |
| Brand spelled three ways | `site.name` is the only spelling. Never hardcode it in a component. |
| Generic title tag | Template in `app/layout.tsx`: `{name} \| Private Pilates Studio in {city}, {region}`. |
| Near-zero indexing | `app/sitemap.ts`, `app/robots.ts`, and JSON-LD via `lib/schema.tsx`. |
| First-timer on-ramp buried | `IntroSeries` sits third on the homepage, directly under the hero. |

---

## 2. Stack

- **Next.js 16.2.12** — App Router, Turbopack
- **React 19.2**
- **TypeScript 5.7** — `strict: true`, path alias `@/*` → project root
- **Tailwind v4** via `@tailwindcss/postcss` (CSS-first config, no JS config file)
- **Vercel** — deployment target
- **Fonts:** Fraunces (display) + Inter (body), self-hosted via `next/font/google`

---

## 3. Routes

| Route | File | Title | Notes |
|---|---|---|---|
| `/` | `app/page.tsx` | default | 12 stacked sections, order below |
| `/method` | `app/method/page.tsx` | The Method | Pillars + instructor + full testimonials |
| `/sessions` | `app/sessions/page.tsx` | Sessions & Pricing | All four offerings, full detail |
| `/faqs` | `app/faqs/page.tsx` | FAQs | Renders `content/faqs.ts` + FAQPage JSON-LD |
| `/contact` | `app/contact/page.tsx` | Contact | |
| `/book` | `app/book/page.tsx` | Book a Session | Square embed target — only live when `bookingMode: "embed"` |
| 404 | `app/not-found.tsx` | — | |
| `/sitemap.xml` | `app/sitemap.ts` | — | Generated from a route array |
| `/robots.txt` | `app/robots.ts` | — | |
| `POST /api/subscribe` | `app/api/subscribe/route.ts` | — | Email capture, Resend-backed |

### Homepage section order

Deliberate. First-timer on-ramp is high; social proof follows the story.

```
1  Hero              7  PricingPreview   (new in V2)
2  Marquee           8  TestimonialWall
3  IntroSeries       9  StudioStrip      (new in V2)
4  MethodPillars    10  InstagramStrip   (new in V2)
5  Instructor  (new) 11  LeadMagnet      (new in V2)
6  FirstSession(new) 12  CtaBand
```

`Instructor` was the single largest gap on the Squarespace site — a private
studio sells the instructor before it sells the method.

---

## 4. Content model

All copy lives in `content/`. **Components render; they never author copy.**
This is what makes the site editable without touching JSX.

| File | Exports | Purpose |
|---|---|---|
| `site.ts` | `site`, `nav`, `bookingUrl()`, `bookingIsInternal()` | Brand, URLs, booking config, navigation |
| `method.ts` | `pillars`, `firstSession`, `instructor`, `marqueeItems`, `equipment` | Method and instructor content |
| `sessions.ts` | `Session`, `sessions`, `featuredSessions` | Pricing, typed |
| `faqs.ts` | `Faq`, `faqs` | Q&A, feeds FAQ schema |
| `testimonials.ts` | `Testimonial`, `testimonials` | Real client quotes, short + full versions. Drives the homepage gallery — add entries here, nothing else changes. |
| `gallery.ts` | `Tile`, `instagramTiles` | Curated photo tiles for the Follow along rail |

### Pricing (source of truth: `content/sessions.ts`)

| Offering | Price | Structure |
|---|---|---|
| New Client Introduction | $360 | 3 × 55-min private — **featured** |
| Private Session | $130 | 55 min, 1:1 |
| Session Series | from $115/ea | 6 / $750 · 12 / $1,440 · 24 / $2,760 |
| Monthly Practice | from $480/mo | 4 / $480 · 8 / $920, auto-renews |

---

## 5. Booking architecture

The most important subsystem — it is the site's only conversion event.

**Single source:** `content/site.ts` → `bookingUrl(service?)`.
Nothing else may construct a booking link.

**Two modes**, switched by `site.bookingMode`:

- `"square"` *(current default)* — CTAs jump to Square's hosted booking page.
  Known-good; use until `/book` is phone-tested.
- `"embed"` — CTAs go to `/book`, which renders `SquareWidget` in-page.

**Env override:** `NEXT_PUBLIC_SQUARE_BOOKING_URL`. The real Square URL is
hardcoded as the fallback so **buttons still work if the env var is missing** —
a direct guard against repeating the audit's dead-button failure.

**Known Square limitation (documented in code):** Square Appointments cannot
preselect a service via URL. The `service` argument to `bookingUrl()` is
therefore unused for routing and exists only to pass intent to analytics.
Real preselection needs the Square Bookings API — Tier 2 work.

---

## 6. Components

**Chrome:** `AnnouncementBar` · `Header` · `Footer` · `StickyCta`
(mobile persistent book bar) — all mounted in `app/layout.tsx`.

**UI primitives** (`components/ui/`):
- `Button`, `ButtonOutline`, `TextLink` — all accept an `event` prop and fire
  analytics on click. Use these instead of raw `<a>` for any CTA.
- `Section`, `Container`, `Eyebrow` — layout scaffolding
- `Marquee`, `Reveal` — motion
- `ScrollRail` — horizontal scroll-snap rail. Arrows render **only on overflow**, so a
  three-item list looks like a plain row rather than a broken carousel. Touch
  swipes, keyboard arrow-keys via a focusable scroll region, buttons for pointer.
  Shared by `TestimonialWall` and `InstagramStrip`; use it for any future gallery.

**Sections** (`components/sections/`) — one per homepage block, listed in §3.

**Client components** (`"use client"`): `AnnouncementBar`, `Header`,
`StickyCta`, `SquareWidget`, `Button`, `Reveal`, `ScrollRail`, `LeadMagnet`,
`MethodPillars`. Everything else is a Server Component.

---

## 7. Design tokens

Defined in `app/globals.css`. Do not introduce hex values in components.

```
--color-bone     #F5F1EA   page background
--color-warm     #FBFAF7   raised surfaces
--color-ink      #1F1C18   primary text
--color-inksoft  #4A453E   secondary text
--color-muted    #8C857A   tertiary / meta
--color-clay     #A8785C   accent, primary CTA
--color-sage     #7C8471   secondary accent
--color-line     #E2DCD1   hairlines, borders

--font-display   Fraunces  headings
--font-body      Inter     body
```

---

## 8. SEO & structured data

- **Metadata:** `metadataBase` + title template in `app/layout.tsx`; each page
  sets its own `title` and `description` from `site` values.
- **`businessSchema()`** — `HealthAndBeautyBusiness`, using `areaServed`
  (Lakeway / Bee Cave / Austin) rather than a public `address`, because the
  home studio address is private and shared only at booking.
  `makesOffer` is generated from `sessions`.
  **`aggregateRating` is deliberately omitted** until real Google reviews
  exist. Do not fabricate it.
- **`faqSchema()`** — filters out any answer containing `[TODO`, so unfinished
  content can never leak into structured data.
- Sitemap and robots are generated, not static.

---

## 9. Analytics

`lib/analytics.ts` defines a typed `CouraEvent` union and a `track()` helper
that forwards to `gtag` and logs in development.

Events: `book_click` · `consult_click` · `quiz_started` · `quiz_completed` ·
`email_captured` · `pricing_viewed`.

Every event carries a `placement` string. That field is the point — it is what
lets you answer *"is the hero, the pricing card, or the sticky mobile bar
actually driving bookings?"* This is the measurement half of the w2 task.

---

## 10. Accessibility

- Skip-to-content link, first focusable element in `<body>`
- Single `<main id="main">` landmark
- Every image in `content/` carries an `alt` alongside its URL
- Focus states use `focus:not-sr-only` on the skip link

---

## 11. Constraints & open items

### Trademark — gates the domain cutover

"COURA" is a **live registered trademark in Class 041 (fitness instruction)**
held by HCL Designs, LLC. The brand name is isolated in `site.name` precisely
so a forced rename is a one-line change rather than a rebuild.

**Do not point courapilates.com at this deployment until an IP attorney has
cleared the name.** Deploying to a `.vercel.app` preview URL is fine.

### Employment — cleared 2026-08-03

The bio names Equinox, Forma Pilates, and Lifetime South Lamar, and one
testimonial describes a client who followed Courtney from Equinox to her own
studio. This was reviewed and **cleared**:

- The studio sits outside the geographic radius of any applicable restriction.
- The testimonial was given by the client *after* Courtney left Equinox.

No change needed. Recorded here so the question is not reopened every time
someone reads the bio. Revisit only if the copy adds a *current* employer or a
client relationship that began before a departure date.

### `[TODO]` markers that must clear before launch

| Location | Item |
|---|---|
| `content/method.ts` | ✅ **Done** — real name, credentials, and bio supplied 2026-08-03 |
| `content/method.ts` | `instructor.quote` — one line in Courtney's own first-person voice. Optional; the section renders without it. |
| `content/faqs.ts` | Cancellation policy |
| `content/faqs.ts` | Duets — confirm and price. Highest revenue-per-hour format given studio space. |
| `content/site.ts` | Confirm `hello@courapilates.com` is real |
| `next.config.ts` | Images still hotlink `images.squarespace-cdn.com`. Move to `/public` before launch. |

### Missing infrastructure

- `public/` is empty — no favicon, no OG image, no local photography
- No `.env.example` despite the README referencing one
- No test suite

---

## 12. Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SQUARE_BOOKING_URL` | No | Overrides the hardcoded Square URL |
| `RESEND_API_KEY` | No | Email capture; route no-ops without it |
| `RESEND_AUDIENCE_ID` | No | Resend audience for `/api/subscribe` |

Nothing is required for a first deploy. The site builds and books correctly
with zero environment variables set.

---

## 13. Roadmap

**Tier 2 — Square Bookings API.** Replaces the hosted flow with in-app
booking and enables real service preselection.

**Deferred:** the session-recommendation quiz (`quiz_started` /
`quiz_completed` events are already defined for it), real photography,
Google Business Profile integration.
