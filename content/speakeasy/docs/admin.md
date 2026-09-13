---
title: Admin setup
weight: 25
lead: "Stand up a seed/admin node, put TLS in front of the admin API, and issue invites."
aliases:
  - /docs/admin/
---

This page is for people who will **run their own mesh** as the seed/admin node. If you only want to join an existing mesh, ask the owner for an invite link and follow [Quick start]({{< relref "quickstart" >}}):

```bash
./build/speakeasy join <invite-url>
./build/speakeasy proxy start
```

## Seed / admin node

The seed/admin node bootstraps every later peer. It needs a public IP, or port forwarding of:

- **Admin port** (default **4002**) — TCP
- **Relay port** (default **4001**) — TCP and UDP

## TLS on the admin API

It is **strongly recommended** that `admin_port` (4002) sit behind TLS, using a reverse proxy such as nginx. Otherwise admin requests are plaintext on the internet.

Native TLS in the binary is not implemented yet.

The mesh **relay** port (4001) is encrypted by default (QUIC). Inference never goes through the admin HTTP API or the relay: application traffic is peer-to-peer.

## Create an initial config

```bash
./build/speakeasy admin init
```

That writes a barebones `config.yaml`. Edit it, then start:

```bash
./build/speakeasy admin start
```

Bare minimum for a public seed/admin node fronted by a reverse proxy:

```yaml
admin:
  address: "https://myhost.mydomain.com"
  secret: "mysekrit"
  admin_port: 4002
  relay_port: 4001
  public_address: "auto"
```

`https://myhost.mydomain.com` is reverse-proxied to `127.0.0.1:4002`. Example nginx server:

```nginx
server {
    server_name myhost.mydomain.com;

    location / {
        proxy_pass http://127.0.0.1:4002;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/myhost.mydomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/myhost.mydomain.com/privkey.pem;
}
```

## First invite

```bash
./build/admincli --addr https://myhost.mydomain.com --token "mysekrit" admin invite --name "testinvite"
```

The command prints an invite id, a redeem URL (`https://myhost.mydomain.com/api/v1/redeem/…`), use limit, and expiry.

Anyone with that link joins with:

```bash
./build/speakeasy join https://myhost.mydomain.com/api/v1/redeem/<id>
```

You can also create invites from the dashboard Admin panel once the UI can reach the controller.

## Next

- [Configuration]({{< relref "configuration" >}}) — `config.yaml` fields
- [CLI]({{< relref "cli" >}}) — `admincli` flags
- [Dashboard]({{< relref "dashboard" >}}) — Admin panel
