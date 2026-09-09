# Test Case: Middleware Heavy IO

**Status:** Fail

Middleware performs database query on every request.

Anti-pattern: Middleware should be lightweight.

Expected: Move IO to route handlers.
