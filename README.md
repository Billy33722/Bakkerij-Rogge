# Bakkerij Rogge (Eine) Website

Official landing page web application for **Bakkerij Rogge**, located in Eine (Oudenaarde, Belgium).

## Features
- **Authentic Belgian Bakery Design**: Warm color scheme, custom serif typography, wheat flourishes, and responsive layout.
- **Multilingual Support (NL / EN)**: Native Dutch content with instant English language switcher.
- **Interactive Menu Drawer**: Detailed categories for cakes, artisan bread, quiches, and pizza.
- **Google Reviews Integration**: Real ratings badge (4.3 ★ / 72 reviews) and quote cards.
- **Location & Google Maps**: Embedded interactive map with direct route navigation link.
- **SEO & Social Cards**: Pre-configured OpenGraph metadata & Schema.org `Bakery` microdata.

## Project Structure
```text
├── assets/
│   ├── hero_cake_bread.png
│   ├── storefront.png
│   ├── strawberry_cake.png
│   ├── artisan_bread.png
│   └── savory_quiche.png
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── .gitignore
└── README.md
```

## How to Deploy to Vercel

### Option 1: Via GitHub (Recommended)
1. Initialize Git and commit files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Bakkerij Rogge website"
   ```
2. Create a new repository on GitHub and push code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bakkerij-rogge.git
   git branch -M main
   git push -u origin main
   ```
3. Log in to [Vercel Dashboard](https://vercel.com/dashboard) -> Click **"Add New Project"** -> Import your GitHub repository.
4. Framework Preset: Select **"Other"** or **"Plain HTML/JS"**.
5. Click **"Deploy"**. Vercel will build and host your site with automatic HTTPS SSL certificate.

### Option 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
