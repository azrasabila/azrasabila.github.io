# Portfolio Case Studies Design

## Goal

Replace the duplicated placeholder portfolio cards with four accurate, role-aligned case studies that support senior full-stack and web-scraping/automation applications.

## Scope

Modify only `portfolio/index.html`:

- Keep the site’s existing typography, width, color palette, and Tailwind CDN approach.
- Use text-first cards without screenshots or new assets.
- Add no dependencies or custom runtime behavior.
- Anonymize private professional projects and omit source links for them.
- Link public projects to their GitHub repositories.
- Preserve the same approved professional metrics used in the CV.

## Metadata and Header

- Page title: `Portfolio | Muhammad Azra Sabila`
- Description: `Selected full-stack engineering, web scraping, browser automation, and data platform work by Muhammad Azra Sabila.`
- Keywords: `Muhammad Azra Sabila, Full-Stack Engineer, Web Scraping, Browser Automation, Distributed Systems, Portfolio`
- Header subtitle: `Full-Stack Engineer`
- Stylesheet path: `../styles.css`
- Add navigation links to `../` (Home) and `../cv/` (CV).

## Introduction

Use this copy above the cards:

> Selected work across distributed automation, full-stack product development, and data systems. Professional projects are anonymized to protect confidential information.

## Card Layout

Use a responsive one-column/two-column grid. Each card is an `<article>` with:

- project type and year;
- project title;
- concise description;
- plain-text technology list;
- links only when the project or related publication is public.

Do not use image placeholders.

## Exact Card Copy

### Distributed E-Commerce Data Platform

- Type: `Professional Case Study`
- Date: `2025 – Present`
- Description: `Architected a distributed collection platform spanning Shopee, TikTok, and Lazada. Combined browser API interception, mobile RPC workers, CAPTCHA resolution, regional RabbitMQ queues, and automated recovery to process 1M+ tasks per day, improve extraction success by 50%, and reduce manual intervention by 50%.`
- Technologies: `TypeScript, Python, Playwright, WXT, RabbitMQ, BigQuery, Docker, Google Cloud`
- Link: none

### Operations & Freelancer Platform

- Type: `Professional Case Study`
- Date: `2025 – Present`
- Description: `Developed secure internal, administrative, and freelancer-facing workflows with role-based access, operational dashboards, extension management, and multi-region payouts for 100+ users.`
- Technologies: `Next.js, TypeScript, Bun, Python, PostgreSQL, Google Cloud`
- Link: none

### Library Management System

- Type: `Open-Source Project`
- Date: `2025`
- Description: `Built a full-stack library platform with JWT authentication, book and member management, lending workflows, search and filtering, and analytics dashboards.`
- Technologies: `Next.js, TypeScript, Fastify, Prisma, PostgreSQL, Redis, Docker`
- Link label: `View source on GitHub`
- Link URL: `https://github.com/azrasabila/library-fullstack`

### Food Price Forecasting Platform

- Type: `Research Project`
- Date: `2021`
- Description: `Developed a Django application that applies Prophet forecasting to food-price data for Bandung, connecting an academic forecasting model to an accessible web interface.`
- Technologies: `Python, Django, Prophet, MySQL`
- Links:
  - `View source on GitHub` → `https://github.com/azrasabila/prediksi-harga-pangan`
  - `Read publication` → `https://jurnal.polban.ac.id/proceeding/article/view/2777`

## Accessibility and Link Behavior

- Use semantic headings and `<article>` elements.
- Keep links descriptive and underlined on hover.
- External project links open in a new tab and include `rel="noopener noreferrer"`.
- Do not rely on color alone to identify project type or links.

## Verification

- Parse the page with Python’s standard-library HTML parser.
- Confirm exactly four portfolio `<article>` elements.
- Confirm all four titles and all approved metrics are present.
- Confirm the old Ular Tangga placeholder and image cards are absent.
- Confirm both public GitHub URLs and the publication URL are present.
- Confirm the Home and CV navigation links use correct paths.
