# Asynchromatic website

Public site for [Asynchromatic](https://github.com/asynchronomatic), built with [Hugo](https://gohugo.io/) (extended). Speakeasy is the first product and lives at `/speakeasy/`.

## Run locally

Hugo extended 0.152+ (this repo is tested with 0.152.2):

```bash
hugo server
```

Open the URL Hugo prints. With the default `baseURL` that is `http://localhost:1313/SpeakeasyHugo/`.

## Build

```bash
hugo --minify
```

Output is `public/`.

## House homepage

The landing page (`/`) is assembled from Markdown under `content/house/`. Templates only provide layout; copy and cards live in the files:

| Path | Role |
| --- | --- |
| `content/house/hero.md` | House hero band |
| `content/house/vision.md` | Brand vision |
| `content/house/products/*.md` | Product cards |
| `content/house/cta.md` | Closing CTA |

Add a card by dropping another `.md` in the matching folder (`title`, `weight`, body). Section intro/eyebrow is the folder’s `_index.md`. These pages are not published at their own URLs.

## Footer

Site-wide footer copy and links live under `content/footer/` and are not published as pages.

| Path | Role |
| --- | --- |
| `content/footer/_index.md` | Brand name, tags, and the MIT / repo line |
| `content/footer/*.md` | Footer links (`title`, `weight`, `href`) |

## Speakeasy homepage

The product landing (`/speakeasy/`) is assembled the same way from `content/speakeasy/home/`:

| Path | Role |
| --- | --- |
| `content/speakeasy/home/hero.md` | Hero band |
| `content/speakeasy/home/promise/*.md` | Three-up promise line |
| `content/speakeasy/home/features/*.md` | Feature cards |
| `content/speakeasy/home/screenshots/*.md` | Screenshot figures |
| `content/speakeasy/home/how-it-works/*.md` | Numbered steps |
| `content/speakeasy/home/clients/*.md` | Client cards (code + lists) |
| `content/speakeasy/home/cta.md` | Closing CTA |

Docs live under `content/speakeasy/docs/` and publish at `/speakeasy/docs/`. Old `/docs/` URLs are aliases.

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/pages.yml`) builds with Hugo extended and deploys to GitHub Pages.

Set **Settings → Pages → Source** to GitHub Actions. Default `baseURL` in `hugo.toml` is `https://asynchronomatic.github.io/SpeakeasyHugo/`. Change it if you use a custom domain.
