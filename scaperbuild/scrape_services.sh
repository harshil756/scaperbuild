#!/usr/bin/env bash
# Scrape all remaining Pest Control Services menu pages
set -e
cd "$(dirname "$0")"
source venv/bin/activate
SITE_DIR="export/7statespestcontrol.com.au"

URLS=(
  "https://7statespestcontrol.com.au/our-services/cockroach-control/"
  "https://7statespestcontrol.com.au/our-services/mosquito-pest-control/"
  "https://7statespestcontrol.com.au/our-services/fly-control/"
  "https://7statespestcontrol.com.au/our-services/fox-pest-control-in-melbourne/"
  "https://7statespestcontrol.com.au/our-services/mites-control/"
  "https://7statespestcontrol.com.au/our-services/moth-control/"
  "https://7statespestcontrol.com.au/our-services/possum-pest-control/"
  "https://7statespestcontrol.com.au/rodent-control-in-melbourne/"
  "https://7statespestcontrol.com.au/our-services/silverfish-treatment/"
  "https://7statespestcontrol.com.au/our-services/spider-control-treatment/"
  "https://7statespestcontrol.com.au/our-services/termite-pest-control/"
  "https://7statespestcontrol.com.au/wasp-removal-melbourne/"
  "https://7statespestcontrol.com.au/our-services/end-of-lease-pest-control/"
)

for url in "${URLS[@]}"; do
  echo "========== $url =========="
  python scrape_page.py "$url" --site-dir "$SITE_DIR" --wait 20000 --headless
done

python -c "
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

echo "[+] All service pages scraped."
