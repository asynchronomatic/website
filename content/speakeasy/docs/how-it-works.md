---
title: How it works
weight: 30
lead: "Admin, relay, local-first routing, and what never leaves the node."
aliases:
  - /docs/how-it-works/
---

Speakeasy splits control plane and inference.

## Roles

**Admin** is the door: HTTP membership API plus a libp2p Circuit Relay v2. It tracks who is allowed in, hands out relay multiaddrs, and issues invite links. It does **not** proxy chat tokens. Application traffic is not hairpinned through the admin HTTP API.

**Proxy** sits next to Ollama (or several Ollama processes). It:

1. Registers with admin and joins the libp2p mesh
2. Advertises exported models to peers over `/.mesh/*` streams
3. Serves a local OpenAI- and Ollama-shaped HTTP API plus `/ui/`
4. Routes each request to a local provider first, then to a mesh peer that listed that model

**Hybrid** (`mesh hybrid`) runs admin, relay, and proxy on one machine — useful for a single public host or a lab box.

## Local-first routing

For `/api/chat`, `/v1/chat/completions`, `/v1/responses` (and related generate/embed paths), the proxy peeks at the JSON `model` field:

1. If a **local** provider has the model, reverse-proxy there.
2. Else pick a **mesh peer** that advertised it and forward over libp2p.
3. Requests that *arrived* over the mesh are not sent back out (`noRelay`), so the mesh does not loop.

Weights stay on the owner’s disk. Peers only see what you export.

## Pinned export

`model_discovery: pinned` advertises only models currently loaded in Ollama. Idle weights are not pulled across the mesh. Pair with `OLLAMA_KEEP_ALIVE=-1` on the Ollama side if you want a loaded model to stay loaded.

`all` and `whitelist` appear in `mesh init` and in config comments; pinned is the discovery mode that is implemented today.

## NAT and LAN

- **Relay port** (default 4001) needs **TCP and UDP** on a public admin/hybrid host.
- **Admin port** (default 4002) needs **TCP**.
- `public_address: auto` tries to discover the advertised IP. If the box is behind NAT, set the router’s public IP and forward those ports.
- `force_private: true` makes a proxy behave as if it is always behind NAT (prefer hole punch / relay).
- `mdns_enabled: true` finds other Speakeasy proxies on the same LAN. Nodes behind the same NAT often cannot hairpin through the public relay; mDNS gives them a direct path.

## Identity

`node.key` is this proxy’s libp2p identity. `relay.key` is the admin/relay identity. Peer IDs are derived from those keys. Treat them like host keys.
