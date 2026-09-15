---
name: astro-best-practices
description: A comprehensive skill for building production-ready Astro applications following modern best practices for performance, accessibility, SEO, and maintainability.
license: MIT
---

# Astro Best Practices

## Overview

This skill provides guidelines, patterns, and reusable snippets for developing high-quality Astro projects. It covers islands architecture, content collections, view transitions, middleware, image optimization, scripting strategies, SEO/CWV, testing, and TypeScript strict mode.

## Usage

Activate this skill in your Astro project to receive contextual guidance on architecture decisions, code patterns, and best practices.

## Key Principles

- Performance first with islands architecture
- Type-safe content with Zod schemas
- Accessible view transitions
- Secure middleware patterns
- Optimal image delivery
- SEO and Core Web Vitals
- Comprehensive testing

## Included Resources

- rules/ - Markdown documentation for each practice area
- snippets/ - Ready-to-use configuration and code templates
- test-cases/ - Examples for validation
- eval/ - Quality evaluation criteria

## When to use

Use this skill when you need to:
- Build production-ready Astro applications with **islands architecture** and partial hydration
- Implement **type-safe content collections** with Zod validation schemas
- Create **accessible view transitions** with proper reduced-motion handling
- Configure **secure middleware** for authentication, redirects, and edge functions
- Optimize **images** with Astro's built-in image integration and responsive strategies
- Structure **scripts** with optimal loading strategies (inline, module, hoisted)
- Achieve **SEO excellence** and Core Web Vitals targets (LCP, INP, CLS)
- Write **comprehensive tests** with Vitest (unit) and Playwright (e2e)
- Enforce **strict TypeScript** configuration across the project

## Example

```astro
---
// content.config.ts — Type-safe collections with Zod
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

```astro
---
// components/BlogPost.astro — Island with client:visible
import { z } from "astro:content";

const BlogPost = ({ frontmatter }: { frontmatter: any }) => (
  <article class="prose max-w-none">
    <h1>{frontmatter.title}</h1>
    <time datetime={frontmatter.pubDate.toISOString()}>
      {frontmatter.pubDate.toLocaleDateString()}
    </time>
    <div set:html={frontmatter.body} />
  </article>
);

export default BlogPost;
```

```html
<!-- Usage in page.astro -->
<BlogPost frontmatter={entry.data} client:visible />
```

---

## Badges

![Version](https://img.shields.io/github/v/tag/ignaciobockl/astro-best-practices?label=version&sort=semver)
![License](https://img.shields.io/github/license/ignaciobockl/astro-best-practices)
![CI](https://github.com/ignaciobockl/astro-best-practices/actions/workflows/ci.yml/badge.svg)
