---
title: Configuration model
description: The principles for a commented, strict, and inert Context Passage configuration.
---

The configuration format is still being designed. No example on this page is accepted by software
today because the repository does not contain a runtime.

## Required properties

The final format will be TOML and must be:

- readable without knowing host internals;
- commented at the decision points that grant authority;
- strict about unknown keys and duplicate identifiers;
- scoped by absolute project root;
- explicit about direction, historical import, and each MCP resource;
- safe when a section is missing or invalid.

## Non-executable shape

This sketch describes the decisions the final schema must expose. Field names can change before the
contract is frozen.

```toml
# Context Passage remains inactive until this value is changed.
enabled = false

[[projects]]
# Use an absolute root. The adapter must reject paths outside approved roots.
root = "/projects/example"

[projects.conversations]
opencode_to_pi = false
pi_to_opencode = false
include_history = false

# Every portable MCP resource requires a separate opt-in entry.
# Credentials and secret environment values stay in each host.
```

:::caution[Do not use this in an active profile]
The sketch is documentation, not a supported configuration. Wait for a release that includes a
schema, validator, migration rules, and isolated host tests.
:::

## Precedence

The contract must define global defaults and project-level choices without letting a broad setting
silently authorize a new root. A more specific configuration may narrow authority. It must not widen
access through an unknown or malformed value.

## Secret handling

Portable declarations may name a secret reference that each host resolves locally. Context Passage
must not persist the secret value in its shared journal, generated host configuration, diagnostics,
or logs.

## Invalid configuration

The validator should report the affected section, a stable error code, and a corrective action. It
should disable that section while leaving unrelated, valid sections available. Falling back to a
more permissive interpretation is not allowed.
