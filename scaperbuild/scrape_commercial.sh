#!/usr/bin/env bash
# Scrape Commercial Pest Control menu pages
set -e
cd "$(dirname "$0")"
source venv/bin/activate
SITE_DIR="export/7statespestcontrol.com.au"

URLS=(
  "https://7statespestcontrol.com.au/office-pest-control/"
  "https://7statespestcontrol.com.au/restaurant-cafe-pest-control/"
  "https://7statespestcontrol.com.au/school-and-hospitality-facility-pest-control/"
  "https://7statespestcontrol.com.au/warehouse-and-factory-pest-control-services-melbourne/"
)

for url in "${URLS[@]}"; do
  echo "========== $url =========="
  python3 scrape_page.py "$url" --site-dir "$SITE_DIR" --wait 20000 --headless
done

python3 -c "
from pathlib import Path
from scraper.postprocess import rewrite_internal_page_links
from scraper.storage import load_manifest

site = Path('$SITE_DIR')
manifest = load_manifest(site)
for url, info in manifest['pages'].items():
    html_path = site / info['html']
    if html_path.exists():
        text = rewrite_internal_page_links(
            html_path.read_text(encoding='utf-8'), url, manifest, html_path
        )
        html_path.write_text(text, encoding='utf-8')
print('[+] Updated internal links on all pages')
"

echo "[+] All commercial pest control pages scraped."
