---
title: API
weight: 80
lead: "Admin HTTP API, dashboard JSON, and peer-only mesh RPC."
aliases:
  - /docs/api/
---

Secret for admin routes: `token` header or `Authorization: Bearer`.

## Admin HTTP API

Controller listen address (default port **4002**).

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| `POST` | `/api/v1/login` | | Node login |
| `GET` | `/api/v1/relay` | yes | Relay multiaddrs + membership clock |
| `POST` | `/api/v1/authorize` | yes | Allow a peer ID |
| `POST` | `/api/v1/nodes` | yes | Register |
| `POST` | `/api/v1/nodes/{id}` | yes | Refresh registration |
| `DELETE` | `/api/v1/nodes/{id}` | yes | Unregister |
| `GET` | `/api/v1/nodes` | yes | List members |
| `GET` | `/api/v1/admin/nodes` | admin | List nodes |
| `DELETE` | `/api/v1/admin/nodes/{id}` | admin | Delete node |
| `POST` | `/api/v1/admin/invite` | admin | Create invite link |
| `GET` | `/api/v1/admin/invite` | admin | List invites |
| `DELETE` | `/api/v1/admin/invite/{id}` | admin | Delete invite |
| `DELETE` | `/api/v1/admin/peer/{id}` | admin | Kick peer |
| `POST` | `/api/v1/redeem/{id}` | public | Redeem invite |

## Dashboard JSON (not for peers)

Served on the **proxy** listen address.

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/mesh/members` | Mesh members |
| `GET` | `/api/mesh/models` | Advertised models |
| `GET` | `/api/mesh/config` | Local config snapshot |
| `GET`/`POST` | `/api/mesh/theme` | Dashboard theme |
| `GET`/`POST`/`DELETE` | `/api/mesh/providers` | Local providers |
| `GET`/`POST` | `/api/admin/enabled` | Unlock admin UI |
| `GET`/`POST`/`DELETE` | `/api/admin/invite` | Invites (when admin is enabled) |
| `GET`/`DELETE` | `/api/admin/node` | Admin node list / kick |

WebSocket: `/api/v.1/refresh/websocket` (live refresh for the UI).

## Peer-only RPC

libp2p streams. Do not call these from apps; the proxy uses them between members.

- `GET /.mesh/status`
- `GET /.mesh/members`
- `GET /.mesh/models`
