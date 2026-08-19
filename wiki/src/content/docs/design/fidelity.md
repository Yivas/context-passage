---
title: Fidelity and conflicts
description: How Context Passage handles semantics that do not transfer between hosts.
---

Conversation continuity does not imply transcript equivalence. OpenCode and Pi represent branches,
messages, tool activity, permissions, compaction, and runtime state differently.

## Direction matters

| Direction      | Intended projection                                                 | Known boundary                                                                                   |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| OpenCode to Pi | A native Pi session containing authorized visible conversation text | Isolated probes must confirm import, tree, and compaction behavior                               |
| Pi to OpenCode | A native continuation session labeled with its origin               | No supported public API has been proven for inserting a complete historical assistant transcript |

If a probe cannot demonstrate a supported operation, the adapter must block or use the documented
degraded path. It must not modify private storage to make the result look native.

## Fidelity record

A projection should distinguish:

- **preserved**: the destination represents the same visible content or branch relation;
- **summarized**: the destination receives an explicit summary rather than the original structure;
- **omitted**: sensitive or unrepresentable data does not cross the boundary;
- **blocked**: policy, conflict, version, or API support prevents the operation.

:::note[Visible text is not the whole session]
A matching transcript does not prove that tool calls, permission decisions, hidden reasoning, token
usage, runtime state, or compaction boundaries survived the move.
:::

## Conflict policy

Context Passage stops before an unsafe overwrite. A conflict can arise when:

- the destination already contains an MCP resource with the same identifier and different fields;
- two continuations share an origin but have diverged;
- a host version no longer exposes the API proven by the adapter;
- a retry finds destination state that does not match the recorded operation.

The resolution must preserve both source states or require an explicit user decision. Automatic
last-write-wins behavior is outside the contract.

## Replay prevention

Every operation needs a stable identity derived from canonical origin and content metadata. Host
references alone are insufficient because a projection can receive a new host identifier after a
retry. The journal and outbox together decide whether an operation is pending, complete, blocked, or
safe to retry.
