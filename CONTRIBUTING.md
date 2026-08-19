# Contributing

Context Passage welcomes reproducible bug reports, focused design feedback, and pull requests that
fit the current milestone.

## Before opening an issue

1. Read the status and safety boundaries in [README.md](README.md).
2. Search existing issues for the same proposal or defect.
3. Remove private data from examples and attachments.
4. Describe current behavior separately from planned behavior.

The project does not have a supported release yet. Use a feature request for design proposals and a
bug report only when repository code or documented behavior can be reproduced.

## Pull requests

Before writing code, open or find an issue that defines the behavior and acceptance criteria. Small
documentation corrections may be submitted directly.

A pull request should:

- solve one reviewable problem;
- use public host APIs rather than private storage writes;
- keep installation and every capability disabled by default;
- use synthetic fixtures instead of real sessions or configuration;
- include focused tests for success, failure, retry, and deduplication when applicable;
- document fidelity loss or compatibility limits introduced by the change;
- avoid dependencies without a concrete correctness or maintenance benefit;
- update public documentation when behavior changes.

Do not include credentials, tokens, prompts, conversation transcripts, personal paths, session IDs,
active configuration, or logs. Do not add telemetry, analytics, remote storage, or direct writes to
OpenCode's SQLite database.

## Validation

The repository does not define build or test commands yet. Do not invent passing checks in a pull
request. Once implementation commands exist, this section and the pull request template will name
the required checks.

## Security reports

Do not report an undisclosed vulnerability in a public issue. Follow the
[security policy](.github/SECURITY.md) and use
[GitHub private vulnerability reporting](https://github.com/Yivas/context-passage/security/advisories/new).

All participation must follow the [Code of Conduct](CODE_OF_CONDUCT.md).
