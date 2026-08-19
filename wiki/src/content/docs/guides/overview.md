---
title: Overview
description: What Context Passage intends to connect, and what remains unimplemented.
---

Context Passage is a planned local continuity layer for AI coding agents. Its first milestone will
connect OpenCode and Pi so an authorized conversation can continue across hosts and both hosts can
consume a shared MCP declaration.

:::caution[Foundation phase]
The repository does not contain an installable plugin, package, or supported release. Do not add it
to an active OpenCode or Pi profile. OpenCode 1.18.18 and Pi 0.84.1 are investigation baselines, not
compatibility promises.
:::

## The problem

Coding agents store sessions, branches, tool activity, and permissions in different formats. Moving
visible conversation text by hand loses provenance and makes repeat imports hard to reason about.
MCP declarations can also drift between hosts while credentials must remain separate.

Context Passage addresses that gap with a local canonical journal, durable operations, and one
adapter per host. The core records what moved, where it came from, and what the destination could not
preserve.

## Planned V1

| Area           | Planned behavior                                                                 |
| -------------- | -------------------------------------------------------------------------------- |
| Hosts          | OpenCode and Pi                                                                  |
| Conversations  | Authorized current and historical visible text                                   |
| OpenCode to Pi | Native Pi session when isolated tests confirm the supported path                 |
| Pi to OpenCode | Labeled continuation session while historical assistant insertion is unavailable |
| Concurrency    | Branches or sibling sessions; no automatic text merge                            |
| MCP            | Shared declarations with credentials and OAuth retained by each host             |
| Operation      | Local, opt-in, retryable, and disabled by default                                |

## What V1 excludes

- Claude Code, Codex, and other hosts.
- Cloud synchronization or a hosted account.
- Hidden reasoning, private runtime state, or credential transfer.
- Direct writes to OpenCode's SQLite database.
- A claim that different host session models can be converted without loss.

## Where to go next

Read the [product contract](../product-contract/) for the boundaries that implementation must
preserve. The [architecture](../../design/architecture/) page explains the planned components
without presenting them as finished software.
