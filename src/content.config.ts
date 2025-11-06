// content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// BLOG (as you have it)
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      // Optional extras if you want them later:
      tags: z.array(z.string()).optional(),
      author: z.string().optional(),
      readingTime: z.string().optional(),
    }),
});

// STATIC PAGES (new)
const staticPages = defineCollection({
  loader: glob({ base: './src/content/static', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    badge: z.string().optional(),
    breadcrumbs: z
      .array(z.object({ label: z.string(), href: z.string().optional() }))
      .optional(),
    lastUpdated: z.coerce.date().optional(),
    toc: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
  }),
});

export const collections = { blog, static: staticPages };
