# ATS Resume Improvement Design

## Goal

Improve the CV’s ATS readability and position Muhammad Azra Sabila as a senior-leaning full-stack engineer with a specialization in web scraping and automation.

## Scope

Modify only `cv/index.html`:

- Preserve the existing contact, employer, location, education, publication, and language facts.
- Preserve the candidate’s current-role metrics: 1M+ tasks per day, 50% higher extraction success, 50% less manual intervention, 100+ users, and 1M+ records per day.
- Standardize titles, dates, terminology, and bullet formatting.
- Replace repeated role-specific tech-stack bullets with one Technical Skills section.
- Add no dependencies and retain the existing visual structure.

## Header and Summary

Use `Full-Stack Engineer` as the header subtitle.

Replace the summary with:

> Full-stack engineer with 5+ years of experience building scalable web applications, distributed scraping systems, browser automation, and data pipelines. Experienced with TypeScript, Go, Python, Next.js, Playwright, PostgreSQL, RabbitMQ, and Google Cloud.

## Technical Skills

Add a `Technical Skills` section between the summary and Work Experience:

- **Languages:** TypeScript, JavaScript, Python, Go (Golang), C#, PHP, SQL
- **Full-Stack Development:** Next.js, React, Redux, Tailwind CSS, Material UI, Bun, Node.js, .NET Core, Gin, Fiber, gRPC, REST APIs, Server-Sent Events (SSE)
- **Automation & Data:** Playwright, WXT, web scraping, browser automation, ETL, Windmill, Airflow, BigQuery
- **Infrastructure & Storage:** Google Cloud Platform (GCP), Docker, Kubernetes, RabbitMQ, PostgreSQL, MySQL, MongoDB, Redis

## Work Experience

Use native semantic unordered lists with standard bullets instead of emoji markers. Remove each role’s separate `Tech stack` bullet.

### Full-Stack Engineer | Magpie — Singapore

`Apr 2025 – Present`

- Architected and operated distributed e-commerce data collection systems across Shopee, TikTok, and Lazada, combining browser automation, API interception, mobile RPC workers, and regional RabbitMQ queues to process 1M+ tasks per day.
- Built resilient scraping workflows with CAPTCHA resolution, session management, retries, failure classification, and automated recovery, improving extraction success by 50% and reducing manual intervention by 50%.
- Developed secure internal, administrative, and freelancer-facing platforms with role-based access, operational dashboards, extension management, and multi-region payout workflows used by 100+ users.
- Designed ETL and orchestration pipelines using Windmill, Airflow, BigQuery, and Google Cloud Storage to validate, transform, and deliver 1M+ records per day.

### Full-Stack Developer | Bank Rakyat Indonesia — Jakarta, Indonesia

`Mar 2023 – Apr 2025`

- Designed and built Go and gRPC microservices backed by PostgreSQL and Redis for a transactional banking web application supporting 1,000+ concurrent users at launch.
- Built server-rendered Next.js and TypeScript interfaces with Tailwind CSS and Server-Sent Events (SSE).
- Implemented data-transfer encryption controls, achieving zero high- or medium-severity findings during penetration testing.
- Supported technical leadership in resource planning and task allocation, helping the team exceed 100% of its KPI target.

### Full-Stack Programmer | Agate International — Bandung, Indonesia

`Nov 2021 – Mar 2023`

- Developed .NET Core and Node.js REST and gRPC microservices for four external game projects, applying SOLID design principles.
- Built a React and TypeScript admin panel with Redux, Material UI, and Tailwind CSS for content management.
- Led a sub-team of up to two engineers, coordinating sprint planning, task assignments, and delivery.
- Developed and maintained internal NuGet and npm packages to reduce duplicated implementation across projects.

### Web Developer Intern | BIG.IO — Bandung, Indonesia

`Aug 2020 – Nov 2020`

- Built React and Material UI interfaces during a three-month software engineering internship.
- Refactored CodeIgniter 3 and PHP services backed by MySQL and delivered 10+ endpoints supporting frontend requirements.
- Translated client needs into technical requirements and Agile sprint tasks.

## Date Formatting

Use abbreviated month names and an en dash consistently throughout work experience and education. Keep publication dates unchanged because they are prose metadata rather than employment ranges.

## Verification

- Parse the document with Python’s standard-library HTML parser.
- Confirm there are four work items and one Technical Skills section.
- Confirm all emoji bullet markers and role-specific `Tech stack:` labels are gone.
- Confirm the candidate’s five current-role metric values remain present.
- Review the Git diff to ensure the candidate’s pre-existing metric edits are incorporated rather than overwritten.
