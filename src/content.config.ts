import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { BLOG_CATEGORIES } from './consts';

// Blog posts: one Markdown file per post in src/content/posts/. The file name becomes the URL.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),               // meta description, 140–160 characters
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      category: z.enum(BLOG_CATEGORIES as [string, ...string[]]),
      subtitle: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().default(''),
      takeaways: z.array(z.string()).default([]),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      draft: z.boolean().default(false),
      sample: z.boolean().default(false),   // placeholder post, hidden when PRELAUNCH is false
    }),
});

// Case studies: one Markdown file per client in src/content/case-studies/.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),                     // page headline
      description: z.string(),               // meta description
      summary: z.string(),                   // one sentence under the headline
      order: z.number().default(10),         // position on the Results page
      // Card on the Results page
      metric: z.string(),                    // e.g. "+62%"
      cardTitle: z.string(),                 // e.g. "organic enquiries for a multi-location clinic group"
      cardMeta: z.string(),                  // e.g. "6 months · Keyword mapping, cannibalisation fixes"
      cardImageLabel: z.string().default('Screenshot'),
      cardImage: image().optional(),
      tags: z.array(z.string()).default([]), // shown as chips and used by the filters
      // Snapshot box
      client: z.string(),
      industry: z.string(),
      market: z.string(),
      timeframe: z.string(),
      services: z.string(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      challenge: z.array(z.string()).default([]),
      steps: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      beforeImage: image().optional(),
      beforeCaption: z.string().default(''),
      afterImage: image().optional(),
      afterCaption: z.string().default(''),
      resultsText: z.string().default(''),
      quote: z.string().optional(),
      quoteName: z.string().optional(),
      quoteRole: z.string().optional(),
      takeaways: z.array(z.string()).default([]),
      featured: z.boolean().default(false),  // the "Behind the strategy" story
      draft: z.boolean().default(false),
      sample: z.boolean().default(false),
    }),
});

export const collections = { posts, caseStudies };
