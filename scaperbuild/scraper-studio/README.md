# Scraper Studio

Paste any website URL — scrape HTML + all assets, detect tech (WordPress, Elementor, etc.), convert to React/Next.js, download the project.

Uses the same Playwright scraper engine as the 7states project.

## Setup (one time)

From the **parent** folder (`scaperbuild`):

```bash
source venv/bin/activate   # or create: python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
playwright install chromium
pip install -r scraper-studio/requirements.txt
```

## Run

```bash
python scraper-studio/run.py
```

Open **http://127.0.0.1:8080**

## How it works

1. **Paste URL** — e.g. `https://yoursite.com`
2. **Scrape** — captures rendered HTML, downloads CSS, JS, images, fonts, videos into folders
3. **Detect** — identifies WordPress, Elementor, WooCommerce, Shopify, etc.
4. **Convert** — pick Static HTML, React+Vite, or Next.js
5. **Download** — get a `.zip` of the scraped mirror or converted project

## Output layout (scraped)

```
scraper-studio/projects/<job-id>/scraped/example.com/
  home/home.html
  home/assets/css/
  home/assets/js/
  home/assets/images/
  home/assets/fonts/
  site.json
```

## Converted projects

- **Static HTML** — exact mirror, run with `python serve.py <folder>`
- **React + Vite** — `npm install && npm run dev`
- **Next.js** — `npm install && npm run dev` (static export with `npm run build`)

## CLI (still works)

You can also scrape from the command line without the UI:

```bash
python scrape.py https://example.com --headed
python serve.py export/example.com
```
