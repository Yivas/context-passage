---
title: Security
description: Security boundaries and the private channel for vulnerability reports.
---

Context Passage has no published release or supported runtime version. Reports about repository
configuration, documentation, and future implementation work are still welcome.

## Report privately

Use [GitHub private vulnerability reporting](https://github.com/Yivas/context-passage/security/advisories/new)
for an undisclosed vulnerability. Do not open a public issue.

Include the affected commit, host and host version when relevant, operating system, smallest
sanitized reproduction, expected and observed behavior, impact, and any known workaround.

Remove:

- credentials, tokens, and OAuth state;
- prompts and conversation text;
- session identifiers and personal paths;
- active host or MCP configuration;
- logs containing private values.

## Security boundaries

Reports are especially useful when behavior could:

- activate synchronization without consent;
- read outside an authorized root;
- modify a source session;
- copy credentials or OAuth state between hosts;
- write directly to OpenCode's SQLite database;
- start an undeclared MCP resource;
- hide a conflict, replay, or fidelity loss.

The project does not promise a response or remediation deadline before it publishes a support
policy. Valid reports will be coordinated through the private advisory before disclosure.

The canonical policy remains in the repository's
[`SECURITY.md`](https://github.com/Yivas/context-passage/blob/main/.github/SECURITY.md).
