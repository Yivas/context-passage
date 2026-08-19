## Problem

Describe the user-visible problem this pull request solves and link the issue that defines its scope.

## Changes

List the focused changes. Note any behavior that remains intentionally unsupported.

## Safety and fidelity

- Is every new capability disabled by default?
- What session or MCP data is read, stored, transformed, or omitted?
- Can the change copy credentials, start processes, make network requests, or modify host config?
- What happens after a partial failure or retry?
- Which host-specific semantics cannot be preserved?

## Validation

List the commands and user flows you ran with exit codes or results. Use synthetic fixtures and
temporary host profiles. If the repository does not yet define a relevant command, state that
instead of claiming a check passed.

## Checklist

- [ ] The change addresses one issue or reviewable unit.
- [ ] Source sessions remain unchanged.
- [ ] No credentials, prompts, conversations, personal paths, active config, or real logs are included.
- [ ] Public APIs and tested host versions are identified.
- [ ] Tests cover the relevant success, failure, retry, and deduplication paths.
- [ ] Documentation describes compatibility limits and fidelity loss.
- [ ] No unrelated files or refactors are included.
