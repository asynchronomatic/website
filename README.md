# Speakeasy website

Public site for [asynchronomatic/speakeasy](https://github.com/asynchronomatic/speakeasy), built with [Hugo](https://gohugo.io/) (extended).

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

## Homepage content

The landing page is assembled from Markdown under `content/home/`. Templates only provide layout; copy and cards live in the files:

| Path | Role |
| --- | --- |
| `content/home/hero.md` | Hero band |
| `content/home/promise/*.md` | Three-up promise line |
| `content/home/features/*.md` | Feature cards |
| `content/home/screenshots/*.md` | Screenshot figures |
| `content/home/how-it-works/*.md` | Numbered steps |
| `content/home/clients/*.md` | Client cards (code + lists) |
| `content/home/cta.md` | Closing CTA |

Add a card by dropping another `.md` in the matching folder (`title`, `weight`, body). Section intro/eyebrow is the folder’s `_index.md`. These pages are not published at their own URLs.

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/pages.yml`) builds with Hugo extended and deploys to GitHub Pages.

Set **Settings → Pages → Source** to GitHub Actions. Default `baseURL` in `hugo.toml` is `https://asynchronomatic.github.io/SpeakeasyHugo/`. Change it if you use a custom domain.
