# Astro Best Practices

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
[![skills.sh](https://skills.sh/b/ignaciobockl/astro-best-practices)](https://skills.sh/ignaciobockl/astro-best-practices)
[![Version](https://img.shields.io/badge/version-0.2.1-blue.svg)](./CHANGELOG.md)
[![Contributing](https://img.shields.io/badge/contributions-welcome-green.svg)](./CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/code%20of%20conduct-enforced-blue.svg)](./CODE_OF_CONDUCT.md)

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

## Structure

```
astro-best-practices/
├── skills/
│   └── astro-best-practices/  # Skill package (npx skills compatible)
│       ├── SKILL.md           # Skill definition and frontmatter
│       ├── rules/             # Best practice rules and explanations
│       ├── snippets/          # Copy-paste ready code snippets
│       ├── test-cases/        # Trigger / non-trigger examples
│       │   ├── trigger/       # Good patterns
│       │   └── non-trigger/   # Anti-patterns
│       └── eval/              # Evaluation criteria
```

## Quick Start

1. Review the `skills/astro-best-practices/rules/` directory for detailed best practices
2. Copy snippets from `skills/astro-best-practices/snippets/` into your project
3. Use test cases to validate implementations
4. Apply evaluation criteria from `skills/astro-best-practices/eval/`

**SKILL.md new sections (v0.2.1+):**
- `When to use` — explicit scenarios for this skill
- `Example` — minimal type-safe content collection + island component
- `Badges` — version, license, CI status

### Example: Content Collection

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  })
});

export const collections = { blog };
```

### Example: Island Hydration

```astro
---
// Components rendered only on client when needed
import Counter from '../components/Counter.jsx';
---
<Counter client:visible />
```

## Examples

See `skills/astro-best-practices/test-cases/trigger/` for examples that follow best practices and `skills/astro-best-practices/test-cases/non-trigger/` for common anti-patterns.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding rules, snippets, and tests. We follow Conventional Commits and require PRs to `develop`.

## Code of Conduct

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md). We are committed to a harassment-free experience for everyone.

## License

MIT © Astro Community. See [LICENSE.md](./LICENSE.md) for details.
