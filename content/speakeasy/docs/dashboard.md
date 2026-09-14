---
title: Dashboard
weight: 60
lead: "Welcome, Mesh, Nodes, Models, Chat, Admin, and Settings. Default listen serves the UI at /."
aliases:
  - /docs/dashboard/
---

The static UI lives in `web/` and is served at `http://<listen>/` (also `/ui/` and `/ui`). Once Speakeasy is running, that is typically `http://127.0.0.1:4080`.

Themes: **Deco**, **Clean**, **Cyber**, and **Dark**. Settings switches theme on this node only.

## Welcome

Copy-paste OpenAI base URL for this proxy, Open WebUI steps, and a curl snippet. Warns when you are on localhost so Docker / LAN clients do not use `127.0.0.1`.

![Welcome panel: OpenAI base URL, Open WebUI steps, and a curl snippet](/images/welcome-view.jpeg)

## Mesh

Graph of members. Solid links are direct; dashed links go through the relay. Click a node for a side card of models on that peer.

![Mesh panel: members and how they connect](/images/mesh-view.jpeg)

## Nodes

Table of members: name, peer ID, role, reachability, advertised models, links. Expand a row for addresses and connections.

![Nodes panel: mesh members, reachability, and request stats](/images/nodes-view.jpeg)

## Models

Every advertised model, owner, context, visibility, providing nodes, and capabilities. Expand in place for identity and specs.

![Models panel: advertised models and providing nodes](/images/models-view.jpeg)

## Chat

Pick a mesh model and talk. Chats are **not saved**. The UI warns when the selected model is served by another node (your prompt leaves this machine over the mesh).

![Chat panel: in-memory mesh chat with a model picker](/images/chat-view.jpeg)

## Admin

If this process is not the admin controller, enter the admin secret to manage nodes and invites. Create invite links with optional name, lifetime, and one-time use. See [Admin setup]({{< relref "admin" >}}).

![Admin panel: invite links and member management](/images/panel-admin.png)

## Settings

Theme selector and local providers: add/edit Ollama (and listed) backends, discovery mode, private flag, and a model whitelist table.

![Settings panel: theme and local providers](/images/panel-settings.png)
