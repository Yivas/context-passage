---
title: Capability status
description: What exists, what is under investigation, and what is not supported.
---

Context Passage is in its foundation phase. This table is the public status summary; it does not
turn an investigated version into a supported version.

| Capability                                 | Status              | Evidence required before support                           |
| ------------------------------------------ | ------------------- | ---------------------------------------------------------- |
| Public repository and product contract     | Available           | Documentation review                                       |
| OpenCode conversation discovery            | Under investigation | Temporary-profile capture and listing probes               |
| Pi native session projection               | Under investigation | Import, tree, compaction, and selector probes              |
| Pi to OpenCode continuation                | Designed            | Public session-creation probe and fidelity fixture         |
| Historical assistant insertion in OpenCode | Not proven          | Supported public API and isolated conformance tests        |
| Shared MCP declarations                    | Designed            | Translation, precedence, and conflict tests for both hosts |
| Canonical journal and durable outbox       | Planned             | Unit, recovery, replay, and concurrency tests              |
| Installable package or plugin              | Unavailable         | Runtime implementation and distribution gate               |
| Claude Code or Codex adapter               | Outside V1          | Stable V1 contract and separate capability review          |

## Investigation baselines

- OpenCode 1.18.18
- Pi 0.84.1

These versions identify the first source and probe targets. Compatibility remains unclaimed until the
public matrix links to reproducible tests.

## How status changes

A capability moves to supported only after the repository contains:

1. a version gate or documented compatibility range;
2. synthetic fixtures for success and failure;
3. isolated host tests that avoid personal profiles;
4. visible behavior for conflict and fidelity loss;
5. public setup and removal instructions.

Until those conditions are met, documentation uses **planned**, **designed**, **under
investigation**, or **not proven**.
