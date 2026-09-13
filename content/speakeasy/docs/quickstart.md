---
title: Quick start
weight: 20
lead: "Join with an invite, or stand up your own mesh."
aliases:
  - /docs/quickstart/
---

## For users

You are here because someone invited you with an invite URL.

```bash
git clone https://github.com/asynchronomatic/speakeasy.git
cd speakeasy
make build

# Once
./build/speakeasy join <invite-url>

# After that
./build/speakeasy proxy start
```

The dashboard is at `http://127.0.0.1:4080` (or whatever you set in `proxy.listen`).

A node can join without exporting models: leave `providers` empty (or mark a provider `private: true`) and still use models advertised by peers.

## Running your own mesh

One host runs **admin/relay**. It must be public or port-forwarded. Then you create invite links and members join as above.

See [Admin setup]({{< relref "admin" >}}) for seed/admin config, TLS on the admin API, and `admincli` invites.

## Who runs what

1. One host runs **admin/relay** (admin-only or hybrid admin+proxy).
2. That host (or anyone with the admin token) creates an invite from the dashboard Admin panel or `admincli`.
3. Each member runs **`speakeasy join <invite-url>`**, then **`speakeasy proxy start`**, with a local provider on that machine if they will serve models.
4. Clients talk only to the local proxy listen address.

## Dashboard

Open `http://127.0.0.1:<listen>/`. Default listen is `:4080`.

## Next

- [Admin setup]({{< relref "admin" >}}) — seed node, TLS, invites
- [How it works]({{< relref "how-it-works" >}}) — routing and NAT
- [Configuration]({{< relref "configuration" >}}) — `config.yaml` fields
- [Usage]({{< relref "usage" >}}) — Ollama, OpenAI, Open WebUI
