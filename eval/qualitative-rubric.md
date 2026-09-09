# Qualitative Rubric

## Evaluation Criteria

### Architecture
- **Excellent**: Islands used appropriately, static by default
- **Good**: Mostly static with minimal hydration
- **Poor**: Full hydration or overuse of client directives

### Content Safety
- **Excellent**: Zod schemas for all collections
- **Good**: Partial validation
- **Poor**: No validation

### Accessibility
- **Excellent**: Reduced motion respected, focus managed
- **Good**: Basic a11y support
- **Poor**: No a11y considerations

### Performance
- **Excellent**: LCP <2s, INP <200ms, CLS <0.1
- **Good**: Meets thresholds with minor issues
- **Poor**: Fails Core Web Vitals

### Code Quality
- **Excellent**: Strict TypeScript, tests present
- **Good**: Some types, minimal tests
- **Poor**: Any types, no tests
