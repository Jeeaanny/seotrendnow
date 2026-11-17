# SEOTrendNow

Portfolio site for Jean Jumamoy, SEO strategist. Live at **https://seotrendnow.online**.

Built with Astro, hosted on Cloudflare Workers (same setup as CDO Biz). Every push to `main` rebuilds and redeploys.

- **Forms:** Formspree (`https://formspree.io/f/xljjajey`), sent in the background so visitors stay on the page
- **Booking:** Calendly (`https://calendly.com/seotrendnow/30min`)
- **Contact details, links, menu:** `src/consts.ts`

---

## Going live: the PRELAUNCH switch

`src/consts.ts` has `PRELAUNCH = true`. While it's on:

- every page has `noindex`, so Google won't index pages that still show `[placeholders]`
- the sample case studies and sample blog posts are visible so you can review the layout

When your real numbers, case studies and first posts are in, set `PRELAUNCH = false`.
Samples disappear automatically and every page becomes indexable. Then submit
`https://seotrendnow.online/sitemap-index.xml` in Google Search Console.

---

## House style

- **One heading per section.** No small label (eyebrow) above a heading that repeats or introduces it. The heading says it on its own.
- **Images:** descriptive kebab-case file names (never `cover.png` or `IMG_1234.jpg`), alt text on every image, PNG or JPG source files. The build serves them as responsive WebP automatically, and social share images as 1200x630 JPG.

## Adding a blog post (3 a month)

Create one Markdown file in `src/content/posts/`. The file name becomes the URL:
`src/content/posts/gbp-categories-guide.md` → `/blog/gbp-categories-guide/`

```markdown
---
title: "How to Choose Google Business Profile Categories"
description: "Meta description, 140 to 160 characters."
subtitle: "Optional one-line promise under the headline."
date: 2026-11-20
category: "Local SEO"   # Local SEO | Technical SEO | Content Strategy | AI Search | Case Notes
image: ./images/gbp-categories-guide/gbp-categories-guide.png   # optional, 1200 × 630, named after the post
imageAlt: "Describe the image"
takeaways:
  - "Direct, quotable answer one"
  - "Answer two"
faqs:
  - q: "A question people also ask"
    a: "A 40 to 60 word answer."
---

Intro paragraph that answers the question straight away.

## A heading phrased like the search

Body copy. Each `##` heading appears in the "On this page" box automatically.

> **Pro tip:** blockquotes render as the yellow tip box.
```

The listing, pagination, footer "Latest from the blog", sitemap, llms.txt and
schema (BlogPosting + FAQPage) all update on their own.

## Adding a case study

Copy any file in `src/content/case-studies/`, rename it (the name becomes `/results/<name>/`),
replace the bracketed text, and remove `sample: true`. `order` sets its position on the
Results page; `featured: true` puts it in the "Behind the strategy" slot. Screenshots go next
to the file and are referenced like `cardImage: ./images/clinic-gsc.png`.

## Editing page copy

Home, About, Services, FAQ and Contact are in `src/pages/*.astro`. Edit the text directly.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Node 20 or newer.

## Hosting

`wrangler.jsonc` serves `dist/` on Cloudflare Workers with the custom domains
`seotrendnow.online` and `www.seotrendnow.online`. `worker/index.js` redirects http:// and www to https://seotrendnow.online.
