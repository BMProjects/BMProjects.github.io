import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(['journal', 'conference', 'patent']),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().url().optional(),
    correspondingAuthors: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const RESEARCH_AREAS = ['hci', 'biomedical', 'green-ml', 'metrology'] as const;
export type ResearchArea = typeof RESEARCH_AREAS[number];

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    repo: z.string().url(),
    description: z.string(),
    area: z.enum(RESEARCH_AREAS),
    tags: z.array(z.string()).default([]),
    language: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const grants = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    funder: z.string(),
    amount: z.string(),
    role: z.string().default('Co-PI'),
    status: z.string().optional(),
    description: z.string().optional(),
    start: z.string(),
    end: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { publications, projects, grants };
