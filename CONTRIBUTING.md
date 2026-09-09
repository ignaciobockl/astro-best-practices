# Contributing to Astro Best Practices

Thank you for your interest in contributing! This document outlines how to contribute rules, snippets, and tests to this collection.

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## How to Contribute

### Adding Rules

Rules live in `rules/`. Each rule should be a Markdown file with:
- Clear title and description
- Problem it solves
- Good/Bad examples
- References

```bash
rules/
  01-islands-architecture.md
  02-content-collections.md
```

### Adding Snippets

Snippets live in `snippets/`. Provide context, usage, and file path.

### Adding Tests

Test cases go in `test-cases/trigger/` (good) and `test-cases/non-trigger/` (bad).

## Conventional Commits

We use [Conventional Commits](https://www.conventionalcommits.org/).

Examples:
- `feat(rules): add view transitions rule`
- `fix(snippets): correct middleware example`
- `docs: update README`
- `test: add island hydration cases`

## Pull Request Process

1. Fork the repo and create a branch from `develop`: `git checkout -b feat/your-feature`
2. Make your changes
3. Ensure formatting and links are correct
4. Commit with conventional commit message
5. Push to your fork and open a PR to `develop`
6. PR requires at least one review and CI checks passing
7. Squash merge on approval

### PR Checklist

- [ ] Follows conventional commits
- [ ] Updates CHANGELOG.md under Unreleased
- [ ] Adds tests for new rules/snippets
- [ ] Documentation updated

## Questions?

Open an issue with the `question` label.
