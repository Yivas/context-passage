---
title: Architecture
description: The planned local journal, durable operations, and independent host adapters.
---

Context Passage separates portable synchronization rules from host-specific APIs. The core accepts
canonical records and operations; it does not import OpenCode or Pi SDK types.

```text
Authorized root
      │
      ▼
Host capture adapter ──► Canonical journal ──► Durable outbox
                              │                     │
                              ▼                     ▼
                        Conflict policy       Host projection adapter
                              │                     │
                              └────────► Sanitized diagnostics
```

## Components

| Component          | Responsibility                                                               | Must not do                               |
| ------------------ | ---------------------------------------------------------------------------- | ----------------------------------------- |
| Authorization gate | Resolve whether a root, direction, history, or MCP resource is enabled       | Infer consent from installation           |
| Capture adapter    | Observe supported host events and normalize visible content                  | Modify source sessions                    |
| Canonical journal  | Store origin, causal order, branches, fidelity notes, and operation identity | Depend on a host SDK                      |
| Durable outbox     | Retry projections without replay loops or duplicates                         | Mark partial work as complete             |
| Projection adapter | Create the closest supported native destination representation               | Invent missing host capabilities          |
| MCP translator     | Map portable declarations and detect conflicts                               | Copy credentials or overwrite host config |
| Diagnostics        | Report status, conflict, omission, and recovery steps                        | Persist conversation content by default   |

## Operation lifecycle

1. The authorization gate approves the exact source and direction.
2. A host adapter captures a finalized visible event through a public API.
3. The core normalizes it and writes an idempotent operation to the local journal.
4. The outbox projects the operation through the destination adapter.
5. The adapter records the destination reference and any fidelity loss.
6. A retry reads durable state and continues without replaying completed work.

## Concurrency

Two hosts can continue from the same origin before either receives the other's new work. Context
Passage preserves both continuations as branches or sibling sessions. It does not guess an ordering
or merge their text.

## Network boundary

The design adds no hosted service. Network access belongs to the hosts and MCP resources the user
already chose. The synchronization layer must not add telemetry, analytics, or a remote identity.
