import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        draft: z.boolean().default(false),
        readTime: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    blog,
};