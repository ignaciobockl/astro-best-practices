# Test Case: Islands Static By Default

**Status:** Pass

Component renders statically without client hydration.

```astro
---
import Counter from '../components/Counter.astro';
---
<Counter />
```

Expected: No client JavaScript loaded for Counter.
