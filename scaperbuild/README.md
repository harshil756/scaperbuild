# Homepage Scraper (Python)

Each page gets its **own folder** with separate assets — no shared WordPress paths.

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
