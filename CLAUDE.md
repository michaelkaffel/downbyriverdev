# CLAUDE.md — Down By The River Development

## Project Overview
One-page freelance web developer site for Michael Kaffel's sole proprietorship, **Down By The River Development**, at `downbyriverdev.com`. Targets small local businesses currently on Wix/Squarespace or with no site at all. Companion to `michaelkaffel.com` (dark theme, employer/developer-facing) — the two sites should feel related but visually distinct.

**Marketing philosophy:** one-time cost with no recurring fees, mobile-quality professional design, low-maintenance sites clients won't struggle with, free/open-source tooling over SaaS subscriptions, local/indie ethos. Copy is tight, plain-language, non-redundant across sections, and written to serve both prospective freelance clients and prospective employers reading the same site.

## Stack
Plain HTML + CSS + vanilla JS. No framework, no build step, no `package.json`.

## Repo & Hosting
- **Repo:** `github.com/michaelkaffel/downbyriverdev`, branch `main`
- **Local path:** `~/Documents/vs-code-repos/downbyriverdev`
- **Hosting:** Cloudflare Pages (migrated off Netlify after hitting its 100GB/month bandwidth cap, which hard-pauses the site). Deploys auto-trigger on push to `main`, live in ~30s.
- **DNS:** Cloudflare
- **Email:** `michael@downbyriverdev.com` forwards to Gmail via Cloudflare Email Routing
- **Do not migrate to Vercel** — Hobby tier has the same 100GB cap *and* prohibits commercial use. Re-check ToS/pricing before revisiting this.

## File Structure