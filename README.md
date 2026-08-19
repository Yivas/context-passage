# Context Passage

Context Passage is a planned local continuity layer for AI coding agents. Its first milestone will
connect OpenCode and Pi so users can opt into conversation continuity and shared MCP declarations
without uploading their data or copying credentials between hosts.

Read the [public documentation](https://yivas.github.io/context-passage/) for the product contract,
architecture, capability status, and contribution boundaries.

## Status

The project is in its foundation phase. The repository contains the public contract and community
files, but no installable plugin, package, or supported release yet. Do not add it to an active
OpenCode or Pi profile.

The first technical baselines under investigation are OpenCode 1.18.18 and Pi 0.84.1. They are not
supported versions until isolated integration tests pass.

## Intended V1 behavior

Context Passage will be inert after installation. Users must explicitly enable each project root,
sync direction, historical import, and MCP resource in a commented configuration file.

The planned V1 scope is:

- discover authorized current and historical conversations;
- synchronize finalized visible conversation text after opt-in;
- expose imported OpenCode conversations as native Pi sessions;
- create native OpenCode continuation sessions from Pi context;
- prevent replay loops and duplicate imports;
- preserve concurrent work as branches or sibling sessions instead of merging text;
- share MCP declarations while each host retains its own credentials and OAuth state;
- report content that could not be represented faithfully.

The current design does not assume that a host can accept externally produced historical assistant
turns. If an isolated compatibility test cannot prove a supported public insertion API,
Pi-to-OpenCode continuity will use a labeled continuation session instead of claiming a lossless
native transcript. Context Passage will not write directly to OpenCode's SQLite database.

## Safety and privacy boundaries

Context Passage is designed to operate locally and fail without changing source sessions.

- Everything is disabled by default.
- Source sessions are never deleted or rewritten by synchronization.
- Credentials, tokens, OAuth state, hidden reasoning, and host-private runtime state are not copied.
- MCP conflicts do not overwrite existing host configuration.
- No telemetry, analytics, cloud service, or remote account is part of the design.
- Compatibility claims require fixture-based and isolated host tests.

## Roadmap

1. Freeze the canonical conversation and configuration contracts.
2. Verify OpenCode, Pi, and MCP capabilities in temporary profiles.
3. Implement the local core and durable synchronization state.
4. Add independent OpenCode and Pi adapters.
5. Add opt-in setup, diagnostics, removal, and recovery flows.
6. Consider Claude Code and Codex adapters after V1 behavior is stable.

Implementation work will be tracked through public issues once the contracts are ready. Private
research and planning are intentionally kept outside this repository.

## Participation

Context Passage is an open source collaborative project. Bug reports, design feedback, and pull
requests are welcome once they follow the current scope and privacy boundaries. Read
[CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md) before
participating.

Report undisclosed vulnerabilities through
[GitHub private vulnerability reporting](https://github.com/Yivas/context-passage/security/advisories/new),
not through a public issue.

## License

Context Passage is distributed under the [MIT License](LICENSE).

Context Passage is an independent project and is not affiliated with or endorsed by OpenCode or Pi.
