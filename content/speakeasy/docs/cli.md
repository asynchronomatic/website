---
title: CLI
weight: 70
lead: "speakeasy for join, proxy, and admin. admincli for invites and nodes."
aliases:
  - /docs/cli/
---

## speakeasy

Built as `build/speakeasy`.

| Command | What it does |
| --- | --- |
| `join <invite-url>` | Redeem the invite, write membership into `config.yaml`. Run once per machine. |
| `proxy start` | Local OpenAI/Ollama proxy + UI, joined to the mesh. |
| `admin init` | Interactive config for a seed/admin node. Writes `config.yaml`. |
| `admin start` | Membership HTTP API + circuit relay. |

Member path (see [Quick start]({{< relref "quickstart" >}})):

```bash
./build/speakeasy join <invite-url>
./build/speakeasy proxy start
```

Seed/admin path (see [Admin setup]({{< relref "admin" >}})):

```bash
./build/speakeasy admin init
./build/speakeasy admin start
```

`join` honors `ACCESSIBLE=1` for screen-reader prompts.

## admincli

Built as `build/admincli` (`cmd/admincli`). Global flags:

| Flag | Env | Default |
| --- | --- | --- |
| `--addr` / `-a` | `SPEAKEASY_ADMIN_ADDR` | `http://127.0.0.1:4002` |
| `--token` / `-t` | `SPEAKEASY_ADMIN_TOKEN` | (required for admin/node commands) |
| `--mesh` / `-m` | | `default` |

```bash
admincli --addr https://myhost.mydomain.com --token "$SECRET" admin invite --name friend
admincli --token "$SECRET" admin delete-invite INVITE_ID
admincli --token "$SECRET" admin kick PEER_ID
```

Use the HTTPS admin address when the API is behind a reverse proxy.
