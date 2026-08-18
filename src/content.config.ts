import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const onboarding = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/onboarding' }),
	schema: z.object({
		title: z.string(),
		order: z.number().int().nonnegative(),
	}),
});

const faq = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
	schema: z.object({
		question: z.string(),
		order: z.number().int().nonnegative(),
		section: z.string().optional(),
	}),
});

const info = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/info' }),
	schema: z.object({
		title: z.string(),
		order: z.number().int().nonnegative(),
	}),
});

const parents = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/parents' }),
	schema: z.object({
		title: z.string(),
		order: z.number().int().nonnegative(),
	}),
});

const children = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/children' }),
	schema: z.object({
		title: z.string(),
		order: z.number().int().nonnegative(),
	}),
});

export const collections = { onboarding, faq, info, parents, children };
