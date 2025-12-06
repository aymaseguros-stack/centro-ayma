import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const campanas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/campanas" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    active: z.boolean().default(false),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    whatsapp: z.string().optional(),
  }),
});

const knowledge = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/knowledge" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    norma: z.string().optional(),
  }),
});

const compliance = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/compliance" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    urgente: z.boolean().default(false),
  }),
});

const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    fuente: z.string().optional(),
  }),
});

export const collections = { campanas, knowledge, legal, compliance, noticias };
