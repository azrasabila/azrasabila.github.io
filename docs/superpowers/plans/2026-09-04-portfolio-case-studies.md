# Portfolio Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the duplicated portfolio placeholders with four accurate text-first case studies aligned with senior full-stack and web-automation roles.

**Architecture:** Keep the portfolio as one static HTML page using the existing Tailwind CDN. Replace image cards with semantic `<article>` cards, link only public work, and verify structure and content with Python’s standard-library HTML parser.

**Tech Stack:** HTML, Tailwind CSS utility classes, Python standard library, Git

## Global Constraints

- Modify only `portfolio/index.html` for implementation.
- Add no dependencies, scripts, custom CSS, or image assets.
- Preserve professional metrics exactly: 1M+ tasks per day, 50% extraction improvement, 50% manual-intervention reduction, and 100+ users.
- Do not name the employer or link private source code in professional case studies.
- Follow `docs/superpowers/specs/2026-09-04-portfolio-case-studies-design.md` exactly.

---

### Task 1: Replace Placeholder Portfolio Content

**Files:**
- Modify: `portfolio/index.html`
- Reference: `docs/superpowers/specs/2026-09-04-portfolio-case-studies-design.md`

**Interfaces:**
- Consumes: Existing static portfolio page and public GitHub/publication URLs.
- Produces: One responsive portfolio page with four semantic case-study articles.

- [ ] **Step 1: Verify the starting state**

Run:

```bash
git diff --exit-code -- portfolio/index.html
grep -c 'Ular Tangga Game Prototype' portfolio/index.html
```

Expected: no Git diff and a count of `4` placeholder titles.

- [ ] **Step 2: Update metadata, shared header content, and paths**

Apply these exact values:

```html
<meta name="description" content="Selected full-stack engineering, web scraping, browser automation, and data platform work by Muhammad Azra Sabila.">
<meta name="keywords" content="Muhammad Azra Sabila, Full-Stack Engineer, Web Scraping, Browser Automation, Distributed Systems, Portfolio">
<meta property="og:title" content="Portfolio | Muhammad Azra Sabila">
<meta property="og:description" content="Selected full-stack engineering, web scraping, browser automation, and data platform work by Muhammad Azra Sabila.">
<title>Portfolio | Muhammad Azra Sabila</title>
<link rel="stylesheet" href="../styles.css">
```

Use this subtitle and add this navigation after the profile block:

```html
<h2 class="text-2xl font-light text-gray-800">Full-Stack Engineer</h2>
<nav aria-label="Primary" class="flex gap-4 mt-2">
    <a href="../" class="text-blue-500 hover:text-blue-800 hover:underline">Home</a>
    <a href="../cv/" class="text-blue-500 hover:text-blue-800 hover:underline">CV</a>
</nav>
```

- [ ] **Step 3: Replace the old summary and portfolio section**

Use this introduction:

```html
<section class="p-5 mt-4 mb-4 bg-blue-50">
    <p>Selected work across distributed automation, full-stack product development, and data systems. Professional projects are anonymized to protect confidential information.</p>
</section>
```

Use the heading `Portfolio` and replace the duplicated cards with this grid:

```html
<section class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 portfolio-items">
    <article class="p-5 bg-white border border-gray-200">
        <div class="flex items-center justify-between gap-3 text-sm text-gray-600">
            <span class="font-semibold">Professional Case Study</span>
            <span>2025 – Present</span>
        </div>
        <h3 class="mt-2 text-lg font-semibold text-gray-800">Distributed E-Commerce Data Platform</h3>
        <p class="mt-2">Architected a distributed collection platform spanning Shopee, TikTok, and Lazada. Combined browser API interception, mobile RPC workers, CAPTCHA resolution, regional RabbitMQ queues, and automated recovery to process 1M+ tasks per day, improve extraction success by 50%, and reduce manual intervention by 50%.</p>
        <p class="mt-3 text-sm"><span class="font-semibold">Technologies:</span> TypeScript, Python, Playwright, WXT, RabbitMQ, BigQuery, Docker, Google Cloud</p>
    </article>

    <article class="p-5 bg-white border border-gray-200">
        <div class="flex items-center justify-between gap-3 text-sm text-gray-600">
            <span class="font-semibold">Professional Case Study</span>
            <span>2025 – Present</span>
        </div>
        <h3 class="mt-2 text-lg font-semibold text-gray-800">Operations &amp; Freelancer Platform</h3>
        <p class="mt-2">Developed secure internal, administrative, and freelancer-facing workflows with role-based access, operational dashboards, extension management, and multi-region payouts for 100+ users.</p>
        <p class="mt-3 text-sm"><span class="font-semibold">Technologies:</span> Next.js, TypeScript, Bun, Python, PostgreSQL, Google Cloud</p>
    </article>

    <article class="p-5 bg-white border border-gray-200">
        <div class="flex items-center justify-between gap-3 text-sm text-gray-600">
            <span class="font-semibold">Open-Source Project</span>
            <span>2025</span>
        </div>
        <h3 class="mt-2 text-lg font-semibold text-gray-800">Library Management System</h3>
        <p class="mt-2">Built a full-stack library platform with JWT authentication, book and member management, lending workflows, search and filtering, and analytics dashboards.</p>
        <p class="mt-3 text-sm"><span class="font-semibold">Technologies:</span> Next.js, TypeScript, Fastify, Prisma, PostgreSQL, Redis, Docker</p>
        <a href="https://github.com/azrasabila/library-fullstack" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 text-blue-500 hover:text-blue-800 hover:underline">View source on GitHub</a>
    </article>

    <article class="p-5 bg-white border border-gray-200">
        <div class="flex items-center justify-between gap-3 text-sm text-gray-600">
            <span class="font-semibold">Research Project</span>
            <span>2021</span>
        </div>
        <h3 class="mt-2 text-lg font-semibold text-gray-800">Food Price Forecasting Platform</h3>
        <p class="mt-2">Developed a Django application that applies Prophet forecasting to food-price data for Bandung, connecting an academic forecasting model to an accessible web interface.</p>
        <p class="mt-3 text-sm"><span class="font-semibold">Technologies:</span> Python, Django, Prophet, MySQL</p>
        <div class="flex flex-wrap gap-4 mt-3">
            <a href="https://github.com/azrasabila/prediksi-harga-pangan" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-800 hover:underline">View source on GitHub</a>
            <a href="https://jurnal.polban.ac.id/proceeding/article/view/2777" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-800 hover:underline">Read publication</a>
        </div>
    </article>
</section>
```

- [ ] **Step 4: Verify structure, content, links, and removed placeholders**

Run:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

html = Path('portfolio/index.html').read_text()
HTMLParser().feed(html)
assert html.count('<article ') == 4
for text in (
    'Distributed E-Commerce Data Platform',
    'Operations &amp; Freelancer Platform',
    'Library Management System',
    'Food Price Forecasting Platform',
    '1M+ tasks per day',
    'improve extraction success by 50%',
    'reduce manual intervention by 50%',
    '100+ users',
    'https://github.com/azrasabila/library-fullstack',
    'https://github.com/azrasabila/prediksi-harga-pangan',
    'https://jurnal.polban.ac.id/proceeding/article/view/2777',
    'href="../"',
    'href="../cv/"',
):
    assert text in html, text
assert 'Ular Tangga' not in html
assert '<img ' not in html
assert 'Portofolio' not in html
assert 'href="styles.css"' not in html
print('PASS: four portfolio case studies and public links verified')
PY
```

Expected:

```text
PASS: four portfolio case studies and public links verified
```

- [ ] **Step 5: Review and commit the scoped diff**

Run:

```bash
git diff --check && git diff --stat && git diff -- portfolio/index.html
```

Expected: no whitespace errors; the implementation diff changes only `portfolio/index.html`; the page contains exactly the approved content.

Commit:

```bash
git add portfolio/index.html
git commit -m "feat: add portfolio case studies"
```
