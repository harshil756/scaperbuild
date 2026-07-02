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
