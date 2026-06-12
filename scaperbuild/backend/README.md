# 7 States Pest Control — Laravel Backend

Laravel 13 API/admin backend with **Filament v5** admin panel.

## Stack

- PHP 8.3+
- Laravel 13
- MySQL 8 (`7state` database)
- Filament 5.6 (admin at `/admin`)

## Database

| Setting  | Value               |
|----------|---------------------|
| Database | `7state`            |
| Username | `myuser`            |
| Password | `StrongPassword123` |
| Host     | `127.0.0.1`         |
| Port     | `3306`              |

Create database (if needed):

```sql
CREATE DATABASE `7state` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'StrongPassword123';
GRANT ALL PRIVILEGES ON `7state`.* TO 'myuser'@'localhost';
FLUSH PRIVILEGES;
```

## Setup

```bash
cd backend
composer install
cp .env.example .env   # already configured for MySQL
php artisan key:generate
php artisan migrate
npm install && npm run build
```

## Run

**Terminal 1 — Laravel (API + admin):**

```bash
php artisan serve
```

**Terminal 2 — React frontend:**

```bash
cd ../frontend && npm run dev
```

- Filament admin: http://127.0.0.1:8000/admin
- Frontend: http://localhost:5173 (proxies `/api` and `/storage` to Laravel)
- Home CMS API: http://127.0.0.1:8000/api/pages/home

## Admin login

| Field    | Value                            |
|----------|----------------------------------|
| Email    | `admin@7statespestcontrol.com.au` |
| Password | `StrongPassword123`              |

Create another admin:

```bash
php artisan make:filament-user
```

## CMS — Home page (Filament)

Home page content is stored in `pages` + `page_blocks` and managed in Filament under **Content → Pages**.

### First-time CMS setup

Extract content/images from the React frontend, copy assets, migrate, and seed:

From project root:

```bash
npm run cms:extract
npm run cms:copy
cd backend && php artisan migrate && php artisan storage:link && php artisan db:seed --class=HomePageSeeder
```

Or from `backend/`:

```bash
npm run cms:extract
npm run cms:copy
php artisan migrate
php artisan storage:link
npm run cms:seed
```

### What gets seeded

- **56 content blocks** — hero text, service cards, about/why-choose HTML, FAQ, blog previews, process gallery, buttons
- **25 images** — content images + CSS background images (hero, service cards, about, FAQ, etc.)
- SEO title/description from `frontend/src/config/pageSeoExtra.js`

### Managing content

1. Log in at http://127.0.0.1:8000/admin
2. Open **Pages → Home → Edit**
3. Use the **Content blocks** tab to edit text, HTML, images, and backgrounds by section

Block types: `text`, `html`, `image`, `background`, `link`, `json` (service cards, FAQ items, blog posts).

### API (frontend)

```
GET /api/pages/home
```

Returns page SEO fields + structured `content` (text, HTML, image URLs, repeaters). Images are served from `/storage/cms/home/...`.

### Re-sync from frontend

After changing `HomePage.jsx`, re-run extract + copy + seeder to refresh the database from the live frontend copy.
