# ATS Resume Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve ATS readability and revise the CV toward senior full-stack and web-automation roles without changing factual background information.

**Architecture:** Apply one content-and-markup update to the existing static HTML file. Consolidate technologies into one skills section, use semantic unordered lists, and verify the rendered source with Python’s standard-library HTML parser and targeted text assertions.

**Tech Stack:** HTML, Tailwind CSS utility classes, Python standard library, Git

## Global Constraints

- Preserve contact, employer, location, education, publication, and language facts.
- Preserve all candidate-entered current-role metrics exactly.
- Add no dependencies or new runtime behavior.
- Modify only `cv/index.html` for the implementation.
- Follow the exact copy in `docs/superpowers/specs/2026-09-04-ats-resume-improvement-design.md`.

---

### Task 1: Apply and Verify the ATS Resume Revision

**Files:**
- Modify: `cv/index.html`
- Reference: `docs/superpowers/specs/2026-09-04-ats-resume-improvement-design.md`

**Interfaces:**
- Consumes: Existing static CV HTML and the candidate’s uncommitted metric replacements.
- Produces: One parseable ATS-oriented CV page with a summary, Technical Skills section, and four standardized work entries.

- [ ] **Step 1: Verify the candidate’s metric edits before changing the file**

Run:

```bash
git diff -- cv/index.html
```

Expected: exactly four changed lines in the Magpie entry containing the candidate’s values of 1M+ tasks, 50% extraction improvement, 50% manual-intervention reduction, 100+ users, and 1M+ records. Stop if unrelated pre-existing changes are present.

- [ ] **Step 2: Apply the approved summary and header copy**

In `cv/index.html`, change the header subtitle to:

```html
<h2 class="text-2xl font-light text-gray-800">Full-Stack Engineer</h2>
```

Replace the summary paragraph with:

```html
<p>Full-stack engineer with 5+ years of experience building scalable web applications, distributed scraping systems, browser automation, and data pipelines. Experienced with TypeScript, Go, Python, Next.js, Playwright, PostgreSQL, RabbitMQ, and Google Cloud.</p>
```

- [ ] **Step 3: Add the Technical Skills section**

Insert the section immediately after the summary block and before Work Experience, using the existing heading style:

```html
<section class="relative mb-4">
    <header class="mb-2 border-b border-gray-300">
        <h2 class="inline-block pb-1 pr-4 text-sm font-semibold text-orange-500 uppercase bg-white">Technical Skills</h2>
    </header>
    <div class="space-y-1">
        <p><span class="font-semibold">Languages:</span> TypeScript, JavaScript, Python, Go (Golang), C#, PHP, SQL</p>
        <p><span class="font-semibold">Frontend:</span> Next.js, React, Redux, Tailwind CSS, Material UI</p>
        <p><span class="font-semibold">Backend:</span> Bun, Node.js, .NET Core, Gin, Fiber, gRPC, REST APIs, Server-Sent Events (SSE)</p>
        <p><span class="font-semibold">Automation &amp; Data:</span> Playwright, WXT, web scraping, browser automation, ETL, Windmill, Airflow, BigQuery</p>
        <p><span class="font-semibold">Infrastructure &amp; Storage:</span> Google Cloud Platform (GCP), Docker, Kubernetes, RabbitMQ, PostgreSQL, MySQL, MongoDB, Redis</p>
    </div>
</section>
```

- [ ] **Step 4: Standardize work titles, dates, semantic bullets, and copy**

Remove every emoji span and role-specific `Tech stack:` item. Preserve each role’s existing section wrapper and replace its title, dates, and list with the corresponding content below:

```html
<div class="inline font-semibold">Full-Stack Engineer</div>
<span class="startDate">Apr 2025</span>
<span class="endDate">– Present</span>
<ul class="pl-5 space-y-2 list-disc">
    <li>Architected and operated distributed e-commerce data collection systems across Shopee, TikTok, and Lazada, combining browser automation, API interception, mobile RPC workers, and regional RabbitMQ queues to process 1M+ tasks per day.</li>
    <li>Built resilient scraping workflows with CAPTCHA resolution, session management, retries, failure classification, and automated recovery, improving extraction success by 50% and reducing manual intervention by 50%.</li>
    <li>Developed secure internal, administrative, and freelancer-facing platforms with role-based access, operational dashboards, extension management, and multi-region payout workflows used by 100+ users.</li>
    <li>Designed ETL and orchestration pipelines using Windmill, Airflow, BigQuery, and Google Cloud Storage to validate, transform, and deliver 1M+ records per day.</li>
</ul>

<div class="inline font-semibold">Full-Stack Developer</div>
<span class="startDate">Mar 2023</span>
<span class="endDate">– Apr 2025</span>
<ul class="pl-5 space-y-2 list-disc">
    <li>Designed and built Go and gRPC microservices backed by PostgreSQL and Redis for a transactional banking web application supporting 1,000+ concurrent users at launch.</li>
    <li>Built server-rendered Next.js and TypeScript interfaces with Tailwind CSS and Server-Sent Events (SSE).</li>
    <li>Implemented data-transfer encryption controls, achieving zero high- or medium-severity findings during penetration testing.</li>
    <li>Supported technical leadership in resource planning and task allocation, helping the team exceed 100% of its KPI target.</li>
</ul>

<div class="inline font-semibold">Full-Stack Programmer</div>
<span class="startDate">Nov 2021</span>
<span class="endDate">– Mar 2023</span>
<ul class="pl-5 space-y-2 list-disc">
    <li>Developed .NET Core and Node.js REST and gRPC microservices for four external game projects, applying SOLID design principles.</li>
    <li>Built a React and TypeScript admin panel with Redux, Material UI, and Tailwind CSS for content management.</li>
    <li>Led a sub-team of up to two engineers, coordinating sprint planning, task assignments, and delivery.</li>
    <li>Developed and maintained internal NuGet and npm packages to reduce duplicated implementation across projects.</li>
</ul>

<div class="inline font-semibold">Web Developer Intern</div>
<span class="startDate">Aug 2020</span>
<span class="endDate">– Nov 2020</span>
<ul class="pl-5 space-y-2 list-disc">
    <li>Built React and Material UI interfaces during a three-month software engineering internship.</li>
    <li>Refactored CodeIgniter 3 and PHP services backed by MySQL and delivered 10+ endpoints supporting frontend requirements.</li>
    <li>Translated client needs into technical requirements and Agile sprint tasks.</li>
</ul>
```

Also standardize the education date while preserving its existing two-span structure:

```html
<span class="startDate">2017</span>
<span class="endDate">– 2021</span>
```

- [ ] **Step 5: Run the complete structural and content verification**

Run:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

html = Path('cv/index.html').read_text()
HTMLParser().feed(html)
assert html.count('class="mb-4 work-item"') == 4
assert html.count('>Technical Skills</h2>') == 1
assert '🔸' not in html
assert 'Tech stack:' not in html
assert html.count('class="pl-5 space-y-2 list-disc"') == 4
for text in (
    'Full-stack engineer with 5+ years of experience',
    '1M+ tasks per day',
    'improving extraction success by 50%',
    'reducing manual intervention by 50%',
    'used by 100+ users',
    'deliver 1M+ records per day',
    'supporting 1,000+ concurrent users at launch',
    'zero high- or medium-severity findings',
    'Go (Golang)',
    'Google Cloud Platform (GCP)',
):
    assert text in html, text
print('PASS: ATS structure, copy, and metrics verified')
PY
```

Expected:

```text
PASS: ATS structure, copy, and metrics verified
```

- [ ] **Step 6: Review the implementation diff**

Run:

```bash
git diff --check && git diff --stat && git diff -- cv/index.html
```

Expected: no whitespace errors; only `cv/index.html` is modified in the implementation diff; all changes match the approved design spec.

- [ ] **Step 7: Commit the implementation**

```bash
git add cv/index.html
git commit -m "docs: improve CV for ATS screening"
```
