---
title: CLI
weight: 70
lead: "mesh for init, join, and process roles. admincli for invites and nodes."
aliases:
  - /docs/cli/
---

## mesh

Built as `build/mesh` (`cmd/mesh`).

```text
mesh init | join <invite-url> | proxy | admin | hybrid(proxy+admin)
```

| Command | What it does |
| --- | --- |
| `init` | Interactive huh form. Writes `config.yaml`, creates `node.key` / `relay.key` if missing. |
| `join <invite-url>` | Redeems the invite as this node’s peer ID, writes mesh membership into `config.yaml`, then starts **proxy**. |
| `proxy` | Local OpenAI/Ollama proxy + UI, joined to the mesh. |
| `admin` | Membership HTTP API + circuit relay. |
| `hybrid` | Admin + relay + proxy. Aliases: `proxy+admin`, `standalone`. |

`init` and `join` honor `ACCESSIBLE=1` for screen-reader prompts.

## admincli

Built as `build/admincli` (`cmd/admincli`). Global flags:

| Flag | Env | Default |
| --- | --- | --- |
| `--addr` / `-a` | `SPEAKEASY_ADMIN_ADDR` | `http://127.0.0.1:4002` |
| `--token` / `-t` | `SPEAKEASY_ADMIN_TOKEN` | (required for admin/node commands) |
| `--mesh` / `-m` | | `default` |

```bash
admincli --token "$SECRET" admin invite --name friend --lifetime 24h
admincli --token "$SECRET" admin delete-invite INVITE_ID
admincli --token "$SECRET" admin kick PEER_ID

admincli --token "$SECRET" node list
admincli --token "$SECRET" node register --name kitchen --id PEER_ID
admincli --token "$SECRET" node unregister PEER_ID
admincli --token "$SECRET" node relay

admincli meshes
admincli redeem INVITE_URL --id PEER_ID --name kitchen
```

`redeem` is public (no admin token). `mesh join` already does this for you and then starts the proxy.
