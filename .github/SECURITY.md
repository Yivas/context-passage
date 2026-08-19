# Security Policy

## Supported versions

Context Passage has no published release and no supported runtime version yet. The repository is in
its foundation phase. Security reports about the current source, documentation, or repository setup
are still welcome.

When the first version is published, this section will identify supported Context Passage, OpenCode,
Pi, and runtime versions. Do not infer support from a version mentioned in research or planning.

## Report a vulnerability

Use [GitHub private vulnerability reporting](https://github.com/Yivas/context-passage/security/advisories/new).
Do not open a public issue for an undisclosed vulnerability.

Include:

- the affected commit or version;
- the host and host version, when applicable;
- the operating system;
- the smallest sanitized reproduction;
- the expected and observed behavior;
- the security impact and any known workaround.

Remove credentials, tokens, prompts, conversation text, session identifiers, active configuration,
personal paths, and other private data. Redact private values while keeping enough technical detail
to reproduce the problem.

## Project boundaries

Context Passage is not an operating-system sandbox. Its security contract requires explicit
activation, immutable source sessions, no credential copying, no direct OpenCode SQLite writes, and
no silent replacement of MCP configuration. Reports that break those boundaries are in scope.

## What happens after a report

The maintainer will review the report, reproduce it when possible, and may request more sanitized
evidence. Valid reports will be coordinated through the private advisory before public disclosure.
No response or remediation deadline is promised before the project has a published support policy.
