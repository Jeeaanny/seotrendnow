import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { readdirSync, readFileSync } from 'node:fs';

// Sample (placeholder) posts and case studies never go in the sitemap.
const sampleUrls = [];
for (const [dir, base] of [['./src/content/posts', '/blog/'], ['./src/content/case-studies', '/results/']]) {
  try {
    for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      if (/^sample:\s*true\s*$/m.test(readFileSync(`${dir}/${f}`, 'utf8'))) sampleUrls.push(`${base}${f.replace(/\.md$/, '')}/`);
    }
  } catch {}
}

export default defineConfig({
  site: 'https://seotrendnow.online',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // External links in blog posts and case studies open in a new tab
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
  },
  integrations: [
    sitemap({ filter: (page) => !sampleUrls.some((u) => page.endsWith(u)) }),
  ],
});
