---
title: Dashboard
weight: 60
lead: "Mesh, Nodes, Models, Chat, Admin, and Settings at /ui/."
---

The static UI lives in `web/` and is served at `http://<listen>/ui/` (also `/ui` and `/`). Default theme is **deco** (gold on near-black). Settings can switch to night, cyber, or clean on this node only.

![Mesh view: three reachable nodes on a circular graph, liquid.snake selected with its loaded models](/images/mesh_view.png)

![Models view: table of advertised models with nemotron-3.5-lightning expanded to specs, capabilities, and providing nodes](/images/model_view.png)

## Welcome

Copy-paste OpenAI base URL for this proxy, Open WebUI steps, and a curl snippet. Warns when you are on localhost so Docker / LAN clients do not use `127.0.0.1`.

## Mesh

Circular graph of members. Solid gold links are direct; dashed links go through the relay. Click a node for a side card of models on that peer.

## Nodes

Table of members: name, peer ID, role, reachability, advertised models, links. Expand a row for addresses and connections.

## Models

Every advertised model, owner, context, visibility, providing nodes, and capabilities. Expand in place for identity and specs.

## Chat

Pick a mesh model and talk. Chats are **not saved**. The UI warns when the selected model is served by another node (your prompt leaves this machine over the mesh).

## Admin

If this process is not the admin controller, enter the admin secret to manage nodes and invites. Create invite links with optional name, lifetime (never / 1 hour / 1 day / 7 days), and one-time use.

## Settings

Theme selector and local providers: add/edit Ollama (and listed) backends, discovery mode, private flag, and a model whitelist table.
