---
title: Documentation
type: docs
lead: "A private club for local inference. Share models with a trusted group over a libp2p mesh, behind one OpenAI-compatible endpoint."
aliases:
  - /docs/
cascade:
  type: docs
---

Speakeasy is a Go inference proxy for people who already run local models (Ollama today) and want a trusted group to use them without exposing those backends to the internet.

Each node keeps its own weights. Members join a private p2p mesh. A request hits the local proxy first; if that model is not here, the proxy forwards to a peer that advertised it. All inference traffic is peer-to-peer and encrypted (libp2p QUIC). The relay is only for setup and hole punching — it never carries chat.
