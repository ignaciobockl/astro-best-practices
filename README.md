# Astro Best Practices

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](./CHANGELOG.md)
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
├── rules/          # Best practice rules and explanations
├── snippets/       # Copy-paste ready code snippets
├── test-cases/     # Trigger / non-trigger examples
│   ├── trigger/    # Good patterns
│   └── non-trigger/# Anti-patterns
└── eval/           # Evaluation criteria
```

## Quick Start

1. Review the `rules/` directory for detailed best practices
2. Copy snippets from `snippets/` into your project
3. Use test cases to validate implementations
4. Apply evaluation criteria from `eval/`

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

See `test-cases/trigger/` for examples that follow best practices and `test-cases/non-trigger/` for common anti-patterns.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding rules, snippets, and tests. We follow Conventional Commits and require PRs to `develop`.

## Code of Conduct

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md). We are committed to a harassment-free experience for everyone.

## License

MIT © Astro Community. See [LICENSE.md](./LICENSE.md) for details.
