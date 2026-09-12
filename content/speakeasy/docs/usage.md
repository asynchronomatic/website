---
title: Usage
weight: 50
lead: "Point Ollama CLI, OpenAI SDKs, and Open WebUI at the local proxy."
aliases:
  - /docs/usage/
---

Replace `4080` with whatever you set in `proxy.listen`.

## Ollama CLI

```bash
export OLLAMA_HOST=http://127.0.0.1:4080
ollama run llama3.2 "hello from the mesh"
```

## OpenAI SDK

```python
from openai import OpenAI
client = OpenAI(base_url="http://127.0.0.1:4080/v1", api_key="unused")
print(client.chat.completions.create(
    model="llama3.2",
    messages=[{"role": "user", "content": "hello"}],
))
```

No API key is required. If a client refuses an empty key, use any placeholder such as `sk-speakeasy`.

## Open WebUI

1. Open **Admin Settings → Connections** (or user **Settings → Connections**).
2. Enable the **OpenAI API** connection.
3. Set **API Base URL** to `http://<proxy-host>:<listen>/v1` — it **must** end in `/v1`.
4. Set **API Key** to any value, then save.
5. Mesh models show up in the Open WebUI model picker.

If you are viewing the dashboard on localhost, apps on other machines — or Open WebUI in Docker — cannot reach `127.0.0.1`. Use this computer’s LAN address, or `host.docker.internal` from Docker Desktop.

## Other clients

Cursor, Continue, Cline, and the official OpenAI SDKs use the same base URL.

| Path | Use |
| --- | --- |
| `GET /v1/models` | Model list |
| `POST /v1/chat/completions` | Chat |
| `POST /v1/responses` | Responses API |
| `POST /v1/embeddings` | Embeddings |
| `POST /v1/messages` | Anthropic-shaped messages |
| `POST /api/chat` | Ollama chat |

The product repo’s `tests/test-request.sh` curls `/api/ps` and `/api/chat`.
