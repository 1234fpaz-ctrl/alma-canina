import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Modelo de datos de Alma Canina.
 * Cada colección vive en src/content/<colección>/ como archivos Markdown
 * y se edita desde /admin (Sveltia CMS) sin tocar código.
 */

const link = z.object({ label: z.string(), url: z.string() });
const optionalString = z.string().optional().default('');

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['educacion', 'tutor-perro', 'cursos', 'spa', 'bienestar', 'eventos']),
    order: z.number().default(10),
    tagline: z.string(),
    summary: z.string(),
    items: z.array(z.string()).default([]),
    image: optionalString,
    imageAlt: optionalString,
    photoHint: optionalString,
    price: optionalString,
    schedule: optionalString,
    note: optionalString,
    ctaLabel: z.string().default('Quiero saber más'),
    interest: z.string().default('Otro'),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: optionalString,
    duration: optionalString,
    capacity: optionalString,
    price: optionalString,
    location: z.string().default('Alma Canina, Tenjo'),
    dogsAllowed: optionalString,
    status: z.enum(['proximamente', 'abiertas', 'agotado', 'finalizado']).default('proximamente'),
    summary: z.string(),
    image: optionalString,
    imageAlt: optionalString,
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'bienestar',
      'comportamiento',
      'primeros-auxilios',
      'convivencia',
      'educacion-positiva',
      'cuidados',
      'tenencia-responsable',
      'legislacion',
      'actividades',
    ]),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Equipo Alma Canina'),
    image: optionalString,
    imageAlt: optionalString,
    featured: z.boolean().default(false),
    relatedLaws: z.array(z.string()).default([]),
    sources: z.array(link).default([]),
    draft: z.boolean().default(false),
  }),
});

const laws = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/laws' }),
  schema: z.object({
    title: z.string(),
    popularName: z.string(),
    type: z.literal('Ley').default('Ley'),
    lawNumber: z.string(),
    year: z.number(),
    status: z.string().default('Vigente'),
    sanctionDate: z.string(),
    publication: optionalString,
    topic: z.string(),
    summary: z.string(),
    problem: z.string(),
    keyChanges: z.array(z.string()).default([]),
    beneficiaries: z.array(z.string()).default([]),
    obligations: z.array(z.string()).default([]),
    citizenMeaning: optionalString,
    citizenTools: z.array(z.string()).default([]),
    routes: z
      .array(z.object({ situation: z.string(), steps: z.array(z.string()) }))
      .default([]),
    authorities: z.array(z.object({ name: z.string(), role: z.string() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    officialDocument: link.optional(),
    pedagogicalSource: link.optional(),
    sources: z.array(link).default([]),
    tags: z.array(z.string()).default([]),
    almaRelevance: optionalString,
    featured: z.boolean().default(false),
    order: z.number().default(10),
    lastUpdated: z.coerce.date(),
  }),
});

export const BILL_STAGES = [
  'radicacion',
  'comision',
  'plenaria',
  'otra-camara',
  'conciliacion',
  'sancion',
] as const;

const bills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bills' }),
  schema: z.object({
    title: z.string(),
    popularName: z.string(),
    type: z.literal('Proyecto de Ley').default('Proyecto de Ley'),
    projectNumber: z.string().default('Pendiente de verificación'),
    legislature: z.string().default('Pendiente de verificación'),
    status: z.string().default('Pendiente de verificación'),
    verified: z.boolean().default(false),
    chamber: z.string().default('Pendiente de verificación'),
    stage: z.enum(BILL_STAGES).default('radicacion'),
    summary: z.string(),
    objective: z.string(),
    keyPoints: z.array(z.string()).default([]),
    whyItMatters: optionalString,
    authors: z.array(z.string()).default([]),
    lastMovement: optionalString,
    lastMovementDate: z.coerce.string().optional().default(""),
    nextSteps: optionalString,
    timeline: z.array(z.object({ date: z.coerce.string(), event: z.string() })).default([]),
    documents: z.array(link).default([]),
    sources: z.array(link).default([]),
    tags: z.array(z.string()).default([]),
    order: z.number().default(10),
    lastUpdated: z.coerce.date(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: optionalString,
    order: z.number().default(10),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    dogName: optionalString,
    quote: z.string(),
    photo: optionalString,
    draft: z.boolean().default(false),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(10),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.coerce.date(),
  }),
});

export const collections = {
  experiences,
  events,
  articles,
  laws,
  bills,
  team,
  testimonials,
  faqs,
  pages,
};
