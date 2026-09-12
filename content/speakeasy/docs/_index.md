---
title: Documentation
type: docs
lead: "Share local Ollama models with a private group over a libp2p mesh, behind one OpenAI- and Ollama-compatible HTTP endpoint."
aliases:
  - /docs/
cascade:
  type: docs
---

Speakeasy is a Go proxy for people who already run Ollama and want friends’ machines to see those models without exposing Ollama itself. Each node keeps its own weights. A small admin/relay service tracks membership and helps with NAT.

Chat and generate requests hit the local proxy first. If the model is not loaded here, the proxy forwards over the mesh.
