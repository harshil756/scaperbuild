# Scaperbuild

Monorepo with three separate folders:

| Folder | Description |
|--------|-------------|
| [`frontend/`](frontend/) | React SPA (Vite) — public website |
| [`backend/`](backend/) | Laravel API + Filament CMS admin |
| [`scraped/`](scraped/) | Python website scraper, exports, and Scraper Studio |

## Quick start

### Frontend
```bash
cd frontend && npm install && npm run dev
```

### Backend
```bash
cd backend && composer install && php artisan serve
```

### Scraper
```bash
cd scraped && source venv/bin/activate && python orchestrate.py https://yoursite.com
```

See each folder's README for full setup instructions.

## CMS sync (root)

```bash
npm run cms:sync
```

Runs backend CMS extract/copy/seed scripts (see root `package.json`).

---

## Homepage Scraper (Python)

Monorepo with three separate folders:

### Output layout

## Quick start

### Frontend
```bash
cd frontend && npm install && npm run dev
```

### Scrape

```bash
npm run cms:sync
```

### View

```bash
python serve.py export/7statespestcontrol.com.au
```

- Home: `http://127.0.0.1:8765/home/home.html`
- About: `http://127.0.0.1:8765/about-us/about-us.html`
