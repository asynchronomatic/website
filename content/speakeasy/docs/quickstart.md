---
title: Quick start
weight: 20
lead: "Init a node, redeem an invite, and start proxy or admin."
aliases:
  - /docs/quickstart/
---

## Commands

```bash
# First machine (or any new checkout)
./build/mesh init

# Join an existing mesh (redeem an invite, write membership into config.yaml)
./build/mesh join <invite-url>

# Member: proxy local Ollama onto the mesh
./build/mesh proxy

# Public host: membership API + circuit relay
./build/mesh admin

# Single host: admin + relay + proxy
./build/mesh hybrid
```

`hybrid` is also accepted as `proxy+admin` or `standalone`.

`mesh join` redeems the invite, writes mesh address / id / secret into `config.yaml`, then starts the proxy. If `config.yaml` already exists, the form asks before replacing membership fields.

## Who runs what

1. One host runs **admin** (HTTP membership API + circuit relay). It must be public or port-forwarded.
2. That host (or anyone with the admin token) creates an invite from the dashboard Admin panel or `admincli`.
3. Each member runs **`mesh init`**, then **`mesh join <invite-url>`**, with Ollama on the same machine if they will serve models.
4. Clients talk only to the local proxy listen address.

A node can join without exporting models: leave `providers` empty (or mark a provider `private: true`) and still use models advertised by peers.

## Dashboard

Open `http://127.0.0.1:<listen>/ui/`.

- `listen` comes from `config.yaml` (`proxy.listen`).
- If unset, the code default is `:4080`.
- `mesh init` pre-fills that default; you can change it in the form (the form text mentions `:8080` as an example).

## Next

- [How it works]({{< relref "how-it-works" >}}) — routing and NAT
- [Configuration]({{< relref "configuration" >}}) — `config.yaml` fields
- [Usage]({{< relref "usage" >}}) — Ollama, OpenAI, Open WebUI
