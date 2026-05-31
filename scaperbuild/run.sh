#!/usr/bin/env bash
# Homepage scraper — ./run.sh https://yoursite.com --open
set -e
cd "$(dirname "$0")"
if [[ ! -d venv ]]; then
  python3 -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt -q
  playwright install chromium
else
  source venv/bin/activate
fi
python scrape.py "$@"
