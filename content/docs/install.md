---
title: Install
weight: 10
lead: "Prerequisites, build, and the files mesh init writes."
---

## Prerequisites

- [Go](https://go.dev/dl/) 1.27 or newer (`go.mod` currently requires `go 1.27`)
- [Ollama](https://ollama.com) on any node that should serve models (default `http://localhost:11434`)
- For an admin/relay: a reachable public IP, or NAT forwarding of **TCP** `admin_port` (default 4002) and **TCP+UDP** `relay_port` (default 4001)

## Build

From the [product repo](https://github.com/asynchronomatic/speakeasy) root, so `config.yaml` and `web/` resolve:

```bash
git clone https://github.com/asynchronomatic/speakeasy.git
cd speakeasy
go mod download
make build
```

`make build` runs tests, then writes `build/mesh` and `build/admincli`. Cross-compile with `make build-all` (Windows amd64, Linux amd64/arm64, Darwin arm64).

Makefile shortcuts: `make run-proxy`, `make run-admin`, `make run-hybrid`.

## First-run files

Run the binary from a directory that will hold config and keys. `mesh init` writes:

| File | Purpose |
| --- | --- |
| `config.yaml` | Runtime settings (mode 0600) |
| `node.key` | Proxy libp2p identity |
| `relay.key` | Admin/relay identity |

Existing `node.key` / `relay.key` are kept if you re-run init. **Keep the keys.** Losing them changes this node’s peer ID.

The dashboard is served from the `web/` directory next to the process. Run from the checkout (or copy `web/` with the binary).

## Optional

Set `ACCESSIBLE=1` so the huh forms in `init` / `join` use screen-reader prompts.

Admin persistence defaults to `admin.jkv` in the working directory. Override with `ADMIN_DB_PATH` if you need a different path.
