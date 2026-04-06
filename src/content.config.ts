import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Importante en Astro 5

const animaciones = defineCollection({
  // El loader le dice a Astro dónde buscar los archivos Markdown
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/animaciones" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // Use .coerce para evitar errores de formato de fecha
    description: z.string(),
    videoUrl: z.string().url(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { animaciones };