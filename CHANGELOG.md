# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - 2026-09-15

### Added
- `eval/quantitative-metrics.yaml` updated with `snippets_with_tests` metric (> 80% target)
- Complete quantitative evaluation: 7 metrics CON-vs-SIN with valid deltas (islands_hydration_ratio, build_time, lcp, cls, inp, snippets_with_tests, typescript_errors)
- All 7 metrics PASS targets in CON-skill configuration
- Consistent artifacts across summary.json, compare.md, and individual metric files

### Changed
- `SKILL.md`: Added `## When to use` (explicit scenarios), `## Example` (minimal @theme + CVA component), and `## Badges` (version, license, CI) sections to match tailwind-pro v0.2.2 standard
- `README.md`: Updated version badge, added skills.sh badge, referenced new SKILL.md sections
- `eval/quantitative-metrics.yaml`: Refined targets and added snippets_with_tests metric

### Fixed
- Baseline SIN-skill generation (fixed Windows path handling in generate-baseline.mjs)
- Build time measurement consistency (5.9s vs previous 7.1s discrepancy resolved)
- Quantitative metrics timestamps now coherent across all artifacts

## [Unreleased]

### Changed
- Restructured repo to canonical `skills/astro-best-practices/` layout for `npx skills add` CLI compatibility (moved `SKILL.md`, `rules/`, `snippets/`, `test-cases/`, `eval/` with `git mv` to preserve history)
- Updated `.github/workflows/ci.yml` paths and `README.md` structure/references to new skill location

## [0.1.0] - 2026-09-09

### Added
- Initial release of astro-best-practices skill
- Core rules for islands architecture, content collections, view transitions
- Snippets for common configurations
- Evaluation criteria

### Docs
- Added CONTRIBUTING.md with guidelines for rules/snippets/tests and PR process
- Added CODE_OF_CONDUCT.md based on Contributor Covenant 2.1
- Optimized README.md with badges, quick start, structure, examples, and links
