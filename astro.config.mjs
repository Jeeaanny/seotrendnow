import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { readdirSync, readFileSync } from 'node:fs';

// Sample (placeholder) posts and case studies never go in the sitemap.
// Real posts get a <lastmod> from their `updated` (or `date`) frontmatter, so Google knows what changed.
const sampleUrls = [];
const lastmod = {};
for (const [dir, base] of [['./src/content/posts', '/blog/'], ['./src/content/case-studies', '/results/']]) {
  try {
    for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const src = readFileSync(`${dir}/${f}`, 'utf8');
      const url = `${base}${f.replace(/\.md$/, '')}/`;
      if (/^sample:\s*true\s*$/m.test(src)) { sampleUrls.push(url); continue; }
      const d = src.match(/^updated:\s*["']?(\d{4}-\d{2}-\d{2})/m) || src.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m);
      if (d) lastmod[url] = d[1];
    }
  } catch {}
}

export default defineConfig({
  site: 'https://seotrendnow.online',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Responsive images: every <Image> and Markdown image gets srcset/sizes, so phones load smaller files
  image: { layout: 'constrained' },
  // External links in blog posts and case studies open in a new tab
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
  },
  integrations: [
    sitemap({
      filter: (page) => !sampleUrls.some((u) => page.endsWith(u)),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (lastmod[path]) item.lastmod = new Date(`${lastmod[path]}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
});
