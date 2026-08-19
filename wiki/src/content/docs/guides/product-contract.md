---
title: Product contract
description: The permanent privacy, authority, and failure boundaries for Context Passage.
---

The product contract defines what an implementation may do. Convenience does not override these
boundaries.

## Authority starts disabled

Context Passage must remain inert after installation. Before reading or changing anything, it must
find explicit approval for:

1. the project root;
2. the synchronization direction;
3. historical import;
4. each shared MCP resource.

Unknown keys, invalid limits, duplicate identifiers, or paths outside authorized roots must disable
the affected section. A configuration error must never widen access.

## Source sessions stay unchanged

Synchronization may observe an authorized source and create a projection elsewhere. It must not
delete, rewrite, compact, or repair the source session. Every persisted operation needs a stable
origin, a deduplication identity, and enough state to resume after interruption.

:::warning[No private storage shortcuts]
An adapter must use a supported public host API. Context Passage will not write directly to
OpenCode's SQLite database, even if doing so would make an import appear more complete.
:::

## Secrets do not cross hosts

The shared MCP layer describes portable resources. Each host keeps its own credentials, tokens,
OAuth state, secret environment values, and private configuration. If a declaration conflicts with
an existing host resource, the adapter must stop and report the conflict instead of replacing it.

## Loss is visible

A projection records the semantics it could not carry. That includes tool calls, tool results,
permissions, hidden reasoning, branches, compaction boundaries, and runtime-only state when the
destination has no faithful representation.

The UI and logs must not call a degraded continuation a lossless import.

## Failure is local and recoverable

- No cloud service, telemetry, analytics, or remote account is part of the design.
- Retries must not duplicate imported turns or MCP resources.
- Partial progress remains inspectable and can resume after restart.
- Logs use sanitized codes, counts, and metadata rather than conversation content or credentials.
- Concurrency creates branches or sibling sessions; it never triggers an automatic text merge.
