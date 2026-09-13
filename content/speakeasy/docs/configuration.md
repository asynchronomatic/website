---
title: Configuration
weight: 40
lead: "Runtime settings live in config.yaml in the process working directory."
aliases:
  - /docs/configuration/
---

There is no required environment variable for the proxy. Config is `config.yaml` in the process working directory (`config.example.yaml` in the product repo is the commented sample). Do not commit a live admin secret.

A commented sample also lives in the product repo under `examples/config.example.yaml`.

## Shape of config.yaml

A typical file looks like this (field names as used at runtime):

```yaml
proxy:
  listen: ":4080"          # local Ollama/OpenAI proxy + UI
  version: "0.33.0"        # version string reported to Ollama-compatible clients

mesh:
  name: ""                 # empty → hostname
  admin_address: "http://127.0.0.1:4002"
  admin_secret: "<shared-secret>"
  admin_port: 4002
  relay_port: 4001
  public_address: "auto"   # or a concrete IP when behind NAT
  app_port: 0              # 0 for proxy-only
  force_private: false
  mdns_enabled: true

providers:
  - id: localhost
    type: ollama           # only ollama is implemented
    base_url: "http://localhost:11434"
    model_discovery: pinned   # all | pinned | whitelist
    models: []
```

`speakeasy join <invite-url>` updates membership (mesh server URL, mesh id, secret) after redeeming the invite.

## Admin host (TLS)

For a public seed node, put nginx (or similar) in front of `admin_port` and set `admin.address` to the HTTPS URL members will use. See [Admin setup]({{< relref "admin" >}}).

```yaml
admin:
  address: "https://myhost.mydomain.com"
  secret: "mysekrit"
  admin_port: 4002
  relay_port: 4001
  public_address: "auto"
```

Listen defaults: if `proxy.listen` is empty at load time, the binary uses `:4080`.

## Providers

A single proxy can front more than one Ollama process: add another `providers` item with its own `id` and `base_url`. Models from every provider are merged into this node’s advertised set.

| Field | Meaning |
| --- | --- |
| `id` | Display label, unique on this node |
| `type` | `ollama` (implemented). The dashboard form also lists `openai` and `test`. |
| `base_url` | Ollama HTTP API, typically `http://127.0.0.1:11434` |
| `token` | Optional bearer token for OpenAI-compatible backends |
| `private` | If true, this provider is not exported to the mesh |
| `model_discovery` | `pinned` (implemented), `all`, `whitelist` |
| `models` | Optional list of `{ model, private, capabilities }` |

Remote Ollama needs `OLLAMA_HOST=0.0.0.0:11434` (or equivalent) on that host.

## Admin extras

`allow.list` (optional, admin working directory) is extra peer IDs, one per line.

Admin state is stored in `admin.jkv` unless `ADMIN_DB_PATH` is set.

Theme for the dashboard can be Deco (default), Clean, Cyber, or Dark.
