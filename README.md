# Down By The River Development

Freelance web development site for **Down By The River Development** — a sole proprietorship by Michael Kaffel targeting small local businesses.

Live site: [downbyriverdev.com](https://downbyriverdev.com)

---

## Stack

Plain HTML · CSS · Vanilla JS — no framework, no build step.

Hosted on **Netlify**, DNS on **Cloudflare**.

---

## File structure

```
downbyriverdev.com/
├── assets/
│   ├── logo-transparent.png   # Nav logo (transparent bg)
│   ├── hero-image.png         # Full-bleed hero banner
│   ├── headshot.jpg           # About section photo
│   ├── og.png                 # 1200×630 Open Graph image
│   └── favicon.ico
├── index.html
├── style.css
└── script.js
```

---

## Design tokens

| Token | Value | Usage |
|---|---|---|
| Terracotta | `#D85A30` | Primary CTAs, accents |
| River blue | `#378ADD` | Italic headlines, links, blockquote border |
| Surface | `#f7f5f2` | Cards, logo stage, footer bg |
| Border | `#e5e5e5` | Dividers, card borders |

Headlines: Georgia serif · Body: system-ui · Mobile breakpoint: 640px

---

## Local development

No install required. Open with any static server

---

## Integrations

- **Booking:** [cal.com/downbyriverdev/30min](https://cal.com/downbyriverdev/30min)
- **Contact:** michael@downbyriverdev.com
- **Portfolio:** [michaelkaffel.com](https://michaelkaffel.com)

---

## Deployment

Deployed automatically via Netlify on push to `main`. No build command or publish directory needed (static site, files served from repo root).
