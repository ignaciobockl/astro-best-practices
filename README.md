# Astro Best Practices

A curated collection of production-ready patterns, rules, and snippets for building high-performance Astro applications.

## What it does

This repository provides reusable guidelines for:

- Islands architecture and partial hydration
- Type-safe Content Collections with Zod
- Accessible View Transitions
- Middleware patterns for auth and redirects
- Image optimization strategies
- Script loading strategies
- SEO and Core Web Vitals
- Testing with Vitest and Playwright
- Strict TypeScript configuration

## Usage

1. Review the `rules/` directory for detailed best practices
2. Copy snippets from `snippets/` into your project
3. Use test cases to validate implementations
4. Apply evaluation criteria from `eval/`

### Quick Start

```bash
# Example content collection config
import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  })
});
```

## Examples

See `test-cases/trigger/` for examples that follow best practices and `test-cases/non-trigger/` for common anti-patterns.

## Authors

Maintained by the Astro community. Contributions welcome via pull requests.

## License

MIT
