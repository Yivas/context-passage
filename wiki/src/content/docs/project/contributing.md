---
title: Contributing
description: How to propose focused work without exposing private data or widening the V1 scope.
---

Context Passage welcomes reproducible bug reports, focused design feedback, and pull requests that
fit the current milestone.

## Before opening an issue

1. Read the [capability status](../status/) and confirm the behavior exists in the repository.
2. Search open and closed issues for the same proposal or defect.
3. Remove private data from examples and attachments.
4. Separate current behavior from planned behavior.

Use a feature request for design proposals. Use a bug report only when repository code or documented
behavior can be reproduced. Send undisclosed vulnerabilities through the
[private reporting channel](../security/).

## Pull request boundaries

A pull request should solve one reviewable problem and use synthetic fixtures. Any future runtime
change must keep new behavior disabled by default, use public host APIs, preserve source sessions,
and document fidelity loss.

Do not include credentials, prompts, transcripts, personal paths, session IDs, active
configuration, or real logs. Do not add telemetry, remote storage, or direct SQLite writes.

## Validation

The root repository does not contain product build commands yet. The documentation site has its own
commands under `wiki/`:

```sh
cd wiki
npm ci
npm run format:check
npm run check
npm run build
```

State the commands and results you ran. Do not claim a product test passed when no such command
exists.

Read the complete
[`CONTRIBUTING.md`](https://github.com/Yivas/context-passage/blob/main/CONTRIBUTING.md) and
[Code of Conduct](https://github.com/Yivas/context-passage/blob/main/CODE_OF_CONDUCT.md) before
submitting work.
