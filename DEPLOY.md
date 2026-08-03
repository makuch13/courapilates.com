# Deploying Coura Pilates V2 to Vercel

Written for the state of your Mac **after** the Aug 2 incident: your SSH key
and `~/.gitconfig` are gone, so this route uses **GitHub Desktop + the Vercel
website** and never needs the Terminal for authentication.

Total time: about 15 minutes.

---

## Step 0 — Restore your git identity (one time)

Your global git config was destroyed, so git does not know who you are and
will refuse to commit. In Terminal:

```
git config --global user.name "Steve Makuch"
git config --global user.email "stevemakuch13@gmail.com"
```

**What you should see:** nothing. Silence means it worked.

---

## Step 1 — Clean up and install locally

The sandbox left a Linux-built `node_modules` in the project. Remove it and
install the macOS version:

```
cd ~/Documents/GitHub/courapilates.com
rm -rf node_modules package-lock.json .next
npm install
```

**What you should see:** `added ~48 packages`.

Then confirm the site runs:

```
npm run dev
```

**What you should see:** `Ready in ...` and a link to http://localhost:3000.
Open it. Click a **Book a session** button — it should land on your Square
booking page. Press `Ctrl + C` in Terminal to stop.

> If fonts fail to load, you are offline. They fetch at build time.

---

## Step 2 — Commit and push

Open **GitHub Desktop**. It should show `courapilates.com` with two new files:

- `.gitignore` — added today. **This is important:** without it, `node_modules`
  gets committed. That is the exact problem that started the Aug 2 mess.
- `coura-v2-nextjs-spec.md` — the reconstructed spec
- `DEPLOY.md` — this file

Summary: `Add .gitignore, reconstructed spec, deploy guide`
→ **Commit to main** → **Push origin**

**What you should see:** the changes appear at
github.com/makuch13/courapilates.com

---

## Step 3 — Import to Vercel

1. Go to **https://vercel.com/new**
2. Sign in **with GitHub** (do not use email — linking GitHub is what makes
   auto-deploy work)
3. Find **courapilates.com** in the repo list → **Import**
4. Change nothing. Vercel detects Next.js automatically. Framework preset
   should read *Next.js*; leave build and output settings on defaults.
5. Click **Deploy**

**What you should see:** a build log, then confetti and a live URL like
`courapilates-com.vercel.app`. First build takes 1–2 minutes.

> No environment variables are needed. The Square booking URL is hardcoded as
> a fallback in `content/site.ts`, so booking works on the first deploy.

---

## Step 4 — Test the deployment on your phone

This matters more than the desktop check — most of your traffic is mobile.

Open the `.vercel.app` URL on your phone and verify:

- [ ] Hero reads well on a small screen
- [ ] **Every** Book button reaches Square's booking page
- [ ] The sticky bottom Book bar appears when you scroll
- [ ] The three testimonials are the real ones (Joonas, Jayme, Jennifer) —
      no Bloom Coaching text anywhere
- [ ] `/method`, `/sessions`, `/faqs`, `/contact` all load
- [ ] Brand reads "Coura Pilates" everywhere — no "Cöura", no lowercase p

---

## Step 5 — Do NOT point the domain yet

**Stop here.** Leave the site on its `.vercel.app` URL.

"COURA" is a live registered trademark in Class 041 — fitness instruction,
the exact class covering Pilates — held by HCL Designs, LLC. Pointing
courapilates.com at a polished commercial site increases your exposure, not
just your bookings.

**Gate:** an IP attorney clears the name. Until then the Vercel URL is a
private staging site you can share with founding clients directly.

When you are cleared, the cutover is: Vercel → Project → Settings → Domains →
add `courapilates.com` → update the DNS records at your registrar as Vercel
instructs. Squarespace stays live until DNS propagates, so there is no gap.

---

## After it is live

Every push to `main` redeploys automatically. Pull requests get their own
preview URL. You never need the Vercel CLI.

### Before the real launch

Work through §11 of `coura-v2-nextjs-spec.md`:

1. **Courtney's real credentials** in `content/method.ts` — every `[BRACKETED]`
   value. Specific credentials convert far better than vague ones.
2. **Cancellation policy** and **duets** in `content/faqs.ts`
3. **Real photography** — images currently hotlink the Squarespace CDN, which
   breaks the day you cancel Squarespace. Move them to `/public`.
4. **Favicon and OG image** — `public/` is empty

### Still worth doing on the live Squarespace site

The V2 site is not public yet, so the audit's urgent items are still costing
you bookings today. On Squarespace, right now: fix the dead Book buttons and
delete the Bloom Coaching testimonials. Both are 10-minute edits.
