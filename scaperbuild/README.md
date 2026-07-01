# Homepage Scraper (Python)

Each page gets its **own folder** with separate assets — no shared WordPress paths.

## Quick start — full site → React SPA (one command)

```bash
source venv/bin/activate
pip install -r requirements.txt
playwright install chromium
python orchestrate.py https://yoursite.com --dev
```

This will:
1. Scrape the **entire website** (menus, footer, sitemap, all pages)
2. Auto-convert to **React SPA** with all links working
3. Start the dev server

## Scraper Studio (web UI)

```bash
python scraper-studio/run.py
```

Open **http://127.0.0.1:8080** — paste URL, check "Auto-convert to React SPA", scrape.

## Optional AI analysis

Set `OPENAI_API_KEY` for LLM-powered page grouping and nav hierarchy:

```bash
export OPENAI_API_KEY=sk-...
python orchestrate.py https://yoursite.com
```

Works without API key too (uses rule-based analysis).

## Output layout

```
export/7statespestcontrol.com.au/
  index.html              ← redirects to home/home.html
  home/
    home.html
    assets/
      css/
      js/
      images/
      fonts/
  about-us/
    about-us.html
    assets/
      css/
      js/
      images/
      fonts/
  site.json
  logs/
```

## Scrape

```bash
source venv/bin/activate
python pipeline.py --headed --wait 25000
python scrape_page.py https://7statespestcontrol.com.au/about-us/ \
  --site-dir export/7statespestcontrol.com.au --headed
```

## View

```bash
python serve.py export/7statespestcontrol.com.au
```

- Home: `http://127.0.0.1:8765/home/home.html`
- About: `http://127.0.0.1:8765/about-us/about-us.html`
