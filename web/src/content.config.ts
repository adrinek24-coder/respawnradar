import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '{de,en,pl}/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    lang: z.enum(['de', 'en', 'pl']),
    category: z.enum(['game', 'hardware', 'deals']),
    tags: z.array(z.string().min(1)).min(1),
    affiliateQuery: z.string().min(1),
    faq: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(1),
  }),
});
export const collections = { posts };
